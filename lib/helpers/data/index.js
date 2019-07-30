const createBaseDataURL = (environment = null) => {
  console.log(">> Create Base Data URL =>", environment);
  let localEnvironment = environment;

  if (!localEnvironment) {
    console.log("... Did not receive environment, seeing if we can find it");
    if (typeof window !== "undefined") {
      console.log("... Finding the environment from the window");
      localEnvironment = window.ENV;
    } else {
      console.log(
        "... Cannot find the environment in the window, setting to production"
      );
      localEnvironment = "production";
    }
  }

  if (localEnvironment === "development") {
    console.log("... Env is DEVELOPMENT");
    return "http://localhost:3500/v2";
  } else if (localEnvironment === "staging") {
    console.log("... Env is STAGING");
    return "http://tonebase-api-staging.herokuapp.com/v2";
  } else if (localEnvironment === "production") {
    console.log("... Env is PRODUCTION");
    return "http://tonebase-api-production.herokuapp.com/v2";
  }
};

export { createBaseDataURL };
