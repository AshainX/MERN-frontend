import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Webshop</span></h1>
            </header>
            <main className="public__main">
                <p>Currently Unavailable Due To Server Maintanence</p>
                <address className="public__addr">
                    Webshoppe<br />
                    Berhampur <br />
                    Ganjam, OR 760010<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: ASHx</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public