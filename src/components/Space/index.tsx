import React from 'react'
import { css, cx } from 'emotion'
import tw from 'tailwind.macro'

type Props = {
  direction: 'vertical' | 'horizontal'
  size: number
}

const Space: React.FC<Props> = ({ direction, size, children }) => (
  <>
    {React.Children.map(children, (child, index) => {
      const isFirst = index === 0
      const isVertical = direction === 'vertical'

      return (
        <div
          className={cx({
            [css(tw`mt-8`)]: !isFirst && isVertical,
            [css(tw`ml-8`)]: !isFirst && !isVertical,
          })}
        >
          {child}
        </div>
      )
    })}
  </>
)

export default Space
