// libraries
import React from "react";
import PropTypes from "prop-types";
import { motion } from "motion/react";
// css
import "./style.css";
function Button({
    type = "button",
    label = "Flexa UI",
    size = "medium",
    color = "blue",
    style = "full",
    textColor,
    icon,
    iconDirection = "left",
    duration = 200,
    animationOnClick = false,
    disabled = false,
    onClick,
}) {
    const sizeClasses = {
        large: "px-6 py-4 text-xl",
        medium: "px-4 py-3 text-base",
        small: "px-2 py-2 text-ms",
    };
    const colorList = {
        red: "bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 disabled:bg-red-300",
        orange: "bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 disabled:bg-orange-300",
        amber: "bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 disabled:bg-amber-300",
        yellow: "bg-yellow-600 hover:bg-yellow-700 border-yellow-600 hover:border-yellow-700 disabled:bg-yellow-300",
        lime: "bg-lime-600 hover:bg-lime-700 border-lime-600 hover:border-lime-700 disabled:bg-lime-300",
        green: "bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 disabled:bg-green-300",
        emerald:
            "bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 disabled:bg-emerald-300",
        teal: "bg-teal-600 hover:bg-teal-700 border-teal-600 hover:border-teal-700 disabled:bg-teal-300",
        cyan: "bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 disabled:bg-cyan-300",
        sky: "bg-sky-600 hover:bg-sky-700 border-sky-600 hover:border-sky-700 disabled:bg-sky-300",
        blue: "bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 disabled:bg-blue-300",
        indigo: "bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 disabled:bg-indigo-300",
        violet: "bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 disabled:bg-violet-300",
        purple: "bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 disabled:bg-purple-300",
        fuchsia:
            "bg-fuchsia-600 hover:bg-fuchsia-700 border-fuchsia-600 hover:border-fuchsia-700 disabled:bg-fuchsia-300",
        pink: "bg-pink-600 hover:bg-pink-700 border-pink-600 hover:border-pink-700 disabled:bg-pink-300",
        rose: "bg-rose-600 hover:bg-rose-700 border-rose-600 hover:border-rose-700 disabled:bg-rose-300",
        slate: "bg-slate-600 hover:bg-slate-700 border-slate-600 hover:border-slate-700 disabled:bg-slate-300",
        gray: "bg-gray-600 hover:bg-gray-700 border-gray-600 hover:border-gray-700 disabled:bg-gray-300",
        zinc: "bg-zinc-600 hover:bg-zinc-700 border-zinc-600 hover:border-zinc-700 disabled:bg-zinc-300",
        neutral:
            "bg-neutral-600 hover:bg-neutral-700 border-neutral-600 hover:border-neutral-700 disabled:bg-neutral-300",
        stone: "bg-stone-600 hover:bg-stone-700 border-stone-600 hover:border-stone-700 disabled:bg-stone-300",
    };
    const styleVariants = {
        full: `${colorList[color]} ${textColor || "text-white"}`,
        border: `bg-transparent hover:bg-transparent border ${
            colorList[color]
        } ${textColor || "text-black"}`,
    };
    const styleIcon = `flex items-center space-x-1 ${
        iconDirection == "right" ? "flex-row-reverse" : ""
    }`;
    const transitionDurations = {
        75: "duration-75",
        100: "duration-100",
        150: "duration-150",
        200: "duration-200",
        500: "duration-500",
        700: "duration-700",
        1000: "duration-1000",
    };
    return (
        <motion.button
            whileTap={animationOnClick ? { scale: 0.95 } : ""}
            transition={{ duration: 0.1, ease: "linear" }}
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`rounded cursor-pointer transition-colors  disabled:cursor-no-drop ${
                sizeClasses[size] || sizeClasses.medium
            } ${styleVariants[style] || styleVariants.full}  ${
                icon ? styleIcon : ""
            } ${transitionDurations[duration] || "duration-200"} `}
        >
            {icon && <span>{icon}</span>}
            <span>{label}</span>
        </motion.button>
    );
}
Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    label: PropTypes.string,
    size: PropTypes.oneOf(["large", "medium", "small"]),
    color: PropTypes.string,
    style: PropTypes.oneOf(["full", "border"]),
    textColor: PropTypes.string,
    icon: PropTypes.node,
    iconDirection: PropTypes.oneOf(["left", "right"]),
    duration: PropTypes.oneOf([75, 100, 150, 200, 500, 700, 1000]),
    animationOnClick: PropTypes.oneOf([true, false]),
    disabled: PropTypes.oneOf([true, false]),
    onClick: PropTypes.func,
};
export default Button;
