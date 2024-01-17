import axios from 'axios'
import { config } from '../config/config'

const instance = axios.create({
  baseURL: config.url.API_BASE_URL,
})

const login = 'orthanc'
const password = 'orthanc'
const basicAuth = 'Basic ' + btoa(login + ':' + password)

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = basicAuth
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

  getStatistics: async () => {
    try {
      const response = await instance.get(`/statistics`)
      return response.data
    } catch (error: any) {
      console.log('getStatistics: ' + error)
    }
  },

  getSystem: async () => {
    try {
      const response = await instance.get(`/system`)
      return response.data
    } catch (error: any) {
      console.log('getSystem: ' + error)
    }
  },
}

export interface Study {
  id: string
  patientBirthDate: string
  patientId: string
  patientName: string
  studyDescription: string
  studyDate: string
  modalitiesInStudy: string
  series: [string]
}

export interface StudyFull extends Study {
  studyTime: string
  studyId: string
  studyInstanceUID: string
  institutionName: string
  patientSex: string
}

export interface ServerStatistics {
  studies: number
  series: number
  instances: number
  storageSize: number
}

export interface SystemInfo {
  dicomAet: string
  dicomPort: number
  overwriteInstances: boolean
  storageCompression: boolean
}
