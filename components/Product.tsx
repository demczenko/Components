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
export default function Product({
    name,
    href,
    src,
    low_price,
    high_price,
    color,
}) {
    return (
        <table cellSpacing="0" cellPadding="0" align="center" width="300">
            <tr>
                <td align="center">
                    <a href={href}>
                        <img
                            loading="lazy"
                            src={src}
                            style={{ display: "block" }}
                        />
                    </a>
                    <table cellSpacing="0" cellPadding="0" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <span
                                        style={{ ...styles.productName, color }}
                                    >
                                        {name}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span
                                        style={{
                                            ...styles.productLowPrice,
                                            color,
                                        }}
                                    >
                                        {low_price}
                                    </span>
                                    <span
                                        style={{
                                            ...styles.productHighPrice,
                                            color,
                                        }}
                                    >
                                        {high_price}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </table>
    )
}

const productName: CSSProperties = {
    color: "#ffffff",
    fontSize: "18px",
}

const productLowPrice: CSSProperties = {
    color: "#ffffff",
    fontSize: "18px",
    display: "inline-block",
    paddingRight: "8px",
}

const productHighPrice: CSSProperties = {
    color: "#ffffff",
    fontSize: "16px",
    textDecoration: "line-through",
}

const styles = {
    productName,
    productLowPrice,
    productHighPrice,
}

// Styles are written in object syntax
// https://react.dev/reference/react-dom/components/common#usage

addPropertyControls(Product, {
    name: {
        title: "Product name",
        type: ControlType.String,
        defaultValue: "Name",
    },
    href: {
        title: "Product href",
        type: ControlType.Link,
        defaultValue: "https://www.beliani.ch/",
    },
    src: {
        title: "Product scr",
        type: ControlType.Link,
        defaultValue: "https://placehold.co/300x300",
    },
    low_price: {
        title: "Low price",
        type: ControlType.String,
        defaultValue: "99.99",
    },
    high_price: {
        title: "High price",
        type: ControlType.String,
        defaultValue: "199.99",
    },
    color: {
        title: "Text color",
        type: ControlType.Color,
        defaultValue: "#000",
    },
})
