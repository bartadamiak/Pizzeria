import Component from '@ember/component';



export default Component.extend({
    clicker() {

        document.querySelector('.btn-summary').classList.add('hidden')
        document.querySelectorAll('.box')[0].classList.add('hidden');
        document.querySelectorAll('.box')[1].classList.add('hidden');
        document.querySelector('.btn-reset').classList.remove('hidden')
    },

   
   
});
