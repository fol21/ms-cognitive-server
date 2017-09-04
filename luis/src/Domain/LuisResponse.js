/**
 *  Returns a object response based in LUIS json
 * 
 * @param {any} jsonResponse 
 * @returns 
 */
class LuisResponse {
  response(jsonResponse) {
    if (typeof jsonResponse === "undefined" || jsonResponse === null || jsonResponse.length === 0) {
      throw new Error("Invalid Application Id");
    }
    var luisResponse = JSON.parse(jsonResponse);
    if (luisResponse.hasOwnProperty("statusCode")) {
      throw new Error("Invalid Subscription Key");
    }
    if (luisResponse.hasOwnProperty("dialog") && typeof luisResponse.dialog !== "undefined") {
      luisResponse.dialog.isFinished = () => {
        return this.status === "Finished";
      };
    }
    return luisResponse;
  };
}

module.exports = new LuisRespose();