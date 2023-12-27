import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'
import { universalAxios } from '../../../interface/client'
import { configure } from 'mobx'

configure({
  enforceActions: 'never',
})

class AuthStore {
  isDarkTheme: boolean = false

  patients: any[] = []

  studiesId: string[] = []

  studies: any[] = []

  tags: unknown

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  get isLogedIn() {
    return localStorage.getItem('isLogedIn')
  }

  getPatients() {
    return universalAxios.getPatients().then((data) => (this.patients = data))
  }

  getStudiesId() {
    return universalAxios.getStudies().then((data) => (this.studiesId = data))
  }

  getAllStudies() {
    this.studiesId.map((id) => universalAxios.getStudyById(id).then((data) => this.studies.push(data)))
  }

  loadData(data: any) {
    return universalAxios.loadStudy(data)
  }

  deleteStudy(data: any) {
    return universalAxios.deleteStudy(data)
  }

  clearStudies() {
    this.studies = []
  }
  // userLogin(loginInfo: LoginFormDto) {
  //   return universalAxios.userLogin(loginInfo).then((data) => {
  //     if (data) {
  //       localStorage.setItem('token', data)
  //     }
  //   })
  // }

  // userRegister(registrationInfo: RegistrationFormDto) {
  //   return universalAxios.userRegister(registrationInfo)
  // }

  // userConfirm(token: string) {
  //   return universalAxios
  //     .userConfirm(token)
  //     .then((data) => {
  //       if (data) {
  //         localStorage.setItem('token', data)
  //         return token
  //       }
  //     })
  //     .then(() => this.getUserData())
  // }

  // userInitiateRestore(email: string) {
  //   return universalAxios.userInitiateRestore(email)
  // }

  // userChangePassword(token: string, newPassword: string) {
  //   return universalAxios.userChangePassword(token, newPassword)
  // }

  // getUserData() {
  //   return universalAxios.getUserData().then((data) => {
  //     if (data) {
  //       this.user.id = data.id
  //       this.user.username = data.username
  //       this.user.email = data.email
  //       this.user.role = data.appUserRoles
  //       localStorage.setItem('user', JSON.stringify(this.user))
  //     }
  //   })
  // }

  // getCompanyData(id: string) {
  //   return universalAxios.findById(id).then((company: CompanyBackendDTO) => {
  //     return {
  //       id: company.company_id,
  //       name: processName(company.company_name),
  //       rating: company.company_rating,
  //       avg_price: processPrice(company.company_avg_price),
  //       city: company.city_name,
  //       address: company.company_address,
  //       metro: company.company_address_metro,
  //       district: company.company_district,
  //       region: company.company_region,
  //       workingHours: company.company_working_hours,
  //       images: company.company_image_urls,
  //       description: company.company_description,
  //       links: company.company_links,
  //       kitchen: processKitchen(company.company_kitchen),
  //     }
  //   })
  // }

  // initTheme() {
  //   const isDarkTheme = localStorage.getItem('isDarkTheme')
  //   if (isDarkTheme === 'true' || isDarkTheme === 'false') {
  //     if (isDarkTheme === 'true') {
  //       this.isDarkTheme = true
  //     } else {
  //       this.isDarkTheme = false
  //     }
  //   }
  // }

  // async initProfileData() {
  //   const token = localStorage.getItem('token')
  //   const user = localStorage.getItem('user')
  //   if (token === 'undefined' || token === 'true' || token === 'false' || token === 'null') {
  //     localStorage.removeItem('token')
  //   } else if (token) {
  //     await this.getUserData()
  //   }
  //   if (user) {
  //     this.user = JSON.parse(user)
  //   }
  // }

  // changeTheme() {
  //   this.isDarkTheme = !this.isDarkTheme
  //   localStorage.setItem('isDarkTheme', this.isDarkTheme.toString())
  // }

  // getFavorites() {
  //   return universalAxios.getUserFavorites().then((data) => {
  //     if (data) {
  //       this.favorites = data.map((company: CompanyBackendDTO) => ({
  //         id: company.company_id,
  //         name: processName(company.company_name),
  //         rating: company.company_rating,
  //         avg_price: processPrice(company.company_avg_price),
  //         city: company.city_name,
  //         address: company.company_address,
  //         metro: company.company_address_metro,
  //         district: company.company_district,
  //         region: company.company_region,
  //         workingHours: company.company_working_hours,
  //         images: company.company_image_urls,
  //         description: company.company_description,
  //         links: company.company_links,
  //         kitchen: processKitchen(company.company_kitchen),
  //       }))
  //     }
  //   })
  // }

  // getBlackList() {
  //   return universalAxios.getUserBlackList().then((data) => {
  //     if (data) {
  //       this.blackList = data.map((company: CompanyBackendDTO) => ({
  //         id: company.company_id,
  //         name: processName(company.company_name),
  //         rating: company.company_rating,
  //         avg_price: processPrice(company.company_avg_price),
  //         city: company.city_name,
  //         address: company.company_address,
  //         metro: company.company_address_metro,
  //         district: company.company_district,
  //         region: company.company_region,
  //         workingHours: company.company_working_hours,
  //         images: company.company_image_urls,
  //         description: company.company_description,
  //         links: company.company_links,
  //         kitchen: processKitchen(company.company_kitchen),
  //       }))
  //     }
  //   })
  // }

  // getKitchens() {
  //   return universalAxios.getKitchens().then((data) => {
  //     if (data) {
  //       this.kitchens = data
  //     } else {
  //       this.kitchens = ['ERROR']
  //     }
  //   })
  // }

  // getCompaniesByFilters() {
  //   return universalAxios.searchId({
  //     criteria: [{ key: 'kitchenNames', values: ['Итальянская'] }],
  //   })
  // }

  // getCompaniesTags() {
  //   return universalAxios.getCompaniesTags().then((data) => {
  //     if (data) {
  //       this.tags = data
  //     }
  //   })
  // }

  // refreshToken() {
  //   universalAxios.refreshToken().then((data) => localStorage.setItem('token', data))
  // }

  // editProfile(formData: ProfileDto) {
  //   return universalAxios
  //     .editProfile(formData)
  //     .then((data) => localStorage.setItem('token', data))
  //     .then(() => this.getUserData())
  // }

  // clearFavorites() {
  //   this.favorites = []
  // }

  // clearBlackList() {
  //   this.blackList = []
  // }

  // clearUserData() {
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('user')
  // }
}

const AuthStoreContext = createContext(new AuthStore())

export default AuthStoreContext
