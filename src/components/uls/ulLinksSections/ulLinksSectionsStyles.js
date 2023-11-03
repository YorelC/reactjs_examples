import clsx from "clsx";

export const ulStyle = clsx(
  "flex",
  "justify-center",
  "space-x-4",
);

export const aStyle = (activeSection, section) => {
  return(
    clsx(
      "px-4",
      "py-2",
      activeSection === section ? "text-blue-500" : "text-gray-500",
    )
  )
}