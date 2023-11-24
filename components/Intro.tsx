// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers

import { addPropertyControls, ControlType } from "framer"
import { CSSProperties } from "../node_modules/@types/react"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Intro(props) {
    const { title, paragraph, backgroundColor, color, align } = props

    return (
        <table
            cellSpacing="0"
            cellPadding="0"
            width="650"
            style={{
                backgroundColor,
                paddingLeft: align === "left" ? "20px" : "0px",
                paddingBottom: "35px",
            }}
        >
            <tr>
                <td
                    align={align}
                    style={{
                        ...styles.title_wrapper,
                        color,
                    }}
                >
                    <span style={{ ...styles.title, color }}>{title}</span>
                </td>
            </tr>
            <tr>
                <td align={align}>
                    <span style={{ ...styles.paragraph, color }}>
                        {paragraph}
                    </span>
                </td>
            </tr>
        </table>
    )
}

addPropertyControls(Intro, {
    title: {
        title: "Intro title",
        type: ControlType.String,
        defaultValue: "Intro title",
    },
    paragraph: {
        title: "Intro paragraph",
        type: ControlType.String,
        defaultValue: "Intro paragraph",
    },
    backgroundColor: {
        title: "Background color",
        type: ControlType.Color,
        defaultValue: "#fff",
    },
    color: {
        title: "Text color",
        type: ControlType.Color,
        defaultValue: "#000",
    },
    align: {
        title: "Align",
        type: ControlType.Enum,
        defaultValue: "center",
        options: ["center", "left", "right"],
        optionTitles: ["Center", "Left", "Right"],
    },
})

// Styles are written in object syntax
// https://react.dev/reference/react-dom/components/common#usage
const title: CSSProperties = {
    fontSize: "30px",
    color: "#fff",
}

const title_wrapper: CSSProperties = {
    paddingBottom: "35px",
}

const paragraph: CSSProperties = {
    fontSize: "18px",
    color: "#fff",
}

const styles = {
    title,
    title_wrapper,
    paragraph,
}
