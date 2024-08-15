function openFullImg(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const downloadBtn = document.getElementById('download-btn');
    
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
    downloadBtn.href = src;
}

function closeFullImg() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
function deleteImage() {
    const lightboxImg = document.getElementById('lightbox-img');
    const src = lightboxImg.src;
    
    const images = document.querySelectorAll('.gallery .image img');
    images.forEach(img => {
        if (img.src === src) {
            img.parentElement.remove();
        }
    });
    
    closeFullImg();
}
document.getElementById('share-btn').addEventListener('click', () => {
    const lightboxImg = document.getElementById('lightbox-img');
    if (navigator.share) {
        navigator.share({
            title: 'Check out this photo!',
            url: lightboxImg.src
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert('Web Share API not supported in this browser.');
    }
});

