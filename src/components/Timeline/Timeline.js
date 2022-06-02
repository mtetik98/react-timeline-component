import React from "react";

import "../../styles/index.css";

export const Timeline = (props) => {
    const {
        className,
        sort = true,
        ascending = true,
        beforeUndatedContent = true,
        children,
    } = props;

    const renderEventsSorted = () => {
        const events = React.Children.toArray(children);

        if (!sort) return events;

        return events.sort((event1, event2) => {
            if (event1.props.date < event2.props.date) {
                return ascending ? -1 : 1;
            } else if (event1.props.date > event2.props.date) {
                return ascending ? 1 : -1;
            }

            return beforeUndatedContent ? -1 : 1;
        });
    };

    return <div className={className}>{renderEventsSorted()}</div>;
};
