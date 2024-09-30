var imageSelect = document.getElementById('imageSelect');
var opacitySelect = document.getElementById('opacitySelect');
var displayedImage = document.getElementById('displayedImage');

imageSelect.addEventListener('change', function() {
    displayedImage.src = this.value;
});

opacitySelect.addEventListener('change', function() {
    displayedImage.style.opacity = this.value;
});
