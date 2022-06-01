import { ReactNode } from "react";

export type TimelineProps = {
    children: ReactNode;
    className?: string;
    sort?: boolean;
    ascending?: boolean;
    beforeUndatedContent?: boolean;
};
