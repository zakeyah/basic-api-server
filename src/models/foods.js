'use strict';

class Foods{
  constructor(){
    this.id=0,
    this.db=[]
  }

  get(id){
    if(id){
      return this.db.find(record=> record.id === id);
    }else{
      return this.db;
    }
  }
  create(obj){
  
    this.db.push(obj);
    return obj;
  }
  update(id,obj){
    for(let i=0;i<this.db.length;i++){
      if(this.db[i]._id==id){
        this.db[i]=obj;
        return this.db[i];
      }
    }
  }

  delete(id){
    let deleted = false;
    this.db = this.db.filter((obj)=> {
      if (obj._id === id) {
        return true;
      } else {
        deleted = true;
        return false;
      }
    });
    return deleted;
  }

}

module.exports=Foods;
