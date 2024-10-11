export const FnUtil = {
  /**
   * 函数防抖（间隔不超过delay毫秒的多次调用会被合并为最后一次调用，最终延迟时间为[delay]毫秒）
   * @param fn 目标函数
   */
  debounce(fn: Function, delay: number = 500): Function {
    let timer: NodeJS.Timeout
    return function () {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn()
      }, delay)
    }
  },
  /**
   * 函数节流（每次触发后，在delay毫秒内不再触发）
   * @param fn 目标函数
   */
  throttle(fn: Function, delay: number = 500): Function {
    let refuse = false
    return function () {
      if (refuse) return
      refuse = true
      fn(...arguments)
      setTimeout(() => {
        refuse = false
      }, delay)
    }
  },
}