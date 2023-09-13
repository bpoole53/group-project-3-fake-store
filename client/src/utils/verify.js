import Cookies from 'js-cookie';

async function userAuth(){
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
  
        if (result && result?.status === 'success') {
          return {result} // logic for successful authentication
        } else {
          return null;
        }
      } catch(err){
        return null;        
      }
    } else {
      return null// implement logic for non-authenticated user
    }
  }

  export default userAuth;