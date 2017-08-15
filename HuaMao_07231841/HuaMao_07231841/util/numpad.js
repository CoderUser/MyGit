/*Custom Numpad*/
window.TApi = window.TApi || {};
window.TApi.Numpad = Object.create(Object.prototype, function(_TApi)
{
	var _currentInput, _currentCursorPos, _finishCallback;

	//get cursor left string width
	function getStrWidth(obj, string)
	{
		var _str = string ? string : '',
			_string = _TApi.$id('stringW'), _stringW;
		if (!_string)
		{
			var _string = document.createElement('span');
			_string.id = 'stringW';
			_string.style.fontSize = _TApi.getStyle(obj, 'font-size');
			_string.style.fontFamily = _TApi.getStyle(obj, 'font-family');
			_string.style.visibility = "hidden";
			document.body.appendChild(_string);
		}
		_string.innerHTML = _str;
		_stringW = _string.offsetWidth;
		return _stringW;
	}

	//get cursor position
	function getCursortPosition (input)
	{
		var CaretPos = 0;
		if (document.selection) // IE Support
		{
			input.focus ();
			var Sel = document.selection.createRange ();
			Sel.moveStart ('character', -input.value.length);
			CaretPos = Sel.text.length;
		}
		else if (input.selectionStart || input.selectionStart == '0')
			CaretPos = input.selectionStart;
		return (CaretPos);
	}

	//set cursor position
	function setCursorPosition(input, pos)
	{
		if(input.setSelectionRange)
		{
			input.focus();
			input.setSelectionRange(pos, pos);
		}
		else if (input.createTextRange)
		{
			var range = input.createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	}

	// handle numpad hide
	function handleHide(e)
	{
		// skip if click current input OR click numpad
		var target = e.target, targetParent = target.parentNode;
		if (target == _currentInput) return;
		while (targetParent)
		{
			if (targetParent.id == "m-numpad") return;
			targetParent = targetParent.parentNode;
		}
		hide();
	}

	function updateValue(inputEl, value)
	{
		if (inputEl.nodeName != "INPUT") inputEl.textContent = value;
		inputEl.value = value;
	}

	function getValue(inputEl)
	{
		var value = inputEl.value;
		if (!value) value = inputEl.textContent;
		return value;
	}

	function show(input, options)
	{
		var body = document.body,
			iScreenH = window.innerHeight,
			iScreenW = window.innerWidth;
		// get options
		var clickEvent = options.clickEvent,
			intMode = options.intMode,
			showCursor = !options.disableCursor,
			displayNum = options.displayNum,
			customPositon = options.customPosition,		// could be "center", "top", "bottom"
			numpadSize = options.numpadSize;			// cuuld be "large"
		_finishCallback = options.finishCallback;
		// init input infomation
		var inputClientRect = input.getBoundingClientRect(),
			inputTop = inputClientRect.top,
			inputLeft = inputClientRect.left,
			inputWidth = inputClientRect.width,
			inputHeight = inputClientRect.height,
			inputStyles = _TApi.getStyle(input),
			inputPaddingLeft = parseInt(inputStyles.paddingLeft) + parseInt(inputStyles.borderLeft),
			inputPaddingRight = parseInt(inputStyles.paddingRight) + parseInt(inputStyles.borderRight),
			inputStrLimit = Math.floor((inputWidth - inputPaddingLeft - inputPaddingRight) / (getStrWidth(input, '0123456789.') / 11));
		// get last input value
		if (!getValue(input)) updateValue(input, "");
		// creat cursor
		if (showCursor)
		{
			var cursorEl = _TApi.$id("m-numpad-cursor");
			_currentCursorPos = getCursortPosition(input);
			if (!cursorEl)
			{
				cursorEl = document.createElement('em');
				cursorEl.id = "m-numpad-cursor";
				cursorEl.style.height = (inputHeight - 12) + "px";
				cursorEl.style.top = (inputTop + 6) + "px";
				body.appendChild(cursorEl);
			}

			function setIptCursor()
			{
				var inputValue = getValue(input), _leftWidth ;
				if(_currentCursorPos < 1)
				{
					if(inputValue.indexOf('-') >= 0)_currentCursorPos = 1;
					else _currentCursorPos = 0;
				}
				setCursorPosition(input, _currentCursorPos)
				_stringText = input.value.substr(0, _currentCursorPos);
				_leftWidth = getStrWidth(input, _stringText);
				cursorEl.style.left = _leftWidth + inputLeft + inputPaddingLeft + 'px';
			}
			setIptCursor();
		}
		else
		{
			_currentCursorPos = (getValue(input) ? getValue(input).length : 0);
		}
		// return if click the same input element, just set cursor position
		if (_currentInput == input) return;
		//creat numpad
		var numpadEl = _TApi.$id("m-numpad");
		if (!numpadEl)
		{
			numpadEl = document.createElement('div');
			numpadEl.id = "m-numpad";
			numpadEl.className = "m-numpad";
			if (numpadSize)
			{
				if (numpadSize == "large") numpadEl.className += " large";
			}
			if (intMode)
			{
				numpadEl.innerHTML = '<ul class="clear">' +
									 '<li>1</li><li>2</li><li>3</li><li>C</li><li></li>' +
									 '<li>4</li><li>5</li><li>6</li><li>0</li><li></li>' +
									 '<li>7</li><li>8</li><li>9</li><li class="m-numpad-del">X</li>' +
									 '</ul><button class="fullsize">Enter</button>';
			}
			else
			{
				numpadEl.innerHTML = '<ul class="clear">' +
									 '<li>1</li><li>2</li><li>3</li><li>.</li><li>C</li>' +
									 '<li>4</li><li>5</li><li>6</li><li>0</li><li></li>' +
									 '<li>7</li><li>8</li><li>9</li><li class="m-numpad-del">X</li>' +
									 '</ul><button>Enter</button>';
			}
			body.appendChild(numpadEl);
		}
		// create num display
		function NumDisplay(numpadEl)
		{
			// construct
			var numDisplayEl;
			numDisplayEl = document.createElement("div");
			numDisplayEl.className = "m-numpad-numdisplay";
			numDisplayEl.innerHTML = "<span>" + getValue(input) + "</span>";
			numpadEl.insertBefore(numDisplayEl, numpadEl.firstElementChild);
			var numDisplayStyles = _TApi.getStyle(numDisplayEl),
				numDisplayPaddingLeft = parseInt(numDisplayStyles.paddingLeft) + parseInt(numDisplayStyles.borderLeft),
				numDisplayPaddingRight = parseInt(numDisplayStyles.paddingRight) + parseInt(numDisplayStyles.borderRight),
				numDisplayLimit = numDisplayEl.offsetWidth - numDisplayPaddingLeft - numDisplayPaddingRight,
				innerElement = numDisplayEl.firstElementChild;
			// function
			this.reachLimit = function()
			{
				return innerElement.offsetWidth + 16 > numDisplayLimit;
			};
			this.setValue = function(value)
			{
				innerElement.textContent = value;
			}
		}

		if (displayNum && !numpadEl.numDisplay) numpadEl.numDisplay = new NumDisplay(numpadEl);
		// get numpad size
		var numpadWidth = numpadEl.offsetWidth,
			numpadHeight = numpadEl.offsetHeight;
		// numpad position
		if (!customPositon)
		{
			if (inputTop + numpadHeight + inputHeight + 5 < iScreenH)
				numpadEl.style.top = inputTop + inputHeight + 5 + 'px'; //below input
			else
				numpadEl.style.top = inputTop - numpadHeight - 5 + 'px'; //above input
			if (inputLeft + numpadWidth + 5 < iScreenW)
				numpadEl.style.left = inputLeft + "px";
			else if (inputLeft - numpadWidth > 0)
				numpadEl.style.left = inputLeft - numpadWidth + "px";
		}
		else
		{
			switch (customPositon.toLowerCase())
			{
				case "center":
					numpadEl.style.top = "0";
					numpadEl.style.right = "0";
					numpadEl.style.bottom = "0";
					numpadEl.style.left = "0";
					numpadEl.style.height = numpadHeight + "px";
					break;
				case "top":
					numpadEl.style.top = "5%";
					numpadEl.style.right = "0";
					numpadEl.style.left = "0";
					numpadEl.style.height = numpadHeight + "px";
					break;
				case "bottom":
					numpadEl.style.right = "0";
					numpadEl.style.bottom = "5%";
					numpadEl.style.left = "0";
					numpadEl.style.height = numpadHeight + "px";
					break;
			}
		}
		// handle numpad event
		var isTouchEnd = true, clickEl, clickElRect;

		function handleClick(clickEl, clickValue)
		{
			var currValue = getValue(input),
				newValue = currValue;
			switch (clickValue)
			{
				// handle delete
				case "X":
					// append mode
					if (_currentCursorPos == currValue.length)
						newValue = currValue.substring(0, _currentCursorPos - 1);
					// insert mode
					else
						newValue = currValue.substring(0, _currentCursorPos - 1) + currValue.substring(_currentCursorPos);
					// update current cursor position
					if (_currentCursorPos > 0) _currentCursorPos--;
					break;
				// handle clear
				case "C":
					newValue = '';
					// update current cursor position
					_currentCursorPos = 0;
					break;
				// handle enter
				case "Enter":
					if (isTouchEnd)
					{
						setTimeout(function()
						{
							hide()
						}, 100);
					}
					return;
				// handle number & dot input
				default:
					if (clickEl.nodeName != "LI") break;
					// reach input limit when not display number OR reach number display limit
					if ((!displayNum && currValue.length == inputStrLimit) || (displayNum && numpadEl.numDisplay.reachLimit()))
					{
						if (showCursor) _TApi.addClass(cursorEl, "m-numpad-cursorend");
						return;
					}
					// already input dot
					if ((currValue.indexOf('.') > 0 || !currValue || currValue == '-' || _currentCursorPos == 0) && clickValue === '.') return;
					//
					if((currValue == '0' || currValue == '-0') && clickValue === '0') return;
					// append mode
					if (_currentCursorPos == currValue.length)
						newValue += clickValue;
					// insert mode
					else
						newValue = currValue.substring(0, _currentCursorPos) + clickValue + currValue.substring(_currentCursorPos);
					// update current cursor position
					_currentCursorPos++;
					break;
			}
			// update value
			updateValue(input, newValue);
			if (displayNum) numpadEl.numDisplay.setValue(newValue);
			if (showCursor)
			{
				// update cursor left
				var _cursorLeft;
				setCursorPosition(input, _currentCursorPos);
				_stringText = input.value.substr(0, _currentCursorPos);
				_cursorLeft = getStrWidth(input, _stringText);
				cursorEl.style.left = _cursorLeft + inputLeft + inputPaddingLeft + 'px';

				// remove cursor end status
				if (_currentCursorPos <= inputStrLimit) _TApi.removeClass(cursorEl, "m-numpad-cursorend");
			}
		}

		numpadEl.addEventListener("touchstart", function(e)
		{
			isTouchEnd = false;
			clickEl = e.target;
			clickElRect = clickEl.getBoundingClientRect();
			var clickValue = clickEl.textContent || clickEl.innerText;
			// handle long press
			setTimeout(function()
			{
				if (!isTouchEnd && _TApi.$id("m-numpad"))
				{
					var intervalId = setInterval(function()
					{
						if (isTouchEnd)
						{
							clearInterval(intervalId);
							return;
						}
						handleClick(clickEl, clickValue);
					}, 100);
				}
			}, 300);
			// show click motion
			_TApi.addClass(clickEl, "curr");
		});
		numpadEl.addEventListener("touchmove", function(e)
		{
			var touch = e.touches[0];
			// mark touch end if out of origin click element
			if (touch.clientX < clickElRect.left || touch.clientX > clickElRect.right || touch.clientY < clickElRect.top || touch.clientY > clickElRect.bottom) isTouchEnd = true;
		});
		numpadEl.addEventListener("touchend", function(e)
		{
			isTouchEnd = true;
			var clickValue = clickEl.textContent || clickEl.innerText;
			handleClick(clickEl, clickValue);
			_TApi.removeClass(clickEl, "curr");
		});
		// add hide event handler
		document.body.addEventListener("touchstart", handleHide);
		// update current input element
		_currentInput = input;
	}

	/**
	 * init numpad for input element
	 */
	function init(input, options)
	{
		if (!input) return;
		options = options || {};
		var inputs = [];
		if (input instanceof Array)
			inputs = input;
		else
			inputs.push(input);
		// handle show
		for (var index = 0, count = inputs.length; index < count; ++index)
		{
			inputs[index].onclick = function(e)
			{
				options.clickX = e.clientX;
				show(this, options);
			}
		}
	}

	/**
	 * hide numpad
	 */
	function hide()
	{
		// remove hide event handler
		document.body.removeEventListener("touchstart", handleHide);
		// remove cursor
		var cursor = document.getElementById("m-numpad-cursor");
		if (cursor) cursor.parentNode.removeChild(cursor);
		// remove numpad
		var numpadEl = document.getElementById("m-numpad");
		if (numpadEl) numpadEl.parentNode.removeChild(numpadEl);
		// handle last input is dot
		var value = getValue(_currentInput);
		if (_currentInput && value.indexOf('.') == value.length - 1)
		{
			value = value.substr(0, value.length - 1);
			updateValue(_currentInput, value);
		}
		if (_finishCallback) _finishCallback(_currentInput && value);
		// update current input element
		_currentInput = null;
	}

	// export
	return {
		// functions
		show: {value: show},
		init: {value: init},
		hide: {value: hide}
	};
}(window.TApi));
Object.defineProperty(window.TApi, "Numpad", {configurable: false, writable: false});