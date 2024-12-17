const imageContainer = document.getElementById('image-container');
const selectedContainer = document.getElementById('selectedImg-container');

//for All images button
const showAllImages = document.getElementById('all-images')
showAllImages.addEventListener('click', () => {
    if(showAllImages.checked == true){
        for(i = 0; i <= imageContainer.children.length; i++){
            imageContainer.children[i].classList.remove('hidden')
        }
    }
})

//Filter buttons
const categoryBtn = document.querySelectorAll('.categories')
categoryBtn.forEach(element => {
   element.addEventListener('click', () => {
    if(element.children[0].checked == true){
        element.classList.add('bg-[#FF9200]')
        element.classList.add('border-[#FF9200]')
        element.classList.replace('text-neutral-700', 'text-white')
    } else if (element.children[0].checked == false) {
        element.classList.remove('bg-[#FF9200]')
        element.classList.remove('border-[#FF9200]')
        element.classList.replace('text-white', 'text-neutral-700')
    }
    //console.log(element.children[0].id);
   })
});

//Might change this. Nalimutan ko na we have multiple categories for each banner, but same approach para malinis HTML natin. We can set categories and images here
//We can also make this as 2d array rin. Ginawa ko lang sya object kasi ayon una kong naisip haha
let imageClasses = {
    images: [['PROMOTION','EVODECEXCPROMO-1224.png'],
            ['LIVECASINO', 'EZUGIREBATEBONUS-1224.png'],
            ['SPINGIFTS','EVOSPINGIFTS-1224.png'],
            ['LOTTO', 'LOTTOKENO-1124.png'],
            ['PROMOTION', 'ENDOFYEAR-1224.png'],
            ['CASINO', 'SWGGRDEC60-1224.png'],
            ['SPONSORSHIP', 'ABUGP-1224.png'],
            ['SPONSORSHIP', 'F1BANNER02-1224.png']]
}

//then bahala na itong for loop to append all images sa image container and set classes in its own
for(let i = 0; i <= imageClasses.images.length - 1; i++){
    let imageDiv = document.createElement('div');
    imageDiv.innerHTML = `<img class="${imageClasses.images[i][0]}" src="src/${imageClasses.images[i][1]}">`
    imageDiv.classList.add('w-64', 'h-64', 'overflow-hidden', 'cursor-pointer', 'rounded-lg', 'bg-red-400', 'hover:border-2', 'hover:border-[#FF9200]')
    imageContainer.appendChild(imageDiv)

    //add selected images to selected images container
    imageDiv.addEventListener('click', (event) => {
        let image = event.target.attributes[1].value
        appendSelectedImages(image);
        //console.log(event.target.attributes[1].value);  
    })
}

function appendSelectedImages(selected){
    const selectedDiv = document.createElement('div');
    selectedDiv.innerHTML = `<div id="remove" class="group-hover:block absolute z-10 top-2 right-2 bg-black  rounded-full p-2 hidden cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="14"  height="14"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                            </div>
                            <div class="group-hover:block absolute z-0 bg-white opacity-20 h-full w-full hidden"></div>
                            <img src="${selected}">`
    selectedDiv.classList.add('group', 'rounded-lg', 'overflow-hidden', 'relative');
    selectedContainer.appendChild(selectedDiv)

    selectedDiv.addEventListener('click', (event) => {
        if(event.target.id === 'remove' || event.target.parentElement.id === 'remove'){
            selectedContainer.removeChild(selectedDiv)
        }
    })
}

