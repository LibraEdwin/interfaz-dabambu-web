import MySwal from 'sweetalert2'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/es-mx'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('es-mx')

export const alertMessage = (mensaje, tipo, title) => {
  MySwal.fire({
    title,
    text: mensaje,
    icon: tipo,
    confirmButtonColor: '#517201'
  })
}

// Formating Currency to Soles

export const formatToSoles = (monto) => {
  const moneda = new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(monto)
  return moneda.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function formatWithHour (date) {
  return dayjs(date).tz('America/Lima').format('DD-MM-YYYY HH:mm a')
}

export function formatDate (date, format) {
  return dayjs(date).tz('America/Lima').format(format)
}

export const warningMessage = (title, message) => {
  return MySwal.fire({
    title,
    text: message,
    icon: 'warning',
    confirmButtonText: 'Confirmar',
    showCancelButton: true,
    cancelButtonText: 'No',
    confirmButtonColor: '#517201'
  })
}

export const successMessage = (title, message) => {
  return MySwal.fire({
    title,
    text: message,
    icon: 'success'
  })
}


export const successAlert = (text, title = null) => {
  return MySwal.fire({
    icon: 'success',
    text,
    confirmButtonColor: '#08bc62'
  })
}

export const errorAlert = (text, title = null, html) => {
  return MySwal.fire({
    icon: 'error',
    text,
    title,
    confirmButtonColor: '#f27474',
    html
  })
}