import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
import { IconProps } from "./iconProps";


const DeconnexionRondIcon: React.FC<IconProps> = ({width, fill}) => (
  <Svg
    width={width}
    height={width * (264/264)}
    viewBox="0 0 264 264"
    fill="none"
   
  >
    <G filter="url(#filter0_d_197_2394)">
      <G filter="url(#filter1_d_197_2394)">
        <Circle
          cx={132}
          cy={128}
          r={124}
          stroke={fill}
          strokeWidth={8}
          
        />
      </G>
      <G>
        <Path
          d="M125.688 139.688C125.688 141.304 125.045 142.854 123.903 143.996C122.76 145.139 121.21 145.781 119.594 145.781H87.0938C85.4776 145.781 83.9276 145.139 82.7848 143.996C81.642 142.854 81 141.304 81 139.688V50.3125C81 48.6963 81.642 47.1464 82.7848 46.0036C83.9276 44.8608 85.4776 44.2188 87.0938 44.2188H119.594C121.21 44.2188 122.76 44.8608 123.903 46.0036C125.045 47.1464 125.688 48.6963 125.688 50.3125C125.688 51.9287 125.045 53.4786 123.903 54.6214C122.76 55.7642 121.21 56.4062 119.594 56.4062H93.1875V133.594H119.594C121.21 133.594 122.76 134.236 123.903 135.379C125.045 136.521 125.688 138.071 125.688 139.688ZM180.78 90.6887L160.468 70.3762C159.323 69.2314 157.77 68.5883 156.151 68.5883C154.532 68.5883 152.98 69.2314 151.835 70.3762C150.69 71.521 150.047 73.0736 150.047 74.6926C150.047 76.3115 150.69 77.8642 151.835 79.009L161.742 88.9062H119.594C117.978 88.9062 116.428 89.5483 115.285 90.6911C114.142 91.8339 113.5 93.3838 113.5 95C113.5 96.6162 114.142 98.1661 115.285 99.3089C116.428 100.452 117.978 101.094 119.594 101.094H161.742L151.83 111.001C150.685 112.146 150.042 113.699 150.042 115.318C150.042 116.937 150.685 118.489 151.83 119.634C152.974 120.779 154.527 121.422 156.146 121.422C157.765 121.422 159.318 120.779 160.463 119.634L180.775 99.3215C181.343 98.7557 181.795 98.0832 182.103 97.3427C182.411 96.6022 182.569 95.8082 182.57 95.0061C182.57 94.2041 182.412 93.4099 182.105 92.669C181.798 91.9281 181.348 91.2551 180.78 90.6887Z"
          fill={fill}
        />
      </G>
      <Path
        d="M86.1657 190.68C85.9557 190.71 85.7457 190.71 85.5357 190.62L85.4457 190.59L85.0257 191.01L84.9957 191.37L85.0857 192.06L85.1157 192.36C85.1157 192.48 85.1157 192.51 85.1157 192.63L85.0557 193.29L85.0857 193.62V194.07C85.0857 194.16 85.0857 194.28 85.0557 194.37L85.0257 194.52L85.0857 194.94C85.1157 195.06 85.1157 195.21 85.0857 195.33L85.0557 195.57L85.0257 196.11L85.0557 196.2C85.0857 196.32 85.0857 196.5 85.0557 196.62L84.9657 197.04L84.9957 197.46C84.9957 197.64 84.9057 197.82 84.7557 198L84.3357 197.97H84.3057L84.0057 197.91L83.3457 197.88L83.0157 197.94L82.2657 197.97L81.9657 198L81.5157 198.06C81.3357 198.09 81.1857 198.09 81.0057 198.03L80.9157 198L80.8857 197.97C80.6757 197.73 80.4957 197.46 80.4657 197.19C80.4657 197.19 80.4657 197.19 80.4657 197.16L80.3757 196.41C80.3757 196.35 80.3757 196.26 80.3757 196.2V195.66C80.3757 195.54 80.4057 195.39 80.4357 195.24L80.4957 195.12L80.5257 194.4L80.4657 194.04L80.4357 193.38L80.3157 192.99L80.2857 192.42C80.2857 192.33 80.3157 192.21 80.3157 192.12L80.3457 191.88L80.3757 191.13V190.83L80.4357 190.11L80.4657 189.72L80.3757 189.15C80.3757 189.06 80.3757 189 80.3757 188.88V188.64V187.92L80.3457 187.77C80.3157 187.56 80.3157 187.38 80.3457 187.17L80.4357 186.78L80.4057 186.51L80.5557 185.73L80.5257 185.4L80.4357 184.65L80.4057 184.35C80.4057 184.29 80.4057 184.17 80.4057 184.11L80.4357 183.63V183.24L80.3457 182.58L80.3157 182.46C80.3157 182.34 80.3457 182.28 80.3457 182.19L80.4357 181.53L80.4057 181.11L80.4657 180.48L80.4357 180.06L80.3757 179.67C80.3457 179.46 80.3457 179.28 80.4057 179.04V178.95L80.3757 178.32L80.3457 178.11C80.3157 177.99 80.3157 177.84 80.3157 177.72L80.3457 177.36C80.3457 177.27 80.3757 177.24 80.3757 177.18L80.4657 176.85C80.7357 176.58 81.0057 176.43 81.2457 176.43L81.9657 176.46L82.2657 176.43L82.9557 176.49L83.7657 176.52L84.0657 176.37L84.8157 176.34L85.2057 176.4L85.8357 176.43L86.1657 176.49L86.8257 176.55H87.2757L87.5757 176.58L88.0257 176.61H88.3557H88.7757L89.1357 176.67L89.8257 176.73L90.1857 176.82L90.6657 176.88C90.7557 176.91 90.8457 176.91 90.9057 176.94L91.1757 177.03L91.8657 177.27L92.1057 177.36L92.6757 177.57C92.7657 177.6 92.8557 177.66 92.9157 177.69L93.0357 177.78L93.6057 178.29L93.8157 178.5L94.3257 179.07L94.5657 179.43L94.8957 180L94.9557 180.06C95.0457 180.18 95.1057 180.3 95.1657 180.45L95.2257 180.57C95.2857 180.72 95.3157 180.9 95.3157 181.11V181.17L95.4357 181.77L95.5257 182.1L95.5857 182.52C95.6157 182.73 95.6157 182.94 95.5857 183.15V183.18L95.6757 183.54L95.6457 183.87V183.96C95.6757 184.14 95.6757 184.23 95.6457 184.41L95.5857 184.77C95.5857 184.83 95.5557 184.95 95.5257 185.01L95.4657 185.22L95.3157 185.94L95.1957 186.3L94.9257 186.99L94.6257 187.53C94.5657 187.62 94.4757 187.74 94.4157 187.83L94.3257 187.95L93.9957 188.34C93.8757 188.49 93.6957 188.61 93.5157 188.7L93.4257 188.76L93.1857 189.03C93.0657 189.18 92.8857 189.33 92.7057 189.42L92.6457 189.45L92.3157 189.66C92.2257 189.72 92.1357 189.75 92.0457 189.78L91.9257 189.81L91.2957 190.08L90.9957 190.14C90.9357 190.14 90.8757 190.2 90.8157 190.2L90.1857 190.29L90.0357 190.35C89.8857 190.41 89.6757 190.47 89.4957 190.47L88.9857 190.5L88.2057 190.62L87.5457 190.59L87.2457 190.65L87.0657 190.68C86.9157 190.71 86.7357 190.71 86.5857 190.68L86.4957 190.65L86.1657 190.68ZM86.1057 180.21L85.8057 180.3L85.3857 180.36L85.0557 180.69L85.0857 181.14L85.0257 181.77V182.13V182.61C85.0257 182.79 85.0257 182.97 84.9657 183.18L84.9357 183.24L84.9957 183.81L84.9657 184.14L84.9957 184.86L85.0557 185.22L85.1157 185.76C85.1457 185.94 85.1157 186.03 85.0857 186.21V186.3L85.4457 186.66L85.7457 186.72L86.0157 186.78L86.8257 186.75L87.0657 186.72C87.1257 186.72 87.2457 186.75 87.3057 186.75L87.5457 186.78L87.9657 186.72L88.3557 186.78L89.0757 186.6L89.4057 186.42L90.0657 186.03L90.3657 185.85L90.7257 185.34V185.01L90.9057 184.32L90.9657 184.02L90.9357 183.57L90.9657 182.91L90.8457 182.22L90.7557 181.86L90.2757 181.35L89.9457 181.08L89.1957 180.66L88.2957 180.48L87.9657 180.45L87.6657 180.42C87.6057 180.42 87.4857 180.39 87.4257 180.36L87.1557 180.3L86.8557 180.27L86.1057 180.21ZM95.4695 197.88C95.4395 197.79 95.4695 197.58 95.5595 197.37L95.7095 197.1L95.8895 196.5L95.9795 196.26C96.0095 196.2 96.0395 196.14 96.0695 196.05L96.2195 195.81C96.3095 195.63 96.3995 195.48 96.5795 195.33L96.9695 194.7L97.0295 194.43L97.3295 193.71L97.4795 193.41L97.7495 192.87L97.9895 192.57L98.2895 191.91L98.4095 191.49L98.7395 190.86L98.7995 190.56L98.9495 190.14C99.0095 189.96 99.1295 189.81 99.2495 189.66L99.2795 189.63L99.3995 189.27C99.4595 189.09 99.5495 188.97 99.6395 188.85L99.6995 188.79L99.9995 188.13L100.089 187.74L100.269 187.32C100.329 187.2 100.419 187.05 100.509 186.93L100.659 186.78L100.989 186.21L101.139 185.97L101.409 185.31L101.469 184.98L101.649 184.5C101.679 184.38 101.739 184.26 101.799 184.17L101.949 183.96L102.279 183.39L102.459 183.03L102.759 182.46L102.909 182.22L103.269 181.62L103.389 181.26L103.569 180.72C103.599 180.63 103.629 180.54 103.689 180.42L103.779 180.27L104.079 179.58L104.199 179.28L104.529 178.65L104.559 178.53C104.589 178.35 104.679 178.14 104.769 177.99L104.949 177.66L105.039 177.39L105.399 176.82C105.459 176.64 105.579 176.43 105.729 176.28L105.819 176.22L105.999 176.52L106.179 176.85L106.449 177.54L106.689 177.84L106.959 178.44L107.199 178.74L107.469 179.34L107.589 179.67L107.799 180.33L107.979 180.66L108.339 181.29C108.489 181.44 108.639 181.59 108.729 181.83L108.819 182.04L108.999 182.4L109.239 183.03L109.389 183.36L109.659 184.02L109.749 184.35L110.109 184.92L110.289 185.28L110.529 185.64C110.619 185.76 110.679 185.88 110.709 186.06L110.739 186.15L111.039 186.78L111.219 187.08L111.519 187.77L111.639 188.1L111.909 188.82L111.999 189.15L112.269 189.57C112.329 189.69 112.359 189.78 112.389 189.93L112.419 190.05L112.719 190.65L112.929 191.07L113.289 191.76L113.679 192.39L114.129 193.29L114.339 193.71L114.549 194.1C114.609 194.25 114.669 194.37 114.699 194.49L114.729 194.67L115.029 195.24L115.239 195.6L115.569 196.23L115.689 196.53L115.899 197.13L115.989 197.28C116.049 197.4 116.079 197.55 116.109 197.7V197.79L115.899 198.09L115.569 198.03C115.509 198.03 115.419 198.03 115.359 198.03H114.699L114.339 198L113.529 198.06L113.229 198.09C113.109 198.12 112.989 198.12 112.869 198.12L112.389 198.09C112.239 198.12 112.029 198.09 111.789 197.97C111.519 197.79 111.339 197.58 111.249 197.37C111.249 197.34 111.219 197.31 111.219 197.31L110.919 196.53L110.649 195.84L110.529 195.57L110.259 195L110.049 194.61L109.539 194.34L109.209 194.25L108.759 194.22H108.369H108.099L107.289 194.16H106.449L106.029 194.31L105.249 194.34L104.649 194.31C104.529 194.31 104.409 194.28 104.289 194.25L104.169 194.22L103.569 194.19L103.239 194.22H102.669C102.579 194.22 102.489 194.22 102.399 194.19L102.039 194.1L101.529 194.46L101.349 194.79L101.229 195.27C101.169 195.48 101.109 195.63 100.989 195.78L100.929 196.2C100.899 196.35 100.839 196.5 100.749 196.68L100.719 196.71L100.509 197.37L100.479 197.46C100.389 197.64 100.239 197.82 100.089 197.97L99.9095 198.12L99.6995 198.09C99.6095 198.06 99.5495 198.09 99.4595 198.09H99.1595L98.5295 198.03L98.1095 198L97.2995 198.06H96.9995H96.3095H95.9195C95.7095 198.06 95.5295 198 95.4695 197.88ZM103.629 190.98L104.049 190.89L104.799 190.98L105.099 190.92H105.909L106.599 190.95L106.929 190.86L107.709 190.92L108.099 190.95L108.279 190.59L108.219 190.26L107.859 189.6L107.649 189.18L107.379 188.64C107.349 188.55 107.319 188.46 107.289 188.37L107.259 188.13L107.079 187.56L106.989 187.23L106.719 186.78C106.689 186.69 106.629 186.63 106.599 186.51L106.539 186.33L106.299 185.94C106.239 185.82 106.179 185.67 106.149 185.55L106.119 185.43L105.999 185.16H105.729L105.519 185.46L105.219 186.21L105.069 186.6L104.709 187.26L104.589 187.62L104.319 188.22L104.229 188.49L104.019 189.18L103.869 189.57L103.599 190.29L103.419 190.65L103.629 190.98ZM120.05 176.55C120.17 176.46 120.38 176.37 120.65 176.31L121.31 176.4L121.73 176.37L122.51 176.46L122.87 176.37L123.59 176.4L123.98 176.34L124.7 176.4L125 176.43L125.66 176.52L125.93 176.49L126.62 176.55L127.04 176.58C127.25 176.52 127.46 176.52 127.67 176.55L127.76 176.58L128.75 176.61L129.11 176.58H129.44C129.65 176.58 129.89 176.61 130.1 176.7L130.7 176.79C130.79 176.79 130.91 176.82 131 176.85L131.21 176.91L131.75 177.3L131.84 177.33C132.02 177.39 132.23 177.45 132.38 177.57L132.68 177.78L132.74 177.81C132.92 177.87 133.07 177.96 133.22 178.08L133.55 178.32L133.73 178.53C133.76 178.56 133.79 178.56 133.82 178.62L134.18 179.04V179.07C134.39 179.22 134.51 179.37 134.63 179.55L134.84 179.88L134.87 179.94C135.02 180.12 135.11 180.27 135.17 180.48L135.26 180.69C135.29 180.81 135.32 180.87 135.32 180.99L135.35 181.23L135.47 181.86L135.59 182.25L135.65 182.43C135.74 182.7 135.77 182.97 135.71 183.27V183.3L135.8 183.57L135.74 183.99V184.38L135.68 185.1V185.13C135.68 185.37 135.59 185.55 135.5 185.73L135.35 186.06L135.14 186.42L134.84 186.9C134.78 187.02 134.72 187.11 134.66 187.17L134.54 187.29L134.39 187.56C134.27 187.83 134.12 188.01 133.91 188.13L133.49 188.55C133.43 188.61 133.34 188.64 133.28 188.7L133.07 188.85L132.53 189.15L132.23 189.3L131.99 189.48L131.81 190.02L132.02 190.35L132.29 190.98L132.56 191.31L132.86 191.82L133.04 192.15L133.31 192.72L133.52 193.14L133.76 193.77L134 194.01L134.33 194.61L134.36 194.67C134.45 194.79 134.51 194.91 134.57 195.06L134.75 195.51L134.87 195.84L135.23 196.38L135.44 196.65L135.62 197.01C135.68 197.13 135.74 197.28 135.77 197.4L135.83 197.58C135.71 197.82 135.53 198 135.32 198.03L134.99 198.09L134.51 198.12C134.33 198.12 134.15 198.12 134 198.06L133.88 198.03H133.22H133.13C132.98 198.06 132.83 198.06 132.68 198.03L132.29 197.97H131.9C131.69 197.97 131.48 197.88 131.3 197.79L131.09 197.67L131 197.61C130.91 197.52 130.88 197.4 130.82 197.25L130.64 196.77L130.49 196.53L130.16 195.78L130.04 195.45L129.74 194.79L129.62 194.58L129.32 194.07C129.26 193.98 129.2 193.92 129.17 193.8L129.14 193.62L128.81 193.23C128.72 193.14 128.69 193.02 128.63 192.87L128.57 192.72L128.24 192.12L128.15 191.97C128.15 191.94 128.09 191.88 128.09 191.82L127.94 191.25L127.67 190.83L127.19 190.41L126.8 190.44L126.2 190.38L125.81 190.41H125.12L124.73 190.53L124.4 190.89L124.49 191.16L124.4 191.97L124.37 192.33L124.34 193.02L124.37 193.38L124.28 194.1V194.34L124.31 195.12L124.4 195.45L124.37 196.29L124.28 197.13L124.34 197.49C124.31 197.49 124.1 197.82 123.89 198C123.77 198.09 123.62 198.09 123.5 198.09H123.38L122.45 198L121.67 197.97L121.37 198.06L120.56 198C120.56 198 119.87 197.55 119.84 197.31C119.84 197.31 119.84 197.31 119.84 197.28L119.9 196.47L119.87 196.08L119.84 195.36V195.09L119.87 194.31V193.98L119.84 193.26L119.87 193.02L119.81 192.21L119.75 191.85L119.69 191.13L119.72 190.77L119.78 190.02L119.72 189.72L119.81 189.03L119.9 188.61L119.84 187.92L119.81 187.59L119.75 187.14C119.72 186.99 119.72 186.9 119.75 186.75L119.78 186.6L119.84 185.85L119.81 185.52L119.9 184.77L119.87 184.44V183.63L119.84 183.36C119.84 183.24 119.84 183.18 119.84 183.09L119.93 182.61L119.96 182.25L119.9 181.83C119.9 181.71 119.87 181.53 119.9 181.41L119.93 181.26L119.87 180.42L119.84 180.27C119.81 180.15 119.81 180.06 119.81 179.97L119.84 179.4L119.87 179.04L119.84 178.29L119.81 178.02L119.75 177.48C119.75 177.42 119.72 177.33 119.72 177.27L119.75 177.06C119.81 176.85 119.9 176.64 120.05 176.55ZM126.26 180.27L125.78 180.39L125.15 180.36L124.76 180.3L124.49 180.66L124.46 180.99L124.43 181.71L124.4 182.1L124.31 182.79L124.34 183.21L124.37 184.05L124.34 184.86V185.19L124.28 185.88L124.34 186.15V186.48L124.7 186.78H125.36L125.81 186.75H126.11L127.55 186.66L128.3 186.69L129.05 186.6L129.41 186.51L129.98 186.09L130.34 185.85L130.64 185.22L130.82 184.86L130.91 184.26V183.87L130.85 183.51V183.21L130.88 182.85L130.76 182.25L130.67 181.92L130.25 181.35L129.95 181.05L129.26 180.6L128.9 180.51L128.27 180.3L127.94 180.27H127.85C127.7 180.3 127.52 180.33 127.37 180.3L127.22 180.27H126.86H126.26ZM155.011 180.06C154.891 180.21 154.711 180.27 154.471 180.3L153.631 180.27H153.241H152.491L152.131 180.21H151.411H151.081L150.811 180.18L150.091 180.24L149.731 180.27L149.311 180.6L149.281 181.02L149.311 181.68C149.311 181.8 149.311 181.86 149.281 181.98L149.221 182.19L149.251 182.85L149.191 183.21L149.161 183.84L149.221 184.26V184.95L149.251 185.28L149.221 186.03L149.251 186.39V187.05L149.281 187.35L149.311 188.1L149.281 188.73C149.281 188.88 149.251 188.97 149.221 189.09L149.131 189.36L149.071 190.05L149.131 190.38L149.161 191.25L149.221 192.09L149.311 192.39V193.23L149.281 193.56L149.221 194.34L149.161 195.15L149.251 195.48V196.17V196.53L149.161 197.16C149.161 197.16 148.831 197.79 148.621 198C148.561 198.06 148.471 198.06 148.381 198.06L147.661 198.03L147.361 198.06H146.611H146.221L145.531 198C145.261 197.97 144.961 197.88 144.721 197.67L144.691 197.64L144.661 197.28L144.631 196.89C144.601 196.59 144.631 196.41 144.691 196.23V195.54L144.661 195.39C144.601 195.18 144.571 195 144.601 194.82L144.661 194.43L144.601 194.16L144.631 193.56L144.511 193.2L144.481 192.6C144.481 192.48 144.481 192.42 144.511 192.3L144.571 192.06L144.631 191.49L144.691 191.1L144.751 190.47L144.721 190.08L144.601 189.42L144.541 189.15C144.541 189.06 144.541 188.97 144.541 188.85V188.43C144.541 188.28 144.571 188.19 144.601 188.07L144.631 187.98L144.721 187.26L144.661 186.87L144.691 186.15L144.631 185.91L144.661 185.28L144.631 184.98L144.571 184.26L144.541 184.08C144.541 183.96 144.541 183.93 144.541 183.81L144.601 183.24L144.691 182.97L144.721 182.19L144.631 181.8L144.661 181.08L144.631 180.69L144.181 180.27L143.821 180.3L143.221 180.33C143.131 180.33 143.041 180.36 142.951 180.33L142.741 180.3L142.411 180.27H142.351C142.141 180.33 141.931 180.36 141.721 180.3L141.631 180.33C141.451 180.36 141.241 180.36 141.061 180.33L140.701 180.24H140.221H139.531L139.231 180.27C139.231 180.27 138.661 179.91 138.571 179.64C138.541 179.61 138.541 179.58 138.541 179.52V179.31L138.511 178.8C138.511 178.68 138.481 178.59 138.511 178.47L138.571 178.26L138.631 177.45L138.541 177.18C138.541 177.03 138.691 176.76 138.871 176.52L139.261 176.43L139.921 176.4C140.011 176.4 140.071 176.4 140.161 176.43L140.311 176.46L141.091 176.49L141.361 176.43L142.081 176.4H142.381L143.071 176.43L143.431 176.37L144.031 176.4C144.151 176.4 144.241 176.4 144.361 176.43L144.481 176.46H145.201H145.441L146.131 176.52L146.491 176.4L147.241 176.43L147.721 176.37H148.171C148.351 176.37 148.531 176.4 148.681 176.46L148.741 176.49H149.401H149.701L150.421 176.55L150.691 176.52L151.351 176.49L151.801 176.37L152.401 176.31C152.491 176.31 152.581 176.31 152.671 176.31L153.391 176.4L153.721 176.43L154.441 176.49C154.441 176.49 154.801 176.67 155.011 176.88C155.161 177.03 155.161 177.21 155.161 177.42V177.45L155.251 178.17L155.281 178.56L155.311 178.95C155.341 179.1 155.341 179.25 155.311 179.4L155.281 179.49L155.191 179.85L155.011 180.06ZM163.446 197.85C163.386 197.91 163.266 197.97 163.086 198C162.906 198.03 162.756 198.03 162.606 198L162.186 197.94L161.826 197.97L161.256 198.06H161.076C160.926 198.06 160.746 198.06 160.596 198V197.97L160.116 198.03C160.026 198.03 159.906 198.03 159.816 198.03H159.636L159.576 197.97C159.426 197.79 159.336 197.61 159.246 197.43C159.216 197.31 159.216 197.19 159.216 197.07L159.186 196.53L159.096 196.14V195.72C159.096 195.48 159.126 195.27 159.216 195.06L159.156 194.28L159.096 194.01L159.066 193.23L159.126 192.87L159.096 192.33C159.096 192.21 159.096 192.15 159.096 192.06L159.126 191.88L159.216 191.22L159.156 190.77L159.186 190.14L159.066 189.78L159.036 189.36C159.006 189.09 159.036 188.88 159.126 188.7L159.186 188.04L159.246 187.65V186.9V186.45L159.186 185.7L159.126 185.34L159.066 184.92C159.036 184.77 159.036 184.62 159.066 184.47V184.32L159.096 183.81C159.096 183.69 159.096 183.63 159.126 183.54L159.186 183.24L159.126 182.79C159.096 182.61 159.126 182.46 159.156 182.28L159.186 182.25L159.156 181.92C159.126 181.65 159.156 181.44 159.246 181.23L159.216 180.57L159.156 180.18L159.216 179.43L159.186 179.07L159.066 178.14L159.036 177.57C159.036 177.45 159.006 177.3 159.036 177.18L159.066 177.06V176.76C159.156 176.67 159.246 176.58 159.366 176.52C159.606 176.4 159.846 176.43 160.056 176.49L160.656 176.52L161.016 176.55L161.526 176.49C161.616 176.49 161.766 176.46 161.856 176.46L162.126 176.49L162.786 176.43C162.996 176.4 163.206 176.4 163.416 176.46C163.626 176.73 163.746 177 163.746 177.24C163.746 177.24 163.746 177.24 163.746 177.27L163.716 178.05L163.776 178.44L163.806 179.01C163.806 179.13 163.806 179.16 163.806 179.28L163.776 179.43V180.15L163.836 180.45L163.806 180.99C163.806 181.11 163.776 181.26 163.746 181.38L163.686 181.56L163.776 182.22V182.58L163.806 183.42V183.51C163.806 183.63 163.836 183.72 163.806 183.87L163.746 184.41L163.806 184.77L163.776 185.46V185.79L163.686 186.51L163.656 186.81L163.686 187.62L163.656 187.98L163.776 188.76L163.806 189.45C163.806 189.57 163.776 189.63 163.776 189.72V189.84L163.716 190.26L163.686 190.8L163.596 191.16L163.686 191.61C163.716 191.79 163.686 191.88 163.656 192.06L163.626 192.27L163.686 192.96V193.32L163.656 193.98L163.716 194.4L163.746 195.09L163.716 195.45V196.11L163.686 196.5L163.716 197.07C163.716 197.25 163.686 197.34 163.656 197.49L163.596 197.7L163.446 197.85ZM169.855 176.55C169.975 176.46 170.185 176.37 170.455 176.31L171.115 176.4L171.535 176.37L172.315 176.46L172.675 176.37L173.395 176.4L173.785 176.34L174.505 176.4L174.805 176.43L175.465 176.52L175.735 176.49L176.425 176.55L176.845 176.58C177.055 176.52 177.265 176.52 177.475 176.55L177.565 176.58L178.555 176.61L178.915 176.58H179.245C179.455 176.58 179.695 176.61 179.905 176.7L180.505 176.79C180.595 176.79 180.715 176.82 180.805 176.85L181.015 176.91L181.555 177.3L181.645 177.33C181.825 177.39 182.035 177.45 182.185 177.57L182.485 177.78L182.545 177.81C182.725 177.87 182.875 177.96 183.025 178.08L183.355 178.32L183.535 178.53C183.565 178.56 183.595 178.56 183.625 178.62L183.985 179.04V179.07C184.195 179.22 184.315 179.37 184.435 179.55L184.645 179.88L184.675 179.94C184.825 180.12 184.915 180.27 184.975 180.48L185.065 180.69C185.095 180.81 185.125 180.87 185.125 180.99L185.155 181.23L185.275 181.86L185.395 182.25L185.455 182.43C185.545 182.7 185.575 182.97 185.515 183.27V183.3L185.605 183.57L185.545 183.99V184.38L185.485 185.1V185.13C185.485 185.37 185.395 185.55 185.305 185.73L185.155 186.06L184.945 186.42L184.645 186.9C184.585 187.02 184.525 187.11 184.465 187.17L184.345 187.29L184.195 187.56C184.075 187.83 183.925 188.01 183.715 188.13L183.295 188.55C183.235 188.61 183.145 188.64 183.085 188.7L182.875 188.85L182.335 189.15L182.035 189.3L181.795 189.48L181.615 190.02L181.825 190.35L182.095 190.98L182.365 191.31L182.665 191.82L182.845 192.15L183.115 192.72L183.325 193.14L183.565 193.77L183.805 194.01L184.135 194.61L184.165 194.67C184.255 194.79 184.315 194.91 184.375 195.06L184.555 195.51L184.675 195.84L185.035 196.38L185.245 196.65L185.425 197.01C185.485 197.13 185.545 197.28 185.575 197.4L185.635 197.58C185.515 197.82 185.335 198 185.125 198.03L184.795 198.09L184.315 198.12C184.135 198.12 183.955 198.12 183.805 198.06L183.685 198.03H183.025H182.935C182.785 198.06 182.635 198.06 182.485 198.03L182.095 197.97H181.705C181.495 197.97 181.285 197.88 181.105 197.79L180.895 197.67L180.805 197.61C180.715 197.52 180.685 197.4 180.625 197.25L180.445 196.77L180.295 196.53L179.965 195.78L179.845 195.45L179.545 194.79L179.425 194.58L179.125 194.07C179.065 193.98 179.005 193.92 178.975 193.8L178.945 193.62L178.615 193.23C178.525 193.14 178.495 193.02 178.435 192.87L178.375 192.72L178.045 192.12L177.955 191.97C177.955 191.94 177.895 191.88 177.895 191.82L177.745 191.25L177.475 190.83L176.995 190.41L176.605 190.44L176.005 190.38L175.615 190.41H174.925L174.535 190.53L174.205 190.89L174.295 191.16L174.205 191.97L174.175 192.33L174.145 193.02L174.175 193.38L174.085 194.1V194.34L174.115 195.12L174.205 195.45L174.175 196.29L174.085 197.13L174.145 197.49C174.115 197.49 173.905 197.82 173.695 198C173.575 198.09 173.425 198.09 173.305 198.09H173.185L172.255 198L171.475 197.97L171.175 198.06L170.365 198C170.365 198 169.675 197.55 169.645 197.31C169.645 197.31 169.645 197.31 169.645 197.28L169.705 196.47L169.675 196.08L169.645 195.36V195.09L169.675 194.31V193.98L169.645 193.26L169.675 193.02L169.615 192.21L169.555 191.85L169.495 191.13L169.525 190.77L169.585 190.02L169.525 189.72L169.615 189.03L169.705 188.61L169.645 187.92L169.615 187.59L169.555 187.14C169.525 186.99 169.525 186.9 169.555 186.75L169.585 186.6L169.645 185.85L169.615 185.52L169.705 184.77L169.675 184.44V183.63L169.645 183.36C169.645 183.24 169.645 183.18 169.645 183.09L169.735 182.61L169.765 182.25L169.705 181.83C169.705 181.71 169.675 181.53 169.705 181.41L169.735 181.26L169.675 180.42L169.645 180.27C169.615 180.15 169.615 180.06 169.615 179.97L169.645 179.4L169.675 179.04L169.645 178.29L169.615 178.02L169.555 177.48C169.555 177.42 169.525 177.33 169.525 177.27L169.555 177.06C169.615 176.85 169.705 176.64 169.855 176.55ZM176.065 180.27L175.585 180.39L174.955 180.36L174.565 180.3L174.295 180.66L174.265 180.99L174.235 181.71L174.205 182.1L174.115 182.79L174.145 183.21L174.175 184.05L174.145 184.86V185.19L174.085 185.88L174.145 186.15V186.48L174.505 186.78H175.165L175.615 186.75H175.915L177.355 186.66L178.105 186.69L178.855 186.6L179.215 186.51L179.785 186.09L180.145 185.85L180.445 185.22L180.625 184.86L180.715 184.26V183.87L180.655 183.51V183.21L180.685 182.85L180.565 182.25L180.475 181.92L180.055 181.35L179.755 181.05L179.065 180.6L178.705 180.51L178.075 180.3L177.745 180.27H177.655C177.505 180.3 177.325 180.33 177.175 180.3L177.025 180.27H176.665H176.065Z"
        fill={fill}
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export { DeconnexionRondIcon };