const layoutStore = useLayoutStore()
export default defineNuxtRouteMiddleware((to, _) => {
  if (to.path.startsWith('/admin')) {
    layoutStore.action.setLayout('admin')
  } else {
    layoutStore.action.setLayout('default')
  }
})
