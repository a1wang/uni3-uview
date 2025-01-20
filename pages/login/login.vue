<template>
	<view>
		<up-button type="primary" text="登录" @click="login"></up-button>
	</view>
</template>

<script setup>
import { useSystemStore } from '@/store/system';
const login = () => {
	useSystemStore().setToken("already logged in")
	uni.switchTab({
		url: '/pages/index/index'
	});
}
</script>

<style>
	       
</style>
