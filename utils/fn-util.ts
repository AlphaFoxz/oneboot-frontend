export const FnUtil = {
  /**
   * 函数防抖（间隔不超过delay毫秒的多次调用会被合并为最后一次调用，最终延迟时间为[delay]毫秒）
   * @param fn 目标函数
   */
  debounce<T extends (...args: any[]) => any>(callback: T, delay: number = 500): T {
    let timeoutId: ReturnType<typeof setTimeout>
    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        callback.apply(this, args)
      }, delay)
    } as T
  },
  /**
   * 函数节流（每次触发后，在delay毫秒内不再触发）
   * @param fn 目标函数
   */
  throttle<T extends (...args: any[]) => any>(callback: T, delay: number = 500): T {
    let refuse = false
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      if (refuse) return
      refuse = true
      callback.apply(this, args)
      setTimeout(() => {
        refuse = false
      }, delay)
    } as T
  },
}
