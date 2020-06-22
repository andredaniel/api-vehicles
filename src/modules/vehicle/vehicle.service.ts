import { VehicleInterface } from './vehicle.interface'
import { Service } from '../../service/service'
import { Renavam } from '../../utils/renavam'
import { Chassi } from '../../utils/chassi'
import { validate } from 'class-validator'

export class VehicleService extends Service<VehicleInterface> {
  table: string = 'vehicles'

  getAll() {
    return this.db.get(this.table).value()
  }

  getById(id: string) {
    return this.find('id', id)
  }

  insert(data: VehicleInterface) {
    this.validate(data)
    return this.save(data)
  }

  updateById(id: string, data: VehicleInterface) {
    this.validate(data)
    return this.update(id, data)
  }

  removeById(id: string) {
    return this.remove(id)
  }

  isLicensePlateValid(placa: string): boolean {
    const regexPlaca: RegExp = /^[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}$/
    return regexPlaca.test(placa)
  }

  validate(data: VehicleInterface): void {
    if (!this.isLicensePlateValid(data.placa)) {
      throw new Error('A placa informada é inválida')
    }

    if (!Renavam.isValid(data.renavam)) {
      throw new Error('O renavam informado é inválido')
    }

    if (!Chassi.isValid(data.chassi)) {
      throw new Error('O chassi informado é inválido')
    }

    const hasId = data.hasOwnProperty('id')

    const findByPlaca: VehicleInterface = this.find('placa', data.placa)
    if (
      (findByPlaca && !hasId) ||
      (findByPlaca && findByPlaca.id !== data.id)
    ) {
      throw new Error('A placa informada já encontra-se cadastrada')
    }

    const findByRenavam: VehicleInterface = this.find('renavam', data.renavam)
    if (
      (findByRenavam && !hasId) ||
      (findByRenavam && findByRenavam.id !== data.id)
    ) {
      throw new Error('O renavam informado já encontra-se cadastrado')
    }

    const findByChassi: VehicleInterface = this.find('chassi', data.chassi)
    if (
      (findByChassi && !hasId) ||
      (findByChassi && findByChassi.id !== data.id)
    ) {
      throw new Error('O chassi informado já encontra-se cadastrado')
    }
  }
}
