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
    <div id={id} className="h-screen flex items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold">{id.charAt(0).toUpperCase() + id.slice(1)}</h1>
    </div>
  );
};

export default Sections;
