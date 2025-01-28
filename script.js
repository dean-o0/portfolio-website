let images = [];

for (let i = 0; i < 3; i++) {
    images.push(document.getElementsByClassName('img')[i]);
}

// console.log(image.length)

images.forEach(image => {
    image.addEventListener('mouseover', () => image.style.backgroundColor = 'blue');
    image.addEventListener('mouseout', () => image.style.backgroundColor = '#006666');
});
