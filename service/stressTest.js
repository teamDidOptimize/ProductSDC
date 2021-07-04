import http from 'k6/http';
import { sleep } from 'k6';

// export let options = {
//   discardResponseBodies: true,
//   scenarios: {
//     contacts: {
//       executor: 'constant-arrival-rate',
//       rate: 1000, // 200 RPS, since timeUnit is the default 1s
//       timeUnit: '1s',
//       duration: '30s',
//       preAllocatedVUs: 250,
//       maxVirtualUsers: 500,
//     },
//   },
// };

export default function () {
  let productId = Math.floor(Math.random() * 100000 + 400000);
  // http.get('http://localhost:3000/products');
  http.get(`http://localhost:3000/products/${productId}`);
  // http.get(`http://localhost:3000/products/${productId}/styles`);
  // http.get(`http://localhost:3000/products/${productId}/related`);
  sleep(1);
}

// products 1 - 7.47ms
// products 10 - 7.84ms
// products 100 - 6.56ms
// products 1000 - 7.59ms
// products RPS 10 - 5.75ms
// products RPS 100 - 4.64ms
// products RPS 1000 - 2.09ms

// single product 1 - 7.32ms
// single product 10 - 7.67ms
// single product 100 - 7.21ms
// single product 1000 - 7.83ms
// single RPS product 10 - 5.74ms
// single RPS product 100 - 5.48ms
// single RPS product 1000 - 2.44ms

// styles 1 - 7.41ms
// styles 10 - 7.37ms
// styles 100 - 7.55ms
// styles 1000 - 7.83ms
// styles RPS 10 - 6.03ms
// styles RPS 100 - 4.97ms
// styles RPS 1000 - 2.53ms

// related 1 - 7.34ms
// related 10 - 7.00ms
// related 100 - 7.02ms
// related 1000 - 7.34ms
// related RPS 10 - 6.09ms
// related RPS 100 - 4.49ms
// related RPS 1000 - 1.94ms