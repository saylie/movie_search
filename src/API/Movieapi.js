import axios from 'axios';
const apiKey = '593a29b8';
const baseUrl = 'https://www.omdbapi.com/';

const fetchMovies = async (title) =>{
    try{
        const response = await axios.get(`${baseUrl}?apikey=${apiKey}&s=${title}`);
        return response.data;
    }catch(error){
        console.log('Error fetching movies:', error);
        throw new Error('Failed to fetch movies')
    }
}

export { fetchMovies };