import React from 'react'
import './AboutContent.css'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="true" className="img" />
                </div>
                <div className="img-stack bottom">
                    <img src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="true" className="img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent