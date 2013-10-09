if (typeof bowlerHat === 'undefined'){ var bowlerHat = { interaction: {}};}

bowlerHat.communication.ajax = (function(){
	'use strict';

	/**
	 * Main call for ajax communication
	 * @param  {string}   url          action url
	 * @param  {json}   parameters   parameters
	 * @param  {get/post}   action       http action
	 * @param  {Boolean}  isJson       is json
	 * @param  {object}  foregroundContainer foreground container
	 * @param  {Function} callback     function callback
	 */
	var _communicate = function(url, parameters, action, isJson, foregroundContainer, callback){
		// TODO Implement the ajax call
	};


	/**
	 *  Public functions
	 */

	 /**
	  * Get html from url blocking page
	  * @param  {string}   url        The url to get html from
	  * @param  {json}   parameters parameters to send in request
	  * @param  {Function} callback   the callback to send the html to
	  */
	var _getHtmlForeground = function(url, parameters, callback){
		_communicate(url, parameters, 'get', false, window, callback);
	};

	 /**
	  * Get html from url while blocking a container
	  * @param  {string}   url        The url to get html from
	  * @param  {json}   parameters parameters to send in request
	  * @param  {object}   container  container to show loading
	  * @param  {Function} callback   the callback to send the html to
	  */
	var _getHtmlForegroundInContainer = function(url, parameters, container, callback){
		_communicate(url, parameters, 'get', false, container, callback);
	};

	/**
	 * Get html background 
	 * @param  {string}   url        The url to get the html from
	 * @param  {json}   parameters	parameters to send in the request
	 * @param  {Function} callback   the callback to send the html
	 */
	var _getHtmlBackground = function(url, parameters, callback){
		_communicate(url, parameters, 'get', false, null, callback);
	};

	/**
	 * Get json from a url	
	 * @param  {string}   url        the url to get the json from
	 * @param  {json}   parameters	parameters to send with the request
	 * @param  {Function} callback   callback to send the json to once the json is parsed
	 */
	var _getJsonForeground = function(url, parameters, callback){
		_communicate(url, parameters, 'get', true, window, callback);
	};

	/**
	 * Get json from a url blocking a container
	 * @param  {string}   url        the url of the resesource
	 * @param  {json}   parameters   parmeters to send with the request
	 * @param  {Function} callback   function to send the json once it is parsed
	 */
	var _getJsonForegroundInContainer = function(url, parameters, container, callback){
		_communicate(url, parameters, 'get', true, container, callback);
	};

	/**
	 * Get json from a resource in the background
	 * @param  {string}   url        the url of the resource
	 * @param  {json}   parameters   parameters to send with the request
	 * @param  {Function} callback   function to send the json once it is parsed
	 */
	var _getJsonBackground = function(url, parameters, callback){
		_communicate(url, parameters, 'get', false, null, callback);
	};

	return {
		getHtmlForeground : _getHtmlForeground,
		getHtmlForegroundInContainer : _getHtmlForegroundInContainer,
		getHtmlBackground : _getHtmlBackground,
		getJsonForeground : _getJsonForeground,
		getJsonForegroundInContainer : _getJsonForegroundInContainer,
		getJsonBackground : _getJsonBackground
	}
})();