import styles from './Header.module.css'

function Header({nome, empresa}) {
    return(
        <div className={styles.headerContent}>
            <header>
                <nav>
                            <img src={require ('../picpay_logo.png') }alt='Logo do Site'/>
                    <ul>
                            <li><a href='/src/App.js'>Home</a></li>
                            <li><a href='https://www.picpay.com/sobre-nos'>Sobre Nós</a></li>
                            <li><a href='https://blog.picpay.com/?_ga=2.28500476.1741488032.1652140642-1770112317.1644868180'>Blog</a></li>
                    </ul>
                    <ul>
                        <li><a href='./Login.js'>Login</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header