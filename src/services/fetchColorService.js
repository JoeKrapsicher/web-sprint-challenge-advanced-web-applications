import axiosWithAuth from '../helpers/axiosWithAuth';

export default fetchColors = () => {
    return axiosWithAuth('/colors')
    .then(res => res)
    .catch(err => err)
}