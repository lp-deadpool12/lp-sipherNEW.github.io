// Создаем 3 константы в которых по id получаем 3 элемента из html
const openPopUp = document.getElementById('open_pop_up');
const popUp = document.getElementById('wrapper')
const popUpClose = document.getElementById('closePopUp')

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

popUpClose.addEventListener('click', () => {
    popUp.classList.remove('active');
})

// Чтение файла при нажатии на open file

let SELECT_FILE_VALUE; // Значение прочтенного файла в дальнейшем будет импортированна в основной редактор 
let SELECT_FILE_NAME;
let getInpLabel = document.getElementById("selectFile")

getInpLabel.addEventListener("change", function() {
    isFileSelected()
})

function isFileSelected() {
    let getInp = document.getElementById("input__file") // Получаем инпут куда загружают файлы
    let reader = new FileReader(); // Создаем новый объект FileReade

    // Если файл загружен
    if (getInp.value) {
        let file = getInp.files[0] // Получаем первый файл
        reader.readAsText(file); // Читаем содержимое файла как текст
        reader.onload = function() { // Выполнитсяв при загрузке файла
            SELECT_FILE_VALUE = reader.result // Записываем в переменную результат чтения 
            console.log(SELECT_FILE_VALUE);
            localStorage.setItem("fileVal", SELECT_FILE_VALUE)
            SELECT_FILE_NAME = file.name
                //console.log(SELECT_FILE_NAME);
            localStorage.setItem("fileName", SELECT_FILE_NAME)
            console.log(localStorage.getItem("fileName"));
            window.location.href = 'CodeEditor.html';
        };
        reader.onerror = function() { // // Выполнитсяв если произошла ошибка при загрузке файла
            console.log(reader.error);
            alert(reader.error)
        };
        // Если файл не загружен
    } else {
        alert("File not selected")
    }
}

// export {SELECT_FILE_NAME}