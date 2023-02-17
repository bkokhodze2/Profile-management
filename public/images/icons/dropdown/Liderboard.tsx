interface IICON {
  color?: string;
  classes?: string;
}

function Liderboard({color, classes}: IICON) {
  return (
      <svg className={`${classes}`} width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5346_11738)">
          <path
              d="M8 12H4C3.44772 12 3 12.4477 3 13V19C3 19.5523 3.44772 20 4 20H8C8.55228 20 9 19.5523 9 19V13C9 12.4477 8.55228 12 8 12Z"
              stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path
              d="M14 4H10C9.44772 4 9 4.59695 9 5.33333V18.6667C9 19.403 9.44772 20 10 20H14C14.5523 20 15 19.403 15 18.6667V5.33333C15 4.59695 14.5523 4 14 4Z"
              stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path
              d="M20 8H16C15.4477 8 15 8.33579 15 8.75V19.25C15 19.6642 15.4477 20 16 20H20C20.5523 20 21 19.6642 21 19.25V8.75C21 8.33579 20.5523 8 20 8Z"
              stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 20H18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_5346_11738">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>

  );
}

export default Liderboard;