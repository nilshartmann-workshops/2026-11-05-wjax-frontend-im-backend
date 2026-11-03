import { twMerge } from "tailwind-merge";

type ButtonProps = {
  size?: "regular" | "lg";
  checked?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
};

export function Button({
  size = "regular",
  checked,
  children,
  disabled,
}: ButtonProps) {
  return (
    <span
      className={twMerge(
        "font-barlow inline-flex transform items-center justify-center rounded-sm px-4 py-2 font-normal text-white transition-all duration-500 ease-in-out hover:cursor-pointer hover:underline",
        size === "lg" &&
          "border-red bg-red hover:border-red hover:bg-orange_2 hover:shadow-red mt-2 mb-2 border-2 p-4 text-2xl hover:shadow-2xl",
        size === "regular" && "mt-2 mb-2",
        size === "regular" && "bg-orange_2 hover:bg-orange_2-500 p-2",
        size === "regular" &&
          checked &&
          "bg-green hover:bg-green hover:cursor-default hover:no-underline",
        disabled &&
          "bg-orange_2-200 hover:bg-orange_2-200 cursor-default hover:cursor-default",
      )}
    >
      {children}
    </span>
  );
}

type CheckLabelProps = {
  children: React.ReactNode;
  checked: boolean;
  enabled?: boolean;
  style?: "circle" | "square";
};

export function CheckLabel({
  children,
  checked,
  enabled,
  style = "circle",
}: CheckLabelProps) {
  const iconClassName = twMerge(
    "fa-regular",
    checked
      ? style === "circle"
        ? "fa-circle-check"
        : "fa-square-check"
      : style === "circle"
        ? "fa-circle"
        : "fa-square",
    checked && !enabled
      ? "underline-none cursor-default text-white no-underline hover:no-underline"
      : "text-gray-200",
  );

  const labelClassName = twMerge(
    "ms-2",
    checked ? "hover:no-underline" : "hover:underline",
  );

  return (
    <>
      <i className={iconClassName}></i>
      <span className={labelClassName}>{children}</span>
    </>
  );
}

type PageButtonState = {
  state: "active" | "disabled" | "selectable";
  label: string;
};

type PageButtonProps = {
  state: PageButtonState;
};
export function PageButton({ state: { state, label } }: PageButtonProps) {
  const buttonClassName = twMerge(
    "font-barlow inline-flex h-12 w-12 items-center justify-center rounded-sm px-4 py-2 text-white",
    state === "selectable" &&
      "bg-orange_2 hover:bg-orange_2-500 hover:underline",
    state === "active" && "bg-green hover:bg-green underline",
    state === "disabled" && "bg-gray-300",
  );
  return <span className={buttonClassName}>{label}</span>;
}

type ArrowButtonProps = {
  disabled?: boolean;
  direction: "left" | "right";
};
export function ArrowButton({ direction, disabled }: ArrowButtonProps) {
  const buttonClassName = twMerge(
    "inline-flex items-center justify-center rounded-full px-2 py-2 text-gray-700 transition-all duration-500 ease-in-out",
    disabled
      ? "cursor-default bg-gray-300 hover:bg-gray-300"
      : "bg-goldgray cursor-pointer hover:bg-gray-700 hover:text-white",
  );
  return (
    <span className={buttonClassName}>
      {direction === "left" ? (
        <i className="fa-solid fa-arrow-left"></i>
      ) : (
        <i className="fa-solid fa-arrow-right"></i>
      )}
    </span>
  );
}
