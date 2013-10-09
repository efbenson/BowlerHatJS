if (typeof bowlerHat === 'undefined'){ var bowlerHat = { interaction: {}};}

bowlerHat.interaction.toast = (function() {
	'use strict';

	/**
	 * Private functions
	 */
	
	/**
	 * Show a toast
	 * @param  {string} type    info, success, warning, error
	 * @param  {string} message toast message
	 * @param  {boolean} sticky is the toast sticky
	 */
	var _toast = function(type, message, isSticky){
		//TODO: show modal	
	};

	 /**
	  * Public functions
	  */
	
	/**
	 * Show an info toast
	 * @param  {string}  message  the message to show
	 * @param  {Boolean} isSticky is the toast sticky
	 */
	var _info = function(message, isSticky){
		_toast("info", message, isSticky);
	};

	/**
	 * Show an error toast
	 * @param  {string}  message  the message to show
	 * @param  {Boolean} isSticky is the toast sticky
	 */
	var _error = function(message, isSticky){
		_toast("error", message, isSticky);
	};

	/**
	 * Show a success sticky
	 * @param  {string}  message  the message to show
	 * @param  {Boolean} isSticky is the toast sticky
	 */
	var _success = function(message, isSticky){
		_toast("success", message, isSticky);
	};

	/**
	 * Show a warning toast
	 * @param  {string}  message  the message to show
	 * @param  {Boolean} isSticky is the toast sticky
	 */
	var _warning = function(message, isSticky){
		_toast("warning", message, isSticky);	
	};

	return {
		info : _info,
		error : _error,
		success : _success,
		warning : _warning
	};
})();