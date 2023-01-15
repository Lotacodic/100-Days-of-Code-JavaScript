const text = document.querySelector(".text");
let shadow = '';

for(var i = 0; i < 200; i++) {
    shadow += (shadow? ',' : '')+ i*1+`px `+ i*1+`px 0 #0398fc`;
}

text.style.textShadow = shadow;