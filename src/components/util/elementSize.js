import React, { useState, useEffect } from "react"

// Hook

// export const [windowSize, setElementSize] = useState({
//   width: undefined,
//   height: undefined,
// });

export function useElementSize(elementId) {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [elementSize, setElementSize] = useState({
    undefined,
  })

  useEffect(() => {
    const selectedElement = document.getElementById(elementId)
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setElementSize(
        selectedElement.getBoundingClientRect()
        // height: selectedElement.clientHeight,
      )
    }

    // Add event listener
    selectedElement.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => selectedElement.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return elementSize
}
