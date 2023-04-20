<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img1.png', style="width:350px").m-auto
            .col-lg-8(data-aos="fade-left")
              .cajon.color-primario.p-4.mb-4
                p.mb-0 Durante el proceso de recepción de medicamentos y dispositivos médicos, se pueden presentar situaciones, con los productos farmacéuticos, que obliguen al proveedor a llevar a cabo su devolución.
              p Mientras se gestiona dicha devolución, deben ser almacenados en el área de cuarentena II negra y marcados según sea el caso.
              p.mb-0 En este componente formativo, se abordarán diferentes temas relacionados con la devolución de productos farmacéuticos durante el proceso de recepción, con el fin de:
              .row.justify-content-around.mb-5
                .col-8.col-md-5.col-lg-3
                  .row
                    figure.fig-p1
                        img(src='@/assets/curso/intro/img2.svg', style="width:40px")
                    .col.px-5.pb-4.pt-2.bg-c2.shadow-sm
                      p.mb-0 Garantizar la calidad.
                .col-8.col-md-5.col-lg-3
                  .row
                    figure.fig-p1
                        img(src='@/assets/curso/intro/img3.svg', style="width:40px")
                    .col.px-5.pb-4.pt-2.bg-c2.shadow-sm
                      p.mb-0 Minimizar las pérdidas económicas.
                .col-8.col-md-5.col-lg-3
                  .row
                    figure.fig-p1
                        img(src='@/assets/curso/intro/img4.svg', style="width:40px")
                    .col.px-5.pb-4.pt-2.bg-c2.shadow-sm
                      p.mb-0 Evitar controversias entre cliente y proveedor.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
