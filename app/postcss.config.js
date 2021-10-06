// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

const tailwindcss = require('tailwindcss');

module.exports = {
	plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
};
