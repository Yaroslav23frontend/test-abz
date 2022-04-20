import React from "react";
const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} className="form-control input" {...props} />;
});
export default Input;
