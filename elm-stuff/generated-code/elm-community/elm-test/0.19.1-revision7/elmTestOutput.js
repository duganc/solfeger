// Apply Node polyfills as necessary.
var window = {
  Date: Date,
  addEventListener: function () {},
  removeEventListener: function () {},
};

var location = {
  href: '',
  host: '',
  hostname: '',
  protocol: '',
  origin: '',
  port: '',
  pathname: '',
  search: '',
  hash: '',
  username: '',
  password: '',
};
var document = { body: {}, createTextNode: function () {}, location: location };

if (typeof FileList === 'undefined') {
  FileList = function () {};
}

if (typeof File === 'undefined') {
  File = function () {};
}

if (typeof XMLHttpRequest === 'undefined') {
  XMLHttpRequest = function () {
    return {
      addEventListener: function () {},
      open: function () {},
      send: function () {},
    };
  };

  var oldConsoleWarn = console.warn;
  console.warn = function () {
    if (
      arguments.length === 1 &&
      arguments[0].indexOf('Compiled in DEV mode') === 0
    )
      return;
    return oldConsoleWarn.apply(console, arguments);
  };
}

if (typeof FormData === 'undefined') {
  FormData = function () {
    this._data = [];
  };
  FormData.prototype.append = function () {
    this._data.push(Array.prototype.slice.call(arguments));
  };
}

var Elm = (function(module) {
var __elmTestSymbol = Symbol("elmTestSymbol");
(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



function _Test_runThunk(thunk)
{
  try {
    // Attempt to run the thunk as normal.
    return $elm$core$Result$Ok(thunk(_Utils_Tuple0));
  } catch (err) {
    // If it throws, return an error instead of crashing.
    return $elm$core$Result$Err(err.toString());
  }
}



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// NOTE: this is duplicating constants also defined in Test.Internal.KernelConstants
//       so if you make any changes here, be sure to synchronize them there!
var virtualDomKernelConstants =
  {
    nodeTypeTagger: 4,
    nodeTypeThunk: 5,
    kids: "e",
    refs: "l",
    thunk: "m",
    node: "k",
    value: "a"
  }

function forceThunks(vNode) {
  if (typeof vNode !== "undefined" && vNode.$ === "#2") {
    // This is a tuple (the kids : List (String, Html) field of a Keyed node); recurse into the right side of the tuple
    vNode.b = forceThunks(vNode.b);
  }
  if (typeof vNode !== 'undefined' && vNode.$ === virtualDomKernelConstants.nodeTypeThunk && !vNode[virtualDomKernelConstants.node]) {
    // This is a lazy node; evaluate it
    var args = vNode[virtualDomKernelConstants.thunk];
    vNode[virtualDomKernelConstants.node] = vNode[virtualDomKernelConstants.thunk].apply(args);
    // And then recurse into the evaluated node
    vNode[virtualDomKernelConstants.node] = forceThunks(vNode[virtualDomKernelConstants.node]);
  }
  if (typeof vNode !== 'undefined' && vNode.$ === virtualDomKernelConstants.nodeTypeTagger) {
    // This is an Html.map; recurse into the node it is wrapping
    vNode[virtualDomKernelConstants.node] = forceThunks(vNode[virtualDomKernelConstants.node]);
  }
  if (typeof vNode !== 'undefined' && typeof vNode[virtualDomKernelConstants.kids] !== 'undefined') {
    // This is something with children (either a node with kids : List Html, or keyed with kids : List (String, Html));
    // recurse into the children
    vNode[virtualDomKernelConstants.kids] = vNode[virtualDomKernelConstants.kids].map(forceThunks);
  }
  return vNode;
}

function _HtmlAsJson_toJson(html)
{
  return _Json_wrap(forceThunks(html));
}

function _HtmlAsJson_eventHandler(event)
{
  return event[virtualDomKernelConstants.value];
}

function _HtmlAsJson_taggerFunction(tagger)
{
  return tagger.a;
}

function _HtmlAsJson_attributeToJson(attribute)
{
  return _Json_wrap(attribute);
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $author$project$Test$Reporter$Reporter$ConsoleReport = function (a) {
	return {$: 'ConsoleReport', a: a};
};
var $author$project$Console$Text$UseColor = {$: 'UseColor'};
var $elm$core$Debug$todo = _Debug_todo;
var $author$project$Test$Runner$Node$checkHelperReplaceMe___ = function (_v0) {
	return _Debug_todo(
		'Test.Runner.Node',
		{
			start: {line: 362, column: 5},
			end: {line: 362, column: 15}
		})('The regex for replacing this Debug.todo with some real code must have failed since you see this message!\n\nPlease report this bug: https://github.com/rtfeldman/node-test-runner/issues/new\n');
};
var $author$project$Test$Runner$Node$check = value => value && value.__elmTestSymbol === __elmTestSymbol ? $elm$core$Maybe$Just(value) : $elm$core$Maybe$Nothing;
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$append = _Utils_append;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$fromInt = _String_fromNumber;
var $elm_explorations$test$Test$Html$Selector$Internal$Attribute = function (a) {
	return {$: 'Attribute', a: a};
};
var $elm_explorations$test$Test$Html$Selector$Internal$namedAttr = F2(
	function (name, value) {
		return $elm_explorations$test$Test$Html$Selector$Internal$Attribute(
			{name: name, value: value});
	});
var $elm_explorations$test$Test$Html$Selector$id = $elm_explorations$test$Test$Html$Selector$Internal$namedAttr('id');
var $author$project$Page$SolfegePageTests$getIdSelector = F2(
	function (s, i) {
		return $elm_explorations$test$Test$Html$Selector$id(
			s + ('-' + $elm$core$String$fromInt(i)));
	});
var $author$project$Page$SolfegePageTests$getKeySelector = $author$project$Page$SolfegePageTests$getIdSelector('key');
var $author$project$Page$SolfegePageTests$getScaleNoteSelector = $author$project$Page$SolfegePageTests$getIdSelector('scale-note');
var $author$project$Page$SolfegePageTests$getScaleTypeSelector = $author$project$Page$SolfegePageTests$getIdSelector('scale-type');
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Test$Runner$Node$Receive = function (a) {
	return {$: 'Receive', a: a};
};
var $elm_explorations$test$Test$Internal$Batch = function (a) {
	return {__elmTestSymbol: __elmTestSymbol, $: 'Batch', a: a};
};
var $elm_explorations$test$Test$Runner$Failure$DuplicatedName = {$: 'DuplicatedName'};
var $elm_explorations$test$Test$Runner$Failure$EmptyList = {$: 'EmptyList'};
var $elm_explorations$test$Test$Runner$Failure$Invalid = function (a) {
	return {$: 'Invalid', a: a};
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm_explorations$test$Test$Internal$duplicatedName = function () {
	var names = function (test) {
		names:
		while (true) {
			switch (test.$) {
				case 'Labeled':
					var str = test.a;
					return _List_fromArray(
						[str]);
				case 'Batch':
					var subtests = test.a;
					return A2($elm$core$List$concatMap, names, subtests);
				case 'UnitTest':
					return _List_Nil;
				case 'FuzzTest':
					return _List_Nil;
				case 'Skipped':
					var subTest = test.a;
					var $temp$test = subTest;
					test = $temp$test;
					continue names;
				default:
					var subTest = test.a;
					var $temp$test = subTest;
					test = $temp$test;
					continue names;
			}
		}
	};
	var insertOrFail = function (newName) {
		return $elm$core$Result$andThen(
			function (oldNames) {
				return A2($elm$core$Set$member, newName, oldNames) ? $elm$core$Result$Err(newName) : $elm$core$Result$Ok(
					A2($elm$core$Set$insert, newName, oldNames));
			});
	};
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$List$concatMap(names),
		A2(
			$elm$core$List$foldl,
			insertOrFail,
			$elm$core$Result$Ok($elm$core$Set$empty)));
}();
var $elm_explorations$test$Test$Internal$UnitTest = function (a) {
	return {__elmTestSymbol: __elmTestSymbol, $: 'UnitTest', a: a};
};
var $elm_explorations$test$Test$Expectation$Fail = function (a) {
	return {$: 'Fail', a: a};
};
var $elm_explorations$test$Test$Expectation$fail = function (_v0) {
	var description = _v0.description;
	var reason = _v0.reason;
	return $elm_explorations$test$Test$Expectation$Fail(
		{description: description, given: $elm$core$Maybe$Nothing, reason: reason});
};
var $elm_explorations$test$Test$Internal$failNow = function (record) {
	return $elm_explorations$test$Test$Internal$UnitTest(
		function (_v0) {
			return _List_fromArray(
				[
					$elm_explorations$test$Test$Expectation$fail(record)
				]);
		});
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm_explorations$test$Test$concat = function (tests) {
	if ($elm$core$List$isEmpty(tests)) {
		return $elm_explorations$test$Test$Internal$failNow(
			{
				description: 'This `concat` has no tests in it. Let\'s give it some!',
				reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$EmptyList)
			});
	} else {
		var _v0 = $elm_explorations$test$Test$Internal$duplicatedName(tests);
		if (_v0.$ === 'Err') {
			var duped = _v0.a;
			return $elm_explorations$test$Test$Internal$failNow(
				{
					description: 'A test group contains multiple tests named \'' + (duped + '\'. Do some renaming so that tests have unique names.'),
					reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$DuplicatedName)
				});
		} else {
			return $elm_explorations$test$Test$Internal$Batch(tests);
		}
	}
};
var $elm_explorations$test$Test$Runner$Failure$BadDescription = {$: 'BadDescription'};
var $elm_explorations$test$Test$Internal$Labeled = F2(
	function (a, b) {
		return {__elmTestSymbol: __elmTestSymbol, $: 'Labeled', a: a, b: b};
	});
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$trim = _String_trim;
var $elm_explorations$test$Test$describe = F2(
	function (untrimmedDesc, tests) {
		var desc = $elm$core$String$trim(untrimmedDesc);
		if ($elm$core$String$isEmpty(desc)) {
			return $elm_explorations$test$Test$Internal$failNow(
				{
					description: 'This `describe` has a blank description. Let\'s give it a useful one!',
					reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$BadDescription)
				});
		} else {
			if ($elm$core$List$isEmpty(tests)) {
				return $elm_explorations$test$Test$Internal$failNow(
					{
						description: 'This `describe ' + (desc + '` has no tests in it. Let\'s give it some!'),
						reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$EmptyList)
					});
			} else {
				var _v0 = $elm_explorations$test$Test$Internal$duplicatedName(tests);
				if (_v0.$ === 'Err') {
					var duped = _v0.a;
					return $elm_explorations$test$Test$Internal$failNow(
						{
							description: 'The tests \'' + (desc + ('\' contain multiple tests named \'' + (duped + '\'. Let\'s rename them so we know which is which.'))),
							reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$DuplicatedName)
						});
				} else {
					var childrenNames = _v0.a;
					return A2($elm$core$Set$member, desc, childrenNames) ? $elm_explorations$test$Test$Internal$failNow(
						{
							description: 'The test \'' + (desc + '\' contains a child test of the same name. Let\'s rename them so we know which is which.'),
							reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$DuplicatedName)
						}) : A2(
						$elm_explorations$test$Test$Internal$Labeled,
						desc,
						$elm_explorations$test$Test$Internal$Batch(tests));
				}
			}
		}
	});
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Test$Runner$Node$elmTestPort__receive = _Platform_incomingPort('elmTestPort__receive', $elm$json$Json$Decode$value);
var $author$project$Test$Reporter$Reporter$TestReporter = F4(
	function (format, reportBegin, reportComplete, reportSummary) {
		return {format: format, reportBegin: reportBegin, reportComplete: reportComplete, reportSummary: reportSummary};
	});
var $author$project$Console$Text$Default = {$: 'Default'};
var $author$project$Console$Text$Normal = {$: 'Normal'};
var $author$project$Console$Text$Text = F2(
	function (a, b) {
		return {$: 'Text', a: a, b: b};
	});
var $author$project$Console$Text$plain = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Default, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $author$project$Test$Reporter$Console$pluralize = F3(
	function (singular, plural, count) {
		var suffix = (count === 1) ? singular : plural;
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					$elm$core$String$fromInt(count),
					suffix
				]));
	});
var $author$project$Test$Runner$Node$Vendor$Console$colorsInverted = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[7m', str, '\u001B[27m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$dark = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[2m', str, '\u001B[22m']));
};
var $author$project$Console$Text$applyModifiersHelp = F2(
	function (modifier, str) {
		if (modifier.$ === 'Inverted') {
			return $author$project$Test$Runner$Node$Vendor$Console$colorsInverted(str);
		} else {
			return $author$project$Test$Runner$Node$Vendor$Console$dark(str);
		}
	});
var $author$project$Console$Text$applyModifiers = F2(
	function (modifiers, str) {
		return A3($elm$core$List$foldl, $author$project$Console$Text$applyModifiersHelp, str, modifiers);
	});
var $author$project$Test$Runner$Node$Vendor$Console$bold = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[1m', str, '\u001B[22m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$underline = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[4m', str, '\u001B[24m']));
};
var $author$project$Console$Text$applyStyle = F2(
	function (style, str) {
		switch (style.$) {
			case 'Normal':
				return str;
			case 'Bold':
				return $author$project$Test$Runner$Node$Vendor$Console$bold(str);
			default:
				return $author$project$Test$Runner$Node$Vendor$Console$underline(str);
		}
	});
var $author$project$Test$Runner$Node$Vendor$Console$bgBlack = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[40m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgBlue = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[44m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgCyan = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[46m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgGreen = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[42m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgMagenta = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[45m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgRed = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[41m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgWhite = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[47m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgYellow = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[43m', str, '\u001B[49m']));
};
var $author$project$Console$Text$colorizeBackground = F2(
	function (color, str) {
		switch (color.$) {
			case 'Default':
				return str;
			case 'Red':
				return $author$project$Test$Runner$Node$Vendor$Console$bgRed(str);
			case 'Green':
				return $author$project$Test$Runner$Node$Vendor$Console$bgGreen(str);
			case 'Yellow':
				return $author$project$Test$Runner$Node$Vendor$Console$bgYellow(str);
			case 'Black':
				return $author$project$Test$Runner$Node$Vendor$Console$bgBlack(str);
			case 'Blue':
				return $author$project$Test$Runner$Node$Vendor$Console$bgBlue(str);
			case 'Magenta':
				return $author$project$Test$Runner$Node$Vendor$Console$bgMagenta(str);
			case 'Cyan':
				return $author$project$Test$Runner$Node$Vendor$Console$bgCyan(str);
			default:
				return $author$project$Test$Runner$Node$Vendor$Console$bgWhite(str);
		}
	});
var $author$project$Test$Runner$Node$Vendor$Console$black = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[30m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$blue = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[34m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$cyan = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[36m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$green = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[32m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$magenta = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[35m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$red = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[31m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$white = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[37m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$yellow = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[33m', str, '\u001B[39m']));
};
var $author$project$Console$Text$colorizeForeground = F2(
	function (color, str) {
		switch (color.$) {
			case 'Default':
				return str;
			case 'Red':
				return $author$project$Test$Runner$Node$Vendor$Console$red(str);
			case 'Green':
				return $author$project$Test$Runner$Node$Vendor$Console$green(str);
			case 'Yellow':
				return $author$project$Test$Runner$Node$Vendor$Console$yellow(str);
			case 'Black':
				return $author$project$Test$Runner$Node$Vendor$Console$black(str);
			case 'Blue':
				return $author$project$Test$Runner$Node$Vendor$Console$blue(str);
			case 'Magenta':
				return $author$project$Test$Runner$Node$Vendor$Console$magenta(str);
			case 'Cyan':
				return $author$project$Test$Runner$Node$Vendor$Console$cyan(str);
			default:
				return $author$project$Test$Runner$Node$Vendor$Console$white(str);
		}
	});
var $author$project$Console$Text$render = F2(
	function (useColor, txt) {
		if (txt.$ === 'Text') {
			var attrs = txt.a;
			var str = txt.b;
			if (useColor.$ === 'UseColor') {
				return A2(
					$author$project$Console$Text$applyStyle,
					attrs.style,
					A2(
						$author$project$Console$Text$applyModifiers,
						attrs.modifiers,
						A2(
							$author$project$Console$Text$colorizeForeground,
							attrs.foreground,
							A2($author$project$Console$Text$colorizeBackground, attrs.background, str))));
			} else {
				return str;
			}
		} else {
			var texts = txt.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$author$project$Console$Text$render(useColor),
					texts));
		}
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Test$Reporter$Console$textToValue = F2(
	function (useColor, txt) {
		return $elm$json$Json$Encode$string(
			A2($author$project$Console$Text$render, useColor, txt));
	});
var $author$project$Test$Reporter$Console$reportBegin = F2(
	function (useColor, _v0) {
		var globs = _v0.globs;
		var fuzzRuns = _v0.fuzzRuns;
		var testCount = _v0.testCount;
		var initialSeed = _v0.initialSeed;
		var prefix = 'Running ' + (A3($author$project$Test$Reporter$Console$pluralize, 'test', 'tests', testCount) + ('. To reproduce these results, run: elm-test --fuzz ' + ($elm$core$String$fromInt(fuzzRuns) + (' --seed ' + $elm$core$String$fromInt(initialSeed)))));
		return $elm$core$Maybe$Just(
			A2(
				$author$project$Test$Reporter$Console$textToValue,
				useColor,
				$author$project$Console$Text$plain(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$cons, prefix, globs)) + '\n')));
	});
var $author$project$Test$Reporter$JUnit$reportBegin = function (_v0) {
	return $elm$core$Maybe$Nothing;
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$Test$Reporter$Json$reportBegin = function (_v0) {
	var globs = _v0.globs;
	var paths = _v0.paths;
	var fuzzRuns = _v0.fuzzRuns;
	var testCount = _v0.testCount;
	var initialSeed = _v0.initialSeed;
	return $elm$core$Maybe$Just(
		$elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'event',
					$elm$json$Json$Encode$string('runStart')),
					_Utils_Tuple2(
					'testCount',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(testCount))),
					_Utils_Tuple2(
					'fuzzRuns',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(fuzzRuns))),
					_Utils_Tuple2(
					'globs',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, globs)),
					_Utils_Tuple2(
					'paths',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, paths)),
					_Utils_Tuple2(
					'initialSeed',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(initialSeed)))
				])));
};
var $author$project$Console$Text$Texts = function (a) {
	return {$: 'Texts', a: a};
};
var $author$project$Console$Text$concat = $author$project$Console$Text$Texts;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $author$project$Console$Text$Dark = {$: 'Dark'};
var $author$project$Console$Text$dark = function (txt) {
	if (txt.$ === 'Text') {
		var styles = txt.a;
		var str = txt.b;
		return A2(
			$author$project$Console$Text$Text,
			_Utils_update(
				styles,
				{
					modifiers: A2($elm$core$List$cons, $author$project$Console$Text$Dark, styles.modifiers)
				}),
			str);
	} else {
		var texts = txt.a;
		return $author$project$Console$Text$Texts(
			A2($elm$core$List$map, $author$project$Console$Text$dark, texts));
	}
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Basics$not = _Basics_not;
var $elm_explorations$test$Test$Runner$formatLabels = F3(
	function (formatDescription, formatTest, labels) {
		var _v0 = A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			labels);
		if (!_v0.b) {
			return _List_Nil;
		} else {
			var test = _v0.a;
			var descriptions = _v0.b;
			return $elm$core$List$reverse(
				A2(
					$elm$core$List$cons,
					formatTest(test),
					A2($elm$core$List$map, formatDescription, descriptions)));
		}
	});
var $author$project$Console$Text$Red = {$: 'Red'};
var $author$project$Console$Text$red = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Red, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $author$project$Test$Reporter$Console$withChar = F2(
	function (icon, str) {
		return $elm$core$String$fromChar(icon) + (' ' + (str + '\n'));
	});
var $author$project$Test$Reporter$Console$failureLabelsToText = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm_explorations$test$Test$Runner$formatLabels,
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $author$project$Console$Text$dark, $author$project$Console$Text$plain),
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('↓'))),
		A2(
			$elm$core$Basics$composeL,
			$author$project$Console$Text$red,
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('✗')))),
	$author$project$Console$Text$concat);
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $author$project$Test$Runner$Node$Vendor$Diff$Added = function (a) {
	return {$: 'Added', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$CannotGetA = function (a) {
	return {$: 'CannotGetA', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$CannotGetB = function (a) {
	return {$: 'CannotGetB', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$NoChange = function (a) {
	return {$: 'NoChange', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$Removed = function (a) {
	return {$: 'Removed', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$UnexpectedPath = F2(
	function (a, b) {
		return {$: 'UnexpectedPath', a: a, b: b};
	});
var $author$project$Test$Runner$Node$Vendor$Diff$makeChangesHelp = F5(
	function (changes, getA, getB, _v0, path) {
		makeChangesHelp:
		while (true) {
			var x = _v0.a;
			var y = _v0.b;
			if (!path.b) {
				return $elm$core$Result$Ok(changes);
			} else {
				var _v2 = path.a;
				var prevX = _v2.a;
				var prevY = _v2.b;
				var tail = path.b;
				var change = function () {
					if (_Utils_eq(x - 1, prevX) && _Utils_eq(y - 1, prevY)) {
						var _v4 = getA(x);
						if (_v4.$ === 'Just') {
							var a = _v4.a;
							return $elm$core$Result$Ok(
								$author$project$Test$Runner$Node$Vendor$Diff$NoChange(a));
						} else {
							return $elm$core$Result$Err(
								$author$project$Test$Runner$Node$Vendor$Diff$CannotGetA(x));
						}
					} else {
						if (_Utils_eq(x, prevX)) {
							var _v5 = getB(y);
							if (_v5.$ === 'Just') {
								var b = _v5.a;
								return $elm$core$Result$Ok(
									$author$project$Test$Runner$Node$Vendor$Diff$Added(b));
							} else {
								return $elm$core$Result$Err(
									$author$project$Test$Runner$Node$Vendor$Diff$CannotGetB(y));
							}
						} else {
							if (_Utils_eq(y, prevY)) {
								var _v6 = getA(x);
								if (_v6.$ === 'Just') {
									var a = _v6.a;
									return $elm$core$Result$Ok(
										$author$project$Test$Runner$Node$Vendor$Diff$Removed(a));
								} else {
									return $elm$core$Result$Err(
										$author$project$Test$Runner$Node$Vendor$Diff$CannotGetA(x));
								}
							} else {
								return $elm$core$Result$Err(
									A2(
										$author$project$Test$Runner$Node$Vendor$Diff$UnexpectedPath,
										_Utils_Tuple2(x, y),
										path));
							}
						}
					}
				}();
				if (change.$ === 'Err') {
					var err = change.a;
					return $elm$core$Result$Err(err);
				} else {
					var c = change.a;
					var $temp$changes = A2($elm$core$List$cons, c, changes),
						$temp$getA = getA,
						$temp$getB = getB,
						$temp$_v0 = _Utils_Tuple2(prevX, prevY),
						$temp$path = tail;
					changes = $temp$changes;
					getA = $temp$getA;
					getB = $temp$getB;
					_v0 = $temp$_v0;
					path = $temp$path;
					continue makeChangesHelp;
				}
			}
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$makeChanges = F3(
	function (getA, getB, path) {
		if (!path.b) {
			return $elm$core$Result$Ok(_List_Nil);
		} else {
			var latest = path.a;
			var tail = path.b;
			return A5($author$project$Test$Runner$Node$Vendor$Diff$makeChangesHelp, _List_Nil, getA, getB, latest, tail);
		}
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $author$project$Test$Runner$Node$Vendor$Diff$Continue = function (a) {
	return {$: 'Continue', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$Found = function (a) {
	return {$: 'Found', a: a};
};
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$step = F4(
	function (snake_, offset, k, v) {
		var fromTop = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k + 1) + offset, v));
		var fromLeft = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k - 1) + offset, v));
		var _v0 = function () {
			var _v2 = _Utils_Tuple2(fromLeft, fromTop);
			if (!_v2.a.b) {
				if (!_v2.b.b) {
					return _Utils_Tuple2(
						_List_Nil,
						_Utils_Tuple2(0, 0));
				} else {
					var _v3 = _v2.b;
					var _v4 = _v3.a;
					var topX = _v4.a;
					var topY = _v4.b;
					return _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			} else {
				if (!_v2.b.b) {
					var _v5 = _v2.a;
					var _v6 = _v5.a;
					var leftX = _v6.a;
					var leftY = _v6.b;
					return _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1));
				} else {
					var _v7 = _v2.a;
					var _v8 = _v7.a;
					var leftX = _v8.a;
					var leftY = _v8.b;
					var _v9 = _v2.b;
					var _v10 = _v9.a;
					var topX = _v10.a;
					var topY = _v10.b;
					return (_Utils_cmp(leftY + 1, topY) > -1) ? _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1)) : _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			}
		}();
		var path = _v0.a;
		var _v1 = _v0.b;
		var x = _v1.a;
		var y = _v1.b;
		var _v11 = A3(
			snake_,
			x + 1,
			y + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(x, y),
				path));
		var newPath = _v11.a;
		var goal = _v11.b;
		return goal ? $author$project$Test$Runner$Node$Vendor$Diff$Found(newPath) : $author$project$Test$Runner$Node$Vendor$Diff$Continue(
			A3($elm$core$Array$set, k + offset, newPath, v));
	});
var $author$project$Test$Runner$Node$Vendor$Diff$onpLoopK = F4(
	function (snake_, offset, ks, v) {
		onpLoopK:
		while (true) {
			if (!ks.b) {
				return $author$project$Test$Runner$Node$Vendor$Diff$Continue(v);
			} else {
				var k = ks.a;
				var ks_ = ks.b;
				var _v1 = A4($author$project$Test$Runner$Node$Vendor$Diff$step, snake_, offset, k, v);
				if (_v1.$ === 'Found') {
					var path = _v1.a;
					return $author$project$Test$Runner$Node$Vendor$Diff$Found(path);
				} else {
					var v_ = _v1.a;
					var $temp$snake_ = snake_,
						$temp$offset = offset,
						$temp$ks = ks_,
						$temp$v = v_;
					snake_ = $temp$snake_;
					offset = $temp$offset;
					ks = $temp$ks;
					v = $temp$v;
					continue onpLoopK;
				}
			}
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$onpLoopP = F5(
	function (snake_, delta, offset, p, v) {
		onpLoopP:
		while (true) {
			var ks = (delta > 0) ? _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, delta + p)),
				A2($elm$core$List$range, -p, delta)) : _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, p)),
				A2($elm$core$List$range, (-p) + delta, delta));
			var _v0 = A4($author$project$Test$Runner$Node$Vendor$Diff$onpLoopK, snake_, offset, ks, v);
			if (_v0.$ === 'Found') {
				var path = _v0.a;
				return path;
			} else {
				var v_ = _v0.a;
				var $temp$snake_ = snake_,
					$temp$delta = delta,
					$temp$offset = offset,
					$temp$p = p + 1,
					$temp$v = v_;
				snake_ = $temp$snake_;
				delta = $temp$delta;
				offset = $temp$offset;
				p = $temp$p;
				v = $temp$v;
				continue onpLoopP;
			}
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$snake = F5(
	function (getA, getB, nextX, nextY, path) {
		snake:
		while (true) {
			var _v0 = _Utils_Tuple2(
				getA(nextX),
				getB(nextY));
			_v0$2:
			while (true) {
				if (_v0.a.$ === 'Just') {
					if (_v0.b.$ === 'Just') {
						var a = _v0.a.a;
						var b = _v0.b.a;
						if (_Utils_eq(a, b)) {
							var $temp$getA = getA,
								$temp$getB = getB,
								$temp$nextX = nextX + 1,
								$temp$nextY = nextY + 1,
								$temp$path = A2(
								$elm$core$List$cons,
								_Utils_Tuple2(nextX, nextY),
								path);
							getA = $temp$getA;
							getB = $temp$getB;
							nextX = $temp$nextX;
							nextY = $temp$nextY;
							path = $temp$path;
							continue snake;
						} else {
							return _Utils_Tuple2(path, false);
						}
					} else {
						break _v0$2;
					}
				} else {
					if (_v0.b.$ === 'Nothing') {
						var _v1 = _v0.a;
						var _v2 = _v0.b;
						return _Utils_Tuple2(path, true);
					} else {
						break _v0$2;
					}
				}
			}
			return _Utils_Tuple2(path, false);
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$onp = F4(
	function (getA, getB, m, n) {
		var v = A2(
			$elm$core$Array$initialize,
			(m + n) + 1,
			$elm$core$Basics$always(_List_Nil));
		var delta = n - m;
		return A5(
			$author$project$Test$Runner$Node$Vendor$Diff$onpLoopP,
			A2($author$project$Test$Runner$Node$Vendor$Diff$snake, getA, getB),
			delta,
			m,
			0,
			v);
	});
var $author$project$Test$Runner$Node$Vendor$Diff$testDiff = F2(
	function (a, b) {
		var arrB = $elm$core$Array$fromList(b);
		var getB = function (y) {
			return A2($elm$core$Array$get, y - 1, arrB);
		};
		var n = $elm$core$Array$length(arrB);
		var arrA = $elm$core$Array$fromList(a);
		var getA = function (x) {
			return A2($elm$core$Array$get, x - 1, arrA);
		};
		var m = $elm$core$Array$length(arrA);
		var path = A4($author$project$Test$Runner$Node$Vendor$Diff$onp, getA, getB, m, n);
		return A3($author$project$Test$Runner$Node$Vendor$Diff$makeChanges, getA, getB, path);
	});
var $author$project$Test$Runner$Node$Vendor$Diff$diff = F2(
	function (a, b) {
		var _v0 = A2($author$project$Test$Runner$Node$Vendor$Diff$testDiff, a, b);
		if (_v0.$ === 'Ok') {
			var changes = _v0.a;
			return changes;
		} else {
			return _List_Nil;
		}
	});
var $author$project$Test$Reporter$Highlightable$Highlighted = function (a) {
	return {$: 'Highlighted', a: a};
};
var $author$project$Test$Reporter$Highlightable$Plain = function (a) {
	return {$: 'Plain', a: a};
};
var $author$project$Test$Reporter$Highlightable$fromDiff = function (diff) {
	switch (diff.$) {
		case 'Added':
			return _List_Nil;
		case 'Removed':
			var _char = diff.a;
			return _List_fromArray(
				[
					$author$project$Test$Reporter$Highlightable$Highlighted(_char)
				]);
		default:
			var _char = diff.a;
			return _List_fromArray(
				[
					$author$project$Test$Reporter$Highlightable$Plain(_char)
				]);
	}
};
var $author$project$Test$Reporter$Highlightable$diffLists = F2(
	function (expected, actual) {
		return A2(
			$elm$core$List$concatMap,
			$author$project$Test$Reporter$Highlightable$fromDiff,
			A2($author$project$Test$Runner$Node$Vendor$Diff$diff, expected, actual));
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$String$toFloat = _String_toFloat;
var $author$project$Test$Reporter$Console$Format$isFloat = function (str) {
	var _v0 = $elm$core$String$toFloat(str);
	if (_v0.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Test$Reporter$Highlightable$map = F2(
	function (transform, highlightable) {
		if (highlightable.$ === 'Highlighted') {
			var val = highlightable.a;
			return $author$project$Test$Reporter$Highlightable$Highlighted(
				transform(val));
		} else {
			var val = highlightable.a;
			return $author$project$Test$Reporter$Highlightable$Plain(
				transform(val));
		}
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Test$Reporter$Highlightable$resolve = F2(
	function (_v0, highlightable) {
		var fromHighlighted = _v0.fromHighlighted;
		var fromPlain = _v0.fromPlain;
		if (highlightable.$ === 'Highlighted') {
			var val = highlightable.a;
			return fromHighlighted(val);
		} else {
			var val = highlightable.a;
			return fromPlain(val);
		}
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $author$project$Test$Reporter$Console$Format$highlightEqual = F2(
	function (expected, actual) {
		if ((expected === '\"\"') || (actual === '\"\"')) {
			return $elm$core$Maybe$Nothing;
		} else {
			if ($author$project$Test$Reporter$Console$Format$isFloat(expected) && $author$project$Test$Reporter$Console$Format$isFloat(actual)) {
				return $elm$core$Maybe$Nothing;
			} else {
				var isHighlighted = $author$project$Test$Reporter$Highlightable$resolve(
					{
						fromHighlighted: $elm$core$Basics$always(true),
						fromPlain: $elm$core$Basics$always(false)
					});
				var expectedChars = $elm$core$String$toList(expected);
				var edgeCount = function (highlightedString) {
					var highlights = A2($elm$core$List$map, isHighlighted, highlightedString);
					return $elm$core$List$length(
						A2(
							$elm$core$List$filter,
							function (_v0) {
								var lhs = _v0.a;
								var rhs = _v0.b;
								return !_Utils_eq(lhs, rhs);
							},
							A3(
								$elm$core$List$map2,
								$elm$core$Tuple$pair,
								A2($elm$core$List$drop, 1, highlights),
								highlights)));
				};
				var actualChars = $elm$core$String$toList(actual);
				var highlightedActual = A2(
					$elm$core$List$map,
					$author$project$Test$Reporter$Highlightable$map($elm$core$String$fromChar),
					A2($author$project$Test$Reporter$Highlightable$diffLists, actualChars, expectedChars));
				var highlightedExpected = A2(
					$elm$core$List$map,
					$author$project$Test$Reporter$Highlightable$map($elm$core$String$fromChar),
					A2($author$project$Test$Reporter$Highlightable$diffLists, expectedChars, actualChars));
				var plainCharCount = $elm$core$List$length(
					A2(
						$elm$core$List$filter,
						A2($elm$core$Basics$composeL, $elm$core$Basics$not, isHighlighted),
						highlightedExpected));
				return ((_Utils_cmp(
					edgeCount(highlightedActual),
					plainCharCount) > 0) || (_Utils_cmp(
					edgeCount(highlightedExpected),
					plainCharCount) > 0)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					_Utils_Tuple2(highlightedExpected, highlightedActual));
			}
		}
	});
var $author$project$Test$Reporter$Console$Format$verticalBar = F3(
	function (comparison, expected, actual) {
		return A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[actual, '╷', '│ ' + comparison, '╵', expected]));
	});
var $author$project$Test$Reporter$Console$Format$listDiffToString = F4(
	function (index, description, _v0, originals) {
		listDiffToString:
		while (true) {
			var expected = _v0.expected;
			var actual = _v0.actual;
			var _v1 = _Utils_Tuple2(expected, actual);
			if (!_v1.a.b) {
				if (!_v1.b.b) {
					return A2(
						$elm$core$String$join,
						'',
						_List_fromArray(
							[
								'Two lists were unequal previously, yet ended up equal later.',
								'This should never happen!',
								'Please report this bug to https://github.com/elm-community/elm-test/issues - and include these lists: ',
								'\n',
								A2($elm$core$String$join, ', ', originals.originalExpected),
								'\n',
								A2($elm$core$String$join, ', ', originals.originalActual)
							]));
				} else {
					var _v3 = _v1.b;
					return A3(
						$author$project$Test$Reporter$Console$Format$verticalBar,
						description + ' was longer than',
						A2($elm$core$String$join, ', ', originals.originalExpected),
						A2($elm$core$String$join, ', ', originals.originalActual));
				}
			} else {
				if (!_v1.b.b) {
					var _v2 = _v1.a;
					return A3(
						$author$project$Test$Reporter$Console$Format$verticalBar,
						description + ' was shorter than',
						A2($elm$core$String$join, ', ', originals.originalExpected),
						A2($elm$core$String$join, ', ', originals.originalActual));
				} else {
					var _v4 = _v1.a;
					var firstExpected = _v4.a;
					var restExpected = _v4.b;
					var _v5 = _v1.b;
					var firstActual = _v5.a;
					var restActual = _v5.b;
					if (_Utils_eq(firstExpected, firstActual)) {
						var $temp$index = index + 1,
							$temp$description = description,
							$temp$_v0 = {actual: restActual, expected: restExpected},
							$temp$originals = originals;
						index = $temp$index;
						description = $temp$description;
						_v0 = $temp$_v0;
						originals = $temp$originals;
						continue listDiffToString;
					} else {
						return A2(
							$elm$core$String$join,
							'',
							_List_fromArray(
								[
									A3(
									$author$project$Test$Reporter$Console$Format$verticalBar,
									description,
									A2($elm$core$String$join, ', ', originals.originalExpected),
									A2($elm$core$String$join, ', ', originals.originalActual)),
									'\n\nThe first diff is at index ',
									$elm$core$String$fromInt(index),
									': it was `',
									firstActual,
									'`, but `',
									firstExpected,
									'` was expected.'
								]));
					}
				}
			}
		}
	});
var $author$project$Test$Reporter$Console$Format$format = F3(
	function (formatEquality, description, reason) {
		switch (reason.$) {
			case 'Custom':
				return description;
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				var _v1 = A2($author$project$Test$Reporter$Console$Format$highlightEqual, expected, actual);
				if (_v1.$ === 'Nothing') {
					return A3($author$project$Test$Reporter$Console$Format$verticalBar, description, expected, actual);
				} else {
					var _v2 = _v1.a;
					var highlightedExpected = _v2.a;
					var highlightedActual = _v2.b;
					var _v3 = A2(formatEquality, highlightedExpected, highlightedActual);
					var formattedExpected = _v3.a;
					var formattedActual = _v3.b;
					return A3($author$project$Test$Reporter$Console$Format$verticalBar, description, formattedExpected, formattedActual);
				}
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return A3($author$project$Test$Reporter$Console$Format$verticalBar, description, first, second);
			case 'TODO':
				return description;
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v4 = reason.a;
					return (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
				} else {
					return description;
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A4(
					$author$project$Test$Reporter$Console$Format$listDiffToString,
					0,
					description,
					{actual: actual, expected: expected},
					{originalActual: actual, originalExpected: expected});
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				var missingStr = $elm$core$List$isEmpty(missing) ? '' : ('\nThese keys are missing: ' + function (d) {
					return '[ ' + (d + ' ]');
				}(
					A2($elm$core$String$join, ', ', missing)));
				var extraStr = $elm$core$List$isEmpty(extra) ? '' : ('\nThese keys are extra: ' + function (d) {
					return '[ ' + (d + ' ]');
				}(
					A2($elm$core$String$join, ', ', extra)));
				return A2(
					$elm$core$String$join,
					'',
					_List_fromArray(
						[
							A3($author$project$Test$Reporter$Console$Format$verticalBar, description, expected, actual),
							'\n',
							extraStr,
							missingStr
						]));
		}
	});
var $author$project$Test$Reporter$Console$Format$Color$fromHighlightable = $author$project$Test$Reporter$Highlightable$resolve(
	{fromHighlighted: $author$project$Test$Runner$Node$Vendor$Console$colorsInverted, fromPlain: $elm$core$Basics$identity});
var $author$project$Test$Reporter$Console$Format$Color$formatEquality = F2(
	function (highlightedExpected, highlightedActual) {
		var formattedExpected = A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, $author$project$Test$Reporter$Console$Format$Color$fromHighlightable, highlightedExpected));
		var formattedActual = A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, $author$project$Test$Reporter$Console$Format$Color$fromHighlightable, highlightedActual));
		return _Utils_Tuple2(formattedExpected, formattedActual);
	});
var $author$project$Test$Reporter$Console$Format$Monochrome$fromHighlightable = function (indicator) {
	return $author$project$Test$Reporter$Highlightable$resolve(
		{
			fromHighlighted: function (_char) {
				return _Utils_Tuple2(_char, indicator);
			},
			fromPlain: function (_char) {
				return _Utils_Tuple2(_char, ' ');
			}
		});
};
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $author$project$Test$Reporter$Console$Format$Monochrome$formatEquality = F2(
	function (highlightedExpected, highlightedActual) {
		var _v0 = $elm$core$List$unzip(
			A2(
				$elm$core$List$map,
				$author$project$Test$Reporter$Console$Format$Monochrome$fromHighlightable('▲'),
				highlightedExpected));
		var formattedExpected = _v0.a;
		var expectedIndicators = _v0.b;
		var combinedExpected = A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					A2($elm$core$String$join, '', formattedExpected),
					A2($elm$core$String$join, '', expectedIndicators)
				]));
		var _v1 = $elm$core$List$unzip(
			A2(
				$elm$core$List$map,
				$author$project$Test$Reporter$Console$Format$Monochrome$fromHighlightable('▼'),
				highlightedActual));
		var formattedActual = _v1.a;
		var actualIndicators = _v1.b;
		var combinedActual = A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					A2($elm$core$String$join, '', actualIndicators),
					A2($elm$core$String$join, '', formattedActual)
				]));
		return _Utils_Tuple2(combinedExpected, combinedActual);
	});
var $author$project$Test$Reporter$Console$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			$elm$core$Basics$append('    '),
			A2($elm$core$String$split, '\n', str)));
};
var $author$project$Test$Reporter$Console$failureToText = F2(
	function (useColor, _v0) {
		var given = _v0.given;
		var description = _v0.description;
		var reason = _v0.reason;
		var formatEquality = function () {
			if (useColor.$ === 'Monochrome') {
				return $author$project$Test$Reporter$Console$Format$Monochrome$formatEquality;
			} else {
				return $author$project$Test$Reporter$Console$Format$Color$formatEquality;
			}
		}();
		var messageText = $author$project$Console$Text$plain(
			'\n' + ($author$project$Test$Reporter$Console$indent(
				A3($author$project$Test$Reporter$Console$Format$format, formatEquality, description, reason)) + '\n\n'));
		if (given.$ === 'Nothing') {
			return messageText;
		} else {
			var givenStr = given.a;
			return $author$project$Console$Text$concat(
				_List_fromArray(
					[
						$author$project$Console$Text$dark(
						$author$project$Console$Text$plain('\nGiven ' + (givenStr + '\n'))),
						messageText
					]));
		}
	});
var $author$project$Test$Reporter$Console$failuresToText = F3(
	function (useColor, labels, failures) {
		return $author$project$Console$Text$concat(
			A2(
				$elm$core$List$cons,
				$author$project$Test$Reporter$Console$failureLabelsToText(labels),
				A2(
					$elm$core$List$map,
					$author$project$Test$Reporter$Console$failureToText(useColor),
					failures)));
	});
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Test$Reporter$Console$reportComplete = F2(
	function (useColor, _v0) {
		var labels = _v0.labels;
		var outcome = _v0.outcome;
		switch (outcome.$) {
			case 'Passed':
				return $elm$json$Json$Encode$null;
			case 'Failed':
				var failures = outcome.a;
				return A2(
					$author$project$Test$Reporter$Console$textToValue,
					useColor,
					A3($author$project$Test$Reporter$Console$failuresToText, useColor, labels, failures));
			default:
				var str = outcome.a;
				return $elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'todo',
							$elm$json$Json$Encode$string(str)),
							_Utils_Tuple2(
							'labels',
							A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, labels))
						]));
		}
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $author$project$Test$Reporter$JUnit$encodeDuration = function (time) {
	return $elm$json$Json$Encode$string(
		$elm$core$String$fromFloat(time / 1000));
};
var $author$project$Test$Reporter$JUnit$encodeFailureTuple = function (message) {
	return _Utils_Tuple2(
		'failure',
		$elm$json$Json$Encode$string(message));
};
var $author$project$Test$Reporter$JUnit$reasonToString = F2(
	function (description, reason) {
		switch (reason.$) {
			case 'Custom':
				return description;
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				return expected + ('\n\nwas not equal to\n\n' + actual);
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return first + ('\n\nfailed when compared with ' + (description + (' on\n\n' + second)));
			case 'TODO':
				return 'TODO: ' + description;
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v1 = reason.a;
					var explanation = (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
					return 'Invalid test: ' + explanation;
				} else {
					return 'Invalid test: ' + description;
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A2($elm$core$String$join, ', ', expected) + ('\n\nhad different elements than\n\n' + A2($elm$core$String$join, ', ', actual));
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				return expected + ('\n\nhad different contents than\n\n' + (actual + ('\n\nthese were extra:\n\n' + (A2($elm$core$String$join, '\n', extra) + ('\n\nthese were missing:\n\n' + A2($elm$core$String$join, '\n', missing))))));
		}
	});
var $author$project$Test$Reporter$JUnit$formatFailure = function (_v0) {
	var given = _v0.given;
	var description = _v0.description;
	var reason = _v0.reason;
	var message = A2($author$project$Test$Reporter$JUnit$reasonToString, description, reason);
	if (given.$ === 'Just') {
		var str = given.a;
		return 'Given ' + (str + ('\n\n' + message));
	} else {
		return message;
	}
};
var $author$project$Test$Reporter$JUnit$encodeOutcome = function (outcome) {
	switch (outcome.$) {
		case 'Passed':
			return _List_Nil;
		case 'Failed':
			var failures = outcome.a;
			var message = A2(
				$elm$core$String$join,
				'\n\n\n',
				A2($elm$core$List$map, $author$project$Test$Reporter$JUnit$formatFailure, failures));
			return _List_fromArray(
				[
					$author$project$Test$Reporter$JUnit$encodeFailureTuple(message)
				]);
		default:
			var message = outcome.a;
			return _List_fromArray(
				[
					$author$project$Test$Reporter$JUnit$encodeFailureTuple('TODO: ' + message)
				]);
	}
};
var $author$project$Test$Reporter$JUnit$formatClassAndName = function (labels) {
	if (labels.b) {
		var head = labels.a;
		var rest = labels.b;
		return _Utils_Tuple2(
			A2(
				$elm$core$String$join,
				' ',
				$elm$core$List$reverse(rest)),
			head);
	} else {
		return _Utils_Tuple2('', '');
	}
};
var $author$project$Test$Reporter$JUnit$reportComplete = function (_v0) {
	var labels = _v0.labels;
	var duration = _v0.duration;
	var outcome = _v0.outcome;
	var _v1 = $author$project$Test$Reporter$JUnit$formatClassAndName(labels);
	var classname = _v1.a;
	var name = _v1.b;
	return $elm$json$Json$Encode$object(
		_Utils_ap(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'@classname',
					$elm$json$Json$Encode$string(classname)),
					_Utils_Tuple2(
					'@name',
					$elm$json$Json$Encode$string(name)),
					_Utils_Tuple2(
					'@time',
					$author$project$Test$Reporter$JUnit$encodeDuration(duration))
				]),
			$author$project$Test$Reporter$JUnit$encodeOutcome(outcome)));
};
var $author$project$Test$Reporter$Json$encodeReasonType = F2(
	function (reasonType, data) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string(reasonType)),
					_Utils_Tuple2('data', data)
				]));
	});
var $author$project$Test$Reporter$Json$encodeReason = F2(
	function (description, reason) {
		switch (reason.$) {
			case 'Custom':
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'Custom',
					$elm$json$Json$Encode$string(description));
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'Equality',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								$elm$json$Json$Encode$string(expected)),
								_Utils_Tuple2(
								'actual',
								$elm$json$Json$Encode$string(actual)),
								_Utils_Tuple2(
								'comparison',
								$elm$json$Json$Encode$string(description))
							])));
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'Comparison',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'first',
								$elm$json$Json$Encode$string(first)),
								_Utils_Tuple2(
								'second',
								$elm$json$Json$Encode$string(second)),
								_Utils_Tuple2(
								'comparison',
								$elm$json$Json$Encode$string(description))
							])));
			case 'TODO':
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'TODO',
					$elm$json$Json$Encode$string(description));
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v1 = reason.a;
					var explanation = (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
					return A2(
						$author$project$Test$Reporter$Json$encodeReasonType,
						'Invalid',
						$elm$json$Json$Encode$string(explanation));
				} else {
					return A2(
						$author$project$Test$Reporter$Json$encodeReasonType,
						'Invalid',
						$elm$json$Json$Encode$string(description));
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'ListDiff',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, expected)),
								_Utils_Tuple2(
								'actual',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, actual))
							])));
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				return A2(
					$author$project$Test$Reporter$Json$encodeReasonType,
					'CollectionDiff',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								$elm$json$Json$Encode$string(expected)),
								_Utils_Tuple2(
								'actual',
								$elm$json$Json$Encode$string(actual)),
								_Utils_Tuple2(
								'extra',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, extra)),
								_Utils_Tuple2(
								'missing',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, missing))
							])));
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Test$Reporter$Json$encodeFailure = function (_v0) {
	var given = _v0.given;
	var description = _v0.description;
	var reason = _v0.reason;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'given',
				A2(
					$elm$core$Maybe$withDefault,
					$elm$json$Json$Encode$null,
					A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, given))),
				_Utils_Tuple2(
				'message',
				$elm$json$Json$Encode$string(description)),
				_Utils_Tuple2(
				'reason',
				A2($author$project$Test$Reporter$Json$encodeReason, description, reason))
			]));
};
var $author$project$Test$Reporter$Json$encodeFailures = function (outcome) {
	switch (outcome.$) {
		case 'Failed':
			var failures = outcome.a;
			return A2($elm$core$List$map, $author$project$Test$Reporter$Json$encodeFailure, failures);
		case 'Todo':
			var str = outcome.a;
			return _List_fromArray(
				[
					$elm$json$Json$Encode$string(str)
				]);
		default:
			return _List_Nil;
	}
};
var $author$project$Test$Reporter$Json$encodeLabels = function (labels) {
	return A2(
		$elm$json$Json$Encode$list,
		$elm$json$Json$Encode$string,
		$elm$core$List$reverse(labels));
};
var $author$project$Test$Reporter$Json$getStatus = function (outcome) {
	switch (outcome.$) {
		case 'Failed':
			return 'fail';
		case 'Todo':
			return 'todo';
		default:
			return 'pass';
	}
};
var $author$project$Test$Reporter$Json$reportComplete = function (_v0) {
	var duration = _v0.duration;
	var labels = _v0.labels;
	var outcome = _v0.outcome;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'event',
				$elm$json$Json$Encode$string('testCompleted')),
				_Utils_Tuple2(
				'status',
				$elm$json$Json$Encode$string(
					$author$project$Test$Reporter$Json$getStatus(outcome))),
				_Utils_Tuple2(
				'labels',
				$author$project$Test$Reporter$Json$encodeLabels(labels)),
				_Utils_Tuple2(
				'failures',
				A2(
					$elm$json$Json$Encode$list,
					$elm$core$Basics$identity,
					$author$project$Test$Reporter$Json$encodeFailures(outcome))),
				_Utils_Tuple2(
				'duration',
				$elm$json$Json$Encode$string(
					$elm$core$String$fromInt(duration)))
			]));
};
var $author$project$Test$Reporter$Console$formatDuration = function (time) {
	return $elm$core$String$fromFloat(time) + ' ms';
};
var $author$project$Console$Text$Green = {$: 'Green'};
var $author$project$Console$Text$green = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Green, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $author$project$Test$Reporter$Console$stat = F2(
	function (label, value) {
		return $author$project$Console$Text$concat(
			_List_fromArray(
				[
					$author$project$Console$Text$dark(
					$author$project$Console$Text$plain(label)),
					$author$project$Console$Text$plain(value + '\n')
				]));
	});
var $author$project$Test$Reporter$Console$todoLabelsToText = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm_explorations$test$Test$Runner$formatLabels,
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $author$project$Console$Text$dark, $author$project$Console$Text$plain),
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('↓'))),
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $author$project$Console$Text$dark, $author$project$Console$Text$plain),
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('↓')))),
	$author$project$Console$Text$concat);
var $author$project$Test$Reporter$Console$todoToChalk = function (message) {
	return $author$project$Console$Text$plain('◦ TODO: ' + (message + '\n\n'));
};
var $author$project$Test$Reporter$Console$todosToText = function (_v0) {
	var labels = _v0.a;
	var failure = _v0.b;
	return $author$project$Console$Text$concat(
		_List_fromArray(
			[
				$author$project$Test$Reporter$Console$todoLabelsToText(labels),
				$author$project$Test$Reporter$Console$todoToChalk(failure)
			]));
};
var $author$project$Test$Reporter$Console$summarizeTodos = A2(
	$elm$core$Basics$composeR,
	$elm$core$List$map($author$project$Test$Reporter$Console$todosToText),
	$author$project$Console$Text$concat);
var $author$project$Console$Text$Underline = {$: 'Underline'};
var $author$project$Console$Text$underline = function (txt) {
	if (txt.$ === 'Text') {
		var styles = txt.a;
		var str = txt.b;
		return A2(
			$author$project$Console$Text$Text,
			_Utils_update(
				styles,
				{style: $author$project$Console$Text$Underline}),
			str);
	} else {
		var texts = txt.a;
		return $author$project$Console$Text$Texts(
			A2($elm$core$List$map, $author$project$Console$Text$dark, texts));
	}
};
var $author$project$Console$Text$Yellow = {$: 'Yellow'};
var $author$project$Console$Text$yellow = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Yellow, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $author$project$Test$Reporter$Console$reportSummary = F3(
	function (useColor, _v0, autoFail) {
		var todos = _v0.todos;
		var passed = _v0.passed;
		var failed = _v0.failed;
		var duration = _v0.duration;
		var todoStats = function () {
			var _v7 = $elm$core$List$length(todos);
			if (!_v7) {
				return $author$project$Console$Text$plain('');
			} else {
				var numTodos = _v7;
				return A2(
					$author$project$Test$Reporter$Console$stat,
					'Todo:     ',
					$elm$core$String$fromInt(numTodos));
			}
		}();
		var individualTodos = (failed > 0) ? $author$project$Console$Text$plain('') : $author$project$Test$Reporter$Console$summarizeTodos(
			$elm$core$List$reverse(todos));
		var headlineResult = function () {
			var _v3 = _Utils_Tuple3(
				autoFail,
				failed,
				$elm$core$List$length(todos));
			_v3$4:
			while (true) {
				if (_v3.a.$ === 'Nothing') {
					if (!_v3.b) {
						switch (_v3.c) {
							case 0:
								var _v4 = _v3.a;
								return $elm$core$Result$Ok('TEST RUN PASSED');
							case 1:
								var _v5 = _v3.a;
								return $elm$core$Result$Err(
									_Utils_Tuple3($author$project$Console$Text$yellow, 'TEST RUN INCOMPLETE', ' because there is 1 TODO remaining'));
							default:
								var _v6 = _v3.a;
								var numTodos = _v3.c;
								return $elm$core$Result$Err(
									_Utils_Tuple3(
										$author$project$Console$Text$yellow,
										'TEST RUN INCOMPLETE',
										' because there are ' + ($elm$core$String$fromInt(numTodos) + ' TODOs remaining')));
						}
					} else {
						break _v3$4;
					}
				} else {
					if (!_v3.b) {
						var failure = _v3.a.a;
						return $elm$core$Result$Err(
							_Utils_Tuple3($author$project$Console$Text$yellow, 'TEST RUN INCOMPLETE', ' because ' + failure));
					} else {
						break _v3$4;
					}
				}
			}
			return $elm$core$Result$Err(
				_Utils_Tuple3($author$project$Console$Text$red, 'TEST RUN FAILED', ''));
		}();
		var headline = function () {
			if (headlineResult.$ === 'Ok') {
				var str = headlineResult.a;
				return $author$project$Console$Text$underline(
					$author$project$Console$Text$green('\n' + (str + '\n\n')));
			} else {
				var _v2 = headlineResult.a;
				var colorize = _v2.a;
				var str = _v2.b;
				var suffix = _v2.c;
				return $author$project$Console$Text$concat(
					_List_fromArray(
						[
							$author$project$Console$Text$underline(
							colorize('\n' + str)),
							colorize(suffix + '\n\n')
						]));
			}
		}();
		return $elm$json$Json$Encode$string(
			A2(
				$author$project$Console$Text$render,
				useColor,
				$author$project$Console$Text$concat(
					_List_fromArray(
						[
							headline,
							A2(
							$author$project$Test$Reporter$Console$stat,
							'Duration: ',
							$author$project$Test$Reporter$Console$formatDuration(duration)),
							A2(
							$author$project$Test$Reporter$Console$stat,
							'Passed:   ',
							$elm$core$String$fromInt(passed)),
							A2(
							$author$project$Test$Reporter$Console$stat,
							'Failed:   ',
							$elm$core$String$fromInt(failed)),
							todoStats,
							individualTodos
						]))));
	});
var $author$project$Test$Reporter$TestResults$Failed = function (a) {
	return {$: 'Failed', a: a};
};
var $author$project$Test$Reporter$JUnit$encodeExtraFailure = function (_v0) {
	return $author$project$Test$Reporter$JUnit$reportComplete(
		{
			duration: 0,
			labels: _List_Nil,
			outcome: $author$project$Test$Reporter$TestResults$Failed(_List_Nil)
		});
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Test$Reporter$JUnit$reportSummary = F2(
	function (_v0, autoFail) {
		var testCount = _v0.testCount;
		var duration = _v0.duration;
		var failed = _v0.failed;
		var extraFailures = function () {
			var _v1 = _Utils_Tuple2(failed, autoFail);
			if ((!_v1.a) && (_v1.b.$ === 'Just')) {
				var failure = _v1.b.a;
				return _List_fromArray(
					[
						$author$project$Test$Reporter$JUnit$encodeExtraFailure(failure)
					]);
			} else {
				return _List_Nil;
			}
		}();
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'testsuite',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'@name',
								$elm$json$Json$Encode$string('elm-test')),
								_Utils_Tuple2(
								'@package',
								$elm$json$Json$Encode$string('elm-test')),
								_Utils_Tuple2(
								'@tests',
								$elm$json$Json$Encode$int(testCount)),
								_Utils_Tuple2(
								'@failures',
								$elm$json$Json$Encode$int(failed)),
								_Utils_Tuple2(
								'@errors',
								$elm$json$Json$Encode$int(0)),
								_Utils_Tuple2(
								'@time',
								$elm$json$Json$Encode$float(duration)),
								_Utils_Tuple2(
								'testcase',
								A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, extraFailures))
							])))
				]));
	});
var $author$project$Test$Reporter$Json$reportSummary = F2(
	function (_v0, autoFail) {
		var duration = _v0.duration;
		var passed = _v0.passed;
		var failed = _v0.failed;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'event',
					$elm$json$Json$Encode$string('runComplete')),
					_Utils_Tuple2(
					'passed',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(passed))),
					_Utils_Tuple2(
					'failed',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(failed))),
					_Utils_Tuple2(
					'duration',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromFloat(duration))),
					_Utils_Tuple2(
					'autoFail',
					A2(
						$elm$core$Maybe$withDefault,
						$elm$json$Json$Encode$null,
						A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, autoFail)))
				]));
	});
var $author$project$Test$Reporter$Reporter$createReporter = function (report) {
	switch (report.$) {
		case 'JsonReport':
			return A4($author$project$Test$Reporter$Reporter$TestReporter, 'JSON', $author$project$Test$Reporter$Json$reportBegin, $author$project$Test$Reporter$Json$reportComplete, $author$project$Test$Reporter$Json$reportSummary);
		case 'ConsoleReport':
			var useColor = report.a;
			return A4(
				$author$project$Test$Reporter$Reporter$TestReporter,
				'CHALK',
				$author$project$Test$Reporter$Console$reportBegin(useColor),
				$author$project$Test$Reporter$Console$reportComplete(useColor),
				$author$project$Test$Reporter$Console$reportSummary(useColor));
		default:
			return A4($author$project$Test$Reporter$Reporter$TestReporter, 'JUNIT', $author$project$Test$Reporter$JUnit$reportBegin, $author$project$Test$Reporter$JUnit$reportComplete, $author$project$Test$Reporter$JUnit$reportSummary);
	}
};
var $author$project$Test$Runner$Node$elmTestPort__send = _Platform_outgoingPort('elmTestPort__send', $elm$json$Json$Encode$string);
var $author$project$Test$Runner$Node$failInit = F3(
	function (message, report, _v0) {
		var model = {
			autoFail: $elm$core$Maybe$Nothing,
			available: $elm$core$Dict$empty,
			nextTestToRun: 0,
			processes: 0,
			results: _List_Nil,
			runInfo: {fuzzRuns: 0, globs: _List_Nil, initialSeed: 0, paths: _List_Nil, testCount: 0},
			testReporter: $author$project$Test$Reporter$Reporter$createReporter(report)
		};
		var cmd = $author$project$Test$Runner$Node$elmTestPort__send(
			A2(
				$elm$json$Json$Encode$encode,
				0,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'type',
							$elm$json$Json$Encode$string('SUMMARY')),
							_Utils_Tuple2(
							'exitCode',
							$elm$json$Json$Encode$int(1)),
							_Utils_Tuple2(
							'message',
							$elm$json$Json$Encode$string(message))
						]))));
		return _Utils_Tuple2(model, cmd);
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm_explorations$test$Test$Runner$Invalid = function (a) {
	return {$: 'Invalid', a: a};
};
var $elm_explorations$test$Test$Runner$Only = function (a) {
	return {$: 'Only', a: a};
};
var $elm_explorations$test$Test$Runner$Plain = function (a) {
	return {$: 'Plain', a: a};
};
var $elm_explorations$test$Test$Runner$Skipping = function (a) {
	return {$: 'Skipping', a: a};
};
var $elm_explorations$test$Test$Runner$countRunnables = function (runnable) {
	countRunnables:
	while (true) {
		switch (runnable.$) {
			case 'Runnable':
				return 1;
			case 'Labeled':
				var runner = runnable.b;
				var $temp$runnable = runner;
				runnable = $temp$runnable;
				continue countRunnables;
			default:
				var runners = runnable.a;
				return $elm_explorations$test$Test$Runner$cyclic$countAllRunnables()(runners);
		}
	}
};
function $elm_explorations$test$Test$Runner$cyclic$countAllRunnables() {
	return A2(
		$elm$core$List$foldl,
		A2($elm$core$Basics$composeR, $elm_explorations$test$Test$Runner$countRunnables, $elm$core$Basics$add),
		0);
}
try {
	var $elm_explorations$test$Test$Runner$countAllRunnables = $elm_explorations$test$Test$Runner$cyclic$countAllRunnables();
	$elm_explorations$test$Test$Runner$cyclic$countAllRunnables = function () {
		return $elm_explorations$test$Test$Runner$countAllRunnables;
	};
} catch ($) {
	throw 'Some top-level definitions from `Test.Runner` are causing infinite recursion:\n\n  ┌─────┐\n  │    countAllRunnables\n  │     ↓\n  │    countRunnables\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $elm_explorations$test$Test$Runner$Labeled = F2(
	function (a, b) {
		return {$: 'Labeled', a: a, b: b};
	});
var $elm_explorations$test$Test$Runner$Runnable = function (a) {
	return {$: 'Runnable', a: a};
};
var $elm_explorations$test$Test$Runner$Thunk = function (a) {
	return {$: 'Thunk', a: a};
};
var $elm_explorations$test$Test$Runner$emptyDistribution = function (seed) {
	return {all: _List_Nil, only: _List_Nil, seed: seed, skipped: _List_Nil};
};
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm_explorations$test$Test$Runner$fnvHash = F2(
	function (a, b) {
		return ((a ^ b) * 16777619) >>> 0;
	});
var $elm_explorations$test$Test$Runner$fnvHashString = F2(
	function (hash, str) {
		return A3(
			$elm$core$List$foldl,
			$elm_explorations$test$Test$Runner$fnvHash,
			hash,
			A2(
				$elm$core$List$map,
				$elm$core$Char$toCode,
				$elm$core$String$toList(str)));
	});
var $elm_explorations$test$Test$Runner$fnvInit = 2166136261;
var $elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _v0.a;
				var hi = _v0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
						$elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = $elm$random$Random$peel(seed);
							var seedN = $elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var $elm$random$Random$map3 = F4(
	function (func, _v0, _v1, _v2) {
		var genA = _v0.a;
		var genB = _v1.a;
		var genC = _v2.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v3 = genA(seed0);
				var a = _v3.a;
				var seed1 = _v3.b;
				var _v4 = genB(seed1);
				var b = _v4.a;
				var seed2 = _v4.b;
				var _v5 = genC(seed2);
				var c = _v5.a;
				var seed3 = _v5.b;
				return _Utils_Tuple2(
					A3(func, a, b, c),
					seed3);
			});
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0.a;
		return generator(seed);
	});
var $elm$random$Random$independentSeed = $elm$random$Random$Generator(
	function (seed0) {
		var makeIndependentSeed = F3(
			function (state, b, c) {
				return $elm$random$Random$next(
					A2($elm$random$Random$Seed, state, (1 | (b ^ c)) >>> 0));
			});
		var gen = A2($elm$random$Random$int, 0, 4294967295);
		return A2(
			$elm$random$Random$step,
			A4($elm$random$Random$map3, makeIndependentSeed, gen, gen, gen),
			seed0);
	});
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $elm$random$Random$maxInt = 2147483647;
var $elm_explorations$test$Test$Runner$batchDistribute = F4(
	function (hashed, runs, test, prev) {
		var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, prev.seed, test);
		return {
			all: _Utils_ap(prev.all, next.all),
			only: _Utils_ap(prev.only, next.only),
			seed: next.seed,
			skipped: _Utils_ap(prev.skipped, next.skipped)
		};
	});
var $elm_explorations$test$Test$Runner$distributeSeedsHelp = F4(
	function (hashed, runs, seed, test) {
		switch (test.$) {
			case 'UnitTest':
				var aRun = test.a;
				return {
					all: _List_fromArray(
						[
							$elm_explorations$test$Test$Runner$Runnable(
							$elm_explorations$test$Test$Runner$Thunk(
								function (_v1) {
									return aRun(_Utils_Tuple0);
								}))
						]),
					only: _List_Nil,
					seed: seed,
					skipped: _List_Nil
				};
			case 'FuzzTest':
				var aRun = test.a;
				var _v2 = A2($elm$random$Random$step, $elm$random$Random$independentSeed, seed);
				var firstSeed = _v2.a;
				var nextSeed = _v2.b;
				return {
					all: _List_fromArray(
						[
							$elm_explorations$test$Test$Runner$Runnable(
							$elm_explorations$test$Test$Runner$Thunk(
								function (_v3) {
									return A2(aRun, firstSeed, runs);
								}))
						]),
					only: _List_Nil,
					seed: nextSeed,
					skipped: _List_Nil
				};
			case 'Labeled':
				var description = test.a;
				var subTest = test.b;
				if (hashed) {
					var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, true, runs, seed, subTest);
					return {
						all: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.all),
						only: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.only),
						seed: next.seed,
						skipped: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.skipped)
					};
				} else {
					var intFromSeed = A2(
						$elm$random$Random$step,
						A2($elm$random$Random$int, 0, $elm$random$Random$maxInt),
						seed).a;
					var hashedSeed = $elm$random$Random$initialSeed(
						A2(
							$elm_explorations$test$Test$Runner$fnvHash,
							intFromSeed,
							A2($elm_explorations$test$Test$Runner$fnvHashString, $elm_explorations$test$Test$Runner$fnvInit, description)));
					var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, true, runs, hashedSeed, subTest);
					return {
						all: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.all),
						only: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.only),
						seed: seed,
						skipped: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.skipped)
					};
				}
			case 'Skipped':
				var subTest = test.a;
				var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, seed, subTest);
				return {all: _List_Nil, only: _List_Nil, seed: next.seed, skipped: next.all};
			case 'Only':
				var subTest = test.a;
				var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, seed, subTest);
				return _Utils_update(
					next,
					{only: next.all});
			default:
				var tests = test.a;
				return A3(
					$elm$core$List$foldl,
					A2($elm_explorations$test$Test$Runner$batchDistribute, hashed, runs),
					$elm_explorations$test$Test$Runner$emptyDistribution(seed),
					tests);
		}
	});
var $elm_explorations$test$Test$Runner$distributeSeeds = $elm_explorations$test$Test$Runner$distributeSeedsHelp(false);
var $elm_explorations$test$Test$Runner$Failure$Custom = {$: 'Custom'};
var $elm_explorations$test$Expect$fail = function (str) {
	return $elm_explorations$test$Test$Expectation$fail(
		{description: str, reason: $elm_explorations$test$Test$Runner$Failure$Custom});
};
var $elm_explorations$test$Test$Runner$runThunk = _Test_runThunk;
var $elm_explorations$test$Test$Runner$run = function (_v0) {
	var fn = _v0.a;
	var _v1 = $elm_explorations$test$Test$Runner$runThunk(fn);
	if (_v1.$ === 'Ok') {
		var tests = _v1.a;
		return tests;
	} else {
		var message = _v1.a;
		return _List_fromArray(
			[
				$elm_explorations$test$Expect$fail('This test failed because it threw an exception: \"' + (message + '\"'))
			]);
	}
};
var $elm_explorations$test$Test$Runner$fromRunnableTreeHelp = F2(
	function (labels, runner) {
		fromRunnableTreeHelp:
		while (true) {
			switch (runner.$) {
				case 'Runnable':
					var runnable = runner.a;
					return _List_fromArray(
						[
							{
							labels: labels,
							run: function (_v1) {
								return $elm_explorations$test$Test$Runner$run(runnable);
							}
						}
						]);
				case 'Labeled':
					var label = runner.a;
					var subRunner = runner.b;
					var $temp$labels = A2($elm$core$List$cons, label, labels),
						$temp$runner = subRunner;
					labels = $temp$labels;
					runner = $temp$runner;
					continue fromRunnableTreeHelp;
				default:
					var runners = runner.a;
					return A2(
						$elm$core$List$concatMap,
						$elm_explorations$test$Test$Runner$fromRunnableTreeHelp(labels),
						runners);
			}
		}
	});
var $elm_explorations$test$Test$Runner$fromRunnableTree = $elm_explorations$test$Test$Runner$fromRunnableTreeHelp(_List_Nil);
var $elm_explorations$test$Test$Runner$fromTest = F3(
	function (runs, seed, test) {
		if (runs < 1) {
			return $elm_explorations$test$Test$Runner$Invalid(
				'Test runner run count must be at least 1, not ' + $elm$core$String$fromInt(runs));
		} else {
			var distribution = A3($elm_explorations$test$Test$Runner$distributeSeeds, runs, seed, test);
			return $elm$core$List$isEmpty(distribution.only) ? ((!$elm_explorations$test$Test$Runner$countAllRunnables(distribution.skipped)) ? $elm_explorations$test$Test$Runner$Plain(
				A2($elm$core$List$concatMap, $elm_explorations$test$Test$Runner$fromRunnableTree, distribution.all)) : $elm_explorations$test$Test$Runner$Skipping(
				A2($elm$core$List$concatMap, $elm_explorations$test$Test$Runner$fromRunnableTree, distribution.all))) : $elm_explorations$test$Test$Runner$Only(
				A2($elm$core$List$concatMap, $elm_explorations$test$Test$Runner$fromRunnableTree, distribution.only));
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Test$Runner$Node$init = F2(
	function (_v0, _v1) {
		var processes = _v0.processes;
		var globs = _v0.globs;
		var paths = _v0.paths;
		var fuzzRuns = _v0.fuzzRuns;
		var initialSeed = _v0.initialSeed;
		var report = _v0.report;
		var runners = _v0.runners;
		var testReporter = $author$project$Test$Reporter$Reporter$createReporter(report);
		var _v2 = function () {
			switch (runners.$) {
				case 'Plain':
					var runnerList = runners.a;
					return {
						autoFail: $elm$core$Maybe$Nothing,
						indexedRunners: A2(
							$elm$core$List$indexedMap,
							F2(
								function (a, b) {
									return _Utils_Tuple2(a, b);
								}),
							runnerList)
					};
				case 'Only':
					var runnerList = runners.a;
					return {
						autoFail: $elm$core$Maybe$Just('Test.only was used'),
						indexedRunners: A2(
							$elm$core$List$indexedMap,
							F2(
								function (a, b) {
									return _Utils_Tuple2(a, b);
								}),
							runnerList)
					};
				case 'Skipping':
					var runnerList = runners.a;
					return {
						autoFail: $elm$core$Maybe$Just('Test.skip was used'),
						indexedRunners: A2(
							$elm$core$List$indexedMap,
							F2(
								function (a, b) {
									return _Utils_Tuple2(a, b);
								}),
							runnerList)
					};
				default:
					var str = runners.a;
					return {
						autoFail: $elm$core$Maybe$Just(str),
						indexedRunners: _List_Nil
					};
			}
		}();
		var indexedRunners = _v2.indexedRunners;
		var autoFail = _v2.autoFail;
		var testCount = $elm$core$List$length(indexedRunners);
		var model = {
			autoFail: autoFail,
			available: $elm$core$Dict$fromList(indexedRunners),
			nextTestToRun: 0,
			processes: processes,
			results: _List_Nil,
			runInfo: {fuzzRuns: fuzzRuns, globs: globs, initialSeed: initialSeed, paths: paths, testCount: testCount},
			testReporter: testReporter
		};
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $author$project$Test$Runner$Node$noTestsFoundError = function (globs) {
	return $elm$core$List$isEmpty(globs) ? $elm$core$String$trim('\nNo exposed values of type Test found in the tests/ directory.\n\nAre there tests in any .elm file in the tests/ directory?\nIf not – add some!\nIf there are – are they exposed?\n        ') : A3(
		$elm$core$String$replace,
		'%globs',
		A2($elm$core$String$join, '\n', globs),
		$elm$core$String$trim('\nNo exposed values of type Test found in files matching:\n\n%globs\n\nAre the above patterns correct? Maybe try running elm-test with no arguments?\n\nAre there tests in any of the matched files?\nIf not – add some!\nIf there are – are they exposed?\n        '));
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Test$Runner$Node$Dispatch = function (a) {
	return {$: 'Dispatch', a: a};
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $author$project$Test$Runner$JsMessage$Summary = F3(
	function (a, b, c) {
		return {$: 'Summary', a: a, b: b, c: c};
	});
var $author$project$Test$Runner$JsMessage$Test = function (a) {
	return {$: 'Test', a: a};
};
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Test$Runner$JsMessage$todoDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2(
		$elm$json$Json$Decode$field,
		'labels',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'todo', $elm$json$Json$Decode$string));
var $author$project$Test$Runner$JsMessage$decodeMessageFromType = function (messageType) {
	switch (messageType) {
		case 'TEST':
			return A2(
				$elm$json$Json$Decode$map,
				$author$project$Test$Runner$JsMessage$Test,
				A2($elm$json$Json$Decode$field, 'index', $elm$json$Json$Decode$int));
		case 'SUMMARY':
			return A4(
				$elm$json$Json$Decode$map3,
				$author$project$Test$Runner$JsMessage$Summary,
				A2($elm$json$Json$Decode$field, 'duration', $elm$json$Json$Decode$float),
				A2($elm$json$Json$Decode$field, 'failures', $elm$json$Json$Decode$int),
				A2(
					$elm$json$Json$Decode$field,
					'todos',
					$elm$json$Json$Decode$list($author$project$Test$Runner$JsMessage$todoDecoder)));
		default:
			return $elm$json$Json$Decode$fail('Unrecognized message type: ' + messageType);
	}
};
var $author$project$Test$Runner$JsMessage$decoder = A2(
	$elm$json$Json$Decode$andThen,
	$author$project$Test$Runner$JsMessage$decodeMessageFromType,
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $author$project$Test$Runner$Node$Complete = F4(
	function (a, b, c, d) {
		return {$: 'Complete', a: a, b: b, c: c, d: d};
	});
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $author$project$Test$Reporter$TestResults$Passed = {$: 'Passed'};
var $author$project$Test$Reporter$TestResults$Todo = function (a) {
	return {$: 'Todo', a: a};
};
var $elm_explorations$test$Test$Runner$getFailureReason = function (expectation) {
	if (expectation.$ === 'Pass') {
		return $elm$core$Maybe$Nothing;
	} else {
		var record = expectation.a;
		return $elm$core$Maybe$Just(record);
	}
};
var $elm_explorations$test$Test$Runner$Failure$TODO = {$: 'TODO'};
var $elm_explorations$test$Test$Runner$isTodo = function (expectation) {
	if (expectation.$ === 'Pass') {
		return false;
	} else {
		var reason = expectation.a.reason;
		return _Utils_eq(reason, $elm_explorations$test$Test$Runner$Failure$TODO);
	}
};
var $author$project$Test$Reporter$TestResults$outcomesFromExpectationsHelp = F2(
	function (expectation, builder) {
		var _v0 = $elm_explorations$test$Test$Runner$getFailureReason(expectation);
		if (_v0.$ === 'Just') {
			var failure = _v0.a;
			return $elm_explorations$test$Test$Runner$isTodo(expectation) ? _Utils_update(
				builder,
				{
					todos: A2($elm$core$List$cons, failure.description, builder.todos)
				}) : _Utils_update(
				builder,
				{
					failures: A2($elm$core$List$cons, failure, builder.failures)
				});
		} else {
			return _Utils_update(
				builder,
				{passes: builder.passes + 1});
		}
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $author$project$Test$Reporter$TestResults$outcomesFromExpectations = function (expectations) {
	if (expectations.b) {
		if (!expectations.b.b) {
			var expectation = expectations.a;
			var _v1 = $elm_explorations$test$Test$Runner$getFailureReason(expectation);
			if (_v1.$ === 'Nothing') {
				return _List_fromArray(
					[$author$project$Test$Reporter$TestResults$Passed]);
			} else {
				var failure = _v1.a;
				return $elm_explorations$test$Test$Runner$isTodo(expectation) ? _List_fromArray(
					[
						$author$project$Test$Reporter$TestResults$Todo(failure.description)
					]) : _List_fromArray(
					[
						$author$project$Test$Reporter$TestResults$Failed(
						_List_fromArray(
							[failure]))
					]);
			}
		} else {
			var builder = A3(
				$elm$core$List$foldl,
				$author$project$Test$Reporter$TestResults$outcomesFromExpectationsHelp,
				{failures: _List_Nil, passes: 0, todos: _List_Nil},
				expectations);
			var failuresList = function () {
				var _v2 = builder.failures;
				if (!_v2.b) {
					return _List_Nil;
				} else {
					var failures = _v2;
					return _List_fromArray(
						[
							$author$project$Test$Reporter$TestResults$Failed(failures)
						]);
				}
			}();
			return $elm$core$List$concat(
				_List_fromArray(
					[
						A2($elm$core$List$repeat, builder.passes, $author$project$Test$Reporter$TestResults$Passed),
						A2($elm$core$List$map, $author$project$Test$Reporter$TestResults$Todo, builder.todos),
						failuresList
					]));
		}
	} else {
		return _List_Nil;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $author$project$Test$Runner$Node$sendResults = F3(
	function (isFinished, testReporter, results) {
		var typeStr = isFinished ? 'FINISHED' : 'RESULTS';
		var addToKeyValues = F2(
			function (_v0, list) {
				var testId = _v0.a;
				var result = _v0.b;
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						$elm$core$String$fromInt(testId),
						testReporter.reportComplete(result)),
					list);
			});
		return $author$project$Test$Runner$Node$elmTestPort__send(
			A2(
				$elm$json$Json$Encode$encode,
				0,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'type',
							$elm$json$Json$Encode$string(typeStr)),
							_Utils_Tuple2(
							'results',
							$elm$json$Json$Encode$object(
								A3($elm$core$List$foldl, addToKeyValues, _List_Nil, results)))
						]))));
	});
var $author$project$Test$Runner$Node$dispatch = F2(
	function (model, startTime) {
		var _v0 = A2($elm$core$Dict$get, model.nextTestToRun, model.available);
		if (_v0.$ === 'Nothing') {
			return A3($author$project$Test$Runner$Node$sendResults, true, model.testReporter, model.results);
		} else {
			var config = _v0.a;
			var outcomes = $author$project$Test$Reporter$TestResults$outcomesFromExpectations(
				config.run(_Utils_Tuple0));
			return A2(
				$elm$core$Task$perform,
				A3($author$project$Test$Runner$Node$Complete, config.labels, outcomes, startTime),
				$elm$time$Time$now);
		}
	});
var $author$project$Test$Reporter$TestResults$isFailure = function (outcome) {
	if (outcome.$ === 'Failed') {
		return true;
	} else {
		return false;
	}
};
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $author$project$Test$Runner$Node$sendBegin = function (model) {
	var extraFields = function () {
		var _v0 = model.testReporter.reportBegin(model.runInfo);
		if (_v0.$ === 'Just') {
			var report = _v0.a;
			return _List_fromArray(
				[
					_Utils_Tuple2('message', report)
				]);
		} else {
			return _List_Nil;
		}
	}();
	var baseFields = _List_fromArray(
		[
			_Utils_Tuple2(
			'type',
			$elm$json$Json$Encode$string('BEGIN')),
			_Utils_Tuple2(
			'testCount',
			$elm$json$Json$Encode$int(model.runInfo.testCount))
		]);
	return $author$project$Test$Runner$Node$elmTestPort__send(
		A2(
			$elm$json$Json$Encode$encode,
			0,
			$elm$json$Json$Encode$object(
				_Utils_ap(baseFields, extraFields))));
};
var $author$project$Test$Runner$Node$update = F2(
	function (msg, model) {
		var testReporter = model.testReporter;
		switch (msg.$) {
			case 'Receive':
				var val = msg.a;
				var _v1 = A2($elm$json$Json$Decode$decodeValue, $author$project$Test$Runner$JsMessage$decoder, val);
				if (_v1.$ === 'Ok') {
					if (_v1.a.$ === 'Summary') {
						var _v2 = _v1.a;
						var duration = _v2.a;
						var failed = _v2.b;
						var todos = _v2.c;
						var testCount = model.runInfo.testCount;
						var summaryInfo = {
							duration: duration,
							failed: failed,
							passed: (testCount - failed) - $elm$core$List$length(todos),
							testCount: testCount,
							todos: todos
						};
						var summary = A2(testReporter.reportSummary, summaryInfo, model.autoFail);
						var exitCode = (failed > 0) ? 2 : ((_Utils_eq(model.autoFail, $elm$core$Maybe$Nothing) && $elm$core$List$isEmpty(todos)) ? 0 : 3);
						var cmd = $author$project$Test$Runner$Node$elmTestPort__send(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'type',
											$elm$json$Json$Encode$string('SUMMARY')),
											_Utils_Tuple2(
											'exitCode',
											$elm$json$Json$Encode$int(exitCode)),
											_Utils_Tuple2('message', summary)
										]))));
						return _Utils_Tuple2(model, cmd);
					} else {
						var index = _v1.a.a;
						var cmd = A2($elm$core$Task$perform, $author$project$Test$Runner$Node$Dispatch, $elm$time$Time$now);
						return _Utils_eq(index, -1) ? _Utils_Tuple2(
							_Utils_update(
								model,
								{nextTestToRun: index + model.processes}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										cmd,
										$author$project$Test$Runner$Node$sendBegin(model)
									]))) : _Utils_Tuple2(
							_Utils_update(
								model,
								{nextTestToRun: index}),
							cmd);
					}
				} else {
					var err = _v1.a;
					var cmd = $author$project$Test$Runner$Node$elmTestPort__send(
						A2(
							$elm$json$Json$Encode$encode,
							0,
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'type',
										$elm$json$Json$Encode$string('ERROR')),
										_Utils_Tuple2(
										'message',
										$elm$json$Json$Encode$string(
											$elm$json$Json$Decode$errorToString(err)))
									]))));
					return _Utils_Tuple2(model, cmd);
				}
			case 'Dispatch':
				var startTime = msg.a;
				return _Utils_Tuple2(
					model,
					A2($author$project$Test$Runner$Node$dispatch, model, startTime));
			default:
				var labels = msg.a;
				var outcomes = msg.b;
				var startTime = msg.c;
				var endTime = msg.d;
				var nextTestToRun = model.nextTestToRun + model.processes;
				var isFinished = _Utils_cmp(nextTestToRun, model.runInfo.testCount) > -1;
				var duration = $elm$time$Time$posixToMillis(endTime) - $elm$time$Time$posixToMillis(startTime);
				var prependOutcome = F2(
					function (outcome, rest) {
						return A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								model.nextTestToRun,
								{duration: duration, labels: labels, outcome: outcome}),
							rest);
					});
				var results = A3($elm$core$List$foldl, prependOutcome, model.results, outcomes);
				if (isFinished || A2($elm$core$List$any, $author$project$Test$Reporter$TestResults$isFailure, outcomes)) {
					var cmd = A3($author$project$Test$Runner$Node$sendResults, isFinished, testReporter, results);
					return isFinished ? _Utils_Tuple2(model, cmd) : _Utils_Tuple2(
						_Utils_update(
							model,
							{nextTestToRun: nextTestToRun, results: _List_Nil}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									cmd,
									A2($elm$core$Task$perform, $author$project$Test$Runner$Node$Dispatch, $elm$time$Time$now)
								])));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{nextTestToRun: nextTestToRun, results: results}),
						A2($elm$core$Task$perform, $author$project$Test$Runner$Node$Dispatch, $elm$time$Time$now));
				}
		}
	});
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Test$Runner$Node$run = F2(
	function (_v0, possiblyTests) {
		var runs = _v0.runs;
		var seed = _v0.seed;
		var report = _v0.report;
		var globs = _v0.globs;
		var paths = _v0.paths;
		var processes = _v0.processes;
		var tests = A2(
			$elm$core$List$filterMap,
			function (_v4) {
				var moduleName = _v4.a;
				var maybeModuleTests = _v4.b;
				var moduleTests = A2($elm$core$List$filterMap, $elm$core$Basics$identity, maybeModuleTests);
				return $elm$core$List$isEmpty(moduleTests) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					A2($elm_explorations$test$Test$describe, moduleName, moduleTests));
			},
			possiblyTests);
		if ($elm$core$List$isEmpty(tests)) {
			return $elm$core$Platform$worker(
				{
					init: A2(
						$author$project$Test$Runner$Node$failInit,
						$author$project$Test$Runner$Node$noTestsFoundError(globs),
						report),
					subscriptions: function (_v1) {
						return $elm$core$Platform$Sub$none;
					},
					update: F2(
						function (_v2, model) {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						})
				});
		} else {
			var runners = A3(
				$elm_explorations$test$Test$Runner$fromTest,
				runs,
				$elm$random$Random$initialSeed(seed),
				$elm_explorations$test$Test$concat(tests));
			var wrappedInit = $author$project$Test$Runner$Node$init(
				{fuzzRuns: runs, globs: globs, initialSeed: seed, paths: paths, processes: processes, report: report, runners: runners});
			return $elm$core$Platform$worker(
				{
					init: wrappedInit,
					subscriptions: function (_v3) {
						return $author$project$Test$Runner$Node$elmTestPort__receive($author$project$Test$Runner$Node$Receive);
					},
					update: $author$project$Test$Runner$Node$update
				});
		}
	});
var $elm_explorations$test$Test$Runner$Failure$Equality = F2(
	function (a, b) {
		return {$: 'Equality', a: a, b: b};
	});
var $elm$core$String$contains = _String_contains;
var $elm_explorations$test$Test$Expectation$Pass = {$: 'Pass'};
var $elm_explorations$test$Expect$pass = $elm_explorations$test$Test$Expectation$Pass;
var $elm_explorations$test$Test$Internal$toString = _Debug_toString;
var $elm_explorations$test$Expect$testWith = F5(
	function (makeReason, label, runTest, expected, actual) {
		return A2(runTest, actual, expected) ? $elm_explorations$test$Expect$pass : $elm_explorations$test$Test$Expectation$fail(
			{
				description: label,
				reason: A2(
					makeReason,
					$elm_explorations$test$Test$Internal$toString(expected),
					$elm_explorations$test$Test$Internal$toString(actual))
			});
	});
var $elm$core$String$toInt = _String_toInt;
var $elm_explorations$test$Expect$equateWith = F4(
	function (reason, comparison, b, a) {
		var isJust = function (x) {
			if (x.$ === 'Just') {
				return true;
			} else {
				return false;
			}
		};
		var isFloat = function (x) {
			return isJust(
				$elm$core$String$toFloat(x)) && (!isJust(
				$elm$core$String$toInt(x)));
		};
		var usesFloats = isFloat(
			$elm_explorations$test$Test$Internal$toString(a)) || isFloat(
			$elm_explorations$test$Test$Internal$toString(b));
		var floatError = A2($elm$core$String$contains, reason, 'not') ? 'Do not use Expect.notEqual with floats. Use Float.notWithin instead.' : 'Do not use Expect.equal with floats. Use Float.within instead.';
		return usesFloats ? $elm_explorations$test$Expect$fail(floatError) : A5($elm_explorations$test$Expect$testWith, $elm_explorations$test$Test$Runner$Failure$Equality, reason, comparison, b, a);
	});
var $elm_explorations$test$Expect$equal = A2($elm_explorations$test$Expect$equateWith, 'Expect.equal', $elm$core$Basics$eq);
var $elm_explorations$test$Test$Internal$blankDescriptionFailure = $elm_explorations$test$Test$Internal$failNow(
	{
		description: 'This test has a blank description. Let\'s give it a useful one!',
		reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$BadDescription)
	});
var $elm_explorations$test$Test$test = F2(
	function (untrimmedDesc, thunk) {
		var desc = $elm$core$String$trim(untrimmedDesc);
		return $elm$core$String$isEmpty(desc) ? $elm_explorations$test$Test$Internal$blankDescriptionFailure : A2(
			$elm_explorations$test$Test$Internal$Labeled,
			desc,
			$elm_explorations$test$Test$Internal$UnitTest(
				function (_v0) {
					return _List_fromArray(
						[
							thunk(_Utils_Tuple0)
						]);
				}));
	});
var $author$project$KeyboardKeyTests$stub = A2(
	$elm_explorations$test$Test$test,
	'Stub test',
	function (_v0) {
		return A2($elm_explorations$test$Expect$equal, 4, 2 + 2);
	});
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $author$project$Main$Solfege = function (a) {
	return {$: 'Solfege', a: a};
};
var $author$project$Main$SolfegeMsg = function (a) {
	return {$: 'SolfegeMsg', a: a};
};
var $author$project$Page$SolfegePage$Model = F3(
	function (isKeyPressed, octaveAdjustment, selectedScale) {
		return {isKeyPressed: isKeyPressed, octaveAdjustment: octaveAdjustment, selectedScale: selectedScale};
	});
var $author$project$Note$A = {$: 'A'};
var $author$project$Scale$Chromatic = {$: 'Chromatic'};
var $author$project$Scale$default = _Utils_Tuple2($author$project$Note$A, $author$project$Scale$Chromatic);
var $author$project$Page$SolfegePage$init = F3(
	function (_v0, _v1, _v2) {
		return _Utils_Tuple2(
			A3(
				$author$project$Page$SolfegePage$Model,
				$elm$core$Dict$fromList(
					A2(
						$elm$core$List$map,
						function (i) {
							return _Utils_Tuple2(i, false);
						},
						A2($elm$core$List$range, 0, 12))),
				0,
				$author$project$Scale$default),
			$elm$core$Platform$Cmd$none);
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $author$project$Main$tupleMap = F3(
	function (f, g, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		return _Utils_Tuple2(
			f(a),
			g(b));
	});
var $author$project$Main$init = F3(
	function (flags, url, key) {
		return A3(
			$author$project$Main$tupleMap,
			$author$project$Main$Solfege,
			$elm$core$Platform$Cmd$map($author$project$Main$SolfegeMsg),
			A3($author$project$Page$SolfegePage$init, flags, url, key));
	});
var $author$project$Page$SolfegePageTests$stubInitModel = A3(
	$author$project$Main$init,
	_Utils_Tuple0,
	A6($elm$url$Url$Url, $elm$url$Url$Http, 'mystubbedtestsolfegeapp.com', $elm$core$Maybe$Nothing, '', $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
	_Utils_Tuple0);
var $author$project$Page$SolfegePageTests$stubPageModel = A3(
	$author$project$Page$SolfegePage$init,
	_Utils_Tuple0,
	A6($elm$url$Url$Url, $elm$url$Url$Http, 'mystubbedtestsolfegeapp.com', $elm$core$Maybe$Nothing, '', $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
	_Utils_Tuple0);
var $author$project$Note$CSharp = {$: 'CSharp'};
var $author$project$KeyboardKey$CharacterKey = function (a) {
	return {$: 'CharacterKey', a: a};
};
var $author$project$Scale$Minor = {$: 'Minor'};
var $author$project$Note$pitchClassToInt = function (n) {
	switch (n.$) {
		case 'A':
			return 0;
		case 'ASharp':
			return 1;
		case 'B':
			return 2;
		case 'C':
			return 3;
		case 'CSharp':
			return 4;
		case 'D':
			return 5;
		case 'DSharp':
			return 6;
		case 'E':
			return 7;
		case 'F':
			return 8;
		case 'FSharp':
			return 9;
		case 'G':
			return 10;
		default:
			return 11;
	}
};
var $author$project$Scale$adjustForScale = A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $author$project$Note$pitchClassToInt);
var $author$project$Note$C = {$: 'C'};
var $author$project$Note$defaultOctave = function (pc) {
	return (_Utils_cmp(
		$author$project$Note$pitchClassToInt(pc),
		$author$project$Note$pitchClassToInt($author$project$Note$C)) > -1) ? 4 : 3;
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$Note$ASharp = {$: 'ASharp'};
var $author$project$Note$B = {$: 'B'};
var $author$project$Note$D = {$: 'D'};
var $author$project$Note$DSharp = {$: 'DSharp'};
var $author$project$Note$E = {$: 'E'};
var $author$project$Note$F = {$: 'F'};
var $author$project$Note$FSharp = {$: 'FSharp'};
var $author$project$Note$G = {$: 'G'};
var $author$project$Note$GSharp = {$: 'GSharp'};
var $author$project$Note$pitchClassFromInt = function (i) {
	var _v0 = A2($elm$core$Basics$modBy, 12, i);
	switch (_v0) {
		case 0:
			return $author$project$Note$A;
		case 1:
			return $author$project$Note$ASharp;
		case 2:
			return $author$project$Note$B;
		case 3:
			return $author$project$Note$C;
		case 4:
			return $author$project$Note$CSharp;
		case 5:
			return $author$project$Note$D;
		case 6:
			return $author$project$Note$DSharp;
		case 7:
			return $author$project$Note$E;
		case 8:
			return $author$project$Note$F;
		case 9:
			return $author$project$Note$FSharp;
		case 10:
			return $author$project$Note$G;
		case 11:
			return $author$project$Note$GSharp;
		default:
			return $author$project$Note$A;
	}
};
var $author$project$Note$octaveFromInt = function (i) {
	return $author$project$Note$defaultOctave(
		$author$project$Note$pitchClassFromInt(
			A2($elm$core$Basics$modBy, 12, i))) + ((i / 12) | 0);
};
var $author$project$Note$fromInt = function (i) {
	return _Utils_Tuple2(
		$author$project$Note$pitchClassFromInt(i),
		$author$project$Note$octaveFromInt(i));
};
var $author$project$Scale$fromKeyClick = F2(
	function (scale, i) {
		return $author$project$Note$fromInt(
			i + $author$project$Scale$adjustForScale(scale));
	});
var $author$project$Scale$UnassignedKey = function (a) {
	return {$: 'UnassignedKey', a: a};
};
var $author$project$Scale$keyboardKeyToInt = function (key) {
	_v0$52:
	while (true) {
		if (key.$ === 'CharacterKey') {
			switch (key.a) {
				case '`':
					return $elm$core$Result$Ok(0);
				case '1':
					return $elm$core$Result$Ok(1);
				case '2':
					return $elm$core$Result$Ok(2);
				case '3':
					return $elm$core$Result$Ok(3);
				case '4':
					return $elm$core$Result$Ok(4);
				case '5':
					return $elm$core$Result$Ok(5);
				case '6':
					return $elm$core$Result$Ok(6);
				case '7':
					return $elm$core$Result$Ok(7);
				case '8':
					return $elm$core$Result$Ok(8);
				case '9':
					return $elm$core$Result$Ok(9);
				case '0':
					return $elm$core$Result$Ok(10);
				case '-':
					return $elm$core$Result$Ok(11);
				case '=':
					return $elm$core$Result$Ok(12);
				case '~':
					return $elm$core$Result$Ok(0);
				case '!':
					return $elm$core$Result$Ok(1);
				case '@':
					return $elm$core$Result$Ok(2);
				case '#':
					return $elm$core$Result$Ok(3);
				case '$':
					return $elm$core$Result$Ok(4);
				case '%':
					return $elm$core$Result$Ok(5);
				case '^':
					return $elm$core$Result$Ok(6);
				case '&':
					return $elm$core$Result$Ok(7);
				case '*':
					return $elm$core$Result$Ok(8);
				case '(':
					return $elm$core$Result$Ok(9);
				case ')':
					return $elm$core$Result$Ok(10);
				case '_':
					return $elm$core$Result$Ok(11);
				case '+':
					return $elm$core$Result$Ok(12);
				case 'q':
					return $elm$core$Result$Ok(0);
				case 'w':
					return $elm$core$Result$Ok(1);
				case 'e':
					return $elm$core$Result$Ok(2);
				case 'r':
					return $elm$core$Result$Ok(3);
				case 't':
					return $elm$core$Result$Ok(4);
				case 'y':
					return $elm$core$Result$Ok(5);
				case 'u':
					return $elm$core$Result$Ok(6);
				case 'i':
					return $elm$core$Result$Ok(7);
				case 'o':
					return $elm$core$Result$Ok(8);
				case 'p':
					return $elm$core$Result$Ok(9);
				case '[':
					return $elm$core$Result$Ok(10);
				case ']':
					return $elm$core$Result$Ok(11);
				case '\\':
					return $elm$core$Result$Ok(12);
				case 'Q':
					return $elm$core$Result$Ok(0);
				case 'W':
					return $elm$core$Result$Ok(1);
				case 'E':
					return $elm$core$Result$Ok(2);
				case 'R':
					return $elm$core$Result$Ok(3);
				case 'T':
					return $elm$core$Result$Ok(4);
				case 'Y':
					return $elm$core$Result$Ok(5);
				case 'U':
					return $elm$core$Result$Ok(6);
				case 'I':
					return $elm$core$Result$Ok(7);
				case 'O':
					return $elm$core$Result$Ok(8);
				case 'P':
					return $elm$core$Result$Ok(9);
				case '{':
					return $elm$core$Result$Ok(10);
				case '}':
					return $elm$core$Result$Ok(11);
				case '|':
					return $elm$core$Result$Ok(12);
				default:
					break _v0$52;
			}
		} else {
			break _v0$52;
		}
	}
	return $elm$core$Result$Err(
		$author$project$Scale$UnassignedKey(key));
};
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $author$project$Scale$fromKeyboardKey = F2(
	function (scale, key) {
		return A2(
			$elm$core$Result$map,
			$author$project$Scale$fromKeyClick(scale),
			$author$project$Scale$keyboardKeyToInt(key));
	});
var $author$project$ScaleTests$testGetsAbsoluteStringFromHighDo = A2(
	$elm_explorations$test$Test$test,
	'getsAbsoluteStringFromHighDo',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			$elm$core$Result$Ok(
				_Utils_Tuple2($author$project$Note$CSharp, 5)),
			A2(
				$author$project$Scale$fromKeyboardKey,
				_Utils_Tuple2($author$project$Note$CSharp, $author$project$Scale$Minor),
				$author$project$KeyboardKey$CharacterKey('=')));
	});
var $author$project$Scale$Phrygian = {$: 'Phrygian'};
var $author$project$ScaleTests$testGetsAbsoluteStringFromValidKeyboardKey = A2(
	$elm_explorations$test$Test$test,
	'getsAbsoluteStringFromValidKeyboardKey',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			$elm$core$Result$Ok(
				_Utils_Tuple2($author$project$Note$G, 4)),
			A2(
				$author$project$Scale$fromKeyboardKey,
				_Utils_Tuple2($author$project$Note$C, $author$project$Scale$Phrygian),
				$author$project$KeyboardKey$CharacterKey('7')));
	});
var $author$project$ScaleTests$testGetsAbsoluteStringReturnsErrorForNonKey = A2(
	$elm_explorations$test$Test$test,
	'getSolfegeReturnsErrorForNonKey',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			$elm$core$Result$Err(
				$author$project$Scale$UnassignedKey(
					$author$project$KeyboardKey$CharacterKey('d'))),
			A2(
				$author$project$Scale$fromKeyboardKey,
				_Utils_Tuple2($author$project$Note$A, $author$project$Scale$Chromatic),
				$author$project$KeyboardKey$CharacterKey('d')));
	});
var $author$project$Solfege$Di = {$: 'Di'};
var $author$project$Solfege$Do = {$: 'Do'};
var $author$project$Solfege$Fa = {$: 'Fa'};
var $author$project$Solfege$Fi = {$: 'Fi'};
var $author$project$Solfege$La = {$: 'La'};
var $author$project$Solfege$Le = {$: 'Le'};
var $author$project$Solfege$Me = {$: 'Me'};
var $author$project$Solfege$Mi = {$: 'Mi'};
var $author$project$Solfege$Re = {$: 'Re'};
var $author$project$Solfege$Sol = {$: 'Sol'};
var $author$project$Solfege$Te = {$: 'Te'};
var $author$project$Solfege$Ti = {$: 'Ti'};
var $author$project$Solfege$fromInt = function (i) {
	var _v0 = A2($elm$core$Basics$modBy, 12, i);
	switch (_v0) {
		case 0:
			return $author$project$Solfege$Do;
		case 1:
			return $author$project$Solfege$Di;
		case 2:
			return $author$project$Solfege$Re;
		case 3:
			return $author$project$Solfege$Me;
		case 4:
			return $author$project$Solfege$Mi;
		case 5:
			return $author$project$Solfege$Fa;
		case 6:
			return $author$project$Solfege$Fi;
		case 7:
			return $author$project$Solfege$Sol;
		case 8:
			return $author$project$Solfege$Le;
		case 9:
			return $author$project$Solfege$La;
		case 10:
			return $author$project$Solfege$Te;
		case 11:
			return $author$project$Solfege$Ti;
		default:
			return $author$project$Solfege$Do;
	}
};
var $author$project$Note$pitchClass = $elm$core$Tuple$first;
var $author$project$Scale$pitchClass = $elm$core$Tuple$first;
var $author$project$Scale$toSolfege = F2(
	function (scale, note) {
		return $author$project$Solfege$fromInt(
			$author$project$Note$pitchClassToInt(
				$author$project$Note$pitchClass(note)) - $author$project$Note$pitchClassToInt(
				$author$project$Scale$pitchClass(scale)));
	});
var $author$project$ScaleTests$testGetsSolfegeAgreesWithFromInt = A2(
	$elm_explorations$test$Test$test,
	'getsSolfegeAgreesWithFromInt',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$elm$core$List$map,
				$author$project$Solfege$fromInt,
				A2($elm$core$List$range, 0, 12)),
			A2(
				$elm$core$List$map,
				$author$project$Scale$toSolfege(
					_Utils_Tuple2($author$project$Note$A, $author$project$Scale$Chromatic)),
				A2(
					$elm$core$List$map,
					$author$project$Note$fromInt,
					A2($elm$core$List$range, 0, 12))));
	});
var $author$project$ScaleTests$testGetsSolfegeFromNoteAndScale = A2(
	$elm_explorations$test$Test$test,
	'getsSolfegeFromNoteAndScale',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			$author$project$Solfege$Di,
			A2(
				$author$project$Scale$toSolfege,
				_Utils_Tuple2($author$project$Note$D, $author$project$Scale$Minor),
				_Utils_Tuple2($author$project$Note$DSharp, 4)));
	});
var $author$project$Note$fromPitchClass = function (pc) {
	return _Utils_Tuple2(
		pc,
		$author$project$Note$defaultOctave(pc));
};
var $author$project$NoteTests$testIntToString = A2(
	$elm_explorations$test$Test$test,
	'testPitchClassFromIntAndFromIntAgree',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, $author$project$Note$pitchClassFromInt, $author$project$Note$fromPitchClass),
				A2($elm$core$List$range, 0, 11)),
			A2(
				$elm$core$List$map,
				$author$project$Note$fromInt,
				A2($elm$core$List$range, 0, 11)));
	});
var $elm_explorations$test$Test$Html$Selector$Internal$Class = function (a) {
	return {$: 'Class', a: a};
};
var $elm_explorations$test$Test$Html$Selector$class = $elm_explorations$test$Test$Html$Selector$Internal$Class;
var $avh4$elm_program_test$ProgramTest$ExpectFailed = F3(
	function (a, b, c) {
		return {$: 'ExpectFailed', a: a, b: b, c: c};
	});
var $avh4$elm_program_test$ProgramTest$Finished = function (a) {
	return {$: 'Finished', a: a};
};
var $avh4$elm_program_test$ProgramTest$expectViewHelper = F3(
	function (functionName, assertion, programTest) {
		if (programTest.$ === 'Finished') {
			var err = programTest.a;
			return $avh4$elm_program_test$ProgramTest$Finished(err);
		} else {
			var state = programTest.a;
			var _v1 = $elm_explorations$test$Test$Runner$getFailureReason(
				assertion(
					state.program.view(state.currentModel)));
			if (_v1.$ === 'Nothing') {
				return programTest;
			} else {
				var reason = _v1.a;
				return $avh4$elm_program_test$ProgramTest$Finished(
					A3($avh4$elm_program_test$ProgramTest$ExpectFailed, functionName, reason.description, reason.reason));
			}
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$baseIndentation = '    ';
var $elm_explorations$test$Test$Html$Query$Internal$prefixOutputLine = $elm$core$Basics$append('▼ ');
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$EscapableRawTextElements = {$: 'EscapableRawTextElements'};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NormalElements = {$: 'NormalElements'};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$RawTextElements = {$: 'RawTextElements'};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$VoidElements = {$: 'VoidElements'};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$escapableRawTextElements = _List_fromArray(
	['textarea', 'title']);
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$rawTextElements = _List_fromArray(
	['script', 'style']);
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$voidElements = _List_fromArray(
	['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$toElementKind = function (element) {
	return A2($elm$core$List$member, element, $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$voidElements) ? $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$VoidElements : (A2($elm$core$List$member, element, $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$rawTextElements) ? $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$RawTextElements : (A2($elm$core$List$member, element, $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$escapableRawTextElements) ? $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$EscapableRawTextElements : $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NormalElements));
};
var $elm$core$String$toLower = _String_toLower;
var $elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString = F2(
	function (options, _v1) {
		var tag = _v1.tag;
		var children = _v1.children;
		var facts = _v1.facts;
		var styles = function () {
			var _v7 = $elm$core$Dict$toList(facts.styles);
			if (!_v7.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var styleValues = _v7;
				return $elm$core$Maybe$Just(
					function (styleString) {
						return 'style=\"' + (styleString + '\"');
					}(
						A2(
							$elm$core$String$join,
							'',
							A2(
								$elm$core$List$map,
								function (_v8) {
									var key = _v8.a;
									var value = _v8.b;
									return key + (':' + (value + ';'));
								},
								styleValues))));
			}
		}();
		var stringAttributes = $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (_v6) {
						var k = _v6.a;
						var v = _v6.b;
						return k + ('=\"' + (v + '\"'));
					},
					$elm$core$Dict$toList(
						A2(
							$elm$core$Dict$filter,
							F2(
								function (k, v) {
									return k !== 'className';
								}),
							facts.stringAttributes)))));
		var openTag = function (extras) {
			var trimmedExtras = A2(
				$elm$core$List$filter,
				$elm$core$Basics$neq(''),
				A2(
					$elm$core$List$map,
					$elm$core$String$trim,
					A2(
						$elm$core$List$filterMap,
						function (x) {
							return x;
						},
						extras)));
			var filling = function () {
				if (!trimmedExtras.b) {
					return '';
				} else {
					var more = trimmedExtras;
					return ' ' + A2($elm$core$String$join, ' ', more);
				}
			}();
			return '<' + (tag + (filling + '>'));
		};
		var closeTag = '</' + (tag + '>');
		var classes = A2(
			$elm$core$Maybe$map,
			function (name) {
				return 'class=\"' + (name + '\"');
			},
			A2($elm$core$Dict$get, 'className', facts.stringAttributes));
		var childrenStrings = A2(
			$elm$core$List$map,
			$elm$core$Basics$append(
				A2($elm$core$String$repeat, options.indent, ' ')),
			$elm$core$List$concat(
				A2(
					$elm$core$List$map,
					$elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeToLines(options),
					children)));
		var boolToString = function (b) {
			if (b) {
				return 'True';
			} else {
				return 'False';
			}
		};
		var boolAttributes = $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (_v3) {
						var k = _v3.a;
						var v = _v3.b;
						return k + ('=' + $elm$core$String$toLower(
							boolToString(v)));
					},
					$elm$core$Dict$toList(facts.boolAttributes))));
		var _v2 = $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$toElementKind(tag);
		if (_v2.$ === 'VoidElements') {
			return _List_fromArray(
				[
					openTag(
					_List_fromArray(
						[classes, styles, stringAttributes, boolAttributes]))
				]);
		} else {
			return _Utils_ap(
				_List_fromArray(
					[
						openTag(
						_List_fromArray(
							[classes, styles, stringAttributes, boolAttributes]))
					]),
				_Utils_ap(
					childrenStrings,
					_List_fromArray(
						[closeTag])));
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeToLines = F2(
	function (options, nodeType) {
		switch (nodeType.$) {
			case 'TextTag':
				var text = nodeType.a.text;
				return _List_fromArray(
					[text]);
			case 'NodeEntry':
				var record = nodeType.a;
				return A2($elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString, options, record);
			case 'CustomNode':
				var record = nodeType.a;
				return _List_Nil;
			case 'MarkdownNode':
				var record = nodeType.a;
				return _List_fromArray(
					[record.model.markdown]);
			default:
				return _List_Nil;
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeToStringWithOptions = function (options) {
	return A2(
		$elm$core$Basics$composeR,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeToLines(options),
		$elm$core$String$join(
			options.newLines ? '\n' : ''));
};
var $elm_explorations$test$Test$Html$Query$Internal$prettyPrint = $elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeToStringWithOptions(
	{indent: 4, newLines: true});
var $elm_explorations$test$Test$Html$Internal$Inert$toElmHtml = function (_v0) {
	var elmHtml = _v0.a;
	return elmHtml;
};
var $elm_explorations$test$Test$Html$Query$Internal$toOutputLine = function (query) {
	if (query.$ === 'Query') {
		var node = query.a;
		return $elm_explorations$test$Test$Html$Query$Internal$prettyPrint(
			$elm_explorations$test$Test$Html$Internal$Inert$toElmHtml(node));
	} else {
		var message = query.a;
		return 'Internal Error: failed to decode the virtual dom.  Please report this at <https://github.com/elm-explorations/test/issues>.  ' + message;
	}
};
var $elm_explorations$test$Test$Html$Query$Internal$addQueryFromHtmlLine = function (query) {
	return A2(
		$elm$core$String$join,
		'\n\n',
		_List_fromArray(
			[
				$elm_explorations$test$Test$Html$Query$Internal$prefixOutputLine('Query.fromHtml'),
				A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$map,
					$elm$core$Basics$append($elm_explorations$test$Test$Html$Query$Internal$baseIndentation),
					A2(
						$elm$core$String$split,
						'\n',
						$elm_explorations$test$Test$Html$Query$Internal$toOutputLine(query))))
			]));
};
var $elm_explorations$test$Test$Html$Query$Internal$getChildren = function (elmHtml) {
	if (elmHtml.$ === 'NodeEntry') {
		var children = elmHtml.a.children;
		return children;
	} else {
		return _List_Nil;
	}
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm_explorations$test$Test$Html$Query$Internal$getElementAtHelp = F2(
	function (index, list) {
		getElementAtHelp:
		while (true) {
			if (!list.b) {
				return _List_Nil;
			} else {
				var first = list.a;
				var rest = list.b;
				if (!index) {
					return _List_fromArray(
						[first]);
				} else {
					var $temp$index = index - 1,
						$temp$list = rest;
					index = $temp$index;
					list = $temp$list;
					continue getElementAtHelp;
				}
			}
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$getElementAt = F2(
	function (index, list) {
		var length = $elm$core$List$length(list);
		return ((!length) || ((_Utils_cmp(index, length) > -1) || ((index < 0) && (_Utils_cmp(
			$elm$core$Basics$abs(index),
			length) > 0)))) ? _List_Nil : A2(
			$elm_explorations$test$Test$Html$Query$Internal$getElementAtHelp,
			A2($elm$core$Basics$modBy, length, index),
			list);
	});
var $elm$core$String$length = _String_length;
var $elm$core$String$append = _String_append;
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $elm_explorations$test$Test$Html$Query$Internal$printIndented = F3(
	function (maxDigits, index, elmHtml) {
		var caption = A2(
			$elm$core$String$append,
			$elm_explorations$test$Test$Html$Query$Internal$baseIndentation,
			A3(
				$elm$core$String$padRight,
				maxDigits + 3,
				_Utils_chr(' '),
				$elm$core$String$fromInt(index + 1) + ')'));
		var indentation = A2(
			$elm$core$String$repeat,
			$elm$core$String$length(caption),
			' ');
		var _v0 = A2(
			$elm$core$String$split,
			'\n',
			$elm_explorations$test$Test$Html$Query$Internal$prettyPrint(elmHtml));
		if (!_v0.b) {
			return '';
		} else {
			var first = _v0.a;
			var rest = _v0.b;
			return A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$cons,
					_Utils_ap(caption, first),
					A2(
						$elm$core$List$map,
						$elm$core$String$append(indentation),
						rest)));
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$getHtmlContext = function (elmHtmlList) {
	if ($elm$core$List$isEmpty(elmHtmlList)) {
		return '0 matches found for this query.';
	} else {
		var maxDigits = $elm$core$String$length(
			$elm$core$String$fromInt(
				$elm$core$List$length(elmHtmlList)));
		return A2(
			$elm$core$String$join,
			'\n\n',
			A2(
				$elm$core$List$indexedMap,
				$elm_explorations$test$Test$Html$Query$Internal$printIndented(maxDigits),
				elmHtmlList));
	}
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_explorations$test$Test$Html$Query$Internal$joinAsList = F2(
	function (toStr, list) {
		return $elm$core$List$isEmpty(list) ? '[]' : ('[ ' + (A2(
			$elm$core$String$join,
			', ',
			A2($elm$core$List$map, toStr, list)) + ' ]'));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNode = function (a) {
	return {$: 'MarkdownNode', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry = function (a) {
	return {$: 'NodeEntry', a: a};
};
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAttribute = F3(
	function (attribute, queryString, facts) {
		var _v0 = A2($elm$core$Dict$get, attribute, facts.stringAttributes);
		if (_v0.$ === 'Just') {
			var id = _v0.a;
			return _Utils_eq(id, queryString);
		} else {
			return false;
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasBoolAttribute = F3(
	function (attribute, value, facts) {
		var _v0 = A2($elm$core$Dict$get, attribute, facts.boolAttributes);
		if (_v0.$ === 'Just') {
			var id = _v0.a;
			return _Utils_eq(id, value);
		} else {
			return false;
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$classnames = function (facts) {
	return A2(
		$elm$core$String$split,
		' ',
		A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($elm$core$Dict$get, 'className', facts.stringAttributes)));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClass = F2(
	function (queryString, facts) {
		return A2(
			$elm$core$List$member,
			queryString,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$classnames(facts));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$containsAll = F2(
	function (a, b) {
		return $elm$core$List$isEmpty(
			A3(
				$elm$core$List$foldl,
				F2(
					function (i, acc) {
						return A2(
							$elm$core$List$filter,
							$elm$core$Basics$neq(i),
							acc);
					}),
				a,
				b));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClasses = F2(
	function (classList, facts) {
		return A2(
			$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$containsAll,
			classList,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$classnames(facts));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasStyle = F2(
	function (style, facts) {
		return _Utils_eq(
			A2($elm$core$Dict$get, style.key, facts.styles),
			$elm$core$Maybe$Just(style.value));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAllSelectors = F2(
	function (selectors, record) {
		return A2(
			$elm$core$List$all,
			$elm$core$Basics$identity,
			A2(
				$elm$core$List$map,
				function (selector) {
					return selector(record);
				},
				A2($elm$core$List$map, $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$predicateFromSelector, selectors)));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$markdownPredicate = function (selector) {
	switch (selector.$) {
		case 'Id':
			var id = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAttribute, 'id', id));
		case 'ClassName':
			var classname = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClass(classname));
		case 'ClassList':
			var classList = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClasses(classList));
		case 'Tag':
			var tag = selector.a;
			return $elm$core$Basics$always(false);
		case 'Attribute':
			var key = selector.a;
			var value = selector.b;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAttribute, key, value));
		case 'BoolAttribute':
			var key = selector.a;
			var value = selector.b;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasBoolAttribute, key, value));
		case 'Style':
			var style = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasStyle(style));
		case 'ContainsText':
			var text = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.model;
				},
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.markdown;
					},
					$elm$core$String$contains(text)));
		default:
			var selectors = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNode,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAllSelectors(selectors));
	}
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$nodeRecordPredicate = function (selector) {
	switch (selector.$) {
		case 'Id':
			var id = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAttribute, 'id', id));
		case 'ClassName':
			var classname = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClass(classname));
		case 'ClassList':
			var classList = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClasses(classList));
		case 'Tag':
			var tag = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.tag;
				},
				$elm$core$Basics$eq(tag));
		case 'Attribute':
			var key = selector.a;
			var value = selector.b;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAttribute, key, value));
		case 'BoolAttribute':
			var key = selector.a;
			var value = selector.b;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasBoolAttribute, key, value));
		case 'Style':
			var style = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasStyle(style));
		case 'ContainsText':
			var text = selector.a;
			return $elm$core$Basics$always(false);
		default:
			var selectors = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAllSelectors(selectors));
	}
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$predicateFromSelector = F2(
	function (selector, html) {
		switch (html.$) {
			case 'NodeEntry':
				var record = html.a;
				return A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$nodeRecordPredicate, selector, record);
			case 'MarkdownNode':
				var markdownModel = html.a;
				return A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$markdownPredicate, selector, markdownModel);
			default:
				return false;
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$descendInQuery = F3(
	function (maxDescendantDepth, selector, children) {
		if (maxDescendantDepth.$ === 'Nothing') {
			return A2(
				$elm$core$List$concatMap,
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNodeHelp, $elm$core$Maybe$Nothing, selector),
				children);
		} else {
			var depth = maxDescendantDepth.a;
			return (depth > 0) ? A2(
				$elm$core$List$concatMap,
				A2(
					$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNodeHelp,
					$elm$core$Maybe$Just(depth - 1),
					selector),
				children) : _List_Nil;
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNodeHelp = F3(
	function (maxDescendantDepth, selector, node) {
		switch (node.$) {
			case 'NodeEntry':
				var record = node.a;
				var childEntries = A3($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$descendInQuery, maxDescendantDepth, selector, record.children);
				return A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$predicateFromSelector, selector, node) ? A2($elm$core$List$cons, node, childEntries) : childEntries;
			case 'TextTag':
				var text = node.a.text;
				if (selector.$ === 'ContainsText') {
					var innerText = selector.a;
					return A2($elm$core$String$contains, innerText, text) ? _List_fromArray(
						[node]) : _List_Nil;
				} else {
					return _List_Nil;
				}
			case 'MarkdownNode':
				var facts = node.a.facts;
				var model = node.a.model;
				return A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$predicateFromSelector, selector, node) ? _List_fromArray(
					[node]) : _List_Nil;
			default:
				return _List_Nil;
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNode = $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNodeHelp($elm$core$Maybe$Nothing);
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$query = function (selector) {
	return $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNode(selector);
};
var $elm_explorations$test$Test$Html$Selector$Internal$All = function (a) {
	return {$: 'All', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Attribute = F2(
	function (a, b) {
		return {$: 'Attribute', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$BoolAttribute = F2(
	function (a, b) {
		return {$: 'BoolAttribute', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$ClassList = function (a) {
	return {$: 'ClassList', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$ContainsText = function (a) {
	return {$: 'ContainsText', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Style = function (a) {
	return {$: 'Style', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Tag = function (a) {
	return {$: 'Tag', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$getChildren = function (elmHtml) {
	if (elmHtml.$ === 'NodeEntry') {
		var children = elmHtml.a.children;
		return children;
	} else {
		return _List_Nil;
	}
};
var $elm_explorations$test$Test$Html$Selector$Internal$query = F4(
	function (fn, fnAll, selector, list) {
		if (!list.b) {
			return list;
		} else {
			var elems = list;
			switch (selector.$) {
				case 'All':
					var selectors = selector.a;
					return A2(fnAll, selectors, elems);
				case 'Classes':
					var classes = selector.a;
					return A2(
						$elm$core$List$concatMap,
						fn(
							$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$ClassList(classes)),
						elems);
				case 'Class':
					var _class = selector.a;
					return A2(
						$elm$core$List$concatMap,
						fn(
							$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$ClassList(
								_List_fromArray(
									[_class]))),
						elems);
				case 'Attribute':
					var name = selector.a.name;
					var value = selector.a.value;
					return A2(
						$elm$core$List$concatMap,
						fn(
							A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Attribute, name, value)),
						elems);
				case 'BoolAttribute':
					var name = selector.a.name;
					var value = selector.a.value;
					return A2(
						$elm$core$List$concatMap,
						fn(
							A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$BoolAttribute, name, value)),
						elems);
				case 'Style':
					var style = selector.a;
					return A2(
						$elm$core$List$concatMap,
						fn(
							$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Style(style)),
						elems);
				case 'Tag':
					var name = selector.a;
					return A2(
						$elm$core$List$concatMap,
						fn(
							$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Tag(name)),
						elems);
				case 'Text':
					var text = selector.a;
					return A2(
						$elm$core$List$concatMap,
						fn(
							$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$ContainsText(text)),
						elems);
				case 'Containing':
					var selectors = selector.a;
					var anyDescendantsMatch = function (elem) {
						var _v2 = $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$getChildren(elem);
						if (!_v2.b) {
							return false;
						} else {
							var children = _v2;
							var _v3 = A4(
								$elm_explorations$test$Test$Html$Selector$Internal$query,
								fn,
								fnAll,
								$elm_explorations$test$Test$Html$Selector$Internal$All(selectors),
								children);
							if (!_v3.b) {
								return A2($elm$core$List$any, anyDescendantsMatch, children);
							} else {
								return true;
							}
						}
					};
					return A2($elm$core$List$filter, anyDescendantsMatch, elems);
				default:
					return _List_Nil;
			}
		}
	});
var $elm_explorations$test$Test$Html$Selector$Internal$queryAll = F2(
	function (selectors, list) {
		if (!selectors.b) {
			return list;
		} else {
			var selector = selectors.a;
			var rest = selectors.b;
			return A2(
				$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
				rest,
				A4($elm_explorations$test$Test$Html$Selector$Internal$query, $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$query, $elm_explorations$test$Test$Html$Selector$Internal$queryAll, selector, list));
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryChildren = $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNodeHelp(
	$elm$core$Maybe$Just(1));
var $elm_explorations$test$Test$Html$Selector$Internal$queryAllChildren = F2(
	function (selectors, list) {
		if (!selectors.b) {
			return list;
		} else {
			var selector = selectors.a;
			var rest = selectors.b;
			return A2(
				$elm_explorations$test$Test$Html$Selector$Internal$queryAllChildren,
				rest,
				A4($elm_explorations$test$Test$Html$Selector$Internal$query, $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryChildren, $elm_explorations$test$Test$Html$Selector$Internal$queryAllChildren, selector, list));
		}
	});
var $elm_explorations$test$Test$Html$Selector$Internal$styleToString = function (_v0) {
	var key = _v0.key;
	var value = _v0.value;
	return key + (':' + value);
};
var $elm_explorations$test$Test$Html$Selector$Internal$selectorToString = function (criteria) {
	var quoteString = function (s) {
		return '\"' + (s + '\"');
	};
	var boolToString = function (b) {
		if (b) {
			return 'True';
		} else {
			return 'False';
		}
	};
	switch (criteria.$) {
		case 'All':
			var list = criteria.a;
			return A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, list));
		case 'Classes':
			var list = criteria.a;
			return 'classes ' + quoteString(
				A2($elm$core$String$join, ' ', list));
		case 'Class':
			var _class = criteria.a;
			return 'class ' + quoteString(_class);
		case 'Attribute':
			var name = criteria.a.name;
			var value = criteria.a.value;
			return 'attribute ' + (quoteString(name) + (' ' + quoteString(value)));
		case 'BoolAttribute':
			var name = criteria.a.name;
			var value = criteria.a.value;
			return 'attribute ' + (quoteString(name) + (' ' + boolToString(value)));
		case 'Style':
			var style = criteria.a;
			return 'styles ' + $elm_explorations$test$Test$Html$Selector$Internal$styleToString(style);
		case 'Tag':
			var name = criteria.a;
			return 'tag ' + quoteString(name);
		case 'Text':
			var text = criteria.a;
			return 'text ' + quoteString(text);
		case 'Containing':
			var list = criteria.a;
			var selectors = A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, list));
			return 'containing [ ' + (selectors + ' ] ');
		default:
			return 'invalid';
	}
};
var $elm_explorations$test$Test$Html$Query$Internal$withHtmlContext = F2(
	function (htmlStr, str) {
		return A2(
			$elm$core$String$join,
			'\n\n',
			_List_fromArray(
				[str, htmlStr]));
	});
var $elm_explorations$test$Test$Html$Query$Internal$toLinesHelp = F5(
	function (expectationFailure, elmHtmlList, selectorQueries, queryName, results) {
		var recurse = F3(
			function (newElmHtmlList, rest, result) {
				return A5(
					$elm_explorations$test$Test$Html$Query$Internal$toLinesHelp,
					expectationFailure,
					newElmHtmlList,
					rest,
					queryName,
					A2($elm$core$List$cons, result, results));
			});
		var bailOut = function (result) {
			return A2(
				$elm$core$List$cons,
				A2(
					$elm$core$String$join,
					'\n\n\n✗ ',
					_List_fromArray(
						[result, expectationFailure])),
				results);
		};
		if (!selectorQueries.b) {
			return A2(
				$elm$core$List$cons,
				A2(
					$elm$core$String$join,
					'\n\n',
					_List_fromArray(
						[queryName, expectationFailure])),
				results);
		} else {
			var selectorQuery = selectorQueries.a;
			var rest = selectorQueries.b;
			switch (selectorQuery.$) {
				case 'FindAll':
					var selectors = selectorQuery.a;
					var elements = A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
						selectors,
						A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList));
					return A3(
						recurse,
						elements,
						rest,
						A2(
							$elm_explorations$test$Test$Html$Query$Internal$withHtmlContext,
							$elm_explorations$test$Test$Html$Query$Internal$getHtmlContext(elements),
							'Query.findAll ' + A2($elm_explorations$test$Test$Html$Query$Internal$joinAsList, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, selectors)));
				case 'Find':
					var selectors = selectorQuery.a;
					var elements = A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
						selectors,
						A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList));
					var result = A2(
						$elm_explorations$test$Test$Html$Query$Internal$withHtmlContext,
						$elm_explorations$test$Test$Html$Query$Internal$getHtmlContext(elements),
						'Query.find ' + A2($elm_explorations$test$Test$Html$Query$Internal$joinAsList, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, selectors));
					return ($elm$core$List$length(elements) === 1) ? A3(recurse, elements, rest, result) : bailOut(result);
				case 'Children':
					var selectors = selectorQuery.a;
					var elements = A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAllChildren,
						selectors,
						A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList));
					return A3(
						recurse,
						elements,
						rest,
						A2(
							$elm_explorations$test$Test$Html$Query$Internal$withHtmlContext,
							$elm_explorations$test$Test$Html$Query$Internal$getHtmlContext(elements),
							'Query.children ' + A2($elm_explorations$test$Test$Html$Query$Internal$joinAsList, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, selectors)));
				case 'First':
					var elements = A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						A2(
							$elm$core$Maybe$map,
							function (elem) {
								return _List_fromArray(
									[elem]);
							},
							$elm$core$List$head(elmHtmlList)));
					var result = A2(
						$elm_explorations$test$Test$Html$Query$Internal$withHtmlContext,
						$elm_explorations$test$Test$Html$Query$Internal$getHtmlContext(elements),
						'Query.first');
					return ($elm$core$List$length(elements) === 1) ? A3(recurse, elements, rest, result) : bailOut(result);
				default:
					var index = selectorQuery.a;
					var elements = A2($elm_explorations$test$Test$Html$Query$Internal$getElementAt, index, elmHtmlList);
					var result = A2(
						$elm_explorations$test$Test$Html$Query$Internal$withHtmlContext,
						$elm_explorations$test$Test$Html$Query$Internal$getHtmlContext(elements),
						'Query.index ' + $elm$core$String$fromInt(index));
					return ($elm$core$List$length(elements) === 1) ? A3(recurse, elements, rest, result) : bailOut(result);
			}
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$toLines = F3(
	function (expectationFailure, query, queryName) {
		if (query.$ === 'Query') {
			var node = query.a;
			var selectors = query.b;
			return $elm$core$List$reverse(
				A5(
					$elm_explorations$test$Test$Html$Query$Internal$toLinesHelp,
					expectationFailure,
					_List_fromArray(
						[
							$elm_explorations$test$Test$Html$Internal$Inert$toElmHtml(node)
						]),
					$elm$core$List$reverse(selectors),
					queryName,
					_List_Nil));
		} else {
			var message = query.a;
			return _List_fromArray(
				['Internal Error: failed to decode the virtual dom.  Please report this at <https://github.com/elm-explorations/test/issues>', message]);
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$failWithQuery = F4(
	function (showTrace, queryName, query, expectation) {
		var _v0 = $elm_explorations$test$Test$Runner$getFailureReason(expectation);
		if (_v0.$ === 'Just') {
			var given = _v0.a.given;
			var description = _v0.a.description;
			var lines = A2(
				$elm$core$List$map,
				$elm_explorations$test$Test$Html$Query$Internal$prefixOutputLine,
				A3($elm_explorations$test$Test$Html$Query$Internal$toLines, description, query, queryName));
			var tracedLines = showTrace ? A2(
				$elm$core$List$cons,
				$elm_explorations$test$Test$Html$Query$Internal$addQueryFromHtmlLine(query),
				lines) : lines;
			return $elm_explorations$test$Expect$fail(
				A2($elm$core$String$join, '\n\n\n', tracedLines));
		} else {
			return expectation;
		}
	});
var $elm_explorations$test$Test$Html$Selector$Internal$hasAll = F2(
	function (selectors, elems) {
		hasAll:
		while (true) {
			if (!selectors.b) {
				return true;
			} else {
				var selector = selectors.a;
				var rest = selectors.b;
				if ($elm$core$List$isEmpty(
					A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
						_List_fromArray(
							[selector]),
						elems))) {
					return false;
				} else {
					var $temp$selectors = rest,
						$temp$elems = elems;
					selectors = $temp$selectors;
					elems = $temp$elems;
					continue hasAll;
				}
			}
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$queryErrorToString = F2(
	function (query, error) {
		switch (error.$) {
			case 'NoResultsForSingle':
				var queryName = error.a;
				return queryName + ' always expects to find 1 element, but it found 0 instead.';
			case 'MultipleResultsForSingle':
				var queryName = error.a;
				var resultCount = error.b;
				return queryName + (' always expects to find 1 element, but it found ' + ($elm$core$String$fromInt(resultCount) + (' instead.\n\n\nHINT: If you actually expected ' + ($elm$core$String$fromInt(resultCount) + ' elements, use Query.findAll instead of Query.find.'))));
			default:
				var message = error.a;
				return 'Internal Error: failed to decode the virtual dom.  Please report this at <https://github.com/elm-explorations/test/issues>.  ' + message;
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$showSelectorOutcome = F2(
	function (elmHtmlList, selector) {
		var outcome = function () {
			var _v0 = A2(
				$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
				_List_fromArray(
					[selector]),
				elmHtmlList);
			if (!_v0.b) {
				return '✗';
			} else {
				return '✓';
			}
		}();
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					outcome,
					'has',
					$elm_explorations$test$Test$Html$Selector$Internal$selectorToString(selector)
				]));
	});
var $elm_explorations$test$Test$Html$Query$Internal$OtherInternalError = function (a) {
	return {$: 'OtherInternalError', a: a};
};
var $elm_explorations$test$Test$Html$Query$Internal$NoResultsForSingle = function (a) {
	return {$: 'NoResultsForSingle', a: a};
};
var $elm_explorations$test$Test$Html$Query$Internal$MultipleResultsForSingle = F2(
	function (a, b) {
		return {$: 'MultipleResultsForSingle', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Query$Internal$verifySingle = F2(
	function (queryName, list) {
		if (!list.b) {
			return $elm$core$Result$Err(
				$elm_explorations$test$Test$Html$Query$Internal$NoResultsForSingle(queryName));
		} else {
			if (!list.b.b) {
				var singleton = list.a;
				return $elm$core$Result$Ok(singleton);
			} else {
				var multiples = list;
				return $elm$core$Result$Err(
					A2(
						$elm_explorations$test$Test$Html$Query$Internal$MultipleResultsForSingle,
						queryName,
						$elm$core$List$length(multiples)));
			}
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$traverseSelector = F2(
	function (selectorQuery, elmHtmlList) {
		switch (selectorQuery.$) {
			case 'Find':
				var selectors = selectorQuery.a;
				return A2(
					$elm$core$Result$map,
					function (elem) {
						return _List_fromArray(
							[elem]);
					},
					A2(
						$elm_explorations$test$Test$Html$Query$Internal$verifySingle,
						'Query.find',
						A2(
							$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
							selectors,
							A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList))));
			case 'FindAll':
				var selectors = selectorQuery.a;
				return $elm$core$Result$Ok(
					A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
						selectors,
						A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList)));
			case 'Children':
				var selectors = selectorQuery.a;
				return $elm$core$Result$Ok(
					A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAllChildren,
						selectors,
						A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList)));
			case 'First':
				return A2(
					$elm$core$Maybe$withDefault,
					$elm$core$Result$Err(
						$elm_explorations$test$Test$Html$Query$Internal$NoResultsForSingle('Query.first')),
					A2(
						$elm$core$Maybe$map,
						function (elem) {
							return $elm$core$Result$Ok(
								_List_fromArray(
									[elem]));
						},
						$elm$core$List$head(elmHtmlList)));
			default:
				var index = selectorQuery.a;
				var elements = A2($elm_explorations$test$Test$Html$Query$Internal$getElementAt, index, elmHtmlList);
				return ($elm$core$List$length(elements) === 1) ? $elm$core$Result$Ok(elements) : $elm$core$Result$Err(
					$elm_explorations$test$Test$Html$Query$Internal$NoResultsForSingle(
						'Query.index ' + $elm$core$String$fromInt(index)));
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$traverseSelectors = F2(
	function (selectorQueries, elmHtmlList) {
		return A3(
			$elm$core$List$foldr,
			A2($elm$core$Basics$composeR, $elm_explorations$test$Test$Html$Query$Internal$traverseSelector, $elm$core$Result$andThen),
			$elm$core$Result$Ok(elmHtmlList),
			selectorQueries);
	});
var $elm_explorations$test$Test$Html$Query$Internal$traverse = function (query) {
	if (query.$ === 'Query') {
		var node = query.a;
		var selectorQueries = query.b;
		return A2(
			$elm_explorations$test$Test$Html$Query$Internal$traverseSelectors,
			selectorQueries,
			_List_fromArray(
				[
					$elm_explorations$test$Test$Html$Internal$Inert$toElmHtml(node)
				]));
	} else {
		var message = query.a;
		return $elm$core$Result$Err(
			$elm_explorations$test$Test$Html$Query$Internal$OtherInternalError(message));
	}
};
var $elm_explorations$test$Test$Html$Query$Internal$has = F2(
	function (selectors, query) {
		var _v0 = $elm_explorations$test$Test$Html$Query$Internal$traverse(query);
		if (_v0.$ === 'Ok') {
			var elmHtmlList = _v0.a;
			return A2($elm_explorations$test$Test$Html$Selector$Internal$hasAll, selectors, elmHtmlList) ? $elm_explorations$test$Expect$pass : $elm_explorations$test$Expect$fail(
				A2(
					$elm$core$String$join,
					'\n',
					A2(
						$elm$core$List$map,
						$elm_explorations$test$Test$Html$Query$Internal$showSelectorOutcome(elmHtmlList),
						selectors)));
		} else {
			var error = _v0.a;
			return $elm_explorations$test$Expect$fail(
				A2($elm_explorations$test$Test$Html$Query$Internal$queryErrorToString, query, error));
		}
	});
var $elm_explorations$test$Test$Html$Query$has = F2(
	function (selectors, _v0) {
		var showTrace = _v0.a;
		var query = _v0.b;
		return A4(
			$elm_explorations$test$Test$Html$Query$Internal$failWithQuery,
			showTrace,
			'Query.has ' + A2($elm_explorations$test$Test$Html$Query$Internal$joinAsList, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, selectors),
			query,
			A2($elm_explorations$test$Test$Html$Query$Internal$has, selectors, query));
	});
var $avh4$elm_program_test$ProgramTest$ensureViewHas = F2(
	function (selector, programTest) {
		return A3(
			$avh4$elm_program_test$ProgramTest$expectViewHelper,
			'ensureViewHas',
			$elm_explorations$test$Test$Html$Query$has(selector),
			programTest);
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $avh4$elm_program_test$ProgramTest$escapeString = function (s) {
	return '\"' + (s + '\"');
};
var $elm_explorations$test$Test$Runner$Failure$toStringLists = $elm$core$String$join(', ');
var $elm_explorations$test$Test$Runner$Failure$verticalBar = F3(
	function (comparison, expected, actual) {
		return A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[actual, '╵', '│ ' + comparison, '╷', expected]));
	});
var $elm_explorations$test$Test$Runner$Failure$listDiffToString = F4(
	function (index, description, _v0, originals) {
		listDiffToString:
		while (true) {
			var expected = _v0.expected;
			var actual = _v0.actual;
			var _v1 = _Utils_Tuple2(expected, actual);
			if (!_v1.a.b) {
				if (!_v1.b.b) {
					return A2(
						$elm$core$String$join,
						'',
						_List_fromArray(
							[
								'Two lists were unequal previously, yet ended up equal later.',
								'This should never happen!',
								'Please report this bug to https://github.com/elm-community/elm-test/issues - and include these lists: ',
								'\n',
								$elm_explorations$test$Test$Runner$Failure$toStringLists(originals.originalExpected),
								'\n',
								$elm_explorations$test$Test$Runner$Failure$toStringLists(originals.originalActual)
							]));
				} else {
					var _v3 = _v1.b;
					var first = _v3.a;
					return A3(
						$elm_explorations$test$Test$Runner$Failure$verticalBar,
						description + ' was longer than',
						$elm_explorations$test$Test$Runner$Failure$toStringLists(originals.originalExpected),
						$elm_explorations$test$Test$Runner$Failure$toStringLists(originals.originalActual));
				}
			} else {
				if (!_v1.b.b) {
					var _v2 = _v1.a;
					var first = _v2.a;
					return A3(
						$elm_explorations$test$Test$Runner$Failure$verticalBar,
						description + ' was shorter than',
						$elm_explorations$test$Test$Runner$Failure$toStringLists(originals.originalExpected),
						$elm_explorations$test$Test$Runner$Failure$toStringLists(originals.originalActual));
				} else {
					var _v4 = _v1.a;
					var firstExpected = _v4.a;
					var restExpected = _v4.b;
					var _v5 = _v1.b;
					var firstActual = _v5.a;
					var restActual = _v5.b;
					if (_Utils_eq(firstExpected, firstActual)) {
						var $temp$index = index + 1,
							$temp$description = description,
							$temp$_v0 = {actual: restActual, expected: restExpected},
							$temp$originals = originals;
						index = $temp$index;
						description = $temp$description;
						_v0 = $temp$_v0;
						originals = $temp$originals;
						continue listDiffToString;
					} else {
						return A2(
							$elm$core$String$join,
							'',
							_List_fromArray(
								[
									A3(
									$elm_explorations$test$Test$Runner$Failure$verticalBar,
									description,
									$elm_explorations$test$Test$Runner$Failure$toStringLists(originals.originalExpected),
									$elm_explorations$test$Test$Runner$Failure$toStringLists(originals.originalActual)),
									'\n\nThe first diff is at index ',
									$elm$core$String$fromInt(index),
									': it was `',
									firstActual,
									'`, but `',
									firstExpected,
									'` was expected.'
								]));
					}
				}
			}
		}
	});
var $elm_explorations$test$Test$Runner$Failure$format = F2(
	function (description, reason) {
		switch (reason.$) {
			case 'Custom':
				return description;
			case 'Equality':
				var e = reason.a;
				var a = reason.b;
				return A3($elm_explorations$test$Test$Runner$Failure$verticalBar, description, e, a);
			case 'Comparison':
				var e = reason.a;
				var a = reason.b;
				return A3($elm_explorations$test$Test$Runner$Failure$verticalBar, description, e, a);
			case 'TODO':
				return description;
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v1 = reason.a;
					return (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
				} else {
					return description;
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A4(
					$elm_explorations$test$Test$Runner$Failure$listDiffToString,
					0,
					description,
					{actual: actual, expected: expected},
					{originalActual: actual, originalExpected: expected});
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				var missingStr = $elm$core$List$isEmpty(missing) ? '' : ('\nThese keys are missing: ' + function (d) {
					return '[ ' + (d + ' ]');
				}(
					A2($elm$core$String$join, ', ', missing)));
				var extraStr = $elm$core$List$isEmpty(extra) ? '' : ('\nThese keys are extra: ' + function (d) {
					return '[ ' + (d + ' ]');
				}(
					A2($elm$core$String$join, ', ', extra)));
				return A2(
					$elm$core$String$join,
					'',
					_List_fromArray(
						[
							A3($elm_explorations$test$Test$Runner$Failure$verticalBar, description, expected, actual),
							'\n',
							extraStr,
							missingStr
						]));
		}
	});
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 'Nothing') {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 'Nothing') {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.protocol;
		if (_v0.$ === 'Http') {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.fragment,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.query,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.port_,
					_Utils_ap(http, url.host)),
				url.path)));
};
var $avh4$elm_program_test$ProgramTest$done = function (programTest) {
	if (programTest.$ === 'Active') {
		return $elm_explorations$test$Expect$pass;
	} else {
		switch (programTest.a.$) {
			case 'ChangedPage':
				var _v1 = programTest.a;
				var cause = _v1.a;
				var finalLocation = _v1.b;
				return $elm_explorations$test$Expect$fail(
					cause + (' caused the program to end by navigating to ' + ($avh4$elm_program_test$ProgramTest$escapeString(
						$elm$url$Url$toString(finalLocation)) + '.  NOTE: If this is what you intended, use ProgramTest.expectPageChange to end your test.')));
			case 'ExpectFailed':
				var _v2 = programTest.a;
				var expectationName = _v2.a;
				var description = _v2.b;
				var reason = _v2.c;
				return $elm_explorations$test$Expect$fail(
					expectationName + (':\n' + A2($elm_explorations$test$Test$Runner$Failure$format, description, reason)));
			case 'SimulateFailed':
				var _v3 = programTest.a;
				var functionName = _v3.a;
				var message = _v3.b;
				return $elm_explorations$test$Expect$fail(functionName + (':\n' + message));
			case 'SimulateFailedToFindTarget':
				var _v4 = programTest.a;
				var functionName = _v4.a;
				var message = _v4.b;
				return $elm_explorations$test$Expect$fail(functionName + (':\n' + message));
			case 'SimulateLastEffectFailed':
				var message = programTest.a.a;
				return $elm_explorations$test$Expect$fail('simulateLastEffect failed: ' + message);
			case 'InvalidLocationUrl':
				var _v5 = programTest.a;
				var functionName = _v5.a;
				var invalidUrl = _v5.b;
				return $elm_explorations$test$Expect$fail(
					functionName + (': ' + ('Not a valid absolute URL:\n' + $avh4$elm_program_test$ProgramTest$escapeString(invalidUrl))));
			case 'InvalidFlags':
				var _v6 = programTest.a;
				var functionName = _v6.a;
				var message = _v6.b;
				return $elm_explorations$test$Expect$fail(functionName + (':\n' + message));
			case 'ProgramDoesNotSupportNavigation':
				var functionName = programTest.a.a;
				return $elm_explorations$test$Expect$fail(functionName + ': Program does not support navigation.  Use ProgramTest.createApplication to create a ProgramTest that supports navigation.');
			case 'NoBaseUrl':
				var _v7 = programTest.a;
				var functionName = _v7.a;
				var relativeUrl = _v7.b;
				return $elm_explorations$test$Expect$fail(
					functionName + (': The ProgramTest does not have a base URL and cannot resolve the relative URL ' + ($avh4$elm_program_test$ProgramTest$escapeString(relativeUrl) + '.  Use ProgramTest.withBaseUrl before calling ProgramTest.start to create a ProgramTest that can resolve relative URLs.')));
			case 'NoMatchingHttpRequest':
				var _v8 = programTest.a;
				var functionName = _v8.a;
				var request = _v8.b;
				var pendingRequests = _v8.c;
				return $elm_explorations$test$Expect$fail(
					$elm$core$String$concat(
						_List_fromArray(
							[
								functionName,
								': ',
								'Expected HTTP request (',
								request.method,
								' ',
								request.url,
								') to have been made, but it was not.\n',
								function () {
								if (!pendingRequests.b) {
									return '    No requests were made.';
								} else {
									return $elm$core$String$concat(
										_List_fromArray(
											[
												'    The following requests were made:\n',
												A2(
												$elm$core$String$join,
												'\n',
												A2(
													$elm$core$List$map,
													function (_v10) {
														var method = _v10.a;
														var url = _v10.b;
														return '      - ' + (method + (' ' + url));
													},
													pendingRequests))
											]));
								}
							}()
							])));
			case 'EffectSimulationNotConfigured':
				var functionName = programTest.a.a;
				return $elm_explorations$test$Expect$fail('TEST SETUP ERROR: In order to use ' + (functionName + ', you MUST use ProgramTest.withSimulatedEffects before calling ProgramTest.start'));
			default:
				var _v11 = programTest.a;
				var assertionName = _v11.a;
				var message = _v11.b;
				return $elm_explorations$test$Expect$fail(assertionName + (': ' + message));
		}
	}
};
var $avh4$elm_program_test$ProgramTest$expectViewHas = F2(
	function (selector, programTest) {
		return $avh4$elm_program_test$ProgramTest$done(
			A3(
				$avh4$elm_program_test$ProgramTest$expectViewHelper,
				'expectViewHas',
				$elm_explorations$test$Test$Html$Query$has(selector),
				programTest));
	});
var $elm_explorations$test$Test$Html$Query$Internal$Find = function (a) {
	return {$: 'Find', a: a};
};
var $elm_explorations$test$Test$Html$Query$Internal$Single = F2(
	function (a, b) {
		return {$: 'Single', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Query$Internal$InternalError = function (a) {
	return {$: 'InternalError', a: a};
};
var $elm_explorations$test$Test$Html$Query$Internal$Query = F2(
	function (a, b) {
		return {$: 'Query', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Query$Internal$prependSelector = F2(
	function (query, selector) {
		if (query.$ === 'Query') {
			var node = query.a;
			var selectors = query.b;
			return A2(
				$elm_explorations$test$Test$Html$Query$Internal$Query,
				node,
				A2($elm$core$List$cons, selector, selectors));
		} else {
			var message = query.a;
			return $elm_explorations$test$Test$Html$Query$Internal$InternalError(message);
		}
	});
var $elm_explorations$test$Test$Html$Query$find = F2(
	function (selectors, _v0) {
		var showTrace = _v0.a;
		var query = _v0.b;
		return A2(
			$elm_explorations$test$Test$Html$Query$Internal$Single,
			showTrace,
			A2(
				$elm_explorations$test$Test$Html$Query$Internal$prependSelector,
				query,
				$elm_explorations$test$Test$Html$Query$Internal$Find(selectors)));
	});
var $elm_explorations$test$Test$Html$Event$emptyObject = $elm$json$Json$Encode$object(_List_Nil);
var $elm_explorations$test$Test$Html$Event$mouseDown = _Utils_Tuple2('mousedown', $elm_explorations$test$Test$Html$Event$emptyObject);
var $avh4$elm_program_test$ProgramTest$SimulateFailed = F2(
	function (a, b) {
		return {$: 'SimulateFailed', a: a, b: b};
	});
var $avh4$elm_program_test$ProgramTest$SimulateFailedToFindTarget = F2(
	function (a, b) {
		return {$: 'SimulateFailedToFindTarget', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Event$Event = F2(
	function (a, b) {
		return {$: 'Event', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Event$simulate = $elm_explorations$test$Test$Html$Event$Event;
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (maybe.$ === 'Just') {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $elm_explorations$test$Test$Html$Event$findEvent = F2(
	function (eventName, element) {
		var handlerToDecoder = function (handler) {
			switch (handler.$) {
				case 'Normal':
					var decoder = handler.a;
					return decoder;
				case 'MayStopPropagation':
					var decoder = handler.a;
					return A2($elm$json$Json$Decode$map, $elm$core$Tuple$first, decoder);
				case 'MayPreventDefault':
					var decoder = handler.a;
					return A2($elm$json$Json$Decode$map, $elm$core$Tuple$first, decoder);
				default:
					var decoder = handler.a;
					return A2(
						$elm$json$Json$Decode$map,
						function ($) {
							return $.message;
						},
						decoder);
			}
		};
		var elementOutput = $elm_explorations$test$Test$Html$Query$Internal$prettyPrint(element);
		var eventDecoder = function (node) {
			return A2(
				$elm$core$Result$fromMaybe,
				'Event.expectEvent: I found a node, but it does not listen for \"' + (eventName + ('\" events like I expected it would.\n\n' + elementOutput)),
				A2(
					$elm$core$Maybe$map,
					handlerToDecoder,
					A2($elm$core$Dict$get, eventName, node.facts.events)));
		};
		switch (element.$) {
			case 'TextTag':
				return $elm$core$Result$Err('I found a text node instead of an element. Text nodes do not receive events, so it would be impossible to simulate \"' + (eventName + ('\" events on it. The text in the node was: \"' + (elementOutput + '\"'))));
			case 'NodeEntry':
				var node = element.a;
				return eventDecoder(node);
			case 'CustomNode':
				var node = element.a;
				return eventDecoder(node);
			case 'MarkdownNode':
				var node = element.a;
				return eventDecoder(node);
			default:
				return $elm$core$Result$Err('I found an element I did not know how to deal with, so simulating \"' + (eventName + '\" events on it would be impossible. This is a problem with elm-test! Sorry about that. If you have time, could you report this issue on https://github.com/elm-explorations/test/issues with a http://sscce.org to reproduce this error message?'));
		}
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm_explorations$test$Test$Html$Event$toResult = function (_v0) {
	var _v1 = _v0.a;
	var eventName = _v1.a;
	var jsEvent = _v1.b;
	var _v2 = _v0.b;
	var showTrace = _v2.a;
	var query = _v2.b;
	var node = A2(
		$elm$core$Result$mapError,
		$elm_explorations$test$Test$Html$Query$Internal$queryErrorToString(query),
		A2(
			$elm$core$Result$andThen,
			$elm_explorations$test$Test$Html$Query$Internal$verifySingle(eventName),
			$elm_explorations$test$Test$Html$Query$Internal$traverse(query)));
	if (node.$ === 'Err') {
		var msg = node.a;
		return $elm$core$Result$Err(msg);
	} else {
		var single = node.a;
		return A2(
			$elm$core$Result$andThen,
			function (foundEvent) {
				return A2(
					$elm$core$Result$mapError,
					$elm$json$Json$Decode$errorToString,
					A2($elm$json$Json$Decode$decodeValue, foundEvent, jsEvent));
			},
			A2($elm_explorations$test$Test$Html$Event$findEvent, eventName, single));
	}
};
var $avh4$elm_program_test$ProgramTest$Active = function (a) {
	return {$: 'Active', a: a};
};
var $avh4$elm_program_test$ProgramTest$EffectSimulationNotConfigured = function (a) {
	return {$: 'EffectSimulationNotConfigured', a: a};
};
var $avh4$elm_program_test$ProgramTest$ProgramDoesNotSupportNavigation = function (a) {
	return {$: 'ProgramDoesNotSupportNavigation', a: a};
};
var $avh4$elm_program_test$PairingHeap$Empty = {$: 'Empty'};
var $avh4$elm_program_test$PairingHeap$Heap = F3(
	function (a, b, c) {
		return {$: 'Heap', a: a, b: b, c: c};
	});
var $avh4$elm_program_test$PairingHeap$merge = F2(
	function (heap1, heap2) {
		var _v0 = _Utils_Tuple2(heap1, heap2);
		if (_v0.a.$ === 'Empty') {
			var _v1 = _v0.a;
			return heap2;
		} else {
			if (_v0.b.$ === 'Empty') {
				var _v2 = _v0.b;
				return heap1;
			} else {
				var _v3 = _v0.a;
				var k1 = _v3.a;
				var v1 = _v3.b;
				var hs1 = _v3.c;
				var _v4 = _v0.b;
				var k2 = _v4.a;
				var v2 = _v4.b;
				var hs2 = _v4.c;
				return (_Utils_cmp(k1, k2) < 0) ? A3(
					$avh4$elm_program_test$PairingHeap$Heap,
					k1,
					v1,
					A2($elm$core$List$cons, heap2, hs1)) : A3(
					$avh4$elm_program_test$PairingHeap$Heap,
					k2,
					v2,
					A2($elm$core$List$cons, heap1, hs2));
			}
		}
	});
var $avh4$elm_program_test$PairingHeap$mergePairs = function (heaps) {
	if (!heaps.b) {
		return $avh4$elm_program_test$PairingHeap$Empty;
	} else {
		if (!heaps.b.b) {
			var x = heaps.a;
			return x;
		} else {
			var x = heaps.a;
			var _v1 = heaps.b;
			var y = _v1.a;
			var xs = _v1.b;
			return A2(
				$avh4$elm_program_test$PairingHeap$merge,
				A2($avh4$elm_program_test$PairingHeap$merge, x, y),
				$avh4$elm_program_test$PairingHeap$mergePairs(xs));
		}
	}
};
var $avh4$elm_program_test$PairingHeap$deleteMin = function (heap) {
	if (heap.$ === 'Empty') {
		return $avh4$elm_program_test$PairingHeap$Empty;
	} else {
		var k = heap.a;
		var v = heap.b;
		var heaps = heap.c;
		return $avh4$elm_program_test$PairingHeap$mergePairs(heaps);
	}
};
var $avh4$elm_program_test$PairingHeap$findMin = function (x) {
	if (x.$ === 'Empty') {
		return $elm$core$Maybe$Nothing;
	} else {
		var k = x.a;
		var v = x.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(k, v));
	}
};
var $avh4$elm_fifo$Fifo$Fifo = F2(
	function (a, b) {
		return {$: 'Fifo', a: a, b: b};
	});
var $avh4$elm_fifo$Fifo$insert = F2(
	function (a, _v0) {
		var front = _v0.a;
		var back = _v0.b;
		return A2(
			$avh4$elm_fifo$Fifo$Fifo,
			front,
			A2($elm$core$List$cons, a, back));
	});
var $avh4$elm_program_test$ProgramTest$EffectSimulation$queueTask = F2(
	function (task, simulation) {
		return _Utils_update(
			simulation,
			{
				workQueue: A2($avh4$elm_fifo$Fifo$insert, task, simulation.workQueue)
			});
	});
var $elm$url$Url$Https = {$: 'Https'};
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $avh4$elm_program_test$Url$Extra$resolve = F2(
	function (base, url) {
		return A2(
			$elm$core$Maybe$withDefault,
			_Utils_update(
				base,
				{
					path: A2($elm$core$String$startsWith, '/', url) ? url : A2(
						$elm$core$String$join,
						'/',
						function (l) {
							return _Utils_ap(
								l,
								A2($elm$core$String$split, '/', url));
						}(
							$elm$core$List$reverse(
								A2(
									$elm$core$List$drop,
									1,
									$elm$core$List$reverse(
										A2($elm$core$String$split, '/', base.path))))))
				}),
			$elm$url$Url$fromString(url));
	});
var $avh4$elm_fifo$Fifo$empty = A2($avh4$elm_fifo$Fifo$Fifo, _List_Nil, _List_Nil);
var $avh4$elm_fifo$Fifo$remove = function (fifo) {
	if (!fifo.a.b) {
		if (!fifo.b.b) {
			return _Utils_Tuple2($elm$core$Maybe$Nothing, $avh4$elm_fifo$Fifo$empty);
		} else {
			var back = fifo.b;
			return $avh4$elm_fifo$Fifo$remove(
				A2(
					$avh4$elm_fifo$Fifo$Fifo,
					$elm$core$List$reverse(back),
					_List_Nil));
		}
	} else {
		var _v1 = fifo.a;
		var next = _v1.a;
		var rest = _v1.b;
		var back = fifo.b;
		return _Utils_Tuple2(
			$elm$core$Maybe$Just(next),
			A2($avh4$elm_fifo$Fifo$Fifo, rest, back));
	}
};
var $avh4$elm_program_test$PairingHeap$insert = F3(
	function (k, v, heap) {
		return A2(
			$avh4$elm_program_test$PairingHeap$merge,
			A3($avh4$elm_program_test$PairingHeap$Heap, k, v, _List_Nil),
			heap);
	});
var $elm$core$Basics$round = _Basics_round;
var $avh4$elm_program_test$ProgramTest$EffectSimulation$simulateTask = F2(
	function (task, simulationState) {
		switch (task.$) {
			case 'Succeed':
				var msg = task.a;
				return _Utils_Tuple2(
					simulationState,
					$elm$core$Maybe$Just(msg));
			case 'Fail':
				var msg = task.a;
				return _Utils_Tuple2(
					simulationState,
					$elm$core$Maybe$Just(msg));
			case 'HttpTask':
				var request = task.a;
				return _Utils_Tuple2(
					_Utils_update(
						simulationState,
						{
							http: A3(
								$elm$core$Dict$insert,
								_Utils_Tuple2(request.method, request.url),
								request,
								simulationState.http)
						}),
					$elm$core$Maybe$Nothing);
			default:
				var delay = task.a;
				var onResult = task.b;
				return _Utils_Tuple2(
					_Utils_update(
						simulationState,
						{
							futureTasks: A3(
								$avh4$elm_program_test$PairingHeap$insert,
								simulationState.nowMs + $elm$core$Basics$round(delay),
								onResult,
								simulationState.futureTasks)
						}),
					$elm$core$Maybe$Nothing);
		}
	});
var $avh4$elm_program_test$ProgramTest$EffectSimulation$stepWorkQueue = function (simulation) {
	var _v0 = $avh4$elm_fifo$Fifo$remove(simulation.workQueue);
	if (_v0.a.$ === 'Nothing') {
		var _v1 = _v0.a;
		return $elm$core$Maybe$Nothing;
	} else {
		var task = _v0.a.a;
		var rest = _v0.b;
		var _v2 = A2($avh4$elm_program_test$ProgramTest$EffectSimulation$simulateTask, task, simulation.state);
		var newState = _v2.a;
		var msg = _v2.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				_Utils_update(
					simulation,
					{state: newState, workQueue: rest}),
				msg));
	}
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $avh4$elm_program_test$ProgramTest$withSimulation = F2(
	function (f, programTest) {
		if (programTest.$ === 'Finished') {
			var err = programTest.a;
			return $avh4$elm_program_test$ProgramTest$Finished(err);
		} else {
			var state = programTest.a;
			return $avh4$elm_program_test$ProgramTest$Active(
				_Utils_update(
					state,
					{
						effectSimulation: A2($elm$core$Maybe$map, f, state.effectSimulation)
					}));
		}
	});
var $avh4$elm_program_test$ProgramTest$advanceTime = F2(
	function (delta, programTest) {
		if (programTest.$ === 'Finished') {
			var err = programTest.a;
			return $avh4$elm_program_test$ProgramTest$Finished(err);
		} else {
			var state = programTest.a;
			var _v22 = state.effectSimulation;
			if (_v22.$ === 'Nothing') {
				return $avh4$elm_program_test$ProgramTest$Finished(
					$avh4$elm_program_test$ProgramTest$EffectSimulationNotConfigured('advanceTime'));
			} else {
				var simulation = _v22.a;
				return A3($avh4$elm_program_test$ProgramTest$advanceTo, 'advanceTime', simulation.state.nowMs + delta, programTest);
			}
		}
	});
var $avh4$elm_program_test$ProgramTest$advanceTo = F3(
	function (functionName, end, programTest) {
		if (programTest.$ === 'Finished') {
			var err = programTest.a;
			return $avh4$elm_program_test$ProgramTest$Finished(err);
		} else {
			var state = programTest.a;
			var _v18 = state.effectSimulation;
			if (_v18.$ === 'Nothing') {
				return $avh4$elm_program_test$ProgramTest$Finished(
					$avh4$elm_program_test$ProgramTest$EffectSimulationNotConfigured(functionName));
			} else {
				var simulation = _v18.a;
				var ss = simulation.state;
				var _v19 = $avh4$elm_program_test$PairingHeap$findMin(simulation.state.futureTasks);
				if (_v19.$ === 'Nothing') {
					return $avh4$elm_program_test$ProgramTest$Active(
						_Utils_update(
							state,
							{
								effectSimulation: $elm$core$Maybe$Just(
									_Utils_update(
										simulation,
										{
											state: _Utils_update(
												ss,
												{nowMs: end})
										}))
							}));
				} else {
					var _v20 = _v19.a;
					var t = _v20.a;
					var task = _v20.b;
					return (_Utils_cmp(t, end) < 1) ? A3(
						$avh4$elm_program_test$ProgramTest$advanceTo,
						functionName,
						end,
						$avh4$elm_program_test$ProgramTest$cyclic$drain()(
							A2(
								$avh4$elm_program_test$ProgramTest$withSimulation,
								$avh4$elm_program_test$ProgramTest$EffectSimulation$queueTask(
									task(_Utils_Tuple0)),
								$avh4$elm_program_test$ProgramTest$Active(
									_Utils_update(
										state,
										{
											effectSimulation: $elm$core$Maybe$Just(
												_Utils_update(
													simulation,
													{
														state: _Utils_update(
															ss,
															{
																futureTasks: $avh4$elm_program_test$PairingHeap$deleteMin(simulation.state.futureTasks),
																nowMs: t
															})
													}))
										}))))) : $avh4$elm_program_test$ProgramTest$Active(
						_Utils_update(
							state,
							{
								effectSimulation: $elm$core$Maybe$Just(
									_Utils_update(
										simulation,
										{
											state: _Utils_update(
												ss,
												{nowMs: end})
										}))
							}));
				}
			}
		}
	});
var $avh4$elm_program_test$ProgramTest$drainWorkQueue = function (programTest) {
	if (programTest.$ === 'Finished') {
		var err = programTest.a;
		return $avh4$elm_program_test$ProgramTest$Finished(err);
	} else {
		var state = programTest.a;
		var _v11 = state.effectSimulation;
		if (_v11.$ === 'Nothing') {
			return programTest;
		} else {
			var simulation = _v11.a;
			var _v12 = $avh4$elm_program_test$ProgramTest$EffectSimulation$stepWorkQueue(simulation);
			if (_v12.$ === 'Nothing') {
				return programTest;
			} else {
				var _v13 = _v12.a;
				var newSimulation = _v13.a;
				var msg = _v13.b;
				var updateMaybe = function (tc) {
					if (msg.$ === 'Nothing') {
						return tc;
					} else {
						var m = msg.a;
						return A2($avh4$elm_program_test$ProgramTest$update, m, tc);
					}
				};
				return $avh4$elm_program_test$ProgramTest$cyclic$drain()(
					updateMaybe(
						$avh4$elm_program_test$ProgramTest$Active(
							_Utils_update(
								state,
								{
									effectSimulation: $elm$core$Maybe$Just(newSimulation)
								}))));
			}
		}
	}
};
var $avh4$elm_program_test$ProgramTest$queueEffect = F2(
	function (effect, programTest) {
		if (programTest.$ === 'Finished') {
			return programTest;
		} else {
			var state = programTest.a;
			var _v9 = state.effectSimulation;
			if (_v9.$ === 'Nothing') {
				return programTest;
			} else {
				var simulation = _v9.a;
				return A2(
					$avh4$elm_program_test$ProgramTest$queueSimulatedEffect,
					simulation.deconstructEffect(effect),
					programTest);
			}
		}
	});
var $avh4$elm_program_test$ProgramTest$queueSimulatedEffect = F2(
	function (effect, programTest) {
		if (programTest.$ === 'Finished') {
			return programTest;
		} else {
			var state = programTest.a;
			var _v6 = state.effectSimulation;
			if (_v6.$ === 'Nothing') {
				return programTest;
			} else {
				var simulation = _v6.a;
				switch (effect.$) {
					case 'None':
						return programTest;
					case 'Batch':
						var effects = effect.a;
						return A3($elm$core$List$foldl, $avh4$elm_program_test$ProgramTest$queueSimulatedEffect, programTest, effects);
					case 'Task':
						var t = effect.a;
						return $avh4$elm_program_test$ProgramTest$Active(
							_Utils_update(
								state,
								{
									effectSimulation: $elm$core$Maybe$Just(
										A2($avh4$elm_program_test$ProgramTest$EffectSimulation$queueTask, t, simulation))
								}));
					case 'PortEffect':
						var portName = effect.a;
						var value = effect.b;
						return $avh4$elm_program_test$ProgramTest$Active(
							_Utils_update(
								state,
								{
									effectSimulation: $elm$core$Maybe$Just(
										_Utils_update(
											simulation,
											{
												outgoingPortValues: A3(
													$elm$core$Dict$update,
													portName,
													A2(
														$elm$core$Basics$composeR,
														$elm$core$Maybe$withDefault(_List_Nil),
														A2(
															$elm$core$Basics$composeR,
															$elm$core$List$cons(value),
															$elm$core$Maybe$Just)),
													simulation.outgoingPortValues)
											}))
								}));
					case 'PushUrl':
						var url = effect.a;
						return A2($avh4$elm_program_test$ProgramTest$routeChange, url, programTest);
					default:
						var url = effect.a;
						return A2($avh4$elm_program_test$ProgramTest$routeChange, url, programTest);
				}
			}
		}
	});
var $avh4$elm_program_test$ProgramTest$routeChange = F2(
	function (url, programTest) {
		if (programTest.$ === 'Finished') {
			var err = programTest.a;
			return $avh4$elm_program_test$ProgramTest$Finished(err);
		} else {
			var state = programTest.a;
			var _v3 = state.currentLocation;
			if (_v3.$ === 'Nothing') {
				return $avh4$elm_program_test$ProgramTest$Finished(
					$avh4$elm_program_test$ProgramTest$ProgramDoesNotSupportNavigation('routeChange'));
			} else {
				var currentLocation = _v3.a;
				var _v4 = state.program.onRouteChange(
					A2($avh4$elm_program_test$Url$Extra$resolve, currentLocation, url));
				if (_v4.$ === 'Nothing') {
					return programTest;
				} else {
					var msg = _v4.a;
					return A2($avh4$elm_program_test$ProgramTest$update, msg, programTest);
				}
			}
		}
	});
var $avh4$elm_program_test$ProgramTest$update = F2(
	function (msg, programTest) {
		if (programTest.$ === 'Finished') {
			var err = programTest.a;
			return $avh4$elm_program_test$ProgramTest$Finished(err);
		} else {
			var state = programTest.a;
			var _v1 = A2(state.program.update, msg, state.currentModel);
			var newModel = _v1.a;
			var newEffect = _v1.b;
			return $avh4$elm_program_test$ProgramTest$cyclic$drain()(
				A2(
					$avh4$elm_program_test$ProgramTest$queueEffect,
					newEffect,
					$avh4$elm_program_test$ProgramTest$Active(
						_Utils_update(
							state,
							{currentModel: newModel, lastEffect: newEffect}))));
		}
	});
function $avh4$elm_program_test$ProgramTest$cyclic$drain() {
	var advanceTimeIfSimulating = F2(
		function (t, programTest) {
			if (programTest.$ === 'Finished') {
				return programTest;
			} else {
				var state = programTest.a;
				var _v16 = state.effectSimulation;
				if (_v16.$ === 'Nothing') {
					return programTest;
				} else {
					return A2($avh4$elm_program_test$ProgramTest$advanceTime, t, programTest);
				}
			}
		});
	return A2(
		$elm$core$Basics$composeR,
		advanceTimeIfSimulating(0),
		$avh4$elm_program_test$ProgramTest$drainWorkQueue);
}
try {
	var $avh4$elm_program_test$ProgramTest$drain = $avh4$elm_program_test$ProgramTest$cyclic$drain();
	$avh4$elm_program_test$ProgramTest$cyclic$drain = function () {
		return $avh4$elm_program_test$ProgramTest$drain;
	};
} catch ($) {
	throw 'Some top-level definitions from `ProgramTest` are causing infinite recursion:\n\n  ┌─────┐\n  │    advanceTime\n  │     ↓\n  │    advanceTo\n  │     ↓\n  │    drain\n  │     ↓\n  │    drainWorkQueue\n  │     ↓\n  │    queueEffect\n  │     ↓\n  │    queueSimulatedEffect\n  │     ↓\n  │    routeChange\n  │     ↓\n  │    update\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $avh4$elm_program_test$ProgramTest$simulateHelper = F4(
	function (functionDescription, findTarget, event, programTest) {
		if (programTest.$ === 'Finished') {
			var err = programTest.a;
			return $avh4$elm_program_test$ProgramTest$Finished(err);
		} else {
			var state = programTest.a;
			var targetQuery = findTarget(
				state.program.view(state.currentModel));
			var _v1 = $elm_explorations$test$Test$Runner$getFailureReason(
				A2($elm_explorations$test$Test$Html$Query$has, _List_Nil, targetQuery));
			if (_v1.$ === 'Just') {
				var reason = _v1.a;
				return $avh4$elm_program_test$ProgramTest$Finished(
					A2($avh4$elm_program_test$ProgramTest$SimulateFailedToFindTarget, functionDescription, reason.description));
			} else {
				var _v2 = $elm_explorations$test$Test$Html$Event$toResult(
					A2($elm_explorations$test$Test$Html$Event$simulate, event, targetQuery));
				if (_v2.$ === 'Err') {
					var message = _v2.a;
					return $avh4$elm_program_test$ProgramTest$Finished(
						A2($avh4$elm_program_test$ProgramTest$SimulateFailed, functionDescription, message));
				} else {
					var msg = _v2.a;
					return A2($avh4$elm_program_test$ProgramTest$update, msg, programTest);
				}
			}
		}
	});
var $avh4$elm_program_test$ProgramTest$simulateDomEvent = F3(
	function (findTarget, _v0, programTest) {
		var eventName = _v0.a;
		var eventValue = _v0.b;
		return A4(
			$avh4$elm_program_test$ProgramTest$simulateHelper,
			'simulateDomEvent ' + $avh4$elm_program_test$ProgramTest$escapeString(eventName),
			findTarget,
			_Utils_Tuple2(eventName, eventValue),
			programTest);
	});
var $author$project$Page$SolfegePageTests$mouseDown = function (query) {
	return A2($avh4$elm_program_test$ProgramTest$simulateDomEvent, query, $elm_explorations$test$Test$Html$Event$mouseDown);
};
var $elm_explorations$test$Test$Html$Event$mouseUp = _Utils_Tuple2('mouseup', $elm_explorations$test$Test$Html$Event$emptyObject);
var $author$project$Page$SolfegePageTests$mouseUp = function (query) {
	return A2($avh4$elm_program_test$ProgramTest$simulateDomEvent, query, $elm_explorations$test$Test$Html$Event$mouseUp);
};
var $author$project$Main$ChangeUrl = function (a) {
	return {$: 'ChangeUrl', a: a};
};
var $avh4$elm_program_test$ProgramTest$NoBaseUrl = F2(
	function (a, b) {
		return {$: 'NoBaseUrl', a: a, b: b};
	});
var $avh4$elm_program_test$ProgramTest$ProgramDefinition = F2(
	function (a, b) {
		return {$: 'ProgramDefinition', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Internal$Inert$Node = function (a) {
	return {$: 'Node', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext = F2(
	function (a, b) {
		return {$: 'HtmlContext', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord = F4(
	function (tag, children, facts, descendantsCount) {
		return {children: children, descendantsCount: descendantsCount, facts: facts, tag: tag};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$TextTag = function (a) {
	return {$: 'TextTag', a: a};
};
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$CustomNode = function (a) {
	return {$: 'CustomNode', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord = F2(
	function (facts, model) {
		return {facts: facts, model: model};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$Facts = F5(
	function (styles, events, attributeNamespace, stringAttributes, boolAttributes) {
		return {attributeNamespace: attributeNamespace, boolAttributes: boolAttributes, events: events, stringAttributes: stringAttributes, styles: styles};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey = 'a4';
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$eventKey = 'a0';
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeEvents = function (taggedEventDecoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$eventKey,
				$elm$json$Json$Decode$dict(
					A2($elm$json$Json$Decode$map, taggedEventDecoder, $elm$json$Json$Decode$value))),
				$elm$json$Json$Decode$succeed($elm$core$Dict$empty)
			]));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeKey = 'a3';
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Dict$toList,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$filterMap(
					function (_v0) {
						var key = _v0.a;
						var value = _v0.b;
						var _v1 = A2($elm$json$Json$Decode$decodeValue, decoder, value);
						if (_v1.$ === 'Err') {
							return $elm$core$Maybe$Nothing;
						} else {
							var v = _v1.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(key, v));
						}
					}),
				$elm$core$Dict$fromList)),
		$elm$json$Json$Decode$dict($elm$json$Json$Decode$value));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeAttributes = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeKey,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap(decoder)),
				$elm$json$Json$Decode$succeed($elm$core$Dict$empty)
			]));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$styleKey = 'a1';
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$knownKeys = _List_fromArray(
	[$elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$styleKey, $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$eventKey, $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeKey, $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey]);
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys = $elm$core$Dict$filter(
	F2(
		function (key, _v0) {
			return !A2($elm$core$List$member, key, $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$knownKeys);
		}));
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers = function (otherDecoder) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (attributes) {
			return A2(
				$elm$json$Json$Decode$map,
				A2(
					$elm$core$Basics$composeR,
					$elm_explorations$test$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys,
					$elm$core$Dict$union(attributes)),
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap(otherDecoder));
		},
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeAttributes(otherDecoder));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeStyles = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$styleKey,
			$elm$json$Json$Decode$dict($elm$json$Json$Decode$string)),
			$elm$json$Json$Decode$succeed($elm$core$Dict$empty)
		]));
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts = function (_v0) {
	var taggers = _v0.a;
	var eventDecoder = _v0.b;
	return A6(
		$elm$json$Json$Decode$map5,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$Facts,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeStyles,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeEvents(
			eventDecoder(taggers)),
		$elm$json$Json$Decode$maybe(
			A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey, $elm$json$Json$Decode$value)),
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers($elm$json$Json$Decode$string),
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers($elm$json$Json$Decode$bool));
};
var $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants = {
	markdown: {markdown: 'b', options: 'a'},
	virtualDom: {descendantsCount: 'b', facts: 'd', kids: 'e', model: 'g', node: 'k', nodeType: '$', nodeTypeCustom: 3, nodeTypeKeyedNode: 2, nodeTypeNode: 1, nodeTypeTagger: 4, nodeTypeText: 0, nodeTypeThunk: 5, refs: 'l', tag: 'c', tagger: 'j', text: 'a'}
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNodeRecord = function (context) {
	return A3(
		$elm$json$Json$Decode$map2,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord,
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.facts,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.model, $elm$json$Json$Decode$value));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord = F2(
	function (facts, model) {
		return {facts: facts, model: model};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel = F2(
	function (options, markdown) {
		return {markdown: markdown, options: options};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$baseMarkdownModel = {
	markdown: '',
	options: {
		defaultHighlighting: $elm$core$Maybe$Nothing,
		githubFlavored: $elm$core$Maybe$Just(
			{breaks: false, tables: false}),
		sanitize: false,
		smartypants: false
	}
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$decodeMarkdownModel = A2(
	$elm$json$Json$Decode$map,
	$elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel($elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$baseMarkdownModel.options),
	A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.markdown.markdown, $elm$json$Json$Decode$string));
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeMarkdownNodeRecord = function (context) {
	return A3(
		$elm$json$Json$Decode$map2,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord,
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.facts,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.model, $elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$decodeMarkdownModel));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNode = function (context) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNode,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeMarkdownNodeRecord(context)),
				A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$CustomNode,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNodeRecord(context))
			]));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeTextTag = A2(
	$elm$json$Json$Decode$field,
	$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.text,
	A2(
		$elm$json$Json$Decode$andThen,
		function (text) {
			return $elm$json$Json$Decode$succeed(
				{text: text});
		},
		$elm$json$Json$Decode$string));
var $elm$json$Json$Decode$map4 = _Json_map4;
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml = function (context) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (nodeType) {
			return _Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeText) ? A2($elm$json$Json$Decode$map, $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$TextTag, $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeTextTag) : (_Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeKeyedNode) ? A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeKeyedNode(context)) : (_Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeNode) ? A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeNode(context)) : (_Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeCustom) ? $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNode(context) : (_Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeTagger) ? $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeTagger(context) : (_Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeThunk) ? A2(
				$elm$json$Json$Decode$field,
				$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.node,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context)) : $elm$json$Json$Decode$fail(
				'No such type as ' + $elm$core$String$fromInt(nodeType)))))));
		},
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeType, $elm$json$Json$Decode$int));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeKeyedNode = function (context) {
	var decodeSecondNode = A2(
		$elm$json$Json$Decode$field,
		'b',
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context));
	return A5(
		$elm$json$Json$Decode$map4,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord,
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.tag, $elm$json$Json$Decode$string),
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.kids,
			$elm$json$Json$Decode$list(decodeSecondNode)),
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.facts,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.descendantsCount, $elm$json$Json$Decode$int));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeNode = function (context) {
	return A5(
		$elm$json$Json$Decode$map4,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord,
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.tag, $elm$json$Json$Decode$string),
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.kids,
			$elm$json$Json$Decode$list(
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context))),
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.facts,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.descendantsCount, $elm$json$Json$Decode$int));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeTagger = function (_v0) {
	var taggers = _v0.a;
	var eventDecoder = _v0.b;
	return A2(
		$elm$json$Json$Decode$andThen,
		function (tagger) {
			var nodeDecoder = $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(
				A2(
					$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext,
					_Utils_ap(
						taggers,
						_List_fromArray(
							[tagger])),
					eventDecoder));
			return A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					[$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.node]),
				nodeDecoder);
		},
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.tagger, $elm$json$Json$Decode$value));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeElmHtml = function (eventDecoder) {
	return $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(
		A2($elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext, _List_Nil, eventDecoder));
};
var $elm_explorations$test$Test$Html$Internal$Inert$eventDecoder = function (eventHandler) {
	return _HtmlAsJson_eventHandler(eventHandler);
};
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm_explorations$test$Test$Html$Internal$Inert$mapHandler = F2(
	function (f, handler) {
		switch (handler.$) {
			case 'Normal':
				var decoder = handler.a;
				return $elm$virtual_dom$VirtualDom$Normal(
					A2($elm$json$Json$Decode$map, f, decoder));
			case 'MayStopPropagation':
				var decoder = handler.a;
				return $elm$virtual_dom$VirtualDom$MayStopPropagation(
					A2(
						$elm$json$Json$Decode$map,
						$elm$core$Tuple$mapFirst(f),
						decoder));
			case 'MayPreventDefault':
				var decoder = handler.a;
				return $elm$virtual_dom$VirtualDom$MayPreventDefault(
					A2(
						$elm$json$Json$Decode$map,
						$elm$core$Tuple$mapFirst(f),
						decoder));
			default:
				var decoder = handler.a;
				return $elm$virtual_dom$VirtualDom$Custom(
					A2(
						$elm$json$Json$Decode$map,
						function (value) {
							return {
								message: f(value.message),
								preventDefault: value.preventDefault,
								stopPropagation: value.stopPropagation
							};
						},
						decoder));
		}
	});
var $elm_explorations$test$Test$Html$Internal$Inert$taggerFunction = function (tagger) {
	return _HtmlAsJson_taggerFunction(tagger);
};
var $elm_explorations$test$Test$Html$Internal$Inert$taggedEventDecoder = F2(
	function (taggers, eventHandler) {
		if (!taggers.b) {
			return $elm_explorations$test$Test$Html$Internal$Inert$eventDecoder(eventHandler);
		} else {
			if (!taggers.b.b) {
				var tagger = taggers.a;
				return A2(
					$elm_explorations$test$Test$Html$Internal$Inert$mapHandler,
					$elm_explorations$test$Test$Html$Internal$Inert$taggerFunction(tagger),
					$elm_explorations$test$Test$Html$Internal$Inert$eventDecoder(eventHandler));
			} else {
				var tagger = taggers.a;
				var rest = taggers.b;
				return A2(
					$elm_explorations$test$Test$Html$Internal$Inert$mapHandler,
					$elm_explorations$test$Test$Html$Internal$Inert$taggerFunction(tagger),
					A2($elm_explorations$test$Test$Html$Internal$Inert$taggedEventDecoder, rest, eventHandler));
			}
		}
	});
var $elm_explorations$test$Test$Html$Internal$Inert$toJson = function (node) {
	return _HtmlAsJson_toJson(node);
};
var $elm_explorations$test$Test$Html$Internal$Inert$fromHtml = function (html) {
	var _v0 = A2(
		$elm$json$Json$Decode$decodeValue,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeElmHtml($elm_explorations$test$Test$Html$Internal$Inert$taggedEventDecoder),
		$elm_explorations$test$Test$Html$Internal$Inert$toJson(html));
	if (_v0.$ === 'Ok') {
		var elmHtml = _v0.a;
		return $elm$core$Result$Ok(
			$elm_explorations$test$Test$Html$Internal$Inert$Node(elmHtml));
	} else {
		var jsonError = _v0.a;
		return $elm$core$Result$Err(
			$elm$json$Json$Decode$errorToString(jsonError));
	}
};
var $elm_explorations$test$Test$Html$Query$fromHtml = function (html) {
	return A2(
		$elm_explorations$test$Test$Html$Query$Internal$Single,
		true,
		function () {
			var _v0 = $elm_explorations$test$Test$Html$Internal$Inert$fromHtml(html);
			if (_v0.$ === 'Ok') {
				var node = _v0.a;
				return A2($elm_explorations$test$Test$Html$Query$Internal$Query, node, _List_Nil);
			} else {
				var message = _v0.a;
				return $elm_explorations$test$Test$Html$Query$Internal$InternalError(message);
			}
		}());
};
var $avh4$elm_program_test$PairingHeap$empty = $avh4$elm_program_test$PairingHeap$Empty;
var $avh4$elm_program_test$ProgramTest$EffectSimulation$emptySimulationState = {futureTasks: $avh4$elm_program_test$PairingHeap$empty, http: $elm$core$Dict$empty, nowMs: 0};
var $avh4$elm_program_test$ProgramTest$EffectSimulation$init = function (f) {
	return {deconstructEffect: f, outgoingPortValues: $elm$core$Dict$empty, state: $avh4$elm_program_test$ProgramTest$EffectSimulation$emptySimulationState, workQueue: $avh4$elm_fifo$Fifo$empty};
};
var $avh4$elm_program_test$ProgramTest$createHelper = F2(
	function (program, options) {
		var program_ = {
			onRouteChange: program.onRouteChange,
			subscriptions: options.subscriptions,
			update: program.update,
			view: A2($elm$core$Basics$composeR, program.view, $elm_explorations$test$Test$Html$Query$fromHtml)
		};
		var _v0 = program.init;
		var newModel = _v0.a;
		var newEffect = _v0.b;
		return $avh4$elm_program_test$ProgramTest$drain(
			A2(
				$avh4$elm_program_test$ProgramTest$queueEffect,
				newEffect,
				$avh4$elm_program_test$ProgramTest$Active(
					{
						currentLocation: options.baseUrl,
						currentModel: newModel,
						effectSimulation: A2($elm$core$Maybe$map, $avh4$elm_program_test$ProgramTest$EffectSimulation$init, options.deconstructEffect),
						lastEffect: newEffect,
						program: program_
					})));
	});
var $avh4$elm_program_test$ProgramTest$emptyOptions = {baseUrl: $elm$core$Maybe$Nothing, deconstructEffect: $elm$core$Maybe$Nothing, subscriptions: $elm$core$Maybe$Nothing};
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $avh4$elm_program_test$ProgramTest$createApplication = function (program) {
	return A2(
		$avh4$elm_program_test$ProgramTest$ProgramDefinition,
		$avh4$elm_program_test$ProgramTest$emptyOptions,
		F2(
			function (location, flags) {
				if (location.$ === 'Nothing') {
					return function (_v1) {
						return $avh4$elm_program_test$ProgramTest$Finished(
							A2($avh4$elm_program_test$ProgramTest$NoBaseUrl, 'createApplication', ''));
					};
				} else {
					var url = location.a;
					return $avh4$elm_program_test$ProgramTest$createHelper(
						{
							init: A3(program.init, flags, url, _Utils_Tuple0),
							onRouteChange: A2($elm$core$Basics$composeR, program.onUrlChange, $elm$core$Maybe$Just),
							update: program.update,
							view: function (model) {
								return A3(
									$elm$html$Html$node,
									'body',
									_List_Nil,
									program.view(model).body);
							}
						});
				}
			}));
};
var $author$project$Main$urlRequestToUrl = function (request) {
	if (request.$ === 'External') {
		var s = request.a;
		var _v1 = $elm$url$Url$fromString(s);
		if (_v1.$ === 'Nothing') {
			return A6($elm$url$Url$Url, $elm$url$Url$Http, 'google.com', $elm$core$Maybe$Nothing, '', $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing);
		} else {
			var u = _v1.a;
			return u;
		}
	} else {
		var url = request.a;
		return url;
	}
};
var $author$project$Main$loadUrlFromUrlRequest = A2($elm$core$Basics$composeR, $author$project$Main$urlRequestToUrl, $author$project$Main$ChangeUrl);
var $author$project$Page$SolfegePage$KeyDownOn = function (a) {
	return {$: 'KeyDownOn', a: a};
};
var $author$project$Page$SolfegePage$KeyUpOn = function (a) {
	return {$: 'KeyUpOn', a: a};
};
var $avh4$elm_program_test$SimulatedEffect$BatchSub = function (a) {
	return {$: 'BatchSub', a: a};
};
var $avh4$elm_program_test$SimulatedEffect$Sub$batch = $avh4$elm_program_test$SimulatedEffect$BatchSub;
var $author$project$KeyboardKey$Alt = {$: 'Alt'};
var $author$project$KeyboardKey$Control = {$: 'Control'};
var $author$project$KeyboardKey$Meta = {$: 'Meta'};
var $author$project$KeyboardKey$Shift = {$: 'Shift'};
var $author$project$KeyboardKey$toKey = function (s) {
	switch (s) {
		case 'Alt':
			return $author$project$KeyboardKey$Alt;
		case 'Control':
			return $author$project$KeyboardKey$Control;
		case 'Meta':
			return $author$project$KeyboardKey$Meta;
		case 'Shift':
			return $author$project$KeyboardKey$Shift;
		default:
			return $author$project$KeyboardKey$CharacterKey(s);
	}
};
var $author$project$KeyboardKey$keyDecoder = A2(
	$elm$json$Json$Decode$map,
	$author$project$KeyboardKey$toKey,
	A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
var $avh4$elm_program_test$SimulatedEffect$NoneSub = {$: 'NoneSub'};
var $avh4$elm_program_test$SimulatedEffect$PortSub = F2(
	function (a, b) {
		return {$: 'PortSub', a: a, b: b};
	});
var $avh4$elm_program_test$SimulatedEffect$Sub$map = F2(
	function (f, effect) {
		switch (effect.$) {
			case 'NoneSub':
				return $avh4$elm_program_test$SimulatedEffect$NoneSub;
			case 'BatchSub':
				var effects = effect.a;
				return $avh4$elm_program_test$SimulatedEffect$BatchSub(
					A2(
						$elm$core$List$map,
						$avh4$elm_program_test$SimulatedEffect$Sub$map(f),
						effects));
			default:
				var name = effect.a;
				var decoder = effect.b;
				return A2(
					$avh4$elm_program_test$SimulatedEffect$PortSub,
					name,
					A2($elm$json$Json$Decode$map, f, decoder));
		}
	});
var $avh4$elm_program_test$SimulatedEffect$Ports$subscribe = F3(
	function (portName, decoder, toMsg) {
		return A2(
			$avh4$elm_program_test$SimulatedEffect$PortSub,
			portName,
			A2($elm$json$Json$Decode$map, toMsg, decoder));
	});
var $author$project$Page$SolfegePageTests$simulateSubscriptions = function (_v0) {
	return $avh4$elm_program_test$SimulatedEffect$Sub$batch(
		A2(
			$elm$core$List$map,
			$avh4$elm_program_test$SimulatedEffect$Sub$map($author$project$Main$SolfegeMsg),
			_List_fromArray(
				[
					A3($avh4$elm_program_test$SimulatedEffect$Ports$subscribe, 'keydown', $author$project$KeyboardKey$keyDecoder, $author$project$Page$SolfegePage$KeyDownOn),
					A3($avh4$elm_program_test$SimulatedEffect$Ports$subscribe, 'keyup', $author$project$KeyboardKey$keyDecoder, $author$project$Page$SolfegePage$KeyUpOn)
				])));
};
var $avh4$elm_program_test$ProgramTest$start = F2(
	function (flags, _v0) {
		var options = _v0.a;
		var program = _v0.b;
		return A3(program, options.baseUrl, flags, options);
	});
var $author$project$Main$Error = function (a) {
	return {$: 'Error', a: a};
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Note$octave = $elm$core$Tuple$second;
var $author$project$Page$SolfegePage$adjustOctave = F2(
	function (adjustment, note) {
		return _Utils_Tuple2(
			$author$project$Note$pitchClass(note),
			$author$project$Note$octave(note) + adjustment);
	});
var $author$project$Page$SolfegePage$playTone = _Platform_outgoingPort('playTone', $elm$json$Json$Encode$string);
var $author$project$Note$toInt = function (note) {
	return $author$project$Note$pitchClassToInt(
		$author$project$Note$pitchClass(note)) + (($author$project$Note$octave(note) - $author$project$Note$defaultOctave(
		$author$project$Note$pitchClass(note))) * 12);
};
var $author$project$Page$SolfegePage$pressOrReleaseKeyOnModel = F3(
	function (isPress, model, note) {
		return _Utils_update(
			model,
			{
				isKeyPressed: A3(
					$elm$core$Dict$insert,
					$author$project$Note$toInt(note) - $author$project$Note$pitchClassToInt(
						$author$project$Scale$pitchClass(model.selectedScale)),
					isPress,
					model.isKeyPressed)
			});
	});
var $author$project$Page$SolfegePage$pressKeyOnModel = $author$project$Page$SolfegePage$pressOrReleaseKeyOnModel(true);
var $author$project$Page$SolfegePage$releaseKeyOnModel = $author$project$Page$SolfegePage$pressOrReleaseKeyOnModel(false);
var $author$project$Page$SolfegePage$setOctaveAdjustment = F2(
	function (i, model) {
		return _Utils_update(
			model,
			{octaveAdjustment: i});
	});
var $author$project$Page$SolfegePage$resetOctaveAdjustment = $author$project$Page$SolfegePage$setOctaveAdjustment(0);
var $author$project$Scale$scaleType = $elm$core$Tuple$second;
var $author$project$Scale$Dorian = {$: 'Dorian'};
var $author$project$Scale$InvalidScale = function (a) {
	return {$: 'InvalidScale', a: a};
};
var $author$project$Scale$Locrian = {$: 'Locrian'};
var $author$project$Scale$Lydian = {$: 'Lydian'};
var $author$project$Scale$Major = {$: 'Major'};
var $author$project$Scale$Mixolydian = {$: 'Mixolydian'};
var $author$project$Scale$scaleTypeFromInt = function (i) {
	switch (i) {
		case 0:
			return $elm$core$Result$Ok($author$project$Scale$Chromatic);
		case 1:
			return $elm$core$Result$Ok($author$project$Scale$Minor);
		case 2:
			return $elm$core$Result$Ok($author$project$Scale$Locrian);
		case 3:
			return $elm$core$Result$Ok($author$project$Scale$Major);
		case 4:
			return $elm$core$Result$Ok($author$project$Scale$Dorian);
		case 5:
			return $elm$core$Result$Ok($author$project$Scale$Phrygian);
		case 6:
			return $elm$core$Result$Ok($author$project$Scale$Lydian);
		case 7:
			return $elm$core$Result$Ok($author$project$Scale$Mixolydian);
		default:
			return $elm$core$Result$Err(
				$author$project$Scale$InvalidScale(
					$elm$core$String$fromInt(i)));
	}
};
var $author$project$Note$pitchClassToString = function (pc) {
	switch (pc.$) {
		case 'A':
			return 'A';
		case 'ASharp':
			return 'A#';
		case 'B':
			return 'B';
		case 'C':
			return 'C';
		case 'CSharp':
			return 'C#';
		case 'D':
			return 'D';
		case 'DSharp':
			return 'D#';
		case 'E':
			return 'E';
		case 'F':
			return 'F';
		case 'FSharp':
			return 'F#';
		case 'G':
			return 'G';
		default:
			return 'G#';
	}
};
var $author$project$Note$toString = function (note) {
	return _Utils_ap(
		$author$project$Note$pitchClassToString(note.a),
		$elm$core$String$fromInt(note.b));
};
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $author$project$Page$SolfegePage$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'MouseDownOn':
				var b = msg.a;
				switch (b.$) {
					case 'Key':
						var i = b.a;
						return _Utils_Tuple2(
							A2(
								$author$project$Page$SolfegePage$pressKeyOnModel,
								model,
								$author$project$Note$fromInt(
									i + $author$project$Note$pitchClassToInt(
										$author$project$Scale$pitchClass(model.selectedScale)))),
							$author$project$Page$SolfegePage$playTone(
								$author$project$Note$toString(
									A2(
										$author$project$Page$SolfegePage$adjustOctave,
										model.octaveAdjustment,
										A2($author$project$Scale$fromKeyClick, model.selectedScale, i)))));
					case 'ScaleSelector':
						var i = b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									selectedScale: _Utils_Tuple2(
										$author$project$Scale$pitchClass(model.selectedScale),
										A2(
											$elm$core$Result$withDefault,
											$author$project$Scale$scaleType(model.selectedScale),
											$author$project$Scale$scaleTypeFromInt(i)))
								}),
							$elm$core$Platform$Cmd$none);
					default:
						var i = b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									selectedScale: _Utils_Tuple2(
										$author$project$Note$pitchClassFromInt(i),
										$author$project$Scale$scaleType(model.selectedScale))
								}),
							$elm$core$Platform$Cmd$none);
				}
			case 'MouseUpOn':
				var b = msg.a;
				if (b.$ === 'Key') {
					var i = b.a;
					return _Utils_Tuple2(
						A2(
							$author$project$Page$SolfegePage$releaseKeyOnModel,
							model,
							$author$project$Note$fromInt(
								i + $author$project$Note$pitchClassToInt(
									$author$project$Scale$pitchClass(model.selectedScale)))),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'KeyDownOn':
				var keyboardKey = msg.a;
				switch (keyboardKey.$) {
					case 'CharacterKey':
						var _v4 = A2($author$project$Scale$fromKeyboardKey, model.selectedScale, keyboardKey);
						if (_v4.$ === 'Ok') {
							var note = _v4.a;
							return _Utils_Tuple2(
								A2($author$project$Page$SolfegePage$pressKeyOnModel, model, note),
								$author$project$Page$SolfegePage$playTone(
									$author$project$Note$toString(
										A2($author$project$Page$SolfegePage$adjustOctave, model.octaveAdjustment, note))));
						} else {
							var s = _v4.a;
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						}
					case 'Shift':
						return _Utils_Tuple2(
							A2($author$project$Page$SolfegePage$setOctaveAdjustment, 1, model),
							$elm$core$Platform$Cmd$none);
					case 'Control':
						return _Utils_Tuple2(
							A2($author$project$Page$SolfegePage$setOctaveAdjustment, -1, model),
							$elm$core$Platform$Cmd$none);
					default:
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			default:
				var keyboardKey = msg.a;
				if (keyboardKey.$ === 'CharacterKey') {
					var _v6 = A2($author$project$Scale$fromKeyboardKey, model.selectedScale, keyboardKey);
					if (_v6.$ === 'Ok') {
						var note = _v6.a;
						return _Utils_Tuple2(
							A2($author$project$Page$SolfegePage$releaseKeyOnModel, model, note),
							$elm$core$Platform$Cmd$none);
					} else {
						var s = _v6.a;
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				} else {
					return _Utils_Tuple2(
						$author$project$Page$SolfegePage$resetOctaveAdjustment(model),
						$elm$core$Platform$Cmd$none);
				}
		}
	});
var $author$project$Main$update = F2(
	function (msg, mainModel) {
		if (msg.$ === 'ChangeUrl') {
			var url = msg.a;
			return _Utils_Tuple2(
				mainModel,
				$elm$browser$Browser$Navigation$load(
					$elm$url$Url$toString(url)));
		} else {
			var message = msg.a;
			if (mainModel.$ === 'Solfege') {
				var m = mainModel.a;
				return A3(
					$author$project$Main$tupleMap,
					$author$project$Main$Solfege,
					$elm$core$Platform$Cmd$map($author$project$Main$SolfegeMsg),
					A2($author$project$Page$SolfegePage$update, message, m));
			} else {
				return _Utils_Tuple2(
					$author$project$Main$Error('Update received SolfegeMsg but model wasn\'t Solfege.'),
					$elm$core$Platform$Cmd$none);
			}
		}
	});
var $elm$browser$Browser$Document = F2(
	function (title, body) {
		return {body: body, title: title};
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $author$project$Page$SolfegePage$Key = function (a) {
	return {$: 'Key', a: a};
};
var $author$project$Page$SolfegePage$MouseDownOn = function (a) {
	return {$: 'MouseDownOn', a: a};
};
var $author$project$Page$SolfegePage$MouseUpOn = function (a) {
	return {$: 'MouseUpOn', a: a};
};
var $author$project$Scale$notes = function (_v0) {
	var note = _v0.a;
	var scale = _v0.b;
	return A2(
		$elm$core$List$map,
		$elm$core$Basics$add(
			$author$project$Note$pitchClassToInt(note)),
		function () {
			switch (scale.$) {
				case 'Chromatic':
					return A2($elm$core$List$range, 0, 12);
				case 'Minor':
					return _List_fromArray(
						[0, 2, 3, 5, 7, 8, 10]);
				case 'Locrian':
					return _List_fromArray(
						[0, 1, 3, 5, 6, 8, 10]);
				case 'Major':
					return _List_fromArray(
						[0, 2, 4, 5, 7, 9, 11]);
				case 'Dorian':
					return _List_fromArray(
						[0, 2, 3, 5, 7, 9, 10]);
				case 'Phrygian':
					return _List_fromArray(
						[0, 1, 3, 5, 7, 8, 10]);
				case 'Lydian':
					return _List_fromArray(
						[0, 2, 4, 6, 7, 9, 11]);
				default:
					return _List_fromArray(
						[0, 2, 4, 5, 7, 9, 10]);
			}
		}());
};
var $author$project$Page$SolfegePage$keyIsInScale = F2(
	function (scale, i) {
		return A2(
			$elm$core$List$member,
			A2($elm$core$Basics$modBy, 12, i),
			$author$project$Scale$notes(
				_Utils_Tuple2(
					$author$project$Note$A,
					$author$project$Scale$scaleType(scale))));
	});
var $author$project$Page$SolfegePage$activeKeyInScale = F2(
	function (scale, i) {
		var _v0 = A2($author$project$Page$SolfegePage$keyIsInScale, scale, i);
		if (_v0) {
			return $elm$html$Html$Attributes$class('black-on-white');
		} else {
			return $elm$html$Html$Attributes$class('white-on-dark');
		}
	});
var $author$project$Page$SolfegePage$getKeyName = function (n) {
	return 'key-' + $elm$core$String$fromInt(n);
};
var $author$project$Page$SolfegePage$getNoteLabelFromKey = F2(
	function (scale, i) {
		return $author$project$Note$pitchClassToString(
			$author$project$Note$pitchClassFromInt(
				i + $author$project$Note$pitchClassToInt(
					$author$project$Scale$pitchClass(scale))));
	});
var $author$project$Page$SolfegePage$showText = F3(
	function (ifTrue, ifFalse, _switch) {
		if (_switch) {
			return ifTrue;
		} else {
			return ifFalse;
		}
	});
var $author$project$Page$SolfegePage$showTextOrNothing = F2(
	function (ifTrue, _switch) {
		return A3($author$project$Page$SolfegePage$showText, ifTrue, '', _switch);
	});
var $author$project$Solfege$toString = function (s) {
	switch (s.$) {
		case 'Do':
			return 'Do';
		case 'Di':
			return 'Di';
		case 'Re':
			return 'Re';
		case 'Me':
			return 'Me';
		case 'Mi':
			return 'Mi';
		case 'Fa':
			return 'Fa';
		case 'Fi':
			return 'Fi';
		case 'Sol':
			return 'Sol';
		case 'Le':
			return 'Le';
		case 'La':
			return 'La';
		case 'Te':
			return 'Te';
		default:
			return 'Ti';
	}
};
var $author$project$Page$SolfegePage$getLabelFromKey = F3(
	function (scale, isKeyPressed, key) {
		return A2($author$project$Page$SolfegePage$getNoteLabelFromKey, scale, key) + ('\n' + function () {
			var _v0 = A2($elm$core$Dict$get, key, isKeyPressed);
			if (_v0.$ === 'Nothing') {
				return 'Error!';
			} else {
				var _switch = _v0.a;
				return A2(
					$author$project$Page$SolfegePage$showTextOrNothing,
					$author$project$Solfege$toString(
						$author$project$Solfege$fromInt(key)),
					_switch);
			}
		}());
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Page$SolfegePage$renderKey = F2(
	function (model, n) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('key'),
					A2($author$project$Page$SolfegePage$activeKeyInScale, model.selectedScale, n),
					$elm$html$Html$Attributes$id(
					$author$project$Page$SolfegePage$getKeyName(n)),
					$elm$html$Html$Events$onMouseDown(
					$author$project$Page$SolfegePage$MouseDownOn(
						$author$project$Page$SolfegePage$Key(n))),
					$elm$html$Html$Events$onMouseUp(
					$author$project$Page$SolfegePage$MouseUpOn(
						$author$project$Page$SolfegePage$Key(n)))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					A3($author$project$Page$SolfegePage$getLabelFromKey, model.selectedScale, model.isKeyPressed, n))
				]));
	});
var $author$project$Page$SolfegePage$renderKeys = F2(
	function (model, n) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A2(
				$elm$core$List$map,
				$author$project$Page$SolfegePage$renderKey(model),
				A2($elm$core$List$range, 0, n - 1)));
	});
var $author$project$Page$SolfegePage$NoteSelector = function (a) {
	return {$: 'NoteSelector', a: a};
};
var $author$project$Page$SolfegePage$activeBackgroundFromPitchClass = F2(
	function (pc, i) {
		return _Utils_eq(
			pc,
			$author$project$Note$pitchClassFromInt(i)) ? $elm$html$Html$Attributes$class('bg-white') : $elm$html$Html$Attributes$class('bg-medium');
	});
var $author$project$Page$SolfegePage$renderNoteSelector = F2(
	function (pc, i) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('scale-selector'),
					A2($author$project$Page$SolfegePage$activeBackgroundFromPitchClass, pc, i),
					$elm$html$Html$Attributes$id(
					'scale-note-' + $elm$core$String$fromInt(i)),
					$elm$html$Html$Events$onMouseDown(
					$author$project$Page$SolfegePage$MouseDownOn(
						$author$project$Page$SolfegePage$NoteSelector(i))),
					$elm$html$Html$Events$onMouseUp(
					$author$project$Page$SolfegePage$MouseUpOn(
						$author$project$Page$SolfegePage$NoteSelector(i)))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					$author$project$Note$toString(
						$author$project$Note$fromInt(i)))
				]));
	});
var $author$project$Page$SolfegePage$getAllNoteSelectors = function (pc) {
	return A2(
		$elm$core$List$map,
		$author$project$Page$SolfegePage$renderNoteSelector(pc),
		A2($elm$core$List$range, 0, 11));
};
var $author$project$Page$SolfegePage$ScaleSelector = function (a) {
	return {$: 'ScaleSelector', a: a};
};
var $author$project$Page$SolfegePage$activeBackgroundFromScaleType = F2(
	function (t, i) {
		return _Utils_eq(
			t,
			A2(
				$elm$core$Result$withDefault,
				$author$project$Scale$Chromatic,
				$author$project$Scale$scaleTypeFromInt(i))) ? $elm$html$Html$Attributes$class('bg-white') : $elm$html$Html$Attributes$class('bg-medium');
	});
var $author$project$Scale$scaleTypeToString = function (t) {
	switch (t.$) {
		case 'Chromatic':
			return 'Chromatic';
		case 'Minor':
			return 'Minor';
		case 'Locrian':
			return 'Locrian';
		case 'Major':
			return 'Major';
		case 'Dorian':
			return 'Dorian';
		case 'Phrygian':
			return 'Phrygian';
		case 'Lydian':
			return 'Lydian';
		default:
			return 'Mixolydian';
	}
};
var $author$project$Page$SolfegePage$renderScaleTypeSelector = F2(
	function (t, i) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('scale-selector'),
					A2($author$project$Page$SolfegePage$activeBackgroundFromScaleType, t, i),
					$elm$html$Html$Attributes$id(
					'scale-type-' + $elm$core$String$fromInt(i)),
					$elm$html$Html$Events$onMouseDown(
					$author$project$Page$SolfegePage$MouseDownOn(
						$author$project$Page$SolfegePage$ScaleSelector(i))),
					$elm$html$Html$Events$onMouseUp(
					$author$project$Page$SolfegePage$MouseUpOn(
						$author$project$Page$SolfegePage$ScaleSelector(i)))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					A2(
						$elm$core$Result$withDefault,
						'ERROR!',
						A2(
							$elm$core$Result$map,
							$author$project$Scale$scaleTypeToString,
							$author$project$Scale$scaleTypeFromInt(i))))
				]));
	});
var $author$project$Page$SolfegePage$getAllScaleTypeSelectors = function (t) {
	return A2(
		$elm$core$List$map,
		$author$project$Page$SolfegePage$renderScaleTypeSelector(t),
		A2($elm$core$List$range, 0, 7));
};
var $author$project$Page$SolfegePage$renderScaleSelector = function (scale) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('table')
				]),
			$author$project$Page$SolfegePage$getAllNoteSelectors(
				$author$project$Scale$pitchClass(scale))),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('table')
				]),
			$author$project$Page$SolfegePage$getAllScaleTypeSelectors(
				$author$project$Scale$scaleType(scale)))
		]);
};
var $author$project$Page$SolfegePage$view = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('table')
				]),
			_List_fromArray(
				[
					A2($author$project$Page$SolfegePage$renderKeys, model, 13)
				])),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('table')
				]),
			$author$project$Page$SolfegePage$renderScaleSelector(model.selectedScale))
		]);
};
var $author$project$Main$viewBody = function (model) {
	if (model.$ === 'Solfege') {
		var m = model.a;
		return A2(
			$elm$core$List$map,
			$elm$html$Html$map($author$project$Main$SolfegeMsg),
			$author$project$Page$SolfegePage$view(m));
	} else {
		var errorMessage = model.a;
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Error: ' + errorMessage)
					]))
			]);
	}
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$p = _VirtualDom_node('p');
var $author$project$Page$viewFooter = A2(
	$elm$html$Html$p,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('color-white'),
			$elm$html$Html$Attributes$class('font-very-small')
		]),
	_List_fromArray(
		[
			$elm$html$Html$text('This work is licensed under a '),
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$href('http://creativecommons.org/licenses/by-nc/4.0/')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('Creative Commons Attribution-NonCommercial 4.0 License')
				])),
			$elm$html$Html$text('.')
		]));
var $elm$html$Html$span = _VirtualDom_node('span');
var $author$project$Page$viewHeader = A2(
	$elm$html$Html$div,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('tooltip'),
					$elm$html$Html$Attributes$class('float-right'),
					$elm$html$Html$Attributes$class('information-icon')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('?'),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('tooltip-text')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('To play notes, either click them or use the number row on your keyboard from the backtick key to the =.  \n\nFor instance, 4 will be Mi, the fifth note of the chromatic scale (because backtick is Do, 1 is Di, etc.).  The Q through \\ keys will also work.  \n\nShift can be used to raise the tone by an octave and Control can be used to lower it.')
						]))
				]))
		]));
var $author$project$Main$view = function (model) {
	return A2(
		$elm$browser$Browser$Document,
		'Solfeger',
		_Utils_ap(
			_List_fromArray(
				[$author$project$Page$viewHeader]),
			_Utils_ap(
				$author$project$Main$viewBody(model),
				_List_fromArray(
					[$author$project$Page$viewFooter]))));
};
var $avh4$elm_program_test$ProgramTest$InvalidLocationUrl = F2(
	function (a, b) {
		return {$: 'InvalidLocationUrl', a: a, b: b};
	});
var $avh4$elm_program_test$ProgramTest$withBaseUrl = F2(
	function (baseUrl, _v0) {
		var options = _v0.a;
		var program = _v0.b;
		var _v1 = $elm$url$Url$fromString(baseUrl);
		if (_v1.$ === 'Nothing') {
			return A2(
				$avh4$elm_program_test$ProgramTest$ProgramDefinition,
				options,
				F3(
					function (_v2, _v3, _v4) {
						return $avh4$elm_program_test$ProgramTest$Finished(
							A2($avh4$elm_program_test$ProgramTest$InvalidLocationUrl, 'startWithBaseUrl', baseUrl));
					}));
		} else {
			var url = _v1.a;
			return A2(
				$avh4$elm_program_test$ProgramTest$ProgramDefinition,
				_Utils_update(
					options,
					{
						baseUrl: $elm$core$Maybe$Just(url)
					}),
				program);
		}
	});
var $avh4$elm_program_test$ProgramTest$withSimulatedSubscriptions = F2(
	function (fn, _v0) {
		var options = _v0.a;
		var program = _v0.b;
		return A2(
			$avh4$elm_program_test$ProgramTest$ProgramDefinition,
			_Utils_update(
				options,
				{
					subscriptions: $elm$core$Maybe$Just(fn)
				}),
			program);
	});
var $author$project$Page$SolfegePageTests$startProgramForTesting = F2(
	function (initialUrl, flags) {
		return A2(
			$avh4$elm_program_test$ProgramTest$start,
			flags,
			A2(
				$avh4$elm_program_test$ProgramTest$withSimulatedSubscriptions,
				$author$project$Page$SolfegePageTests$simulateSubscriptions,
				A2(
					$avh4$elm_program_test$ProgramTest$withBaseUrl,
					initialUrl,
					$avh4$elm_program_test$ProgramTest$createApplication(
						{init: $author$project$Main$init, onUrlChange: $author$project$Main$ChangeUrl, onUrlRequest: $author$project$Main$loadUrlFromUrlRequest, update: $author$project$Main$update, view: $author$project$Main$view}))));
	});
var $elm_explorations$test$Test$Html$Selector$Internal$Text = function (a) {
	return {$: 'Text', a: a};
};
var $elm_explorations$test$Test$Html$Selector$text = $elm_explorations$test$Test$Html$Selector$Internal$Text;
var $author$project$Page$SolfegePageTests$testKeyClickDisplaysSolfege = A2(
	$elm_explorations$test$Test$test,
	'keyClickDisplaysSolfege',
	function (_v0) {
		return A2(
			$avh4$elm_program_test$ProgramTest$expectViewHas,
			_List_fromArray(
				[
					$elm_explorations$test$Test$Html$Selector$id('key-10'),
					$elm_explorations$test$Test$Html$Selector$text('')
				]),
			A2(
				$author$project$Page$SolfegePageTests$mouseUp,
				$elm_explorations$test$Test$Html$Query$find(
					_List_fromArray(
						[
							$elm_explorations$test$Test$Html$Selector$id('key-10')
						])),
				A2(
					$avh4$elm_program_test$ProgramTest$ensureViewHas,
					_List_fromArray(
						[
							$elm_explorations$test$Test$Html$Selector$id('key-10'),
							$elm_explorations$test$Test$Html$Selector$text('Te')
						]),
					A2(
						$author$project$Page$SolfegePageTests$mouseDown,
						$elm_explorations$test$Test$Html$Query$find(
							_List_fromArray(
								[
									$elm_explorations$test$Test$Html$Selector$id('key-10')
								])),
						A2(
							$avh4$elm_program_test$ProgramTest$ensureViewHas,
							_List_fromArray(
								[
									$elm_explorations$test$Test$Html$Selector$id('scale-note-6'),
									$elm_explorations$test$Test$Html$Selector$class('bg-white')
								]),
							A2(
								$author$project$Page$SolfegePageTests$mouseUp,
								$elm_explorations$test$Test$Html$Query$find(
									_List_fromArray(
										[
											$elm_explorations$test$Test$Html$Selector$id('scale-note-6')
										])),
								A2(
									$author$project$Page$SolfegePageTests$mouseDown,
									$elm_explorations$test$Test$Html$Query$find(
										_List_fromArray(
											[
												$elm_explorations$test$Test$Html$Selector$id('scale-note-6')
											])),
									A2(
										$avh4$elm_program_test$ProgramTest$ensureViewHas,
										_List_fromArray(
											[
												$elm_explorations$test$Test$Html$Selector$id('key-11'),
												$elm_explorations$test$Test$Html$Selector$text('')
											]),
										A2(
											$author$project$Page$SolfegePageTests$mouseUp,
											$elm_explorations$test$Test$Html$Query$find(
												_List_fromArray(
													[
														$elm_explorations$test$Test$Html$Selector$id('key-11')
													])),
											A2(
												$avh4$elm_program_test$ProgramTest$ensureViewHas,
												_List_fromArray(
													[
														$elm_explorations$test$Test$Html$Selector$id('key-11'),
														$elm_explorations$test$Test$Html$Selector$text('Ti')
													]),
												A2(
													$author$project$Page$SolfegePageTests$mouseDown,
													$elm_explorations$test$Test$Html$Query$find(
														_List_fromArray(
															[
																$elm_explorations$test$Test$Html$Selector$id('key-11')
															])),
													A2($author$project$Page$SolfegePageTests$startProgramForTesting, 'http://www.mysolfegeapp.com', _Utils_Tuple0))))))))))));
	});
var $author$project$ScaleTests$testKeyClickHandlesHighDo = A2(
	$elm_explorations$test$Test$test,
	'keyClickHandlesHighDo',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			_Utils_Tuple2($author$project$Note$A, 4),
			A2(
				$author$project$Scale$fromKeyClick,
				_Utils_Tuple2($author$project$Note$A, $author$project$Scale$Chromatic),
				12));
	});
var $author$project$Page$SolfegePageTests$testKeyRenders = A2(
	$elm_explorations$test$Test$test,
	'keyRenders',
	function (_v0) {
		return A2(
			$elm_explorations$test$Test$Html$Query$has,
			_List_fromArray(
				[
					$elm_explorations$test$Test$Html$Selector$id('key-57')
				]),
			$elm_explorations$test$Test$Html$Query$fromHtml(
				A2(
					$author$project$Page$SolfegePage$renderKey,
					A3($author$project$Page$SolfegePage$Model, $elm$core$Dict$empty, 0, $author$project$Scale$default),
					57)));
	});
var $author$project$KeyboardKey$toString = function (key) {
	switch (key.$) {
		case 'CharacterKey':
			var s = key.a;
			return s;
		case 'Shift':
			return 'Shift';
		case 'Meta':
			return 'Meta';
		case 'Alt':
			return 'Alt';
		default:
			return 'Control';
	}
};
var $author$project$Page$SolfegePageTests$keyboardKeyObject = function (key) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'key',
				$elm$json$Json$Encode$string(
					$author$project$KeyboardKey$toString(key)))
			]));
};
var $avh4$elm_program_test$ProgramTest$CustomFailure = F2(
	function (a, b) {
		return {$: 'CustomFailure', a: a, b: b};
	});
var $avh4$elm_program_test$ProgramTest$fail = F3(
	function (assertionName, failureMessage, programTest) {
		if (programTest.$ === 'Finished') {
			var err = programTest.a;
			return $avh4$elm_program_test$ProgramTest$Finished(err);
		} else {
			return $avh4$elm_program_test$ProgramTest$Finished(
				A2($avh4$elm_program_test$ProgramTest$CustomFailure, assertionName, failureMessage));
		}
	});
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $avh4$elm_program_test$ProgramTest$simulateIncomingPort = F3(
	function (portName, value, programTest) {
		var fail_ = $avh4$elm_program_test$ProgramTest$fail('simulateIncomingPort \"' + (portName + '\"'));
		if (programTest.$ === 'Finished') {
			var err = programTest.a;
			return $avh4$elm_program_test$ProgramTest$Finished(err);
		} else {
			var state = programTest.a;
			var _v1 = state.program.subscriptions;
			if (_v1.$ === 'Nothing') {
				return A2(fail_, 'you MUST use ProgramTest.withSimulatedSubscriptions to be able to use simulateIncomingPort', programTest);
			} else {
				var fn = _v1.a;
				var step = F2(
					function (r, tc) {
						if (r.$ === 'Err') {
							var message = r.a;
							return A2(fail_, 'the value provided does not match the type that the port is expecting:\n' + message, tc);
						} else {
							var msg = r.a;
							return A2($avh4$elm_program_test$ProgramTest$update, msg, tc);
						}
					});
				var match = function (sub) {
					switch (sub.$) {
						case 'NoneSub':
							return _List_Nil;
						case 'BatchSub':
							var subs_ = sub.a;
							return A2($elm$core$List$concatMap, match, subs_);
						default:
							var pname = sub.a;
							var decoder = sub.b;
							return _Utils_eq(pname, portName) ? $elm$core$List$singleton(
								A2(
									$elm$core$Result$mapError,
									$elm$json$Json$Decode$errorToString,
									A2($elm$json$Json$Decode$decodeValue, decoder, value))) : _List_Nil;
					}
				};
				var matches = match(
					fn(state.currentModel));
				return _Utils_eq(matches, _List_Nil) ? A2(fail_, 'the program is not currently subscribed to the port', programTest) : A3($elm$core$List$foldl, step, programTest, matches);
			}
		}
	});
var $author$project$Page$SolfegePageTests$testKeyboardKeyPressDisplaysSolfege = A2(
	$elm_explorations$test$Test$test,
	'keyboardKeyPressDisplaysSolfege',
	function (_v0) {
		return A2(
			$avh4$elm_program_test$ProgramTest$expectViewHas,
			_List_fromArray(
				[
					$elm_explorations$test$Test$Html$Selector$id('key-6'),
					$elm_explorations$test$Test$Html$Selector$text('')
				]),
			A3(
				$avh4$elm_program_test$ProgramTest$simulateIncomingPort,
				'keyup',
				$author$project$Page$SolfegePageTests$keyboardKeyObject(
					$author$project$KeyboardKey$CharacterKey('6')),
				A2(
					$avh4$elm_program_test$ProgramTest$ensureViewHas,
					_List_fromArray(
						[
							$elm_explorations$test$Test$Html$Selector$id('key-5'),
							$elm_explorations$test$Test$Html$Selector$text('')
						]),
					A3(
						$avh4$elm_program_test$ProgramTest$simulateIncomingPort,
						'keyup',
						$author$project$Page$SolfegePageTests$keyboardKeyObject(
							$author$project$KeyboardKey$CharacterKey('5')),
						A2(
							$avh4$elm_program_test$ProgramTest$ensureViewHas,
							_List_fromArray(
								[
									$elm_explorations$test$Test$Html$Selector$id('key-5'),
									$elm_explorations$test$Test$Html$Selector$text('Fa')
								]),
							A3(
								$avh4$elm_program_test$ProgramTest$simulateIncomingPort,
								'keydown',
								$author$project$Page$SolfegePageTests$keyboardKeyObject(
									$author$project$KeyboardKey$CharacterKey('5')),
								A2($author$project$Page$SolfegePageTests$startProgramForTesting, 'http://www.mysolfegeapp.com', _Utils_Tuple0)))))));
	});
var $author$project$Page$SolfegePageTests$testPageHasScaleNoteSelector = A2(
	$elm_explorations$test$Test$test,
	'pageHasScaleNoteSelector',
	function (_v0) {
		return A2(
			$avh4$elm_program_test$ProgramTest$expectViewHas,
			A2(
				$elm$core$List$map,
				$author$project$Page$SolfegePageTests$getScaleNoteSelector,
				A2($elm$core$List$range, 0, 11)),
			A2($author$project$Page$SolfegePageTests$startProgramForTesting, 'http://www.mysolfegeapp.com', _Utils_Tuple0));
	});
var $author$project$Page$SolfegePageTests$testPageHasScaleTypeSelector = A2(
	$elm_explorations$test$Test$test,
	'pageHasScaleTypeSelector',
	function (_v0) {
		return A2(
			$avh4$elm_program_test$ProgramTest$expectViewHas,
			A2(
				$elm$core$List$map,
				$author$project$Page$SolfegePageTests$getScaleTypeSelector,
				A2($elm$core$List$range, 0, 6)),
			A2($author$project$Page$SolfegePageTests$startProgramForTesting, 'http://www.mysolfegeapp.com', _Utils_Tuple0));
	});
var $author$project$Page$SolfegePageTests$testPageHasTwelveKeys = A2(
	$elm_explorations$test$Test$test,
	'pageHasTwelveKeys',
	function (_v0) {
		return A2(
			$avh4$elm_program_test$ProgramTest$expectViewHas,
			A2(
				$elm$core$List$map,
				$author$project$Page$SolfegePageTests$getKeySelector,
				A2($elm$core$List$range, 0, 11)),
			A2($author$project$Page$SolfegePageTests$startProgramForTesting, 'http://www.mysolfegeapp.com', _Utils_Tuple0));
	});
var $author$project$Page$SolfegePageTests$testPressKeyOnModel = A2(
	$elm_explorations$test$Test$test,
	'pressesKeyOnModel',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			$elm$core$Maybe$Just(true),
			A2(
				$elm$core$Dict$get,
				5,
				A2(
					$author$project$Page$SolfegePage$pressKeyOnModel,
					$author$project$Page$SolfegePageTests$stubPageModel.a,
					_Utils_Tuple2($author$project$Note$D, 4)).isKeyPressed));
	});
var $elm_explorations$test$Test$Html$Query$Internal$multipleToExpectation = F2(
	function (_v0, check) {
		var query = _v0.b;
		var _v1 = $elm_explorations$test$Test$Html$Query$Internal$traverse(query);
		if (_v1.$ === 'Ok') {
			var list = _v1.a;
			return check(list);
		} else {
			var error = _v1.a;
			return $elm_explorations$test$Expect$fail(
				A2($elm_explorations$test$Test$Html$Query$Internal$queryErrorToString, query, error));
		}
	});
var $elm_explorations$test$Test$Html$Query$count = F2(
	function (expect, multiple) {
		var showTrace = multiple.a;
		var query = multiple.b;
		return A2(
			$elm_explorations$test$Test$Html$Query$Internal$multipleToExpectation,
			multiple,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$length,
				A2(
					$elm$core$Basics$composeR,
					expect,
					A3($elm_explorations$test$Test$Html$Query$Internal$failWithQuery, showTrace, 'Query.count', query))));
	});
var $elm_explorations$test$Test$Html$Query$Internal$FindAll = function (a) {
	return {$: 'FindAll', a: a};
};
var $elm_explorations$test$Test$Html$Query$Internal$Multiple = F2(
	function (a, b) {
		return {$: 'Multiple', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Query$findAll = F2(
	function (selectors, _v0) {
		var showTrace = _v0.a;
		var query = _v0.b;
		return A2(
			$elm_explorations$test$Test$Html$Query$Internal$Multiple,
			showTrace,
			A2(
				$elm_explorations$test$Test$Html$Query$Internal$prependSelector,
				query,
				$elm_explorations$test$Test$Html$Query$Internal$FindAll(selectors)));
	});
var $author$project$Page$SolfegePageTests$testRenderKeysRendersTheCorrectNumberOfKeys = A2(
	$elm_explorations$test$Test$test,
	'renderKeysRendersTheCorrectNumberOfKeys',
	function (_v0) {
		return A2(
			$elm_explorations$test$Test$Html$Query$count,
			$elm_explorations$test$Expect$equal(3),
			A2(
				$elm_explorations$test$Test$Html$Query$findAll,
				_List_fromArray(
					[
						$elm_explorations$test$Test$Html$Selector$class('key')
					]),
				$elm_explorations$test$Test$Html$Query$fromHtml(
					A2(
						$author$project$Page$SolfegePage$renderKeys,
						A3($author$project$Page$SolfegePage$Model, $elm$core$Dict$empty, 0, $author$project$Scale$default),
						3))));
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$ScaleTests$testScaleGetsCorrectNotes = A2(
	$elm_explorations$test$Test$describe,
	'Scales get correct notes',
	_List_fromArray(
		[
			A2(
			$elm_explorations$test$Test$test,
			'cChromaticScaleHasTheRightNotes',
			function (_v0) {
				return A2(
					$elm_explorations$test$Expect$equal,
					A2($elm$core$List$range, 3, 15),
					$author$project$Scale$notes(
						_Utils_Tuple2($author$project$Note$C, $author$project$Scale$Chromatic)));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'eMinorScaleHasTheRightNotes',
			function (_v1) {
				return A2(
					$elm_explorations$test$Expect$equal,
					_List_fromArray(
						[7, 9, 10, 12, 14, 15, 17]),
					$author$project$Scale$notes(
						_Utils_Tuple2($author$project$Note$E, $author$project$Scale$Minor)));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'gSharpMajorScaleHasTheRightNotes',
			function (_v2) {
				return A2(
					$elm_explorations$test$Expect$equal,
					_List_fromArray(
						[11, 13, 15, 16, 18, 20, 22]),
					$author$project$Scale$notes(
						_Utils_Tuple2($author$project$Note$GSharp, $author$project$Scale$Major)));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'bDorianHasARaisedSixth',
			function (_v3) {
				return A2(
					$elm_explorations$test$Expect$equal,
					$elm$core$Maybe$Just(11),
					$elm$core$List$head(
						$elm$core$List$reverse(
							A2(
								$elm$core$List$take,
								6,
								$author$project$Scale$notes(
									_Utils_Tuple2($author$project$Note$B, $author$project$Scale$Dorian))))));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'ePhrygianHasAFlatTwo',
			function (_v4) {
				return A2(
					$elm_explorations$test$Expect$equal,
					$elm$core$Maybe$Just(8),
					$elm$core$List$head(
						$elm$core$List$reverse(
							A2(
								$elm$core$List$take,
								2,
								$author$project$Scale$notes(
									_Utils_Tuple2($author$project$Note$E, $author$project$Scale$Phrygian))))));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'cSharpLydianHasARaisedFourth',
			function (_v5) {
				return A2(
					$elm_explorations$test$Expect$equal,
					$elm$core$Maybe$Just(10),
					$elm$core$List$head(
						$elm$core$List$reverse(
							A2(
								$elm$core$List$take,
								4,
								$author$project$Scale$notes(
									_Utils_Tuple2($author$project$Note$CSharp, $author$project$Scale$Lydian))))));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'DMixolydianHasAFlatSeven',
			function (_v6) {
				return A2(
					$elm_explorations$test$Expect$equal,
					$elm$core$Maybe$Just(15),
					$elm$core$List$head(
						$elm$core$List$reverse(
							A2(
								$elm$core$List$take,
								7,
								$author$project$Scale$notes(
									_Utils_Tuple2($author$project$Note$D, $author$project$Scale$Mixolydian))))));
			})
		]));
var $author$project$Page$SolfegePageTests$testShowTextShowsAlternateTextWhenFalse = A2(
	$elm_explorations$test$Test$test,
	'showTextShowsAlternateTextWhenFalse',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			'Alternative text',
			A3($author$project$Page$SolfegePage$showText, 'Here\'s some text', 'Alternative text', false));
	});
var $author$project$Page$SolfegePageTests$testShowTextShowsTextWhenTrue = A2(
	$elm_explorations$test$Test$test,
	'showTextShowsTextWhenTrue',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			'Here\'s some text',
			A3($author$project$Page$SolfegePage$showText, 'Here\'s some text', 'Alternative text', true));
	});
var $author$project$SolfegeTests$testSolfegeGets = A2(
	$elm_explorations$test$Test$test,
	'getsSolfege',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			_List_fromArray(
				[$author$project$Solfege$Do, $author$project$Solfege$Di, $author$project$Solfege$Re, $author$project$Solfege$Me, $author$project$Solfege$Mi, $author$project$Solfege$Fa, $author$project$Solfege$Fi, $author$project$Solfege$Sol, $author$project$Solfege$Le, $author$project$Solfege$La, $author$project$Solfege$Te, $author$project$Solfege$Ti, $author$project$Solfege$Do, $author$project$Solfege$Di, $author$project$Solfege$Re, $author$project$Solfege$Me]),
			A2(
				$elm$core$List$map,
				$author$project$Solfege$fromInt,
				A2($elm$core$List$range, 0, 15)));
	});
var $author$project$SolfegeTests$testSolfegeGetsNames = A2(
	$elm_explorations$test$Test$test,
	'solfegeGetsNames',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			_List_fromArray(
				['Do', 'Di', 'Re', 'Me', 'Mi', 'Fa', 'Fi', 'Sol', 'Le', 'La', 'Te', 'Ti', 'Do', 'Di', 'Re', 'Me']),
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, $author$project$Solfege$fromInt, $author$project$Solfege$toString),
				A2($elm$core$List$range, 0, 15)));
	});
var $author$project$NoteTests$testToIntAndFromIntAreInverses = A2(
	$elm_explorations$test$Test$test,
	'toIntAndFromIntAreInverses',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2($elm$core$List$range, 0, 30),
			A2(
				$elm$core$List$map,
				$author$project$Note$toInt,
				A2(
					$elm$core$List$map,
					$author$project$Note$fromInt,
					A2($elm$core$List$range, 0, 30))));
	});
var $author$project$NoteTests$testToIntHandlesOctaves = A2(
	$elm_explorations$test$Test$test,
	'testToIntHandlesOctaves',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			_List_fromArray(
				[0, 3]),
			A2(
				$elm$core$List$map,
				$author$project$Note$toInt,
				_List_fromArray(
					[
						_Utils_Tuple2($author$project$Note$A, 3),
						_Utils_Tuple2($author$project$Note$C, 4)
					])));
	});
var $author$project$Test$Generated$Main$main = A2(
	$author$project$Test$Runner$Node$run,
	{
		globs: _List_Nil,
		paths: _List_fromArray(
			['C:\\Users\\cmsdu\\repos\\solfeger\\tests\\KeyboardKeyTests.elm', 'C:\\Users\\cmsdu\\repos\\solfeger\\tests\\NoteTests.elm', 'C:\\Users\\cmsdu\\repos\\solfeger\\tests\\Page\\SolfegePageTests.elm', 'C:\\Users\\cmsdu\\repos\\solfeger\\tests\\ScaleTests.elm', 'C:\\Users\\cmsdu\\repos\\solfeger\\tests\\SolfegeTests.elm']),
		processes: 12,
		report: $author$project$Test$Reporter$Reporter$ConsoleReport($author$project$Console$Text$UseColor),
		runs: 100,
		seed: 8185938298568
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			'KeyboardKeyTests',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$KeyboardKeyTests$stub)
				])),
			_Utils_Tuple2(
			'NoteTests',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$NoteTests$testIntToString),
					$author$project$Test$Runner$Node$check($author$project$NoteTests$testToIntHandlesOctaves),
					$author$project$Test$Runner$Node$check($author$project$NoteTests$testToIntAndFromIntAreInverses)
				])),
			_Utils_Tuple2(
			'Page.SolfegePageTests',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$testPageHasTwelveKeys),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$testPageHasScaleNoteSelector),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$testPageHasScaleTypeSelector),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$testKeyClickDisplaysSolfege),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$testKeyboardKeyPressDisplaysSolfege),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$testRenderKeysRendersTheCorrectNumberOfKeys),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$testPressKeyOnModel),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$testKeyRenders),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$testShowTextShowsTextWhenTrue),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$testShowTextShowsAlternateTextWhenFalse),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$stubInitModel),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$stubPageModel),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$getKeySelector),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$getScaleTypeSelector),
					$author$project$Test$Runner$Node$check($author$project$Page$SolfegePageTests$getScaleNoteSelector)
				])),
			_Utils_Tuple2(
			'ScaleTests',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$ScaleTests$testScaleGetsCorrectNotes),
					$author$project$Test$Runner$Node$check($author$project$ScaleTests$testKeyClickHandlesHighDo),
					$author$project$Test$Runner$Node$check($author$project$ScaleTests$testGetsAbsoluteStringFromValidKeyboardKey),
					$author$project$Test$Runner$Node$check($author$project$ScaleTests$testGetsAbsoluteStringFromHighDo),
					$author$project$Test$Runner$Node$check($author$project$ScaleTests$testGetsAbsoluteStringReturnsErrorForNonKey),
					$author$project$Test$Runner$Node$check($author$project$ScaleTests$testGetsSolfegeFromNoteAndScale),
					$author$project$Test$Runner$Node$check($author$project$ScaleTests$testGetsSolfegeAgreesWithFromInt)
				])),
			_Utils_Tuple2(
			'SolfegeTests',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$SolfegeTests$testSolfegeGets),
					$author$project$Test$Runner$Node$check($author$project$SolfegeTests$testSolfegeGetsNames)
				]))
		]));
_Platform_export({'Test':{'Generated':{'Main':{'init':$author$project$Test$Generated$Main$main($elm$json$Json$Decode$int)(0)}}}});}(this));
return this.Elm;
})({});
var pipeFilename = "\\\\.\\pipe\\elm_test-33712-1";
var net = require('net'),
  client = net.createConnection(pipeFilename);

client.on('error', function (error) {
  console.error(error);
  client.end();
  process.exit(1);
});

client.setEncoding('utf8');
client.setNoDelay(true);

// Run the Elm app.
var app = Elm.Test.Generated.Main.init({ flags: Date.now() });

client.on('data', function (msg) {
  app.ports.elmTestPort__receive.send(JSON.parse(msg));
});

// Use ports for inter-process communication.
app.ports.elmTestPort__send.subscribe(function (msg) {
  // We split incoming messages on the socket on newlines. The gist is that node
  // is rather unpredictable in whether or not a single `write` will result in a
  // single `on('data')` callback. Sometimes it does, sometimes multiple writes
  // result in a single callback and - worst of all - sometimes a single read
  // results in multiple callbacks, each receiving a piece of the data. The
  // horror.
  client.write(msg + '\n');
});