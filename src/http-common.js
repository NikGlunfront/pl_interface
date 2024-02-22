import axios from "axios";

export default axios.create({
    baseURL: SERVICE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});