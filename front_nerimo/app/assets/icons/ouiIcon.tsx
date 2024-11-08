import * as React from "react";
import Svg, { G, Rect, Path, Defs } from "react-native-svg";
import { IconProps } from "./iconProps";

const OuiIcon: React.FC<IconProps> = ({ width, fill, background }) => (
  <Svg width={width} height={width * (68 / 308)} viewBox="0 0 308 68" fill={background}>
    <G filter="url(#filter0_d_277_1731)">
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
        d="M135.14 29.86L135.16 29.76C135.16 29.68 135.18 29.6 135.2 29.52L135.34 29.14L135.36 28.94L135.5 28.52L135.56 28.3L135.74 27.9L135.84 27.66L136.06 27.18L136.18 26.94L136.42 26.56L136.52 26.42L136.84 26.04L137.16 25.66C137.2 25.6 137.22 25.58 137.26 25.54L137.38 25.42L137.86 24.96C137.9 24.92 137.96 24.86 138.02 24.82L138.78 24.36L139.06 24.24L139.48 24.02L139.7 23.9L140.14 23.7L140.18 23.68C140.28 23.64 140.4 23.6 140.5 23.6L140.74 23.58L140.96 23.54L141.44 23.48C141.48 23.48 141.56 23.46 141.6 23.46H141.76L142.42 23.4C142.52 23.38 142.6 23.38 142.68 23.4L142.78 23.42H143L143.54 23.44H143.62C143.72 23.42 143.84 23.44 143.94 23.46L144.22 23.52L144.5 23.56L144.94 23.66L145.56 23.88L145.82 23.96L146.1 24.06C146.18 24.1 146.28 24.14 146.36 24.2L146.46 24.28L147.1 24.66L147.4 24.88L147.6 25.08L147.92 25.42L148.08 25.6L148.48 25.98L148.58 26.1L148.76 26.3C148.86 26.42 148.92 26.56 148.96 26.68L149.24 27.08L149.32 27.22L149.56 27.62L149.62 27.76C149.64 27.8 149.66 27.88 149.68 27.92L149.78 28.3L149.84 28.46L149.92 28.92L150.02 29.14L150.12 29.6L150.16 29.86L150.18 30.24C150.18 30.32 150.16 30.38 150.16 30.44L150.14 30.56L150.16 30.6C150.2 30.76 150.18 30.88 150.16 31.04V31.1L150.18 31.3L150.2 31.52C150.2 31.68 150.18 31.84 150.1 31.96L150.02 32.42L149.98 32.64L149.88 33.12L149.84 33.3C149.84 33.34 149.82 33.38 149.8 33.42L149.64 33.82L149.54 34C149.54 34.02 149.5 34.02 149.5 34.04L149.26 34.4L149.18 34.6L149.02 34.9C148.98 34.96 148.92 35.04 148.88 35.1L148.86 35.14L148.52 35.58L148.4 35.74L148.08 36.06L147.86 36.28L147.66 36.52C147.58 36.62 147.48 36.7 147.38 36.76L147.06 36.92L146.84 37.04L146.48 37.24C146.44 37.26 146.38 37.28 146.32 37.3L146.2 37.34L146 37.48L145.78 37.58L145.58 37.68L145.22 37.84L144.94 37.94L144.32 38.16L143.86 38.28L143.78 38.3C143.7 38.32 143.6 38.32 143.52 38.32H143.14H142.6L142.48 38.3C142.42 38.3 142.36 38.28 142.32 38.26L142.1 38.22L141.68 38.18H141.46L140.9 38.08C140.84 38.06 140.76 38.04 140.68 38L140.36 37.88L140.18 37.82L139.76 37.7L139.5 37.62L139.3 37.56C139.18 37.52 139.06 37.48 138.94 37.38L138.9 37.36L138.54 37.2C138.5 37.18 138.48 37.16 138.42 37.12L138.26 37.02L137.9 36.76L137.7 36.58C137.68 36.56 137.66 36.54 137.64 36.52L137.34 36.18C137.24 36.12 137.12 36.06 137.04 35.94L136.88 35.7L136.72 35.54L136.5 35.14C136.38 35.06 136.28 34.96 136.2 34.8L136.12 34.64L136.08 34.58C136 34.48 135.94 34.4 135.9 34.26L135.82 33.96L135.68 33.76L135.54 33.32L135.44 33.12L135.28 32.68C135.24 32.58 135.2 32.46 135.2 32.32V32L135.18 31.76V31.32L135.14 31.12V30.82L135.12 30.64L135.1 30.48C135.1 30.4 135.1 30.32 135.1 30.24L135.14 29.86ZM138.28 31.8L138.38 32.1L138.52 32.54L138.56 32.78L138.72 33.18L138.82 33.34L139.1 33.64C139.14 33.68 139.18 33.74 139.22 33.78L139.3 33.9L139.5 34.08C139.6 34.16 139.7 34.24 139.76 34.36V34.38L140.12 34.72L140.36 34.86L140.76 35.1L141.04 35.18L141.14 35.2C141.22 35.22 141.32 35.24 141.4 35.28L141.44 35.3H141.7L142.16 35.4L142.4 35.42L142.88 35.44L143.18 35.4L143.86 35.3L144.2 35.14C144.26 35.1 144.34 35.1 144.4 35.08L144.46 35.06L144.96 34.78L145.16 34.66L145.5 34.38L145.64 34.26L146.02 34L146.18 33.78L146.4 33.46L146.54 33.22L146.6 33.02L146.82 32.66V32.46L146.92 32.04L146.96 31.84L147 31.3V31.1V30.82V30.68C147 30.58 147.02 30.54 147.04 30.44L147.08 30.34L146.98 29.86L146.96 29.6L146.8 29.12L146.68 28.94L146.5 28.48L146.38 28.34L146.18 27.94L146 27.72L145.62 27.4L145.46 27.26L145.06 26.98L144.48 26.52L144.22 26.42L143.82 26.26L143.54 26.28L143.1 26.24H143.02C142.94 26.24 142.84 26.26 142.76 26.24L142.68 26.22L142.54 26.24C142.46 26.26 142.38 26.26 142.3 26.26H142.2L141.76 26.28L141.5 26.34L141.16 26.46C141.1 26.48 141.04 26.5 140.98 26.52L140.84 26.54L140.32 26.84L140.16 26.94L139.76 27.24L139.58 27.36L139.32 27.7L139.14 27.98L139.02 28.26C138.98 28.36 138.92 28.44 138.86 28.52L138.82 28.56L138.62 28.96L138.56 29.14L138.42 29.62L138.36 29.88L138.34 30.34L138.28 30.6L138.34 30.88L138.32 31.08C138.32 31.1 138.3 31.16 138.3 31.18L138.28 31.36V31.8ZM165.008 23.8C165.068 23.9 165.108 24.04 165.128 24.18V24.2V24.76L165.108 25.32L165.128 25.56L165.108 26.08L165.128 26.34V26.8L165.108 27.04V27.48L165.068 27.74L165.028 28.18L165.108 28.42L165.088 28.92L165.108 29.06L165.088 29.48C165.088 29.52 165.068 29.56 165.068 29.62L165.048 29.76L165.068 30.22L165.108 30.46V30.92L165.148 31.14V31.66L165.128 31.9L165.088 32.4L165.108 32.62L165.128 32.84L165.108 33.06L165.068 33.28L165.048 33.6C165.048 33.66 165.048 33.7 165.028 33.76L164.988 33.94L164.948 34.26C164.948 34.34 164.908 34.4 164.888 34.48L164.848 34.62L164.688 35.1L164.648 35.2C164.628 35.3 164.588 35.42 164.528 35.5L164.328 35.78L164.208 35.96L163.928 36.28L163.768 36.46L163.588 36.68C163.508 36.78 163.368 36.88 163.248 36.94L162.828 37.26L162.668 37.38L162.408 37.54C162.308 37.6 162.188 37.64 162.068 37.66H162.048L161.608 37.82L161.408 37.9L160.948 38.1L160.768 38.16C160.728 38.18 160.648 38.2 160.588 38.22L160.148 38.28L159.948 38.3H159.448H159.328C159.208 38.32 159.088 38.32 158.988 38.3L158.888 38.28L158.648 38.26L158.128 38.24L157.928 38.22L157.388 38.14L157.188 38.1L156.868 38.04C156.768 38.02 156.648 38 156.548 37.94L156.528 37.92L156.108 37.74C156.028 37.7 155.988 37.68 155.928 37.64L155.848 37.58L155.388 37.3L155.248 37.22L154.928 36.98L154.468 36.64C154.408 36.58 154.348 36.52 154.288 36.46L154.168 36.32L154.028 36.16C153.888 36.02 153.788 35.88 153.748 35.7L153.608 35.48C153.548 35.38 153.508 35.26 153.488 35.16L153.468 35.12L153.308 34.82C153.288 34.76 153.248 34.72 153.228 34.64L153.188 34.5L153.108 34L153.088 33.88C153.068 33.82 153.068 33.74 153.068 33.66L153.088 33.26L153.048 33.02V32.82V32.6L153.068 32.32L153.007 31.94C153.007 31.9 152.988 31.8 152.988 31.76L153.007 31.62L152.988 31.18L153.007 30.96L153.048 30.5V30.28L153.088 29.78L153.007 29.54V29.2C153.007 29.14 153.007 29.04 153.028 28.98L153.048 28.82L153.068 28.32V28.1L153.048 27.66L153.028 27.52C153.007 27.42 153.007 27.32 153.007 27.22L153.048 26.84V26.26L152.988 26.06L153.007 25.66C153.007 25.58 153.028 25.54 153.048 25.46L153.068 25.38L153.088 24.88L153.007 24.6L152.968 24.12C152.968 24.06 152.988 23.98 153.048 23.92C153.048 23.92 153.048 23.9 153.068 23.9C153.128 23.8 153.508 23.68 153.608 23.72L154.048 23.66L154.308 23.58L154.588 23.56C154.668 23.56 154.768 23.56 154.848 23.58L154.988 23.62L155.508 23.6C155.588 23.6 155.668 23.62 155.768 23.66C155.888 23.74 155.968 23.82 156.028 23.92C156.088 24.06 156.108 24.18 156.108 24.32V24.56L156.088 24.82L156.068 25.26L156.088 25.56L156.148 26V26.1C156.168 26.18 156.168 26.26 156.168 26.34L156.128 26.72L156.168 27.26L156.188 27.42C156.188 27.5 156.188 27.58 156.188 27.64L156.148 27.98L156.128 28.2L156.068 28.62L156.128 28.84L156.148 29.32L156.168 29.44C156.168 29.5 156.168 29.6 156.168 29.66L156.128 30L156.168 30.2L156.148 30.66L156.168 30.9L156.128 31.36L156.148 31.58L156.188 31.94C156.188 32.02 156.208 32.08 156.188 32.18L156.168 32.32L156.188 32.52V32.76L156.168 32.96L156.228 33.44L156.248 33.62L156.448 34.1L156.528 34.22L156.768 34.6L156.967 34.78L157.408 35.08L157.908 35.26L158.128 35.36H158.608L158.788 35.38L159.048 35.36L159.328 35.4L159.508 35.34L160.028 35.38L160.228 35.3L160.608 35.18L160.828 35.06L161.188 34.76L161.328 34.66L161.628 34.26L161.688 33.98L161.888 33.48L161.948 33.02L161.967 32.76V32.5V32.28L161.928 32.14C161.908 32.06 161.908 31.94 161.908 31.84L161.928 31.46L162.008 30.96L162.028 30.72L162.068 30.22L162.048 30.06L162.028 29.8L162.008 29.58V29.4L162.028 28.94L162.008 28.74L161.988 28.26L161.948 27.98L161.908 27.46V27.26V26.84C161.908 26.76 161.888 26.74 161.908 26.66L161.988 26.22L162.048 26.06L162.068 25.6L162.048 25.42C162.048 25.34 162.028 25.28 162.048 25.2L162.068 25.08L162.028 24.86V24.62V24.08C162.028 24.08 162.288 23.7 162.468 23.64C162.508 23.62 162.548 23.62 162.568 23.62L162.828 23.6C162.948 23.6 163.088 23.62 163.208 23.66L163.248 23.68H163.708L164.008 23.66H164.508C164.628 23.62 164.768 23.62 164.928 23.66L165.008 23.8ZM171.674 37.9C171.634 37.94 171.554 37.98 171.434 38C171.314 38.02 171.214 38.02 171.114 38L170.834 37.96L170.594 37.98L170.214 38.04H170.094C169.994 38.04 169.874 38.04 169.774 38V37.98L169.454 38.02C169.394 38.02 169.314 38.02 169.254 38.02H169.134L169.094 37.98C168.994 37.86 168.934 37.74 168.874 37.62C168.854 37.54 168.854 37.46 168.854 37.38L168.834 37.02L168.774 36.76V36.48C168.774 36.32 168.794 36.18 168.854 36.04L168.814 35.52L168.774 35.34L168.754 34.82L168.794 34.58L168.774 34.22C168.774 34.14 168.774 34.1 168.774 34.04L168.794 33.92L168.854 33.48L168.814 33.18L168.834 32.76L168.754 32.52L168.734 32.24C168.714 32.06 168.734 31.92 168.794 31.8L168.834 31.36L168.874 31.1V30.6V30.3L168.834 29.8L168.794 29.56L168.754 29.28C168.734 29.18 168.734 29.08 168.754 28.98V28.88L168.774 28.54C168.774 28.46 168.774 28.42 168.794 28.36L168.834 28.16L168.794 27.86C168.774 27.74 168.794 27.64 168.814 27.52L168.834 27.5L168.814 27.28C168.794 27.1 168.814 26.96 168.874 26.82L168.854 26.38L168.814 26.12L168.854 25.62L168.834 25.38L168.754 24.76L168.734 24.38C168.734 24.3 168.714 24.2 168.734 24.12L168.754 24.04V23.84C168.814 23.78 168.874 23.72 168.954 23.68C169.114 23.6 169.274 23.62 169.414 23.66L169.814 23.68L170.054 23.7L170.394 23.66C170.454 23.66 170.554 23.64 170.614 23.64L170.794 23.66L171.234 23.62C171.374 23.6 171.514 23.6 171.654 23.64C171.794 23.82 171.874 24 171.874 24.16C171.874 24.16 171.874 24.16 171.874 24.18L171.854 24.7L171.894 24.96L171.914 25.34C171.914 25.42 171.914 25.44 171.914 25.52L171.894 25.62V26.1L171.934 26.3L171.914 26.66C171.914 26.74 171.894 26.84 171.874 26.92L171.834 27.04L171.894 27.48V27.72L171.914 28.28V28.34C171.914 28.42 171.934 28.48 171.914 28.58L171.874 28.94L171.914 29.18L171.894 29.64V29.86L171.834 30.34L171.814 30.54L171.834 31.08L171.814 31.32L171.894 31.84L171.914 32.3C171.914 32.38 171.894 32.42 171.894 32.48V32.56L171.854 32.84L171.834 33.2L171.774 33.44L171.834 33.74C171.854 33.86 171.834 33.92 171.814 34.04L171.794 34.18L171.834 34.64V34.88L171.814 35.32L171.854 35.6L171.874 36.06L171.854 36.3V36.74L171.834 37L171.854 37.38C171.854 37.5 171.834 37.56 171.814 37.66L171.774 37.8L171.674 37.9Z"
        fill={fill}
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export { OuiIcon };
