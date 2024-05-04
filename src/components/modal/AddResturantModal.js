import React from "react";
import { IconButton, Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddResturantForm from "../forms/AddResturantForm";

export default function AddResturantModal({ modalIsOpen, setModalIsOpen }) {
   
    
    const style = {
        position: 'absolute' ,
        top: '58%',
        left: '58%',
        right: 'auto',
       backgroundColor:"white",
       
        
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        outline:0,
        padding:"20px",
        overflow: "scroll",
        height:"75vh",
      
       
      };
      
 
    return (
        <>
        <Modal
        slotProps={{ backdrop: {  style: { backgroundColor: "white"}}}}
      sx={style}
            open={modalIsOpen}
        >
            <div className="container-fluid modalbody">
                <div className="d-flex justify-content-between">
                    <h5>Add New Resturant</h5>
                    <IconButton onClick={() => setModalIsOpen(false)}>
                        <CloseIcon />
                    </IconButton>

                </div>
                <div>
                    <AddResturantForm modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
                </div>
            </div>
        </Modal>
        </>
    )
}