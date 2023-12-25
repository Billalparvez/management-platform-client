import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../Hook/useAxiosPublic';


export const useToDo = () => {
    
    const { data, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('creatJob', {
            });
            return res.data;
        }
    })
    return [data,refetch]
};

export default useToDo;