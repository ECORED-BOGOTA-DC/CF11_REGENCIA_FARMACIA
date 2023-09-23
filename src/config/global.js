export default {
  global: {
    componenteFormativo: 'Devolución de productos farmacéuticos',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos de la competencia recibir mercancía según los procedimientos técnicos, referentes a la devolución de productos farmacéuticos, con el fin que los aprendices reconozcan la importancia del procedimiento en garantizar la calidad de los productos y su impacto en la minimización de pérdidas económicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Devolución de productos farmacéuticos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procedimiento para las devoluciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Registros y formatos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Métodos de control',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Procedimiento de devoluciones',
      referencia:
        'Farmacéuticos. (2018). <em>¿Por qué no podemos devolver los medicamentos a la farmacia?</em>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=AFR9xbKe1mI&ab_channel=Farmac%C3%A9uticos',
    },
    {
      tema: 'Procedimiento de devoluciones',
      referencia:
        'García, Y. (2017). <em>Devolución de medicamentos HMUA.</em>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=laVQ-CKXE98&ab_channel=YesidAndresGarciaV',
    },
  ],
  glosario: [
    {
      termino: 'Alteración',
      significado:
        'cambio de las características, la esencia, o la forma de una cosa.',
    },
    {
      termino: 'Distribución intrahospitalaria',
      significado:
        'es la distribución que se da dentro de un hospital o clínica y comprende: una prescripción médica a un paciente, una entrega de productos farmacéuticos a la enfermera, administración correcta de los medicamentos, registro de los medicamentos administrados y/o la devolución debidamente sustentada de los no administrados.',
    },
    {
      termino: 'Distribución externa',
      significado:
        'se genera cuando los laboratorios fabricantes o distribuidores mayoristas, le venden productos a los minoristas. O cuando un servicio farmacéutico le vende un producto a un cliente.',
    },
    {
      termino: 'Incumplimiento',
      significado:
        'no hacer aquello que determina una obligación, una ley, una orden, un castigo, un compromiso, una promesa.',
    },
    {
      termino: 'Estándar de calidad',
      significado:
        'conjunto de propiedades inherentes a una cosa que permite caracterizarla y valorarla con respecto a las restantes de su especie.',
    },
    {
      termino: 'Reacción adversa',
      significado:
        'es toda aquella respuesta nociva, no deseada y no intencionada, que se produce tras la administración de un fármaco, con dosis utilizadas habitualmente en la especie humana, para prevenir, diagnosticar o tratar una enfermedad.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'serie de procedimientos que permiten seguir el proceso de evolución de un producto en cada una de sus etapas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Jefatura del Estado. (2006). <em>Ley 29/2006, de 26 de julio, de garantías y uso racional de los medicamentos y productos sanitarios</em>. Boletín Oficial del Estado.',
      link:
        'https://www.boe.es/buscar/pdf/2006/BOE-A-2006-13554-consolidado.pdf',
    },
    {
      referencia:
        'Enfarma. (2021). <em>Manejo de devoluciones de productos farmacéuticos</em>.',
      link:
        'https://enfarma.lat/index.php/articulos/7-manejo-de-devoluciones-de-productos-farmaceuticos',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo:
            'Diseñadora Instruccional - Revisora Metodológica y Pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollo fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
