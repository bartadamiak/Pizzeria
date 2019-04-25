import Component from '@ember/component';

export default Component.extend({
    
      click() {
        document.querySelector('.hidden').classList.toggle('hidden')       
      }

    
  });
