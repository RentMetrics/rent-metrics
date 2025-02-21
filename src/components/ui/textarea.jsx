import React from "react";

const Textarea = React.forwardRef((props, ref) => {
    const { className, ...restProps } = props;

    return <textarea ref={ref} className={className} {...restProps} />;
});

Textarea.displayName = "Textarea";

export { Textarea };
