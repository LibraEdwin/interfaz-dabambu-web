const Card = (props) => {
  return (
    <svg
      {...props}
      height="1em"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 0H2.5C1.39 0 0.51 0.89 0.51 2L0.5 14C0.5 15.11 1.39 16 2.5 16H18.5C19.61 16 20.5 15.11 20.5 14V2C20.5 0.89 19.61 0 18.5 0ZM18.5 14H2.5V8H18.5V14ZM18.5 4H2.5V2H18.5V4Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Card
