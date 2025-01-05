```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* some condition */ }},
  {$group: {_id: "$field", count: {$sum: 1}}}, //This is the incorrect part
  {$sort: {count: -1}}
])
```