import { ref, computed, watch } from "vue"
import { defineStore } from "pinia"
import router from "@/router"



function userStore() {

    // State
    let isLogin = localStorage.getItem("isLogin") || ref(false)

    // Watch
    watch(isLogin, (state) => {
        // persist login state on every change
        localStorage.setItem("isLogin", state)
    })

    // Actions
    function login() {
        if (!isLogin.value) {
            isLogin.value = true
            router.push({name: "home"})
        }
    }

    function logout() {
        if (isLogin.value) {isLogin.value = false}
    }

    // Getters
    let checkLogin = computed(() => {
        if (isLogin.value) {return true} 
        else {return false}
    })

    return {isLogin, login, logout, checkLogin}
}

export const useUserStore = defineStore("user", userStore)