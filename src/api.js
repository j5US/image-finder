import axios from "axios";
const auth = process.env.REACT_APP_UNSPLASH_HEADER;


const searchImages = async (img) =>{
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: `Client-ID ${auth}`
        },
        params:{
            query: img
        }
    });

    return response.data.results;
};

export default searchImages;