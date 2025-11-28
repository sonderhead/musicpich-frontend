import { useState } from "react"
import { Header } from "../../components/layout/header"
import { ModalCreate } from "../../components/Modals/modalCreate"
 
export const Admin = () => {
 
    const [open, setOpen] = useState(false)
 
    const abrirModal = () => {
        setOpen(true)
    }
 
    const fecharModal = () => {
        setOpen(false)
    }
 
    return(
        <>
            <Header />
            <div className="container-admin">
 
                <button className="brn-admin" onClick={() => abrirModal } >Cadastrar nova música</button>
                <ModalCreate open={open} close={fecharModal}/>
 
 
            </div>
       
        </>
    )
 
}
 