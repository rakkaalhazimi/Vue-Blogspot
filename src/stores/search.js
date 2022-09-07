import { ref } from "vue"
import { defineStore } from "pinia"

function searchStore() {
  const keywords = ref("")
  return { keywords }
}

export const useSearchStore = defineStore("search", searchStore)