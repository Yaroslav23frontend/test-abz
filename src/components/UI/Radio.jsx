import React from "react";
export default function Radio({ lableText, id, ...props }) {
  return (
    <div className="radio-button">
      <input {...props} id={id} type="radio" />
      <label className="form__label-radio" htmlFor={id}>
        <span class="form__radio-button"></span> {lableText}
      </label>
    </div>
  );
}
