import React, { useState, useEffect } from 'react';
import QualityControlsItem from '../components/QualityControlsItem';
import Footer from '../components/Footer';
import data from './QualityControlsData.json'
import './../styles/qualityControls.css'


const QualityControls = () => {
  const [QualityControls, setQualityControls] = useState([]);
    
  useEffect(() => {
    setQualityControls(data)
  }, []);
  
  
    if (QualityControls.length === 0) {
      return <div>Загрузка...</div>;
    }

  
    return ( 
      <>
        <div className="qualityControls_page-container">
            {QualityControls.map(qualityControls => (
              <QualityControlsItem key={qualityControls.id} qualityControls={qualityControls} />
            ))}
            
        </div>
        <Footer/>
      </>

     );
}
 
export default QualityControls;