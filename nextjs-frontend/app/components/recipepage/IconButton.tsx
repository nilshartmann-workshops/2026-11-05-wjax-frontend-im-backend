import { twMerge } from "tailwind-merge";

type IconButtonProps = {
  icon: "plus" | "minus";
  onButtonClick?(): void;
  disabled?: boolean;
};

export default function IconButton({
  disabled,
  icon,
  onButtonClick,
}: IconButtonProps) {
  return (
    <button onClick={disabled ? undefined : onButtonClick}>
      <i
        className={twMerge(
          icon === "plus" ? "fa-circle-plus" : "fa-circle-minus",
          "fa-solid text-orange_2 p-2",
          disabled ? "" : "hover:text-orange_2-500 hover:cursor-pointer",
        )}
      />
    </button>
  );
}
