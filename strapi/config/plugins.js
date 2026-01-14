module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'amazon-ses',
            providerOptions: {
                region: env('AWS_REGION'),
                key: env('AWS_ACCESS_KEY_ID'),
                secret: env('AWS_SECRET_ACCESS_KEY'),
                amazon: env('SES_ENDPOINT'),
            },
            settings: {
                defaultFrom: env('EMAIL_FROM'),
                defaultReplyTo: env('EMAIL_REPLY_TO'),
            },
        },
    },
});
