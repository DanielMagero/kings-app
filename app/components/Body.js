function Body(props) {
  return (
    <div>
      <p>{props.details}</p>
      <p>
        There are multiple levels of command. The king of the pride has rule
        over all his entire {props.word} horde.
      </p>
    </div>
  );
}

export default Body;
