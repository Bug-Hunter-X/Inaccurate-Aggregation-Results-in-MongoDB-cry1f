```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* some condition */ }},
  {$group: {_id: "$field", count: {$sum: 1}}}, //Corrected part
  {$sort: {count: -1}}
])
```