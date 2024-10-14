import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor Web",
          "Freelancer",
          "Desenvolvedor de sites",
          "Criação de landing pages",
          "Desenvolvedor de lojas e-commerce",
          "Colaborador de código aberto",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
