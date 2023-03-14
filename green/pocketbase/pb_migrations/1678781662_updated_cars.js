migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sxt5m2xtcxo5107")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "srzbhzd4",
    "name": "latitude",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": -90,
      "max": 90
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qp5zytmn",
    "name": "longitude",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": -180,
      "max": 180
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sxt5m2xtcxo5107")

  // remove
  collection.schema.removeField("srzbhzd4")

  // remove
  collection.schema.removeField("qp5zytmn")

  return dao.saveCollection(collection)
})
