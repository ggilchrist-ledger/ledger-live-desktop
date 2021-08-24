import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LinkRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0799 13.9439C11.9759 15.7679 14.9519 15.7919 16.7999 13.9199L20.1119 10.6079C21.9839 8.75993 21.9839 5.71193 20.1119 3.88793C18.2879 2.01593 15.2639 2.03993 13.4159 3.88793L10.9439 6.31193L12.0959 7.48793L14.5679 5.03993C16.1279 3.50393 17.4239 3.50393 18.9599 5.03993C20.4959 6.57593 20.5199 7.89593 18.9599 9.43193L15.6239 12.7679C14.0879 14.3279 12.7199 14.3519 11.1599 12.8399L10.4399 12.1439L9.38389 13.2719L10.0799 13.9439ZM3.88789 20.1119C5.71189 21.9839 8.73589 21.9599 10.5839 20.1119L13.0559 17.6879L11.9279 16.5119L9.43189 18.9599C7.89589 20.4959 6.57589 20.4959 5.03989 18.9599C3.50389 17.3999 3.50389 16.1039 5.03989 14.5679L8.37589 11.2319C9.93589 9.67193 11.2799 9.64793 12.8399 11.1599L13.5599 11.8559L14.6159 10.7279L13.9199 10.0559C12.0239 8.23193 9.04789 8.20793 7.19989 10.0799L3.88789 13.3919C2.01589 15.2399 2.01589 18.2879 3.88789 20.1119Z"
        fill={color}
      />
    </svg>
  );
}

export default LinkRegular;