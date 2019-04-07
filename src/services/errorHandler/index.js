import errorMap from './errorMap.json'

export const errorMapperFactory = (moduleMap = {}) => {
  const mergedMap = {
    ...errorMap,
    ...moduleMap
  }

  return (error, context = '') => {
    const errorStatus = error ? (String(error.status) || "-1") : "0"
    const result = mergedMap[errorStatus] || null
    result && context && (result.context = context)
    return result
  }
}
