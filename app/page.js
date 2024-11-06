import Title from "./components/Title";
import Body from "./components/Body";

function Home() {
  return (
    <div>
      <h2>Pride</h2>
      <br />
      <Title Heading="Lion" />
      <Body details="Levels of leadership" word="Lioness" />
      <br />

      <Title Heading="Tiger" />
      <Body details="Levels of leadership" word="Tigress" />
      <br />

      <Title Heading="Panther" />
      <Body details="Levels of leadership" word="Pantheress" />
    </div>
  );
}

export default Home;
