import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put,
} from 'routing-controllers'
import { VehicleInterface } from './vehicle.interface'
import { VehicleService } from './vehicle.service'

@JsonController('/vehicle')
export class VehicleController {
  private readonly service = new VehicleService()

  @Get()
  getAll() {
    return this.service.getAll()
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.service.getById(id)
  }

  @Post()
  post(@Body() vehicle: VehicleInterface) {
    return this.service.insert(vehicle)
  }

  @Put('/:id')
  put(@Param('id') id: string, @Body() vehicle: VehicleInterface) {
    return this.service.updateById(id, vehicle)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.service.removeById(id)
  }
}
