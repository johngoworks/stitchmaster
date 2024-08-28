function activate_menu() {
    let nav_display = document.getElementById('nav')
    let display_status = nav_display.style.display
    if (display_status == 'block') {
        nav_display.style.display = 'none'
    } else {
        nav_display.style.display = 'block'
    }
}   