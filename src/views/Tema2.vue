<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Procedimiento para las devoluciones
    .row.bg-c3.mb-5
      .col-12
        .px-5
          .row.align-items-center.mt-4
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img1.png', style="width:350px").m-auto
            .col-lg-9(data-aos="fade-left")
              .row
                .col-lg-11.bg-c4
                  .p-4
                    p.mb-0 Cada laboratorio fabricante, distribuidor minorista o mayorista, tiene sus propias políticas de devolución, a las cuales el cliente debe acogerse en el momento en que se cierra la negociación. Aún así, las razones más comunes por las cuales se pueden presentar las devoluciones de productos farmacéuticos son las siguientes:
    .row
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Más cantidad de lo solicitado y/o facturado") Se presenta en el proceso de recepción y distribución externa, y se da cuando un producto ingresa con una o más unidades de las solicitadas en la orden de compra.
          p(numero="2" titulo="Producto no solicitado en la orden de compra") Ocurre en el proceso de recepción y distribución externa, y se da cuando, dentro del pedido, se encuentra un producto que no fue solicitado en la orden de compra.
          p(numero="3" titulo="Precio diferente al pactado en la cotización") Se produce durante el proceso de recepción y distribución externa, y se da cuando el precio de un producto está por encima o por debajo, del precio pactado.
          p(numero="4" titulo="No cumplimiento de las condiciones técnicas del producto") Se presenta en el proceso de recepción y distribución externa, y se da cuando el producto presenta: fecha de vencimiento menor a un año, daño organoléptico, su empaque está mojado, envase reventado, sello de seguridad violado, sin registro sanitario, sin lote, etiqueta en mal estado, apariencia de producto adulterado o fraudulento, entre otras.
          p(numero="5" titulo="Producto con fecha de vencimiento próxima") Se produce en el proceso de almacenamiento. Se da cuando un producto tiene se fecha de caducidad muy próxima y esa fecha se encuentra dentro de los parámetros establecidos en la negociación con el proveedor. En el mayor de los casos, estos reciben devoluciones faltando de 4 a 6 meses para vencerse.
          p(numero="6" titulo="Devolución de medicamentos por parte del paciente, a la farmacia") Se lleva a cabo en el proceso de dispensación, y se da cuando un paciente o un cliente devuelve un medicamento al servicio farmacéutico, despues de este haber sido dispensado.
          p(numero="7" titulo="Devolución intrahospitalaria") Esta devolución presenta en el proceso de distribución intrahospitalaria. Se da cuando el servicio de enfermería de las áreas de urgencias, hospitalización, pediatría, entre otras, realizan una devolución de productos al servicio farmacéutico, ya sea por cambio de tratamiento, reacción adversa, salida del paciente, fallecimiento del paciente, etc.
      .col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img2.svg', style="width:480px").m-auto
    p Pruebas

</template>

<script>
export default {
  name: 'Tema2',
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
