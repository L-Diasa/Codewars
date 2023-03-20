// DESCRIPTION:
// There's no such thing as private properties on a coffeescript object! But, maybe there are?

// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

// getSecret() which returns the secret
// setSecret() which sets the secret
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

function createSecretHolder(secret) {
    let privSecret = secret;
    
    function getSecret() {
      return privSecret
    }
    
    function setSecret(newSecret) {
      privSecret = newSecret
    }
    
    return {getSecret, setSecret}
  }
  
  obj = createSecretHolder(5)
  Test.assertEquals(obj.getSecret(), 5);
  obj.setSecret(2)
  Test.assertEquals(obj.getSecret(), 2);