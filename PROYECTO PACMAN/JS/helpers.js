export async function loadAssets() {
  const pacmanImg = new Image();
  pacmanImg.src = './assets/gifs/pacman_comiendo.gif';

  const ghostImages = {
    red: './assets/gifs/fantasma_rojo_gif.gif',
    blue: './assets/gifs/fantasma_celeste_gif.gif',
  };

  return {
    pacman: pacmanImg,
    ghosts: {
      red: ghostImages.red,
      blue: ghostImages.blue,
    },
  };
}
