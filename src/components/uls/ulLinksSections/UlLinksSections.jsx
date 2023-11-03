import useUlLinksSections from "./useUlLinksSections";
import { aStyle, ulStyle } from "./ulLinksSectionsStyles";

function UlLinksSections({sections}) {
  const {activeSection, handleLiNavLinkClick } = useUlLinksSections(sections);

  return (
    <ul className={ulStyle}>
      {sections.map((section) => (
        <li key={section}>
          <a
            href={`#${section}`}
            onClick={(e) => handleLiNavLinkClick(e, section)}
            className={aStyle(activeSection, section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default UlLinksSections;
