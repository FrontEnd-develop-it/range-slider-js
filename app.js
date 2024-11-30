const range = document.querySelector('input');
const price = document.querySelector('.price');

range.addEventListener('input', function() {
    const progressWidth = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.style.setProperty('--progress-width', `${progressWidth}%`);

    price.textContent = parseFloat(this.value).toFixed(2);
})