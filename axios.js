import axios from 'axios';
const url = 'https://resilientdb.herokuapp.com/post';



export default async function(k, d){
    var obj = {
        key:k,
        data:d
    }
    var r = await axios.post(url, obj);
    var json = JSON.parse(r.data.body);

    if(json.status){
        return json.data;
    } else {
        console.log(json)
        return false;
    }

}