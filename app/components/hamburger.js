import Component from '@ember/component';

export default Component.extend({
    
      click() {
        document.querySelector('.menu').classList.toggle('hidden')       
      }

    
  });
