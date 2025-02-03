"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'strapi-advanced-uuid': {
        enabled: true,
        config: {
            contentTypes: {
                'api::vox.vox': {
                    field: 'uuid', // Campo UUID
                    type: 'uuidv4', // Tipo di UUID
                },
            },
        },
    },
};
