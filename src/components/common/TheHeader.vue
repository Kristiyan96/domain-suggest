<template>
	<nav class="navbar" :class="{inverted: isInverted}" role="navigation" aria-label="main navigation">
	  <div class="navbar-brand">
	    <router-link to="/" class="navbar-item brand">Moonhythe</router-link>

	    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
	      <span aria-hidden="true"></span>
	      <span aria-hidden="true"></span>
	      <span aria-hidden="true"></span>
	    </a>
	  </div>

	  <div id="navbarBasicExample" class="navbar-menu">


	    <div class="navbar-end">
	      <div class="navbar-item">
	        <div class="buttons">
	          <router-link to="/blog" class="button is-rounded">Blog</router-link>
	        </div>
	      </div>
	    </div>
	  </div>
	</nav>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="scss">
  nav {
    position: absolute;
    width: 100%;

    .brand {
      font-weight: bold;
    }
  }
</style>