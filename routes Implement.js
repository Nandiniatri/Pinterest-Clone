import Headers from "./header";
import { Today } from "./today/today";
import Main from "./middles";
import MainFooter from "./mainfooter";
import dataService from "./dataServices";
import Watch from "./watch/watch";

const renderElement = document.getElementById('render');
console.log(renderElement);

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

const data= [
    {
        img:'https://www.logo.wine/a/logo/Pinterest/Pinterest-Icon-Logo.wine.svg',
        img1:'https://vectorlogoseek.com/wp-content/uploads/2019/03/pinterest-vector-logo.png',
        today:'Today',
        watch:'Watch',
        explore:'Explore',
    }
]

const routes = {
    "/pinterest": ()=>{
        const mainFile = new Main(mainData);
        mainFile.rendermain();
        const mainFooter = new MainFooter(data);
        mainFooter.renderMainImage();
    },
    "/today": () =>{
        const today =  new Today();
        today.renderTodayData(data);
    },
    "/watch": () =>{
        const watch = new Watch();
        watch.renderWatchData(data); 
    }
}

function handleRouterChange(){
    const route = window.location.pathname;
    console.log(route);

    if (routes[route]) {
        routes[route]();
    } else {
        const mainFile = new Main(mainData);
        mainFile.rendermain();
        const mainFooter = new MainFooter(data);
        mainFooter.renderMainImage();
    }
}

window.addEventListener("popstate",handleRouterChange);
window.onload = handleRouterChange;

// const links = document.querySelectorAll('nav a');
// links.forEach(link => {
//     link.addEventListener("click", (event) => {
//         event.preventDefault()
//         const route = event.target.href.split("/").pop();
//         console.log(route)
//         history.pushState(null,null,route);
//         handleRouterChange()
//     })
// })

const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const route = event.currentTarget.href.split("/").pop();
        console.log(route);

        if (route === "/pinterest") {
            const mainFile = new Main(mainData);
            mainFile.rendermain();
            const mainFooter = new MainFooter(data);
            mainFooter.renderMainImage();
        } else {
            // Handle other routes
            history.pushState(null, null, route);
            handleRouterChange();
        }
    });
});


export default handleRouterChange

