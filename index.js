
function removeDuplicates(array) {
    const setOfArray = new Set(array);
    return [...setOfArray];
}
function ArrayProcess() {
    const inputvalue = document.getElementById('array-input-field').value;
    const inputArray = inputvalue.split(',').map(Number);
    const uniqueValues = removeDuplicates(inputArray);

    document.getElementById('unique-values-field').textContent = uniqueValues.join(', ');
}

document.getElementById('choose-button').addEventListener('click', ArrayProcess);
