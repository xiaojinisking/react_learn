const fs = require('fs');  //加载系统模块

const result = fs.readFile('./06_fs.js', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data.toString());
	}
})

console.log(result);	//此处是无法拿到值都，因为是异步的，结果在回调函数中