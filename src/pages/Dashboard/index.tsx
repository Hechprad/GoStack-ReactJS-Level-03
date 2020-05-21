import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Form, Repositories, Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16767311?s=460&u=9c2b185ad32160ab449dccbca7cdfc94d72a8e2b&v=4"
            alt="Jorge Hecherat"
          />
          <div>
            <strong>nomedorepo/aqui</strong>
            <p>descrição do repositório vem aqui.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16767311?s=460&u=9c2b185ad32160ab449dccbca7cdfc94d72a8e2b&v=4"
            alt="Jorge Hecherat"
          />
          <div>
            <strong>nomedorepo/aqui</strong>
            <p>descrição do repositório vem aqui.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16767311?s=460&u=9c2b185ad32160ab449dccbca7cdfc94d72a8e2b&v=4"
            alt="Jorge Hecherat"
          />
          <div>
            <strong>nomedorepo/aqui</strong>
            <p>descrição do repositório vem aqui.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
