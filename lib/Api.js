const fetch = require('node-fetch')

// convert formData
const encodeFormData = (form) => {
  const formObj = {}

  for (const key of form.keys()) {
    formObj[key] = form.get(key)
  }

  return formObj
}

async function getData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

async function postData(url, form, header = null) {
  const options = {
    method: 'POST',
    headers: header || { 'Content-Type': 'application/json' },
    body: form.constructor.name === 'FormData' ? JSON.stringify(encodeFormData(form)) : JSON.stringify(form)
  }

  const response = await fetch(url, options)
  return await response.json()
}

async function postDataFile(url, form, header) {
  const options = {
    method: 'POST',
    headers: header,
    body: form
  }

  const response = await fetch(url, options)
  return await response.json()
}

async function patchData(url, form, header = null) {
  const options = {
    method: 'PATCH',
    headers: header || { 'Content-Type': 'application/json' },
    body:
      form.constructor.name === 'FormData'
        ? JSON.stringify(encodeFormData(form))
        : JSON.stringify(form)
  }

  const response = await fetch(url, options)
  return await response.json()
}

async function patchDataFile(url, form, header) {
  const options = {
    method: 'PATCH',
    headers: header,
    body: form
  }

  const response = await fetch(url, options)
  return await response.json()
}

async function deleteData(url, form, header = null) {
  const options = {
    method: 'DELETE',
    headers: header || { 'Content-Type': 'application/json' },
    body: form.constructor.name === 'FormData' ? JSON.stringify(encodeFormData(form)) : JSON.stringify(form)
  }

  const response = await fetch(url, options)

  return await response.json()
}

export {
  getData,
  postData,
  postDataFile,
  patchData,
  patchDataFile,
  deleteData
}
