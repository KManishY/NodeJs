# MONGO_CRUD
Store it in your mongo collection. give it any name. after storing write the following queries to fetch the data: paste these queries in document, and upload the document (text file is fine)

All users whose gender is male
```
db.persons.find({gender:"Male"})
```

all users whose ID is even
```
db.persons.find({id:{$mod:[2,0]}})
```

Users who currently live in Japan
```
db.persons.find({native:"Japan"})
```
Users who are female and live in India
```
db.persons.find({gender:"Female",native:"India"})
```

Users who are more than 25 years old
```
db.persons.find({age:{$gt:25}})
```
Users who are less than 50 years old and live in United State
```
db.persons.find({age:{$lt:50},native:"United States"})
```

Total number of users who want to relocate to France (count only)
```
db.persons.find({relocate_to:"France"}).count()
```
Total number of users who are from USA and want to relocate to russia, sort them by age in ascending order
```
 db.persons.find({native:"United States",relocate_to:"Russia"}).sort({age:1}).count()
 ```
get all users, sort them by total number of family member ASC and age DESC order
```
web17> db.persons.find().sort({family_members:1, age:-1}).count()
```
<hr>

### Some basic cmds 

```
show dbs
show collection
```

### See the collection documentation
```
db.getCollection('persons').find({})
```

### Count the object inside the collection
```
db.getCollection('persons').find().count()
```

Find all the countries in region "Asia"
```
db.advanceQuery.find({region:"Asia"}).count()
```
Find all the countries with currency: "EUR"
```
db.advanceQuery.find({currency:"EUR"})
```
Find all the countries whose timezone's gmtOffset is 3600
```
db.advanceQuery.find({timezones:{$elemMatch:{gmtOffset:3600}}})

```
Find all the countries whose timezone's gmtOffset is 3600 AND timezone name is Central European Time (or CET)
```
db.advanceQuery.find({timezones:{$elemMatch:{gmtOffset:3600,tzName:"Central European Time"}}})
```
Find All the countries with more than 1 time zone (hint: size of array)
```

```
Find All the countries with "Korean" translation (KR)
```
db.advanceQuery.find({translations:{$elemMatch:{}}})
```


