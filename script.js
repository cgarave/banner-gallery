const imageContainer = document.getElementById('image-container');

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
    imageDiv.classList.add('w-64', 'h-64', 'overflow-hidden', 'cursor-pointer', 'rounded-lg', 'bg-red-400')
    imageContainer.appendChild(imageDiv)
}