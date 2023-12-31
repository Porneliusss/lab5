import React, { useState } from "react";
import './../styles/QualityControlsItem.css'
import MyPopup from './CustomPopup'


const QualityControlsItem = ({qualityControls}) => {
  const [isShow, setIsShow] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editedMember, setEditedMember] = useState(null);
  const [isAddSuccess, setIsAddSuccess] = useState(false);
  const [isShowAlert, setIsShowAlert] = useState(false);

  function handleMemberChange(member) {
    setIsShow(false);
    setEditedMember(member);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditedMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  }

  function handleSaveChanges(other) {
    setEditedMember(null);
    qualityControls.members.map(member=>{
      if(member.id === other.id){
        if(editedMember.name!==''&&editedMember.contact!==''&&editedMember.experience!==''){
          member.name = editedMember.name;
          member.contact = editedMember.contact;
          member.experience = editedMember.experience;
        }
        
      }
    })
    setIsShow(true);
    
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 
  function handleSaveAddingChange() {
    let isUniq = false;
    let randomId;

    do {
      randomId = getRandomInt(103, 999);
      isUniq = !qualityControls.schedule.some(one => one.id === randomId);
    } while (!isUniq);

    try {
      if(isUniq){
        setIsShowAlert(true);
        if(editedMember?.date!==undefined&&editedMember?.result!==undefined&&editedMember?.product!==undefined){
          const newElement = {
            id: randomId,
            product : editedMember.product,
            date: editedMember.date,
            result: editedMember.result,
          };
          qualityControls.schedule.push(newElement);
          setIsAdding(false);
          setIsAddSuccess(true);
        }
        else{
          setIsAddSuccess(false);
        }
      }
    } catch (error) {
        setIsAdding(false);
        setEditedMember(null);
    }
  }

  function handleCancelChanges() {
    setIsShow(true);
    setEditedMember(null);
    setIsAdding(false);
  }

  function handleAddShedule() {
    setIsAdding(true);
  }
    return ( 
      <div className="qualityControls-container">
          {isShowAlert && (isAddSuccess ? (
            <div className="alert alert-success text-bg-success" role="alert">
              Добавление выполнено успешно!
              <button style={{padding:'.7rem'}} onClick={() => setIsShowAlert(false)} type="button" className="btn-close" aria-label="Close"></button>
            </div>
          ): (<div className="alert alert-success text-bg-danger" role="alert">
          Не все поля заполнены!
          <button style={{padding:'.7rem'}} onClick={() => setIsShowAlert(false)} type="button" className="btn-close" aria-label="Close"></button>
        </div>))}


            <div className="qualityControlsItem-title">
                <h2 className="qualityControls-name">{qualityControls.name}</h2>
            </div>
            <div className="qualityControls-body-container">
              <div className="qualityControls-member">
                <ul className="qualityControlsItem-member-container">
                    {qualityControls.members.map(member => (
                        <li key={member.id} >
                          <div className="qualityControls_member-textbox">
                            <h3 className="qualityControlsItem_member-name">{member.name}</h3>
                            <p>Опыт работы: {member.experience}</p>
                          </div>
                            <MyPopup
                              item = {<button className='popup-btn'>Подробнее</button>}
                              popupContent = {<div style={{display: 'flex',
                                        gap: '2rem', padding:'2rem 3rem'}}>
                              <img src={member.img} alt="img"  style={{width:'50%'}}/>
                                 {isShow ? <div style={{fontSize:'1.2rem'}}>
                                  <p style={{fontSize:'2rem', margin:'1rem 0'}}>{member.name}</p>
                                  <p style={{marginBottom:'.5rem'}}>Контакты: {member.contact}</p>
                                  <p style={{marginBottom:'.7rem'}}>Опыт работы: {member.experience}</p>
                                  <button className="popup-btn" onDoubleClick={() => handleMemberChange(member)}>Изменить</button>
                                </div> : <div style={{display: 'flex', flexDirection:'column'}}>
                                  <label htmlFor="name">Имя</label>
                                  <input
                                    type="text"
                                    name="name"
                                    value={editedMember?.name || ''}
                                    onChange={handleInputChange}
                                  />
                                  <label htmlFor="contact">Контакты</label>
                                  <input
                                    type="text"
                                    name="contact"
                                    value={editedMember?.contact || ''}
                                    onChange={handleInputChange}
                                  />
                                  <label htmlFor="experience">Опыт работы</label>
                                  <input
                                    type="text"
                                    name="experience"
                                    value={editedMember?.experience || ''}
                                    onChange={handleInputChange}
                                  />
                                    <div style={{display:'flex', gap:'1rem', marginTop:'1rem'}}>
                                      <button className="popup-btn" onClick={() => handleSaveChanges(member)}>Сохранить</button>
                                      <button className="popup-btn" onClick={handleCancelChanges}>Отмена</button>
                                    </div>
                                </div>}
                              </div>}
                            />
                        </li>
                    ))}
                </ul>
              </div>

              <div className="qualityControlsItem-schedule">
                <h3 className="qualityControlsItem_schedule-title">Контроли:</h3>
                <div className="qualityControls_schedule-textbox">
                  {qualityControls.schedule.map(item => (
                          <li key={item.id}>
                              <imgp src={item.imgp} alt="imgp"  style={{width:'50%'}}/>
                              <p className="qualityControlsItem_shedule product">Продукция: {item.product}</p>
                              <p className="qualityControlsItem_shedule date">Дата контроля: {item.date}</p>
                              <p className="installationsItem_shedule time">Время: {item.time}</p>
                              <hr />
                          </li>
                      ))}
                      {!isAdding?
                          <button onClick={handleAddShedule} className="popup-btn" style={{marginLeft:'25%'}}>Добавить</button>
                          :
                          <div style={{display:'flex', flexDirection:'column'}}>
                            <input type="text" placeholder="Продукт"
                              name="product"
                              value={editedMember?.product || ''}
                              onChange={handleInputChange}/>
                            <input type="text" placeholder="Дата(гггг-мм-дд)"
                                    name="date"
                                    value={editedMember?.date || ''}
                                    onChange={handleInputChange}/>
                            <input type="text" placeholder="Время(чч:мм)"
                              name="time"
                              value={editedMember?.time || ''}
                              onChange={handleInputChange}/>
                            <div style={{display:'flex', gap:'1rem', justifyContent:'center', marginTop:'1rem'}}>
                              <button className="popup-btn" onClick={handleSaveAddingChange}>Добавить</button>
                              <button onClick={handleCancelChanges} className="popup-btn">Отмена</button>
                            </div>
                          </div>
                      }
                </div>
              </div>     
            </div>     
        </div>
  );
};
 
 
export default QualityControlsItem;