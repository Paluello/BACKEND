"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::security',
    'strapi::errors',
    {
        name: 'strapi::cors',
        config: {
            enabled: true,
            origin: ['http://localhost:3000'],
            headers: ['Origin', 'Content-Type', 'Accept', 'Authorization'],
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
