Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {
      /* empty */
    },
    removeEventListener: () => {
      /* empty */
    },
    addListener: () => {
      /* empty */
    }, // ancien API (compat PrimeNG / Material)
    removeListener: () => {
      /* empty */
    },
    dispatchEvent: () => false,
  }),
});
