import React from "react";

import { TimelineProps } from "./types";

const Timeline: React.FC<TimelineProps> = (props) => {
    const {
        className,
        sort = true,
        ascending = true,
        beforeUndatedContent = true,
        children,
    } = props;

    const renderEventsSorted = () => {
        const events: any = React.Children.toArray(children);

        if (!sort) return events;

        return events.sort(
            (event1: { props: { date: Date } }, event2: { props: { date: Date } }) => {
                if (event1.props.date < event2.props.date) {
                    return ascending ? -1 : 1;
                } else if (event1.props.date > event2.props.date) {
                    return ascending ? 1 : -1;
                }

                return beforeUndatedContent ? -1 : 1;
            }
        );
    };

    return <div className={className}>{renderEventsSorted()}</div>;
};

export { Timeline };
