<template lang="html">
  <footer class="footer">
		<div class="footer-bottom">
			<div class="container">
				<div class="row">
					<div class="col-md-6 footer-text-left">
						<p>Built with &nbsp; <i class="fa fa-heart heart"></i>&nbsp; on top of <a href="https://nuxtjs.org/" target="_blank">&nbsp;NuxtJS</a></p>
					</div>
					<div class="col-md-6 footer-menu text-right">
						<ul class="list-inline">
							<li><nuxt-link to="/">About</nuxt-link></li>
							<li><nuxt-link to="/Portfolio">My Projects</nuxt-link></li>
							<li><nuxt-link to="/Music">My Music</nuxt-link></li>
							<li><nuxt-link to="/Contact">Contact</nuxt-link></li>
              <li><a href="#home"><i class="fa fa-arrow-up"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style lang="css" scoped>
.heart {
  color: red;
}

.footer-text-left p {
  margin: 20px auto 8px;
}

.footer-text-left a {
  margin: 0;
}

.text-right a {
  margin-top: 14px;
}

.text-right i {
  font-size: 18px;
}
</style>
