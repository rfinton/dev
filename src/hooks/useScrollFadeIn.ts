import { useEffect } from "react";

interface ScrollFadeInOptions {
	stepDelay?: number; // Milliseconds between stagger animation [default: 50]
	className?: string; // Class name to add [default: "fadein"]
}

export function useScrollFadeIn(selector: string, options: ScrollFadeInOptions = {}) {
	const { stepDelay = 50, className = "fadein" } = options;

	useEffect(() => {
		let delay = stepDelay;

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add(className)
					}, delay)
					delay += stepDelay

					// Stop observing once animated so it doesn't re-trigger
					observer.unobserve(entry.target)
				}
			})
		})

		const elements = document.querySelectorAll(selector)
		elements.forEach(el => observer.observe(el))

		return () => {
			observer.disconnect()
		}
	}, [selector, stepDelay, className])
}