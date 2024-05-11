import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
  return (
    <main className="holder">
        <div>
            <img src="img/ventana.jpeg" alt="ventana" />
        </div>
        <div className="columnas">
            <section className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni in doloremque perferendis corporis, saepe, voluptas alias rerum officiis et explicabo debitis necessitatibus accusantium obcaecati deleniti ad voluptatem recusandae. Dolores!</p>
            </section>
            <section className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Excelente diseño</span>
                    <span className="autor">David Gilmour - davidgilmour.com/</span>
                </div>
            </section>
        </div>
    </main>
  );
}

export default HomePage;