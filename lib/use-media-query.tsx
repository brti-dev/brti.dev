import { useState, useEffect } from 'react'

/**
 * Hook to check `window` for a particular media query. Use to conditionally render components
 * instead of CSS.
 *
 * @param {string} query A media query
 *
 * @returns {boolean} True if the query conditions are present, false otherwise
 * @example
 * function App() {
 *   const isScreenMobile = useMediaQuery('(min-width: 800px)')
 *   return isScreenMobile ? <SmallComponent /> : <LargeComponent />
 * }
 */
function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = (e) => {
            setMatches(e.matches)
        }
        // Not 100% sure about the following
        media.addEventListener('change', listener)
        return () => media.removeEventListener('change', listener)
    }, [matches, query])

    return matches
}

export default useMediaQuery
