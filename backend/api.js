const app = require('express')(); // express object
const mongoClient = require('mongodb').MongoClient; // mongodb client
const cors = require('cors'); // cors
const parser = require('body-parser'); // parser
const port = 3001; // port for express
const db_url = 'mongodb://127.0.0.1:27017'; // db url
app.use(parser.json()); // add cors & body paraser to the express
app.use(cors()); // enabling cors
app.listen(port, () => console.log(`Server started at ${port}`));

// function autoInc(collection) {
// 	mongoClient
// 		.connect(db_url, { useNewUrlParser: true })
// 		.then((client) => {
//             const db = client.db('mydb');
// 			const doc = db.collection('auto_increment').findOne({_id: collection});
//             doc.then((document) => {
//                 const id = document.id;
//                 db.collection('auto_increment').updateOne({_id: collection}, {$set: {id:id+1}})
//             })
//         })
// }

app.post('/login', (request, response) => {
	//user must enter auto-generated id & the password to login
	//Check user in database with email and password
	//If exists store session in a variable ? and return a token
	//?store token as well to the user
	//If not return 401, User not found, verify email and password and try again.
});

//middleware to check always the user token and email
//If user not valid redirect to login page

app.get('/logout', (request, response) => {
	//Check user session list
	//If exists remove session in a variable ? and return a token
	//?store token as well to the user
	//Redirect
});

//Get profile data
//Logged in user can see his/her details like name, dob, phone
app.get('/profile/:id', (request, response) => {
	mongoClient
		.connect(db_url, { useNewUrlParser: true })
		.then((client) => {
			const db = client.db('mydb');
			const doc = db.collection('contact').findOne({ _id: request.params.id });
			doc.then((document) => response.status(200).json(document))
				.catch(() => response.status(404).json({ error: 'User not found' }))
				.finally(() => client.close());
		})
		.catch(() => response.status(404).json({ error: 'DB_ERR' }));
});

//Create profile
//User must enter name, password, phone, dob and contact list must be empty default
//_id must be auto-generated
app.post('/profile', (request, response) => {
	// const id = from AutoINC
	const id = 1;
	mongoClient
		.connect(db_url, { useNewUrlParser: true })
		.then((client) => {
			const db = client.db('mydb');
			const doc = db
				.collection('contact')
				.insertOne({ _id: id, ...request.body, contacts: [] });
			doc.then((document) => response.status(201).json(document))
				.catch(() => response.status(404).json({ error: 'Failed to create user profile' }))
				.finally(() => client.close());
		})
		.catch(() => response.status(404).json({ error: 'DB_ERR' }));
});

//Update profile
//Logged in user must able to update any of the details like name, phone, password
app.put('/profile/:id', (request, response) => {
	mongoClient
		.connect(db_url, { useNewUrlParser: true })
		.then((client) => {
			const db = client.db('mydb');
			const doc = db
				.collection('contact')
				.updateOne({ _id: parseInt(request.params.id) }, { $set: request.body });
			doc.then((document) => response.status(200).json(document))
				.catch(() => response.status(404).json({ error: 'Failed to update user profile' }))
				.finally(() => client.close());
		})
		.catch((error) => response.status(404).json({ error: 'DB_ERR' }));
});

//Add contact
//Logged in user must able to add contact name & phone to their profile
app.post('/contact/:id', (request, response) => {
	mongoClient
		.connect(db_url, { useNewUrlParser: true })
		.then((client) => {
			const contact = { _id: 1, ...request.body };
			const db = client.db('mydb');
			const doc = db
				.collection('contact')
				.updateOne({ _id: request.params.id }, { $push: { contacts: contact } });
			doc.then((document) => response.status(201).json(document))
				.catch(() => response.status(404).json({ error: 'Failed to add contact' }))
				.finally(() => client.close());
		})
		.catch(() => response.status(404).json({ error: 'DB_ERR' }));
});

//FIXME - REMOVE IS NOT WORKING YET
//Delete contact
//Logged in user must delete the particular contact
app.delete('/contact/:id/:contactId', (request, response) => {
	mongoClient
		.connect(db_url, { useNewUrlParser: true })
		.then((client) => {
			const db = client.db('mydb');
			//Consider to check if data already exists
			const doc = db
				.collection('contact')
				.updateOne(
					{ _id: request.params.id },
					{ $pull: { contacts: { $where: { _id: request.params.contactId } } } }
				);
			doc.then((document) => response.status(200).json(document))
				.catch(() => response.status(404).json({ error: 'Failed to remove contact' }))
				.finally(() => client.close());
		})
		.catch(() => response.status(404).json({ error: 'DB_ERR' }));
});
