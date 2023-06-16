import styled from 'styled-components';
import grain from '../assets/grain.png';

const NoiseBg = styled.div`
    @keyframes noise {
        0% { transform: translate3d(0, 0, 0); }
        10% { transform: translate3d(-7vw, -7vw, 0); }
        20% { transform: translate3d(-14vw, 7vw, 0); }
        30% { transform: translate3d(7vw, -14vw, 0); }
        40% { transform: translate3d(-7vw, -21vw, 0); }
        50% { transform: translate3d(-14vw, 7vw, 0); }
        60% { transform: translate3d(21vw, 21vw, 0); }
        70% { transform: translate3d(14vw, 14vw, 0); }
        80% { transform: translate3d(-21vw, -21vw, 0); }
        90% { transform: translate3d(14vw, 7vw, 0); }
        to { transform: translate3d(7vw, 7vw, 0); }
    }
  
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        top: -21vw;
        left: -21vw;
        width: calc(100vw + 42vw);
        height: calc(100vh + 42vw);
        background-position: 50%;
        background-image: url("${grain}");
        animation: noise 1s steps(4) infinite;
        pointer-events: none;
        opacity: 0.45;
    }
`;
export default function Noise() {
    return (
        <NoiseBg className="z-50"></NoiseBg>
    )
}