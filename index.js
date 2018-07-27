/*
 * @Author: Murphy Chu - shmilyclxy@163.com
 * @Date: 2018-06-11 12:36:33
 * @Last Modified by: Murphy Chu
 * @Last Modified time: 2018-07-21 16:38:39
 */
import routes from './routes'

const paramsFilter = (data) => {
  let route
  if (data instanceof Object) {
    const { name, params } = data
    route = routes.find(item => item.name === name)
    if (route) {
      route.url = route.path
      if (params instanceof Object) {
        const paramsString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
        if (paramsString) route.url = `${route.path}?${paramsString}`
      }
    }
  } else if (data instanceof String) {
    const [ path ] = data.split('?')
    route = routes.find(item => item.path === path)
    route.url = data
  }
  if (!route) {
    throw new Error('路由名或路径错误')
  }

  return route
}

export const router = {
  push (data, success, fail, complete) {
    const route = paramsFilter(data)
    wx.navigateTo({ ...route, success, fail, complete })
  },
  replace (data, success, fail, complete) {
    const route = paramsFilter(data)
    wx.redirectTo({ ...route, success, fail, complete })
  },
  back ({ delta = 1 }) {
    wx.navigateBack({ delta })
  },
  go ({ delta = 1 }) {
    wx.navigateBack({ delta })
  },
  reLaunch (data, success, fail, complete) {
    const route = paramsFilter(data)
    wx.reLaunch({ ...route, success, fail, complete })
  },
  switchTab (data, success, fail, complete) {
    const route = paramsFilter(data)
    wx.switchTab({ ...route, success, fail, complete })
  }
}

class Route {
  /* eslint-disable no-undef */
  get matched () {
    return getCurrentPages()
  }

  get current () {
    return this.matched[this.matched.length - 1]
  }

  get params () {
    return this.current.options
  }

  get path () {
    return this.current.route
  }

  get from () {
    let route = null
    if (this.matched.length > 1) {
      const v = this.matched[this.matched.length - 2]
      const params = v.options
      let fullPath = v.route
      const paramsString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
      if (paramsString) fullPath = `${fullPath}?${paramsString}`
      route = {
        path: v.route,
        params,
        fullPath
      }
    }
    return route
  }

  get fullPath () {
    let fullPath = this.current.route
    const paramsString = Object.keys(this.params).map(key => `${key}=${this.params[key]}`).join('&')
    if (paramsString) fullPath = `${fullPath}?${paramsString}`
    return fullPath
  }
}

export const route = new Route()
