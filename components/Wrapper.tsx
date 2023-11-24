// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Wrapper({ children }) {
    return (
        <table
            cellSpacing="0"
            cellPadding="0"
            align="center"
            width="650"
            id="newsletter"
        >
            <tbody>
                <tr>
                    <td>{children}</td>
                </tr>
            </tbody>
        </table>
    )
}

// Styles are written in object syntax
// https://react.dev/reference/react-dom/components/common#usage
addPropertyControls(Wrapper, {
    children: {
        type: ControlType.Array,
        control: {
            type: ControlType.ComponentInstance,
        },
        maxCount: 10,
    },
})
