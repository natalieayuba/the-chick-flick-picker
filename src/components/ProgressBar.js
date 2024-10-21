import '../styles/ProgressBar.css';

const ProgressBar = ({ progress }) => (
  <svg
    className='progress-bar'
    width='1179'
    height='18'
    preserveAspectRatio='none'
    viewBox='0 0 1179 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <linearGradient id='fill' x1='0%' x2='100%' y1='0%' y2='0%'>
        <stop stop-color='black' offset={0} />
        <stop stop-color='black' offset={progress} />
        <stop stop-color='transparent' offset={progress} />
        <stop stop-color='transparent' offset={1} />
      </linearGradient>
    </defs>
    <path
      d='M2.74229 7.72731C6.48042 3.86523 16.4537 3.445 23.31 2.8547C37.4862 1.9054 50.4267 2.00283 64.8817 2.00283C116.431 2.00283 167.659 3.24714 219.202 3.445C249.684 3.56201 522.806 4.59401 553.198 3.44513C574.716 3.54901 708.961 2.85464 730.481 2.85464C846.997 2.85464 853.363 2.51047 969.809 3.55432C1022.77 4.02911 1076.15 3.71235 1129.06 4.43707C1147.95 4.69573 1176.6 4.26822 1177 11.5258C1177.14 14.0702 1160.73 14.536 1155.57 14.6605C1136.2 15.1273 1040.72 15.0427 1021.38 14.6605C1000.49 14.7321 968.806 14.7637 947.921 14.6605C918.1 14.5132 865.11 14.361 835.283 14.6605C784.77 15.1679 769.871 14.5218 719.298 14.5218C694.446 14.5218 669.903 14.8759 645.086 15.2708C602.791 15.9438 560.119 15.4828 517.789 15.5918C397.677 15.9011 277.585 15.9663 157.469 15.9663C124.361 15.9663 91.2421 16.0421 58.1351 15.9663C45.4119 15.9371 33.1654 15.4983 20.8515 14.5218C9.2541 13.6021 -0.867355 11.4566 2.74229 7.72731Z'
      stroke='black'
      stroke-width='3'
      fill='url(#fill)'
      stroke-linecap='round'
      vector-effect='non-scaling-stroke'
    />
  </svg>
);

export default ProgressBar;
