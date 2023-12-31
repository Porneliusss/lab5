import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import data from './scheduleData.json'
import './../styles/schedulePage.css'
import ScheduleItem from './../components/ScheduleItem'

const SchedulePage = () => {
    const [schedules, setSchedules] = useState([]);
    
    useEffect(() => {
        setSchedules(data)
    }, []);
    
    return ( 
        <>
            <div className="schedule_page-container">
                <table>
                    <thead className='schedule_page-thed'>
                        <tr>
                            <th>Продукт</th>
                            <th>Дата проверки</th>
                            <th>Время проверки</th>
                            <th>Результат проверки</th>
                        </tr>
                        </thead>
                        <tbody className='schedule_page-tbody'>
                            {schedules.map(schedule => (
                                <ScheduleItem key={schedule.id} schedule={schedule}/>
                            ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </>
     );
}
 
export default SchedulePage;