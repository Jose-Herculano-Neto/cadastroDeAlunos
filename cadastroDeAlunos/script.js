const form = document.getElementById('cadastro-form');
const listaAlunos = document.getElementById('lista-alunos');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nomeAluno = document.getElementById('nome').value;
    if (nomeAluno) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${nomeAluno}</span>
            <button class="excluir">Excluir</button>
        `;
        listaAlunos.appendChild(li);
        document.getElementById('nome').value = '';

        li.querySelector('.excluir').addEventListener('click', function () {
            li.remove();
        });
    }
});
