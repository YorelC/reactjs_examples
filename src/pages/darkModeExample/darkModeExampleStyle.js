import clsx from "clsx";

export const divDarkModeExample = clsx(
  "h-screen",
  "bg-white",
  "dark:bg-black",
  "transition-colors",
  "duration-500",
  "ease-in-out",
  "flex",
  "flex-col",
  "px-4 md:px-24",
  "space-y-4 md:space-y-8",
);

export const buttonDarkModeExample = clsx(
  "m-4",
  "p-2",
  "text-black",
  "dark:text-white",
  "bg-blue-500",
  "dark:bg-gray-800",
  "rounded-full",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-offset-2",
  "focus:ring-blue-500",
  "dark:focus:ring-offset-gray-800",
  "dark:focus:ring-gray-700",
  "transition-colors",
  "duration-500",
  "ease-in-out",
  "self-center",
);

export const preStyle = clsx(
  "bg-gray-900",
  "dark:bg-gray-200",
  "p-3",
  "rounded",
  "text-white",
  "dark:text-black",
);