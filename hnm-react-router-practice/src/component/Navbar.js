import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Nabvar = () => {
  const menuList = [
    '여성', 
    'Divided', 
    '남성', 
    '신생아/유아', 
    '아동', 
    'H&M Home', 
    'Sale', 
    '지속가능성',
  ];
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;

      // url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
        <div>
            <div className='login-button' onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} />
              <div>로그인</div>
            </div>
        </div>
        <div className='nav-section'>
            <img 
            width={100}
            src='https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg' />
        </div>
        <div className='menu-area'>
            
              <ul className='menu-list'>
                {menuList.map((menu) => (
                <li>{menu}</li>
                ))}
              </ul>
            
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" onKeyPress={(event) => search(event)} />
        </div>
        </div>
    </div>
  )
}

export default Nabvar