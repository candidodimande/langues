var menu_button = document.querySelector('.menu-button')
var menu_list = document.querySelector('.active-menu')
var list = document.querySelector('.menu-list')


menu_button.addEventListener('click', function(){
    menu_list.classList.toggle('show-menu')
    list.classList.toggle('show-menu-list')
})

function  mudouTamanho() {
    if (window.innerWidth >= '768') {
        menu_list.style.height = '0'
    } else {
        menu_list.style.height = '50'
    }

    if (window.innerWidth >= '768') {
        list.style.visibility = 'visible'
    } else {
        list.style.visibility = 'hidden'
    }
    
}

