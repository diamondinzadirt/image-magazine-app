export const fetchImages = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  return response.json();
};
