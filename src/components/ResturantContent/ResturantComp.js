import React, { useState } from 'react'
import { OutlinedButton } from '../common/Button'
import { useNavigate } from 'react-router-dom'
import AddResturantModal from '../modal/AddResturantModal';

const ResturantComp = () => {
    
    const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <div className='content-wrapper'>
      <OutlinedButton label='Add new restaurant'  onClick={() => setModalIsOpen(true)}/>
            <AddResturantModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
            />
    </div>
  )
}

export default ResturantComp
