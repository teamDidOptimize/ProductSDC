const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });

async function run() {
  try {
    await client.connect();

    const database = client.db("productSDC");
    const products = database.collection("products");
    const relateds = database.collection("relateds");

    for (var i = 1373; i < 1000011; i++) {
      // create a filter for a product to update
      const filter = { id: i }
      // this option instructs the method to not create a document if no documents match the filter
      const options = { upsert: false, autoIndex: false };

      let relatedIds = [];
      // create the array of relatedItems
      let cursor = await relateds.find({ current_product_id: filter.id });
      await cursor.forEach((doc) => {
        relatedIds.push(doc.related_product_id);
      });

      // create a column that sets the related items of the product
      const updateDoc = {
        $set: {
          'related': relatedIds,
        },
      };

      const result = await products.updateOne(filter, updateDoc, options);
      console.log(
        `i is ${i}, ${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
    }
  } finally {
    await client.close();
  }
}
run().catch(`an error occured ${console.dir}`);