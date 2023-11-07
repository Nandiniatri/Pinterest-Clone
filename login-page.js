class LogInData {
    constructor(data) { 
        this.data = data;
    }

    renderLogInData() {

        const tpl = this.data.map((items) => {
            return `<div class="container1">
            <form class="div-LogIn">
                <div><img class="img-logIn" src="${items.img}"></div>
                <h1 class="log-h1">${items.heading}</h1>
                <div class="log-in-para">${items.p}</div>
                <input type='${items.type}' placeholder ="Email">
                <div class="log-in-para">${items.p1}</div>
                <input type='${items.type1}' placeholder ="Password">
                <div class="log-in-A"><a href="#">${items.p2}</a></div>
                <button class="button1">Log in</button>
                <p>${items.p3}</p>
                <button class="button2">Continue with Facebook</button>
                <div class="logIn-grap">${items.p4}</div>
            </form>
        </div>`;
        });

        const successKaMessage = document.createElement('div');  //yha pr mene sucess wala ka bnaya hai.
        successKaMessage.className = 'success-message';
        successKaMessage.style.display = 'none';
        successKaMessage.innerHTML = `
            <p>Login successful!!</p>
            <button class="close-btn">close</button>
        `;
        document.body.appendChild(successKaMessage);

        document.getElementById('logInji').addEventListener('click', () => {
            const menuModal = document.getElementById('menuModal');
            const menuContent = document.getElementById('menuContent');

            menuContent.innerHTML = tpl.join('');
            menuModal.style.display = 'block';

            const closeBtn = document.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                menuModal.style.display = 'none';
            });

            const loginBtn = document.querySelector('.button1');  //yha pr mai logIn button ka kaam hora h.
            loginBtn.addEventListener('click', () => {
                const email = document.querySelector('input[type="text"]').value;
                const password = document.querySelector('input[type="password"]').value;

                if (email && password) {
                    menuModal.style.display = 'none';
                    successKaMessage.style.display = 'block';
                }
            });

            const closeButton = document.querySelector('.close-btn'); //yha pr hai mera close wala .
            closeButton.addEventListener('click' , () => {
                console.log('close');
                successKaMessage.style.display = 'none';
            })
        });

    }
}

const data = [
    {   img:'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
        type:'text',
        heading:'Welcome to Pinterest',
        p:'Email',
        type1:'password',
        p1:'Password',
        p2:'Forgot your password?',
        p3:'Or',
        p4:'By continuing, you agree to Pinterests Terms of Service Opens a new tab and acknowledge you have read our Privacy Policy; Opens a new tab. Notice at collection; Opens a new tab.'
    }
]
const loginData = new LogInData(data);
loginData.renderLogInData();


