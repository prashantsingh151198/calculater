

let inputEl = document.querySelector('input')
let btns = document.querySelectorAll('button')


for( let button of btns){
    button.addEventListener('click' , function(e) {
        let btntext = e.target.innerText;
        if(btntext === 'C'){
            inputEl.value = "";
        }
        else if(btntext === '='){
            try{
            inputEl.value = eval(inputEl.value);
            }
            catch(err){
                inputEl.value = "invalid"
            }
        }
        else{
            inputEl.value = inputEl.value + btntext;
        }
    })
}



























