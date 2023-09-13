import Cookies from 'js-cookie';

async function verifyUser(){
    if(Cookies.get('auth-cookie')){
      try {
        const query = await fetch('api/user/verify', {
          method: "POST",
          body: '',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const result = await query.json()
        console.log(result)
        if (result?.status === 'success') {
          return true;  // logic for successful authentication
        } else {
          return false;
        }
      } catch(err){
        return false;
      }
    } else {
      return null// implement logic for non-authenticated user
    }
  }

  export default verifyUser;