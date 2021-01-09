import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import logoImg from '../../assets/logo.svg'
import { Title, Form, Meals } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Meal Explorer" />
      <Title>Explore novos pratos!</Title>


      <Form >
        <input placeholder="Digite o Prato" />
        <button type="submit"> Pesquisar </button>
      </Form>

      <Meals>
        <a href="teste">
        <img src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview" 
        alt="teste"/>
        <div>
          <strong>Marração</strong>
          <p>Marração com queijo</p>
        </div>
        <FiChevronRight size={ 20 } />
        </a>

        <a href="teste">
        <img src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview" 
        alt="teste"/>
        <div>
          <strong>Marração</strong>
          <p>Marração com queijo</p>
        </div>
        <FiChevronRight size={ 20 } />
        </a>

        <a href="teste">
        <img src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview" 
        alt="teste"/>
        <div>
          <strong>Marração</strong>
          <p>Marração com queijo</p>
        </div>
        <FiChevronRight size={ 20 } />
        </a>
      </Meals>

    </>
  );
};

export default Dashboard;