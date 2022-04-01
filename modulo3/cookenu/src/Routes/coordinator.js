export const goToLogin = (history) => {
    history.pushState("/Login")
}

export const goToCadastro = (history) => {
    history.pushState("/Cadastro")
}

export const goToListaReceita = (history) => {
    history.pushState("/")
}

export const goToDetalheReceita = (history, id) => {
    history.pushState(`/DetalheReceita/${id}`)
}

export const goToAdicionarReceita = (history) => {
    history.pushState("/AdicionarReceita")
}


