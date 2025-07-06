// import { useState, useEffect } from 'react'

// import * as Api from '../api'
// import * as Mappers from '../mappers'

// const useList = () => {
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await Api.getList()

//         // const items = data.results.map(item => Mappers.getData(item))

//         setData(data.results
//           )
//       } catch (err) {
//         console.error(err)
//         setError(err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [])

//   return { data, loading, error }
// }

// export default useList
import { useState, useEffect } from 'react';
import * as Api from '../api';
import * as Mappers from '../mappers';

interface Item {
  id: number;
  title: string;
  photo?: string;
  createdAt?: string;

}

interface ApiResponse {
  results: Item[];
}

const useList = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.getList() as { data: ApiResponse };
        const items = response.data.results.map(item => Mappers.getData(item));
        setData(items);
      } catch (err) {
        console.error(err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useList;
