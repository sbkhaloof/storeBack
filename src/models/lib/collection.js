'use strict';

class Collection {
  constructor(model){
    this.model = model;
  }

  async create(item) {
    let record = await this. model.create(item);
    return record;
  }

  async getAll(){
    let allData = await this.model.findAll();
    return allData;
  }

  async get(id) {
    let record = await this.model.findOne({ where:{ id: id}});
    return record;
  }

  async update(id, item) {
    let record = await this.model.findOne({where:{ id }});
    let updatedRecord = await record.update(item);
    return updatedRecord;
  }

  async delete(id) {
    await this.model.destroy({where:{ id }});
  }

}

module.exports = Collection;