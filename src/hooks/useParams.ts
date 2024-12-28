import type { RouteParams } from 'vue-router'

export function useParams<P extends RouteParams>() {
  const route = useRoute()
  return computed(() => route.params as P)
}
