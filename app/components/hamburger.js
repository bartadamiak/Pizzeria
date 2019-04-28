import Component from '@ember/component';

export default Component.extend({
    
      click() {
        document.querySelector('.nav').classList.toggle('hidden')       
      }

    
  });
