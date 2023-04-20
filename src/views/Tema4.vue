<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Métodos de control
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Los productos farmacéuticos, destinados a devolución, deben ser llevados al área de cuarentena II negra, la cual debe ser lo suficientemente grande para garantizar el almacenamiento de los diferentes productos y la conservación de los mismos; por lo tanto, debe permanecer limpia, seca, con buena iluminación, mantener la temperatura requerida, con separadores para las diferentes causas de devolución y alejada de los factores ambientales que deterioran los productos. Esta área debe estar inventariada y los productos deben permanecer debidamente señalizados mientras la persona calificada o responsable, los recoge.
        .cajon.color-primario.p-4
          p.mb-0 Dentro del control de las devoluciones, también se tiene en cuenta el transporte de las mismas; por lo general, los proveedores son los que recogen y transportan los productos devueltos y esto con el fin de garantizar que el manejo y manipulación no ponga en riesgo la calidad de los mismos. En definitiva, quien se encargue del transporte, debe asegurarse que los productos en devolución permanezcan dentro de los perfiles de temperatura determinados por el fabricante, de manera que estos puedan ser devueltos al inventario de forma segura, en caso tal que esa sea la decisión final.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img1.svg', style="width:380px").m-auto
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4(data-aos="fade-right")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img2.svg', style="width:300px").m-auto
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p Las devoluciones por próximos vencimientos, se registran en el formato entregado por el proveedor de dicho producto. La siguiente figura 1 es un ejemplo de un formato de registro de devoluciones.

</template>

<script>
export default {
  name: 'Tema4',
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
