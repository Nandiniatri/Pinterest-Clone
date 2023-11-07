class MainFooter{
    constructor(data){
        this.data = data
    }

    renderMainImage(){
        const tpl = this.data.map((item) =>{
            return `<div class="container">
            <div class="box"><img src="${item.img}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img1}"></div>
            <span>${item.para1}</span> 
            <div class="box"><img src="${item.img2}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img3}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img4}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img5}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img6}"></div>
            <div class="box"><img src="${item.img7}"></div>
            <div class="box"><img src="${item.img8}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img9}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img10}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img11}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img12}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img13}"></div>
            <div class="box"><img src="${item.img14}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img15}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img16}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img17}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img18}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img19}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img20}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img21}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img22}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img23}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img24}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img25}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img26}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img27}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img28}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img29}"></div>
            <span>${item.para}</span>
            <div class="box"><img src="${item.img30}"></div>
            <span>${item.para}</span>
            </div>`
        }).join('')
        const createElements = document.createElement('div');
        render.append(createElements);
        createElements.innerHTML = tpl;

    }
}

const imagesData = [
    {
      img:'https://i.pinimg.com/originals/df/b9/5e/dfb95e8e7ffbf49c3bb0dea5cd4d6e42.png', 
      para:'30+ Easy Indian Curries In Under 30 minutes',
      img1:'https://welcometothefamilytable.com/wp-content/uploads/2017/06/Dinners-to-Make-When-Its-Too-Hot-to-Cook-2-2.jpg',
      para1:'When its too HOT to cook',
      img2:'https://www.justataste.com/wp-content/uploads/2014/07/cheesy-leftover-mashed-potato-pancakes_recipe.jpg',
      img3:'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2019-10-recipe-20-minute-cajun-chicken-pasta%2F20-Minute-Cajun-Chicken-Pasta_018',
      img4:'https://i.pinimg.com/736x/a9/12/b1/a912b1ea4f153542e9a79feab2491ea6.jpg',
      img5:'https://marketplace.canva.com/EAFhceasblg/1/0/1067w/canva-white-clean-minimalist-easy-healthy-meal-recipe-pinterest-pin-PjMmkYi3Z7k.jpg',
      img6:'https://img.sndimg.com/food/image/upload/v1/img/recipes/12/99/26/fqaHKUZ5Qxe1JYEmj5sO_DSC02592.jpg',
      img7:'https://i.pinimg.com/736x/ab/54/dc/ab54dcc55e3b67e3e57d2d3a8060dafc.jpg',
      img8:'https://i.pinimg.com/736x/c9/3b/0c/c93b0c63548fc35780ce236dbf735c02.jpg',
      img9:'https://i.pinimg.com/600x/23/20/53/232053da29f601c85204ae5e944ff06e.jpg',
      img9:'https://i.pinimg.com/236x/7f/3c/e1/7f3ce143828687d47a203c88f8ff98b8.jpg',
      img10:'https://img.sndimg.com/food/image/upload/v1/img/recipes/28/00/67/QuMML4RXR2y1jWIwlJTc_0S9A6523.jpg',
      img11:'https://s.abcnews.com/images/GMA/RottenEggs_hpMain.jpg',
      img12:'https://www.acouplecooks.com/wp-content/uploads/2020/09/Cauliflower-Stir-Fry-011-735x919.jpg',
      img13:'https://t.rmncdn.com/blog/2016/10/RedVelvetTruffles-1476222543.jpg',
      img14:'https://i.pinimg.com/originals/8c/56/ea/8c56ea0b410489106f86b1ba37a8893a.jpg',
      img15:'https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg',
      img16:'https://nutriciously.com/wp-content/uploads/Amaranth-Recipes-Pin-1.jpg',
      img17:'https://werefarfromnormal.com/wp-content/uploads/2022/07/air-fryer-salmon-bites-square-735x735.jpg',
      img18:'https://www.realfoodwithsarah.com/wp-content/uploads/2022/09/air-fryer-chicken-sausage-october-2022-7-360x480.jpeg',
      img19:'https://gingerwithspice.com/wp-content/uploads/2021/07/Alcoholic-Popsicles-Pinterest-5-512x1024.jpg',
      img20:'https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg',
      img21:'https://www.foodandwine.com/thmb/bmw_NhhbcKg8PKh0DcaampLTs2o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Most-Popular-Pie-In-Every-State-FT-BLOG1122-4127fe516da24e339bd8db8631b73ffc.jpg',
      img22:'https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg',
      img23:'https://s.abcnews.com/images/GMA/MainImage_HalloweenRecipes_v01_sd_hpMain_4x5_608.jpg',
      img24:'https://assets3.thrillist.com/v1/image/1824268/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg',
      img25:'https://marketplace.canva.com/EAE5iMHxBYA/1/0/1067w/canva-pinterest-umckNcYbRIo.jpg',
      img26:'https://www.allrecipes.com/thmb/pZo6D4hCxhQm8OZVm-Rxl_lCJ6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Easy-Meatloaf-d993963fe340401db69f0a070ebfd77d.jpg',
      img27:'https://princesspinkygirl.com/wp-content/uploads/2016/07/Pinterest-600-x-1200-smores-bars-1.jpg',
      img28:'https://i.pinimg.com/originals/8c/56/ea/8c56ea0b410489106f86b1ba37a8893a.jpg',
      img29:'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2011/8/16/0/CCKEL213_Buttery-Herb-Garlic-Knots_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1416846901030.jpeg',
      img30:'https://i.pinimg.com/originals/8c/56/ea/8c56ea0b410489106f86b1ba37a8893a.jpg'


    }
]
const mainFooter = new MainFooter(imagesData);
mainFooter.renderMainImage();



{"printerestData":[
    {
        "img1":"https://i.pinimg.com/originals/df/b9/5e/dfb95e8e7ffbf49c3bb0dea5cd4d6e42.png",
        "para1":"30+ Easy Indian Curries In Under 30 minutes",

        "img2":"https://welcometothefamilytable.com/wp-content/uploads/2017/06/Dinners-to-Make-When-Its-Too-Hot-to-Cook-2-2.jpg",
        "para2":"When its too HOT to cook",

        "img3":"https://www.justataste.com/wp-content/uploads/2014/07/cheesy-leftover-mashed-potato-pancakes_recipe.jpg",
        "para3":"",
    
        "img4":"https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2019-10-recipe-20-minute-cajun-chicken-pasta%2F20-Minute-Cajun-Chicken-Pasta_018",
        "para4":"",
    
        "img5":"https://i.pinimg.com/736x/a9/12/b1/a912b1ea4f153542e9a79feab2491ea6.jpg",
        "para5":"" ,
    
        "img6":"https://marketplace.canva.com/EAFhceasblg/1/0/1067w/canva-white-clean-minimalist-easy-healthy-meal-recipe-pinterest-pin-PjMmkYi3Z7k.jpg",
        "para6":""
    ,
    
        "img7":"https://img.sndimg.com/food/image/upload/v1/img/recipes/12/99/26/fqaHKUZ5Qxe1JYEmj5sO_DSC02592.jpg"
    ,
    
        "img8":"https://i.pinimg.com/736x/ab/54/dc/ab54dcc55e3b67e3e57d2d3a8060dafc.jpg"
    ,
    
        "img9":"https://i.pinimg.com/736x/c9/3b/0c/c93b0c63548fc35780ce236dbf735c02.jpg"
    ,
    
        "img10":"https://i.pinimg.com/600x/23/20/53/232053da29f601c85204ae5e944ff06e.jpg"
    ,
    
        "img11":"https://i.pinimg.com/236x/7f/3c/e1/7f3ce143828687d47a203c88f8ff98b8.jpg"
    ,
    
        "img12":"https://img.sndimg.com/food/image/upload/v1/img/recipes/28/00/67/QuMML4RXR2y1jWIwlJTc_0S9A6523.jpg"
    ,
    
        "img13":"https://s.abcnews.com/images/GMA/RottenEggs_hpMain.jpg"
    ,
    
        "img14":"https://www.acouplecooks.com/wp-content/uploads/2020/09/Cauliflower-Stir-Fry-011-735x919.jpg"
    ,
    
        "img15":"https://t.rmncdn.com/blog/2016/10/RedVelvetTruffles-1476222543.jpg"
    ,
    
        "img16":"https://i.pinimg.com/originals/8c/56/ea/8c56ea0b410489106f86b1ba37a8893a.jpg"
    ,
    
        "img17":"https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg"
    ,
    
        "img18":"https://nutriciously.com/wp-content/uploads/Amaranth-Recipes-Pin-1.jpg"
    ,
    
        "img19":"https://werefarfromnormal.com/wp-content/uploads/2022/07/air-fryer-salmon-bites-square-735x735.jpg"
    ,
    
        "img20":"https://www.realfoodwithsarah.com/wp-content/uploads/2022/09/air-fryer-chicken-sausage-october-2022-7-360x480.jpeg"
    ,
    
        "img21":"https://gingerwithspice.com/wp-content/uploads/2021/07/Alcoholic-Popsicles-Pinterest-5-512x1024.jpg"
    ,
    
        "img22":"https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg"
    ,
    
        "img23":"https://www.foodandwine.com/thmb/bmw_NhhbcKg8PKh0DcaampLTs2o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Most-Popular-Pie-In-Every-State-FT-BLOG1122-4127fe516da24e339bd8db8631b73ffc.jpg"
    ,
    
        "img24":"https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg"
    ,
    
        "img25":"https://s.abcnews.com/images/GMA/MainImage_HalloweenRecipes_v01_sd_hpMain_4x5_608.jpg"
    ,
    
        "img26":"https://assets3.thrillist.com/v1/image/1824268/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg"
    ,
    
        "img27":"https://marketplace.canva.com/EAE5iMHxBYA/1/0/1067w/canva-pinterest-umckNcYbRIo.jpg"
    ,
    
        "img28":"https://www.allrecipes.com/thmb/pZo6D4hCxhQm8OZVm-Rxl_lCJ6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Easy-Meatloaf-d993963fe340401db69f0a070ebfd77d.jpg'"
    ,
    
        "img29":"https://princesspinkygirl.com/wp-content/uploads/2016/07/Pinterest-600-x-1200-smores-bars-1.jpg"
    ,
    
        "img30":"https://i.pinimg.com/originals/8c/56/ea/8c56ea0b410489106f86b1ba37a8893a.jpg"
    ,
    
        "img31":"https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2011/8/16/0/CCKEL213_Buttery-Herb-Garlic-Knots_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1416846901030.jpeg"
    ,
    
        "img32":"https://i.pinimg.com/originals/8c/56/ea/8c56ea0b410489106f86b1ba37a8893a.jpg",
        "para32":"",

        "img33":"https://cookingwithkarli.com/wp-content/uploads/2018/12/twix-cookies-10.jpg",
        "para34":""
    


    }
]
}    
    