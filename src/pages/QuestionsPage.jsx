import React from 'react';
import './../styles/questionsPage.css';
import Footer from '../components/Footer';

const QuestionsPage = () => {
    return ( 
        <>
            <div className="question-container">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Как происходит контроль качества продукции на вашем предприятии?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Наше предприятие осуществляет контроль качества продукции на всех этапах производства. Мы используем системы проверки, тестирования и анализа для обеспечения соответствия стандартам качества и минимизации дефектов продукции.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Какие методы анализа качества продукции применяются на вашем предприятии?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Мы используем разнообразные методы анализа качества, включая статистические подходы, контрольные точки, тестирование образцов и системы управления качеством для оценки и улучшения производственных процессов.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Каковы методы контроля качества продукции на вашем предприятии?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Наше предприятие использует разнообразные методы контроля качества, включая статистические анализы, проверку образцов, аудиты качества процессов производства и системы управления качеством для обеспечения соответствия стандартам и требованиям.</div>
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default QuestionsPage;
