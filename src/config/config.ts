// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dev = {
  url: {
    API_BASE_URL: 'http://localhost:8080/orthanc',
    OMDB_BASE_URL: 'https://www.omdbapi.com',
    AVATARS_DICEBEAR_URL: 'https://api.dicebear.com/6.x',
  },
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prod = {
  url: {
    API_BASE_URL: 'http://178.253.40.167:8080',
    OMDB_BASE_URL: 'https://www.omdbapi.com',
    AVATARS_DICEBEAR_URL: 'https://api.dicebear.com/6.x',
  },
}

// dev or prod
export const config = dev

// const tt = 'orthanc'
// const ttt = 'orthanc'
// const basicAuth = 'Basic ' + btoa(tt + ':' + ttt)

// useEffect(() => {
//   fetch('http://localhost:8080/orthanc/patients', {
//     headers: {
//       accept: 'application/json',
//       authorization: basicAuth,
//     },
//     method: 'GET',
//     credentials: 'include',
//   })
//     .then((data) => {
//       console.log(data.body)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }, [])
