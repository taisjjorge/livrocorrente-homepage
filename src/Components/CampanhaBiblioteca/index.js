import React from 'react';
import { Link } from 'react-router-dom'
import {  useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import './campanhaBiblioteca.css';


export default function CampanhaBiblioteca(props){


  const [lgShow, setLgShow] = useState(false);

  async function Update(){
    const titulo=props.titulo
    const answer = await fetch("https://livrocorrente.herokuapp.com/remover/card",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({"titulo":titulo})})

    const data = await answer.json()
    console.log(data)
    if (data.resp == "Foi"){
      window.location.reload()
    }
  }

    return(
  
          <div className="card-campanha">
            <div className="img-campanha">
              <img src={require(`./img/${props.capa}`).default} className="livro-campanha" alt="Capa Livro" />
            </div>
            <div className="info-campanha">
              <h4>{props.titulo}</h4>
              <p>Exemplares: {props.numeroExemplar}</p>
              <p>Gênero: {props.genero}</p>
              <p>{props.Biblioteca}</p>
              <Button onClick={Update} variant="danger" className="remover">Remover</Button>
            </div>

            {/* React-Bootstrap */}
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Obaa! Ficamos felizes pelo seu interesse em ajudar :D
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Dá uma olhada nas formas de doação:</h4>
                <br/>
                <ul>
                  <li><h5>Contato direto com a biblioteca:</h5></li>
                  <p>É possível encontrar o link "Perfil" com todas as informações de contato na página <a href="../../Bibliotecas">Bibliotecas</a></p>
                  <br/>
                  <li><h5>Pontos de coleta:</h5></li>
                  <br/>
                  <li><h5>Comprar o livro em sites parceiros:</h5></li>
                  <br/>
                </ul>
              </Modal.Body>
            </Modal>
          </div> 
    );
};
