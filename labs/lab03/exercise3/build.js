const body = document.body;

const createTableData = (data) => {
    const node = document.createElement('td');
    node.appendChild(document.createTextNode(data));
    return node;
}

const createTableRow = (name, age, height) => {
    const tr = document.createElement('tr');
    tr.appendChild(createTableData(name));
    tr.appendChild(createTableData(age));
    tr.appendChild(createTableData(height));
    return tr;
}

const container = document.createElement('div');
container.style.backgroundColor = '#000000'

const atag = document.createElement('a');
atag.href = 'www.google.com'
atag.target = '_blank'

const imgNode = document.createElement('img');
imgNode.src = 'https://i.ytimg.com/vi/yJiVZUKAS84/maxresdefault.jpg' 

atag.appendChild(imgNode);

const table = document.createElement('table');
table.appendChild(createTableRow('Name', 'Age', 'Height'));
table.appendChild(createTableRow('Sarah', '22', '188'));
table.appendChild(createTableRow('Lin', '42', '134'));
table.appendChild(createTableRow('Samir', '21', '155'));
table.appendChild(createTableRow('Wayne', '29', '162'));
table.appendChild(createTableRow('Eckhart', '112', '144'));

container.appendChild(atag);
container.appendChild(table);

body.appendChild(container)