function main() {
    function init() {
        let map = initMap();

        let searchResultLayer = L.layerGroup();
        searchResultLayer.addTo(map);

        window.addEventListener("DOMContentLoaded",function(){

            document.querySelector("#btnSearch").addEventListener('click', async function(){

                searchResultLayer.clearLayers();

                let query = document.querySelector("#txtQuery").value;
                let center = map.getBounds().getCenter();
                let data = await search(center.lat, center.lng, query);

            document.querySelector("#search-result").innerHTML = "";
                for (let result of data.results) {
                    let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
                    let resultMarker = L.marker(latlng);
                    resultMarker.bindPopup(`
                        <h5>${result.name}</h5
                        <p>${result.location.formatted_address}</p>
                        `)
                    resultMarker.addTo(searchResultLayer);


                    let resultElement = document.createElement('div');
                    resultElement.className = 'search-result';
                    resultElement.innerHTML = result.name;
                    resultElement.addEventListener('click', function(){
                        map.flyTo(latlng, 16);
                        resultMarker.openPopup();
                    })

                    document.querySelector("#search-result").appendChild(resultElement);
                }
            })

            document.querySelector("#toggleSearchBtn").addEventListener('click', function(){
                let searchContainerElement =  document.querySelector("#search-container");
                let currentDisplay = searchContainerElement.style.display;
                if (! currentDisplay  || currentDisplay == 'none') {
                    searchContainerElement.style.display = 'block';
                } else {
                    // if the searc container is visible, then hide it
                    searchContainerElement.style.display = 'none';
            }
        })
    })

    }
    init();
}
main();
