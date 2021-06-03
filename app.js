const api_key = 'jHK44a7OBF1A5LbFscszcMDQpRcCBrip';
const searchEndpoint = 'https://api.giphy.com/v1/gifs/search'

async function makeRequest(q){
    const response = await axios.get(searchEndpoint, {params:{api_key, q, limit: 1}});
    console.log(response.data.data[0].embed_url);
    addGif(response.data.data[0].embed_url);
}

document.querySelector('#search').addEventListener('click', function(event){
    console.log(event.target);
    event.preventDefault();
    let searchTerm = document.querySelector('#searchTerm').value;
    makeRequest(searchTerm);
})

function addGif(embedUrl){
    const gif = document.createElement('div');
    gif.classList.add('col');

    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;

    gif.append(iframe);

    document.querySelector('#gifs').append(gif);
}

document.querySelector('#remove').addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('#gifs').textContent = '';

})