import React from 'react'
import './contentPageStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
 
 
import Accordion from 'react-bootstrap/Accordion';

const ContentPage = ({
    title,
    story,
    tips,
    terms
   }) => {
    return (
      <div>
    
        <div className="contentContainer">
          <h1>{title}</h1>
          <h4>Learn More</h4>
          <div className='accordionContainer'>
       
          <Accordion flush>
            {
                terms.map((term)=> {
                  return (
                    <Accordion.Item eventKey={term.number} >
                    <Accordion.Header>{term.name}</Accordion.Header>
                    <Accordion.Body>
                      {term.definition}
                    </Accordion.Body>
                  </Accordion.Item>
    
                  )
                })
            }
            </Accordion>
    
         
    
          </div>
          <h4>story</h4>
          <div className='storyContainer'>
            <div className='storyText'>
              <p>{story}</p>
            </div>
          </div>
          <h4>tips</h4>
          <div className='tipsContainer'>
            <div className='tipsText'>
              <p>{tips}</p>
            </div>
          </div>
    
        </div>
    
      </div>
    )
   }
    
   export default ContentPage
   