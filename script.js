// {/* <div class="block">

// </div>
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1(использовать setAttribute) */}




// const blockEl = document.querySelector('.block');
// const itemEl = document.createElement('div');
// itemEl.setAttribute('class', 'item');
// blockEl.appendChild(itemEl);
// itemEl.textContent = 'Элемент внутри';
// itemEl.style.color = 'blue';
// itemEl.style.border = '1px solid black';
// itemEl.style.padding = '16px';
// itemEl.style.backgroundColor = '#f8f8f8';






// // Необходимо с помощью querySelector найти параграф с классом text
// // Вывести в консоль соседний элемент h2
// // Вывести в консоль родительский элемент content
// // Вывести в консоль картинку
// // Вывести в консоль родительский элемент elem



// const paragraphEl = document.querySelector('.text');
// console.log(paragraphEl.previousElementSibling);
// console.log(paragraphEl.parentElement);
// console.log(paragraphEl.parentElement.previousElementSibling);
// console.log(paragraphEl.parentElement.parentElement);



// // С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей


// const paragraphH2El = document.querySelector('.text');

// console.log(paragraphH2El.parentElement);
// console.log(paragraphH2El.parentElement.parentElement);
// console.log(paragraphH2El.parentElement.parentElement.parentElement);
// console.log(paragraphH2El.parentElement.parentElement.parentElement.parentElement);
// console.log(paragraphH2El.parentElement.parentElement.parentElement.parentElement.parentElement);





/* Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным */



// const btnEl = document.querySelector('.btn');
// const inputEl = document.querySelector('input');
// const formEl = document.querySelector('form');
// let h2El;

// btnEl.addEventListener('click', (event) => {
//     event.preventDefault();

//     if (inputEl.value.trim() === '') {
//         if (!h2El) {
//             h2El = document.createElement('h2');
//             h2El.textContent = 'Поле ввода не заполненно';
//             inputEl.after(h2El);
//         }
//         inputEl.style.border = '4px solid red';
//     } else {
//         if (h2El) {
//             inputEl.style.border = '1px solid black';
//             h2El.remove();
//             h2El = null;
//         }
//         formEl.submit();
//         console.log('Форма отправлена');
//         formEl.reset();
//     }
// });







// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.



const dropItemEl = document.querySelectorAll('.dropdown-item');
dropItemEl.forEach(element => {
    element.classList.add('super-dropdown')
    console.log(element);
});



// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.



const btnEl = document.querySelector('.btn');
btnEl.classList.toggle('btn-secondary');
console.log(btnEl);



// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".



const menuEl = document.querySelector('.menu');
menuEl.classList.remove('dropdown-menu');
console.log(menuEl);



// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`



const inserAEl = document.querySelector('div');
inserAEl.insertAdjacentHTML('afterend', '<a href="#">link</a>');
const bodyEl = document.querySelector('body');
console.log(bodyEl);



// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".



const dropDownEl = document.querySelector('#dropdownMenuButton');
dropDownEl.setAttribute('id', 'superDropdown');
console.log(dropDownEl);




// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.



const dataEl = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
dataEl.dataset.dd = 3;
console.log(dataEl);



// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".


const deleteTypeEl = document.querySelector('.dropdown-toggle');
delete deleteTypeEl.removeAttribute('type');
console.log(deleteTypeEl);
