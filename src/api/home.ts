import axios from '@/utils/axios'

export const getHomeData = async () => axios.get('/home')
