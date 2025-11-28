import { Modal } from "@mui/material"
import './style.css'
import axios from 'axios'
import { useState } from 'react'

export const ModalCreate = ({ open, close }) => {

    const [nome, setNome] = useState()
    const [capa, setCapa] = useState()
    const [link, setLink] = useState()
    const [cantor, setCantor] = useState()

    const cadastro = () => {
        const novaMusica = {
            nome: nome,
            cantor: cantor,
            link: link,
            capa: capa
        }        

         axios.post('http://localhost:8081/cadastrar', novaMusica)
            .then((res) => {
                // alert("Deu certo")
                console.log(res)
                window.location.reaload()
            })
            .catch((err) => console.log(err))
    }
    return (
        <Modal open={open} onClose={close} className="container-modal">
            <div className='container-card-modal'>
                <form >
                    <div>
                        <label htmlFor="">Nome da Musíca</label>
                        <input type="text" placeholder="Nome da Musíca" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Capa da Musíca</label>
                        <input type="text" placeholder="Capa da Musíca" value={capa} onChange={(e) => setCapa(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Link da Musíca</label>
                        <input type="text" placeholder="Link da Musíca" value={link} onChange={(e) => setLink(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Cantor da Musíca</label>
                        <input type="text" placeholder="Cantor da Musíca" value={cantor} onChange={(e) => setCantor(e.target.value)} />
                    </div>
                    <button className="btn" onClick={() => cadastro()}>Cadastrar</button>
                </form>
            </div>
        </Modal>
    )
}

