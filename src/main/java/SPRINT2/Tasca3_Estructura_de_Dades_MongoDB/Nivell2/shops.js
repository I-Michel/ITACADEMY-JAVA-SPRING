db.createCollection('shops', {validator: {$jsonSchema: {bsonType: 'object',title: 'shops',required: ['address','zip','city','state'],properties:{address:{bsonType: 'string'},zip:{bsonType: 'string'},city:{bsonType: 'string'},state:{bsonType: 'string'}}}}});