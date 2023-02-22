export default function Contact() {
    return (
        <div className="contact">
            <h3>Kontakta oss</h3>
            <form>
                <label>
                    <span>Email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Fråga:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Skicka</button>
            </form>
        </div>
    )
}
