<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El proceso de recepción de productos farmacéuticos implica la aplicación de procedimientos técnicos que permitan garantizar la calidad de los medicamentos y dispositivos médicos y con esto evitar devoluciones de los mismos, lo que redunda en la prevención de pérdidas económicas y evitar inconvenientes con los proveedores y lo que sería más grave aún con el cliente final que para este caso es el usuario quien requiere de un producto de excelente calidad ya que se está hablando de su salud. Por lo anterior este componente formativo abordó los diferentes temas relacionados con la devolución de productos farmacéuticos durante el proceso de recepción, dichos temas se observan a través del siguiente esquema:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
