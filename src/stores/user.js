import { ref, computed } from "vue"
import { defineStore } from "pinia"



function userStore() {

    // State
    let isLogin = ref(false)

    // Actions
    function userLogin() {
        if (!isLogin.value) {isLogin.value = true}
    }

    function userLogout() {
        if (isLogin.value) {isLogin.value = false}
    }

    // Getters
    let checkLogin = computed(() => {
        if (isLogin.value) {return true} 
        else {return false}
    })

    return {isLogin, userLogin, userLogout, checkLogin}
}

export const useUserStore = defineStore("user", userStore)