import dataService from "../dataServices";

export class Today{
    constructor(){}

    async renderTodayData(){
        try{
            const data = await dataService.getData('/today/today.json');
            console.log(data);

            const topTpl = data.today.top.map((item) =>{
                return `<div class="top">
                <h2 class="topSub">${item.subText}</h2>
                <h1 class="topText">${item.text}</h1>
                </div>`
            }).join('');
    
            const middleTpl = data.today.middle.map((item) =>{
                return `<div class="middle">
                <img class="todayMiddleImg" src="${item.img}">
                <div class="middleSub">${item.subText}</div>
                <h1  class="middleText">${item.text}</h1>
                </div>`
            }).join('');
    
            const bottomTpl = data.today.bottom.map((item) =>{
                return `<div class="bottom">
                <div class="botIcon"><i id="Bicon" class="${item.icon}"></i></div>
                <div class="botSub">${item.subText}</div>
                <div class="botText">${item.text}</div>
                </div>`
            }).join('');
    
            const tpls = `<div>
            <div class="topTpl">${topTpl}</div>
            <div class="middleTpl">${middleTpl}</div>
            <div class="bottomTpl">${bottomTpl}</div>
            </div>`
    
            document.getElementById('render').innerHTML = tpls;
        }catch(error){
            console.log('Error fetching data:', error);
        }
}
}

    const today = new Today();
    today.renderTodayData();