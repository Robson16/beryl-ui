import * as Avatar from '@radix-ui/react-avatar';
import styled from 'styled-components';

export const AvatarContainer = styled(Avatar.Root)`
  border-radius: ${({ theme }) => theme.radii.full};
  display: inline-block;
  width: ${({ theme }) => theme.space[12]};
  height: ${({ theme }) => theme.space[12]};
  overflow: hidden;
`;

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.gray800};

  svg {
    width: ${({ theme }) => theme.space[6]};
    height: ${({ theme }) => theme.space[6]};
  }
`;
