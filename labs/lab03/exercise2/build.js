const body = document.body;

const createParagraph = (sentence) => {
    const para = document.createElement('p');
    const node = document.createTextNode(sentence);
    para.appendChild(node);
    return para;
}

const createListItem = (label) => {
    const item = document.createElement('li');
    const node = document.createTextNode(label);
    item.appendChild(node);
    return item;
}

const div = document.createElement('div');
const list = document.createElement('ul');

div.appendChild(createParagraph('Hello there,'));
div.appendChild(createParagraph('I am a llama, hear my sirens roar:'));
div.appendChild(list)

list.appendChild(createListItem('The'))
list.appendChild(createListItem('Duck'))
list.appendChild(createListItem('Lemonade'))
list.appendChild(createListItem('Stand'))

document.body.appendChild(div);