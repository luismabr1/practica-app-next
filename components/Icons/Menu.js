import * as React from "react"

function Menu(props) {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path d="M3 11h26c1.654 0 3-1.346 3-3s-1.346-3-3-3H3C1.346 5 0 6.346 0 8s1.346 3 3 3zm0-4h26a1.001 1.001 0 010 2H3a1 1 0 010-2zm26 6H3c-1.654 0-3 1.346-3 3s1.346 3 3 3h26c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4H3a1 1 0 010-2h26a1 1 0 010 2zm0 4H3c-1.654 0-3 1.346-3 3s1.346 3 3 3h26c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4H3a1 1 0 010-2h26a1 1 0 010 2z" />
    </svg>
  )
}

export default Menu