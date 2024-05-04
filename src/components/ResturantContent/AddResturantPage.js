import React, { useState } from 'react'
import AddResturantForm from '../forms/AddResturantForm'
import AddResturantModal from '../modal/AddResturantModal'



export default function AddResturantPage() {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    return (
        <div className='content-wrapper'>
            <AddResturantModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
            />
        </div>
    )
}