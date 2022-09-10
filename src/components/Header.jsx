import React from 'react';
import './Header.css'



const Header = () => {
    return (
        <div className='mb-3'>

<nav class="navbar navbar-expand-lg navbar-bg  navbar-light py-4">
  <div class="container">
  
   
   <img src="https://i.ibb.co/4PVYbSg/logos.png" alt="logos" />

 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse styling" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-dark" aria-current="page" href="#">Flight</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color: '#1882FF'}}>Bus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Hotel</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Holiday</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Visa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Visa Guide</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Group Request</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Travel Advisory</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Promotions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Blog</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
          
            
        </div>
    );
};

export default Header;