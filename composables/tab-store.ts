const openedTabs = ref<string[]>([])
const activeTab = ref<string | null>(null)

const api = {
  state: {
    openedTabs: readonly(openedTabs),
    activeTab: readonly(activeTab),
  },
  action: {
    openTab(tab: string) {
      if (!openedTabs.value.includes(tab)) {
        openedTabs.value.push(tab)
      }
      activeTab.value = tab
    },
    switchTab(tab: string) {
      if (openedTabs.value.includes(tab)) {
        activeTab.value = tab
      } else {
        activeTab.value = null
      }
    },
    closeTab(tab: string) {
      const index = openedTabs.value.indexOf(tab)
      openedTabs.value.splice(index, 1)
      if (activeTab.value === tab) {
        const nextTab = openedTabs.value[index]
        if (nextTab) {
          activeTab.value = nextTab
        } else {
          activeTab.value = null
        }
      }
    },
  },
}
export function useTabStore() {
  return api
}
