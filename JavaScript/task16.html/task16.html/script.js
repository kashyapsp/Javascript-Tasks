const img = document.getElementById('magnifyImg');

img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(2)'; 
});

img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)'; 
});
