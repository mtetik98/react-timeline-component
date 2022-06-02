import React, { useEffect } from "react";

import { EventTimelineProps } from "./types";

const EventTimeline: React.FC<EventTimelineProps> = (props) => {
    const {
        title,
        description,
        icon,
        className,
        showLine = true,
        showIcon = true,
        leftSideContent,
        leftSideContentClassName,
        rightSideContent,
        rightSideContentClassName,
        titleClassName,
        lineClassName,
        iconBackgroundClassName,
        cardClassName,
        darkMode,
        onIconClick,
        onTitleClick,
        onCardClick,
        onLeftSideContentClick,
        onRightSideContentClick,
    } = props;

    const newLineClassName = lineClassName
        ? lineClassName
        : darkMode
        ? "border-slate-900"
        : "border-slate-200";

    const newIconBackgroundClassName = iconBackgroundClassName
        ? iconBackgroundClassName
        : darkMode
        ? "bg-slate-900 ring-slate-800 ring-2 ring-opacity-75"
        : "bg-slate-200 ring-slate-100 ring-2 ring-opacity-75";

    const newCardClassName = cardClassName
        ? cardClassName
        : darkMode
        ? "bg-slate-900 text-slate-200"
        : "bg-slate-200 text-slate-900";

    useEffect(() => {
        document.querySelectorAll(".timeline-event-left-side-content svg").forEach((icon) => {
            icon.classList.add(...["text-2xl", "md:text-4xl", "lg:text-5xl"]);
        });

        document.querySelectorAll(".timeline-event-right-side-content svg").forEach((icon) => {
            icon.classList.add(...["text-2xl", "md:text-4xl", "lg:text-5xl"]);
        });

        document.querySelectorAll(".timeline-event-icon svg").forEach((icon) => {
            icon.classList.add(...["h-7", "w-7", "mx-auto"]);
        });
    }, [leftSideContent, rightSideContent, icon]);

    return (
        <div
            className={`timeline-event-component relative wrap overflow-hidden h-full px-4 py-2 ${className}`}>
            <div className="flex justify-between items-center w-full">
                {showLine && (
                    <div
                        className={`border-2-2 absolute border-2 h-full left-[2.15rem] ${newLineClassName}`}
                    />
                )}
                <div className="z-20">
                    <div
                        onClick={onIconClick}
                        className={`timeline-event-icon my-4 h-10 w-10 flex items-center ${
                            showIcon && newIconBackgroundClassName
                        }`}>
                        {showIcon && icon}
                    </div>
                </div>
                <div
                    onClick={onCardClick}
                    className={`order-1 ml-5 w-screen md:ml-10 px-6 py-4 ${newCardClassName}`}>
                    <div className="timeline-event-content mb-3 flex justify-between items-center">
                        <p
                            onClick={onLeftSideContentClick}
                            className={`timeline-event-left-side-content font-bold ${leftSideContentClassName}`}>
                            {leftSideContent}
                        </p>
                        <p
                            onClick={onRightSideContentClick}
                            className={`timeline-event-right-side-content font-bold ${rightSideContentClassName}`}>
                            {rightSideContent}
                        </p>
                    </div>
                    <h2
                        onClick={onTitleClick}
                        className={`mb-2 font-bold text-xl md:text-2xl ${titleClassName}`}>
                        {title}
                    </h2>
                    <p className="text-base leading-snug tracking-wide text-opacity-100">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export { EventTimeline };
