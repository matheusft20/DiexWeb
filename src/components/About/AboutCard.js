import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Olá a todos, su sou <span className="purple">Matheus França </span>
            de <span className="purple"> Brasil, Goiânia</span>
            <br />
            Atualmente, sou desenvolvedor freelancer para empresas de e-commerce
            <br />
              Um dos meus maiores projetos até agora está sendo a DIEX, pois será uma agencia que foi desenvolvida para atender todos os publicos que precisam integrar o seu negocio para a internet
            <br />
            <br />
            Essas são as ferramentas que a DIEX pode oferecer para vocês.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Desenvolvimento de plataformas de e-commerce
            </li>
            <li className="about-activity">
              <ImPointRight /> Gestão de trafégo
            </li>
            <li className="about-activity">
              <ImPointRight /> Desenvolvimento e Integrações com APIs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Esforce-se para construir coisas que façam a diferença!"{" "}
          </p>
          <footer className="blockquote-footer">DIEX</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
