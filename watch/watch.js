import dataService from "../dataServices"
import handleRouterChange from "../routes Implement";

export default class Watch{ 
    constructor(){}

    async renderWatchData(){
        try{
            const data = await dataService.getData('/watch/watch.json');
            console.log(data);

            const sliderTpl = data.watchData.slider.map((item) =>{
                return `<div class="sliderss">
                <div><img class="sliderImg" src="${item.src}"></div>
                <div class="sliderSub">${item.subText}</div>
                <div class="sliderText"><h1>${item.text}</h1></div>
                <button class="sliderBtn">${item.button}</button>
                </div>`
            }).join('');

            const buttonsTpl = data.watchData.button.map((btn) =>{
                return `<div>
                <button class="watchBtn1" id="prev"><i id="watchBtn1Icon" class="${btn.prevArrow}"></i></button>
                <button class="watchBtn2" id="next"><i id="watchBtn2Icon" class="${btn.nextArrow}"></i></button>
                </div>`
            }).join('');

            // const watchVideosTpl = data.watchData.videos.map((video) =>{
            //     return `<video controls>
            //     <source src="${video.src}" type="${video.type}">
            //     </video>`
            // }).join('');

            const watchTpls = `<div class="watchTpls">
            <div class="sliderTpl">${sliderTpl}</div>
            <div class="buttonsTpl">${buttonsTpl}</div>
            
            </div>`
            document.getElementById('render').innerHTML = watchTpls;

            //scroll functionally->
            const sliderDiv = document.querySelector('.sliderTpl');
            console.log(sliderDiv);

            const prev = document.getElementById('prev');
            console.log(prev);
            const next = document.getElementById('next');
            console.log(next);

            next.addEventListener('click', () => {
                sliderDiv.style.scrollBehavior = "smooth";
                sliderDiv.scrollLeft += 400;
            });
        
            prev.addEventListener('click', () => {
                sliderDiv.style.scrollBehavior = "smooth";
                sliderDiv.scrollLeft -= 400;
            });

        }catch{
            console.log('not supported');
        }
    }
}
    
    const watch = new Watch();
    watch.renderWatchData(); 



//     import React, { useState } from 'react';

// export default function MyWebPage() {
//   return (
//     <div>
//       <h1>Hello Slider</h1>
//       <Slider />
//     </div>
//   );
// }

// function Slider() {
//   const images = [
//     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
//     'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
//     'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
//     'https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437290_1280.jpg',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="slider">
//       <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//       <div>
//         <button onClick={nextImage}>Next</button>
//         <button onClick={prevImage}>Prev</button>
//       </div>
//     </div>
//   );
// }
