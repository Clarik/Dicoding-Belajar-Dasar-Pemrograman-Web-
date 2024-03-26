document.addEventListener('DOMContentLoaded', function () {
    var dropdownContent = document.getElementById('drop_down');
    var links = [
        { text: 'Home', href: './home.html' },
        { text: 'Screenshots', href: '' },
        { text: 'Events', href: '' },
        { text: 'Characters', href: '' },
        { text: 'Play Now', href: '' }
    ];

    links.forEach(function(link) {
        var anchor = document.createElement('a');
        anchor.textContent = link.text;
        anchor.href = link.href;
        dropdownContent.appendChild(anchor);
    });
});

// Slider

let slideWidth = $('#slide').width()
let slideDuration = 1000
let slides      = $('#slides')
let waitTime = 7500
$('#slide:last-child').prependTo($('#slides'))

slidesDoNothing(waitTime)

function sliderMoveRight(){
    let slideWidth = $('#slide').width()
    slides.animate({
        left: -slideWidth
    }
    , slideDuration
    , ()=>{
            let firstChild  = $('#slide:first-child')
            firstChild.appendTo(slides)
            slides.css({"left": ""})
            slidesDoNothing(waitTime)
        }
    )
}

function slidesDoNothing(waitTime){
    slides.animate({"left":""}, waitTime , ()=>{sliderMoveRight()})
}


