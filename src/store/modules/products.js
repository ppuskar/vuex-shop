
import ShopService from '../../services/shopping-service.js'

// initial state
const state = () => ({
    items: []
})

// getters
const getters = {

}

// actions
const actions = {
    getAllProducts({ commit }) {
        ShopService.getProducts(products => {
            commit('setProducts', products)
        })
    }
}

// mutations
const mutations = {
    setProducts(state, products) {
        state.items = products
    },

    decrementProductInventory(state, { id }) {
        const product = state.items.find(product => product.id === id)
        product.inventory--
    }
}

export const products = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}