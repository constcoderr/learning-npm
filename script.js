import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/todos/1").then(function (response) {
  // handle success
  console.log(response);
});
