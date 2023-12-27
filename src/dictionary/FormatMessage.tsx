import enLocale from './ru'

const FormatMessage = (id: string) => {
  if (enLocale[id]) return enLocale[id]
  else return '???'
}

export default FormatMessage
