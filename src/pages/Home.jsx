import Footer from './../components/Footer'
import AboutUs from '../components/AboutUs';
import './../styles/home.css';

const Home = () => {
    return ( 
        <>
             <AboutUs/>
             <div className="features">
             <h2>Наши преимущества</h2>
    <ul>
        <li>Строгий контроль качества на всех этапах производства</li>
        <li>Применение передовых технологий и методов контроля</li>
        <li>Гибкость в адаптации производственных процессов</li>
        <li>Эффективная система учета и анализа данных о качестве</li>
        <li>Высокий уровень надежности и соответствия стандартам</li>  </ul>
            </div>
            <Footer/>
        </>
     );
}
 
export default Home;