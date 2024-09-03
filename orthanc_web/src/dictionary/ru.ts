const ruLocale: { [key: string]: string } = {
  //common
  'common.false': 'Нет',
  'common.true': 'Да',
  'common.cancel': 'Закрыть',
  'common.back': 'Назад',

  //sidebar
  'sidebar.downloadFolder': 'Загрузить папку',
  'sidebar.downloadFile': 'Загрузить файлы',
  'sidebar.statistics': 'Статистика',
  'sidebar.systemInfo': 'Системная информация',
  'sidebar.downloaded': 'Загружено',
  'sidebar.zip': 'Перетащите сюда Zip файл для загрузки',

  //table
  'table.header.patientBirthDate': 'Дата рождения',
  'table.header.patientName': 'ФИО пациента',
  'table.header.patientId': 'ИН пациента',
  'table.header.studyDescription': 'Описание исследования',
  'table.header.studyDate': 'Дата исследования',
  'table.header.modalitiesInStudy': 'Модальности исследования',
  'table.header.series': 'Число серий',

  //statistics
  'statistics.studies': 'Исследований',
  'statistics.series': 'Серий',
  'statistics.instances': 'Элементов',
  'statistics.storage': 'Размер хранилища',

  //study
  'study.date': 'Дата исследования',
  'study.time': 'Время исследования',
  'study.description': 'Описание исследования',
  'study.id': 'ИН исследования',
  'study.instanceUID': 'Число исследований',
  'study.institutionName': 'Наименование ЛПУ',
  'study.patientId': 'ИН пациента',
  'study.patientName': 'ФИО пациента',
  'study.patientBirthDate': 'Дата рождения',
  'study.patientSex': 'Пол',

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
  'series.date': 'Дата серии',
  'series.number': 'Номер серии',
  'series.time': 'Время серии',
  'series.description': 'Описание серии',
  'series.modality': 'Модальность',
  'series.instances': 'Элементов',
  'series.bodyPartExamined': 'Анатомическая область',
  'series.protocolName': 'Наименование протокола',
  'series.instancesUID': 'УИН серии',

  //info
  'info.dicomAet': 'DICOM AETitle',
  'info.dicomPort': 'DICOM Порт',
  'info.overwrite': 'Перезаписывать элементы',
  'info.storage': 'Сжатие хранилища',
}

export default ruLocale
