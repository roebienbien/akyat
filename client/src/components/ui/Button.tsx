import React from "react";

export default function Button({
  className,
  text,
}: {
  className: string;
  text: string;
}) {
  return <button className={className}>{text}</button>;
}
