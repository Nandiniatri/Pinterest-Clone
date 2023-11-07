import dataService from "./dataServices";

class MainFooter{
    constructor(data){
        this.data = data
    }

    renderMainImage(){
        const tpl = this.data.printerestData.map((item) =>{
            return `<div class="container"> 
            <div class="box"><img src="${item.img1}"></div>
            <p class="img-para">${item.para1}</p> 
            <div class="box"><img src="${item.img2}"></div>
            <p class="img-para">${item.para2}</p>
            <div class="box"><img src="${item.img3}"></div>
            <p class="img-para">${item.para3}</p>
            <div class="box"><img src="${item.img4}"></div>
            <p class="img-para">${item.para4}</p>
            <div class="box"><img src="${item.img5}"></div>
            <p class="img-para">${item.para5}</p>
            <div class="box"><img src="${item.img6}"></div>
            <p class="img-para">${item.para6}</p>
            <div class="box"><img src="${item.img7}"></div>
           
            <div class="box"><img src="${item.img8}"></div>
            <p class="img-para">${item.para8}</p>
            <div class="box"><img src="${item.img9}"></div>
            <p class="img-para">${item.para9}</p>
            <div class="box"><img src="${item.img10}"></div>
            <p class="img-para">${item.para10}</p>
            <div class="box"><img src="${item.img11}"></div>
            <p class="img-para">${item.para11}</p>
            <div class="box"><img src="${item.img12}"></div>
            <p class="img-para">${item.para12}</p>
            <div class="box"><img src="${item.img13}"></div>
           
            <div class="box"><img src="${item.img14}"></div>
            <p class="img-para">${item.para14}</p>
            <div class="box"><img src="${item.img15}"></div>
            <p class="img-para">${item.para15}</p>
            <div class="box"><img src="${item.img16}"></div>
            <p class="img-para">${item.para16}</p>
            <div class="box"><img src="${item.img17}"></div>
            <p class="img-para">${item.para17}</p>
            <div class="box"><img src="${item.img18}"></div>
            <p class="img-para">${item.para18}</p>
            <div class="box"><img src="${item.img19}"></div>
            <p class="img-para">${item.para19}</p>
            <div class="box"><img src="${item.img22}"></div>
            <p class="img-para">${item.para22}</p>
            <div class="box"><img src="${item.img23}"></div>
            <p class="img-para">${item.para23}</p>
            <div class="box"><img src="${item.img24}"></div>
            <p class="img-para">${item.para24}</p>
            <div class="box"><img src="${item.img25}"></div>
            <p class="img-para">${item.para25}</p>
            <div class="box"><img src="${item.img26}"></div>
            <p class="img-para">${item.para26}</p>
            <div class="box"><img src="${item.img27}"></div>
            <p class="img-para">${item.para27}</p>
            <div class="box"><img src="${item.img28}"></div>
            
            <div class="box"><img src="${item.img29}"></div>
            <p class="img-para">${item.para29}</p>
         
            <div class="box"><img src="${item.img31}"></div>
            <p class="img-para">${item.para31}</p>
            <div class="box"><img src="${item.img32}"></div>
            <p class="img-para">${item.para32}</p>
            <div class="box"><img src="${item.img33}"></div>
            <p class="img-para">${item.para33}</p>
            <div class="box"><img src="${item.img34}"></div>
            <p class="img-para">${item.para34}</p>
            </div>`
        }).join('')
        
        const createElements = document.createElement('div');
        render.append(createElements);
        createElements.innerHTML = tpl;
    }
}

async function fetchDataa() {
    try {
        const data = await dataService.getData("/data/images.json");
        console.log(data);
        const mainFooter = new MainFooter(data);
        mainFooter.renderMainImage()
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

fetchDataa();
