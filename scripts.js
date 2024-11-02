// 背景音乐播放/暂停控制
function playAudio() {
    const audio = document.getElementById('background-music');
    const disc = document.querySelector('.music-disc');
    
    if (audio.paused) {
        audio.play();
        disc.classList.add('spin');
    } else {
        audio.pause();
        disc.classList.remove('spin');
    }
}

// 雪花效果
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    // 设置雪花随机位置、大小和下落速度
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.animationDuration = Math.random() * 5 + 3 + 's';

    // 将雪花添加到容器中
    document.getElementById('snow-container').appendChild(snowflake);

    // 动画结束时移除雪花
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// 每隔 100 毫秒创建一个新的雪花
setInterval(createSnowflake, 100);
