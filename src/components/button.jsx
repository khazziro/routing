import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-600 bg-blue-500": primary,
      "border-gray-900 bg-gray-900": secondary,
      "border-green-600 bg-green-500": success,
      "border-yellow-600 bg-yellow-500": warning,
      "border-red-600 bg-red-500": danger,
      "rounded-full": rounded,
      "text-white":
        !outline && (primary || secondary || success || warning || danger),
      "bg-white": outline,
      "text-blue-600": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-600": outline && success,
      "text-yellow-600": outline && warning,
      "text-red-600": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
