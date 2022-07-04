import { Delete, Edit } from 'components/icons'
import {
  TablaCategoriasWrapper,
  TablaCategoriasName,
  TablaCategoriasActions,
  ButtonActions
} from './modalCategorias.styled'

export default function TablaCategorias({ categorias, handleEdit, handleDelete }) {
  return (
    <TablaCategoriasWrapper>
      <thead>
        <tr>
          <th>Código</th>
          <TablaCategoriasName>Nombre de categoría</TablaCategoriasName>
          <TablaCategoriasActions>Actions</TablaCategoriasActions>
        </tr>
      </thead>
      <tbody>
        {categorias && categorias.map(categoria => (
          <tr key={categoria._id}>
            <td>{categoria._id}</td>
            <TablaCategoriasName as="td">
              {/* <InputNameEdit
                type="text"
                defaultValue={categoria.nombreCategoria}
              // disabled
              /> */}
              {categoria.nombreCategoria}
            </TablaCategoriasName>
            <TablaCategoriasActions as="td" >
              {/* <ButtonEditAction onClick={(e) => handleChange(e)}>
                <input type="checkbox" />
                <Edit />
              </ButtonEditAction> */}
              <ButtonActions onClick={() => handleEdit(categoria._id)}> <Edit /> </ButtonActions>
              <ButtonActions onClick={() => handleDelete(categoria._id)}> <Delete /> </ButtonActions>
            </TablaCategoriasActions>
          </tr>
        ))}

      </tbody>
    </TablaCategoriasWrapper>
  )
}
