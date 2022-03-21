
/*import {cart} from './modules/cart.js'
import {products} from './modules/products.js'*/
import { createStore} from 'vuex';



const store = createStore({
    
    modules: {
  /*    cart,
      products,*/
     test:{
         namespaced: true,
         state: {
            names : ["praveen","puskar"]
         },
         getters: {
            getNames(state){
                return state.names;
            }
         }
     }
    },
  });

  export default store