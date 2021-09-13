<template>
	<section>
		<div class="about">
			<div class="about__students">
				<p class="about__students--name">
					Arthur Santos Leandro
				</p>
				<ul class="about__students--social">
					<li class="about__students--social-item">
						<a class="about__students--link" href="" target="_blank" >LinkedIn</a>
					</li>
					<li class="about__students--social-item">
						<a class="about__students--link" href="" target="_blank" >GitHub</a>
					</li>
				</ul>
			</div>
			<div class="about__students">
				<p class="about__students--name">
					Larissa Domingues 	
				</p>
				<ul class="about__students--social">
					<li class="about__students--social-item">
						<a class="about__students--link" href="" target="_blank" >LinkedIn</a>
					</li>
					<li class="about__students--social-item">
						<a class="about__students--link" href="" target="_blank" >GitHub</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	layout: "desktop"
}
</script>
<style scoped>
.about{
	display:flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.about__students{
	margin:2em;
}

.about__students--name{
	text-transform:uppercase;
	text-align:center;
}

.about__students--social{
	display:flex;
}

.about__students--social-item{
	flex:1;
	margin:0.5em;
	padding:0.5em;
}

li {
	list-style:none;
	text-decoration:none;
}

.about__students--link{
	color:black;
	text-decoration:none;
}

a {
	transition: border-bottom .2s;
}


a:hover{
	border-bottom:3px solid var(--secondary);
}

</style>
