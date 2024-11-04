import axios from "axios";
import Quote from "inspirational-quotes";

axios.get("https://jsonplaceholder.typicode.com/todos/1").then(function (response) {
  // handle success
  console.log(response);
});

console.log(Quote.getQuote());
