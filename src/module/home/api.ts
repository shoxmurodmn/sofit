// import { http } from '@/services'

// export const getList = () => http.get('category_api-list/')

// export const getSingle = ({ id }) => http.get(`/category_api-list/${id}`)
import { http } from '../../services';

// Id parametrining tipi
interface GetSingleParams {
  id: string | number;
}

// List olish (oddiy, parametr yo‘q)
export const getList = () => http.get('/category_api-list/');

// Bitta element olish, id ni destructure qilib olish va tip berish
export const getSingle = ({ id }: GetSingleParams) => http.get(`/category_api-list/${id}`);