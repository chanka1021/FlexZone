import {useNavigate} from 'react-router-dom'


 function checkAuth(token,user,navigate){

    if(token === null || user === null){
        return navigate("/signin");
    }

}
export {checkAuth}