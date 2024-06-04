// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dev = {
  url: {
    API_BASE_URL: 'http://localhost:8080/orthanc',
  },
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prod = {
  url: {
    API_BASE_URL: 'http://NAS7C08A0:8081/orthanc',
  },
}

// dev or prod
export const config = dev
