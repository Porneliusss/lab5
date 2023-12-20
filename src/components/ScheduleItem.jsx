import './../styles/scheduleItem.css'
import React, { useState } from "react";

const ScheduleItem = ({schedule}) => {
    const [schedule_item, setSchedule_item] = useState({
        id: schedule.id,
        product: schedule.product,
        qualityControlDate:schedule.qualityControlDate,
        qualityControlTime:schedule.qualityControlTime,
        status: schedule.status
    }
    );
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function handleDropdownItemClick(value) {
        setSchedule_item(prevState => ({
            ...prevState,
            status : value
          }));
      }
    function handleCancel(){
        setIsPopupOpen(false);
    }
    const rowClassName = schedule_item === null ? "schedule_item-tr-hidden" : "schedule_item-tr";
    return ( 
        <>
      
           {!isPopupOpen&&
           <tr className={rowClassName} key={schedule.id}>
                <td>{schedule.product}</td>
                <td>{schedule.qualityControlDate}</td>
                <td>{schedule.qualityControlTime}</td>
                <td>
                    <div className="dropdown">
                        <button className='dropdown-btn' type="button-d" data-bs-toggle="dropdown" aria-expanded="false">
                            {schedule_item.status}
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#" onClick={() => handleDropdownItemClick('Прошел успешно')}>Прошел успешно</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleDropdownItemClick('Не прошел')}>Не прошел</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleDropdownItemClick('В ожидании проверки')}>В ожидании</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
           } 
            
        </>
     );
}
 
export default ScheduleItem;