const low = require('lowdb')
const shortid = require('shortid')
import FileSync from 'lowdb/adapters/FileSync'
import dotenv from 'dotenv'
dotenv.config()

export abstract class Service<T> {
  abstract table: string

  adapter = new FileSync(process.env.DATABASE || 'database.json')
  db = low(this.adapter)

  save(data: T): T {
    const newID = shortid.generate()

    this.db
      .get(this.table)
      .push({ id: newID, ...data })
      .write()

    return this.find('id', newID)
  }

  update(id: string, data: T): T {
    return this.db.get(this.table).find({ id: id }).assign(data).value()
  }

  remove(id: string): T {
    return this.db.get(this.table).remove({ id: id }).write()
  }

  find(key: string, value: string): T {
    return this.db
      .get(this.table)
      .find({ [key]: value })
      .value()
  }
}
