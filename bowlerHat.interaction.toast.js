if (typeof bowlerHat === 'undefined'){ var bowlerHat = { interaction: {}};}

bowlerHat.interaction.toast = (function() {
	'use strict';

	/**
	 * Private functions
	 */
	
	/**
	 * Show a toast
	 * @param  {string} type    info, success, error
	 * @param  {string} message toast message
	 * @param  {boolean} sticky is the toast sticky
	 */
	var _toast = function(type, message, isSticky){
		// implementing: https://github.com/ifightcrime/bootstrap-growl
		 
		var delay = 4000;
		if (isSticky){
			delay = 0;
		}
		
		$.bootstrapGrowl(message, {
		  ele: 'body', // which element to append to
		  type: type, // (null, 'info', 'error', 'success')
		  offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
		  align: 'right', // ('left', 'right', or 'center')
		  width: auto, // (integer, or 'auto')
		  delay: 4000,
		  allow_dismiss: true,
		  stackup_spacing: 10 // spacing between consecutively stacked growls.
		});		
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
		_toast('info', message, isSticky);
	};

	/**
	 * Show an error toast
	 * @param  {string}  message  the message to show
	 * @param  {Boolean} isSticky is the toast sticky
	 */
	var _error = function(message, isSticky){
		_toast('error', message, isSticky);
	};

	/**
	 * Show a success sticky
	 * @param  {string}  message  the message to show
	 * @param  {Boolean} isSticky is the toast sticky
	 */
	var _success = function(message, isSticky){
		_toast('success', message, isSticky);
	};


	return {
		info : _info,
		error : _error,
		success : _success,
	};
})();