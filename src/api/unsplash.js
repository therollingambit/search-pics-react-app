import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID v5nauvuw_Mr1YTK17gI5166cG2sWUSQNDQRq2bXRukA",
  },
});
