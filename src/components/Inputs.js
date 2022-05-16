import styles from './Inputs.module.css'

function Inputs() {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputs}>
                <input type={'number'} placeholder={'Digite o Valor Inicial:'} className={styles.preco}></input>
                <input type={'number'} placeholder={'Digite o Valor a ser Inserido Mensalmente:'} className={styles.valorMensal}></input>
                <input type={'number'} placeholder={'Digite o a porcentagem:'} className={styles.jur}></input>
                <input type={'number'} placeholder={'Digite o Numero de Meses:'} className={styles.par}></input>
                <button className={styles.calcular}>Calcular</button>
            </div>
        </div>
    )
}

export default Inputs