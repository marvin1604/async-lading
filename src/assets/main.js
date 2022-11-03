const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=10"

const url = "https://www.youtube.com/watch?v="
const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff1f68ba73mshe58d71cc1e3a90dp1267d6jsn08e96dd6f23d',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(error => console.error(error));

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
	try{
		const videos = await fetchData(API);
		// const idVideo = videos.items[0].id.videoId;
		// console.log(idVideo)
		
		let view = `
		${videos.items.map(video =>
			`
			<div class="group relative">
		  <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <a href="${url+video.id.videoId}" aria-hidden="true" class="absolute inset-0"></a>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
		`).slice(0,8).join('')}
		`;
		content.innerHTML = view;

	} catch(error){
		console.log(error);
	}
})();