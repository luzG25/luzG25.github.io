var banners = ["img/destaque-home.jpg", "img/destaque-home-2.jpg", "img/banner3.jpg"]
var bannerAtual = 0

function trocarbanner() {
    bannerAtual = (bannerAtual + 1) % 3
    document.querySelector('.banner-destaque img').src = banners[bannerAtual]
}

var timer = setInterval(trocarbanner, 4000)

var status = 1
function pause_or_play () {
    if (status == 1) {
        clearInterval(timer)
        status = 0
        //console.log('paused')
    } else {
        timer = setInterval(trocarbanner, 4000)
        status = 1
        //console.log('play')
    }
}

