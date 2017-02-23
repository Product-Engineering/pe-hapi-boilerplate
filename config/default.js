// Generic
exports.AUTH_COOKIE_PASSWORD = 'ba36fedd-2b65-47e2-aeba-103345d83334';
exports.INSTAGRAM_COOKIE_PASSWORD = 'e7757be4-dea2-4a9d-a824-2190fefbbb78';
exports.STRIPE_COOKIE_PASSWORD = '136599c9-f24e-461a-803f-c252469ad2c1';
// App Level
exports.DB_ROOT = process.env.DB_ROOT || ''
exports.API_ROOT = process.env.API_ROOT || ''
exports.WEB_CLIENT_ROOT = process.env.WEB_CLIENT_ROOT || 'http://0.0.0.0:3000'
exports.SERVER_REQ_TOKEN = process.env.SERVER_REQ_TOKEN || '';
exports.FAVICON_ASSET = process.env.FAVICON_ASSET || '';
// AWS
exports.AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || 'AWS_ACCESS_KEY_ID';
exports.AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || 'SERVER_ROOT';
exports.AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || 'AWS_BUCKET_NAME';
exports.AWS_AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION || 'AWS_BUCKET_REGION';
// Instagram
exports.INSTAGRAM_APP_ID = process.env.INSTAGRAM_APP_ID || 'INSTAGRAM_APP_ID';
exports.INSTAGRAM_CLIENT_SECRET = process.env.INSTAGRAM_CLIENT_SECRET || 'INSTAGRAM_CLIENT_SECRET';
// Intercom
exports.INTERCOM_PAC = process.env.INTERCOM_PAC || 'INTERCOM_PAC';
exports.INTERCOM_APP_ID = process.env.INTERCOM_APP_ID || 'INTERCOM_APP_ID';
// Mailchimp
exports.MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY || 'MAILCHIMP_API_KEY'
exports.MAILCHIMP_NEWSLETTER_ID = process.env.MAILCHIMP_NEWSLETTER_ID || 'MAILCHIMP_NEWSLETTER_ID'
// Sendgrid
exports.SENDGRID_USERNAME = process.env.SENDGRID_USERNAME || 'SENDGRID_USERNAME'
exports.SENDGRID_PASSWORD = process.env.SENDGRID_PASSWORD || 'SENDGRID_PASSWORD'
exports.SENDGRID_KEY_NODEMAILER = process.env.SENDGRID_KEY_NODEMAILER || 'SENDGRID_KEY_NODEMAILER'
exports.SENDGRID_SENDER_EMAIL = process.env.SENDGRID_SENDER_EMAIL || 'info@primedsocial.com'
// Stripe
exports.STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'STRIPE_SECRET_KEY';
exports.STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY || 'STRIPE_PUBLISHABLE_KEY'
exports.STRIPE_CONNECT_KEY = process.env.STRIPE_CONNECT_KEY || 'STRIPE_CONNECT_KEY'
// Sentry
exports.SENTRY_DSN = process.env.SENTRY_DSN || 'SENTRY_DSN'