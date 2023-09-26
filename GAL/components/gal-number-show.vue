<template>
	<view class="gal-flex gal-rows gal-nowrap gal-align-items-end"
	:style="{
		'justify-content':direction
	}">
		<view><slot></slot></view>
		<view class="gal-number-show-item" 
		v-for="(item, idx) in numberIn" 
		:style="styles">{{item}}</view>
	</view>
</template>
<script>
export default{
	props:{
		styles : {
			type : String,
			default:''
		},
		number : {
			type : Number,
			default:900
		},
		step : {
			type : Number,
			default:30
		},
		speed : {
			type : Number,
			default:50
		},
		direction : {
			type : String,
			default:'flex-start'
		}
	},
	data() {
		return {
			numberIn : [],
			pointBit : 0,
			stepAdd  : 0
		}
	},
	created:function(){
		this.getPointBit();
		this.play(1);
	},
	methods:{
		play : function (step) {
			var number = this.stepAdd * step;
			if(this.pointBit > 0){
				number = this.jsFloatNU(number);
			}
			if(number >= this.number){
				number = this.number;
				this.show(number);
				return ;
			}
			this.show(number);
			setTimeout(()=>{
				this.play(step+1);
			}, this.speed);
		},
		getPointBit : function(){
			if(this.number.toString().indexOf('.') != -1){
				// 记录小数点及位数
				var numberArr = this.number.toString().split('.');
				this.pointBit = numberArr[1].length;
				this.stepAdd  = this.number / this.step;
				this.stepAdd  = Math.round(this.stepAdd*100)/100;
				this.stepAdd  = this.jsFloatNU(this.stepAdd);
			}else{
				this.pointBit = 0;
				this.stepAdd  = this.number / this.step;
				this.stepAdd  = parseInt(this.stepAdd);
			}
			
			
		},
		show : function (number) {
			this.numberIn = number.toString().split('');
		},
		jsFloatNU : function(val){
			var valArr = String(val).split('.');
			if(!valArr[1]){
				return val;
			}
			if(valArr[1].length > this.pointBit){
				valArr[1] = valArr[1].substr(0, this.pointBit);
				val = Number(valArr.join('.'));
				return val;
			}
			return val;
		}
	}
}
</script>
<style scoped>
</style>
