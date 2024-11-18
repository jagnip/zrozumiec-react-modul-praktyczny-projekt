import arrow from "../assets/svg/arrow.svg";

export function NavMenuItem({ index, title }) {
  return (
    <li className="text-text-primary-inverted relative w-full cursor-pointer py-4">
      <div className="relative flex w-full items-center">
        <div className="bg-bg-primary-inverted absolute inset-0 hidden" />
        <span className="w-[4ch]">
          {index.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </span>
        <h3 className="text-text-primary-inverted flex-1">{title}</h3>
        <div>
          <p>arrow</p>
        </div>
      </div>
      <div className="bg-bg-primary absolute bottom-0 h-[2px] w-full origin-left" />
    </li>
  );
}
