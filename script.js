showAllImages = document.getElementById('all-images')
showAllImages.addEventListener('click', ()=>{
    if(showAllImages.checked == true){
        console.log('hello');
    }
})

categoryBtn = document.querySelectorAll('.categories')
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