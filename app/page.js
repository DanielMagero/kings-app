import Title from "./components/Title";
import Body from "./components/Body";

function Home() {
  return (
    <div>
      <span>
        <h2>Pride</h2>
      </span>
      <span>
        <br />
        <Title Heading="Lion" />
        <Body details="Levels of leadership" word="Lioness" />
        <br />

        <Title Heading="Tiger" />
        <Body details="Levels of leadership" word="Tigress" />
        <br />

        <Title Heading="Panther" />
        <Body details="Levels of leadership" word="Pantheress" />
      </span>
    </div>
  );
}

export default Home;
