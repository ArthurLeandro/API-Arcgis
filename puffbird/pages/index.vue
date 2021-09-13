<template>
	<section>
		<div class="job">
			<p class="job__title"></p>
			<p class="job__description">
				Pode ser feito individual ou em dupla.
<br><br>
Utilizar a sequencia de HTMLs disponibilizado na aula de 09/09 e criar uma aplicação WEB que contenha:
<br><br>
- No mínimo 3 camadas de dados (obtidas através de alguma IDE- Infraestrutura de dados espaciais) via webservice (WMS)
<br><br>
- No mínimo 1 camada WMS obtida do IBGE 
<br><br>
- Realizar, no mínimo 3 funcionalidades (ou grupos de funcionalidades) através da incorporação de WIDGETS
<br><br>
			</p>
		</div>
	</section>
</template>

<script>
export default {
	layout:'desktop'
}
</script>

<style scoped>
.job{
	display:flex;
	justify-content: center;
}

.job__title{

}

.job__description{
	text-align:center;
	padding: 4rem;
}
</style>