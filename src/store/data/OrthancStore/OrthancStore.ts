import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'
import { ServerStatistics, Study, SystemInfo, universalAxios } from '../../../interface/client'
import { configure } from 'mobx'

configure({
  enforceActions: 'never',
})

class OrthancStore {
  isDarkTheme: boolean = false

  patients: any[] = []

  studiesId: string[] = []

  studies: Study[] = []

  systemInfo: SystemInfo | null = null

  statistics: ServerStatistics | null = null

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

  async getAllStudies() {
    this.studies = []
    await this.getStudiesId()
    this.studiesId?.map((id) =>
      universalAxios.getStudyById(id).then((data) =>
        this.studies?.push({
          id: data.ID,
          patientBirthDate: data.PatientMainDicomTags.PatientBirthDate,
          patientId: data.PatientMainDicomTags.PatientID,
          patientName: data.PatientMainDicomTags.PatientName,
          studyDescription: data.MainDicomTags.StudyDescription,
          studyDate: data.MainDicomTags.StudyDate,
          modalitiesInStudy: data.RequestedTags.ModalitiesInStudy,
          series: data.Series,
        })
      )
    )
  }

  loadData(data: any) {
    return universalAxios.loadStudy(data)
  }

  deleteStudy(data: any) {
    return universalAxios.deleteStudy(data)
  }

  getStatistics() {
    return universalAxios.getStatistics().then(
      (data) =>
        (this.statistics = {
          studies: data.CountStudies,
          series: data.CountSeries,
          instances: data.CountInstances,
          storageSize: data.TotalDiskSizeMB,
        })
    )
  }

  getSystem() {
    return universalAxios.getSystem().then(
      (data) =>
        (this.systemInfo = {
          orthancVersion: data.Version,
          dicomAet: data.DicomAet,
          orthancName: data.Name,
          dicomPort: data.DicomPort,
          ingestTranscoding: data.ingestTranscoding,
          overwriteInstances: data.OverwriteInstances,
          storageCompression: data.StorageCompression,
        })
    )
  }

  clearStudies() {
    this.studies = []
  }
}

const OrthancStoreContext = createContext(new OrthancStore())

export default OrthancStoreContext
