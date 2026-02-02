import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'API Inventari',
      version: '1.0.0',
      description: "Documentació de l'API d'inventari",
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],

    // 🔐 AÇÒ ÉS EL QUE FALTAVA
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },

    // ❌ NO poses security global
  },

  apis: [
    './src/routes/*.js',
    './src/docs/*.openapi.js',
  ],
});
