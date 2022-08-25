import axios from "axios";
export {};

export const youtubeOptions = {
 
  // params: {hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': 'd0853c564fmsh8203a932eeab1a2p1e3d5ejsne6c5e4895657',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const youtubeFetch = async (url: string, youtubeOptions:any): Promise<any> => {
    try {
        const { data} = await axios.get(url, youtubeOptions);
        return data;
    }catch(error){
        console.log(error);
        throw(error);
    }
}

// url: 'https://youtube138.p.rapidapi.com/search/'