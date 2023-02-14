import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController{
  constructor(){
    super('api/houses')
    this.router
      .get('/',this.getHouses)
      .get('/:houseId', this.getHouseById)
      .post('/', this.creatHouse)
  }

  async getHouses(req,res,next){
    try {
      const query = req.query
      const houses = await housesService.getHouses(query)
      res.send(houses)
    } catch (error) {
      next(error)
    }

  }

  async getHouseById(req,res,next){
    try {
      const houseId = req.params.houseId
      const house = await housesService.getHouseById(houseId)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async creatHouse(req,res,next){
    try {
      const houseData = req.body
      const house = await housesService.createHouse(houseData)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }
}