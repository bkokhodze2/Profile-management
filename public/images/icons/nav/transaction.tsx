interface ITransaction {
  color?: string;
  classes?: string;
  width?: number;
  height?: number;
}

function Transaction({color = "#383838", classes, width = 13, height = 14}: ITransaction) {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3663_4304)">
          <path d="M21 17H3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 10L3 7L6 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 7H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 20L21 17L18 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_3663_4304">
            <rect width="24" height="24" fill={color}/>
          </clipPath>
        </defs>
      </svg>

  );
}

export default Transaction;