


function Dictionary(){
	var items = {};

	this.has = function(key){
		return key in items;
	}

	this.set = function(key,valye){
		items[key] = value;
	}

	this.remove = function(key){
		if(this.has(key)){
			delete items[key];
			return true;
		}
		return false;
	}

	this.get = function(key){
		return this.has(key) ? items[key]:undefined;
	}
	this.values = function(){
		var values = [];
		for(var k in items){
			values.push(items[k]);
		}
		return values;
	}
	this.size = function(){
		return Object.keys(items).length;
	}
	this.clear = function(){
		items = {};
		return true;
	}

	this.valusLegacy = function(){
		var keys = [];
		for(var k in items){
			keys.push(k);
		}
		return keys;
	}
}