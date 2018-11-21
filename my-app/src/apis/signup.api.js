import api from '../infra/api-config'

export function SignupUser(user){
    const url = '/users'

    const data = {                  // objeto
        name : user.name,
        email : user.email,
        phone : user.phone,
        password : user.password
    }

    return api().post(url,data)
      
}