import { P } from '../../../components/texts/Texts';
import NavBar from '../navbar/NavBar';


function Sections() {
  return (
    <div>
      <NavBar />
      <Section id="home" />
      <Section id="about" />
      <Section id="services" />
      <Section id="contact" />
    </div>
  );
}

function Section({ id }) {
  return (
    <div id={id} className="h-screen flex flex-col space-y-2 items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold">{id.charAt(0).toUpperCase() + id.slice(1)}</h1>
      <P>To use the links in a navBar, put the ulLinksSections folder in your project</P>
      <P>Customise the ulLinksSectionsStyles.js file to set your style</P>
      <P>Import the UlLinksSections component in your component</P>
      <P> Pass it an array of section names string which are equal of id in your components (ex: see NavBar.jsx and Sections.jsx in scrollNavBarExample folder) </P>
    </div>
  );
};

export default Sections;
