// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      const success = true;
      if (success) {
        // Resolve the promise with a value (e.g., fetched data)
        resolve('Data fetched successfully');
      } else {
        // Reject the promise with an error
        reject(new Error('Failed to fetch data'));
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
  
  // Executing the promise
  myPromise.then((result) => {
    // Handle fulfillment (successful completion)
    console.log('Success:', result);
  }).catch((error) => {
    // Handle rejection (failure)
    console.error('Error:', error.message);
  });
console.log('Hi')  