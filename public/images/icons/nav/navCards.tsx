interface IHome {
  color?: string;
  classes?: string;
  width?: number;
  height?: number;
}

function Cards({color="#383838", classes, width = 13, height = 14}: IHome) {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3688_820)">
          <path id={"hover-red"} d="M18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id={"hover-red"} d="M3 10H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id={"hover-red"} d="M7 15H7.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id={"hover-red"} d="M11 15H13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_3688_820">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>

  );
}

export default Cards;