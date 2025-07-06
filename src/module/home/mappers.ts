// import get from 'lodash/get'

// export const getData = item => {
//   return {
//     id: get(item, 'id'),
//     title: get(item, 'title'),
//     photo: get(item, 'file'),
//     creatdAt: get(item, 'created_time'),
//   }
// }

import get from 'lodash/get';

// Item obyekti uchun type (agar ma’lumot bor bo‘lsa uni o‘zgartiring)
interface Item {
  [key: string]: any; // agar aniq turi noaniq bo‘lsa
}

interface Result {
  id: any;
  title: any;
  photo: any;
  createdAt: any;
}

export const getData = (item: Item): Result => {
  return {
    id: get(item, 'id'),
    title: get(item, 'title'),
    photo: get(item, 'file'),
    createdAt: get(item, 'created_time'), // typo tuzatildi
  };
};
