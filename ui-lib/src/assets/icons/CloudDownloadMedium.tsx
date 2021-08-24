import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CloudDownloadMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.144 15.5761V17.4241C20.544 17.0641 22.344 15.0721 22.344 12.6241C22.344 10.2241 20.616 8.37612 18.408 7.92012C17.952 5.11212 15.384 3.12012 12.528 3.12012C10.392 3.12012 8.40001 4.22412 7.39201 6.07212C4.39201 6.12012 1.65601 8.52012 1.65601 11.7601C1.65601 14.2081 3.21601 16.3441 5.61601 17.1601V15.1921C4.39201 14.5441 3.57601 13.2481 3.57601 11.7601C3.57601 9.09612 6.21601 7.24812 8.66401 8.06412C9.04801 6.12012 10.704 4.92012 12.528 4.92012C14.928 4.92012 17.016 7.00812 16.488 9.67212C18.528 9.24012 20.424 10.5601 20.424 12.6241C20.424 14.0401 19.488 15.2641 18.144 15.5761ZM7.60801 16.5361L11.976 20.8801L16.32 16.5361L15.12 15.3601L14.064 16.4161C13.68 16.8001 13.272 17.2321 12.888 17.6641V11.5201H11.064V17.7121C10.656 17.2561 10.272 16.8241 9.86401 16.4161L8.78401 15.3601L7.60801 16.5361Z"
        fill={color}
      />
    </svg>
  );
}

export default CloudDownloadMedium;