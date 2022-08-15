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
        
      
          
          <div className='accordionContainer'>
            <div className='title'>
              <b>Learn more</b>
            </div>
            <div className='text'>
              <Accordion flush>
                {
                    terms.map((term)=> {
                      return (
                        
                        <Accordion.Item eventKey={term.number} >
                        <Accordion.Header>
                          <p>{term.name}</p>
                          </Accordion.Header>
                        <Accordion.Body>
                          {term.definition}
                        </Accordion.Body>
                      </Accordion.Item>
                   
                      )
                    })
                }
                </Accordion>
            </div>
          </div>
          


          <div className='storyContainer'>
            <div className='title'>
              <b>Story</b>
            </div>
            <div className='text'>
              <div className='storyText'>
                {
                  story.map((item) =>{
                    return (
                    <p>{item.p}</p>
                    )
                  })

                }
              </div>
            </div>
          </div>


          
          <div className='tipsContainer'>
            <div className='title'>
              <b>Tips</b>
            </div>
            <div className='text'>
              <div className='tipsText'>
              <ol style={{ listStyleType: 'decimal' }}>
                {
                  tips.map((item) =>{
                    return (
                    <li>{item.tip}</li>
                    )
                  })

                }
                </ol>
              </div>
            </div>
          </div>
    
        </div>
    
      </div>
    )
   }
    
   export default ContentPage
   