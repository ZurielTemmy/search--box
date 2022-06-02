let select = document.getElementById('select')
let list = document.getElementById('list')
let selectText = document.getElementById('select-text')
let options = document.getElementsByClassName('options')
let inputField = document.getElementById('input-field')

select.onclick = function(){
    list.classList.toggle('open')
}

        for(option of options){
            option.onclick = function(){
                selectText.innerHTML = this.innerHTML
                inputField.placeholder = 'search ' + selectText.innerHTML
            }
        }