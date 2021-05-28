/* callback version




class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

// TODO: 1
const fetchingUserFromInternet = (callback, isOffline) => {
  setTimeout(() => {
    if (isOffline) {
      callback(new NetworkError('Gagal mendapatkan data dari internet'), null);
    }
    callback(null, { name: 'John', age: 18 });
  }, 500);
};


// TODO: 2
const gettingUserName = () => {
  fetchingUserFromInternet((error, user) => {
    if (error) {
      return error.message;
    }
    return user.name;
  }, false);
};
*/


// Promise and async await version


class NetworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
  }
  
  // TODO: 1
  const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      if (!isOffline) {
        resolve({ name: 'John', age: 18});
      }
      else {
        reject(new NetworkError('Gagal mendapatkan data dari internet'));
      }
    }, 500);
   })
  };
  
  
  
  // TODO: 2
  async function gettingUserName() {
    try{
      const user = await fetchingUserFromInternet();
      console.log(user);
      return user.name;
    }
    catch(error) {
      return error.message;
    }
  };
  
  gettingUserName();
  
  /**
   * Hiarukan kode di bawah ini
   */
  
  module.exports = { fetchingUserFromInternet, gettingUserName, NetworkError };
  