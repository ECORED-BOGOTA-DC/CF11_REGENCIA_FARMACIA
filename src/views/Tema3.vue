<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Registros y formatos
    .row.bg-c8.mb-5
      .col-12
        .px-5
          p.mt-4(data-aos="fade-down") Cuando se recibe devolución de un producto durante los procesos de recepción y distribución intrahospitalaria, se deben llevar registros que, como mínimo, incluyan la siguiente información:
          .row.align-items-center.mb-4
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img2.svg', style="width:380px").m-auto
            .col-lg-7(data-aos="fade-left")
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-atom(style="color:#FF9D00")
                  | Nombre del producto, concentración (para los medicamentos), forma farmacéutica, número de lote, fecha de caducidad o vencimiento.
                li 
                  i.fas.fa-atom(style="color:#FF9D00")
                  | Cantidad recibida frente a cantidad enviada.
                li 
                  i.fas.fa-atom(style="color:#FF9D00")
                  | Nombre, Nit, teléfono y dirección del proveedor.
                li 
                  i.fas.fa-atom(style="color:#FF9D00")
                  | Valoración de los contenedores por daños o contaminación.
                li 
                  i.fas.fa-atom(style="color:#FF9D00")
                  | Tiempo consumido durante el transporte.
                li 
                  i.fas.fa-atom(style="color:#FF9D00")
                  | Registro de temperatura, sobre todo para los refrigerados.
                li 
                  i.fas.fa-atom(style="color:#FF9D00")
                  | Comprobar que las condiciones de almacenamiento y de transporte, determinadas por el fabricante del medicamento, se cumplieron.
                li 
                  i.fas.fa-atom(style="color:#FF9D00")
                  | Causa de la devolución.
          .row.justify-content-center
            .col-lg-10
              .bloque-texto-a.color-secundario.p-4.mb-5(data-aos="fade-right")
                .row.m-0.align-items-center.justify-content-between
                  .col-lg-9.mb-4.mb-lg-0
                    .bloque-texto-a__texto.p-4
                      p Las devoluciones por próximos vencimientos, se registran en el formato entregado por el proveedor de dicho producto. La siguiente figura 1 es un ejemplo de un formato de registro de devoluciones.
                  .col-lg-3
                    figure
                      img(src='@/assets/curso/tema3/img3.svg', style="width:300px").m-auto
              .titulo-sexto.color-secundario(data-aos="fade-up")
                p.mb-0 #[b Figura 1]. Ejemplo reporte de devolución
              figure.mb-5(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img4.svg').m-auto
                figcaption.mt-3 Nota. SENA (2021).
              .row.align-items-center.mb-5(data-aos="fade-rigth")
                .col-lg.mb-4.mb-lg-0
                  .bg-c7
                    figure
                      img(src='@/assets/curso/tema3/img1.png', style="width:auto").m-auto
                .col-lg-9
                  .bg-c9
                    .p-4
                      p.mb-0 En el caso de la distribución intrahospitalaria, #[b el Químico Farmacéutico con aprobación del comité de farmacia y terapéutica (COFYTE)], definirá la información que se debe registrar en el formato de devoluciones. La siguiente figura 2 es un ejemplo de un formato de registro de devoluciones intrahospitalarias:
              .titulo-sexto.color-secundario(data-aos="fade-down")
                p.mb-0 #[b Figura 2]. Ejemplo formato registro de devoluciones intrahospitalarias
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img5.svg').m-auto
                figcaption.mt-3 Nota. SENA (2021).

</template>

<script>
export default {
  name: 'Tema3',
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
