<template>
	<view class="">
		
		<!-- <div>
		   <h1 :style="`color: ${'#8f8f94'}`">Count: {{ counter.count }}</h1>
		   <button @click="counter.increment">Increment</button>
		   <button @click="counter.decrement">Decrement</button>
		 </div> -->
		
		 <up-button type="primary" text="测试" @click="getToken"></up-button>
	
		 <hr>
		 <up-button type="success" text="去分包页面one" @click="goOne"></up-button>

		 <!-- <ws-text /> -->
	</view>
</template>

<script setup lang="uts">
import { ref } from 'vue'
import { useCounterStore } from '@/store/useCounterStore';
import { requestLogin, requestUserInfo } from '@/api/index'

const counter = useCounterStore();

// 测试
const getToken = async () => {
	let res = await requestLogin({
		account:"",
		password:"",
	})
	console.log('res', res)
}

const goOne = () => {
	uni.navigateTo({
		url: '/pagesA/one/one'
	})
}
</script>

<style>

</style>
