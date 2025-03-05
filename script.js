// 获取人物图片元素
const characterImg = document.getElementById('character-img');
// 为人物图片添加点击事件监听器
characterImg.addEventListener('click', startAnimation);

// 开始动画
function startAnimation() {
    console.log('startAnimation 函数被调用');
    try {
        document.getElementById('character-selection').style.display = 'none';
        console.log('人物选择界面已隐藏');
        document.getElementById('animation-container').style.display = 'flex';
        console.log('动画剧情容器已显示');

        // 模拟动画播放完毕
        setTimeout(() => {
            console.log('动画播放完毕，隐藏动画剧情容器');
            document.getElementById('animation-container').style.display = 'none';
            console.log('显示生日礼物箱子');
            document.getElementById('gift-box-container').style.display = 'block';
        }, 3000); // 假设动画播放3秒
    } catch (error) {
        console.error('执行 startAnimation 函数时出现错误:', error);
    }
}

// 打开礼物箱子
function openGiftBox() {
    document.getElementById('gift-box-container').style.display = 'none';
    document.getElementById('popup-image-container').style.display = 'flex';
}

// 关闭弹出的图片
function closePopup() {
    document.getElementById('popup-image-container').style.display = 'none';
    document.getElementById('like-question').style.display = 'flex';
}

// 处理喜欢与否的选择
function handleLike(isLiked) {
    const errorMessage = document.getElementById('error-message');
    if (isLiked) {
        errorMessage.style.display = 'none';
        document.getElementById('like-question').style.display = 'none';
        document.getElementById('liked-photo').style.display = 'block';
        document.getElementById('wish-button').style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
}

// 开始许愿计时
function startWishTimer() {
    document.getElementById('wish-button').style.display = 'none';
    setTimeout(() => {
        console.log('许愿时间结束，显示许愿结果');
        document.getElementById('wish-result').style.display = 'flex';
    }, 1000); // 10秒后显示许愿结果
}