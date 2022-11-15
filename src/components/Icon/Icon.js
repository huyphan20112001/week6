export const ChoiceIconSelected = ({
  width = "26px",
  height = "26px",
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8393 1.99878H15.8345C20.8064 1.99878 24.8369 6.02928 24.8369 11.0011V15.9964C24.8369 20.9683 20.8064 24.9988 15.8345 24.9988H10.8393C5.86741 24.9988 1.83691 20.9683 1.83691 15.9964V11.0011C1.83691 6.02928 5.86741 1.99878 10.8393 1.99878Z"
      stroke="#007AFF"
      strokeWidth="2"
    ></path>
    <circle cx="13.3369" cy="13.4988" r="5" fill="#007AFF"></circle>
  </svg>
);

export const ChoiceIcon = ({ width = "26px", height = "26px", className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 26 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
      fill="white"
      stroke="#D2D2D2"
      strokeWidth="2"
    ></path>
  </svg>
);
