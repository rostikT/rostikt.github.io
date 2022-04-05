/**
 * Это описание функции mes_go
 * @description Функция обработки введеных значений
 * @param {HTMLElement} form
 * @returns {object}

 */
 function mes_go () {
    let form = document.forms.mess; 
   let noMail= form.m_to.value.indexOf("@");
   if (noMail  == -1) {
   alert("Введите корректный адрес электронной почты");
   return false;
   }
   /**
    * @param {HTMLElement} m_to
    * @returns {false} alert
    */
   let noNameSurnamePatronymic=form.nmsp.value;
   if (noNameSurnamePatronymic == "") {
       alert("Напишите корректное ФИО");
       return false;
   }
   /**
    * @param {HTMLElement} nmsp
    * @returns {false} alert
    */
   let tel=form.tel.value ;
   if (tel == "") {
       alert("Введите номер")
       return false;
   }
   /**
    * @param {HTMLElement} tel
    * @returns {false} alert
    */
   let strana1 = form.strana.value;
   if (strana1 == "") {
       alert ("Напишите страну");
       return false;
   }
   /**
    * @param {HTMLElement} strana
    * @returns {false} alert
    */
   let textarea = form.let.value;
   if (textarea == "") {
       alert("Напишите комментарий");
       return false;
   }
      /**
       * @param {HTMLElement} let
    * @returns {false} alert
    */
}