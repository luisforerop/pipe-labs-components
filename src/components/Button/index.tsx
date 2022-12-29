import type { ReactNode } from 'react'
import { StyledButton } from './StyledButton'
import { PossibleSize } from '../../shared'
import { colors } from './colors'

export interface ButtonProps {
  /**
   * It is the posible style preconfig
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'warning' | 'disable'
  /**
   * It will be rendered as a child
   */
  children: ReactNode
  className?: string
  isLoading?: boolean
  loadingMessage?: string
  isDisabled?: boolean
  size?: PossibleSize
  isFullWidth?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

// usar variables css
export const Button = ({
  children,
  variant = 'primary',
  className,
  onClick,
  isDisabled,
  isFullWidth,
  isLoading,
  loadingMessage,
}: ButtonProps) => {
  variant = isDisabled ? 'disable' : variant

  return (
    <StyledButton
      color={colors[variant].color}
      backgroundColor={colors[variant].backgroundColor}
      border={`1px solid ${colors[variant].borderColor}`}
      className={className}
      width={isFullWidth ? '100%' : 'auto'}
      onClick={onClick}
    >
      {isLoading ? loadingMessage || 'Cargando...' : children}
    </StyledButton>
  )
}
