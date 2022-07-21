const clickAndWaitElement = () =>
  new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const loginButton = document.getElementById('login-button').click();
      const errorMessage = document.querySelectorAll('div.error-message-container');
      if (errorMessage.length > 0 || loginButton != null) {
        resolve('Element is present')
        clearInterval(interval);
      }
      console.log('click and find element')
    }, 300)
    setTimeout(() => {
      reject("Timeout: element not found");
      clearInterval(interval);
    }, 10000);
  });
clickAndWaitElement();
