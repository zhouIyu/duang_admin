import { doneNprogress, startNprogress } from './../utils/nprogress'
import { Router } from 'vue-router'
import { setTitle } from '@/utils'

export function configGuide (router: Router): Router {
  router.beforeEach((to, from, next) => {
    startNprogress()
    setTitle(to.meta.title)
    next()
  })

  router.afterEach(() => {
    doneNprogress()
  })
  return router
}
