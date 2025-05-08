import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function minifyPortfolio() {
  const inputDir = path.join(__dirname, '../portfolio');
  const outputDir = path.join(__dirname, '../public', 'portfolio');
  console.log(inputDir, outputDir)

  try {
    const files = await imagemin(
      [`${inputDir}/**/*.{jpg,jpeg}`],
      {
        destination: outputDir,
        plugins: [
          imageminMozjpeg({ quality: 80 })
        ]
      }
    );

    console.log('Successfully minified and copied the following images:');
    files.forEach(file => console.log(path.relative(__dirname, file.destinationPath)));

  } catch (error) {
    console.error('Image minification failed:', error);
  }
}

minifyPortfolio();
