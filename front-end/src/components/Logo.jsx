import logo from "../assets/svg/min-logo.svg";

export function Logo({ type = "symbol" }) {
    // Define width values for each type
    const sizes = {
      symbol: { width: "w-[2.8rem]", widthLg: "lg:w-[4.6rem]" },
      wordmark: { width: "w-[5rem]", widthLg: "lg:w-[8rem]" },
    };
  
    // Use the defined type or fallback to "symbol" if the type is unexpected
    const { width, widthLg } = sizes[type] || sizes.symbol;
  
    if (!sizes[type]) {
      console.warn(`Unexpected logo type: ${type}`);
    }
  
    return <img src={logo} className={`${width} ${widthLg}`} alt="Logo" />;
  }
