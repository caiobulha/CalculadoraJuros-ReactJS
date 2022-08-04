import styles from './Inputs.module.css'
import { useState } from 'react'

function Inputs() {
    const[preco, setPreco] = useState()
    const[valorMensal, setValorMensal] = useState()
    const[jur, setJur] = useState()
    const[par, setPar] = useState()
    const[showResult, setShowResult] = useState(false)

    var i = 1;
    var j = 0;
    var parF = parseInt(par)
    var ValorM = parseFloat(valorMensal)
    var ValorF1 = parseFloat(preco);
    var calc = parseFloat(jur/100 + 1)
    var res = document.getElementById('res')
    var imp = ""

    function Calcular() {
        setShowResult(true)
        debugger    
        while (i <= parseFloat(parF)){
            ValorF1 = ValorF1 * calc
            // return
            ValorF1 = ValorF1 + parseFloat(ValorM)
            console.log(ValorF1)
            i++
            imp = imp + " Mês" + (i - 1) + "R$" + ValorF1.toFixed(2) + "<br>" + "<br> "
        }

        if(showResult === true) {
            res.style.display = "block"
        }
        res.innerHTML = <h1 className={styles.resultados}>Resultados</h1> + "<br>" + imp
    }

        function CalcularSelic() {
            var j = 0;
            while(j < parF) {
                var calc = 13.25/100 + 1;
                ValorF1 = ValorF1 * calc;
                ValorF1 = ValorF1 + parseInt(ValorM)
                console.log(ValorF1)
                j++
            }
            
        }

    return (
        <div className={styles.inputContainer}>
            <div className={styles.res} id="res">Resultados</div>
            <div className={styles.inputs}>
                <input type='number' placeholder='Digite o Valor Inicial:' className={styles.preco} onChange={(e) => setPreco(e.target.value)}></input>

                <input type='number' placeholder={'Digite o Valor a ser Inserido Mensalmente:'} className={styles.valorMensal} onChange={(e) => setValorMensal(e.target.value)}></input>

                <input type='number' placeholder={'Digite o a porcentagem:'} className={styles.jur} onChange={(e) => setJur(e.target.value)}></input>

                <input type='number' placeholder={'Digite o Numero de Meses:'} className={styles.par} onChange={(e) => setPar(e.target.value)}></input>

                <button className={styles.calcular} onClick={Calcular}>Calcular</button>
                <button className={styles.calcularSelic} onClick={CalcularSelic}>Calcular (13,25%)</button>
            </div>
        </div>
    )
}

export default Inputs