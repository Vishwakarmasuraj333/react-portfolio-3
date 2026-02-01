import "./index.css"
export default function Login() {

    return (
        <section className="login">
            <h2 className="section-title">Login</h2>
            <div className="hr"></div>

            <form className="login-form">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login 🔐</button>
            </form>
        </section>
    );
}
