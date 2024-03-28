const profiles = document.querySelectorAll('.profile');
const images = ['images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
                'images/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg',
                'images/michael-dam-mEZ3PoFGs_k-unsplash.jpg', 
                'images/podmatch-GEnCnYhA1J4-unsplash.jpg', 
                'images/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg'];

for (let i = 0; i < 5; i ++) {
    profiles[i].style.backgroundImage = `url(${images[i]})`;
}