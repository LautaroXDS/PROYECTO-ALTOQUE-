/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text982552870",
        "max": 0,
        "min": 0,
        "name": "nombre",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "relation1680572944",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "admin_id",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text4085563029",
        "max": 0,
        "min": 0,
        "name": "direccion",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1332273168",
        "max": 0,
        "min": 0,
        "name": "localidad",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select3550147091",
        "maxSelect": 1,
        "name": "provincia",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Buenos Aires",
          "Catamarca",
          "Chaco",
          "Chubut",
          "Ciudad Autónoma de Buenos Aires",
          "Córdoba",
          "Corrientes",
          "Entre Ríos",
          "Formosa",
          "Jujuy",
          "La Pampa",
          "La Rioja",
          "Mendoza",
          "Misiones",
          "Neuquén",
          "Río Negro",
          "Salta",
          "San Juan",
          "San Luis",
          "Santa Cruz",
          "Santa Fe",
          "Santiago del Estero",
          "Tierra del Fuego",
          "Tucumán"
        ]
      },
      {
        "hidden": false,
        "id": "number331428840",
        "max": null,
        "min": null,
        "name": "latitud",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number2335556369",
        "max": null,
        "min": null,
        "name": "longitud",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "select3229515823",
        "maxSelect": 0,
        "name": "servicios",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "parrilla",
          "estacionamiento",
          "vestuarios",
          "bar",
          "wifi"
        ]
      },
      {
        "hidden": false,
        "id": "number2384149649",
        "max": null,
        "min": null,
        "name": "hora_apertura",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number3622508064",
        "max": null,
        "min": null,
        "name": "hora_cierre",
        "onlyInt": true,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_827808193",
    "indexes": [],
    "listRule": null,
    "name": "complejos",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_827808193");

  return app.delete(collection);
})
