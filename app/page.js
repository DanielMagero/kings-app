import Title from "./components/Title";
import Body from "./components/Body";
import Link from "next/link";

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
      <Link href="./components/Dashboard">Dashboard</Link>
    </div>
  );
}

export default Home;
