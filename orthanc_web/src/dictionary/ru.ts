const ruLocale: { [key: string]: string } = {
  //common
  'common.false': 'false',
  'common.true': 'true',
  'common.cancel': 'Закрыть',
  'common.back': 'Назад',

  //sidebar
  'sidebar.downloadFolder': 'Загрузить папку',
  'sidebar.downloadFile': 'Загрузить файлы',
  'sidebar.statistics': 'STATISTICS',
  'sidebar.systemInfo': 'SYSTEM INFO',
  'sidebar.downloaded': 'Загружено',
  'sidebar.zip': 'Перетащите сюда Zip файл для загрузки',

  //table
  'table.header.patientBirthDate': 'Patient Birth Date',
  'table.header.patientName': 'Patient Name',
  'table.header.patientId': 'Patient ID',
  'table.header.studyDescription': 'Study Description',
  'table.header.studyDate': 'Study Description',
  'table.header.modalitiesInStudy': 'Modalities in Study',
  'table.header.series': '# series',

  //statistics
  'statistics.studies': 'Studies',
  'statistics.series': 'Series',
  'statistics.instances': 'Instances',
  'statistics.storage': 'Storage Size',

  //study
  'study.date': 'Study Date',
  'study.time': 'Study Time',
  'study.description': 'Study Description',
  'study.id': 'Study ID',
  'study.instanceUID': 'Study Instance UID',
  'study.institutionName': 'Institution Name',
  'study.patientId': 'Patient ID',
  'study.patientName': 'Patient Name',
  'study.patientBirthDate': 'Patient Birth Date',
  'study.patientSex': 'Patient sex',

  //study edit
  'study.edit.attach.info': 'Attach this study to another existing Patient.',
  'study.edit.attach': 'Change patient',
  'study.edit.modify.info': 'Modify Patient/Study tags in this study only?',
  'study.edit.modify': 'Modify Study tags',
  'study.edit.modify.option1': 'Modify the original study. (generating new DICOM UIDs)',
  'study.edit.modify.option2': 'Modify the original study. (keeping the original DICOM UIDs)',
  'study.edit.modify.option3': 'Create a modified copy of the original study. (generating new DICOM UIDs and keeping the original study)',
  'study.edit': 'Редактировать',

  //series:
  'series.date': 'Series Date',
  'series.number': 'Series number',
  'series.time': 'Series time',
  'series.description': 'Series Description',
  'series.modality': 'Modality',
  'series.instances': '# Instances',
  'series.bodyPartExamined': 'Body part examined',
  'series.protocolName': 'Protocol Name',
  'series.instancesUID': 'Series Instances UID',

  //info
  'info.dicomAet': 'DICOM AET',
  'info.dicomPort': 'DICOM Port',
  'info.overwrite': 'Overwrite instances',
  'info.storage': 'Storage Compression',
}

export default ruLocale
