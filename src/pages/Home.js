// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bem-vindo à Diex Web
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        A Diex Web é uma empresa dedicada a desenvolver soluções digitais sob medida para atender às necessidades de seus clientes. Oferecemos desde o desenvolvimento de sites completos até plataformas de e-commerce, integrações com APIs de checkout, e serviços de marketing digital.
      </motion.p>
      <motion.a
        href="/orcamento"
        className="home-btn"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Solicite um Orçamento
      </motion.a>

      {/* Seção de Serviços */}
      <section className="services-section">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Nossos Serviços
        </motion.h2>
        <div className="services-container">
          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3>Desenvolvimento de Sites</h3>
            <p>Criação de sites personalizados, responsivos e de alta performance para sua empresa.</p>
          </motion.div>
          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h3>Plataformas E-commerce</h3>
            <p>Desenvolvimento de plataformas completas para lojas virtuais com integrações de pagamento seguras.</p>
          </motion.div>
          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            <h3>Integrações com APIs</h3>
            <p>Integração com APIs de checkout como Vegacheckout e Adoorei para facilitar suas vendas.</p>
          </motion.div>
          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            <h3>Marketing Digital</h3>
            <p>Oferecemos serviços de marketing digital para promover sua empresa e maximizar os resultados.</p>
          </motion.div>
        </div>
      </section>

      {/* Seção de Tecnologias */}
      <section className="technologies-section">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Tecnologias que Utilizamos
        </motion.h2>
        <div className="tech-container">
          <motion.div
            className="tech-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h3>Front-end</h3>
            <p>React.js, HTML, CSS, JavaScript</p>
          </motion.div>
          <motion.div
            className="tech-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h3>Back-end</h3>
            <p>Node.js, PHP, MongoDB, MySQL</p>
          </motion.div>
          <motion.div
            className="tech-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
          >
            <h3>APIs de Checkout</h3>
            <p>Vegacheckout, Adoorei</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
