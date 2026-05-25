"use client"

import { motion } from "motion/react"

function LoadingThreeDotsPulse() {
    const dotVariants = {
        pulse: {
            scale: [1, 1.5, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.div
            animate="pulse"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="loader-container"
        >
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <StyleSheet />
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
            .loader-container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                min-height: 50vh;
            }

            .dot {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #4eac6d;
                will-change: transform;
            }
            `}
        </style>
    )
}

export default LoadingThreeDotsPulse;