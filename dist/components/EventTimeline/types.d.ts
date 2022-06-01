import { ReactNode } from "react";
export declare type EventTimelineProps = {
    title: string;
    description: string;
    icon: ReactNode;
    date?: Date;
    onIconClick?: () => void;
    className?: string;
    leftSideContent?: string | ReactNode;
    leftSideContentClassName?: string;
    rightSideContent?: string | ReactNode;
    rightSideContentClassName?: string;
    titleClassName?: string;
    lineClassName?: string;
    iconBackgroundClassName?: string;
    cardClassName?: string;
    darkMode?: boolean;
};
