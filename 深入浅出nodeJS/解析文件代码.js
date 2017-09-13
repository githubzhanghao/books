


var extensions = require.extensions;
// console.log(extensions);
// console.log('--------');
// console.log(extensions['.js'].toString());//解析js的方法

require.extensions['.a'] = function(module,filename){ //增加解析 自定义模块的方法（官方不建议）

	var content = require('fs').readFileSync(filename,'utf8');
	console.log(module._compile.toString());
}

require('./aaa.a');