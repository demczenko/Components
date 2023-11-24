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
export default function CallToAction({
    cta,
    href,
    backgroundColor,
    textAlign,
    paddingBottom,
    color,
}) {
    return (
        <table cellSpacing="0" cellPadding="0" width="650">
            <tr>
                <td
                    style={{
                        ...styles.call_to_action_wrapper,
                        backgroundColor,
                        textAlign,
                        paddingBottom,
                    }}
                >
                    {href ? (
                        <a href={href}>
                            <span style={{ ...styles.call_to_action, color }}>
                                {cta}
                            </span>
                        </a>
                    ) : (
                        <span style={{ ...styles.call_to_action, color }}>
                            {cta}
                        </span>
                    )}
                </td>
            </tr>
        </table>
    )
}

const call_to_action_wrapper = {
    paddingLeft: "20px",
    paddingRight: "20px",
}

const call_to_action = {
    fontSize: "20px",
    fontFamily: "Open Sans, sans-serif",
    textDecoration: "underline !important",
}

const styles = {
    call_to_action_wrapper,
    call_to_action,
}

addPropertyControls(CallToAction, {
    cta: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Call to action",
    },
    href: {
        title: "Cta href",
        type: ControlType.Link,
        defaultValue: "",
    },
    paddingBottom: {
        title: "Padding bottom",
        type: ControlType.String,
        defaultValue: "80px",
    },
    backgroundColor: {
        title: "Background color",
        type: ControlType.Color,
        defaultValue: "#fff",
    },
    textAlign: {
        title: "Align CTA",
        type: ControlType.Enum,
        defaultValue: "center",
        options: ["center", "left", "right"],
        optionTitles: ["Center", "Left", "Right"],
    },
    color: {
        title: "Text color",
        type: ControlType.Color,
        defaultValue: "#000",
    },
})

// Styles are written in object syntax
// https://react.dev/reference/react-dom/components/common#usage
