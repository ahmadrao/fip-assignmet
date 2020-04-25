
const products = [
    {
        title: 'Carlsberg Non-alcoholic',
        desc: 'This beer contains the characteristic taste of the world famous Carlsberg beer but contains only 0.5% alcohol. You will experience a harmonious balance between bitterness and the sweetness of apples, while enjoying the bright golden color with the nice looking foam. The aroma is dominated by pine, straws, hazelnut and sorrel.',
        img: '1.png'
    },
    {
        title: 'Carlsberg 0.0% Alcohol Free',
        desc: 'We Danes love a good beer, but sometimes we want to go alcohol-free. No problem. Refreshing with a crisp hoppy bite, Carlsberg 0.0 is everything you’d expect from a well-balanced Pilsner…just crafted to contain zero alcohol, and half the calories of our regular Pilsner. So now we can enjoy great-tasting beer any time. Skål!',
        img: '2.png'
    },
    {
        title: 'Carlsberg 1883',
        desc: 'Carlsberg 1883; the amazing story of an old beer bottle found the cellars of the old Carlsberg brewery. Through a complicated scientific process, the scientists in the Carlsberg Research Laboratory managed to grow and purify the original Carlsberg yeast from 1883 from the bottle. This yeast gave the beer its name: Carlsberg 1883.<br>A copper-coloured beer with a compact head. It has a unique and distinct flavour, and a clean and fresh nose with a delicate hint of malt and caramel.',
        img: '3.png'
    },
    {
        title: 'Carlsberg 47',
        desc: 'Carlsberg 47 was Carlsberg’s first, strong Christmas beer, originally brewed for the first time in 1972 on the occasion of Carlsberg’s 125th anniversary. It should only have been on the market for that one year, but its great taste quickly gained with beer connoisseurs and has had a permant place in Carlsberg Group’s product portfolio ever since. Carlsberg 47 is released every year around the time of Carlsberg Breweries’ birthday in early November and is available until the New Year. The taste is round and sweet, as a Christmas beer should be. The roasted caramel aromas blend themselves with a tasty bite in the aftertaste, and the dark color suits the season nicely.',
        img: '4.png'
    },
    {
        title: 'Carlsberg Chill',
        desc: 'Cool, light, refreshing and easy to drink lager. The ideal drink for trendy youths and partygoers.        ',
        img: '5.png'
    },
    {
        title: 'Carlsberg Citrus        ',
        desc: 'A crisp, easy drinking lager brewed with a high-grade barley, using a finely balanced blend of natural Persian and Key limes, for a refreshingly smooth taste.',
        img: '6.png'
    },
    {
        title: 'Carlsberg Elephant Strong        ',
        desc: 'Did we choose the name Elephant to honour the statues that guard our brewery gates, or because it\'s a beer you\'ll remember forever? Pale gold in colour, Elephant is rich in malty character, with a hint of caramel, balanced by a satisfyingly dry bitterness. Once enjoyed, never forgotten!<br>Read more about the Elephant Strong on the Carlsberg Website.',
        img: '7.png'
    },
    {
        title: 'Carlsberg Expørt',
        desc: 'Carlsberg Export is a premium-strength lager, with a refined and satisfying taste. Brewed to the original Danish recipe, it has deep malty notes and a distinct bitterness that generate a full-flavoured lager that is stronger in taste and mouth-feel than our standard Pilsner.',
        img: '8.png'
    },
    {
        title: 'Carlsberg Kurvand',
        desc: 'Carlsberg Spring Water is an excellent sparkling thirst-quencher. It is made of natural mineral water that comes from the Arnakke spring by Silkeborg, Denmark. The water springs with a temperature of 7 degrees, has a low content of salt and a constant natural mineral content of 220mg/l.',
        img: '9.png'
    },
    {
        title: 'Carlsberg Kurvand Citrus',
        desc: 'Carlsberg Spring Water is with its lively sparkles and fresh lemon and lime taste an excellent thirst quencher, which suits all times a day. It has been brought from the Arnakke spring, which has the finest mineral water with a low salt content. The water springs with a temperature of 7 degrees, has a low content of salt and a constant natural mineral content of 220mg/l.',
        img: '10.png'
    },
    {
        title: 'Carlsberg Smooth Draught        ',
        desc: 'For us Danes, a smooth delivery is second nature - even when we are nowhere near a bar. That was the thinking behind Carlsberg Smooth Draught. Longer matured, and brewed using an innovative cold-hopping technique, it\'s a little more mellow than a regular Pilsner. And it delivers all the easy-drinking refreshment of a great draught beer - any time, anywhere.',
        img: '11.png'
    },
    {
        title: 'Carlsberg Smooth Lager',
        desc: 'We Danes like our lager with a sharply bitter bite. But we know our friends in India prefer something a bit smoother. Like Carlsberg Smooth. We brew it with only finest European hops and malt, for a milder fruity flavour and maximum easy-drinking refreshment. We think you\'ll find it more than lives up to its name.',
        img: '12.png'
    },
    {
        title: 'Carlsberg Sort Guld',
        desc: 'We Danes like our lager with a sharply bitter bite. But we know our friends in India prefer something a bit smoother. Like Carlsberg Smooth. We brew it with only finest European hops and malt, for a milder fruity flavour and maximum easy-drinking refreshment. We think you\'ll find it more than lives up to its name.',
        img: '13.png'
    },
    {
        title: 'Carlsberg SPORT        ',
        desc: 'Carlsberg SPORT is a tasty and refreshing sports soda with dextrose and lemon/lime flavour. Carlsberg SPORT is completely free of dyes and contains 3% dextrose, which gives new energy. The colour is crystal clear. Carlsberg SPORT can be enjoyed by the sport active, but also for everyday well-deserved breaks.    ',
        img: '14.png'
    },
    {
        title: 'Gl. Carlsberg Porter        ',
        desc: 'Old Carlsberg Porter has an almost oily-fat filling and appears black with tight mocha colored foam. The taste is sweet with a hint of dry bitterness. The aroma is powerful with notes of licorice root, newly roasted coffee, bitter chocolate and warming alcohol.',
        img: '15.png'
    },


]

products.forEach(e=>{
    let card= `
    <div class="card">
    <div class="img">
        <img src="../images/${e.img}" alt="Beer">
    </div>
    <div class="card-body">
        <div class="title">${e.title}</div>
        <p class="desc">
           ${e.desc.substr(0, 100) }
        </p>
        <button class="btn-card" onclick="openPopup(this.parentElement.parentElement) ">Order Now</button>
    </div>
    </div>
    `
    document.querySelector('.products').innerHTML+=card
})


const modal = document.querySelector('.modal');
function openPopup(e) {
    let el = undefined
             products.forEach(j=>{
               if(j.title.toLowerCase==e.title.toLowerCase){
                   el= j
               }
            })
    document.querySelector('.modal .title').innerHTML = e.querySelector('.title').innerHTML
    document.querySelector('.modal .modal-desc').innerHTML = el.desc
    document.querySelector('.modal .right').innerHTML = `<img src="${e.querySelector('img').src}" alt="${e.querySelector('img').alt}">`
    modal.style.display = "block";
}
function closePopup() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}