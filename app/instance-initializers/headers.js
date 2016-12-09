export function initialize(app) {
  let fbService    = app.lookup("service:fastboot"),
      shoebox      = fbService.get("shoebox"),
      shoeboxStore = shoebox.retrieve("request-data"),
      userAgent    = null;

  if (fbService.get("isFastBoot")) {
    let headers   = fbService.get("request.headers");

    userAgent = headers.get("user-agent");

    app.register("data:request", {
      userAgent: userAgent
    }, {
        instantiate: false
    });

    if (!shoeboxStore) {
      shoeboxStore = {};
      shoebox.put("request-data", shoeboxStore);
    }
    shoeboxStore.userAgent = userAgent;
  } else if(shoeboxStore) {
    // client w-fastboot 
    userAgent = shoeboxStore.userAgent;

    app.register("data:request", {
      userAgent: userAgent
    }, {
        instantiate: false
    });
  }
  // client wn-fastboot
}

export default {
  name: 'headers',
  initialize
};
