import { LinkButton } from "../../../common/button/LinkButton"
import { SubTitle } from "../../../common/texto/SubTitle"
import { BlogCard } from "./BlogCard"



export const SeccionBlogs = () => {
    return (
        <section className="mt-10 flex flex-col justify-center items-center">
            <SubTitle texto="Nuestro blog" />
            {/* <div className="py-10 sm:grid grid-cols-2 gap-6 lg:grid-cols-5"> */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 justify-items-center">
                <BlogCard
                    texto="¿Existe la comida gourmet para perro? ¿Por qué mi perro explora la comida con el hocico en lugar de utilizar la lengua? ¿Siente placer al saborear un guiso especial? ¿Los perros tienen gusto? ¿Los perros distinguen sabores?"
                    titulo="¿Nuestros perros tienen gusto y distinguen sabores?"
                    imagen="/blog/perro-comiendo.jpg"
                    fecha="13/12/2024"
                />
                <BlogCard
                    titulo='¿Como tu gato te dice "Te Quiero"?'
                    texto='Los gatos también tienen sus muestras de cariño y afecto, aunque lo hacen con sus propios comportamientos y gestos corporales: ¿cómo los gatos dicen te quiero?'
                    imagen="/blog/gatito2.jpg"
                    fecha="13/12/2024"
                />
                <BlogCard
                    titulo="¿Que sueñan los perros?"
                    texto="Según la confirmación de un estudio de una universidad americana, se demostró que los perros sueñan como lo hacemos los humanos, recordando cosas que hacen en su día a día, como la relación con sus propietarios, la comida o los paseos."
                    imagen="/blog/perro-durmiendo.jpg"
                    fecha="13/12/2024"
                />
                <BlogCard
                    titulo="¿Como proteger a tu perro del sol y el calor?"
                    texto="El verano es una de las estaciones más increíbles del año pero el aumento de la temperatura puede ser perjudicial para tu perro, ya que en cuestión de minutos puede sufrir un golpe de calor que incluso podría provocarle la muerte. Esto es debido a que los perros no sudan como los humanos, si no que jadean, siendo esta su forma de disminuir su temperatura corporal. Por eso, es fundamental cuidarlo en esta época del año contra el calor excesivo. Descubre unos consejos para que tu perro pueda disfrutar del verano tanto como tú"
                    imagen="/blog/perro-tomando-agua.jpg"
                    fecha="13/12/2024"
                />
                {/*<BlogCard
                    texto="¿Existe la comida gourmet para perro? ¿Por qué mi perro explora la comida con el hocico en lugar de utilizar la lengua? ¿Siente placer al saborear un guiso especial? ¿Los perros tienen gusto? ¿Los perros distinguen sabores?"
                    titulo="¿Nuestros perros tienen gusto y distinguen sabores?"
                    imagen="/blog/perro-comiendo.jpg"
                    fecha="13/12/2024"
                /> */}
            </div>
            <LinkButton
                texto="Ver Mas"
            />
        </section>
    )
}