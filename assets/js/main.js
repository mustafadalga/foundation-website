/*Features*/
var features=document.querySelectorAll('.feature-item');

function resetActiveClass(){
    features.forEach(item=>{
        item.classList.remove("active");
    });
}

features.forEach(feature=>{
    feature.addEventListener('click',(event)=>{

        if (!event.currentTarget.classList.contains('active')) {
            resetActiveClass();
        }
        event.currentTarget.classList.toggle('active')
    })
})