// @ts-check
import { Storage } from '@google-cloud/storage'
import path from 'path'

class Bucket {
  /**
   * @param {string} pathKey
   * @param {string} nameBucket
   */
  constructor (pathKey, nameBucket) {
    this.keyFilename = pathKey
    this.setBucket = nameBucket

    this.storage = new Storage({
      keyFilename: this.keyFilename
    })
  }

  getName () {
    return this.setBucket.toString()
  }

  /**
   *
   * @param {string} nameDirectory
   */
  async createBucket (nameDirectory) {
    await this.storage.createBucket(nameDirectory)
  }

  async getBuckets () {
    return await this.storage.getBuckets()
  }

  async getFiles (folder = '/', viewSubFolders = false) {
    const options = {
      prefix: folder,
      delimiter: '/'
    }

    if (viewSubFolders) {
      options.delimiter = ''
    }

    const [files] = await this.storage
      .bucket(this.getName())
      .getFiles(folder === '/' ? null : options)

    //   console.log(await files[1].getMetadata())
    // urlPublic: 'https://storage.googleapis.com/' + this.getName() + '/' + file.name,

    const newFiles = files.map((file) => ({
      nameFile: file.name,
      urlPublic: file.publicUrl()
    }))

    const rs = newFiles.slice(1, newFiles.length).sort(function (a, b) {
      const x = a.nameFile.toLowerCase()
      const y = b.nameFile.toLowerCase()
      return y < x ? -1 : y > x ? 1 : 0
    })

    // console.log(rs)

    return rs
  }

  async deleteFile (/** @type {any} */ pathFile, /** @type {any} */ fileName) {
    try {
      if (pathFile === undefined) { throw new Error('Datos no definidos en función') }

      await this.storage
        .bucket(this.getName())
        .file(`${pathFile}${fileName}`)
        .delete()
      return true
    } catch (e) {
      throw new Error(e.name + ': ' + e.message)
    }
  }

  /**
   * Subir un archivo
   * @param {string} fileName - Nombre final que tendrá el archivo a subir
   * @param {string} filePathUpload - Ubicación del archivo en la carpeta temporal
   * @param {string} pathDestino - Carpeta de desino final
   */
  async uploadFile (/** @type {string} */ fileName, filePathUpload, pathDestino) {
    try {
      await this.storage.bucket(this.getName()).upload(filePathUpload, {
        destination: `${pathDestino}${fileName}`,
        gzip: true
      })

      this.storage
        .bucket(this.getName())
        .file(`${pathDestino}${fileName}`)
        .setMetadata({ cacheControl: 'no-cache' })
    } catch (e) {
      console.log(e)
      throw new Error(e.name + ': ' + e.message)
    }
  }
}

const pathKey = path.join(__dirname, '../../../../lib/key/google-cloud-key.json')
const nameBucket = 'container-csi-public'

// console.log(NAME)

export default new Bucket(pathKey, nameBucket)
