// Development: webpack.config.js - npm start
// import React from "react";
// import { createRoot } from "react-dom/client";

// import { Timeline } from "./components/Timeline";
// import { EventTimeline } from "./components/EventTimeline";
// import { FaTasks, FaHourglass, FaCheck, FaTimes } from "react-icons/fa";

// import "./index.css";

// const container: HTMLElement = document.getElementById("root")!;
// const root = createRoot(container);

// root.render(
//     <div className="bg-slate-400 min-h-screen">
//         <Timeline className="py-5 max-w-4xl mx-auto" beforeUndatedContent={false}>
//             <EventTimeline
//                 title="Darkmode = FALSE"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                 leftSideContent="Undated"
//                 icon={<FaTasks />}
//                 rightSideContent={<FaTasks />}
//             />
//             <EventTimeline
//                 title="Darkmode = TRUE"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                 leftSideContent="Contains Date Property"
//                 icon={<FaHourglass className="text-slate-200 animate-pulse" />}
//                 rightSideContent={<FaTasks />}
//                 darkMode
//                 date={new Date(2020, 6, 1)}
//             />
//             <EventTimeline
//                 title="Dotted Line"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                 leftSideContent={new Date(2020, 7, 15).toLocaleDateString()}
//                 lineClassName="border-green-500 border-dotted"
//                 iconBackgroundClassName="bg-green-500 ring-green-400 ring-2 ring-opacity-75"
//                 cardClassName="bg-green-400"
//                 icon={<FaCheck className="text-slate-200 animate-pulse" />}
//                 rightSideContent="Right Side Content"
//                 date={new Date(2020, 7, 15)}
//             />
//             <EventTimeline
//                 title="Dashed Line"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                 leftSideContent={new Date(2020, 7, 5).toLocaleDateString()}
//                 lineClassName="border-red-500 border-dashed"
//                 iconBackgroundClassName="bg-red-500 ring-red-400 ring-2 ring-opacity-75"
//                 cardClassName="bg-red-400"
//                 icon={<FaTimes className="text-slate-200" />}
//                 rightSideContent={<FaTasks />}
//                 date={new Date(2020, 7, 5)}
//             />
//             <EventTimeline
//                 title="With On Icon Click"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                 leftSideContent={new Date(2020, 7, 2).toLocaleDateString()}
//                 lineClassName="border-blue-300 border-dotted"
//                 iconBackgroundClassName="bg-blue-300 ring-blue-200 ring-2 ring-opacity-75 hover:scale-150 transition-all duration-200 cursor-pointer"
//                 cardClassName="bg-blue-200"
//                 icon={<FaHourglass className="text-slate-900" />}
//                 rightSideContent={<FaTasks />}
//                 date={new Date(2020, 7, 2)}
//                 onIconClick={() => alert("You just clicked the icon!")}
//             />
//             <EventTimeline
//                 title="Customized Darkmode"
//                 titleClassName="text-green-500"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                 leftSideContent={new Date(2020, 7, 25).toLocaleDateString()}
//                 lineClassName="border-green-500 border-dotted"
//                 iconBackgroundClassName="bg-green-500 ring-green-400 ring-2 ring-opacity-75"
//                 icon={<FaCheck className="text-slate-200" />}
//                 rightSideContent={<FaTasks />}
//                 date={new Date(2020, 7, 25)}
//                 darkMode
//                 showLine={false}
//             />
//             <EventTimeline
//                 title="Customized Lightmode"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                 leftSideContent={new Date(2020, 7, 28).toLocaleDateString()}
//                 lineClassName="border-green-500"
//                 leftSideContentClassName="text-green-500"
//                 iconBackgroundClassName="bg-green-500 ring-green-400 ring-2 ring-opacity-75"
//                 icon={<FaCheck className="text-slate-200" />}
//                 rightSideContent={<FaTasks />}
//                 date={new Date(2020, 7, 28)}
//                 rightSideContentClassName="hover:text-green-500"
//                 cardClassName="border-4 border-red-500 bg-gray-100 hover:bg-red-500"
//                 onTitleClick={() => alert("You just clicked the title!")}
//                 onCardClick={() => alert("You just clicked the card!")}
//                 onLeftSideContentClick={() => alert("You just clicked the left side content!")}
//                 onRightSideContentClick={() => alert("You just clicked the right side content!")}
//                 showIcon={false}
//             />
//         </Timeline>
//     </div>
// );

// Production: webpack.build.js - npm run build
import "./index.css";

export * from "./components/EventTimeline";
export * from "./components/Timeline";
