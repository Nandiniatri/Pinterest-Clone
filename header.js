import { Today } from "./today/today";
import handleRouterChange from "./routes Implement";

export default class Headers{ 
    constructor(data){
        this.data = data
    } 

    renderHeaderData(){ 
        const tpl = this.data.map((items) =>{
            return `<div class="div1">
            <nav class="headerNav">
                <img class="img1" src="${items.img}">
                <a href="/pinterest"><img class="img2" src="${items.img1}"></a>
                <a class="para" id="today" href="/today">${items.today}</a>
                <a class="para" href="/watch">${items.watch}</a>
                
            </nav>
                <div class="search-container">
                    <i class="fa fa-search search-icon"></i>
                    <input type="search" placeholder="Search for easy dinner, fashion, etc">
                </div>
                <button class="log" id="logInji">Log in</button>
        
            </div>`
        }).join('')
        document.getElementById('header').innerHTML = tpl;
    }
}

const data= [
    {
        img:'https://www.logo.wine/a/logo/Pinterest/Pinterest-Icon-Logo.wine.svg',
        img1:'https://vectorlogoseek.com/wp-content/uploads/2019/03/pinterest-vector-logo.png',
        today:'Today',
        watch:'Watch',
        explore:'Explore',
    }
]
const header = new Headers(data);
header.renderHeaderData();  