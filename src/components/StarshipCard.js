function StarshipCard(props) {
  const loaded = () => {
    return (
      <div className="starshipCard">
        <h3>{props.name}</h3>
        <p>
          Crew: {props.crew}
          <br></br>
          Hyperdrive Rating: {props.hyperdrive_rating}
        </p>
      </div>
    );
  };

  const loading = () => <h2>No Starship to Display</h2>;

  return props.name ? loaded() : loading();
}

export default StarshipCard;
