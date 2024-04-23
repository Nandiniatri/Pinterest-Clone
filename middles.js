import handleRouterChange from "./routes Implement";

export default class Main{
    constructor(data){
        this.data = data;
    } 

rendermain(){
    const html = this.data.map((item) =>{
        return `<div class="main-div-container">
        <h1 id="same">${item.heading}</h1>
        <h1 id="same">${item.heading1}</h1>
        <span id="same" class="same1">${item.para}</span>
        <div class="img-container">
        <img class="image1" id="same" src="${item.img1}">
        <img class="image2" id="same" src="${item.img2}">
        <img class="image3" id="same" src="${item.img3}">
        </div>
        <span id="same" class="same1">${item.para1}</span>
        <div><button class="btn1">Share</button></div>
        </div>`
    }).join('');

    document.getElementById('render').innerHTML = html;
}
}

const mainData = [
    {
        heading:'THE Most Popular Recipes on',
        heading1:'Pinterest!!',
        para:'A collection of all the best recipes online! Here you will find some of <br>the best pins on Pinterest....yummy recipes, dinner recipes, dessert <br> recipes, delicious..... <h4>More</h4> .20,366 Pins',
        img1:'https://kashmirmonitor-s01.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2022/05/2176836c-ec13-4179-ae10-102c1aa79361_9ed754ab.jpg',
        img2:'https://alitaexperience.com/wp-content/uploads/2023/01/Ho-Yeon-Jung.webp',
        img3:'https://t4.ftcdn.net/jpg/05/18/99/65/360_F_518996567_sVkbWu5DsVrBwr3gFAO0AsYAewwuW76i.jpg',
        para1:'Collection by Natashas Kitchen - Recipes for Dinner and Desserts,<br> Carlsbad Cravings and 10 others'
    }
]

const mainFile = new Main(mainData);
mainFile.rendermain();