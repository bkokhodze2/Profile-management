interface IHome {
  color?: string;
  classes?: string;
  width?: number;
  height?: number;
}

function Dashboard({color="#383838", classes, width = 13, height = 14}: IHome) {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3688_837)">
          <path id={"hover-red"} d="M4 4H10V12H4V4Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id={"hover-red"} d="M4 16H10V20H4V16Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id={"hover-red"} d="M14 12H20V20H14V12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id={"hover-red"} d="M14 4H20V8H14V4Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_3688_837">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
  );
}

export default Dashboard;