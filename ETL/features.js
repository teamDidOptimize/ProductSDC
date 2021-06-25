const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });

async function run() {
  try {
    await client.connect();

    const database = client.db("productSDC");
    const products = database.collection("products");
    const features = database.collection("features");

    for (var i = 1; i < 1000011; i++) {
      // create a filter for a product to update
      const filter = { id: i }
      // this option instructs the method to not create a document if no documents match the filter
      const options = { upsert: false, autoIndex: false };

      let featureList = [];
      let cursor = await features.find({ ' product_id': filter.id });
      // console.log(cursor);
      await cursor.forEach((doc) => {
        let data = {
          feature: doc[' feature'],
          value: doc[' value']
        }
        featureList.push(data);
      });

      // create a column that sets the related items of the product
      const updateDoc = {
        $set: {
          'features': featureList,
        },
      };

      const result = await products.updateOne(filter, updateDoc, options);
      console.log(
        `i is ${i}, ${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
    }
  } catch (error) {
    console.log('error occured in try block', error);
  } finally {
    await client.close();
  }
}
run().catch(`an error occured ${console.dir}`);