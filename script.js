document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value;

    if (itemValue) {
        addItemToList(itemValue);
        itemInput.value = '';
    }
});

function addItemToList(value) {
    const itemList = document.getElementById('itemList');
    const li = document.createElement('li');

    li.textContent = value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.onclick = function() {
        itemList.removeChild(li);
    };

    li.appendChild(deleteButton);
    itemList.appendChild(li);
}

// Função para atualizar um item (opcional)
function updateItem(li, newValue) {
    li.childNodes[0].textContent = newValue;
}
