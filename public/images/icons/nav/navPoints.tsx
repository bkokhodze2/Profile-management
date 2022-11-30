interface IHome {
  color?: string;
  classes?: string;
  width?: number;
  height?: number;
}

function Points({color="#383838", classes, width = 13, height = 14}: IHome) {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3688_797)">
          <path id={"hover-red"} d="M16.0078 7.54001C14.9093 6.54696 13.4807 5.99804 11.9998 6.00001C11.2124 6.00053 10.4328 6.15614 9.70555 6.45795C8.97828 6.75977 8.31758 7.20187 7.76117 7.75902C7.20476 8.31617 6.76354 8.97746 6.4627 9.70513C6.16186 10.4328 6.00729 11.2126 6.00781 12C6.00781 15.314 8.68981 18 11.9998 18C13.4787 18.0021 14.9057 17.4547 16.0038 16.464" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id={"hover-red"} d="M12 20V18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id={"hover-red"} d="M12 6V4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_3688_797">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
  );
}

export default Points;