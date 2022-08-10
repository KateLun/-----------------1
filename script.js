let isOpen = false
function openMenu() {
    const container = document.getElementById("myContainer")
    const buttonOpen = document.getElementById("buttonOpen")
    const buttonClose = document.getElementById("buttonClose")

    if (isOpen) { // если открыто
        // нужно зaкрыть
        container.style.display = "none"
        buttonOpen.style.display = "flex"
        buttonClose.style.display = "none"
        isOpen = false
    } else { // если закрыто
        // нужно открыть
        container.style.display = "flex"
        buttonOpen.style.display = "none"
        buttonClose.style.display = "flex"
        isOpen = true
    }
    
}