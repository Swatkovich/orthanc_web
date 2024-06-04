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

  getPatient: async (id: string) => {
    try {
      const response = await instance.get(`/patients/${id}`)
      return response.data
    } catch (error: any) {
      console.log('getPatient: ' + error)
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

  getSeriesById: async (studyid: string) => {
    try {
      const response = await instance.get(`/studies/${studyid}/series`)
      return response.data
    } catch (error: any) {
      console.log('getSeriesById: ' + error)
    }
  },

  studyEdit: async (study: IStudyEditForm, studyId: string) => {
    try {
      const postData = JSON.stringify(study)
      fetch(`http://localhost:8042/studies/${studyId}/modify`, {
        headers: {
          accept: 'application/json',
          authorization: basicAuth,
        },
        body: postData,
        mode: 'no-cors',
        method: 'POST',
        credentials: 'include',
      })
    } catch (error: any) {
      console.log('studyEdit: ' + error)
    }
  },

  lookup: async (patiendId: string) => {
    try {
      const response = await instance.post(`/tools/lookup`, patiendId)
      return response.data
    } catch (error: any) {
      console.log('lookup: ' + error)
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
  seriesData: SeriesFull | null
}

export interface SeriesFull {
  number: string
  description: string
  modality: string
  instances: number
  date: string
  time: string
  bodyPartExamined: string
  protocolName: string
  seriesInstanceUID: string
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

export interface IStudyEditForm {
  Force: boolean
  Keep: string[]
  KeepSource: boolean
  Remove: []
  Replace: {
    [key: string]: string
  }
  Synchronous: boolean
}
