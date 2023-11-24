// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { CSSProperties } from "../node_modules/@types/react"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Copy() {
    return (
        <button
            style={styled_button}
            onClick={() =>
                navigator.clipboard.writeText(
                    document.querySelector("#newsletter").outerHTML
                )
            }
        >
            Copy HTML
        </button>
    )
}

const styled_button: CSSProperties = {
    border: "none",
    position: "fixed",
    backgroundColor: "#242424",
    borderRadius: "8px",
    fontSize: "24px",
    paddingBlock: "12px",
    paddingInline: "24px",
}

// Styles are written in object syntax
// https://react.dev/reference/react-dom/components/common#usage
