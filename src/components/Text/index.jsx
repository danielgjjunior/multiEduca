import React from "react";

const sizeClasses = {
  txtRobotoRomanMedium20: "font-medium font-roboto",
  txtRobotoRomanMedium16Bluegray800: "font-medium font-roboto",
  txtJostSemiBold16: "font-jost font-semibold",
  txtRobotoRomanMedium16Red500: "font-medium font-roboto",
  txtRobotoRomanMedium16Orange400: "font-medium font-roboto",
  txtRobotoRomanRegular12Bluegray300: "font-normal font-roboto",
  txtRobotoItalicThin20: "font-hairline font-roboto italic",
  txtMulishBold12: "font-bold font-mulish",
  txtMulishBold16: "font-bold font-mulish",
  txtRobotoRomanRegular12: "font-normal font-roboto",
  txtRobotoRomanMedium16: "font-medium font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtRobotoRomanMedium14: "font-medium font-roboto",
  txtRobotoRomanRegular24: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
