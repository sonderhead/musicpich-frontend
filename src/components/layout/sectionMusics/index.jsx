import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { ModalMusic } from '../../Modals/modalMusic'
import { ModalCreate} from '../../Modals/modalCreate'
 
export const SectionMusic = () => {
 
    const [musicas, setMusicas] = useState([])
    const [open, setOpen] = useState(false)
    const [musicaSelecionada, setMusicaSelecionada] = useState(null)
    const [openCadastro, setOpenCadastro] = useState(false)
 
 
 
    useEffect(() => {
        axios.get('https://musicpich-backend-w1ff.onrender.com/')
            .then((res) => {
                console.log(res.data)
                setMusicas(res.data)
            })
            .catch((err) => console.log(err))
 
    }, [])
 
 
    const abrirModal = (musicaParametro) => {
        setMusicaSelecionada(musicaParametro)
        setOpen(true)
    }
 
    const abrirCadastro = () => {
        setOpenCadastro(true)
    }
 
    const fecharModal = () => {
        setOpen(false)
        setOpenCadastro(false)
    }
 
 
 
 
    return (
        <>
            <section className="section-music">
                <h2>Nossas músicas</h2>
                <div className="container-cards">
 
                    {musicas.map((musica) => (
                        <div className="card-music" onClick={() => abrirModal(musica)}>
                            <img src={musica.capa} alt="" />
                            <h3>{musica.nome}</h3>
                            <p>{musica.cantor}</p>
                        </div>
                    ))}
                </div>
                <button className='btn' onClick={()=> abrirCadastro()}>Cadastrar nova música</button>
            </section>
            <ModalMusic open={open} close={fecharModal} musica={musicaSelecionada} />
            <ModalCreate open={openCadastro} close={fecharModal} />
        </>
    )
}
 
