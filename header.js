class Headers{
    constructor(data){
        this.data = data
    }

    renderHeaderData(){
        const tpl = this.data.map((items) =>{
            return `<div class="div1">
                <img class="img1" src="${items.img}">
                <img class="img2" src="${items.img1}">
                <p class="para">${items.today}</p>
                <p class="para">${items.watch}</p>
                <p class="para">${items.explore}</p>
                <div class="search-container">
                    <i class="fa fa-search search-icon"></i>
                    <input type="search" placeholder="Search for easy dinner, fashion, etc">
                </div>
                <button class="log">Log in</button>
                <button class="sign">Sign up</button>
            </div>
            
            
            
            `
        }).join('')
        document.getElementById('render').innerHTML = tpl;
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