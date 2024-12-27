const imageContainer = document.getElementById('image-container');
const selectModal = document.getElementById('select-modal')
const selectBtn = document.getElementById('select-button')
const imagePreview = document.getElementById('image-card')
const selectedContainer = document.getElementById('selectedImg-container');

const searchBar = document.getElementById('search');
searchBar.addEventListener('change', () => {
    if(searchBar.value.toUpperCase() == 'FIRST TIME DEPOSIT'){
        const FTD = document.getElementById('first-time-deposit')
        FTD.checked = true;
        buttons(FTD);
    }
    if(searchBar.value.toUpperCase() == 'SBK SOCCER'){
        const sbkSoccer = document.getElementById('sbk-soccer')
        sbkSoccer.checked = true;
        buttons(sbkSoccer);
    }
    if(searchBar.value.toUpperCase() == 'ESPORTS'){
        const esports = document.getElementById('esports')
        esports.checked = true;
        buttons(esports);
    }
    if(searchBar.value.toUpperCase() == 'WELCOME BONUS'){
        const welcomeBonus = document.getElementById('welcome-bonus')
        welcomeBonus.checked = true;
        buttons(welcomeBonus);
    }
    if(searchBar.value.toUpperCase() == 'DEPOSIT'){
        const deposit = document.getElementById('deposit')
        deposit.checked = true;
        buttons(deposit);
    }
    if(searchBar.value.toUpperCase() == 'SBK BASKETBALL'){
        const sbkBasketball = document.getElementById('sbk-basketball')
        sbkBasketball.checked = true;
        buttons(sbkBasketball);
    }
    if(searchBar.value.toUpperCase() == 'REBATE'){
        const rebate = document.getElementById('rebate')
        rebate.checked = true;
        buttons(rebate);
    }
    if(searchBar.value.toUpperCase() == 'FREEBET'){
        const freebet = document.getElementById('freebet')
        freebet.checked = true;
        buttons(freebet);
    }
    if(searchBar.value.toUpperCase() == 'SBK (MATCH BANNERS)'){
        const sbkMatchbanners = document.getElementById('sbk-match-banners')
        sbkMatchbanners.checked = true;
        buttons(sbkMatchbanners);
    }
    if(searchBar.value.toUpperCase() == 'PARLAY'){
        const parlay = document.getElementById('parlay')
        parlay.checked = true;
        buttons(parlay);
    }
    if(searchBar.value.toUpperCase() == 'SBK (MULTISPORT)'){
        const sbkMultisport = document.getElementById('sbk-multisport')
        sbkMultisport.checked = true;
        buttons(sbkMultisport);
    }
    if(searchBar.value.toUpperCase() == 'REFERRAL'){
        const referral = document.getElementById('referral')
        referral.checked = true;
        buttons(referral);
    }
    if(searchBar.value.toUpperCase() == 'SBK (FREE BET)'){
        const sbkFreebet = document.getElementById('sbk-free-bet')
        sbkFreebet.checked = true;
        buttons(sbkFreebet);
    }
})

//for All images button
const showAllImages = document.getElementById('all-images');
showAllImages.addEventListener('click', () => {
    if(showAllImages.checked == true){
        for(let i = 0; i <= imageContainer.children.length; i++){
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
        element.classList.remove('active');
        element.classList.replace('text-white', 'text-neutral-700');
    }
    //console.log(element.children[0].id);
   })
});

function buttons(button){
    if(button.checked == true){
        button.parentElement.classList.add('bg-[#FF9200]');
        button.parentElement.classList.add('border-[#FF9200]');
        button.parentElement.classList.replace('text-neutral-700', 'text-white');
    }
}

//collect classes
const containImages = document.querySelectorAll('#image-container img');
const hashtags = new Set();

containImages.forEach(image => {
    image.dataset.hashtags.split(',').forEach(tag => hashtags.add(tag.trim()));
})

function filterImages(){

    containImages.forEach(image => {
        const imageTags = image.dataset.hashtags.split(',').map(tag => tag.trim());
        
    })
}
//category buttons
const firstTimeDepositBtn = document.getElementById('first-time-deposit')
firstTimeDepositBtn.addEventListener('click', () => {
    if(firstTimeDepositBtn.checked == true){
        
    }
})



