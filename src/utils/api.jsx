const baseUrl= 'https://api.themoviedb.org/3/';
const apiKey= '?api_key=e834f03696dc827ea13d0fe918187b6f';

const GET = async(type, selection, ext= '') => {
    const res= await fetch(baseUrl + type + '/' + selection + apiKey + ext);
    return await res.json();
    
};


export {GET};




