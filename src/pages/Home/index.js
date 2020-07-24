import React, { useState, useEffect } from 'react'
import MaterialTable from "material-table";
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/actions/user'

import api from '../../services/api'

import config from '../../components/Table'

export default function Home() {

    const dispatch = useDispatch();

    const [images, setImages] = useState([])

    useEffect(() => {
        api.get('images').then(response => {setImages(response.data)})
    }, [])
  
    async function handleDelete(oldData) {
      try {
        await api.delete(`images/${oldData.id}`).then(() => (
          setImages(
            images.filter(images => images.id !== oldData.id))
          ))
      } catch(err) {
            alert('Erro ao deletar, tente novamente.')}
    }
  
    async function handleUpdate(newData, oldData) {
      const data = {
        title: newData.title
      }
  
      const dataUpdate = [...images];
  
      try {
        await api.put(`images/${newData.id}`, data).then(() => {

          dataUpdate[dataUpdate.indexOf(oldData)] = newData;
          setImages([...dataUpdate]);

          })
          }
            catch(err) {
              alert('erro ao alterar, tente novamente')
      }
    }
  
    async function handleCreate(newData) {
  
      const data = {
        title: newData.title
      }
  
      try {
        await api.post('images', data, ).then(() => {
          api.get('images').then(response => {
                setImages(response.data)
          })
        })
          }
            catch(err) {
              alert('erro ao alterar, tente novamente')
      }
    }
  
    const columns = [
        { title: 'ID', field: 'id', editable: 'never' },
        { title: 'Titulo', field: 'title' }
    ]

    function handleLogout() {
      dispatch(logOut())
      window.location.reload()
    }

    return (
      <>
        <div className="container">
        <div className="nav">
        <button className="exit" onClick={handleLogout}>
        <span className="span">Sair</span>
        </button>
        </div>
        <div className="content">
          <MaterialTable
            localization={config}
            columns={columns}
            tab
            data={images}
            title="Images"
            editable={{
              onRowAdd: (newData, oldData) => handleCreate(newData, oldData),
              onRowDelete: oldData => handleDelete(oldData),
              onRowUpdate: (newData, oldData) => handleUpdate(newData, oldData)
        }}
        />
        </div>
        </div>
        {images.map(img => (
          <div className="posts" key={img.id} ><div className="quad"></div><div className="text">{img.title}</div></div>
        ))}
      </>
    )
} 