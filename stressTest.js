import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  let productId = Math.floor(Math.random() * 1000000 + 1);
  // http.get('http://localhost:3000/products');
  // http.get(`http://localhost:3000/products/${productId}`);
  // http.get(`http://localhost:3000/products/${productId}/styles`);
  http.get(`http://localhost:3000/products/${productId}/related`);
  sleep(1);
}
