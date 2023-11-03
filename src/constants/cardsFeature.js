import { SCROLL_NAVBAR, DARK_MODE } from "./routes";

export const cardsFeature = [
  {
    text: SCROLL_NAVBAR.name,
    description: "Navbar with li links. The links change color when the user scrolls the page.",
    route: SCROLL_NAVBAR.route,
  },
  {
    text: DARK_MODE.name,
    description: "Handle dark mode.",
    route: DARK_MODE.route,
  },
];