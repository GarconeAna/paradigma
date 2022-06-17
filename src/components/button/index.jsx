import React from "react";

function Button({text, link}) {
  return <>
    <a className="button-medium w-inline-block" href={link}>
      <div>{text}</div>
    </a>
  </>;
}

export default Button;
