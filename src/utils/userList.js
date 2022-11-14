const url = "https://jsonplaceholder.typicode.com/users";
const fetchUser = async () => {
  try {
    const data = await fetch(url).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchUser;
