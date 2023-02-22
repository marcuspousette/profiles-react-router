export default function Faq() {
    return (
        <div className="faq">
            <h3>Frequently Asked Questions</h3>

            {[1, 2, 3, 4, 5].map((n) => (
                <div className="faq__question" key={n}>
                    <p>
                        <strong>Lorem ipsum dolor sit amet.</strong>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum, recusandae doloribus qui molestias similique
                        asperiores incidunt. Obcaecati tenetur consectetur
                        dolorem eius ex, ad, laudantium inventore quia odio
                        minus eligendi ipsa?
                    </p>
                </div>
            ))}
        </div>
    )
}
