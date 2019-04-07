import errorMap from './errorMap.json'

export const errorMapperFactory = (moduleMap = {}) => {
  const mergedMap = {
    ...errorMap,
    ...moduleMap
  }

  return (error) => {
    const errorStatus = error ? (String(error.status) || "-1") : "0"
    return mergedMap[errorStatus] || ''
  }
}
