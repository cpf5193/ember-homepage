import Service from '@ember/service';

export default Service.extend({
  /**
   * Generic ajax GET call
   * @param {String} service - the name of the php service to connect to
   * @param {String} queryString - The string to send with the get request
   * @param {Function} toCall - the callback function to call on success
   */
  genericAjax(service, queryString, toCall) {
    new $.ajax(`${service}?${queryString}`, {
      method: 'GET',
      success: toCall,
      error: this.ajaxFail
    });
  }, 

  /**
   * The function to call on an ajax failure
   * @param {Object} ajax - the returned error ajax object
   */
  ajaxFail(ajax) {
    console.log(`Error making ajax request:
      Server status: ${ajax.status} ${ajax.statusText}
      Server response text: ${ajax.responseText}`);
  }
});
