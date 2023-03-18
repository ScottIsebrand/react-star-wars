export const getAllStarships = async () => {
  try {
    const apiResponse = await fetch('https://swapi.dev/api/starships');
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
