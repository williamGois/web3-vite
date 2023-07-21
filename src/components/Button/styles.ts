import { darken, transparentize } from 'polished'
import styled, { css } from 'styled-components'
import { ButtonVariants } from './types'

type ContainerProps = {
  variant: ButtonVariants
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  padding: 8px 12px;

  border-radius: 4px;
  font-weight: 500;

  transition: all linear 0.3s;

  ${({ variant, theme }) =>
    variant === 'solid' &&
    css`
      background: ${theme.colors.green[500]};
      color: ${theme.colors.white};

      &:hover {
        background: ${darken(0.1, theme.colors.green[500])};
      }
    `}

  ${({ variant, theme }) =>
    variant === 'ghost' &&
    css`
      background: transparent;
      color: ${theme.colors.green[500]};

      &:hover {
        background: ${transparentize(0.8, theme.colors.green[500])};
        color: ${({ theme }) => theme.colors.white};
      }
    `}

    ${({ variant, theme }) =>
    variant === 'link' &&
    css`
      background: transparent;
      color: ${theme.colors.green[500]};
      text-decoration: underline;

      &:hover {
        color: ${({ theme }) => darken(0.1, theme.colors.green[500])};
      }
    `}


  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
