



const cambioTamaño=()=>{
    if (screen.width>=1440){
        document.querySelector('.rrss').classList.add('hide');
        document.querySelector('.card-foot').classList.remove('hide');
    }
    if (screen.width<1440){
        const div = document.querySelector('.rrss-box-desktop');
        if (div.classList.contains('hide')){
            return;
        }else{
            div.classList.add('hide');
        }
    }
}

const selectores = document.querySelectorAll('.boxRRSS');



selectores.forEach(selector => {
    selector.addEventListener('click', () => {

        if (screen.width < 1440) {
            const rrss = document.querySelector('.rrss');
            const cf = document.querySelector('.card-foot');
            if (rrss.classList.contains('hide')){
                rrss.classList.remove('hide');
                cf.classList.add('hide');
            }else{
                rrss.classList.add('hide');
                cf.classList.remove('hide');
            }
            
        } else {
            const div = document.querySelector('.rrss-box-desktop');
            if (div.classList.contains('hide')){
                div.classList.remove('hide');
            }else{
                div.classList.add('hide');
            }
        }
    })
});