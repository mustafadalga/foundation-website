/*Tab Menu*/
var tabMenu=document.querySelectorAll('.tabs-item');
var tabsPane=document.querySelectorAll('.tab-pane');

function resetTabMenu(){
    tabMenu.forEach(tabItem=>{
        tabItem.classList.remove("active");
    });
    tabsPane.forEach(tabPane=>{
        tabPane.classList.remove("active");
    });
}

tabMenu.forEach(tabItem=>{
    tabItem.addEventListener('click',(event)=>{
        resetTabMenu();
        let tabName=event.currentTarget.getAttribute('data-toggle');
        event.currentTarget.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});