migrate((db) => {
  const collection = new Collection({
    "id": "sxt5m2xtcxo5107",
    "created": "2023-03-14 07:46:57.196Z",
    "updated": "2023-03-14 07:46:57.196Z",
    "name": "cars",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "md6pawm5",
        "name": "energy",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 100
        }
      },
      {
        "system": false,
        "id": "bjxcbrrd",
        "name": "carType",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "@request.auth.id = \"\"",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sxt5m2xtcxo5107");

  return dao.deleteCollection(collection);
})
