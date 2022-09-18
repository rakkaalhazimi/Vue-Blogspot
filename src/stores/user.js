import { ref, computed, watch } from "vue"
import { defineStore } from "pinia"
import router from "@/router"



function userStore() {

    // State    
    let isLogin = ref(localStorage.getItem("isLogin")) || ref(false)

    // Watch
    watch(isLogin, (state) => {
        // persist login state on every change
        localStorage.setItem("isLogin", state)
    })

    // Actions
    function login() {
        isLogin.value = true
        router.push({name: "home"})
    }

    function logout() {
        isLogin.value = false
    }

    // Getters
    let checkLogin = computed(() => {
        if (isLogin.value) {return true} 
        else {return false}
    })

    return {isLogin, login, logout, checkLogin}
}

export const useUserStore = defineStore("user", userStore)