<template>
	<view class="w-100" >
		<view class="input" @click="show = true" >
		 	<view :class="['text',{color:modelValue!=''}]">{{ text || "请选择" }}</view>
		
			<view class="icon">
				<up-icon name="arrow-right"></up-icon>
			</view>
		</view>
		<up-picker 
			:show="show" 
			:columns="[options]"
			keyName="label"
			@confirm="select"
			@cancel="show = false"
		></up-picker>
	</view>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const proos = defineProps<{
	modelValue: string
	options: Array<Object>
}>()
const emit = defineEmits(["update:modelValue"])

const show = ref(false);
const text = computed(()=>{
	return proos.options.find(a=>a.value === proos.modelValue)?.label || ""
})
const select = (data:{value:any}) =>{
	emit("update:modelValue", data.value[0].value)
	show.value = false;
}
</script>

<style scoped lang="scss">
.input{
	position: relative;
	font: inherit;
	color: #bbb;
	height: 48rpx;
	line-height: 48rpx;
	text-align: left;
	.text{
		width: calc(100% - 45rpx);
		overflow-x: auto;
		white-space: nowrap;
	}
	.icon{
		position: absolute;
		right: 0;
		top: 6rpx;
	}
	.color{
		color: #303133;
	}
}
</style>