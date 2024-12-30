const downloadButton = document.getElementById('downloadButton');

    downloadButton.addEventListener('click', () => {
      downloadButton.classList.add('Downloading');

      const link = document.createElement('a');
      link.href = "./media/downloads/Thabo Mtsweni CV.pdf"; 
      link.download = './media/downloads/Thabo Mtsweni CV.pdf'; 
      link.target = '_blank';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); 
    });