// инициализация окна авторизации

const singInOrUpWindow = {
    isAccessAllowed: true,
    wrapper : document.createElement('div'),
    inputsContainer: document.createElement('div'),
    loginInput: document.createElement('input'),
    passwordInput: document.createElement('input'),
    submitButton: document.createElement('button'),
}

// стили окна авторизации

singInOrUpWindow.wrapper.style.height = '300px';
singInOrUpWindow.wrapper.style.width = '100px';
singInOrUpWindow.wrapper.style.position = 'absolute';
singInOrUpWindow.wrapper.style.top = '10px';
singInOrUpWindow.wrapper.style.right = '10px';
singInOrUpWindow.wrapper.style.zIndex = '999';
singInOrUpWindow.wrapper.style.backgroundColor = 'yellow';

singInOrUpWindow.wrapper
    .appendChild(singInOrUpWindow.inputsContainer);

singInOrUpWindow.inputsContainer
    .appendChild(singInOrUpWindow.loginInput)

singInOrUpWindow.inputsContainer
    .appendChild(singInOrUpWindow.passwordInput)

singInOrUpWindow.inputsContainer
    .appendChild(singInOrUpWindow.submitButton);

// разработка попап

const takeIt = document.createElement('div');

//разработка логотипа с стилями

const logo = document.createElement('h1');
logo.innerText = "";
logo.style.fontSize = '46px';
logo.style.fontFamily = 'monospace';
logo.style.fontVariant = 'petite-caps';
logo.style.fontStyle = 'oblique';
logo.style.fontWeight = 'revert';
logo.style.color = 'gold';

// стили попап

takeIt.style.position = 'absolute';
takeIt.style.top = '10px';
takeIt.style.right = '10px';
takeIt.style.height = '400px';
takeIt.style.width = '250px';
takeIt.style.zIndex = '9999';
takeIt.style.backgroundColor = 'black';
takeIt.style.display = 'flex';
takeIt.style.flexDirection = 'column';
takeIt.style.justifyContent = 'space-around';
takeIt.style.alignItems = 'center';
takeIt.style.border = 'solid';
takeIt.style.overflow = "hidden";
takeIt.style.boxSizing = 'border-box'

// разработка дива с английским словом внутри

const wordDiv = document.createElement('div');
const word = document.createElement('h1');
word.innerText = "";
wordDiv.appendChild(word);

// стили дива с английским словом

wordDiv.style.border = 'solid';
wordDiv.style.width = '100%';
wordDiv.style.height = '40%';
wordDiv.style.backgroundColor = 'gold';
wordDiv.style.display = 'flex';
wordDiv.style.justifyContent = 'center';
wordDiv.style.alignItems = 'center';

// стили английского слова

word.style.fontSize = '35px'
word.style.fontVariant = 'all-petite-caps'
word.style.fontWeight = 'revert';

// разработка дива с переводом внутри

const translDiv = document.createElement('div');
const transl = document.createElement('h1');
transl.innerText = 'Test transctiption';
translDiv.appendChild(transl);

// стили дива с переводом

translDiv.style.border = 'solid';
translDiv.style.width = '100%';
translDiv.style.height = '40%';
translDiv.style.backgroundColor = 'gold';
translDiv.style.display = 'flex';
translDiv.style.justifyContent = 'center';
translDiv.style.alignItems = 'center';

//стили текста перевода

transl.style.fontSize = '28px'
transl.style.fontVariant = 'all-petite-caps'
transl.style.fontWeight = 'revert';
translDiv.appendChild(transl);

// кнопка тейк-ит

const button = document.createElement('button');
button.innerText = 'Take it!';

// стили кнопки

button.style.color = 'gold';
button.style.width='100%';
button.style.backgroundColor='black';
button.style.border='solid 2px';
button.style.fontSize='large';
button.style.fontFamily = 'monospace';
button.style.fontVariant = 'petite-caps';
button.style.fontWeight = 'bolder ';

// пихаем все в попап, а сам попап в ДОМ

takeIt.appendChild(logo);
takeIt.appendChild(wordDiv);
takeIt.appendChild(translDiv);
takeIt.appendChild(button);

singInOrUpWindow.isAccessAllowed ?
    document.getElementsByTagName('body')[0].appendChild(takeIt)
    : document.getElementsByTagName('body')[0].appendChild(singInOrUpWindow.wrapper)

// функция получения рандомного слова

takeIt.getRandomWord = async () => {
    try {
        const response = await fetch('http://localhost:8000/getRandomWord', {
            method: 'GET'
        });
        const json = await response.json()
        const newWord = json.word;
        const newTranslation = json.translation;

        word.innerText = newWord;
        transl.innerText = newTranslation;
    } catch (e) {
        word.innerText = e.message;
    }
}

// функция получения слова каждые 60 минут

takeIt.handleButtonPressed = () => {
    setTimeout(async () => {
        await takeIt.getRandomWord();
        takeIt.style.height = '400px';
        takeIt.style.border = 'solid';
    }, 1000 * 60 * 60);

    takeIt.style.height = '0px';
    takeIt.style.border = 'none';
}

// прослушиватели событий

window.onload = takeIt.getRandomWord;

button.addEventListener('click', takeIt.handleButtonPressed);