function main() {
    function init() {
        let map = initMap();
        window.addEventListener("DOMContentLoaded",function(){

            document.querySelector("#btnSearch").addEventListener('click', async function(){
                let query = document.querySelector("#txtQuery").value;
                let center = map.getBounds().getCenter();
                let results = await search(center.lat, center.lng, query);
                console.log(results);
            })


        })

    }
    init();
}
main();
