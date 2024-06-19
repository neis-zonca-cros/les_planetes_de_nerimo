import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
import { IconProps } from "./iconProps";


const ConnexionRondIcon: React.FC<IconProps> = ({width, fill, background}) => (
  <Svg
  width={width}
  height={width * (264/264)}
  viewBox="0 0 264 264"
  fill={background}
  
>
  <G filter="url(#filter0_d_197_2436)">
    <G filter="url(#filter1_d_197_2436)">
      <Circle
        cx={132}
        cy={128}
        r={126}
        stroke={fill}
        strokeWidth={4}
        
      />
    </G>
    <Path
      d="M68.4816 173.98C68.5936 173.896 68.7896 173.812 69.0416 173.756L69.6576 173.84L70.0496 173.812L70.7776 173.896L71.1136 173.812L71.7856 173.84L72.1496 173.784L72.8216 173.84L73.1016 173.868L73.7176 173.952L73.9696 173.924L74.6136 173.98L75.0056 174.008C75.2016 173.952 75.3976 173.952 75.5936 173.98L75.6776 174.008L76.6016 174.036L76.9376 174.008H77.2456C77.4416 174.008 77.6656 174.036 77.8616 174.12L78.4216 174.204C78.5056 174.204 78.6176 174.232 78.7016 174.26L78.8976 174.316L79.4016 174.68L79.4856 174.708C79.6536 174.764 79.8496 174.82 79.9896 174.932L80.2696 175.128L80.3256 175.156C80.4936 175.212 80.6336 175.296 80.7736 175.408L81.0816 175.632L81.2496 175.828C81.2776 175.856 81.3056 175.856 81.3336 175.912L81.6696 176.304V176.332C81.8656 176.472 81.9776 176.612 82.0896 176.78L82.2856 177.088L82.3136 177.144C82.4536 177.312 82.5376 177.452 82.5936 177.648L82.6776 177.844C82.7056 177.956 82.7336 178.012 82.7336 178.124L82.7616 178.348L82.8736 178.936L82.9856 179.3L83.0416 179.468C83.1256 179.72 83.1536 179.972 83.0976 180.252V180.28L83.1816 180.532L83.1256 180.924V181.288L83.0696 181.96V181.988C83.0696 182.212 82.9856 182.38 82.9016 182.548L82.7616 182.856L82.5656 183.192L82.2856 183.64C82.2296 183.752 82.1736 183.836 82.1176 183.892L82.0056 184.004L81.8656 184.256C81.7536 184.508 81.6136 184.676 81.4176 184.788L81.0256 185.18C80.9696 185.236 80.8856 185.264 80.8296 185.32L80.6336 185.46L80.1296 185.74L79.8496 185.88L79.6256 186.048L79.4576 186.552L79.6536 186.86L79.9056 187.448L80.1576 187.756L80.4376 188.232L80.6056 188.54L80.8576 189.072L81.0536 189.464L81.2776 190.052L81.5016 190.276L81.8096 190.836L81.8376 190.892C81.9216 191.004 81.9776 191.116 82.0336 191.256L82.2016 191.676L82.3136 191.984L82.6496 192.488L82.8456 192.74L83.0136 193.076C83.0696 193.188 83.1256 193.328 83.1536 193.44L83.2096 193.608C83.0976 193.832 82.9296 194 82.7336 194.028L82.4256 194.084L81.9776 194.112C81.8096 194.112 81.6416 194.112 81.5016 194.056L81.3896 194.028H80.7736H80.6896C80.5496 194.056 80.4096 194.056 80.2696 194.028L79.9056 193.972H79.5416C79.3456 193.972 79.1496 193.888 78.9816 193.804L78.7856 193.692L78.7016 193.636C78.6176 193.552 78.5896 193.44 78.5336 193.3L78.3656 192.852L78.2256 192.628L77.9176 191.928L77.8056 191.62L77.5256 191.004L77.4136 190.808L77.1336 190.332C77.0776 190.248 77.0216 190.192 76.9936 190.08L76.9656 189.912L76.6576 189.548C76.5736 189.464 76.5456 189.352 76.4896 189.212L76.4336 189.072L76.1256 188.512L76.0416 188.372C76.0416 188.344 75.9856 188.288 75.9856 188.232L75.8456 187.7L75.5936 187.308L75.1456 186.916L74.7816 186.944L74.2216 186.888L73.8576 186.916H73.2136L72.8496 187.028L72.5416 187.364L72.6256 187.616L72.5416 188.372L72.5136 188.708L72.4856 189.352L72.5136 189.688L72.4296 190.36V190.584L72.4576 191.312L72.5416 191.62L72.5136 192.404L72.4296 193.188L72.4856 193.524C72.4576 193.524 72.2616 193.832 72.0656 194C71.9536 194.084 71.8136 194.084 71.7016 194.084H71.5896L70.7216 194L69.9936 193.972L69.7136 194.056L68.9576 194C68.9576 194 68.3136 193.58 68.2856 193.356C68.2856 193.356 68.2856 193.356 68.2856 193.328L68.3416 192.572L68.3136 192.208L68.2856 191.536V191.284L68.3136 190.556V190.248L68.2856 189.576L68.3136 189.352L68.2576 188.596L68.2016 188.26L68.1456 187.588L68.1736 187.252L68.2296 186.552L68.1736 186.272L68.2576 185.628L68.3416 185.236L68.2856 184.592L68.2576 184.284L68.2016 183.864C68.1736 183.724 68.1736 183.64 68.2016 183.5L68.2296 183.36L68.2856 182.66L68.2576 182.352L68.3416 181.652L68.3136 181.344V180.588L68.2856 180.336C68.2856 180.224 68.2856 180.168 68.2856 180.084L68.3696 179.636L68.3976 179.3L68.3416 178.908C68.3416 178.796 68.3136 178.628 68.3416 178.516L68.3696 178.376L68.3136 177.592L68.2856 177.452C68.2576 177.34 68.2576 177.256 68.2576 177.172L68.2856 176.64L68.3136 176.304L68.2856 175.604L68.2576 175.352L68.2016 174.848C68.2016 174.792 68.1736 174.708 68.1736 174.652L68.2016 174.456C68.2576 174.26 68.3416 174.064 68.4816 173.98ZM74.2776 177.452L73.8296 177.564L73.2416 177.536L72.8776 177.48L72.6256 177.816L72.5976 178.124L72.5696 178.796L72.5416 179.16L72.4576 179.804L72.4856 180.196L72.5136 180.98L72.4856 181.736V182.044L72.4296 182.688L72.4856 182.94V183.248L72.8216 183.528H73.4376L73.8576 183.5H74.1376L75.4816 183.416L76.1816 183.444L76.8816 183.36L77.2176 183.276L77.7496 182.884L78.0856 182.66L78.3656 182.072L78.5336 181.736L78.6176 181.176V180.812L78.5616 180.476V180.196L78.5896 179.86L78.4776 179.3L78.3936 178.992L78.0016 178.46L77.7216 178.18L77.0776 177.76L76.7416 177.676L76.1536 177.48L75.8456 177.452H75.7616C75.6216 177.48 75.4536 177.508 75.3136 177.48L75.1736 177.452H74.8376H74.2776ZM100.804 193.748C100.636 193.888 100.468 193.944 100.272 194L99.9636 194.056C99.7116 194.112 99.4876 194.084 99.3196 194.028L98.8156 194.056C98.7316 194.056 98.6476 194.056 98.5636 194.056L98.3116 194.028L97.8916 194.084C97.6676 194.112 97.4996 194.084 97.3316 194L96.5756 193.944L96.2116 194.056L95.5396 194.028L95.1756 194.056L94.4476 193.944L94.1396 193.916H93.4676L93.1036 193.944L92.8236 194.056L92.4596 194.112H92.2916C92.2076 194.112 92.0676 194.112 91.9836 194.112L91.4236 194.056L91.1436 194L90.4716 194.028L90.1356 194.084L89.5756 194.112L89.3236 194.14C89.2396 194.14 89.1276 194.112 89.0436 194.112L88.4556 194.028C88.4556 194.028 88.1196 193.748 87.9236 193.496C87.8116 193.356 87.8116 193.16 87.7836 192.964L87.7556 192.572L87.6716 192.236L87.6436 191.648L87.5876 191.256V190.64L87.6156 190.276L87.5876 189.632L87.5596 189.436C87.5596 189.38 87.5876 189.296 87.5876 189.24L87.6716 188.596L87.6156 188.232L87.5876 187.56V187.308L87.5596 186.608V186.3C87.5596 186.244 87.5596 186.132 87.5596 186.076L87.6436 185.488L87.5596 185.18L87.5876 184.564V184.256L87.6716 183.64L87.6996 183.304L87.7556 182.772L87.6156 182.38L87.5876 181.708V181.4L87.6436 180.672L87.6156 180.392L87.6436 179.636L87.6716 179.328L87.6436 178.684V178.348L87.6156 177.648L87.5876 177.312V176.752C87.5876 176.64 87.6156 176.584 87.6156 176.5L87.6436 176.304L87.5876 175.66C87.5876 175.576 87.6156 175.464 87.6156 175.38L87.6996 174.792L87.7556 174.512C87.7556 174.512 88.0356 174.204 88.2876 174.036C88.3996 173.98 88.5676 173.98 88.7076 173.952L89.0436 173.924L89.4076 173.868L89.9676 173.84C90.0516 173.84 90.1076 173.868 90.1916 173.868L90.4716 173.896L91.1156 173.812C91.1716 173.812 91.3116 173.812 91.3676 173.812L92.0396 173.84L92.3476 173.812H92.7956C92.8796 173.812 93.0196 173.84 93.1036 173.868L93.2436 173.896L93.9716 173.812L94.3916 173.784H94.7836C94.9796 173.784 95.1476 173.784 95.3156 173.868L96.2676 173.812L96.6596 173.756C96.7996 173.728 96.9396 173.756 97.0796 173.784L97.1916 173.812L97.8076 173.868L98.8156 173.896L99.1796 173.924H100.02C100.216 173.896 100.44 173.952 100.608 174.12V174.204C100.636 174.344 100.636 174.456 100.636 174.596V174.708L100.608 175.156C100.608 175.296 100.58 175.38 100.552 175.492L100.524 175.632L100.496 175.996L100.608 176.64C100.636 176.864 100.524 177.144 100.356 177.424L100.328 177.452L99.9636 177.536H99.4036C99.2636 177.536 99.1236 177.536 99.0116 177.508L98.9276 177.48L98.2276 177.452L97.9756 177.396L97.2476 177.34C97.0516 177.396 96.8276 177.424 96.6316 177.396L96.2676 177.452L95.5396 177.508L95.2036 177.48L94.4756 177.536H94.4196C94.2796 177.564 94.1396 177.564 94.0276 177.536L93.4676 177.424L92.3476 177.48L91.9836 177.788L91.9556 178.152L91.8996 178.516L91.9556 179.132L91.9276 179.412L91.9836 180.028L92.0676 180.364V180.644L92.0956 181.316V181.652L92.4596 181.988L92.7956 182.044L93.2436 182.016C93.3276 182.016 93.4676 182.016 93.5516 182.016L93.6916 182.044L93.9716 181.988L94.3916 181.96C94.4756 181.96 94.5876 181.96 94.6716 181.988L94.8956 182.016L95.5396 182.072L95.8476 182.016H96.1836C96.3236 182.016 96.4916 182.044 96.6036 182.072L96.7716 182.1L97.4436 182.072H97.7236H98.3396C98.4236 182.072 98.5076 182.044 98.5916 182.072L98.9276 182.128C99.1796 182.352 99.2916 182.632 99.2916 182.912L99.3196 183.472C99.3196 183.528 99.3196 183.64 99.3196 183.696L99.2916 184.032V184.704C99.2916 184.788 99.2916 184.872 99.2636 184.928C99.2076 185.264 98.9276 185.404 98.7316 185.46C98.6756 185.488 98.5636 185.488 98.5076 185.488H98.2556L97.8636 185.46L97.5836 185.488L96.9116 185.516L96.5476 185.628H96.2396C96.0716 185.628 95.9036 185.6 95.7636 185.544L95.6796 185.516H95.4276H94.7276L94.4756 185.628L93.9996 185.684C93.8876 185.684 93.7476 185.684 93.6356 185.656L93.5236 185.628L92.8796 185.6L92.4596 185.628L92.0676 185.908L92.0396 186.244L91.9556 186.888V187.196L91.9276 187.812L91.8996 188.092L91.8716 188.708L91.9276 189.044V189.632L91.9556 189.94L92.3476 190.388L92.7116 190.36L93.4116 190.388H93.7476L94.7276 190.332L95.1756 190.388C95.2596 190.388 95.3716 190.416 95.4556 190.444L95.6236 190.5L96.7156 190.472H97.4436L98.4516 190.388C98.5356 190.388 98.6196 190.388 98.7036 190.388L99.5156 190.472H100.104C100.188 190.472 100.272 190.472 100.356 190.5L100.552 190.556C100.832 190.808 100.972 191.032 101 191.312L101.028 191.984L101.084 192.432L101.056 193.104C101.028 193.384 100.944 193.636 100.804 193.748ZM121.774 194.056C121.662 194.084 121.494 194.028 121.326 193.86L120.906 193.356L120.626 193.188L120.122 192.572L119.618 192.068L119.394 191.928L118.89 191.452L118.666 191.228L118.246 190.808L117.91 190.612L117.602 190.36C117.518 190.304 117.462 190.192 117.406 190.108L117.266 189.94L116.874 189.492L116.538 189.184L116.09 188.792L115.782 188.54L115.39 188.092L115.138 187.924L114.69 187.336L114.466 187.168L114.046 186.888C113.934 186.804 113.85 186.748 113.794 186.664L113.71 186.552L113.318 186.104L113.122 185.908L112.758 185.544C112.702 185.488 112.646 185.376 112.59 185.32L112.506 185.208L112.002 184.816L111.638 184.592L111.218 184.312C111.162 184.256 111.078 184.2 111.022 184.144L110.91 184.032L110.658 183.724L110.49 183.584L109.986 183.08L109.678 182.884L109.51 183.108V183.444L109.538 184.256L109.566 184.424C109.594 184.564 109.566 184.62 109.566 184.76L109.538 185.068C109.538 185.208 109.51 185.292 109.482 185.404L109.454 185.516L109.482 186.16L109.426 186.524L109.51 187.084C109.538 187.196 109.538 187.336 109.51 187.448V187.476V188.204L109.566 188.568L109.538 189.212V189.576V190.22L109.51 190.584L109.538 191.424L109.482 192.096L109.426 192.46L109.398 193.16C109.398 193.16 109.146 193.608 108.922 193.832C108.81 193.944 108.614 193.944 108.474 193.944L108.11 193.972H107.774L107.494 194C107.41 194 107.298 194.028 107.214 194.028L107.018 194L106.626 193.944L105.982 194.028C105.982 194.028 105.646 193.804 105.45 193.58C105.31 193.44 105.31 193.244 105.282 193.076L105.254 192.712L105.198 192.32L105.142 191.844C105.142 191.704 105.142 191.592 105.17 191.424L105.198 191.284L105.226 190.836C105.226 190.78 105.226 190.668 105.226 190.612L105.282 190.304V189.744C105.198 189.548 105.17 189.296 105.198 189.072L105.226 188.848L105.254 188.484L105.282 187.924C105.282 187.812 105.282 187.784 105.31 187.7L105.394 187.42L105.338 187.056C105.31 186.86 105.31 186.72 105.338 186.552L105.366 186.496L105.282 185.908C105.282 185.796 105.282 185.74 105.282 185.628L105.366 185.04L105.282 184.648L105.254 184.144C105.254 184.032 105.254 184.004 105.254 183.892L105.282 183.612L105.31 183.08C105.31 182.996 105.31 182.856 105.338 182.772L105.366 182.604L105.338 182.044L105.282 181.708L105.226 181.26C105.226 181.148 105.198 181.064 105.226 180.924L105.254 180.812V180.224C105.254 180.168 105.282 180.112 105.282 180.028L105.338 179.776L105.282 179.132L105.17 178.908L105.142 178.152V177.536L105.198 177.144L105.17 176.808L105.226 176.248L105.198 176.22C105.17 176.052 105.17 175.856 105.198 175.688L105.254 175.324L105.226 175.016L105.198 174.4C105.198 174.344 105.198 174.232 105.198 174.176L105.226 173.896L105.282 173.812C105.366 173.672 105.394 173.588 105.45 173.532L105.758 173.728L105.926 173.868C105.982 173.924 106.038 173.98 106.066 174.036L106.402 174.456L107.27 175.296L107.746 175.716L107.97 175.996L108.418 176.416L108.754 176.696L109.146 177.088L109.426 177.368L109.818 177.844L109.986 178.068L110.462 178.544L110.714 178.684L111.106 179.104L111.33 179.384L111.806 179.72L112.058 179.944L112.534 180.336L112.73 180.476C112.842 180.56 112.926 180.644 113.01 180.728L113.374 181.176L113.822 181.568C113.906 181.652 113.934 181.708 113.99 181.792L114.13 181.96L114.578 182.324C114.69 182.408 114.746 182.52 114.83 182.632L114.914 182.744L115.138 183.052L115.474 183.276L115.922 183.752L116.174 183.976L116.37 184.172L116.706 184.424L117.182 184.816L117.462 185.096L117.742 184.9V184.648L117.77 184.312V183.584L117.826 183.22L117.77 182.576L117.742 182.268L117.714 181.596L117.686 181.26L117.742 180.616L117.77 180.252L117.742 179.58V179.272L117.658 178.656V178.46C117.658 178.376 117.658 178.32 117.658 178.236L117.714 177.704L117.798 177.284L117.826 176.612V176.276L117.686 175.688L117.63 175.352C117.63 175.324 117.63 175.296 117.63 175.268L117.602 174.652C117.63 174.428 117.77 174.148 117.994 173.924L118.022 173.896L118.498 173.868L119.002 173.812C119.114 173.812 119.226 173.812 119.338 173.84H119.478H119.87C120.038 173.84 120.178 173.84 120.346 173.896L120.486 173.924L121.27 173.98C121.27 173.98 121.69 174.26 121.858 174.512C121.914 174.596 121.914 174.68 121.914 174.792L121.998 175.464L121.97 176.192L121.998 176.528L122.026 177.228L122.054 177.312C122.082 177.424 122.082 177.592 122.082 177.704L122.054 178.18L122.026 178.544L122.054 178.964C122.054 179.076 122.026 179.16 122.026 179.244L121.998 179.524L122.026 179.916C122.026 180.028 122.026 180.196 121.998 180.308L121.97 180.448V181.036L122.026 181.428L122.054 181.792C122.082 181.988 122.054 182.212 121.998 182.436V182.464L122.026 183.164L121.97 183.92L122.026 184.312L121.942 184.956V185.292L121.998 185.992L122.026 186.328L122.054 187.112L121.998 187.84L121.942 188.204L121.998 188.708C121.998 188.82 121.998 188.932 121.97 189.044V189.212V189.856V190.22L122.054 190.752C122.054 190.836 122.082 190.92 122.082 191.004V191.144L122.026 191.788V192.068L122.054 192.656L122.026 193.02V193.524C122.026 193.608 122.026 193.748 121.998 193.832L121.942 194.028L121.774 194.056ZM140.924 177.256C140.812 177.396 140.644 177.452 140.42 177.48L139.636 177.452H139.272H138.572L138.236 177.396H137.564H137.256L137.004 177.368L136.332 177.424L135.996 177.452L135.604 177.76L135.576 178.152L135.604 178.768C135.604 178.88 135.604 178.936 135.576 179.048L135.52 179.244L135.548 179.86L135.492 180.196L135.464 180.784L135.52 181.176V181.82L135.548 182.128L135.52 182.828L135.548 183.164V183.78L135.576 184.06L135.604 184.76L135.576 185.348C135.576 185.488 135.548 185.572 135.52 185.684L135.436 185.936L135.38 186.58L135.436 186.888L135.464 187.7L135.52 188.484L135.604 188.764V189.548L135.576 189.856L135.52 190.584L135.464 191.34L135.548 191.648V192.292V192.628L135.464 193.216C135.464 193.216 135.156 193.804 134.96 194C134.904 194.056 134.82 194.056 134.736 194.056L134.064 194.028L133.784 194.056H133.084H132.72L132.076 194C131.824 193.972 131.544 193.888 131.32 193.692L131.292 193.664L131.264 193.328L131.236 192.964C131.208 192.684 131.236 192.516 131.292 192.348V191.704L131.264 191.564C131.208 191.368 131.18 191.2 131.208 191.032L131.264 190.668L131.208 190.416L131.236 189.856L131.124 189.52L131.096 188.96C131.096 188.848 131.096 188.792 131.124 188.68L131.18 188.456L131.236 187.924L131.292 187.56L131.348 186.972L131.32 186.608L131.208 185.992L131.152 185.74C131.152 185.656 131.152 185.572 131.152 185.46V185.068C131.152 184.928 131.18 184.844 131.208 184.732L131.236 184.648L131.32 183.976L131.264 183.612L131.292 182.94L131.236 182.716L131.264 182.128L131.236 181.848L131.18 181.176L131.152 181.008C131.152 180.896 131.152 180.868 131.152 180.756L131.208 180.224L131.292 179.972L131.32 179.244L131.236 178.88L131.264 178.208L131.236 177.844L130.816 177.452L130.48 177.48L129.92 177.508C129.836 177.508 129.752 177.536 129.668 177.508L129.472 177.48L129.164 177.452H129.108C128.912 177.508 128.716 177.536 128.52 177.48L128.436 177.508C128.268 177.536 128.072 177.536 127.904 177.508L127.568 177.424H127.12H126.476L126.196 177.452C126.196 177.452 125.664 177.116 125.58 176.864C125.552 176.836 125.552 176.808 125.552 176.752V176.556L125.524 176.08C125.524 175.968 125.496 175.884 125.524 175.772L125.58 175.576L125.636 174.82L125.552 174.568C125.552 174.428 125.692 174.176 125.86 173.952L126.224 173.868L126.84 173.84C126.924 173.84 126.98 173.84 127.064 173.868L127.204 173.896L127.932 173.924L128.184 173.868L128.856 173.84H129.136L129.78 173.868L130.116 173.812L130.676 173.84C130.788 173.84 130.872 173.84 130.984 173.868L131.096 173.896H131.768H131.992L132.636 173.952L132.972 173.84L133.672 173.868L134.12 173.812H134.54C134.708 173.812 134.876 173.84 135.016 173.896L135.072 173.924H135.688H135.968L136.64 173.98L136.892 173.952L137.508 173.924L137.928 173.812L138.488 173.756C138.572 173.756 138.656 173.756 138.74 173.756L139.412 173.84L139.72 173.868L140.392 173.924C140.392 173.924 140.728 174.092 140.924 174.288C141.064 174.428 141.064 174.596 141.064 174.792V174.82L141.148 175.492L141.176 175.856L141.204 176.22C141.232 176.36 141.232 176.5 141.204 176.64L141.176 176.724L141.092 177.06L140.924 177.256ZM144.989 173.98C145.101 173.896 145.297 173.812 145.549 173.756L146.165 173.84L146.557 173.812L147.285 173.896L147.621 173.812L148.293 173.84L148.657 173.784L149.329 173.84L149.609 173.868L150.225 173.952L150.477 173.924L151.121 173.98L151.513 174.008C151.709 173.952 151.905 173.952 152.101 173.98L152.185 174.008L153.109 174.036L153.445 174.008H153.753C153.949 174.008 154.173 174.036 154.369 174.12L154.929 174.204C155.013 174.204 155.125 174.232 155.209 174.26L155.405 174.316L155.909 174.68L155.993 174.708C156.161 174.764 156.357 174.82 156.497 174.932L156.777 175.128L156.833 175.156C157.001 175.212 157.141 175.296 157.281 175.408L157.589 175.632L157.757 175.828C157.785 175.856 157.813 175.856 157.841 175.912L158.177 176.304V176.332C158.373 176.472 158.485 176.612 158.597 176.78L158.793 177.088L158.821 177.144C158.961 177.312 159.045 177.452 159.101 177.648L159.185 177.844C159.213 177.956 159.241 178.012 159.241 178.124L159.269 178.348L159.381 178.936L159.493 179.3L159.549 179.468C159.633 179.72 159.661 179.972 159.605 180.252V180.28L159.689 180.532L159.633 180.924V181.288L159.577 181.96V181.988C159.577 182.212 159.493 182.38 159.409 182.548L159.269 182.856L159.073 183.192L158.793 183.64C158.737 183.752 158.681 183.836 158.625 183.892L158.513 184.004L158.373 184.256C158.261 184.508 158.121 184.676 157.925 184.788L157.533 185.18C157.477 185.236 157.393 185.264 157.337 185.32L157.141 185.46L156.637 185.74L156.357 185.88L156.133 186.048L155.965 186.552L156.161 186.86L156.413 187.448L156.665 187.756L156.945 188.232L157.113 188.54L157.365 189.072L157.561 189.464L157.785 190.052L158.009 190.276L158.317 190.836L158.345 190.892C158.429 191.004 158.485 191.116 158.541 191.256L158.709 191.676L158.821 191.984L159.157 192.488L159.353 192.74L159.521 193.076C159.577 193.188 159.633 193.328 159.661 193.44L159.717 193.608C159.605 193.832 159.437 194 159.241 194.028L158.933 194.084L158.485 194.112C158.317 194.112 158.149 194.112 158.009 194.056L157.897 194.028H157.281H157.197C157.057 194.056 156.917 194.056 156.777 194.028L156.413 193.972H156.049C155.853 193.972 155.657 193.888 155.489 193.804L155.293 193.692L155.209 193.636C155.125 193.552 155.097 193.44 155.041 193.3L154.873 192.852L154.733 192.628L154.425 191.928L154.313 191.62L154.033 191.004L153.921 190.808L153.641 190.332C153.585 190.248 153.529 190.192 153.501 190.08L153.473 189.912L153.165 189.548C153.081 189.464 153.053 189.352 152.997 189.212L152.941 189.072L152.633 188.512L152.549 188.372C152.549 188.344 152.493 188.288 152.493 188.232L152.353 187.7L152.101 187.308L151.653 186.916L151.289 186.944L150.729 186.888L150.365 186.916H149.721L149.357 187.028L149.049 187.364L149.133 187.616L149.049 188.372L149.021 188.708L148.993 189.352L149.021 189.688L148.937 190.36V190.584L148.965 191.312L149.049 191.62L149.021 192.404L148.937 193.188L148.993 193.524C148.965 193.524 148.769 193.832 148.573 194C148.461 194.084 148.321 194.084 148.209 194.084H148.097L147.229 194L146.501 193.972L146.221 194.056L145.465 194C145.465 194 144.821 193.58 144.793 193.356C144.793 193.356 144.793 193.356 144.793 193.328L144.849 192.572L144.821 192.208L144.793 191.536V191.284L144.821 190.556V190.248L144.793 189.576L144.821 189.352L144.765 188.596L144.709 188.26L144.653 187.588L144.681 187.252L144.737 186.552L144.681 186.272L144.765 185.628L144.849 185.236L144.793 184.592L144.765 184.284L144.709 183.864C144.681 183.724 144.681 183.64 144.709 183.5L144.737 183.36L144.793 182.66L144.765 182.352L144.849 181.652L144.821 181.344V180.588L144.793 180.336C144.793 180.224 144.793 180.168 144.793 180.084L144.877 179.636L144.905 179.3L144.849 178.908C144.849 178.796 144.821 178.628 144.849 178.516L144.877 178.376L144.821 177.592L144.793 177.452C144.765 177.34 144.765 177.256 144.765 177.172L144.793 176.64L144.821 176.304L144.793 175.604L144.765 175.352L144.709 174.848C144.709 174.792 144.681 174.708 144.681 174.652L144.709 174.456C144.765 174.26 144.849 174.064 144.989 173.98ZM150.785 177.452L150.337 177.564L149.749 177.536L149.385 177.48L149.133 177.816L149.105 178.124L149.077 178.796L149.049 179.16L148.965 179.804L148.993 180.196L149.021 180.98L148.993 181.736V182.044L148.937 182.688L148.993 182.94V183.248L149.329 183.528H149.945L150.365 183.5H150.645L151.989 183.416L152.689 183.444L153.389 183.36L153.725 183.276L154.257 182.884L154.593 182.66L154.873 182.072L155.041 181.736L155.125 181.176V180.812L155.069 180.476V180.196L155.097 179.86L154.985 179.3L154.901 178.992L154.509 178.46L154.229 178.18L153.585 177.76L153.249 177.676L152.661 177.48L152.353 177.452H152.269C152.129 177.48 151.961 177.508 151.821 177.48L151.681 177.452H151.345H150.785ZM177.311 193.748C177.143 193.888 176.975 193.944 176.779 194L176.471 194.056C176.219 194.112 175.995 194.084 175.827 194.028L175.323 194.056C175.239 194.056 175.155 194.056 175.071 194.056L174.819 194.028L174.399 194.084C174.175 194.112 174.007 194.084 173.839 194L173.083 193.944L172.719 194.056L172.047 194.028L171.683 194.056L170.955 193.944L170.647 193.916H169.975L169.611 193.944L169.331 194.056L168.967 194.112H168.799C168.715 194.112 168.575 194.112 168.491 194.112L167.931 194.056L167.651 194L166.979 194.028L166.643 194.084L166.083 194.112L165.831 194.14C165.747 194.14 165.635 194.112 165.551 194.112L164.963 194.028C164.963 194.028 164.627 193.748 164.431 193.496C164.319 193.356 164.319 193.16 164.291 192.964L164.263 192.572L164.179 192.236L164.151 191.648L164.095 191.256V190.64L164.123 190.276L164.095 189.632L164.067 189.436C164.067 189.38 164.095 189.296 164.095 189.24L164.179 188.596L164.123 188.232L164.095 187.56V187.308L164.067 186.608V186.3C164.067 186.244 164.067 186.132 164.067 186.076L164.151 185.488L164.067 185.18L164.095 184.564V184.256L164.179 183.64L164.207 183.304L164.263 182.772L164.123 182.38L164.095 181.708V181.4L164.151 180.672L164.123 180.392L164.151 179.636L164.179 179.328L164.151 178.684V178.348L164.123 177.648L164.095 177.312V176.752C164.095 176.64 164.123 176.584 164.123 176.5L164.151 176.304L164.095 175.66C164.095 175.576 164.123 175.464 164.123 175.38L164.207 174.792L164.263 174.512C164.263 174.512 164.543 174.204 164.795 174.036C164.907 173.98 165.075 173.98 165.215 173.952L165.551 173.924L165.915 173.868L166.475 173.84C166.559 173.84 166.615 173.868 166.699 173.868L166.979 173.896L167.623 173.812C167.679 173.812 167.819 173.812 167.875 173.812L168.547 173.84L168.855 173.812H169.303C169.387 173.812 169.527 173.84 169.611 173.868L169.751 173.896L170.479 173.812L170.899 173.784H171.291C171.487 173.784 171.655 173.784 171.823 173.868L172.775 173.812L173.167 173.756C173.307 173.728 173.447 173.756 173.587 173.784L173.699 173.812L174.315 173.868L175.323 173.896L175.687 173.924H176.527C176.723 173.896 176.947 173.952 177.115 174.12V174.204C177.143 174.344 177.143 174.456 177.143 174.596V174.708L177.115 175.156C177.115 175.296 177.087 175.38 177.059 175.492L177.031 175.632L177.003 175.996L177.115 176.64C177.143 176.864 177.031 177.144 176.863 177.424L176.835 177.452L176.471 177.536H175.911C175.771 177.536 175.631 177.536 175.519 177.508L175.435 177.48L174.735 177.452L174.483 177.396L173.755 177.34C173.559 177.396 173.335 177.424 173.139 177.396L172.775 177.452L172.047 177.508L171.711 177.48L170.983 177.536H170.927C170.787 177.564 170.647 177.564 170.535 177.536L169.975 177.424L168.855 177.48L168.491 177.788L168.463 178.152L168.407 178.516L168.463 179.132L168.435 179.412L168.491 180.028L168.575 180.364V180.644L168.603 181.316V181.652L168.967 181.988L169.303 182.044L169.751 182.016C169.835 182.016 169.975 182.016 170.059 182.016L170.199 182.044L170.479 181.988L170.899 181.96C170.983 181.96 171.095 181.96 171.179 181.988L171.403 182.016L172.047 182.072L172.355 182.016H172.691C172.831 182.016 172.999 182.044 173.111 182.072L173.279 182.1L173.951 182.072H174.231H174.847C174.931 182.072 175.015 182.044 175.099 182.072L175.435 182.128C175.687 182.352 175.799 182.632 175.799 182.912L175.827 183.472C175.827 183.528 175.827 183.64 175.827 183.696L175.799 184.032V184.704C175.799 184.788 175.799 184.872 175.771 184.928C175.715 185.264 175.435 185.404 175.239 185.46C175.183 185.488 175.071 185.488 175.015 185.488H174.763L174.371 185.46L174.091 185.488L173.419 185.516L173.055 185.628H172.747C172.579 185.628 172.411 185.6 172.271 185.544L172.187 185.516H171.935H171.235L170.983 185.628L170.507 185.684C170.395 185.684 170.255 185.684 170.143 185.656L170.031 185.628L169.387 185.6L168.967 185.628L168.575 185.908L168.547 186.244L168.463 186.888V187.196L168.435 187.812L168.407 188.092L168.379 188.708L168.435 189.044V189.632L168.463 189.94L168.855 190.388L169.219 190.36L169.919 190.388H170.255L171.235 190.332L171.683 190.388C171.767 190.388 171.879 190.416 171.963 190.444L172.131 190.5L173.223 190.472H173.951L174.959 190.388C175.043 190.388 175.127 190.388 175.211 190.388L176.023 190.472H176.611C176.695 190.472 176.779 190.472 176.863 190.5L177.059 190.556C177.339 190.808 177.479 191.032 177.507 191.312L177.535 191.984L177.591 192.432L177.563 193.104C177.535 193.384 177.451 193.636 177.311 193.748ZM181.985 173.98C182.097 173.896 182.293 173.812 182.545 173.756L183.161 173.84L183.553 173.812L184.281 173.896L184.617 173.812L185.289 173.84L185.653 173.784L186.325 173.84L186.605 173.868L187.221 173.952L187.473 173.924L188.117 173.98L188.509 174.008C188.705 173.952 188.901 173.952 189.097 173.98L189.181 174.008L190.105 174.036L190.441 174.008H190.749C190.945 174.008 191.169 174.036 191.365 174.12L191.925 174.204C192.009 174.204 192.121 174.232 192.205 174.26L192.401 174.316L192.905 174.68L192.989 174.708C193.157 174.764 193.353 174.82 193.493 174.932L193.773 175.128L193.829 175.156C193.997 175.212 194.137 175.296 194.277 175.408L194.585 175.632L194.753 175.828C194.781 175.856 194.809 175.856 194.837 175.912L195.173 176.304V176.332C195.369 176.472 195.481 176.612 195.593 176.78L195.789 177.088L195.817 177.144C195.957 177.312 196.041 177.452 196.097 177.648L196.181 177.844C196.209 177.956 196.237 178.012 196.237 178.124L196.265 178.348L196.377 178.936L196.489 179.3L196.545 179.468C196.629 179.72 196.657 179.972 196.601 180.252V180.28L196.685 180.532L196.629 180.924V181.288L196.573 181.96V181.988C196.573 182.212 196.489 182.38 196.405 182.548L196.265 182.856L196.069 183.192L195.789 183.64C195.733 183.752 195.677 183.836 195.621 183.892L195.509 184.004L195.369 184.256C195.257 184.508 195.117 184.676 194.921 184.788L194.529 185.18C194.473 185.236 194.389 185.264 194.333 185.32L194.137 185.46L193.633 185.74L193.353 185.88L193.129 186.048L192.961 186.552L193.157 186.86L193.409 187.448L193.661 187.756L193.941 188.232L194.109 188.54L194.361 189.072L194.557 189.464L194.781 190.052L195.005 190.276L195.313 190.836L195.341 190.892C195.425 191.004 195.481 191.116 195.537 191.256L195.705 191.676L195.817 191.984L196.153 192.488L196.349 192.74L196.517 193.076C196.573 193.188 196.629 193.328 196.657 193.44L196.713 193.608C196.601 193.832 196.433 194 196.237 194.028L195.929 194.084L195.481 194.112C195.313 194.112 195.145 194.112 195.005 194.056L194.893 194.028H194.277H194.193C194.053 194.056 193.913 194.056 193.773 194.028L193.409 193.972H193.045C192.849 193.972 192.653 193.888 192.485 193.804L192.289 193.692L192.205 193.636C192.121 193.552 192.093 193.44 192.037 193.3L191.869 192.852L191.729 192.628L191.421 191.928L191.309 191.62L191.029 191.004L190.917 190.808L190.637 190.332C190.581 190.248 190.525 190.192 190.497 190.08L190.469 189.912L190.161 189.548C190.077 189.464 190.049 189.352 189.993 189.212L189.937 189.072L189.629 188.512L189.545 188.372C189.545 188.344 189.489 188.288 189.489 188.232L189.349 187.7L189.097 187.308L188.649 186.916L188.285 186.944L187.725 186.888L187.361 186.916H186.717L186.353 187.028L186.045 187.364L186.129 187.616L186.045 188.372L186.017 188.708L185.989 189.352L186.017 189.688L185.933 190.36V190.584L185.961 191.312L186.045 191.62L186.017 192.404L185.933 193.188L185.989 193.524C185.961 193.524 185.765 193.832 185.569 194C185.457 194.084 185.317 194.084 185.205 194.084H185.093L184.225 194L183.497 193.972L183.217 194.056L182.461 194C182.461 194 181.817 193.58 181.789 193.356C181.789 193.356 181.789 193.356 181.789 193.328L181.845 192.572L181.817 192.208L181.789 191.536V191.284L181.817 190.556V190.248L181.789 189.576L181.817 189.352L181.761 188.596L181.705 188.26L181.649 187.588L181.677 187.252L181.733 186.552L181.677 186.272L181.761 185.628L181.845 185.236L181.789 184.592L181.761 184.284L181.705 183.864C181.677 183.724 181.677 183.64 181.705 183.5L181.733 183.36L181.789 182.66L181.761 182.352L181.845 181.652L181.817 181.344V180.588L181.789 180.336C181.789 180.224 181.789 180.168 181.789 180.084L181.873 179.636L181.901 179.3L181.845 178.908C181.845 178.796 181.817 178.628 181.845 178.516L181.873 178.376L181.817 177.592L181.789 177.452C181.761 177.34 181.761 177.256 181.761 177.172L181.789 176.64L181.817 176.304L181.789 175.604L181.761 175.352L181.705 174.848C181.705 174.792 181.677 174.708 181.677 174.652L181.705 174.456C181.761 174.26 181.845 174.064 181.985 173.98ZM187.781 177.452L187.333 177.564L186.745 177.536L186.381 177.48L186.129 177.816L186.101 178.124L186.073 178.796L186.045 179.16L185.961 179.804L185.989 180.196L186.017 180.98L185.989 181.736V182.044L185.933 182.688L185.989 182.94V183.248L186.325 183.528H186.941L187.361 183.5H187.641L188.985 183.416L189.685 183.444L190.385 183.36L190.721 183.276L191.253 182.884L191.589 182.66L191.869 182.072L192.037 181.736L192.121 181.176V180.812L192.065 180.476V180.196L192.093 179.86L191.981 179.3L191.897 178.992L191.505 178.46L191.225 178.18L190.581 177.76L190.245 177.676L189.657 177.48L189.349 177.452H189.265C189.125 177.48 188.957 177.508 188.817 177.48L188.677 177.452H188.341H187.781Z"
      fill={fill}
    />
    <G>
      <Path
        d="M149.28 96.3113L128.968 116.624C127.823 117.769 126.27 118.412 124.651 118.412C123.032 118.412 121.48 117.769 120.335 116.624C119.19 115.479 118.547 113.926 118.547 112.307C118.547 110.688 119.19 109.136 120.335 107.991L130.242 98.0938H88.0938C86.4776 98.0938 84.9276 97.4517 83.7848 96.3089C82.642 95.1661 82 93.6162 82 92C82 90.3838 82.642 88.8339 83.7848 87.6911C84.9276 86.5483 86.4776 85.9062 88.0938 85.9062H130.242L120.345 75.9988C119.778 75.432 119.328 74.7591 119.022 74.0184C118.715 73.2778 118.557 72.4841 118.557 71.6824C118.557 70.0635 119.2 68.5108 120.345 67.366C121.49 66.2212 123.042 65.5781 124.661 65.5781C126.28 65.5781 127.833 66.2212 128.978 67.366L149.29 87.6785C149.858 88.2453 150.308 88.9186 150.614 89.6596C150.921 90.4007 151.078 91.195 151.077 91.997C151.077 92.7991 150.917 93.593 150.609 94.3333C150.3 95.0737 149.849 95.7459 149.28 96.3113ZM177.469 41.2188H144.969C143.353 41.2188 141.803 41.8608 140.66 43.0036C139.517 44.1464 138.875 45.6963 138.875 47.3125C138.875 48.9287 139.517 50.4786 140.66 51.6214C141.803 52.7642 143.353 53.4062 144.969 53.4062H171.375V130.594H144.969C143.353 130.594 141.803 131.236 140.66 132.379C139.517 133.521 138.875 135.071 138.875 136.688C138.875 138.304 139.517 139.854 140.66 140.996C141.803 142.139 143.353 142.781 144.969 142.781H177.469C179.085 142.781 180.635 142.139 181.778 140.996C182.92 139.854 183.562 138.304 183.562 136.688V47.3125C183.562 45.6963 182.92 44.1464 181.778 43.0036C180.635 41.8608 179.085 41.2188 177.469 41.2188Z"
        fill={fill}
      />
    </G>
  </G>
  <Defs></Defs>
</Svg>
);

export { ConnexionRondIcon };