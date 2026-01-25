import * as Toast from '@radix-ui/react-toast';
import { keyframes, styled } from 'styled-components';

const VIEWPORT_PADDING = 32;

const hide = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const slideIn = keyframes`
  from { transform: translateX(calc(100% + ${VIEWPORT_PADDING}px)); }
  to { transform: translateX(0); }
`;

const swipeOut = keyframes`
  from { transform: translateX(var(--radix-toast-swipe-end-x)); }
  to { transform: translateX(calc(100% + ${VIEWPORT_PADDING}px)); }
`;

export const ToastViewport = styled(Toast.Viewport)`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: ${VIEWPORT_PADDING}px;
  gap: 10px;
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 999999;
  outline: none;
`;

export const ToastRoot = styled(Toast.Root)`
  display: grid;
  grid-template-areas: 'title action' 'description action';
  grid-template-columns: auto max-content;
  column-gap: ${({ theme }) => theme.space[5]};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[5]}`};
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors.gray800};

  &[data-state='open'] {
    animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state='closed'] {
    animation: ${hide} 100ms ease-in;
  }

  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }

  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }

  &[data-swipe='end'] {
    animation: ${swipeOut} 100ms ease-out;
  }
`;

export const ToastTitle = styled(Toast.Title)`
  grid-area: title;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.base};
  color: ${({ theme }) => theme.colors.white};
`;

export const ToastDescription = styled(Toast.Description)`
  grid-area: description;
  margin-top: ${({ theme }) => theme.space[1]};
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.base};
  color: ${({ theme }) => theme.colors.gray200};
`;

export const ToastClose = styled(Toast.Close)`
  grid-area: action;
  all: unset;
  width: ${({ theme }) => theme.space[5]};
  height: ${({ theme }) => theme.space[5]};
  color: ${({ theme }) => theme.colors.gray200};
  cursor: pointer;
`;
