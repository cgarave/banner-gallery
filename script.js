const imageContainer = document.getElementById('image-container');
const selectModal = document.getElementById('select-modal')
const selectBtn = document.getElementById('select-button')
const imagePreview = document.getElementById('image-card')
const selectedContainer = document.getElementById('selectedImg-container');

//for All images button
const showAllImages = document.getElementById('all-images');
showAllImages.addEventListener('click', () => {
    if(showAllImages.checked == true){
        for(i = 0; i <= imageContainer.children.length; i++){
            imageContainer.children[i].classList.remove('hidden');
        }
    }
})

//Filter buttons
const categoryBtn = document.querySelectorAll('.categories');
categoryBtn.forEach(element => {
   element.addEventListener('click', () => {
    if(element.children[0].checked == true){
        element.classList.add('bg-[#FF9200]');
        element.classList.add('border-[#FF9200]');
        element.classList.replace('text-neutral-700', 'text-white');
    } else if (element.children[0].checked == false) {
        element.classList.remove('bg-[#FF9200]');
        element.classList.remove('border-[#FF9200]');
        element.classList.replace('text-white', 'text-neutral-700');
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
let selectedImagesSet = new Set();
// for(let i = 0; i <= imageClasses.images.length - 1; i++){
//     let imageDiv = document.createElement('div');
//     imageDiv.innerHTML = `  <div class="absolute bottom-5 py-2 px-4 bg-[#FF9200] rounded-full text-white hidden">Selected</div>
//                             <img class="${imageClasses.images[i][0]}" src="src/${imageClasses.images[i][1]}">`
//     imageDiv.classList.add('w-64', 'h-64', 'overflow-hidden', 'cursor-pointer', 'rounded-lg', 'bg-red-400', 'hover:border-4', 'hover:border-[#FF9200]', 'relative', 'flex', 'justify-center');
//     imageContainer.appendChild(imageDiv);

//     //add selected images to selected images container
//     imageDiv.addEventListener('click', (event) => {
//         let image = event.target.attributes[1].value;
//         //selectModal.classList.remove('hidden');

//         imageDiv.children[0].classList.remove('hidden');
//         if(!selectedImagesSet.has(image) && selectedContainer.children.length < 3) {
//             selectedImagesSet.add(image); //to prevent from duplicating selected images sa selected section
//             document.getElementById('selectedImg-card').classList.remove('hidden');
//             appendSelectedImages(image);
//         }
//     })

// }

function appendSelectedImages(selected){
    const selectedDiv = document.createElement('div');
    selectedDiv.innerHTML = `<div id="remove" class="group-hover:block absolute z-10 top-2 right-2 bg-black  rounded-full p-2 hidden cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="14"  height="14"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                            </div>
                            <div class="group-hover:block absolute z-0 bg-white opacity-20 h-full w-full hidden"></div>
                            <img src="${selected}">`
    selectedDiv.classList.add('group', 'rounded-lg', 'overflow-hidden', 'relative');
    selectedContainer.appendChild(selectedDiv);

    selectedDiv.addEventListener('click', (event) => {
        if(event.target.id === 'remove' || event.target.parentElement.id === 'remove'){
            selectedContainer.removeChild(selectedDiv);
            selectedImagesSet.delete(selected);
            
            
        }
        if(selectedContainer.children.length == 0){
            document.getElementById('selectedImg-card').classList.add('hidden');
        }
    })

}



//refactor
for(let i = 0; i <= imageClasses.images.length - 1; i++){
    let imageDiv = document.createElement('div');
    imageDiv.innerHTML = `  <div class="absolute bottom-5 py-2 px-4 bg-[#FF9200] rounded-full text-white hidden">Selected</div>
                            <img class="${imageClasses.images[i][0]}" src="src/${imageClasses.images[i][1]}">`
    imageDiv.classList.add('w-64', 'h-64', 'overflow-hidden', 'cursor-pointer', 'rounded-lg', 'bg-red-400', 'hover:border-4', 'hover:border-[#FF9200]', 'relative', 'flex', 'justify-center');
    imageContainer.appendChild(imageDiv);

    //add selected images to selected images container
    imageDiv.addEventListener('click', (event) => {
        selectModal.classList.remove('hidden');
        imagePreview.attributes[1].value = event.target.attributes[1].value
        
        selectBtn.addEventListener('click', () => {
            let image = imagePreview.attributes[1].value
            selectModal.classList.add('hidden');

            if(!selectedImagesSet.has(image) && selectedContainer.children.length < 3) {
                selectedImagesSet.add(image); //to prevent from duplicating selected images sa selected section
                document.getElementById('selectedImg-card').classList.remove('hidden');
                
                //remove selected images
                
                const selectedDiv = document.createElement('div');
                selectedDiv.innerHTML = `<div id="remove" class="group-hover:block absolute z-10 top-2 right-2 bg-black  rounded-full p-2 hidden cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg"  width="14"  height="14"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                                        </div>
                                        <div class="group-hover:block absolute z-0 bg-white opacity-20 h-full w-full hidden"></div>
                                        <img src="${image}">`
                selectedDiv.classList.add('group', 'rounded-lg', 'overflow-hidden', 'relative');
                selectedContainer.appendChild(selectedDiv);
    
                selectedDiv.addEventListener('click', (event) => {
                    if(event.target.id === 'remove' || event.target.parentElement.id === 'remove'){
                        selectedContainer.removeChild(selectedDiv);
                        selectedImagesSet.delete(image);
                    }
                    if(selectedContainer.children.length == 0){
                        document.getElementById('selectedImg-card').classList.add('hidden');
                    }
                })
            }
        })
    })
}