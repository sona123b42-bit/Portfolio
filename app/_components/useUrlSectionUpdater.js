"use client";
import { useEffect } from "react";

export default function useUrlSectionUpdater(sectionIds) {
  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            // If at top (hero), clear the URL
            if (id === "hero") {
              history.replaceState(null, "", "/");
            } else {
              history.replaceState(null, "", `/#${id}`);
            }
          }
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
}
