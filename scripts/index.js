class PraiseButton{
	constructor(num,element){
		this.num = num;
		this.element = element;
	}
	clickAction(){
		this.element.click(() =>{
			if(this.num < 10){
				//变亮的处理
				this.element.css('-webkit-filter','grayscale(0)');
				$('#animation').addClass('num');//添加点击事件的动画效果
				this.num = add(this.num);//add方法要做单元测试，所以add要作出全局的
				setTimeout(function (argument) {
					// body...
					$('#animation').removeClass('num');
				},1000)
			}else{
				this.element.css('-webkit-filter','grayscale(1)');
				this.num = 0;
			}
			console.log(this.num)
		})
	}
}

class Thumb extends PraiseButton{
	constructor(num,element){
		super(num,element);
	}
}

//因为不能在这里new出来，而应该做成一个模块
//let f = new Thumb(0,$('#thumb'));
//f.clickAction()

export default{Thumb}