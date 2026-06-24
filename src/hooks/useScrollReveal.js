import { useEffect, useRef } from "react";

const defaultOptions = { threshold: 0.1, rootMargin: "0px 0px -60px 0px" };

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

/**
 * Toggles class "in" when the element enters/leaves the viewport.
 * Re-animates on scroll up and scroll down.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const { repeat = true, ...obsOptions } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
        } else if (repeat) {
          el.classList.remove("in");
        }
      },
      { ...defaultOptions, ...obsOptions }
    );

    observer.observe(el);

    if (isInViewport(el)) {
      el.classList.add("in");
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Stagger-reveals children when the container enters the viewport.
 * Removes animations when scrolling away so they replay on return.
 */
export function useStaggerReveal(childClass = "sr-child", options = {}) {
  const ref = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const clearPending = () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };

    const setChildren = (visible) => {
      const children = container.querySelectorAll(`.${childClass}`);
      if (visible) {
        clearPending();
        children.forEach((child, i) => {
          const delay = i * (child.classList.contains("sr-bento") ? 110 : 80);
          const t = setTimeout(() => child.classList.add("in"), delay);
          timeoutsRef.current.push(t);
        });
      } else {
        clearPending();
        children.forEach((child) => child.classList.remove("in"));
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => setChildren(entry.isIntersecting),
      { ...defaultOptions, ...options }
    );

    observer.observe(container);

    if (isInViewport(container)) {
      setChildren(true);
    }

    return () => {
      clearPending();
      observer.disconnect();
    };
  }, []);

  return ref;
}
