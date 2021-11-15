import api from '../ifoodApi'

export const getProducts = () => {
  return api.get('products')
}

