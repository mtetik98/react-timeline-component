import React, { useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.absolute{position:absolute}.relative{position:relative}.left-\\[2\\.15rem\\]{left:2.15rem}.z-20{z-index:20}.order-1{order:1}.mx-auto{margin-left:auto;margin-right:auto}.my-4{margin-bottom:1rem;margin-top:1rem}.ml-5{margin-left:1.25rem}.mb-3{margin-bottom:.75rem}.mb-2{margin-bottom:.5rem}.flex{display:flex}.h-7{height:1.75rem}.h-full{height:100%}.h-10{height:2.5rem}.w-7{width:1.75rem}.w-full{width:100%}.w-10{width:2.5rem}.w-screen{width:100vw}.items-center{align-items:center}.justify-between{justify-content:space-between}.overflow-hidden{overflow:hidden}.border-2{border-width:2px}.border-slate-900{--tw-border-opacity:1;border-color:rgb(15 23 42/var(--tw-border-opacity))}.border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240/var(--tw-border-opacity))}.bg-slate-900{--tw-bg-opacity:1;background-color:rgb(15 23 42/var(--tw-bg-opacity))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240/var(--tw-bg-opacity))}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-base{font-size:1rem;line-height:1.5rem}.font-bold{font-weight:700}.leading-snug{line-height:1.375}.tracking-wide{letter-spacing:.025em}.text-slate-200{--tw-text-opacity:1;color:rgb(226 232 240/var(--tw-text-opacity))}.text-slate-900{color:rgb(15 23 42/var(--tw-text-opacity))}.text-opacity-100,.text-slate-900{--tw-text-opacity:1}.ring-2{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-slate-800{--tw-ring-opacity:1;--tw-ring-color:rgb(30 41 59/var(--tw-ring-opacity))}.ring-slate-100{--tw-ring-opacity:1;--tw-ring-color:rgb(241 245 249/var(--tw-ring-opacity))}.ring-opacity-75{--tw-ring-opacity:0.75}@media (min-width:768px){.md\\:ml-10{margin-left:2.5rem}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (min-width:1024px){.lg\\:text-5xl{font-size:3rem;line-height:1}}";
styleInject(css_248z);

const EventTimeline = props => {
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
    onRightSideContentClick
  } = props;
  const newLineClassName = lineClassName ? lineClassName : darkMode ? "border-slate-900" : "border-slate-200";
  const newIconBackgroundClassName = iconBackgroundClassName ? iconBackgroundClassName : darkMode ? "bg-slate-900 ring-slate-800 ring-2 ring-opacity-75" : "bg-slate-200 ring-slate-100 ring-2 ring-opacity-75";
  const newCardClassName = cardClassName ? cardClassName : darkMode ? "bg-slate-900 text-slate-200" : "bg-slate-200 text-slate-900";
  useEffect(() => {
    document.querySelectorAll(".timeline-event-left-side-content svg").forEach(icon => {
      icon.classList.add(...["text-2xl", "md:text-4xl", "lg:text-5xl"]);
    });
    document.querySelectorAll(".timeline-event-right-side-content svg").forEach(icon => {
      icon.classList.add(...["text-2xl", "md:text-4xl", "lg:text-5xl"]);
    });
    document.querySelectorAll(".timeline-event-icon svg").forEach(icon => {
      icon.classList.add(...["h-7", "w-7", "mx-auto"]);
    });
  }, [leftSideContent, rightSideContent, icon]);
  return /*#__PURE__*/React.createElement("div", {
    className: `timeline-event-component relative wrap overflow-hidden h-full px-4 py-2 ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center w-full"
  }, showLine && /*#__PURE__*/React.createElement("div", {
    className: `border-2-2 absolute border-2 h-full left-[2.15rem] ${newLineClassName}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "z-20"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onIconClick,
    className: `timeline-event-icon my-4 h-10 w-10 flex items-center ${showIcon && newIconBackgroundClassName}`
  }, showIcon && icon)), /*#__PURE__*/React.createElement("div", {
    onClick: onCardClick,
    className: `order-1 ml-5 w-screen md:ml-10 px-6 py-4 ${newCardClassName}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-event-content mb-3 flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("p", {
    onClick: onLeftSideContentClick,
    className: `timeline-event-left-side-content font-bold ${leftSideContentClassName}`
  }, leftSideContent), /*#__PURE__*/React.createElement("p", {
    onClick: onRightSideContentClick,
    className: `timeline-event-right-side-content font-bold ${rightSideContentClassName}`
  }, rightSideContent)), /*#__PURE__*/React.createElement("h2", {
    onClick: onTitleClick,
    className: `mb-2 font-bold text-xl md:text-2xl ${titleClassName}`
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-base leading-snug tracking-wide text-opacity-100"
  }, description))));
};

const Timeline = props => {
  const {
    className,
    sort = true,
    ascending = true,
    beforeUndatedContent = true,
    children
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

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, renderEventsSorted());
};

export { EventTimeline, Timeline };
