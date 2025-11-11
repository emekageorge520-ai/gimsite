const scrollRevealOption ={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_img img",{
    ...scrollRevealOption,
    origin:"left",
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header_content .section_description",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReaveal().reveal(".header_links",{
    ...scrollRevealOption,
    delay:1500,
});

const workout = document.querySelector("workout_image");

const workoutContent = Array.from(workout.children);
workoutContent.forEach((item)=>{
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    workout.appendChild(duplicateNode);
});

ScrollReveal().reveal(".workout_content .section_header",{
    ...scrollRevealOption,
    
    
});
ScrollReveal().reveal(".workout_content .section_description",{
    ...scrollRevealOption,
    delay:500,
});


ScrollReveal().reveal(".story_image img",{
    ...scrollRevealOption,
    origin:"left",
    
    
});
ScrollReveal().reveal(".story_content .section_header",{
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".story_content .section_description",{
    ...scrollRevealOption,
    delay:1000,
    interval:500,
});

ScrollReveal().reveal(".story_link",{
    ...scrollRevealOption,
    delay:2000,
});


ScrollReveal().reveal(".feature_grid li",{
...scrollRevealOption,
    interval:500,
    
});

ScrollReveal().reveal("download_image img",{
    ...scrollRevealOption,
    
});

ScrollReveal().reveal("membership_content .section_header",{
    ...scrollRevealOption,
    
});


ScrollReveal().reveal("membership_content .section_description",{
    ...scrollRevealOption,
    delay:500,
});


ScrollReveal().reveal("membership_btn",{
    ...scrollRevealOption,
    delay:1000,
    
});
