import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { IMC, notANumber } from './utils.js';

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');



inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

// onsubmit vai submeter ou carregar o formulario quando clicar no botao
form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const showAlertError = notANumber(weight) || notANumber(height);

    const result = IMC(weight, height);
    const message = `Seu IMC é de ${result}`;
    
    

   

    if(showAlertError){
      AlertError.open();
      return;
    } else{
      AlertError.close();
    }

    Modal.message.innerText = message;
    Modal.open();
    
}


