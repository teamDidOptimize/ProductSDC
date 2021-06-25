const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });

async function run() {
  try {
    await client.connect();

    const database = client.db("productSDC");
    const styles = database.collection("styles");
    const skus = database.collection("skus");

    // 1000011
    for (var i = 1; i < 5; i++) {
      // create a filter for a product to update
      const filter = { productId: i }
      // this option instructs the method to not create a document if no documents match the filter
      const options = { upsert: false, autoIndex: false };

      let skusObj = {};
      let cursor = await skus.find({ ' styleId': filter.productId});
      await cursor.forEach((doc) => {
        let val = doc['sku_id'];
        skusObj[val] = {
          'size': doc[' size'],
          'quantity': doc[' quantity']
        }
      });

      // create a column that sets the related items of the product
      const updateDoc = {
        $set: {
          'skus': skusObj
        },
      };

      const result = await styles.updateOne(filter, updateDoc, options);
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