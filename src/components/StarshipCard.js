function StarshipCard(props) {
  const loaded = () => {
    return (
      <>
        <h3>{props.name}</h3>
      </>
    );
  };

  const loading = () => <h2>No Starship to Display</h2>;

  return props.name ? loaded() : loading();
}

export default StarshipCard;
