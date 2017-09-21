/*	

	//node内部会将每个文件模块封装成这样，并将这几个参数传入
	(function(exports,require,module,__filename,__dirname){
		var math = require('math');
		exports = funnction(radius){
			return Math.PI * radius*radius;
		}
	})
*/

//展示出所有参数
//console.log(arguments);

/*
'0': {},
  '1': 
   { [Function: require]
     resolve: [Function: resolve],
     main: 
      Module {
        id: '.',
        exports: {},
        parent: null,
        filename: '/Users/niuxiaodong/Desktop/learn/Books/深入浅出nodeJS/显示参数.js',
        loaded: false,
        children: [],
        paths: [Object] },
     extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },
     cache: { '/Users/niuxiaodong/Desktop/learn/Books/深入浅出nodeJS/显示参数.js': [Object] } },
  '2': 
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: '/Users/niuxiaodong/Desktop/learn/Books/深入浅出nodeJS/显示参数.js',
     loaded: false,
     children: [],
     paths: 
      [ '/Users/niuxiaodong/Desktop/learn/Books/深入浅出nodeJS/node_modules',
        '/Users/niuxiaodong/Desktop/learn/Books/node_modules',
        '/Users/niuxiaodong/Desktop/learn/node_modules',
        '/Users/niuxiaodong/Desktop/node_modules',
        '/Users/niuxiaodong/node_modules',
        '/Users/node_modules',
        '/node_modules' ] },
  '3': '/Users/niuxiaodong/Desktop/learn/Books/深入浅出nodeJS/显示参数.js',
  '4': '/Users/niuxiaodong/Desktop/learn/Books/深入浅出nodeJS' }


*/