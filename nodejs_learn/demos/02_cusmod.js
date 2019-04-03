console.log('This is a module');

const testVar = 100;

function test() {
	console.log(testVar*2);
}

module.exports.testVar = testVar;	//对外暴露属性
module.exports.testFun = test;		//对外暴露函数