// 在手机端显示的背景图片链接
const mobileBgImageUrl = "url('https://s21.ax1x.com/2025/01/14/pEiNM0x.jpg')";

// 在电脑端显示的背景图片链接
const desktopBgImageUrl = "url(https://s21.ax1x.com/2025/01/14/pEiNM0x.jpg)";

// 设置banner的背景图片为空
document.querySelector("#banner").setAttribute('style', 'background-image: url()');

// 在手机端设置背景图片
if (window.innerWidth < 768) {
    document.querySelector('#web_bg').setAttribute('style', `background-image: ${mobileBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
} else {
    // 在电脑端设置背景图片
    document.querySelector('#web_bg').setAttribute('style', `background-image: ${desktopBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
    //document.querySelector('#web_bg').setAttribute('style', `background-image: ${document.querySelector('.banner').style.background.split(' ')[0]};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
}
// 设置banner的.mask背景颜色透明
//document.querySelector("#banner .mask").setAttribute('style', 'background-color: blueviolet;opacity: 0.5;');





