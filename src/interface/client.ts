import axios from 'axios'
import { config } from '../config/config'

const instance = axios.create({
  baseURL: config.url.API_BASE_URL,
  //@ts-ignore
})

const tt = 'orthanc'
const ttt = 'orthanc'
const basicAuth = 'Basic ' + btoa(tt + ':' + ttt)

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = basicAuth
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const universalAxios = {
  getPatients: async () => {
    try {
      const response = await instance.get(`/patients`)
      return response.data
    } catch (error: any) {
      console.log('getPatients: ' + error)
    }
  },

  getStudies: async () => {
    try {
      const response = await instance.get(`/studies`)
      return response.data
    } catch (error: any) {
      console.log('getStudies: ' + error)
    }
  },

  getStudyById: async (id: string) => {
    try {
      const response = await instance.get(`/studies/${id}?requestedTags=ModalitiesInStudy`)
      return response.data
    } catch (error: any) {
      console.log('getStudyById: ' + error)
    }
  },

  loadStudy: async (data: any) => {
    try {
      const response = await instance.post(`/instances`, data)
      return response.data
    } catch (error: any) {
      console.log('loadStudy: ' + error)
    }
  },

  deleteStudy: async (data: any) => {
    try {
      const tt = 'orthanc'
      const ttt = 'orthanc'
      const basicAuth = 'Basic ' + btoa(tt + ':' + ttt)
      const deleteData = JSON.stringify(data)
      fetch(`http://localhost:8042/tools/bulk-delete`, {
        headers: {
          accept: 'application/json',
          authorization: basicAuth,
        },
        body: deleteData,
        mode: 'no-cors',
        method: 'POST',
        credentials: 'include',
      })
    } catch (error: any) {
      console.log('getStudyById: ' + error)
    }
  },
}

//   userLogin: async (loginInfo: LoginFormDto) => {
//     try {
//       const response = await instance.post(`/users/signin?username=${loginInfo.username}&password=${loginInfo.password}`)
//       return response.data
//     } catch (error: any) {
//       throw error
//     }
//   },

//   userRegister: async (registrationInfo: RegistrationFormDto) => {
//     try {
//       const response = await instance.post(`/users/signup`, registrationInfo)
//       return response.data
//     } catch (error: any) {
//       throw error
//     }
//   },

//   userConfirm: async (token: string) => {
//     try {
//       const response = await instance.get(`/users/confirm?token=${token}`)
//       return response.data
//     } catch (error: any) {
//       console.log('userConfirm: error')
//     }
//   },

//   userInitiateRestore: async (email: string) => {
//     try {
//       const response = await instance.post(`/users/initiate-password-reset?email=${email}`)
//       return response.data
//     } catch (error: any) {
//       console.log('userInitiateRestore: error')
//     }
//   },

//   userChangePassword: async (token: string, newPassword: string) => {
//     try {
//       const response = await instance.post(`/users/reset-password?token=${token}&newPassword=${newPassword}`)
//       return response.data
//     } catch (error: any) {
//       console.log('userChangePassword: error')
//     }
//   },

//   getUserData: async () => {
//     try {
//       const response = await instance.get(`/users/me`)
//       return response.data
//     } catch (error: any) {
//       console.log('getUserData: error')
//     }
//   },

//   refreshToken: async () => {
//     try {
//       const response = await instance.get(`/users/refresh`)
//       return response.data
//     } catch (error: any) {
//       console.log('refreshToken: error')
//     }
//   },

//   findById: async (id: string) => {
//     try {
//       const response = await instance.get(`api/company/findById?companyId=${id}`)
//       return response.data
//     } catch (error: any) {
//       console.log('findById: error')
//     }
//   },

//   getUserFavorites: async () => {
//     try {
//       const response = await instance.get(`/api/favorite`)
//       return response.data
//     } catch (error: any) {
//       console.log('getUserFavorites: error')
//     }
//   },

//   getUserBlackList: async () => {
//     try {
//       const response = await instance.get(`/api/blacklist`)
//       return response.data
//     } catch (error: any) {
//       console.log('getUserBlackList: error')
//     }
//   },

//   addFavorite: async (url: string, data: CompanyDto) => {
//     try {
//       const response = await instance.post(url, data)
//       return response.data
//     } catch (error: any) {
//       console.log('addFavorite: error')
//     }
//   },

//   searchId: async (data: any) => {
//     try {
//       const response = await instance.post(`/api/company/searchId`, data)
//       return response.data
//     } catch (error: any) {
//       console.log('searchId: error')
//     }
//   },

//   getCompaniesTags: async () => {
//     try {
//       const response = await instance.get(`/api/v1/type/get_all`)
//       return response.data
//     } catch (error: any) {
//       console.log('getCompaniesTags: error')
//     }
//   },

//   getKitchens: async () => {
//     try {
//       const response = await instance.get(`/api/kitchen`)
//       return response.data
//     } catch (error: any) {
//       console.log('getKitchens: error')
//     }
//   },

//   editProfile: async (profileData: ProfileDto) => {
//     try {
//       const response = await instance.put(`/users/edit`, profileData)
//       return response.data
//     } catch (error: any) {
//       throw error
//     }
//   },
// }

// export interface CompanyDto {
//   id: string
//   name: string
//   rating: number
//   avg_price: string
//   city: string
//   address: string
//   metro: [string]
//   district: string
//   region: string
//   workingHours: [string]
//   images: [string]
//   description: string
//   links: {
//     additionalProp1: string
//     additionalProp2: string
//     additionalProp3: string
//   }
//   kitchen: string
// }

// export interface CompanyBackendDTO {
//   company_id: string
//   company_name: string
//   company_rating: number
//   company_avg_price: string
//   city_name: string
//   company_address: string
//   company_address_metro: [string]
//   company_district: string
//   company_region: string
//   company_working_hours: [string]
//   company_image_urls: [string]
//   company_description: string
//   company_links: {
//     additionalProp1: string
//     additionalProp2: string
//     additionalProp3: string
//   }
//   company_kitchen: [string]
// }

// export interface LoginFormDto {
//   username: string
//   password: string
// }

// export interface RegistrationFormDto {
//   username: string
//   email: string
//   password: string
// }

// export interface UserDto {
//   id: string
//   username: string
//   email: string
//   role: [string]
// }

// export interface ProfileDto {
//   username: string
//   email: string
// }

// export interface MetroDto {
//   name: string
//   color: string[] | string
// }
