import CardFeatureRedirection from "../../components/cards/cardFeatureRedirection/CardFeatureRedirection";
import { H1 } from "../../components/texts/Texts";
import { cardsFeature } from "../../constants/cardsFeature";
import { divCardsStyle, sectionStyle } from "./homeStyles";

function Home() {
  return (
    <section className={sectionStyle}>
      <H1>Select feature</H1>
      <CardsList />
    </section>
  );
}

function CardsList() {
  return (
    <div className={divCardsStyle}>
      {cardsFeature.map((card) => (
        <CardFeatureRedirection
          key={card.route}
          text={card.text}
          description={card.description}
          route={card.route}
        />
      ))}
    </div>
  );
}

export default Home;
