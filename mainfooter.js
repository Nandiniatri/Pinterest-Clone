import dataService from "./dataServices";

export default class MainFooter {
    constructor() {
    }
    
    async renderMainImage() {
        try {
            const responseData = await dataService.getData("/data/images.json");
            console.log(responseData);

            const tpl = responseData.printerestData.map((item) => {
                return `<div class="container"> 
                            <img class="mainfoot-img" src="${item.img}">
                            <p class="main-para">${item.para}</p>
                        </div>`;
            }).join('');

            const createElements = document.createElement('div');
            createElements.setAttribute('id', 'mainDiv');
            render.append(createElements);
            createElements.innerHTML = tpl;
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }
}
const mainFooter = new MainFooter();
mainFooter.renderMainImage();
