const countBtn = document.getElementById('count')
const decreaseBtn = document.getElementById('decrease_btn')
const resetBtn = document.getElementById('reset_btn')
const increaseBtn = document.getElementById('increase_btn')
const headingTitle = document.getElementById('heading_title')

let count = 0
decreaseBtn.addEventListener('click', () =>{
    if( count > 0){
        count--
        countBtn.style.color = '#e73c3c'
        headingTitle.style.color = '#e73c3c'
    }
    else if( count == 0){
        countBtn.style.color = '#ff6347'
        headingTitle.style.color = '#363636'
    }
    countBtn.innerText = count
    
})
resetBtn.addEventListener('click', () =>{
    countBtn.innerText = 0
    count = 0
    countBtn.style.color = '#ff6347'
    headingTitle.style.color = '#363636'
    
})
increaseBtn.addEventListener('click', () =>{
    if( count >= 0){
        count++
        countBtn.innerText = count
        countBtn.style.color = '#3ca03c'
        headingTitle.style.color = '#3ca03c'
    }
    else{
        countBtn.style.color = '#ff6347'
        headingTitle.style.color = '#363636'
    }
})

