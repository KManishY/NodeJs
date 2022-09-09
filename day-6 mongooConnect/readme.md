# [Mongoose Connection]("https://mongoosejs.com/docs/index.html")

The database schema is one that contains list of attributes and instructions to tell the database engine how data is organised whereas Data model is a collection of conceptional tools for describing data, data-relationship and consistency constraints.

*Schemas* :- Structure of doocument we will write in javaScript 
```
const markSchema = mongoose.Schema({
	mark1: Number,
	mark2: Number,
	mark3: Number,
	remark: String,
    //remark: { type: String, required: true }, // for required validation
});

```

*Modal* :- modals take two args(collection, Schemas)

```
const MarkModal = mongoose.model(
	"mark", //? collection
	markSchema //? Schema
);
```

#### Insert many in database  type:1
```
const newMark = await MarkModal.insertMany([
		{
			mark1: 120,
			mark2: 234,
			mark3: 12,
			remark: "excellent",
		},
	]);
	// console.log("newMark: ", newMark);

```
#### Type: 2
```
const obj1 = {
		mark1: 120,
		mark2: 234,
		mark3: 12,
		remark: "excellent",
	};
	const obj2 = {
		mark1: 12,
		mark2: 23,
		mark3: 120,
		remark: "good",
	};
	const obj3 = {
		mark1: 11,
		mark2: 213,
		mark3: 140,
		remark: "good",
	};
	const newMark = await MarkModal.insertMany([obj1, obj2, obj3]);
	// console.log("newMark: ", newMark);
```

#### Another way to insert data into database [save()]() also this is recommended by mongodb

```

	const obj = new MarkModal({
		mark1: 24,
		mark2: 34,
		mark3: 56,
		remark: "good enough",
	});
	const newMark = await obj.save();
	console.log("newMark: ", newMark);
```