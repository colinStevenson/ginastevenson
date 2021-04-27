const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async() => {
  const files = await imagemin(
      ['portfolio/*.jpg', 'src/portfolio/*.jpeg'],
      {
        destination: 'public/portfolio',
        plugins: [imageminMozjpeg({quality: 50})]
      }
  );
  console.log(files);
})();
