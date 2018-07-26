interface IPattern {
  type: string,
  action: () => any,
  value?: string
}

const matches = (type: string) =>
  (...patterns: IPattern[]) => {
    const othersPattern = patterns.find(patternItem => patternItem.type === 'others')
    const pattern = patterns.find(({ value }) => value === type) || othersPattern
    if (pattern) {
      return pattern.action()
    }
    return null
  }

const when = (value: string, action: () => any): IPattern => {
  return {
    action,
    type: 'when',
    value
  }
}

const others = (action: () => any): IPattern => {
  return {
    action,
    type: 'others'
  }
}

export {
  matches,
  when,
  others
}