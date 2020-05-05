import axios from "axios";
// using url from ngrok free version
// will need to update every 8 hours
export default axios.create({
  baseURL: "http://4dd62d3a.ngrok.io/v1",
});
