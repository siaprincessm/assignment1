function main() {
    function init() {
        let map = initMap();
        window.addEventListener("DOMContentLoaded",function(){

            document.querySelector("#btnSearch").addEventListener('click',function(){
                let query = document.querySelector("#textQuery").value;
            })


        })

    }
    init();
}
main();
