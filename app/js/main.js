let phoneINP = document.querySelector('.input__tel');
let inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(phoneINP);
inputMask.style.fontsize="16px";
inputMask.style.opacity="0.4";
// // /. inputmask