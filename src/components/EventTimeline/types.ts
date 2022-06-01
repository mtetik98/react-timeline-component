import { ReactNode } from "react";

export type EventTimelineProps = {
    title: string;
    description: string;
    icon: ReactNode;
    date?: Date;
    className?: string;
    showLine?: boolean;
    showIcon?: boolean;
    leftSideContent?: string | ReactNode;
    leftSideContentClassName?: string;
    rightSideContent?: string | ReactNode;
    rightSideContentClassName?: string;
    titleClassName?: string;
    lineClassName?: string;
    iconBackgroundClassName?: string;
    cardClassName?: string;
    darkMode?: boolean;
    onIconClick?: () => void;
    onTitleClick?: () => void;
    onCardClick?: () => void;
    onLeftSideContentClick?: () => void;
    onRightSideContentClick?: () => void;
};
