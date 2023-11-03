import useDarkMode from "../../hooks/useDarkMode";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../constants/routes";
import { H1, H2, P } from "../../components/texts/Texts";
import {
  buttonDarkModeExample,
  divDarkModeExample,
  preStyle,
} from "./darkModeExampleStyle";

function DarkModeExample() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const navigate = useNavigate();

  return (
    <div className={divDarkModeExample}>
      <button
        className={buttonDarkModeExample}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle mode {isDarkMode ? "Light" : "Dark"}
      </button>

      <H1>Tailwind configuration for dark mode</H1>
      <P>
        To use dark mode with Tailwind CSS, first make sure that your
        tailwind.config.js file is configured to use dark mode with classes by
        adding the darkMode property with the value 'class' like this:
      </P>
      <pre className={preStyle}>
        <code>
          {`// tailwind.config.js
export default {
  darkMode: 'class', // or 'media' if you want to base it on system preferences
  // ...
}`}
        </code>
      </pre>
      <P>
        You can then use 'dark:' prefixes in your Tailwind classes to style
        elements specifically for dark mode. For example :
      </P>
      <pre className={preStyle}>
        <code>
          {'<h1 className="text-gray-900 dark:text-gray-100">Hello dark!</h1>'}
        </code>
      </pre>

      <H1>Use useDarMode Hook</H1>
      <P>
        To use dark mode in your app, you can use the useDarkMode hook. It will
        add the 'dark' class to the body element when dark mode is enabled. You
        can use it like this:
      </P>
      <pre className={preStyle}>
        <code>
          {`// MyComponetToHandleDarkMode.jsx
      const [isDarkMode, setIsDarkMode] = useDarkMode();
      // ...
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle mode {isDarkMode ? "Light" : "Dark"}
      </button>`}
        </code>
      </pre>
      <button  className={buttonDarkModeExample}
      onClick={() => navigate(HOME.route)}>Back to Home</button>
    </div>
  );
}

export default DarkModeExample;
