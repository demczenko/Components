// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"
import { CSSProperties } from "../node_modules/@types/react"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Paragraph({
    text,
    href,
    textAlign,
    backgroundColor,
    color,
    paddingBottom,
}) {
    return (
        <table cellSpacing="0" cellPadding="0" align="center" width="650">
            <tbody>
                <tr>
                    <td
                        align={textAlign}
                        style={{
                            paddingBottom,
                            backgroundColor,
                            textAlign,
                            paddingLeft: textAlign === "left" ? "20px" : "0px",
                        }}
                    >
                        {href ? (
                            <a href={href}>
                                <span style={{ ...title_style, color }}>
                                    {text}
                                </span>
                            </a>
                        ) : (
                            <span style={{ ...title_style, color }}>
                                {text}
                            </span>
                        )}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

addPropertyControls(Paragraph, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Paragraph placeholder",
    },
    href: {
        title: "Href",
        type: ControlType.Link,
        defaultValue: "",
    },
    textAlign: {
        title: "Align CTA",
        type: ControlType.Enum,
        defaultValue: "center",
        options: ["center", "left", "right"],
        optionTitles: ["Center", "Left", "Right"],
    },
    backgroundColor: {
        title: "Background color",
        type: ControlType.Color,
        defaultValue: "#fff",
    },
    paddingBottom: {
        title: "Padding bottom",
        type: ControlType.String,
        defaultValue: "35px",
    },
    color: {
        title: "Text color",
        type: ControlType.Color,
        defaultValue: "#000",
    },
})

// Styles are written in object syntax
// https://react.dev/reference/react-dom/components/common#usage
const title_style: CSSProperties = {
    fontSize: "18px",
    fontFamily: "Open Sans, sans-serif",
    lineHeight: 1.25,
    color: "#000000",
}
