import * as React from 'react';

import Svg, { G, Circle, Path, Defs } from 'react-native-svg';

import { IconProps } from './iconProps';

const DarkThemeIcon: React.FC<IconProps> = ({ width, background }) => (
  <Svg width={width} height={width * (264 / 264)} viewBox="0 0 264 264" fill={background}>
    <G filter="url(#filter0_d_149_1089)">
      <G filter="url(#filter1_d_149_1089)">
        <Circle cx={132} cy={128} r={124} stroke="#FAE6BB" strokeWidth={4} />
      </G>
      <G filter="url(#filter2_b_149_1089)">
        <Path
          d="M127.938 54.3125V42.125C127.938 41.0476 128.366 40.0142 129.127 39.2524C129.889 38.4905 130.923 38.0625 132 38.0625C133.077 38.0625 134.111 38.4905 134.873 39.2524C135.634 40.0142 136.062 41.0476 136.062 42.125V54.3125C136.062 55.3899 135.634 56.4233 134.873 57.1851C134.111 57.947 133.077 58.375 132 58.375C130.923 58.375 129.889 57.947 129.127 57.1851C128.366 56.4233 127.938 55.3899 127.938 54.3125ZM164.5 99C164.5 105.428 162.594 111.711 159.023 117.056C155.452 122.401 150.376 126.566 144.437 129.026C138.499 131.486 131.964 132.13 125.66 130.876C119.355 129.622 113.564 126.526 109.019 121.981C104.474 117.436 101.378 111.645 100.124 105.34C98.8705 99.0361 99.5141 92.5014 101.974 86.5628C104.434 80.6242 108.599 75.5484 113.944 71.9772C119.289 68.4061 125.572 66.5 132 66.5C140.617 66.5094 148.878 69.9365 154.971 76.0294C161.063 82.1223 164.491 90.3834 164.5 99ZM156.375 99C156.375 94.1791 154.945 89.4664 152.267 85.458C149.589 81.4495 145.782 78.3253 141.328 76.4804C136.874 74.6356 131.973 74.1528 127.245 75.0934C122.516 76.0339 118.173 78.3554 114.764 81.7643C111.355 85.1732 109.034 89.5164 108.093 94.2447C107.153 98.973 107.636 103.874 109.48 108.328C111.325 112.782 114.45 116.589 118.458 119.267C122.466 121.945 127.179 123.375 132 123.375C138.463 123.368 144.659 120.798 149.228 116.228C153.798 111.659 156.368 105.463 156.375 99ZM96.6258 69.3742C97.3881 70.1365 98.422 70.5648 99.5 70.5648C100.578 70.5648 101.612 70.1365 102.374 69.3742C103.137 68.6119 103.565 67.578 103.565 66.5C103.565 65.422 103.137 64.3881 102.374 63.6258L94.2492 55.5008C93.4869 54.7385 92.453 54.3102 91.375 54.3102C90.297 54.3102 89.2631 54.7385 88.5008 55.5008C87.7385 56.2631 87.3102 57.297 87.3102 58.375C87.3102 59.453 87.7385 60.4869 88.5008 61.2492L96.6258 69.3742ZM96.6258 128.626L88.5008 136.751C87.7385 137.513 87.3102 138.547 87.3102 139.625C87.3102 140.703 87.7385 141.737 88.5008 142.499C89.2631 143.262 90.297 143.69 91.375 143.69C92.453 143.69 93.4869 143.262 94.2492 142.499L102.374 134.374C102.752 133.997 103.051 133.549 103.255 133.056C103.46 132.562 103.565 132.034 103.565 131.5C103.565 130.966 103.46 130.438 103.255 129.944C103.051 129.451 102.752 129.003 102.374 128.626C101.997 128.248 101.549 127.949 101.056 127.745C100.562 127.54 100.034 127.435 99.5 127.435C98.9662 127.435 98.4376 127.54 97.9445 127.745C97.4513 127.949 97.0032 128.248 96.6258 128.626ZM164.5 70.5625C165.034 70.5629 165.562 70.4582 166.055 70.2543C166.549 70.0504 166.997 69.7514 167.374 69.3742L175.499 61.2492C176.262 60.4869 176.69 59.453 176.69 58.375C176.69 57.297 176.262 56.2631 175.499 55.5008C174.737 54.7385 173.703 54.3102 172.625 54.3102C171.547 54.3102 170.513 54.7385 169.751 55.5008L161.626 63.6258C161.057 64.1939 160.67 64.9181 160.513 65.7066C160.356 66.495 160.436 67.3124 160.744 68.0551C161.051 68.7978 161.573 69.4325 162.241 69.8789C162.91 70.3252 163.696 70.5631 164.5 70.5625ZM167.374 128.626C166.612 127.863 165.578 127.435 164.5 127.435C163.422 127.435 162.388 127.863 161.626 128.626C160.863 129.388 160.435 130.422 160.435 131.5C160.435 132.578 160.863 133.612 161.626 134.374L169.751 142.499C170.128 142.877 170.576 143.176 171.069 143.38C171.563 143.585 172.091 143.69 172.625 143.69C173.159 143.69 173.687 143.585 174.181 143.38C174.674 143.176 175.122 142.877 175.499 142.499C175.877 142.122 176.176 141.674 176.38 141.181C176.585 140.687 176.69 140.159 176.69 139.625C176.69 139.091 176.585 138.563 176.38 138.069C176.176 137.576 175.877 137.128 175.499 136.751L167.374 128.626ZM91.375 99C91.375 97.9226 90.947 96.8892 90.1851 96.1274C89.4233 95.3655 88.3899 94.9375 87.3125 94.9375H75.125C74.0476 94.9375 73.0142 95.3655 72.2524 96.1274C71.4905 96.8892 71.0625 97.9226 71.0625 99C71.0625 100.077 71.4905 101.111 72.2524 101.873C73.0142 102.634 74.0476 103.062 75.125 103.062H87.3125C88.3899 103.062 89.4233 102.634 90.1851 101.873C90.947 101.111 91.375 100.077 91.375 99ZM132 139.625C130.923 139.625 129.889 140.053 129.127 140.815C128.366 141.577 127.938 142.61 127.938 143.688V155.875C127.938 156.952 128.366 157.986 129.127 158.748C129.889 159.509 130.923 159.938 132 159.938C133.077 159.938 134.111 159.509 134.873 158.748C135.634 157.986 136.062 156.952 136.062 155.875V143.688C136.062 142.61 135.634 141.577 134.873 140.815C134.111 140.053 133.077 139.625 132 139.625ZM188.875 94.9375H176.688C175.61 94.9375 174.577 95.3655 173.815 96.1274C173.053 96.8892 172.625 97.9226 172.625 99C172.625 100.077 173.053 101.111 173.815 101.873C174.577 102.634 175.61 103.062 176.688 103.062H188.875C189.952 103.062 190.986 102.634 191.748 101.873C192.509 101.111 192.938 100.077 192.938 99C192.938 97.9226 192.509 96.8892 191.748 96.1274C190.986 95.3655 189.952 94.9375 188.875 94.9375Z"
          fill="#FAE6BB"
        />
      </G>
      <G>
        <Path
          d="M100.168 187.504C100.258 187.624 100.318 187.774 100.378 187.984L100.318 188.224V188.974V189.274L100.378 189.694C100.408 189.874 100.438 189.994 100.408 190.174L100.378 190.234L100.258 190.834L100.228 191.194L100.288 191.944L100.318 192.304L100.288 192.994L100.318 193.264V194.014V194.074C100.378 194.284 100.408 194.494 100.378 194.674L100.348 195.004L100.378 195.124C100.438 195.364 100.438 195.514 100.408 195.754L100.318 196.144L100.198 196.984V197.254L100.228 197.974V198.334L100.348 199.114V199.474V200.074V200.464L100.438 201.094C100.438 201.154 100.438 201.274 100.438 201.334V201.904C100.438 201.994 100.408 202.144 100.378 202.234L100.348 202.384V202.414C100.378 202.624 100.348 202.864 100.288 203.074L100.258 203.434V203.794C100.258 204.034 100.228 204.244 100.138 204.454L99.9882 205.234V205.384C99.9882 205.474 99.9282 205.564 99.8982 205.654L99.6882 206.284L99.6582 206.434C99.6282 206.584 99.5682 206.674 99.5082 206.794L99.2082 207.274L99.0882 207.394C99.0282 207.484 98.9682 207.544 98.9082 207.604L98.5182 207.904L98.2182 208.114L97.9782 208.354C97.8582 208.474 97.7082 208.624 97.5582 208.684L97.4682 208.714L97.0182 208.924C96.8382 209.014 96.6582 209.074 96.4482 209.074H96.4182L95.7282 209.194L95.6982 209.224C95.5182 209.314 95.3082 209.344 95.1282 209.344H94.7982L94.3782 209.314L94.0782 209.344H93.9282C93.8082 209.344 93.6882 209.314 93.5682 209.254L93.3882 209.194L92.6982 209.134H92.6682C92.4882 209.134 92.3082 209.104 92.1282 209.044L91.7382 208.894C91.7382 208.894 91.1982 208.384 91.1082 208.084C91.0782 207.994 91.0782 207.904 91.0782 207.844V207.244L90.9882 206.974V206.674C90.9882 206.584 90.9882 206.584 90.9882 206.494L91.0482 205.894L91.0182 205.564C91.0182 205.564 91.3482 205.264 91.6182 205.204C91.7682 205.174 91.8882 205.234 92.0082 205.264L92.5482 205.384L92.8482 205.324L93.2082 205.294C93.2382 205.294 93.2982 205.294 93.3282 205.294H93.6582L93.9282 205.264L94.6782 205.054L95.1882 204.634L95.4282 204.304L95.6982 203.704L95.6382 203.434L95.6682 203.164C95.6682 203.074 95.6982 203.044 95.7282 202.954L95.7882 202.804L95.7282 202.414L95.7582 201.754L95.7282 201.364L95.6982 200.914C95.6982 200.794 95.7282 200.644 95.7582 200.494L95.7882 200.344V199.924V199.834C95.7582 199.684 95.7282 199.474 95.7582 199.324L95.7882 199.204L95.6982 198.544L95.7282 198.214L95.6982 197.494V197.104L95.6082 196.444C95.6082 196.354 95.6082 196.294 95.6082 196.174L95.6382 195.544L95.5782 195.244C95.5482 195.094 95.5782 194.974 95.5782 194.854L95.6682 194.254L95.6982 193.384V193.024L95.6382 192.214L95.6682 191.344V190.924L95.7282 190.144L95.6982 189.424C95.6982 189.304 95.6682 189.274 95.6982 189.154L95.7582 188.824L95.7282 188.134C95.7282 188.074 95.7282 188.014 95.7282 187.984C95.7882 187.654 96.0882 187.504 96.3282 187.384C96.4782 187.354 96.6282 187.324 96.7482 187.324H97.2282L98.3682 187.354H98.6682L99.3882 187.474L99.7782 187.444C99.9282 187.384 100.078 187.414 100.168 187.504ZM104.887 196.714L104.917 196.564C104.917 196.444 104.947 196.324 104.977 196.204L105.187 195.634L105.217 195.334L105.427 194.704L105.517 194.374L105.787 193.774L105.937 193.414L106.267 192.694L106.447 192.334L106.807 191.764L106.957 191.554L107.437 190.984L107.917 190.414C107.977 190.324 108.007 190.294 108.067 190.234L108.247 190.054L108.967 189.364C109.027 189.304 109.117 189.214 109.207 189.154L110.347 188.464L110.767 188.284L111.397 187.954L111.727 187.774L112.387 187.474L112.447 187.444C112.597 187.384 112.777 187.324 112.927 187.324L113.287 187.294L113.617 187.234L114.337 187.144C114.397 187.144 114.517 187.114 114.577 187.114H114.817L115.807 187.024C115.957 186.994 116.077 186.994 116.197 187.024L116.347 187.054H116.677L117.487 187.084H117.607C117.757 187.054 117.937 187.084 118.087 187.114L118.507 187.204L118.927 187.264L119.587 187.414L120.517 187.744L120.907 187.864L121.327 188.014C121.447 188.074 121.597 188.134 121.717 188.224L121.867 188.344L122.827 188.914L123.277 189.244L123.577 189.544L124.057 190.054L124.297 190.324L124.897 190.894L125.047 191.074L125.317 191.374C125.467 191.554 125.557 191.764 125.617 191.944L126.037 192.544L126.157 192.754L126.517 193.354L126.607 193.564C126.637 193.624 126.667 193.744 126.697 193.804L126.847 194.374L126.937 194.614L127.057 195.304L127.207 195.634L127.357 196.324L127.417 196.714L127.447 197.284C127.447 197.404 127.417 197.494 127.417 197.584L127.387 197.764L127.417 197.824C127.477 198.064 127.447 198.244 127.417 198.484V198.574L127.447 198.874L127.477 199.204C127.477 199.444 127.447 199.684 127.327 199.864L127.207 200.554L127.147 200.884L126.997 201.604L126.937 201.874C126.937 201.934 126.907 201.994 126.877 202.054L126.637 202.654L126.487 202.924C126.487 202.954 126.427 202.954 126.427 202.984L126.067 203.524L125.947 203.824L125.707 204.274C125.647 204.364 125.557 204.484 125.497 204.574L125.467 204.634L124.957 205.294L124.777 205.534L124.297 206.014L123.967 206.344L123.667 206.704C123.547 206.854 123.397 206.974 123.247 207.064L122.767 207.304L122.437 207.484L121.897 207.784C121.837 207.814 121.747 207.844 121.657 207.874L121.477 207.934L121.177 208.144L120.847 208.294L120.547 208.444L120.007 208.684L119.587 208.834L118.657 209.164L117.967 209.344L117.847 209.374C117.727 209.404 117.577 209.404 117.457 209.404H116.887H116.077L115.897 209.374C115.807 209.374 115.717 209.344 115.657 209.314L115.327 209.254L114.697 209.194H114.367L113.527 209.044C113.437 209.014 113.317 208.984 113.197 208.924L112.717 208.744L112.447 208.654L111.817 208.474L111.427 208.354L111.127 208.264C110.947 208.204 110.767 208.144 110.587 207.994L110.527 207.964L109.987 207.724C109.927 207.694 109.897 207.664 109.807 207.604L109.567 207.454L109.027 207.064L108.727 206.794C108.697 206.764 108.667 206.734 108.637 206.704L108.187 206.194C108.037 206.104 107.857 206.014 107.737 205.834L107.497 205.474L107.257 205.234L106.927 204.634C106.747 204.514 106.597 204.364 106.477 204.124L106.357 203.884L106.297 203.794C106.177 203.644 106.087 203.524 106.027 203.314L105.907 202.864L105.697 202.564L105.487 201.904L105.337 201.604L105.097 200.944C105.037 200.794 104.977 200.614 104.977 200.404V199.924L104.947 199.564V198.904L104.887 198.604V198.154L104.857 197.884L104.827 197.644C104.827 197.524 104.827 197.404 104.827 197.284L104.887 196.714ZM109.597 199.624L109.747 200.074L109.957 200.734L110.017 201.094L110.257 201.694L110.407 201.934L110.827 202.384C110.887 202.444 110.947 202.534 111.007 202.594L111.127 202.774L111.427 203.044C111.577 203.164 111.727 203.284 111.817 203.464V203.494L112.357 204.004L112.717 204.214L113.317 204.574L113.737 204.694L113.887 204.724C114.007 204.754 114.157 204.784 114.277 204.844L114.337 204.874H114.727L115.417 205.024L115.777 205.054L116.497 205.084L116.947 205.024L117.967 204.874L118.477 204.634C118.567 204.574 118.687 204.574 118.777 204.544L118.867 204.514L119.617 204.094L119.917 203.914L120.427 203.494L120.637 203.314L121.207 202.924L121.447 202.594L121.777 202.114L121.987 201.754L122.077 201.454L122.407 200.914V200.614L122.557 199.984L122.617 199.684L122.677 198.874V198.574V198.154V197.944C122.677 197.794 122.707 197.734 122.737 197.584L122.797 197.434L122.647 196.714L122.617 196.324L122.377 195.604L122.197 195.334L121.927 194.644L121.747 194.434L121.447 193.834L121.177 193.504L120.607 193.024L120.367 192.814L119.767 192.394L118.897 191.704L118.507 191.554L117.907 191.314L117.487 191.344L116.827 191.284H116.707C116.587 191.284 116.437 191.314 116.317 191.284L116.197 191.254L115.987 191.284C115.867 191.314 115.747 191.314 115.627 191.314H115.477L114.817 191.344L114.427 191.434L113.917 191.614C113.827 191.644 113.737 191.674 113.647 191.704L113.437 191.734L112.657 192.184L112.417 192.334L111.817 192.784L111.547 192.964L111.157 193.474L110.887 193.894L110.707 194.314C110.647 194.464 110.557 194.584 110.467 194.704L110.407 194.764L110.107 195.364L110.017 195.634L109.807 196.354L109.717 196.744L109.687 197.434L109.597 197.824L109.687 198.244L109.657 198.544C109.657 198.574 109.627 198.664 109.627 198.694L109.597 198.964V199.624ZM149.688 187.624C149.778 187.774 149.838 187.984 149.868 188.194V188.224V189.064L149.838 189.904L149.868 190.264L149.838 191.044L149.868 191.434V192.124L149.838 192.484V193.144L149.778 193.534L149.718 194.194L149.838 194.554L149.808 195.304L149.838 195.514L149.808 196.144C149.808 196.204 149.778 196.264 149.778 196.354L149.748 196.564L149.778 197.254L149.838 197.614V198.304L149.898 198.634V199.414L149.868 199.774L149.808 200.524L149.838 200.854L149.868 201.184L149.838 201.514L149.778 201.844L149.748 202.324C149.748 202.414 149.748 202.474 149.718 202.564L149.658 202.834L149.598 203.314C149.598 203.434 149.538 203.524 149.508 203.644L149.448 203.854L149.208 204.574L149.148 204.724C149.118 204.874 149.058 205.054 148.968 205.174L148.668 205.594L148.488 205.864L148.068 206.344L147.828 206.614L147.558 206.944C147.438 207.094 147.228 207.244 147.048 207.334L146.418 207.814L146.178 207.994L145.788 208.234C145.638 208.324 145.458 208.384 145.278 208.414H145.248L144.588 208.654L144.288 208.774L143.598 209.074L143.328 209.164C143.268 209.194 143.148 209.224 143.058 209.254L142.398 209.344L142.098 209.374H141.348H141.168C140.988 209.404 140.808 209.404 140.658 209.374L140.508 209.344L140.148 209.314L139.368 209.284L139.068 209.254L138.258 209.134L137.958 209.074L137.478 208.984C137.328 208.954 137.148 208.924 136.998 208.834L136.968 208.804L136.338 208.534C136.218 208.474 136.158 208.444 136.068 208.384L135.948 208.294L135.258 207.874L135.048 207.754L134.568 207.394L133.878 206.884C133.788 206.794 133.698 206.704 133.608 206.614L133.428 206.404L133.218 206.164C133.008 205.954 132.858 205.744 132.798 205.474L132.588 205.144C132.498 204.994 132.438 204.814 132.408 204.664L132.378 204.604L132.138 204.154C132.108 204.064 132.048 204.004 132.018 203.884L131.958 203.674L131.838 202.924L131.808 202.744C131.778 202.654 131.778 202.534 131.778 202.414L131.808 201.814L131.748 201.454V201.154V200.824L131.778 200.404L131.688 199.834C131.688 199.774 131.658 199.624 131.658 199.564L131.688 199.354L131.658 198.694L131.688 198.364L131.748 197.674V197.344L131.808 196.594L131.688 196.234V195.724C131.688 195.634 131.688 195.484 131.718 195.394L131.748 195.154L131.778 194.404V194.074L131.748 193.414L131.718 193.204C131.688 193.054 131.688 192.904 131.688 192.754L131.748 192.184V191.314L131.658 191.014L131.688 190.414C131.688 190.294 131.718 190.234 131.748 190.114L131.778 189.994L131.808 189.244L131.688 188.824L131.628 188.104C131.628 188.014 131.658 187.894 131.748 187.804C131.748 187.804 131.748 187.774 131.778 187.774C131.868 187.624 132.438 187.444 132.588 187.504L133.248 187.414L133.638 187.294L134.058 187.264C134.178 187.264 134.328 187.264 134.448 187.294L134.658 187.354L135.438 187.324C135.558 187.324 135.678 187.354 135.828 187.414C136.008 187.534 136.128 187.654 136.218 187.804C136.308 188.014 136.338 188.194 136.338 188.404V188.764L136.308 189.154L136.278 189.814L136.308 190.264L136.398 190.924V191.074C136.428 191.194 136.428 191.314 136.428 191.434L136.368 192.004L136.428 192.814L136.458 193.054C136.458 193.174 136.458 193.294 136.458 193.384L136.398 193.894L136.368 194.224L136.278 194.854L136.368 195.184L136.398 195.904L136.428 196.084C136.428 196.174 136.428 196.324 136.428 196.414L136.368 196.924L136.428 197.224L136.398 197.914L136.428 198.274L136.368 198.964L136.398 199.294L136.458 199.834C136.458 199.954 136.488 200.044 136.458 200.194L136.428 200.404L136.458 200.704V201.064L136.428 201.364L136.518 202.084L136.548 202.354L136.848 203.074L136.968 203.254L137.328 203.824L137.628 204.094L138.288 204.544L139.038 204.814L139.368 204.964H140.088L140.358 204.994L140.748 204.964L141.168 205.024L141.438 204.934L142.218 204.994L142.518 204.874L143.088 204.694L143.418 204.514L143.958 204.064L144.168 203.914L144.618 203.314L144.708 202.894L145.008 202.144L145.098 201.454L145.128 201.064V200.674V200.344L145.068 200.134C145.038 200.014 145.038 199.834 145.038 199.684L145.068 199.114L145.188 198.364L145.218 198.004L145.278 197.254L145.248 197.014L145.218 196.624L145.188 196.294V196.024L145.218 195.334L145.188 195.034L145.158 194.314L145.098 193.894L145.038 193.114V192.814V192.184C145.038 192.064 145.008 192.034 145.038 191.914L145.158 191.254L145.248 191.014L145.278 190.324L145.248 190.054C145.248 189.934 145.218 189.844 145.248 189.724L145.278 189.544L145.218 189.214V188.854V188.044C145.218 188.044 145.608 187.474 145.878 187.384C145.938 187.354 145.998 187.354 146.028 187.354L146.418 187.324C146.598 187.324 146.808 187.354 146.988 187.414L147.048 187.444H147.738L148.188 187.414H148.938C149.118 187.354 149.328 187.354 149.568 187.414L149.688 187.624ZM155.608 187.474C155.728 187.384 155.938 187.294 156.208 187.234L156.868 187.324L157.288 187.294L158.068 187.384L158.428 187.294L159.148 187.324L159.538 187.264L160.258 187.324L160.558 187.354L161.218 187.444L161.488 187.414L162.178 187.474L162.598 187.504C162.808 187.444 163.018 187.444 163.228 187.474L163.318 187.504L164.308 187.534L164.668 187.504H164.998C165.208 187.504 165.448 187.534 165.658 187.624L166.258 187.714C166.348 187.714 166.468 187.744 166.558 187.774L166.768 187.834L167.308 188.224L167.398 188.254C167.578 188.314 167.788 188.374 167.938 188.494L168.238 188.704L168.298 188.734C168.478 188.794 168.628 188.884 168.778 189.004L169.108 189.244L169.288 189.454C169.318 189.484 169.348 189.484 169.378 189.544L169.738 189.964V189.994C169.948 190.144 170.068 190.294 170.188 190.474L170.398 190.804L170.428 190.864C170.578 191.044 170.668 191.194 170.728 191.404L170.818 191.614C170.848 191.734 170.878 191.794 170.878 191.914L170.908 192.154L171.028 192.784L171.148 193.174L171.208 193.354C171.298 193.624 171.328 193.894 171.268 194.194V194.224L171.358 194.494L171.298 194.914V195.304L171.238 196.024V196.054C171.238 196.294 171.148 196.474 171.058 196.654L170.908 196.984L170.698 197.344L170.398 197.824C170.338 197.944 170.278 198.034 170.218 198.094L170.098 198.214L169.948 198.484C169.828 198.754 169.678 198.934 169.468 199.054L169.048 199.474C168.988 199.534 168.898 199.564 168.838 199.624L168.628 199.774L168.088 200.074L167.788 200.224L167.548 200.404L167.368 200.944L167.578 201.274L167.848 201.904L168.118 202.234L168.418 202.744L168.598 203.074L168.868 203.644L169.078 204.064L169.318 204.694L169.558 204.934L169.888 205.534L169.918 205.594C170.008 205.714 170.068 205.834 170.128 205.984L170.308 206.434L170.428 206.764L170.788 207.304L170.998 207.574L171.178 207.934C171.238 208.054 171.298 208.204 171.328 208.324L171.388 208.504C171.268 208.744 171.088 208.924 170.878 208.954L170.548 209.014L170.068 209.044C169.888 209.044 169.708 209.044 169.558 208.984L169.438 208.954H168.778H168.688C168.538 208.984 168.388 208.984 168.238 208.954L167.848 208.894H167.458C167.248 208.894 167.038 208.804 166.858 208.714L166.648 208.594L166.558 208.534C166.468 208.444 166.438 208.324 166.378 208.174L166.198 207.694L166.048 207.454L165.718 206.704L165.598 206.374L165.298 205.714L165.178 205.504L164.878 204.994C164.818 204.904 164.758 204.844 164.728 204.724L164.698 204.544L164.368 204.154C164.278 204.064 164.248 203.944 164.188 203.794L164.128 203.644L163.798 203.044L163.708 202.894C163.708 202.864 163.648 202.804 163.648 202.744L163.498 202.174L163.228 201.754L162.748 201.334L162.358 201.364L161.758 201.304L161.368 201.334H160.678L160.288 201.454L159.958 201.814L160.048 202.084L159.958 202.894L159.928 203.254L159.898 203.944L159.928 204.304L159.838 205.024V205.264L159.868 206.044L159.958 206.374L159.928 207.214L159.838 208.054L159.898 208.414C159.868 208.414 159.658 208.744 159.448 208.924C159.328 209.014 159.178 209.014 159.058 209.014H158.938L158.008 208.924L157.228 208.894L156.928 208.984L156.118 208.924C156.118 208.924 155.428 208.474 155.398 208.234C155.398 208.234 155.398 208.234 155.398 208.204L155.458 207.394L155.428 207.004L155.398 206.284V206.014L155.428 205.234V204.904L155.398 204.184L155.428 203.944L155.368 203.134L155.308 202.774L155.248 202.054L155.278 201.694L155.338 200.944L155.278 200.644L155.368 199.954L155.458 199.534L155.398 198.844L155.368 198.514L155.308 198.064C155.278 197.914 155.278 197.824 155.308 197.674L155.338 197.524L155.398 196.774L155.368 196.444L155.458 195.694L155.428 195.364V194.554L155.398 194.284C155.398 194.164 155.398 194.104 155.398 194.014L155.488 193.534L155.518 193.174L155.458 192.754C155.458 192.634 155.428 192.454 155.458 192.334L155.488 192.184L155.428 191.344L155.398 191.194C155.368 191.074 155.368 190.984 155.368 190.894L155.398 190.324L155.428 189.964L155.398 189.214L155.368 188.944L155.308 188.404C155.308 188.344 155.278 188.254 155.278 188.194L155.308 187.984C155.368 187.774 155.458 187.564 155.608 187.474ZM161.818 191.194L161.338 191.314L160.708 191.284L160.318 191.224L160.048 191.584L160.018 191.914L159.988 192.634L159.958 193.024L159.868 193.714L159.898 194.134L159.928 194.974L159.898 195.784V196.114L159.838 196.804L159.898 197.074V197.404L160.258 197.704H160.918L161.368 197.674H161.668L163.108 197.584L163.858 197.614L164.608 197.524L164.968 197.434L165.538 197.014L165.898 196.774L166.198 196.144L166.378 195.784L166.468 195.184V194.794L166.408 194.434V194.134L166.438 193.774L166.318 193.174L166.228 192.844L165.808 192.274L165.508 191.974L164.818 191.524L164.458 191.434L163.828 191.224L163.498 191.194H163.408C163.258 191.224 163.078 191.254 162.928 191.224L162.778 191.194H162.418H161.818Z"
          fill="#FAE6BB"
        />
      </G>
    </G>
    <Defs></Defs>
  </Svg>
);

export { DarkThemeIcon };
