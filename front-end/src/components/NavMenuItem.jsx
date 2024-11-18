import arrow from "../assets/svg/arrow.svg"

export function NavMenuItem({ index, title }) {
  return (
    <li className="text-text-primary-inverted">
      <div>
        <div />
        <span>
          {index.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </span>
        <h1>{title}</h1>
        <div>{arrow}</div>
      </div>
    </li>
  );
}
