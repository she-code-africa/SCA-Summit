type Props = {
  className?: string;
};

const ArrowRight = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="24"
      viewBox="0 0 33 24"
      fill="none"
      className={className}
    >
      <path
        d="M16.1513 20.0072L20.1516 24.0075L32.1582 12.0037L20.1545 0L16.1542 4.00313L21.3229 9.17467L0.000175476 9.17467V14.8328L21.3229 14.8328L16.1513 20.0072Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowRight;
