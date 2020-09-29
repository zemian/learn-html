<template>
	<div class="section">
		<h1 class="title">Buefy UI Component Tester</h1>
		<div>
			<UiTest></UiTest>
		</div>
	</div>
</template>

<script>
// This main App.vue will load other component for testing

import UiTest from './UiTest'

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default {
	components: {
		UiTest
	}
}
</script>