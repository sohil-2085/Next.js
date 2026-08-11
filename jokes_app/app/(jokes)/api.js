"use server";
export const joke = async () => {
  const url = "http://www.official-joke-api.appspot.com/random_joke";
  const res = await fetch(url);
  if (!res.ok) {
    console.log("Error while getting response");
  }
  return res.json();
};
