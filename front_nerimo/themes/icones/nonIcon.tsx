import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg";
import { IconProps } from "./iconProps";


const NonIcon : React.FC<IconProps> = ({ width, fill, background }) => (
  <Svg
    width={width}
    height={width * (68 / 308)}
    viewBox="0 0 308 68"
    fill={background}
  >
    <G filter="url(#filter0_d_277_1733)">
      <Rect
        x={6}
        y={2}
        width={296}
        height={56}
        rx={28}
        stroke={fill}
        strokeWidth={4}
      />
      <Path
        d="M142.84 38.04C142.76 38.06 142.64 38.02 142.52 37.9L142.22 37.54L142.02 37.42L141.66 36.98L141.3 36.62L141.14 36.52L140.78 36.18L140.62 36.02L140.32 35.72L140.08 35.58L139.86 35.4C139.8 35.36 139.76 35.28 139.72 35.22L139.62 35.1L139.34 34.78L139.1 34.56L138.78 34.28L138.56 34.1L138.28 33.78L138.1 33.66L137.78 33.24L137.62 33.12L137.32 32.92C137.24 32.86 137.18 32.82 137.14 32.76L137.08 32.68L136.8 32.36L136.66 32.22L136.4 31.96C136.36 31.92 136.32 31.84 136.28 31.8L136.22 31.72L135.86 31.44L135.6 31.28L135.3 31.08C135.26 31.04 135.2 31 135.16 30.96L135.08 30.88L134.9 30.66L134.78 30.56L134.42 30.2L134.2 30.06L134.08 30.22V30.46L134.1 31.04L134.12 31.16C134.14 31.26 134.12 31.3 134.12 31.4L134.1 31.62C134.1 31.72 134.08 31.78 134.06 31.86L134.04 31.94L134.06 32.4L134.02 32.66L134.08 33.06C134.1 33.14 134.1 33.24 134.08 33.32V33.34V33.86L134.12 34.12L134.1 34.58V34.84V35.3L134.08 35.56L134.1 36.16L134.06 36.64L134.02 36.9L134 37.4C134 37.4 133.82 37.72 133.66 37.88C133.58 37.96 133.44 37.96 133.34 37.96L133.08 37.98H132.84L132.64 38C132.58 38 132.5 38.02 132.44 38.02L132.3 38L132.02 37.96L131.56 38.02C131.56 38.02 131.32 37.86 131.18 37.7C131.08 37.6 131.08 37.46 131.06 37.34L131.04 37.08L131 36.8L130.96 36.46C130.96 36.36 130.96 36.28 130.98 36.16L131 36.06L131.02 35.74C131.02 35.7 131.02 35.62 131.02 35.58L131.06 35.36V34.96C131 34.82 130.98 34.64 131 34.48L131.02 34.32L131.04 34.06L131.06 33.66C131.06 33.58 131.06 33.56 131.08 33.5L131.14 33.3L131.1 33.04C131.08 32.9 131.08 32.8 131.1 32.68L131.12 32.64L131.06 32.22C131.06 32.14 131.06 32.1 131.06 32.02L131.12 31.6L131.06 31.32L131.04 30.96C131.04 30.88 131.04 30.86 131.04 30.78L131.06 30.58L131.08 30.2C131.08 30.14 131.08 30.04 131.1 29.98L131.12 29.86L131.1 29.46L131.06 29.22L131.02 28.9C131.02 28.82 131 28.76 131.02 28.66L131.04 28.58V28.16C131.04 28.12 131.06 28.08 131.06 28.02L131.1 27.84L131.06 27.38L130.98 27.22L130.96 26.68V26.24L131 25.96L130.98 25.72L131.02 25.32L131 25.3C130.98 25.18 130.98 25.04 131 24.92L131.04 24.66L131.02 24.44L131 24C131 23.96 131 23.88 131 23.84L131.02 23.64L131.06 23.58C131.12 23.48 131.14 23.42 131.18 23.38L131.4 23.52L131.52 23.62C131.56 23.66 131.6 23.7 131.62 23.74L131.86 24.04L132.48 24.64L132.82 24.94L132.98 25.14L133.3 25.44L133.54 25.64L133.82 25.92L134.02 26.12L134.3 26.46L134.42 26.62L134.76 26.96L134.94 27.06L135.22 27.36L135.38 27.56L135.72 27.8L135.9 27.96L136.24 28.24L136.38 28.34C136.46 28.4 136.52 28.46 136.58 28.52L136.84 28.84L137.16 29.12C137.22 29.18 137.24 29.22 137.28 29.28L137.38 29.4L137.7 29.66C137.78 29.72 137.82 29.8 137.88 29.88L137.94 29.96L138.1 30.18L138.34 30.34L138.66 30.68L138.84 30.84L138.98 30.98L139.22 31.16L139.56 31.44L139.76 31.64L139.96 31.5V31.32L139.98 31.08V30.56L140.02 30.3L139.98 29.84L139.96 29.62L139.94 29.14L139.92 28.9L139.96 28.44L139.98 28.18L139.96 27.7V27.48L139.9 27.04V26.9C139.9 26.84 139.9 26.8 139.9 26.74L139.94 26.36L140 26.06L140.02 25.58V25.34L139.92 24.92L139.88 24.68C139.88 24.66 139.88 24.64 139.88 24.62L139.86 24.18C139.88 24.02 139.98 23.82 140.14 23.66L140.16 23.64L140.5 23.62L140.86 23.58C140.94 23.58 141.02 23.58 141.1 23.6H141.2H141.48C141.6 23.6 141.7 23.6 141.82 23.64L141.92 23.66L142.48 23.7C142.48 23.7 142.78 23.9 142.9 24.08C142.94 24.14 142.94 24.2 142.94 24.28L143 24.76L142.98 25.28L143 25.52L143.02 26.02L143.04 26.08C143.06 26.16 143.06 26.28 143.06 26.36L143.04 26.7L143.02 26.96L143.04 27.26C143.04 27.34 143.02 27.4 143.02 27.46L143 27.66L143.02 27.94C143.02 28.02 143.02 28.14 143 28.22L142.98 28.32V28.74L143.02 29.02L143.04 29.28C143.06 29.42 143.04 29.58 143 29.74V29.76L143.02 30.26L142.98 30.8L143.02 31.08L142.96 31.54V31.78L143 32.28L143.02 32.52L143.04 33.08L143 33.6L142.96 33.86L143 34.22C143 34.3 143 34.38 142.98 34.46V34.58V35.04V35.3L143.04 35.68C143.04 35.74 143.06 35.8 143.06 35.86V35.96L143.02 36.42V36.62L143.04 37.04L143.02 37.3V37.66C143.02 37.72 143.02 37.82 143 37.88L142.96 38.02L142.84 38.04ZM146.019 29.86L146.039 29.76C146.039 29.68 146.059 29.6 146.079 29.52L146.219 29.14L146.239 28.94L146.379 28.52L146.439 28.3L146.619 27.9L146.719 27.66L146.939 27.18L147.059 26.94L147.299 26.56L147.399 26.42L147.719 26.04L148.039 25.66C148.079 25.6 148.099 25.58 148.139 25.54L148.259 25.42L148.739 24.96C148.779 24.92 148.839 24.86 148.899 24.82L149.659 24.36L149.939 24.24L150.359 24.02L150.579 23.9L151.019 23.7L151.059 23.68C151.159 23.64 151.279 23.6 151.379 23.6L151.619 23.58L151.839 23.54L152.319 23.48C152.359 23.48 152.439 23.46 152.479 23.46H152.639L153.299 23.4C153.399 23.38 153.479 23.38 153.559 23.4L153.659 23.42H153.879L154.419 23.44H154.499C154.599 23.42 154.719 23.44 154.819 23.46L155.099 23.52L155.379 23.56L155.819 23.66L156.439 23.88L156.699 23.96L156.979 24.06C157.059 24.1 157.159 24.14 157.239 24.2L157.339 24.28L157.979 24.66L158.279 24.88L158.479 25.08L158.799 25.42L158.959 25.6L159.359 25.98L159.459 26.1L159.639 26.3C159.739 26.42 159.799 26.56 159.839 26.68L160.119 27.08L160.199 27.22L160.439 27.62L160.499 27.76C160.519 27.8 160.539 27.88 160.559 27.92L160.659 28.3L160.719 28.46L160.799 28.92L160.899 29.14L160.999 29.6L161.039 29.86L161.059 30.24C161.059 30.32 161.039 30.38 161.039 30.44L161.019 30.56L161.039 30.6C161.079 30.76 161.059 30.88 161.039 31.04V31.1L161.059 31.3L161.079 31.52C161.079 31.68 161.059 31.84 160.979 31.96L160.899 32.42L160.859 32.64L160.759 33.12L160.719 33.3C160.719 33.34 160.699 33.38 160.679 33.42L160.519 33.82L160.419 34C160.419 34.02 160.379 34.02 160.379 34.04L160.139 34.4L160.059 34.6L159.899 34.9C159.859 34.96 159.799 35.04 159.759 35.1L159.739 35.14L159.399 35.58L159.279 35.74L158.959 36.06L158.739 36.28L158.539 36.52C158.459 36.62 158.359 36.7 158.259 36.76L157.939 36.92L157.719 37.04L157.359 37.24C157.319 37.26 157.259 37.28 157.199 37.3L157.079 37.34L156.879 37.48L156.659 37.58L156.459 37.68L156.099 37.84L155.819 37.94L155.199 38.16L154.739 38.28L154.659 38.3C154.579 38.32 154.479 38.32 154.399 38.32H154.019H153.479L153.359 38.3C153.299 38.3 153.239 38.28 153.199 38.26L152.979 38.22L152.559 38.18H152.339L151.779 38.08C151.719 38.06 151.639 38.04 151.559 38L151.239 37.88L151.059 37.82L150.639 37.7L150.379 37.62L150.179 37.56C150.059 37.52 149.939 37.48 149.819 37.38L149.779 37.36L149.419 37.2C149.379 37.18 149.359 37.16 149.299 37.12L149.139 37.02L148.779 36.76L148.579 36.58C148.559 36.56 148.539 36.54 148.519 36.52L148.219 36.18C148.119 36.12 147.999 36.06 147.919 35.94L147.759 35.7L147.599 35.54L147.379 35.14C147.259 35.06 147.159 34.96 147.079 34.8L146.999 34.64L146.959 34.58C146.879 34.48 146.819 34.4 146.779 34.26L146.699 33.96L146.559 33.76L146.419 33.32L146.319 33.12L146.159 32.68C146.119 32.58 146.079 32.46 146.079 32.32V32L146.059 31.76V31.32L146.019 31.12V30.82L145.999 30.64L145.979 30.48C145.979 30.4 145.979 30.32 145.979 30.24L146.019 29.86ZM149.159 31.8L149.259 32.1L149.399 32.54L149.439 32.78L149.599 33.18L149.699 33.34L149.979 33.64C150.019 33.68 150.059 33.74 150.099 33.78L150.179 33.9L150.379 34.08C150.479 34.16 150.579 34.24 150.639 34.36V34.38L150.999 34.72L151.239 34.86L151.639 35.1L151.919 35.18L152.019 35.2C152.099 35.22 152.199 35.24 152.279 35.28L152.319 35.3H152.579L153.039 35.4L153.279 35.42L153.759 35.44L154.059 35.4L154.739 35.3L155.079 35.14C155.139 35.1 155.219 35.1 155.279 35.08L155.339 35.06L155.839 34.78L156.039 34.66L156.379 34.38L156.519 34.26L156.899 34L157.059 33.78L157.279 33.46L157.419 33.22L157.479 33.02L157.699 32.66V32.46L157.799 32.04L157.839 31.84L157.879 31.3V31.1V30.82V30.68C157.879 30.58 157.899 30.54 157.919 30.44L157.959 30.34L157.859 29.86L157.839 29.6L157.679 29.12L157.559 28.94L157.379 28.48L157.259 28.34L157.059 27.94L156.879 27.72L156.499 27.4L156.339 27.26L155.939 26.98L155.359 26.52L155.099 26.42L154.699 26.26L154.419 26.28L153.979 26.24H153.899C153.819 26.24 153.719 26.26 153.639 26.24L153.559 26.22L153.419 26.24C153.339 26.26 153.259 26.26 153.179 26.26H153.079L152.639 26.28L152.379 26.34L152.039 26.46C151.979 26.48 151.919 26.5 151.859 26.52L151.719 26.54L151.199 26.84L151.039 26.94L150.639 27.24L150.459 27.36L150.199 27.7L150.019 27.98L149.899 28.26C149.859 28.36 149.799 28.44 149.739 28.52L149.699 28.56L149.499 28.96L149.439 29.14L149.299 29.62L149.239 29.88L149.219 30.34L149.159 30.6L149.219 30.88L149.199 31.08C149.199 31.1 149.179 31.16 149.179 31.18L149.159 31.36V31.8ZM175.906 38.04C175.826 38.06 175.706 38.02 175.586 37.9L175.286 37.54L175.086 37.42L174.726 36.98L174.366 36.62L174.206 36.52L173.846 36.18L173.686 36.02L173.386 35.72L173.146 35.58L172.926 35.4C172.866 35.36 172.826 35.28 172.786 35.22L172.686 35.1L172.406 34.78L172.166 34.56L171.846 34.28L171.626 34.1L171.346 33.78L171.166 33.66L170.846 33.24L170.686 33.12L170.386 32.92C170.306 32.86 170.246 32.82 170.206 32.76L170.146 32.68L169.866 32.36L169.726 32.22L169.466 31.96C169.426 31.92 169.386 31.84 169.346 31.8L169.286 31.72L168.926 31.44L168.666 31.28L168.366 31.08C168.326 31.04 168.266 31 168.226 30.96L168.146 30.88L167.966 30.66L167.846 30.56L167.486 30.2L167.266 30.06L167.146 30.22V30.46L167.166 31.04L167.186 31.16C167.206 31.26 167.186 31.3 167.186 31.4L167.166 31.62C167.166 31.72 167.146 31.78 167.126 31.86L167.106 31.94L167.126 32.4L167.086 32.66L167.146 33.06C167.166 33.14 167.166 33.24 167.146 33.32V33.34V33.86L167.186 34.12L167.166 34.58V34.84V35.3L167.146 35.56L167.166 36.16L167.126 36.64L167.086 36.9L167.066 37.4C167.066 37.4 166.886 37.72 166.726 37.88C166.646 37.96 166.506 37.96 166.406 37.96L166.146 37.98H165.906L165.706 38C165.646 38 165.566 38.02 165.506 38.02L165.366 38L165.086 37.96L164.626 38.02C164.626 38.02 164.386 37.86 164.246 37.7C164.146 37.6 164.146 37.46 164.126 37.34L164.106 37.08L164.066 36.8L164.026 36.46C164.026 36.36 164.026 36.28 164.046 36.16L164.066 36.06L164.086 35.74C164.086 35.7 164.086 35.62 164.086 35.58L164.126 35.36V34.96C164.066 34.82 164.046 34.64 164.066 34.48L164.086 34.32L164.106 34.06L164.126 33.66C164.126 33.58 164.126 33.56 164.146 33.5L164.206 33.3L164.166 33.04C164.146 32.9 164.146 32.8 164.166 32.68L164.186 32.64L164.126 32.22C164.126 32.14 164.126 32.1 164.126 32.02L164.186 31.6L164.126 31.32L164.106 30.96C164.106 30.88 164.106 30.86 164.106 30.78L164.126 30.58L164.146 30.2C164.146 30.14 164.146 30.04 164.166 29.98L164.186 29.86L164.166 29.46L164.126 29.22L164.086 28.9C164.086 28.82 164.066 28.76 164.086 28.66L164.106 28.58V28.16C164.106 28.12 164.126 28.08 164.126 28.02L164.166 27.84L164.126 27.38L164.046 27.22L164.026 26.68V26.24L164.066 25.96L164.046 25.72L164.086 25.32L164.066 25.3C164.046 25.18 164.046 25.04 164.066 24.92L164.106 24.66L164.086 24.44L164.066 24C164.066 23.96 164.066 23.88 164.066 23.84L164.086 23.64L164.126 23.58C164.186 23.48 164.206 23.42 164.246 23.38L164.466 23.52L164.586 23.62C164.626 23.66 164.666 23.7 164.686 23.74L164.926 24.04L165.546 24.64L165.886 24.94L166.046 25.14L166.366 25.44L166.606 25.64L166.886 25.92L167.086 26.12L167.366 26.46L167.486 26.62L167.826 26.96L168.006 27.06L168.286 27.36L168.446 27.56L168.786 27.8L168.966 27.96L169.306 28.24L169.446 28.34C169.526 28.4 169.586 28.46 169.646 28.52L169.906 28.84L170.226 29.12C170.286 29.18 170.306 29.22 170.346 29.28L170.446 29.4L170.766 29.66C170.846 29.72 170.886 29.8 170.946 29.88L171.006 29.96L171.166 30.18L171.406 30.34L171.726 30.68L171.906 30.84L172.046 30.98L172.286 31.16L172.626 31.44L172.826 31.64L173.026 31.5V31.32L173.046 31.08V30.56L173.086 30.3L173.046 29.84L173.026 29.62L173.006 29.14L172.986 28.9L173.026 28.44L173.046 28.18L173.026 27.7V27.48L172.966 27.04V26.9C172.966 26.84 172.966 26.8 172.966 26.74L173.006 26.36L173.066 26.06L173.086 25.58V25.34L172.986 24.92L172.946 24.68C172.946 24.66 172.946 24.64 172.946 24.62L172.926 24.18C172.946 24.02 173.046 23.82 173.206 23.66L173.226 23.64L173.566 23.62L173.926 23.58C174.006 23.58 174.086 23.58 174.166 23.6H174.266H174.546C174.666 23.6 174.766 23.6 174.886 23.64L174.986 23.66L175.546 23.7C175.546 23.7 175.846 23.9 175.966 24.08C176.006 24.14 176.006 24.2 176.006 24.28L176.066 24.76L176.046 25.28L176.066 25.52L176.086 26.02L176.106 26.08C176.126 26.16 176.126 26.28 176.126 26.36L176.106 26.7L176.086 26.96L176.106 27.26C176.106 27.34 176.086 27.4 176.086 27.46L176.066 27.66L176.086 27.94C176.086 28.02 176.086 28.14 176.066 28.22L176.046 28.32V28.74L176.086 29.02L176.106 29.28C176.126 29.42 176.106 29.58 176.066 29.74V29.76L176.086 30.26L176.046 30.8L176.086 31.08L176.026 31.54V31.78L176.066 32.28L176.086 32.52L176.106 33.08L176.066 33.6L176.026 33.86L176.066 34.22C176.066 34.3 176.066 34.38 176.046 34.46V34.58V35.04V35.3L176.106 35.68C176.106 35.74 176.126 35.8 176.126 35.86V35.96L176.086 36.42V36.62L176.106 37.04L176.086 37.3V37.66C176.086 37.72 176.086 37.82 176.066 37.88L176.026 38.02L175.906 38.04Z"
        fill={fill}
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export { NonIcon };