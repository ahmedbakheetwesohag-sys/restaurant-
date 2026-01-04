//TOGGLE 
const themeBtn = document.getElementById('themeBtn');
const htmlElement = document.documentElement;
const body = document.body;
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark-mode', currentTheme === 'dark');
updateThemeIcon();

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const isDark = body.classList.contains('dark-mode');
    themeBtn.innerHTML = isDark ? '☀️' : '🌙';
}



setInterval(() => {
    updateSlide(currentSlide + 1);
}, 5000);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateSlide(index);
    });
});

let btn = document.getElementById("mes")
let pr = document.getElementById("pr")
btn.addEventListener("click", () =>{
    pr.textContent = "Welcome your Restaurant"
    pr.classList.toggle("pr")
})
//end Home

//start MENU

let all = document.getElementById("all-s");
let best = document.getElementById("best-s");
let fam = document.getElementById("fam-s");
let top1 = document.getElementById("top-s");
let div = document.querySelectorAll(".members");
all.addEventListener("click", ()=>{
    div.forEach(div =>{
        div.style.display = "flex"
    });
});
best.addEventListener("click", () =>{
    div.forEach(div =>{
        if (div.classList.contains("best")){
            div.style.display = "flex"
        }else{
            div.style.display = "none"
        }
    })
})
fam.addEventListener("click", () =>{
    div.forEach(div =>{
        if (div.classList.contains("fam")){
            div.style.display = "flex"
        }else{
            div.style.display = "none"
        }
    })
})
top1.addEventListener("click", () =>{
    div.forEach(div =>{
        if (div.classList.contains("top")){
            div.style.display = "flex"
        }else{
            div.style.display = "none"
        }
    })
})

//end MENU

// Form 
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('nam').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('sub').value.trim();
        const message = document.getElementById('mess').value.trim();
        
        // Validation
        if (!name || !email || !subject || !message) {
            alert('❌ Please fill in all fields!');
            return false;
        }
        
        // Email 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('❌ Please enter a valid email address!');
            return false;
        }
        
        // message
        alert('✅ Message sent successfully! Thank you for contacting us.');
        contactForm.reset();
        return false;
    });
}
//end Form
