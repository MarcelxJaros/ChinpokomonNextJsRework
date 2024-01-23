import axios from "axios";

export async function GetJoke() {
  const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
    console.log("res:", res);
    return (`${res.data.setup} ${res.data.punchline}`);
}