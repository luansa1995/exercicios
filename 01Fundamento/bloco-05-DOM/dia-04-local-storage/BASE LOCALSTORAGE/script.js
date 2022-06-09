function adicionar()
{
    localStorage.setItem(txtChave.value, txtValor.value);
    alert("Item adicionado.");
    txtChave.value = txtValor.value = "";
}




function ler()
{
    var obj = localStorage.getItem(txtChave.value);
    if(obj != null)
        alert(obj)
    else
        alert("O item procurado não existe.")
}


function remover()
{
    localStorage.removeItem(txtChave.value);
    alert("Item removido.");
}

function limpar()
{
    localStorage.clear();
    alert("");
}