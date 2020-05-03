import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  pageName: '/' | '/import';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      flex-direction: row;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        display: flex;
        flex-direction: column;

        ${({ pageName }) =>
          pageName === '/'
            ? css`
                &:first-child::after {
                  content: '';
                  position: absolute;
                  width: 74px;
                  height: 2px;
                  top: 69px;
                  background: #ff872c;
                }
              `
            : css`
                &:last-child::after {
                  content: '';
                  position: absolute;
                  width: 74px;
                  height: 2px;
                  top: 69px;
                  background: #ff872c;
                }
              `}

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
