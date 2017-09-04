class Validator{
  /**
   * Validates initialization object of LUISClient
   *
   * @param initData an object that has 4 propertes:
   * @1- appId a String containing the Application Id
   * @2- appKey a String containing the Subscription Key
   * @3- verbose a Boolean to choose whether to use the verbose version or not
   */
  validateInitData(initData) {
    if (initData === null || typeof initData === "undefined") {
      throw new Error("Null or undefined initialization data for LUISClient");
    }
    if (!initData.hasOwnProperty("appId")) {
      throw new Error("You have to provide an Application Id in the initialization data object");
    }
    if (!initData.hasOwnProperty("appKey")) {
      throw new Error("You have to provide an Subscription Key in the initialization data object");
    }
  }

  /**
   * Validates the App info parameters such as Application Id and SubscriptionKey
   *
   * @param appInfoParam a String that represents an App info parameter
   * @param appInfoParamName a String containing the parameter's name
   */
  validateAppInfoParam(appInfoParam, appInfoParamName) {
    validateStringParam(appInfoParam, appInfoParamName);
    if (appInfoParam === "") {
      throw new Error("Empty " + appInfoParamName);
    }
    if (appInfoParam.indexOf(" ") !== -1) {
      throw new Error("Invalid " + appInfoParamName);
    }
  }

  /**
   * Validates the text to predict
   *
   * @param text a String containing the text which needs to be analysed and predicted
   * @returns a string containing the processed text to use for prediction
   */
  validateText(text) {
    validateStringParam(text, "Text to predict");
    text = text.trim();
    if (text === "") {
      throw new Error("Empty text to predict");
    }
    return text;
  }

  /**
   * Validates a string parameter
   *
   * @param param a string that represents a parameter to a function
   * @param paramName the parameter's name
   */
  validateStringParam(param, paramName) {
    if (typeof param === "undefined" || param === null) {
      throw new Error("Null or undefined " + paramName);
    }
    if (typeof param !== "string") {
      throw new Error(paramName + " is not a string");
    }
  }

  /**
   * Validates a boolean parameter
   *
   * @param param a boolean that represents a parameter to a function
   * @param paramName a String that represents the parameter's name
   */
  validateBooleanParam(param, paramName) {
    if (typeof param === "undefined" || param === null) {
      param = true;
    }
    if (typeof param !== "boolean") {
      throw new Error(paramName + " flag is not boolean");
    }
    return param;
  }

  /**
   * Validates the response handlers
   *
   * @param responseHandlers an object that contains "onSuccess" and "onFailure" functions to be executed
   * on the success or failure of the web request
   */
  validateResponseHandlers(responseHandlers) {
    if (typeof responseHandlers === "undefined" || responseHandlers === null) {
      throw new Error("You have to provide a response handlers object " +
        "containing 'onSuccess' and 'onFailure' functions")
    }
    if (!responseHandlers.hasOwnProperty("onSuccess") || typeof responseHandlers.onSuccess === "undefined" ||
      responseHandlers.onSuccess === null || typeof responseHandlers.onSuccess !== "function") {
      throw new Error("You have to provide an 'onSuccess' function as a property " +
        "of the response handlers object")
    }
    if (!responseHandlers.hasOwnProperty("onFailure") || typeof responseHandlers.onFailure === "undefined" ||
      responseHandlers.onFailure === null || typeof responseHandlers.onFailure !== "function") {
      throw new Error("You have to provide an 'onFailure' function as a property " +
        "of the response handlers object")
    }
  }

  /**
   * Validates the LUISresponse
   *
   * @param LUISresponse an object that contains the context ID of the dialog
   */
  validateLUISresponse(LUISresponse) {
    if (typeof LUISresponse === "undefined" || LUISresponse === null || !LUISresponse.hasOwnProperty("dialog") ||
      typeof LUISresponse.dialog === "undefined" || !LUISresponse.dialog.hasOwnProperty("contextId") ||
      typeof LUISresponse.dialog.contextId === "undefined" || typeof LUISresponse.dialog.contextId !== "string") {
      throw new Error("You have to provide a LUISResponse object containing the Context Id of the dialog" +
        " you're replying to");
    }
  }
}

module.exports = new Validator();