interface IHome {
  color?: string;
  classes?: string;
  width?: number;
  height?: number;
}

function History({color = "#383838", classes, width = 13, height = 14}: IHome) {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3688_789)">
          <path id={"hover-red"} d="M12 8V12L14 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path id={"hover-red"}
              d="M3.05078 11.0001C3.27487 8.80013 4.30105 6.75968 5.93351 5.26803C7.56598 3.77639 9.69048 2.93795 11.9017 2.9127C14.1128 2.88744 16.2559 3.67713 17.922 5.1311C19.5882 6.58507 20.6607 8.60155 20.935 10.7958C21.2092 12.99 20.6661 15.2085 19.4091 17.0278C18.1522 18.8472 16.2694 20.1401 14.1201 20.6599C11.9707 21.1797 9.70519 20.89 7.75578 19.8461C5.80636 18.8022 4.3095 17.0772 3.55078 15.0001M3.05078 20.0001V15.0001H8.05078"
              stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_3688_789">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>

  );
}

export default History;