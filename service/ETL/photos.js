const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });

async function run() {
  try {
    await client.connect();

    const database = client.db("productSDC");
    const styles = database.collection("styles");
    const photos = database.collection("photos");

    // 4660354
    for (var i = 1; i < 4660354; i++) {
      // create a filter for a style to update
      const filter = { style_id: i }
      // this option instructs the method to not create a document if no documents match the filter
      const options = { upsert: false, autoIndex: false };

      let photosArray = [];
      let cursor = await photos.find({ ' styleId': filter.style_id});
      await cursor.forEach((doc) => {
        let photoObj = {
          url: doc[' url'],
          thumbnail_url: doc[' thumbnail_url']
        };
        photosArray.push(photoObj);
      });

      // console.log(photosArray);

      // create a column that sets the photos of the style
      const updateDoc = {
        $set: {
          'photos': photosArray
        },
      };

      // query a style and update it with a nested skus property
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