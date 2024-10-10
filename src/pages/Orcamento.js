// src/pages/Orcamento.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Orcamento.css';

const Orcamento = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipoProjeto: '',
    descricao: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
  };

  return (
    <motion.div
      className="orcamento-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h2>Solicite seu Orçamento</h2>
      <form className="orcamento-form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="tipoProjeto">Tipo de Projeto:</label>
        <select
          name="tipoProjeto"
          value={formData.tipoProjeto}
          onChange={handleChange}
          required
        >
          <option value="">Selecione...</option>
          <option value="Landing Page">Landing Page</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Blog">Blog</option>
          <option value="Sistema Web">Sistema Web</option>
        </select>

        <label htmlFor="descricao">Descrição do Projeto:</label>
        <textarea
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          rows="5"
          required
        />
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Enviar
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Orcamento;
