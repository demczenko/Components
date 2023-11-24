// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers/
import { addPropertyControls, ControlType } from "framer"
import Example from "https://framer.com/m/framer/Example.js@^1.0.0"
import { CSSProperties } from "../node_modules/@types/react"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Category({
    category_name,
    category_href,
    category_src,
    cta,
    product_1,
    product_2,
    product_3,
    product_4,
    backgroundColor,
    align_title,
    textAlign,
    color,
}) {
    // This is a React component containing an Example component
    // - Replace <Example /> with your own code
    // - Find inspiration: https://www.framer.com/developers/

    return (
        <table
            cellSpacing="0"
            cellPadding="0"
            align="center"
            width="650"
            id="beliani_category"
        >
            <thead>
                <tr>
                    <td
                        align={align_title}
                        style={{
                            ...styles.category_name_wrapper,
                            backgroundColor,
                            paddingLeft:
                                align_title === "left" ? "20px" : "0px",
                        }}
                    >
                        <span style={{ ...styles.category_name, color }}>
                            {category_name}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href={category_href}>
                            <img
                                loading="lazy"
                                width="100%"
                                src={category_src}
                                style={{ display: "block" }}
                            />
                        </a>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td
                        style={{
                            ...styles.category_products_wrapper,
                            backgroundColor,
                        }}
                        align="left"
                    >
                        <table
                            cellSpacing="0"
                            cellPadding="0"
                            align="center"
                            width="100%"
                            style={{ paddingBottom: "20px" }}
                        >
                            <tbody>
                                <tr>
                                    <td style={{ paddingRight: "10px" }}>
                                        {product_1}
                                    </td>
                                    <td>{product_2}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table
                            cellSpacing="0"
                            cellPadding="0"
                            align="center"
                            width="100%"
                        >
                            <tbody>
                                <tr>
                                    <td style={{ paddingRight: "10px" }}>
                                        {product_3}
                                    </td>
                                    <td>{product_4}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td
                        align={textAlign}
                        style={{
                            ...styles.category_cta_wrapper,
                            backgroundColor,
                        }}
                    >
                        <a style={{ color }} href={category_href}>
                            <span
                                style={{
                                    ...styles.category_cta,
                                    color,
                                    paddingLeft:
                                        align_title === "left" ? "20px" : "0px",
                                }}
                            >
                                {cta}
                            </span>
                        </a>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

// Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
addPropertyControls(Category, {
    category_name: {
        title: "Category name",
        type: ControlType.String,
        defaultValue: "Name",
    },
    category_href: {
        title: "Category href",
        type: ControlType.Link,
        defaultValue: "https://www.beliani.ch/",
    },
    category_src: {
        title: "Category scr",
        type: ControlType.Link,
        defaultValue: "https://placehold.co/600x400",
    },
    cta: {
        title: "CTA",
        type: ControlType.String,
        defaultValue: "Shop now",
    },
    product_1: {
        title: "Product 1",
        type: ControlType.ComponentInstance,
    },
    product_2: {
        title: "Product 2",
        type: ControlType.ComponentInstance,
    },
    product_3: {
        title: "Product 3",
        type: ControlType.ComponentInstance,
    },
    product_4: {
        title: "Product 4",
        type: ControlType.ComponentInstance,
    },
    backgroundColor: {
        title: "Products background",
        type: ControlType.Color,
        defaultValue: "#fff",
    },
    color: {
        title: "Text color",
        type: ControlType.Color,
        defaultValue: "#000",
    },
    textAlign: {
        title: "Align CTA",
        type: ControlType.Enum,
        defaultValue: "center",
        options: ["center", "left", "right"],
        optionTitles: ["Center", "Left", "Right"],
    },
    align_title: {
        title: "Align Title",
        type: ControlType.Enum,
        defaultValue: "center",
        options: ["center", "left", "right"],
        optionTitles: ["Center", "Left", "Right"],
    },
})

const category_products_wrapper: CSSProperties = {
    paddingBottom: "35px",
    paddingTop: "20px",
    paddingRight: "20px",
    paddingLeft: "20px",
    backgroundColor: "#fff",
}

const category_name_wrapper: CSSProperties = {
    paddingBottom: "35px",
}

const category_name: CSSProperties = {
    fontSize: "30px",
    color: "#000",
    fontFamily: "Open Sans",
}

const category_cta_wrapper: CSSProperties = {
    paddingBottom: "80px",
}

const category_cta: CSSProperties = {
    fontSize: "20px",
    color: "#000",
}

const styles = {
    category_cta_wrapper,
    category_cta,
    category_name_wrapper,
    category_name,
    category_products_wrapper,
}
