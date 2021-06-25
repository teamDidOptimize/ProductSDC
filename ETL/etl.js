const Product = require('../models/product.js');
const Related = require('../models/related.js');
const db = require('../server.js');

const etlRelated = async () => {
  // let doc = new Product;
  for (var i = 131; i < 1000; i++) {
    let query = { id: i };
    await Related.find({ current_product_id: query.id })
      .then(async (relatedDoc) => {
        let relatedItems = await relatedDoc.map((item) => {
          return item.related_product_id;
        })
        return relatedItems;
      })
      .then(async (relatedItems) => {
        await Product.findOneAndUpdate(query, { related: relatedItems }, {
          returnOriginal: false
        })
          .catch((err) => console.log(err));
          return;
      })
      .catch((err) => console.log(err));
      console.log('done with (outer)', i);
  }

  for (var i = 1030; i < 2000; i++) {
    let query = { id: i };
    await Related.find({ current_product_id: query.id })
      .then(async (relatedDoc) => {
        let relatedItems = await relatedDoc.map((item) => {
          return item.related_product_id;
        })
        return relatedItems;
      })
      .then(async (relatedItems) => {
        await Product.findOneAndUpdate(query, { related: relatedItems }, {
          returnOriginal: false
        })
          .catch((err) => console.log(err));
          return;
      })
      .catch((err) => console.log(err));
      console.log('done with (outer)', i);
  }

  for (var i = 2030; i < 3000; i++) {
    let query = { id: i };
    await Related.find({ current_product_id: query.id })
      .then(async (relatedDoc) => {
        let relatedItems = await relatedDoc.map((item) => {
          return item.related_product_id;
        })
        return relatedItems;
      })
      .then(async (relatedItems) => {
        await Product.findOneAndUpdate(query, { related: relatedItems }, {
          returnOriginal: false
        })
          .catch((err) => console.log(err));
          return;
      })
      .catch((err) => console.log(err));
      console.log('done with (outer)', i);
  }
};

const etlRelated1 = async () => {
  // let doc = new Product;
  for (var i = 1000; i < 2000; i++) {
    let query = { id: i };
    await Related.find({ current_product_id: query.id })
      .then(async (relatedDoc) => {
        let relatedItems = await relatedDoc.map((item) => {
          return item.related_product_id;
        })
        return relatedItems;
      })
      .then(async (relatedItems) => {
        await Product.findOneAndUpdate(query, { related: relatedItems }, {
          returnOriginal: false
        })
          .catch((err) => console.log(err));
          return;
      })
      .catch((err) => console.log(err));
      console.log('done with (outer)', i);
  }
};

const etlRelated2 = async () => {
  // let doc = new Product;
  for (var i = 2000; i < 3000; i++) {
    let query = { id: i };
    await Related.find({ current_product_id: query.id })
      .then(async (relatedDoc) => {
        let relatedItems = await relatedDoc.map((item) => {
          return item.related_product_id;
        })
        return relatedItems;
      })
      .then(async (relatedItems) => {
        await Product.findOneAndUpdate(query, { related: relatedItems }, {
          returnOriginal: false
        })
          .catch((err) => console.log(err));
          return;
      })
      .catch((err) => console.log(err));
      console.log('done with (outer)', i);
  }
};

const etlRelated3 = async () => {
  // let doc = new Product;
  for (var i = 3000; i < 4000; i++) {
    let query = { id: i };
    await Related.find({ current_product_id: query.id })
      .then(async (relatedDoc) => {
        let relatedItems = await relatedDoc.map((item) => {
          return item.related_product_id;
        })
        return relatedItems;
      })
      .then(async (relatedItems) => {
        await Product.findOneAndUpdate(query, { related: relatedItems }, {
          returnOriginal: false
        })
          .catch((err) => console.log(err));
          return;
      })
      .catch((err) => console.log(err));
      console.log('done with (outer)', i);
  }
};

const etlRelated4 = async () => {
  // let doc = new Product;
  for (var i = 4000; i < 5000; i++) {
    let query = { id: i };
    await Related.find({ current_product_id: query.id })
      .then(async (relatedDoc) => {
        let relatedItems = await relatedDoc.map((item) => {
          return item.related_product_id;
        })
        return relatedItems;
      })
      .then(async (relatedItems) => {
        await Product.findOneAndUpdate(query, { related: relatedItems }, {
          returnOriginal: false
        })
          .catch((err) => console.log(err));
          return;
      })
      .catch((err) => console.log(err));
      console.log('done with (outer)', i);
  }
};

const etlRelated5 = async () => {
  // let doc = new Product;
  for (var i = 5000; i < 6000; i++) {
    let query = { id: i };
    await Related.find({ current_product_id: query.id })
      .then(async (relatedDoc) => {
        let relatedItems = await relatedDoc.map((item) => {
          return item.related_product_id;
        })
        return relatedItems;
      })
      .then(async (relatedItems) => {
        await Product.findOneAndUpdate(query, { related: relatedItems }, {
          returnOriginal: false
        })
          .catch((err) => console.log(err));
          return;
      })
      .catch((err) => console.log(err));
      console.log('done with (outer)', i);
  }
};

etlRelated();
etlRelated1();
etlRelated2();
etlRelated3();
etlRelated4();
etlRelated5();