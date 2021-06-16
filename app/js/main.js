let phoneINP = document.querySelector('.input__tel');
let inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(phoneINP);
phoneINP.style.fontsize="16px";
phoneINP.style.opacity="0.6";
// // /. inputmask