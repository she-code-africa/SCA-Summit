type Props = {
  className?: string;
};

const ArrowLeft = ({ className }: Props) => {
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
        d="M16.0069 20.0072L12.0066 24.0075L0 12.0037L12.0037 0L16.004 4.00313L10.8353 9.17467L32.158 9.17467V14.8328L10.8353 14.8328L16.0069 20.0072Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowLeft;
