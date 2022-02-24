export const getRandomWord = (allWords) => {


    const index = Math.floor(Math.random() * allWords.words.length);
    const word = allWords.words[index];
    const translation = allWords.translations[index];

    return [word, translation];
}