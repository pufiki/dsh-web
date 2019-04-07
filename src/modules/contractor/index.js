import errorMap from './errorMap.json'
import { errorMapperFactory } from '@/services/errorHandler'

export const errorMapper = errorMapperFactory(errorMap)

export * from './api';
