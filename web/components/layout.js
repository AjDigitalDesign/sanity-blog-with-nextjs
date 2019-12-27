import React from 'react'
import Head from './head'
import Nav from './nav';

export default ({ children, title = 'Default Header'}) => (
    <div className="site-main">
        <Head title={title} />
        <Nav/>
        <div className="main-content">
            {children}
        </div>
        <footer>{`this is the footer`}</footer>

    <style jsx global>{`
      body{
        margin: 0;
        padding: 0;
        font-size: 1.2rem;
        font-family: 'Lora', 'Times New Roman', serif;
      }
      p {
  line-height: 1.5;
  margin: 30px 0;
}

    p a {
      text-decoration: underline;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 800;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    
    a {
      color: #212529;
      transition: all 0.2s;
    }
    
    a:focus, a:hover {
      color: #0085A1;
    }
    
    blockquote {
      font-style: italic;
      color: #868e96;
    }
    .section-heading {
      font-size: 36px;
      font-weight: 700;
      margin-top: 60px;
    }
    
    .caption {
      font-size: 14px;
      font-style: italic;
      display: block;
      margin: 0;
      padding: 10px;
      text-align: center;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    
    ::-moz-selection {
      color: #fff;
      background: #0085A1;
      text-shadow: none;
    }
    
    ::selection {
      color: #fff;
      background: #0085A1;
      text-shadow: none;
    }
    
    img::-moz-selection {
      color: #fff;
      background: transparent;
    }
    
    img::selection {
      color: #fff;
      background: transparent;
    }
    
    img::-moz-selection {
      color: #fff;
      background: transparent;
    }


    `}</style>
    </div>
)

