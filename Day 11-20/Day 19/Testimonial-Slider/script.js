//Testimonial Data
const testimonials = [
    {
        name: "Katey Bronzie",
        job: "Developer, TechCrew",
        image: "/Day 11-20/Day 19/Testimonial-Slider/profile-image-4.png",
        testimonial: "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur"
    },
    {
        name: "Eva Sawyer",
        job: "CEO, Fashworks",
        image: "/Day 11-20/Day 19/Testimonial-Slider/images/profile-image-1.png",
        testimonial: "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla"
    },
    {
        name: "Nicolas Blakely",
        job: "UI Designer, Affinity Agency",
        image: "/Day 11-20/Day 19/Testimonial-Slider/images/profile-image-4.png",
        testimonial: "Drci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis"
    },
    {
        name: "James Robins",
        job: "Developer, TechCrew",
        image: "/Day 11-20/Day 19/Testimonial-Slider/images/profile-image-3.png",
        testimonial: "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
    },
];

//Cuurent Slide
let i = 0;
//Total Slides
let  k = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

//Add eventListener to nextBtn
nextBtn.addEventListener("click", () => {
    i = (k + i + 1) % k;
    displayTestimonial();
});

//Add eventListener to prevBtn
prevBtn.addEventListener("click", () => {
    i = (k + i - 1) % k;
    displayTestimonial();
})

//A function to display the testimonials
let displayTestimonial = () => {
 testimonialContainer.innerHTML = `
 <p>${testimonials[i].testimonial}</p>
 <img src=${testimonials[i].image}>
 <h3>${testimonials[i].name}</h3>
 <h6>${testimonials[i].job}</h6>
 `
};

window.onload = displayTestimonial;