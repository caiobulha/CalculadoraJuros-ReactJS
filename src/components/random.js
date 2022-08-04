import PropTypes from 'prop-types'

function User({nome, idade}) {
    return(
        <>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
        </ul>
        </>
    )
}

User.propTypes = {
    nome: PropTypes.string,
}

User.deafaultProps = {
    nome: PropTypes.string,
    idade: PropTypes.number,
}

export default User