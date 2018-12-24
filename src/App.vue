<template>
  <div id="app">
  	<the-header/>
    <router-view/>
    <the-footer/>
  </div>
</template>

<script>
	import TheHeader from '@/components/common/TheHeader.vue'
	import TheFooter from '@/components/common/TheFooter'

export default {
  name: 'App',
  components: { TheHeader, TheFooter }
}
</script>

<style>

</style>
