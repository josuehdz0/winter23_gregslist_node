import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService{
  async removeHouseById(houseId) {
    const house = await this.getHouseById(houseId)
    await house.remove()
    return house
  }
  async updateHouseById(houseId, houseData) {
    const foundHouse = await this.getHouseById(houseId)
    foundHouse.description = houseData.description || foundHouse.description
    foundHouse.price = houseData.price || foundHouse.price
    foundHouse.beds = houseData.beds || foundHouse.beds
    foundHouse.baths = houseData.baths || foundHouse.baths
    await foundHouse.save()
    return foundHouse

  }
  
  async createHouse(houseData) {
    const house = await dbContext.Houses.create(houseData)
    return house
  }
  async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if (!house){
      throw new BadRequest('Invalid House ID')
    }
    return house
  }
  async getHouses(query) {
    const houses = await dbContext.Houses.find(query)
    return houses
  }

}

export const housesService = new HousesService()