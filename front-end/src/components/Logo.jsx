export function Logo({ type = "symbol", src: logo }) {
  // Define width values for each type
  const logos = {
    symbol: { width: "w-[2.8rem]", widthLg: "lg:w-[4.6rem]" },
    wordmark: { width: "w-[5rem]", widthLg: "lg:w-[8rem]" },
  };

  // Use the defined type or fallback to "symbol" if the type is unexpected
  const { width, widthLg } = logos[type] || logos.symbol;

  if (!logos[type]) {
    console.warn(`Unexpected logo type: ${type}`);
  }

  return <img src={logo} className={`${width} ${widthLg}`} alt="Logo" />;
}
