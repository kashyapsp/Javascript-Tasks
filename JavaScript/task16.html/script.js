document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("magnifyImage");
    const magnifier = document.getElementById("magnifier");

    img.addEventListener("mousemove", function(e) {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        
        magnifier.style.backgroundImage = `url(${img.src})`;
        magnifier.style.display = "block";

    
        magnifier.style.left = `${e.clientX}px`;
        magnifier.style.top = `${e.clientY}px`;


        const bgX = (x / img.width) * 100;
        const bgY = (y / img.height) * 100;
        magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;
    });

    img.addEventListener("mouseleave", function() {
        magnifier.style.display = "none"; 
    });
});
