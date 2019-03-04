const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const image = document.querySelector('.container');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide(){
    image.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000,fill:'forwards'});
    if(counter > 1000){
        counter = 1;
    }
    counter++;
    image.style.backgroundImage = `url('https://picsum.photos/g/1024/768/?image=${counter}')`
}
function prevSlide(){
    image.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000,fill:'forwards'});
    if(counter < 1){
        counter = 1000;
    }
    counter--;
    image.style.backgroundImage = `url('https://picsum.photos/g/1024/768/?image=${counter}')`
}