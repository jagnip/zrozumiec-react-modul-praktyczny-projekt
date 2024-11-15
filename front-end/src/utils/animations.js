export const easings = {
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
  };

  export function textRevealMotion(delay) {
    return {
        initial: {y: 100, opacity: 0},
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay, duration: 0.8, ease: easings.easeOutQuart
            }
        }

    }
  }