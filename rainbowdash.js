function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Space') {
        // Existing game start logic here...
        
        // Start the music
        document.getElementById('bgMusic').play();
    }
});

// ... (keep your movement logic)

// 2. Update the draw function
function drawPlayer() {
    // drawImage(image, x, y, width, height)
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
}
