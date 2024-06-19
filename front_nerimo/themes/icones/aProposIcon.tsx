import * as React from "react";
import Svg, { G, Rect, Path, Defs, Circle } from "react-native-svg";
import {IconProps} from '@/themes/icones/iconProps'



const AProposIcon: React.FC<IconProps> = ({width, fill, background}) => (
  <Svg
    width={width}
    height={width * (264/264)}
    viewBox="0 0 264 264"
    fill={background}
 
  >
    <G filter="url(#filter0_d_197_2458)">
      <G filter="url(#filter1_d_197_2458)">
        <Circle
          cx={132}
          cy={128}
          r={126}
          stroke={fill}
          strokeWidth={4}
        
        />
      </G>
      <Path
        d="M59.2767 196.832C59.2207 196.72 59.2487 196.524 59.3887 196.356L59.6687 195.656L59.8647 195.348L60.0887 194.732L60.1167 194.592C60.1447 194.452 60.1727 194.312 60.2567 194.144L60.4247 193.836L60.5087 193.584L60.7887 193.08C60.8167 193.024 60.8727 192.94 60.9287 192.884L61.0407 192.744L61.4047 192.212L61.4887 191.848L61.7687 191.372L61.9087 191.064L62.1047 190.476C62.1327 190.392 62.1607 190.392 62.1887 190.308L62.3007 190.056L62.5807 189.468L62.7487 189.216L63.0847 188.6L63.2247 188.348L63.3647 187.732L63.5047 187.34L63.8127 186.668L64.3727 185.744L64.7087 185.072L64.8207 184.764L65.1287 184.204L65.2687 183.84L65.5207 183.252L65.6887 183L65.8847 182.468L65.9967 182.216C66.0247 182.132 66.0527 182.02 66.1087 181.964L66.4167 181.516L66.8367 180.788L66.9207 180.452L67.2567 179.78L67.2847 179.752C67.3127 179.528 67.3687 179.388 67.4807 179.192L67.6207 178.94L67.7887 178.688L68.0127 178.156C68.0407 178.072 68.0687 178.044 68.0967 177.988L68.1807 177.876L68.4887 177.232L68.6007 176.924C68.6567 176.756 68.9087 176.784 68.9927 176.98L69.1047 177.232L69.4967 177.876L69.6367 178.072L69.9447 178.688L70.0847 178.94L70.3927 179.528L70.5607 179.752L70.8687 180.424L70.9247 180.508C71.0087 180.648 71.0647 180.76 71.0927 180.9L71.2327 181.376L71.3727 181.6L71.5407 182.244L71.6527 182.524L71.9327 183.084L72.1007 183.364L72.3807 183.98L72.4927 184.288L72.8287 184.848L72.9127 185.016L73.2207 185.716L73.3047 185.996L73.5847 186.612L73.7247 186.836L74.0607 187.452L74.2287 187.816L74.5647 188.432L74.7327 188.684L74.9567 189.272L75.0687 189.58L75.3767 190.112L75.4887 190.42L75.7687 190.84C75.8247 190.924 75.8807 191.036 75.9087 191.12L75.9927 191.26L76.2167 191.596C76.3007 191.708 76.3567 191.876 76.3847 192.016L76.4127 192.072L76.7207 192.744L76.8327 193.08L77.1687 193.78L77.4207 194.536L77.5887 194.872L77.8687 195.404L78.0647 195.768L78.2607 196.188C78.2887 196.272 78.3167 196.328 78.3447 196.44L78.3727 196.636C78.2607 196.86 78.0647 196.972 77.7847 197L76.9167 197.112C76.8327 197.112 76.7487 197.112 76.6647 197.112H76.2727C76.1887 197.112 76.1047 197.084 76.0207 197.084L75.8247 197.056L75.5727 196.972L74.8727 196.916C74.7327 196.944 74.5927 196.916 74.4247 196.832C74.0887 196.692 73.9487 196.384 73.8367 196.076L73.7807 195.908L73.6407 195.684L73.5007 195.432L73.2207 194.9L72.9967 194.536L72.8287 194.144C72.8007 194.06 72.7727 193.976 72.7447 193.892L72.6887 193.724L72.2687 193.5L71.9887 193.388L71.3167 193.416L71.0367 193.388L70.3367 193.472L70.0007 193.444L69.7767 193.472C69.5247 193.5 69.2727 193.5 69.0767 193.416L68.5447 193.5C68.4607 193.528 68.3207 193.528 68.2367 193.528L67.8447 193.5C67.7327 193.5 67.6207 193.472 67.5367 193.444L67.3967 193.388L66.6687 193.332L66.3887 193.388L65.6607 193.444L65.4367 193.472L65.0447 193.808L64.9047 194.144L64.6807 194.536C64.6247 194.62 64.5687 194.704 64.4847 194.788L64.4287 194.844L64.2327 195.46L64.0367 195.852L63.8687 196.328C63.8407 196.384 63.8127 196.496 63.7847 196.552L63.6727 196.748C63.3647 197 63.0567 197.112 62.8607 197.056H62.1327H62.0207C61.8527 197.056 61.6847 197.028 61.5447 196.972L61.4887 196.944L61.0687 197.028C60.9567 197.056 60.9007 197.028 60.8167 197.028H60.5367H60.0887C60.0327 197.028 59.9207 197.028 59.8647 197.028L59.6127 197C59.4727 197.028 59.3327 196.972 59.2767 196.832ZM66.7247 190.336L67.0327 190.392L67.3127 190.42H67.8727L68.1807 190.476L68.5447 190.448C68.6287 190.448 68.7407 190.448 68.8247 190.476L68.9927 190.504L69.5807 190.42L69.9447 190.392H70.3367C70.4487 190.392 70.5887 190.42 70.7007 190.448L70.8407 190.476L71.0367 190.14L70.9807 189.832L70.9247 189.608L70.7567 188.992L70.5887 188.768L70.3087 188.124L70.2247 187.928L70.0007 187.284L69.8327 186.92L69.5527 186.276L69.3287 185.996L69.0487 185.38L68.9367 185.072L68.7687 185.016L68.4047 185.548L68.1527 186.08L68.0967 186.416L67.9007 186.948L67.8447 187.172C67.8167 187.256 67.7887 187.34 67.7327 187.452L67.4807 187.844L67.3967 188.236L67.3687 188.32C67.3407 188.432 67.3127 188.488 67.2847 188.572L67.1167 188.852V188.88C67.0887 189.076 67.0607 189.244 66.9767 189.384L66.8647 189.58C66.8087 189.692 66.7247 189.804 66.6407 189.888L66.5567 189.972L66.7247 190.336ZM68.2087 169.672C68.3487 169.784 68.4607 169.84 68.5447 169.98L68.6287 170.12L68.9647 170.792L69.1047 171.016L69.3847 171.688C69.5247 171.856 69.6367 172.08 69.6927 172.276L69.7487 172.612L69.8607 172.808L70.0567 173.424L70.2247 173.788L70.5887 174.488C70.5887 174.488 70.3647 175.02 70.1407 175.104C70.0847 175.132 70.0287 175.104 69.9727 175.104L69.3567 175.076H69.0487L68.4047 175.104H68.2927C68.1247 175.104 67.9567 175.104 67.7887 175.048H67.7607L67.3967 174.824C67.2847 174.74 67.1447 174.628 67.0607 174.516L66.7527 174.152L66.5567 173.872L66.1367 173.256L65.9407 172.976L65.5767 172.584C65.5207 172.528 65.4647 172.444 65.4367 172.388L65.2687 172.164L64.8767 171.716L64.7087 171.576L64.2887 171.072C64.2607 171.016 64.2047 170.96 64.1767 170.876L64.0647 170.68L63.7567 170.12C63.5607 169.896 63.5047 169.672 63.5607 169.504L63.8687 169.42L64.0367 169.392C64.0927 169.392 64.2327 169.392 64.2887 169.392L64.7647 169.448L65.0167 169.42L65.6047 169.448L65.9407 169.476L66.4167 169.448C66.5567 169.448 66.6967 169.448 66.8367 169.504L66.8647 169.532L67.6207 169.504C67.8167 169.476 68.0127 169.532 68.2087 169.672ZM93.3289 190.168C93.1329 190.196 92.9369 190.196 92.7409 190.112L92.6569 190.084L92.2649 190.476L92.2369 190.812L92.3209 191.456L92.3489 191.736C92.3489 191.848 92.3489 191.876 92.3489 191.988L92.2929 192.604L92.3209 192.912V193.332C92.3209 193.416 92.3209 193.528 92.2929 193.612L92.2649 193.752L92.3209 194.144C92.3489 194.256 92.3489 194.396 92.3209 194.508L92.2929 194.732L92.2649 195.236L92.2929 195.32C92.3209 195.432 92.3209 195.6 92.2929 195.712L92.2089 196.104L92.2369 196.496C92.2369 196.664 92.1529 196.832 92.0129 197L91.6209 196.972H91.5929L91.3129 196.916L90.6969 196.888L90.3889 196.944L89.6889 196.972L89.4089 197L88.9889 197.056C88.8209 197.084 88.6809 197.084 88.5129 197.028L88.4289 197L88.4009 196.972C88.2049 196.748 88.0369 196.496 88.0089 196.244C88.0089 196.244 88.0089 196.244 88.0089 196.216L87.9249 195.516C87.9249 195.46 87.9249 195.376 87.9249 195.32V194.816C87.9249 194.704 87.9529 194.564 87.9809 194.424L88.0369 194.312L88.0649 193.64L88.0089 193.304L87.9809 192.688L87.8689 192.324L87.8409 191.792C87.8409 191.708 87.8689 191.596 87.8689 191.512L87.8969 191.288L87.9249 190.588V190.308L87.9809 189.636L88.0089 189.272L87.9249 188.74C87.9249 188.656 87.9249 188.6 87.9249 188.488V188.264V187.592L87.8969 187.452C87.8689 187.256 87.8689 187.088 87.8969 186.892L87.9809 186.528L87.9529 186.276L88.0929 185.548L88.0649 185.24L87.9809 184.54L87.9529 184.26C87.9529 184.204 87.9529 184.092 87.9529 184.036L87.9809 183.588V183.224L87.8969 182.608L87.8689 182.496C87.8689 182.384 87.8969 182.328 87.8969 182.244L87.9809 181.628L87.9529 181.236L88.0089 180.648L87.9809 180.256L87.9249 179.892C87.8969 179.696 87.8969 179.528 87.9529 179.304V179.22L87.9249 178.632L87.8969 178.436C87.8689 178.324 87.8689 178.184 87.8689 178.072L87.8969 177.736C87.8969 177.652 87.9249 177.624 87.9249 177.568L88.0089 177.26C88.2609 177.008 88.5129 176.868 88.7369 176.868L89.4089 176.896L89.6889 176.868L90.3329 176.924L91.0889 176.952L91.3689 176.812L92.0689 176.784L92.4329 176.84L93.0209 176.868L93.3289 176.924L93.9449 176.98H94.3649L94.6449 177.008L95.0649 177.036H95.3729H95.7649L96.1009 177.092L96.7449 177.148L97.0809 177.232L97.5289 177.288C97.6129 177.316 97.6969 177.316 97.7529 177.344L98.0049 177.428L98.6489 177.652L98.8729 177.736L99.4049 177.932C99.4889 177.96 99.5729 178.016 99.6289 178.044L99.7409 178.128L100.273 178.604L100.469 178.8L100.945 179.332L101.169 179.668L101.477 180.2L101.533 180.256C101.617 180.368 101.673 180.48 101.729 180.62L101.785 180.732C101.841 180.872 101.869 181.04 101.869 181.236V181.292L101.981 181.852L102.065 182.16L102.121 182.552C102.149 182.748 102.149 182.944 102.121 183.14V183.168L102.205 183.504L102.177 183.812V183.896C102.205 184.064 102.205 184.148 102.177 184.316L102.121 184.652C102.121 184.708 102.093 184.82 102.065 184.876L102.009 185.072L101.869 185.744L101.757 186.08L101.505 186.724L101.225 187.228C101.169 187.312 101.085 187.424 101.029 187.508L100.945 187.62L100.637 187.984C100.525 188.124 100.357 188.236 100.189 188.32L100.105 188.376L99.8809 188.628C99.7689 188.768 99.6009 188.908 99.4329 188.992L99.3769 189.02L99.0689 189.216C98.9849 189.272 98.9009 189.3 98.8169 189.328L98.7049 189.356L98.1169 189.608L97.8369 189.664C97.7809 189.664 97.7249 189.72 97.6689 189.72L97.0809 189.804L96.9409 189.86C96.8009 189.916 96.6049 189.972 96.4369 189.972L95.9609 190L95.2329 190.112L94.6169 190.084L94.3369 190.14L94.1689 190.168C94.0289 190.196 93.8609 190.196 93.7209 190.168L93.6369 190.14L93.3289 190.168ZM93.2729 180.396L92.9929 180.48L92.6009 180.536L92.2929 180.844L92.3209 181.264L92.2649 181.852V182.188V182.636C92.2649 182.804 92.2649 182.972 92.2089 183.168L92.1809 183.224L92.2369 183.756L92.2089 184.064L92.2369 184.736L92.2929 185.072L92.3489 185.576C92.3769 185.744 92.3489 185.828 92.3209 185.996V186.08L92.6569 186.416L92.9369 186.472L93.1889 186.528L93.9449 186.5L94.1689 186.472C94.2249 186.472 94.3369 186.5 94.3929 186.5L94.6169 186.528L95.0089 186.472L95.3729 186.528L96.0449 186.36L96.3529 186.192L96.9689 185.828L97.2489 185.66L97.5849 185.184V184.876L97.7529 184.232L97.8089 183.952L97.7809 183.532L97.8089 182.916L97.6969 182.272L97.6129 181.936L97.1649 181.46L96.8569 181.208L96.1569 180.816L95.3169 180.648L95.0089 180.62L94.7289 180.592C94.6729 180.592 94.5609 180.564 94.5049 180.536L94.2529 180.48L93.9729 180.452L93.2729 180.396ZM106.333 176.98C106.445 176.896 106.641 176.812 106.893 176.756L107.509 176.84L107.901 176.812L108.629 176.896L108.965 176.812L109.637 176.84L110.001 176.784L110.673 176.84L110.953 176.868L111.569 176.952L111.821 176.924L112.465 176.98L112.857 177.008C113.053 176.952 113.249 176.952 113.445 176.98L113.529 177.008L114.453 177.036L114.789 177.008H115.097C115.293 177.008 115.517 177.036 115.713 177.12L116.273 177.204C116.357 177.204 116.469 177.232 116.553 177.26L116.749 177.316L117.253 177.68L117.337 177.708C117.505 177.764 117.701 177.82 117.841 177.932L118.121 178.128L118.177 178.156C118.345 178.212 118.485 178.296 118.625 178.408L118.933 178.632L119.101 178.828C119.129 178.856 119.157 178.856 119.185 178.912L119.521 179.304V179.332C119.717 179.472 119.829 179.612 119.941 179.78L120.137 180.088L120.165 180.144C120.305 180.312 120.389 180.452 120.445 180.648L120.529 180.844C120.557 180.956 120.585 181.012 120.585 181.124L120.613 181.348L120.725 181.936L120.837 182.3L120.893 182.468C120.977 182.72 121.005 182.972 120.949 183.252V183.28L121.033 183.532L120.977 183.924V184.288L120.921 184.96V184.988C120.921 185.212 120.837 185.38 120.753 185.548L120.613 185.856L120.417 186.192L120.137 186.64C120.081 186.752 120.025 186.836 119.969 186.892L119.857 187.004L119.717 187.256C119.605 187.508 119.465 187.676 119.269 187.788L118.877 188.18C118.821 188.236 118.737 188.264 118.681 188.32L118.485 188.46L117.981 188.74L117.701 188.88L117.477 189.048L117.309 189.552L117.505 189.86L117.757 190.448L118.009 190.756L118.289 191.232L118.457 191.54L118.709 192.072L118.905 192.464L119.129 193.052L119.353 193.276L119.661 193.836L119.689 193.892C119.773 194.004 119.829 194.116 119.885 194.256L120.053 194.676L120.165 194.984L120.501 195.488L120.697 195.74L120.865 196.076C120.921 196.188 120.977 196.328 121.005 196.44L121.061 196.608C120.949 196.832 120.781 197 120.585 197.028L120.277 197.084L119.829 197.112C119.661 197.112 119.493 197.112 119.353 197.056L119.241 197.028H118.625H118.541C118.401 197.056 118.261 197.056 118.121 197.028L117.757 196.972H117.393C117.197 196.972 117.001 196.888 116.833 196.804L116.637 196.692L116.553 196.636C116.469 196.552 116.441 196.44 116.385 196.3L116.217 195.852L116.077 195.628L115.769 194.928L115.657 194.62L115.377 194.004L115.265 193.808L114.985 193.332C114.929 193.248 114.873 193.192 114.845 193.08L114.817 192.912L114.509 192.548C114.425 192.464 114.397 192.352 114.341 192.212L114.285 192.072L113.977 191.512L113.893 191.372C113.893 191.344 113.837 191.288 113.837 191.232L113.697 190.7L113.445 190.308L112.997 189.916L112.633 189.944L112.073 189.888L111.709 189.916H111.065L110.701 190.028L110.393 190.364L110.477 190.616L110.393 191.372L110.365 191.708L110.337 192.352L110.365 192.688L110.281 193.36V193.584L110.309 194.312L110.393 194.62L110.365 195.404L110.281 196.188L110.337 196.524C110.309 196.524 110.113 196.832 109.917 197C109.805 197.084 109.665 197.084 109.553 197.084H109.441L108.573 197L107.845 196.972L107.565 197.056L106.809 197C106.809 197 106.165 196.58 106.137 196.356C106.137 196.356 106.137 196.356 106.137 196.328L106.193 195.572L106.165 195.208L106.137 194.536V194.284L106.165 193.556V193.248L106.137 192.576L106.165 192.352L106.109 191.596L106.053 191.26L105.997 190.588L106.025 190.252L106.081 189.552L106.025 189.272L106.109 188.628L106.193 188.236L106.137 187.592L106.109 187.284L106.053 186.864C106.025 186.724 106.025 186.64 106.053 186.5L106.081 186.36L106.137 185.66L106.109 185.352L106.193 184.652L106.165 184.344V183.588L106.137 183.336C106.137 183.224 106.137 183.168 106.137 183.084L106.221 182.636L106.249 182.3L106.193 181.908C106.193 181.796 106.165 181.628 106.193 181.516L106.221 181.376L106.165 180.592L106.137 180.452C106.109 180.34 106.109 180.256 106.109 180.172L106.137 179.64L106.165 179.304L106.137 178.604L106.109 178.352L106.053 177.848C106.053 177.792 106.025 177.708 106.025 177.652L106.053 177.456C106.109 177.26 106.193 177.064 106.333 176.98ZM112.129 180.452L111.681 180.564L111.093 180.536L110.729 180.48L110.477 180.816L110.449 181.124L110.421 181.796L110.393 182.16L110.309 182.804L110.337 183.196L110.365 183.98L110.337 184.736V185.044L110.281 185.688L110.337 185.94V186.248L110.673 186.528H111.289L111.709 186.5H111.989L113.333 186.416L114.033 186.444L114.733 186.36L115.069 186.276L115.601 185.884L115.937 185.66L116.217 185.072L116.385 184.736L116.469 184.176V183.812L116.413 183.476V183.196L116.441 182.86L116.329 182.3L116.245 181.992L115.853 181.46L115.573 181.18L114.929 180.76L114.593 180.676L114.005 180.48L113.697 180.452H113.613C113.473 180.48 113.305 180.508 113.165 180.48L113.025 180.452H112.689H112.129ZM124.263 185.604L124.291 185.464C124.291 185.352 124.319 185.24 124.347 185.128L124.543 184.596L124.571 184.316L124.767 183.728L124.851 183.42L125.103 182.86L125.243 182.524L125.551 181.852L125.719 181.516L126.055 180.984L126.195 180.788L126.643 180.256L127.091 179.724C127.147 179.64 127.175 179.612 127.231 179.556L127.399 179.388L128.071 178.744C128.127 178.688 128.211 178.604 128.295 178.548L129.359 177.904L129.751 177.736L130.339 177.428L130.647 177.26L131.263 176.98L131.319 176.952C131.459 176.896 131.627 176.84 131.767 176.84L132.103 176.812L132.411 176.756L133.083 176.672C133.139 176.672 133.251 176.644 133.307 176.644H133.531L134.455 176.56C134.595 176.532 134.707 176.532 134.819 176.56L134.959 176.588H135.267L136.023 176.616H136.135C136.275 176.588 136.443 176.616 136.583 176.644L136.975 176.728L137.367 176.784L137.983 176.924L138.851 177.232L139.215 177.344L139.607 177.484C139.719 177.54 139.859 177.596 139.971 177.68L140.111 177.792L141.007 178.324L141.427 178.632L141.707 178.912L142.155 179.388L142.379 179.64L142.939 180.172L143.079 180.34L143.331 180.62C143.471 180.788 143.555 180.984 143.611 181.152L144.003 181.712L144.115 181.908L144.451 182.468L144.535 182.664C144.563 182.72 144.591 182.832 144.619 182.888L144.759 183.42L144.843 183.644L144.955 184.288L145.095 184.596L145.235 185.24L145.291 185.604L145.319 186.136C145.319 186.248 145.291 186.332 145.291 186.416L145.263 186.584L145.291 186.64C145.347 186.864 145.319 187.032 145.291 187.256V187.34L145.319 187.62L145.347 187.928C145.347 188.152 145.319 188.376 145.207 188.544L145.095 189.188L145.039 189.496L144.899 190.168L144.843 190.42C144.843 190.476 144.815 190.532 144.787 190.588L144.563 191.148L144.423 191.4C144.423 191.428 144.367 191.428 144.367 191.456L144.031 191.96L143.919 192.24L143.695 192.66C143.639 192.744 143.555 192.856 143.499 192.94L143.471 192.996L142.995 193.612L142.827 193.836L142.379 194.284L142.071 194.592L141.791 194.928C141.679 195.068 141.539 195.18 141.399 195.264L140.951 195.488L140.643 195.656L140.139 195.936C140.083 195.964 139.999 195.992 139.915 196.02L139.747 196.076L139.467 196.272L139.159 196.412L138.879 196.552L138.375 196.776L137.983 196.916L137.115 197.224L136.471 197.392L136.359 197.42C136.247 197.448 136.107 197.448 135.995 197.448H135.463H134.707L134.539 197.42C134.455 197.42 134.371 197.392 134.315 197.364L134.007 197.308L133.419 197.252H133.111L132.327 197.112C132.243 197.084 132.131 197.056 132.019 197L131.571 196.832L131.319 196.748L130.731 196.58L130.367 196.468L130.087 196.384C129.919 196.328 129.751 196.272 129.583 196.132L129.527 196.104L129.023 195.88C128.967 195.852 128.939 195.824 128.855 195.768L128.631 195.628L128.127 195.264L127.847 195.012C127.819 194.984 127.791 194.956 127.763 194.928L127.343 194.452C127.203 194.368 127.035 194.284 126.923 194.116L126.699 193.78L126.475 193.556L126.167 192.996C125.999 192.884 125.859 192.744 125.747 192.52L125.635 192.296L125.579 192.212C125.467 192.072 125.383 191.96 125.327 191.764L125.215 191.344L125.019 191.064L124.823 190.448L124.683 190.168L124.459 189.552C124.403 189.412 124.347 189.244 124.347 189.048V188.6L124.319 188.264V187.648L124.263 187.368V186.948L124.235 186.696L124.207 186.472C124.207 186.36 124.207 186.248 124.207 186.136L124.263 185.604ZM128.659 188.32L128.799 188.74L128.995 189.356L129.051 189.692L129.275 190.252L129.415 190.476L129.807 190.896C129.863 190.952 129.919 191.036 129.975 191.092L130.087 191.26L130.367 191.512C130.507 191.624 130.647 191.736 130.731 191.904V191.932L131.235 192.408L131.571 192.604L132.131 192.94L132.523 193.052L132.663 193.08C132.775 193.108 132.915 193.136 133.027 193.192L133.083 193.22H133.447L134.091 193.36L134.427 193.388L135.099 193.416L135.519 193.36L136.471 193.22L136.947 192.996C137.031 192.94 137.143 192.94 137.227 192.912L137.311 192.884L138.011 192.492L138.291 192.324L138.767 191.932L138.963 191.764L139.495 191.4L139.719 191.092L140.027 190.644L140.223 190.308L140.307 190.028L140.615 189.524V189.244L140.755 188.656L140.811 188.376L140.867 187.62V187.34V186.948V186.752C140.867 186.612 140.895 186.556 140.923 186.416L140.979 186.276L140.839 185.604L140.811 185.24L140.587 184.568L140.419 184.316L140.167 183.672L139.999 183.476L139.719 182.916L139.467 182.608L138.935 182.16L138.711 181.964L138.151 181.572L137.339 180.928L136.975 180.788L136.415 180.564L136.023 180.592L135.407 180.536H135.295C135.183 180.536 135.043 180.564 134.931 180.536L134.819 180.508L134.623 180.536C134.511 180.564 134.399 180.564 134.287 180.564H134.147L133.531 180.592L133.167 180.676L132.691 180.844C132.607 180.872 132.523 180.9 132.439 180.928L132.243 180.956L131.515 181.376L131.291 181.516L130.731 181.936L130.479 182.104L130.115 182.58L129.863 182.972L129.695 183.364C129.639 183.504 129.555 183.616 129.471 183.728L129.415 183.784L129.135 184.344L129.051 184.596L128.855 185.268L128.771 185.632L128.743 186.276L128.659 186.64L128.743 187.032L128.715 187.312C128.715 187.34 128.687 187.424 128.687 187.452L128.659 187.704V188.32ZM154.962 190.168C154.766 190.196 154.57 190.196 154.374 190.112L154.29 190.084L153.898 190.476L153.87 190.812L153.954 191.456L153.982 191.736C153.982 191.848 153.982 191.876 153.982 191.988L153.926 192.604L153.954 192.912V193.332C153.954 193.416 153.954 193.528 153.926 193.612L153.898 193.752L153.954 194.144C153.982 194.256 153.982 194.396 153.954 194.508L153.926 194.732L153.898 195.236L153.926 195.32C153.954 195.432 153.954 195.6 153.926 195.712L153.842 196.104L153.87 196.496C153.87 196.664 153.786 196.832 153.646 197L153.254 196.972H153.226L152.946 196.916L152.33 196.888L152.022 196.944L151.322 196.972L151.042 197L150.622 197.056C150.454 197.084 150.314 197.084 150.146 197.028L150.062 197L150.034 196.972C149.838 196.748 149.67 196.496 149.642 196.244C149.642 196.244 149.642 196.244 149.642 196.216L149.558 195.516C149.558 195.46 149.558 195.376 149.558 195.32V194.816C149.558 194.704 149.586 194.564 149.614 194.424L149.67 194.312L149.698 193.64L149.642 193.304L149.614 192.688L149.502 192.324L149.474 191.792C149.474 191.708 149.502 191.596 149.502 191.512L149.53 191.288L149.558 190.588V190.308L149.614 189.636L149.642 189.272L149.558 188.74C149.558 188.656 149.558 188.6 149.558 188.488V188.264V187.592L149.53 187.452C149.502 187.256 149.502 187.088 149.53 186.892L149.614 186.528L149.586 186.276L149.726 185.548L149.698 185.24L149.614 184.54L149.586 184.26C149.586 184.204 149.586 184.092 149.586 184.036L149.614 183.588V183.224L149.53 182.608L149.502 182.496C149.502 182.384 149.53 182.328 149.53 182.244L149.614 181.628L149.586 181.236L149.642 180.648L149.614 180.256L149.558 179.892C149.53 179.696 149.53 179.528 149.586 179.304V179.22L149.558 178.632L149.53 178.436C149.502 178.324 149.502 178.184 149.502 178.072L149.53 177.736C149.53 177.652 149.558 177.624 149.558 177.568L149.642 177.26C149.894 177.008 150.146 176.868 150.37 176.868L151.042 176.896L151.322 176.868L151.966 176.924L152.722 176.952L153.002 176.812L153.702 176.784L154.066 176.84L154.654 176.868L154.962 176.924L155.578 176.98H155.998L156.278 177.008L156.698 177.036H157.006H157.398L157.734 177.092L158.378 177.148L158.714 177.232L159.162 177.288C159.246 177.316 159.33 177.316 159.386 177.344L159.638 177.428L160.282 177.652L160.506 177.736L161.038 177.932C161.122 177.96 161.206 178.016 161.262 178.044L161.374 178.128L161.906 178.604L162.102 178.8L162.578 179.332L162.802 179.668L163.11 180.2L163.166 180.256C163.25 180.368 163.306 180.48 163.362 180.62L163.418 180.732C163.474 180.872 163.502 181.04 163.502 181.236V181.292L163.614 181.852L163.698 182.16L163.754 182.552C163.782 182.748 163.782 182.944 163.754 183.14V183.168L163.838 183.504L163.81 183.812V183.896C163.838 184.064 163.838 184.148 163.81 184.316L163.754 184.652C163.754 184.708 163.726 184.82 163.698 184.876L163.642 185.072L163.502 185.744L163.39 186.08L163.138 186.724L162.858 187.228C162.802 187.312 162.718 187.424 162.662 187.508L162.578 187.62L162.27 187.984C162.158 188.124 161.99 188.236 161.822 188.32L161.738 188.376L161.514 188.628C161.402 188.768 161.234 188.908 161.066 188.992L161.01 189.02L160.702 189.216C160.618 189.272 160.534 189.3 160.45 189.328L160.338 189.356L159.75 189.608L159.47 189.664C159.414 189.664 159.358 189.72 159.302 189.72L158.714 189.804L158.574 189.86C158.434 189.916 158.238 189.972 158.07 189.972L157.594 190L156.866 190.112L156.25 190.084L155.97 190.14L155.802 190.168C155.662 190.196 155.494 190.196 155.354 190.168L155.27 190.14L154.962 190.168ZM154.906 180.396L154.626 180.48L154.234 180.536L153.926 180.844L153.954 181.264L153.898 181.852V182.188V182.636C153.898 182.804 153.898 182.972 153.842 183.168L153.814 183.224L153.87 183.756L153.842 184.064L153.87 184.736L153.926 185.072L153.982 185.576C154.01 185.744 153.982 185.828 153.954 185.996V186.08L154.29 186.416L154.57 186.472L154.822 186.528L155.578 186.5L155.802 186.472C155.858 186.472 155.97 186.5 156.026 186.5L156.25 186.528L156.642 186.472L157.006 186.528L157.678 186.36L157.986 186.192L158.602 185.828L158.882 185.66L159.218 185.184V184.876L159.386 184.232L159.442 183.952L159.414 183.532L159.442 182.916L159.33 182.272L159.246 181.936L158.798 181.46L158.49 181.208L157.79 180.816L156.95 180.648L156.642 180.62L156.362 180.592C156.306 180.592 156.194 180.564 156.138 180.536L155.886 180.48L155.606 180.452L154.906 180.396ZM167.193 185.604L167.221 185.464C167.221 185.352 167.249 185.24 167.277 185.128L167.473 184.596L167.501 184.316L167.697 183.728L167.781 183.42L168.033 182.86L168.173 182.524L168.481 181.852L168.649 181.516L168.985 180.984L169.125 180.788L169.573 180.256L170.021 179.724C170.077 179.64 170.105 179.612 170.161 179.556L170.329 179.388L171.001 178.744C171.057 178.688 171.141 178.604 171.225 178.548L172.289 177.904L172.681 177.736L173.269 177.428L173.577 177.26L174.193 176.98L174.249 176.952C174.389 176.896 174.557 176.84 174.697 176.84L175.033 176.812L175.341 176.756L176.013 176.672C176.069 176.672 176.181 176.644 176.237 176.644H176.461L177.385 176.56C177.525 176.532 177.637 176.532 177.749 176.56L177.889 176.588H178.197L178.953 176.616H179.065C179.205 176.588 179.373 176.616 179.513 176.644L179.905 176.728L180.297 176.784L180.913 176.924L181.781 177.232L182.145 177.344L182.537 177.484C182.649 177.54 182.789 177.596 182.901 177.68L183.041 177.792L183.937 178.324L184.357 178.632L184.637 178.912L185.085 179.388L185.309 179.64L185.869 180.172L186.009 180.34L186.261 180.62C186.401 180.788 186.485 180.984 186.541 181.152L186.933 181.712L187.045 181.908L187.381 182.468L187.465 182.664C187.493 182.72 187.521 182.832 187.549 182.888L187.689 183.42L187.773 183.644L187.885 184.288L188.025 184.596L188.165 185.24L188.221 185.604L188.249 186.136C188.249 186.248 188.221 186.332 188.221 186.416L188.193 186.584L188.221 186.64C188.277 186.864 188.249 187.032 188.221 187.256V187.34L188.249 187.62L188.277 187.928C188.277 188.152 188.249 188.376 188.137 188.544L188.025 189.188L187.969 189.496L187.829 190.168L187.773 190.42C187.773 190.476 187.745 190.532 187.717 190.588L187.493 191.148L187.353 191.4C187.353 191.428 187.297 191.428 187.297 191.456L186.961 191.96L186.849 192.24L186.625 192.66C186.569 192.744 186.485 192.856 186.429 192.94L186.401 192.996L185.925 193.612L185.757 193.836L185.309 194.284L185.001 194.592L184.721 194.928C184.609 195.068 184.469 195.18 184.329 195.264L183.881 195.488L183.573 195.656L183.069 195.936C183.013 195.964 182.929 195.992 182.845 196.02L182.677 196.076L182.397 196.272L182.089 196.412L181.809 196.552L181.305 196.776L180.913 196.916L180.045 197.224L179.401 197.392L179.289 197.42C179.177 197.448 179.037 197.448 178.925 197.448H178.393H177.637L177.469 197.42C177.385 197.42 177.301 197.392 177.245 197.364L176.937 197.308L176.349 197.252H176.041L175.257 197.112C175.173 197.084 175.061 197.056 174.949 197L174.501 196.832L174.249 196.748L173.661 196.58L173.297 196.468L173.017 196.384C172.849 196.328 172.681 196.272 172.513 196.132L172.457 196.104L171.953 195.88C171.897 195.852 171.869 195.824 171.785 195.768L171.561 195.628L171.057 195.264L170.777 195.012C170.749 194.984 170.721 194.956 170.693 194.928L170.273 194.452C170.133 194.368 169.965 194.284 169.853 194.116L169.629 193.78L169.405 193.556L169.097 192.996C168.929 192.884 168.789 192.744 168.677 192.52L168.565 192.296L168.509 192.212C168.397 192.072 168.313 191.96 168.257 191.764L168.145 191.344L167.949 191.064L167.753 190.448L167.613 190.168L167.389 189.552C167.333 189.412 167.277 189.244 167.277 189.048V188.6L167.249 188.264V187.648L167.193 187.368V186.948L167.165 186.696L167.137 186.472C167.137 186.36 167.137 186.248 167.137 186.136L167.193 185.604ZM171.589 188.32L171.729 188.74L171.925 189.356L171.981 189.692L172.205 190.252L172.345 190.476L172.737 190.896C172.793 190.952 172.849 191.036 172.905 191.092L173.017 191.26L173.297 191.512C173.437 191.624 173.577 191.736 173.661 191.904V191.932L174.165 192.408L174.501 192.604L175.061 192.94L175.453 193.052L175.593 193.08C175.705 193.108 175.845 193.136 175.957 193.192L176.013 193.22H176.377L177.021 193.36L177.357 193.388L178.029 193.416L178.449 193.36L179.401 193.22L179.877 192.996C179.961 192.94 180.073 192.94 180.157 192.912L180.241 192.884L180.941 192.492L181.221 192.324L181.697 191.932L181.893 191.764L182.425 191.4L182.649 191.092L182.957 190.644L183.153 190.308L183.237 190.028L183.545 189.524V189.244L183.685 188.656L183.741 188.376L183.797 187.62V187.34V186.948V186.752C183.797 186.612 183.825 186.556 183.853 186.416L183.909 186.276L183.769 185.604L183.741 185.24L183.517 184.568L183.349 184.316L183.097 183.672L182.929 183.476L182.649 182.916L182.397 182.608L181.865 182.16L181.641 181.964L181.081 181.572L180.269 180.928L179.905 180.788L179.345 180.564L178.953 180.592L178.337 180.536H178.225C178.113 180.536 177.973 180.564 177.861 180.536L177.749 180.508L177.553 180.536C177.441 180.564 177.329 180.564 177.217 180.564H177.077L176.461 180.592L176.097 180.676L175.621 180.844C175.537 180.872 175.453 180.9 175.369 180.928L175.173 180.956L174.445 181.376L174.221 181.516L173.661 181.936L173.409 182.104L173.045 182.58L172.793 182.972L172.625 183.364C172.569 183.504 172.485 183.616 172.401 183.728L172.345 183.784L172.065 184.344L171.981 184.596L171.785 185.268L171.701 185.632L171.673 186.276L171.589 186.64L171.673 187.032L171.645 187.312C171.645 187.34 171.617 187.424 171.617 187.452L171.589 187.704V188.32ZM196.463 197.42C196.323 197.42 196.211 197.42 196.071 197.392L195.903 197.336H195.343C195.259 197.336 195.147 197.336 195.063 197.308L194.811 197.252L194.083 197.112L193.439 196.972C193.383 196.944 193.299 196.944 193.243 196.916L192.963 196.776L192.319 196.552H192.263C192.067 196.468 191.899 196.3 191.759 196.16L191.647 196.02L191.619 195.796L191.591 195.488V195.096C191.591 194.9 191.619 194.732 191.675 194.592V194.564L191.619 193.892L191.591 193.668C191.591 193.64 191.619 193.556 191.619 193.528L191.647 192.94C191.647 192.94 192.011 192.604 192.291 192.492C192.431 192.436 192.543 192.492 192.683 192.548L193.187 192.8L193.411 192.94L194.055 193.108H194.167C194.335 193.108 194.503 193.136 194.671 193.192L195.035 193.332L195.287 193.36L195.987 193.472L196.435 193.444L196.687 193.5H197.051L197.779 193.472L198.115 193.388L198.423 193.36H198.843L199.767 192.996L200.131 192.8L200.467 192.24V191.904V191.736C200.467 191.596 200.495 191.512 200.523 191.4L200.579 191.148L200.411 190.588L200.187 190.224L199.599 189.776L199.235 189.552L198.591 189.244L198.311 189.132L197.695 188.88L197.331 188.74L197.079 188.656L196.743 188.516L196.435 188.404L195.931 188.236C195.819 188.208 195.707 188.18 195.595 188.096L195.511 188.04L195.231 187.928L194.643 187.62C194.447 187.592 194.279 187.508 194.111 187.396L193.747 187.144L193.663 187.088C193.551 187.004 193.467 186.976 193.383 186.864L193.131 186.556L192.991 186.472C192.879 186.388 192.767 186.276 192.683 186.164L192.403 185.8L192.263 185.66L191.899 185.016L191.759 184.736C191.731 184.652 191.703 184.596 191.675 184.54L191.535 184.148C191.507 184.092 191.479 183.98 191.479 183.924L191.451 183.616L191.339 183.084C191.311 182.972 191.339 182.916 191.339 182.776V182.524L191.367 182.188L191.395 181.908V181.46C191.395 181.292 191.423 181.096 191.507 180.928L191.535 180.9L191.675 180.48C191.703 180.34 191.759 180.228 191.843 180.088L191.927 179.976L192.235 179.332L192.263 179.276C192.291 179.22 192.375 179.108 192.403 179.052L192.599 178.772C192.683 178.632 192.795 178.548 192.935 178.436H192.963L193.299 178.044C193.355 177.96 193.439 177.904 193.495 177.848L193.691 177.708L194.279 177.484L194.559 177.316L195.175 177.092L195.455 176.98L195.847 176.812C195.903 176.784 196.015 176.756 196.099 176.728L196.407 176.644L197.107 176.532L197.387 176.504L198.115 176.476L198.535 176.448H199.235L199.851 176.504L200.243 176.56H200.495L200.971 176.644C201.055 176.672 201.167 176.728 201.251 176.756L201.503 176.84L202.175 176.98H202.399L202.987 177.176L203.239 177.26C203.295 177.288 203.351 177.316 203.407 177.344L203.575 177.428L203.715 177.652C203.799 177.792 203.855 177.96 203.883 178.156V178.212V178.884L203.911 179.192L203.967 179.5C203.995 179.64 203.995 179.836 203.967 179.976L203.939 180.144L203.883 180.788C203.883 180.788 203.463 181.096 203.211 181.152C203.127 181.152 203.043 181.096 202.959 181.068L202.231 180.76L201.587 180.564L201.195 180.508L200.467 180.396H200.215L199.543 180.256L199.123 180.284L198.759 180.34H197.835L197.499 180.508L197.079 180.648C197.023 180.676 196.939 180.676 196.855 180.704L196.743 180.732L196.071 181.096L195.875 181.768L195.847 182.048L195.819 182.356L195.875 182.72L195.931 183L196.211 183.644L196.855 184.204L197.135 184.4L197.723 184.764L198.031 184.876L198.675 185.072L199.011 185.184L199.263 185.324L199.655 185.52L199.991 185.548L200.523 185.772C200.579 185.8 200.691 185.828 200.747 185.856L200.943 185.996L201.447 186.192C201.615 186.276 201.727 186.332 201.839 186.444L201.895 186.5L202.511 186.864C202.679 186.92 202.847 187.032 203.015 187.172L203.155 187.312C203.211 187.368 203.295 187.452 203.351 187.536L203.407 187.648L203.967 188.236L204.135 188.46L204.555 188.992L204.583 189.02C204.695 189.188 204.779 189.356 204.807 189.524L204.919 189.916L205.003 190.308L205.059 191.008L205.087 191.12C205.115 191.288 205.115 191.372 205.087 191.54L205.031 191.708V191.988L205.059 192.156C205.087 192.296 205.059 192.352 205.059 192.492L205.031 192.884C205.031 192.996 205.003 193.108 204.947 193.248L204.751 193.724L204.583 194.004L204.331 194.536C204.303 194.62 204.219 194.704 204.163 194.788L204.051 194.928L203.547 195.516L203.071 195.936C203.015 195.992 202.931 196.048 202.875 196.076L202.679 196.188L202.231 196.496C202.119 196.58 201.979 196.636 201.811 196.692L201.671 196.72L201.027 196.916L200.159 197.168L200.047 197.224C199.935 197.252 199.851 197.28 199.739 197.308L199.235 197.364L198.899 197.42L198.339 197.504C198.255 197.532 198.143 197.504 198.059 197.504L197.667 197.476L197.275 197.448L197.023 197.392L196.463 197.42Z"
        fill={fill}
      />
      <G>
        <Path
          d="M157.391 52.2812C147.189 52.2812 138.134 56.3082 132 63.2297C125.866 56.3082 116.811 52.2812 106.609 52.2812C97.7238 52.292 89.2052 55.8266 82.9221 62.1096C76.6391 68.3927 73.1045 76.9113 73.0938 85.7969C73.0938 122.532 126.825 151.884 129.111 153.118C129.999 153.596 130.991 153.846 132 153.846C133.009 153.846 134.001 153.596 134.889 153.118C137.175 151.884 190.906 122.532 190.906 85.7969C190.896 76.9113 187.361 68.3927 181.078 62.1096C174.795 55.8266 166.276 52.292 157.391 52.2812ZM154.603 124.573C147.53 130.575 139.97 135.976 132 140.722C124.03 135.976 116.47 130.575 109.397 124.573C98.393 115.133 85.2812 100.737 85.2812 85.7969C85.2812 80.1403 87.5283 74.7154 91.5281 70.7156C95.5279 66.7158 100.953 64.4688 106.609 64.4688C115.648 64.4688 123.215 69.2422 126.358 76.9305C126.816 78.0512 127.597 79.0104 128.601 79.6855C129.606 80.3606 130.789 80.7212 132 80.7212C133.211 80.7212 134.394 80.3606 135.399 79.6855C136.403 79.0104 137.184 78.0512 137.642 76.9305C140.785 69.2422 148.352 64.4688 157.391 64.4688C163.047 64.4688 168.472 66.7158 172.472 70.7156C176.472 74.7154 178.719 80.1403 178.719 85.7969C178.719 100.737 165.607 115.133 154.603 124.573Z"
          fill={fill}
        />
      </G>
    </G>
    <Defs></Defs>
  </Svg>
);

export { AProposIcon };