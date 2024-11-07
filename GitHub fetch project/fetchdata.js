async function fetchData() {
    try {
      let response = await fetch('https://api.github.com/users?per_page=25');
      let data = await response.json();
      // console.log(data);
      data.forEach(element => {
        console.log(`Node Id: ${element.node_id}, Login: ${element.login}`);
      });
    } catch (error) {
      console.log(error);
    }
  }
