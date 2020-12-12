import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSocial(props) {
  return (
    <Svg
      width={30}
      height={23}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M30 15.075c0 .825-1.5 1.375-3.25 1.65-1.125-2.338-3.375-4.125-6-5.363.25-.412.5-.687.75-1.1h1c3.875-.137 7.5 2.476 7.5 4.813zm-21.5-4.95h-1c-3.875 0-7.5 2.613-7.5 4.95 0 .825 1.5 1.375 3.25 1.65 1.125-2.338 3.375-4.125 6-5.363l-.75-1.237zM15 11.5c2.75 0 5-2.475 5-5.5S17.75.5 15 .5 10 2.975 10 6s2.25 5.5 5 5.5zm0 1.375c-5.125 0-10 3.575-10 6.875 0 2.75 10 2.75 10 2.75s10 0 10-2.75c0-3.3-4.875-6.875-10-6.875zm7.125-4.125h.375c2.125 0 3.75-1.787 3.75-4.125C26.25 2.288 24.625.5 22.5.5c-.625 0-1.125.137-1.625.412C21.875 2.288 22.5 4.075 22.5 6c0 .963-.125 1.925-.375 2.75zM7.5 8.75h.375C7.625 7.925 7.5 6.963 7.5 6c0-1.925.625-3.712 1.625-5.088C8.625.637 8.125.5 7.5.5 5.375.5 3.75 2.288 3.75 4.625c0 2.338 1.625 4.125 3.75 4.125z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgSocial;
