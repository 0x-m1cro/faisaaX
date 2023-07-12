import { Svg, SvgProps } from 'packages/uikit'

export const MatchExampleA: React.FC<{ isDark: boolean } & SvgProps> = ({ isDark, ...rest }) => {
  return (
    <Svg viewBox="0 0 258 46" {...rest}>
      <svg width="258" height="46" viewBox="0 0 258 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.995361 28.9362C0.995361 20.4114 7.94723 13.5007 16.5228 13.5007H113.569C122.145 13.5007 129.097 20.4114 129.097 28.9362C129.097 37.4609 122.145 44.3716 113.569 44.3716H16.5228C7.94723 44.3716 0.995361 37.4609 0.995361 28.9362Z"
          fill={isDark ? 'none' : 'white'}
        />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="13" width="130" height="32">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.569 15.7348H16.523C9.18867 15.7348 3.243 21.6453 3.243 28.9362C3.243 36.2271 9.18867 42.1375 16.523 42.1375H113.569C120.904 42.1375 126.849 36.2271 126.849 28.9362C126.849 21.6453 120.904 15.7348 113.569 15.7348ZM16.523 13.5007C7.94747 13.5007 0.995605 20.4114 0.995605 28.9362C0.995605 37.4609 7.94748 44.3716 16.523 44.3716H113.569C122.145 44.3716 129.097 37.4609 129.097 28.9362C129.097 20.4114 122.145 13.5007 113.569 13.5007H16.523Z"
            fill="#08060B"
          />
        </mask>
        <g mask="url(#mask0)">
          <path d="M1.26147 13.3832H256.983V44.4423H1.26147V13.3832Z" fill="url(#paint0_linear)" />
        </g>
        <path
          d="M21.7327 37.4606C21.1098 37.4606 20.5647 37.4193 20.0975 37.3367C19.6422 37.2679 19.205 37.1441 18.7857 36.9652V34.261C19.5644 34.6188 20.4689 34.7977 21.4991 34.7977C22.4336 34.7977 23.1344 34.5776 23.6016 34.1372C24.0688 33.6968 24.3024 33.1395 24.3024 32.4652V31.9491C23.955 32.2106 23.5357 32.417 23.0445 32.5684C22.5654 32.7198 22.1161 32.7954 21.6968 32.7954C20.2951 32.7954 19.2709 32.4101 18.6239 31.6395C17.977 30.8688 17.6536 29.7748 17.6536 28.3574C17.6536 27.4629 17.8093 26.6716 18.1208 25.9835C18.4442 25.2817 18.9474 24.7381 19.6303 24.3528C20.3251 23.9537 21.2176 23.7542 22.3078 23.7542C23.9131 23.7542 25.0991 24.1945 25.8658 25.0753C26.6326 25.956 27.0159 27.284 27.0159 29.0592V31.7633C27.0159 32.8642 26.8003 33.8482 26.369 34.7152C25.9497 35.5684 25.3447 36.2427 24.554 36.7381C23.7753 37.2198 22.8349 37.4606 21.7327 37.4606ZM22.2539 30.339C22.6013 30.339 22.9547 30.2702 23.3141 30.1326C23.6735 29.9812 24.0029 29.7954 24.3024 29.5753V28.4812C24.3024 26.9399 23.6316 26.1693 22.2898 26.1693C21.607 26.1693 21.0918 26.3551 20.7444 26.7266C20.409 27.0844 20.2412 27.5867 20.2412 28.2335C20.2412 28.9078 20.385 29.4308 20.6725 29.8023C20.972 30.1601 21.4991 30.339 22.2539 30.339Z"
          fill={isDark ? '#F4EEFF' : '#280D5F'}
        />
        <path
          d="M64.3428 37.2542V27.0156L62.438 27.3665V24.5798L67.236 23.7542V37.2542H64.3428Z"
          fill={isDark ? '#F4EEFF' : '#280D5F'}
        />
        <path
          d="M107.105 37.4607C106.77 37.4607 106.375 37.4332 105.919 37.3781C105.464 37.3231 105.015 37.2474 104.572 37.1511C104.14 37.041 103.781 36.9171 103.493 36.7795V34.0135C103.985 34.2749 104.512 34.4607 105.075 34.5708C105.638 34.6809 106.165 34.7359 106.656 34.7359C107.411 34.7359 107.974 34.619 108.345 34.385C108.729 34.1511 108.92 33.7245 108.92 33.1052C108.92 32.6235 108.759 32.2726 108.435 32.0524C108.124 31.8323 107.668 31.7222 107.069 31.7222H105.183L105.38 29.3896H106.944C107.555 29.3896 107.998 29.2795 108.273 29.0593C108.549 28.8254 108.687 28.4538 108.687 27.9446C108.687 27.463 108.519 27.0983 108.184 26.8506C107.86 26.6029 107.333 26.479 106.602 26.479C106.087 26.479 105.566 26.5479 105.039 26.6855C104.512 26.8093 104.056 26.9745 103.673 27.1809V24.4561C104.092 24.2634 104.614 24.0983 105.236 23.9607C105.871 23.8231 106.506 23.7543 107.141 23.7543C108.603 23.7543 109.717 24.1121 110.484 24.8277C111.262 25.5295 111.652 26.4309 111.652 27.5318C111.652 28.1648 111.532 28.7566 111.292 29.307C111.065 29.8575 110.711 30.2703 110.232 30.5456C110.783 30.7657 111.191 31.1235 111.454 31.619C111.73 32.1144 111.867 32.713 111.867 33.4148C111.867 34.3368 111.664 35.1006 111.256 35.7061C110.849 36.2979 110.286 36.7382 109.567 37.0272C108.86 37.3162 108.04 37.4607 107.105 37.4607Z"
          fill={isDark ? '#F4EEFF' : '#280D5F'}
        />
        <path
          d="M149.856 37.4606C149.269 37.4606 148.76 37.4193 148.329 37.3367C147.898 37.2542 147.49 37.1441 147.107 37.0065V35.0661C147.478 35.2312 147.874 35.3551 148.293 35.4376C148.724 35.5202 149.204 35.5615 149.731 35.5615C150.809 35.5615 151.606 35.2656 152.121 34.6739C152.636 34.0821 152.893 33.2977 152.893 32.3207V31.495C152.474 31.839 151.995 32.1005 151.456 32.2794C150.917 32.4583 150.42 32.5477 149.964 32.5477C148.623 32.5477 147.622 32.1693 146.963 31.4124C146.316 30.6555 145.993 29.5821 145.993 28.1922C145.993 26.8849 146.346 25.8184 147.053 24.9927C147.76 24.167 148.862 23.7542 150.36 23.7542C151.809 23.7542 152.899 24.1739 153.63 25.0133C154.373 25.839 154.744 27.1326 154.744 28.8941V31.8872C154.744 32.9881 154.547 33.9583 154.151 34.7977C153.756 35.6372 153.193 36.2909 152.462 36.7587C151.731 37.2266 150.863 37.4606 149.856 37.4606ZM150.252 30.8344C150.743 30.8344 151.216 30.7381 151.671 30.5454C152.127 30.3528 152.534 30.112 152.893 29.823V28.378C152.893 26.4376 152.043 25.4675 150.342 25.4675C149.479 25.4675 148.832 25.7083 148.401 26.1899C147.97 26.6716 147.754 27.3184 147.754 28.1303C147.754 28.9698 147.928 29.6303 148.275 30.112C148.635 30.5936 149.293 30.8344 150.252 30.8344Z"
          fill={isDark ? '#666171' : '#BDC2C4'}
        />
        <path
          d="M193.056 37.4606C191.606 37.4606 190.51 37.0477 189.768 36.222C189.037 35.3964 188.671 34.0959 188.671 32.3207V29.3275C188.671 28.2266 188.869 27.2564 189.264 26.417C189.66 25.5775 190.223 24.9239 190.954 24.456C191.684 23.9881 192.553 23.7542 193.559 23.7542C194.146 23.7542 194.655 23.7954 195.087 23.878C195.53 23.9606 195.937 24.0775 196.309 24.2289V26.1486C195.937 25.9973 195.536 25.8803 195.105 25.7977C194.685 25.7152 194.212 25.6739 193.685 25.6739C192.607 25.6739 191.81 25.9697 191.295 26.5615C190.78 27.1395 190.522 27.917 190.522 28.8941V29.7198C190.942 29.362 191.421 29.1005 191.96 28.9353C192.511 28.7564 193.008 28.667 193.451 28.667C194.805 28.667 195.805 29.0454 196.452 29.8023C197.099 30.5592 197.423 31.6326 197.423 33.0225C197.423 34.3436 197.069 35.417 196.363 36.2427C195.656 37.0546 194.554 37.4606 193.056 37.4606ZM193.074 35.7679C193.937 35.7679 194.583 35.5271 195.015 35.0454C195.446 34.5638 195.662 33.917 195.662 33.1051C195.662 32.2519 195.482 31.5913 195.123 31.1234C194.775 30.6418 194.122 30.4009 193.164 30.4009C192.685 30.4009 192.211 30.4973 191.744 30.6899C191.289 30.8688 190.882 31.1097 190.522 31.4124V32.8367C190.522 34.7909 191.373 35.7679 193.074 35.7679Z"
          fill={isDark ? '#666171' : '#BDC2C4'}
        />
        <path
          d="M231.929 37.2542V36.1395C232.241 35.3 232.672 34.5431 233.223 33.8688C233.786 33.1945 234.385 32.5409 235.02 31.9078C235.499 31.4262 235.895 31.0202 236.206 30.6899C236.53 30.3459 236.781 30.0363 236.961 29.761C237.14 29.4858 237.266 29.2037 237.338 28.9147C237.41 28.612 237.446 28.261 237.446 27.862C237.446 27.1464 237.266 26.6028 236.907 26.2312C236.547 25.8597 235.948 25.6739 235.11 25.6739C234.655 25.6739 234.187 25.7289 233.708 25.839C233.241 25.9491 232.792 26.1005 232.36 26.2931V24.3115C232.78 24.1464 233.277 24.0156 233.852 23.9193C234.427 23.8092 234.972 23.7542 235.487 23.7542C236.781 23.7542 237.757 24.1188 238.416 24.8482C239.075 25.5775 239.405 26.5753 239.405 27.8413C239.405 28.4743 239.309 29.0386 239.117 29.534C238.926 30.0156 238.662 30.4766 238.327 30.917C237.991 31.3436 237.602 31.784 237.158 32.2381C236.607 32.7886 236.086 33.3253 235.595 33.8482C235.116 34.3574 234.727 34.9147 234.427 35.5202H239.531V37.2542H231.929Z"
          fill={isDark ? '#666171' : '#BDC2C4'}
        />
        <path
          d="M153.515 3.68788C153.328 3.50152 153.025 3.50152 152.838 3.68788L150.487 6.0197L148.136 3.6831C147.949 3.49675 147.646 3.49675 147.459 3.6831C147.271 3.86946 147.271 4.17049 147.459 4.35684L149.809 6.69344L147.459 9.03005C147.271 9.2164 147.271 9.51743 147.459 9.70379C147.646 9.89014 147.949 9.89014 148.136 9.70379L150.487 7.36719L152.838 9.70379C153.025 9.89014 153.328 9.89014 153.515 9.70379C153.703 9.51743 153.703 9.2164 153.515 9.03005L151.165 6.69344L153.515 4.35684C153.698 4.17527 153.698 3.86946 153.515 3.68788Z"
          fill="#ED4B9E"
        />
        <g clipPath="url(#clipExampleA)">
          <path
            d="M107.226 1.91516C104.572 1.91516 102.419 4.05585 102.419 6.69348C102.419 9.33112 104.572 11.4718 107.226 11.4718C109.879 11.4718 112.033 9.33112 112.033 6.69348C112.033 4.05585 109.879 1.91516 107.226 1.91516ZM107.226 10.5161C105.106 10.5161 103.38 8.80073 103.38 6.69348C103.38 4.58624 105.106 2.87083 107.226 2.87083C109.346 2.87083 111.071 4.58624 111.071 6.69348C111.071 8.80073 109.346 10.5161 107.226 10.5161ZM109.091 4.92073L106.264 7.73038L105.361 6.83206C105.173 6.6457 104.87 6.6457 104.683 6.83206C104.495 7.01841 104.495 7.31945 104.683 7.5058L105.928 8.74339C106.115 8.92974 106.418 8.92974 106.606 8.74339L109.773 5.59447C109.961 5.40812 109.961 5.10708 109.773 4.92073C109.586 4.73437 109.278 4.73437 109.091 4.92073Z"
            fill="#31D0AA"
          />
        </g>
        <path
          d="M66.8485 1.91516C64.1952 1.91516 62.0417 4.05585 62.0417 6.69348C62.0417 9.33112 64.1952 11.4718 66.8485 11.4718C69.5019 11.4718 71.6553 9.33112 71.6553 6.69348C71.6553 4.05585 69.5019 1.91516 66.8485 1.91516ZM66.8485 10.5161C64.7287 10.5161 63.0031 8.80073 63.0031 6.69348C63.0031 4.58624 64.7287 2.87083 66.8485 2.87083C68.9683 2.87083 70.694 4.58624 70.694 6.69348C70.694 8.80073 68.9683 10.5161 66.8485 10.5161ZM68.7136 4.92073L65.8872 7.73038L64.9835 6.83206C64.796 6.6457 64.4932 6.6457 64.3058 6.83206C64.1183 7.01841 64.1183 7.31945 64.3058 7.5058L65.5507 8.74339C65.7382 8.92974 66.041 8.92974 66.2285 8.74339L69.3962 5.59447C69.5836 5.40812 69.5836 5.10708 69.3962 4.92073C69.2087 4.73437 68.9011 4.73437 68.7136 4.92073Z"
          fill="#31D0AA"
        />
        <path
          d="M193.267 1.91516C190.614 1.91516 188.461 4.05585 188.461 6.69348C188.461 9.33112 190.614 11.4718 193.267 11.4718C195.921 11.4718 198.074 9.33112 198.074 6.69348C198.074 4.05585 195.921 1.91516 193.267 1.91516ZM193.267 10.5161C191.148 10.5161 189.422 8.80073 189.422 6.69348C189.422 4.58624 191.148 2.87083 193.267 2.87083C195.387 2.87083 197.113 4.58624 197.113 6.69348C197.113 8.80073 195.387 10.5161 193.267 10.5161ZM195.133 4.92073L192.306 7.73038L191.402 6.83206C191.215 6.6457 190.912 6.6457 190.725 6.83206C190.537 7.01841 190.537 7.31945 190.725 7.5058L191.97 8.74339C192.157 8.92974 192.46 8.92974 192.647 8.74339L195.815 5.59447C196.003 5.40812 196.003 5.10708 195.815 4.92073C195.628 4.73437 195.32 4.73437 195.133 4.92073Z"
          fill="#31D0AA"
        />
        <path
          d="M236.048 1.91516C233.395 1.91516 231.241 4.05585 231.241 6.69348C231.241 9.33112 233.395 11.4718 236.048 11.4718C238.701 11.4718 240.855 9.33112 240.855 6.69348C240.855 4.05585 238.701 1.91516 236.048 1.91516ZM236.048 10.5161C233.928 10.5161 232.203 8.80073 232.203 6.69348C232.203 4.58624 233.928 2.87083 236.048 2.87083C238.168 2.87083 239.893 4.58624 239.893 6.69348C239.893 8.80073 238.168 10.5161 236.048 10.5161ZM237.913 4.92073L235.087 7.73038L234.183 6.83206C233.996 6.6457 233.693 6.6457 233.505 6.83206C233.318 7.01841 233.318 7.31945 233.505 7.5058L234.75 8.74339C234.938 8.92974 235.24 8.92974 235.428 8.74339L238.596 5.59447C238.783 5.40812 238.783 5.10708 238.596 4.92073C238.408 4.73437 238.101 4.73437 237.913 4.92073Z"
          fill="#31D0AA"
        />
        <path
          d="M23.1066 1.91516C20.4533 1.91516 18.2998 4.05585 18.2998 6.69348C18.2998 9.33112 20.4533 11.4718 23.1066 11.4718C25.76 11.4718 27.9134 9.33112 27.9134 6.69348C27.9134 4.05585 25.76 1.91516 23.1066 1.91516ZM23.1066 10.5161C20.9868 10.5161 19.2612 8.80073 19.2612 6.69348C19.2612 4.58624 20.9868 2.87083 23.1066 2.87083C25.2264 2.87083 26.952 4.58624 26.952 6.69348C26.952 8.80073 25.2264 10.5161 23.1066 10.5161ZM24.9716 4.92073L22.1452 7.73038L21.2416 6.83206C21.0541 6.6457 20.7513 6.6457 20.5638 6.83206C20.3763 7.01841 20.3763 7.31945 20.5638 7.5058L21.8088 8.74339C21.9962 8.92974 22.2991 8.92974 22.4865 8.74339L25.6542 5.59447C25.8417 5.40812 25.8417 5.10708 25.6542 4.92073C25.4667 4.73437 25.1591 4.73437 24.9716 4.92073Z"
          fill="#31D0AA"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="256.984"
            y1="41.1807"
            x2="1.2617"
            y2="41.18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ED4B9E" />
            <stop offset="0.190071" stopColor="#7B61FF" />
            <stop offset="0.434873" stopColor="#1FC7D4" />
            <stop offset="0.638006" stopColor="#31D0AA" />
            <stop offset="0.841139" stopColor="#FFD800" />
            <stop offset="1" stopColor="#FEAF2E" />
          </linearGradient>
          <clipPath id="clipExampleA">
            <rect width="11.5363" height="11.468" fill="white" transform="translate(101.458 0.959473)" />
          </clipPath>
        </defs>
      </svg>
    </Svg>
  )
}
export const MatchExampleB: React.FC<{ isDark: boolean } & SvgProps> = ({ isDark, ...rest }) => {
  return (
    <Svg viewBox="0 0 258 45" {...rest}>
      <svg width="258" height="45" viewBox="0 0 258 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="1.64043"
          y="13.5646"
          width="254.912"
          height="29.5807"
          rx="14.7904"
          fill={isDark ? 'none' : '#FAF9FA'}
        />
        <path
          d="M22.3406 36.2051C21.1187 36.2051 20.1363 35.9367 19.3936 35.4C18.6508 34.8496 18.1057 34.0652 17.7583 33.0468C17.4228 32.0147 17.2551 30.783 17.2551 29.3518C17.2551 27.8656 17.4169 26.5996 17.7403 25.5537C18.0758 24.5078 18.6149 23.7096 19.3576 23.1592C20.1004 22.6087 21.0947 22.3335 22.3406 22.3335C23.5865 22.3335 24.5749 22.6087 25.3057 23.1592C26.0484 23.7096 26.5815 24.5078 26.905 25.5537C27.2404 26.5996 27.4082 27.8656 27.4082 29.3518C27.4082 30.783 27.2404 32.0147 26.905 33.0468C26.5696 34.0652 26.0305 34.8496 25.2877 35.4C24.5449 35.9367 23.5626 36.2051 22.3406 36.2051ZM22.3406 34.2853C23.4907 34.2853 24.2934 33.8518 24.7486 32.9849C25.2038 32.1041 25.4315 30.8931 25.4315 29.3518C25.4315 27.7142 25.2098 26.4551 24.7666 25.5743C24.3233 24.6936 23.5147 24.2532 22.3406 24.2532C21.1666 24.2532 20.3519 24.6936 19.8967 25.5743C19.4535 26.4551 19.2318 27.7142 19.2318 29.3518C19.2318 30.8931 19.4594 32.1041 19.9147 32.9849C20.3699 33.8518 21.1786 34.2853 22.3406 34.2853Z"
          fill={isDark ? '#666171' : '#BDC2C4'}
        />
        <path
          d="M64.7859 35.8335V24.5216L62.917 24.8931V23.0147L66.7266 22.3335V35.8335H64.7859Z"
          fill={isDark ? '#666171' : '#BDC2C4'}
        />
        <path
          d="M107.094 36.0399C106.747 36.0399 106.363 36.0124 105.944 35.9574C105.525 35.9161 105.123 35.8473 104.74 35.7509C104.369 35.6546 104.057 35.5514 103.806 35.4413V33.4803C104.285 33.7005 104.776 33.8656 105.279 33.9757C105.794 34.072 106.309 34.1202 106.825 34.1202C107.759 34.1202 108.454 33.9619 108.909 33.6454C109.364 33.3289 109.592 32.7716 109.592 31.9734C109.592 31.2578 109.382 30.7418 108.963 30.4252C108.556 30.1087 107.969 29.9505 107.202 29.9505H105.459L105.621 28.2785H107.076C108.598 28.2785 109.358 27.5904 109.358 26.2142C109.358 25.5399 109.155 25.0445 108.747 24.728C108.352 24.4115 107.711 24.2532 106.825 24.2532C106.333 24.2532 105.836 24.3083 105.333 24.4184C104.842 24.5285 104.405 24.6798 104.021 24.8725V22.9528C104.381 22.7876 104.848 22.6431 105.423 22.5193C105.998 22.3954 106.567 22.3335 107.13 22.3335C108.544 22.3335 109.592 22.6775 110.275 23.3656C110.97 24.0537 111.317 24.9344 111.317 26.0078C111.317 26.6684 111.173 27.2876 110.886 27.8656C110.61 28.4436 110.173 28.8564 109.574 29.1041C110.269 29.3106 110.772 29.6821 111.083 30.2188C111.407 30.7555 111.569 31.3885 111.569 32.1179C111.569 33.4528 111.161 34.4436 110.347 35.0904C109.532 35.7234 108.448 36.0399 107.094 36.0399Z"
          fill={isDark ? '#666171' : '#BDC2C4'}
        />
        <path
          d="M150.378 36.0399C148.928 36.0399 147.832 35.6271 147.089 34.8014C146.358 33.9757 145.993 32.6752 145.993 30.9V27.9069C145.993 26.806 146.191 25.8358 146.586 24.9963C146.981 24.1569 147.544 23.5032 148.275 23.0353C149.006 22.5674 149.874 22.3335 150.881 22.3335C151.468 22.3335 151.977 22.3748 152.408 22.4574C152.851 22.5399 153.259 22.6569 153.63 22.8083V24.728C153.259 24.5766 152.857 24.4596 152.426 24.3771C152.007 24.2945 151.534 24.2532 151.007 24.2532C149.928 24.2532 149.132 24.5491 148.617 25.1408C148.101 25.7188 147.844 26.4963 147.844 27.4734V28.2991C148.263 27.9413 148.742 27.6798 149.281 27.5147C149.833 27.3358 150.33 27.2463 150.773 27.2463C152.127 27.2463 153.127 27.6248 153.774 28.3817C154.421 29.1385 154.744 30.2119 154.744 31.6018C154.744 32.923 154.391 33.9963 153.684 34.822C152.977 35.634 151.875 36.0399 150.378 36.0399ZM150.396 34.3473C151.258 34.3473 151.905 34.1064 152.336 33.6248C152.768 33.1431 152.983 32.4963 152.983 31.6844C152.983 30.8312 152.804 30.1707 152.444 29.7028C152.097 29.2211 151.444 28.9803 150.485 28.9803C150.006 28.9803 149.533 29.0766 149.066 29.2693C148.611 29.4482 148.203 29.689 147.844 29.9918V31.4161C147.844 33.3702 148.694 34.3473 150.396 34.3473Z"
          fill={isDark ? '#666171' : '#BDC2C4'}
        />
        <path
          d="M193.056 36.0399C191.606 36.0399 190.51 35.6271 189.768 34.8014C189.037 33.9757 188.671 32.6752 188.671 30.9V27.9069C188.671 26.806 188.869 25.8358 189.264 24.9963C189.66 24.1569 190.223 23.5032 190.954 23.0353C191.684 22.5674 192.553 22.3335 193.559 22.3335C194.146 22.3335 194.655 22.3748 195.087 22.4574C195.53 22.5399 195.937 22.6569 196.309 22.8083V24.728C195.937 24.5766 195.536 24.4596 195.105 24.3771C194.685 24.2945 194.212 24.2532 193.685 24.2532C192.607 24.2532 191.81 24.5491 191.295 25.1408C190.78 25.7188 190.522 26.4963 190.522 27.4734V28.2991C190.942 27.9413 191.421 27.6798 191.96 27.5147C192.511 27.3358 193.008 27.2463 193.451 27.2463C194.805 27.2463 195.805 27.6248 196.452 28.3817C197.099 29.1385 197.423 30.2119 197.423 31.6018C197.423 32.923 197.069 33.9963 196.363 34.822C195.656 35.634 194.554 36.0399 193.056 36.0399ZM193.074 34.3473C193.937 34.3473 194.583 34.1064 195.015 33.6248C195.446 33.1431 195.662 32.4963 195.662 31.6844C195.662 30.8312 195.482 30.1707 195.123 29.7028C194.775 29.2211 194.122 28.9803 193.164 28.9803C192.685 28.9803 192.211 29.0766 191.744 29.2693C191.289 29.4482 190.882 29.689 190.522 29.9918V31.4161C190.522 33.3702 191.373 34.3473 193.074 34.3473Z"
          fill={isDark ? '#666171' : '#BDC2C4'}
        />
        <path
          d="M231.929 35.8335V34.7188C232.241 33.8794 232.672 33.1225 233.223 32.4482C233.786 31.7739 234.385 31.1202 235.02 30.4872C235.499 30.0055 235.895 29.5996 236.206 29.2693C236.53 28.9252 236.781 28.6156 236.961 28.3404C237.14 28.0652 237.266 27.783 237.338 27.494C237.41 27.1913 237.446 26.8404 237.446 26.4413C237.446 25.7257 237.266 25.1821 236.907 24.8106C236.547 24.439 235.948 24.2532 235.11 24.2532C234.655 24.2532 234.187 24.3083 233.708 24.4184C233.241 24.5285 232.792 24.6798 232.36 24.8725V22.8908C232.78 22.7257 233.277 22.595 233.852 22.4986C234.427 22.3885 234.972 22.3335 235.487 22.3335C236.781 22.3335 237.757 22.6982 238.416 23.4275C239.075 24.1569 239.405 25.1546 239.405 26.4207C239.405 27.0537 239.309 27.6179 239.117 28.1133C238.925 28.595 238.662 29.056 238.326 29.4963C237.991 29.9229 237.602 30.3633 237.158 30.8174C236.607 31.3679 236.086 31.9046 235.595 32.4275C235.116 32.9367 234.727 33.4941 234.427 34.0996H239.53V35.8335H231.929Z"
          fill={isDark ? '#666171' : '#BDC2C4'}
        />
        <rect
          x="1.64043"
          y="13.5646"
          width="254.912"
          height="29.5807"
          rx="14.7904"
          stroke="#E7E3EB"
          strokeWidth="1.29014"
        />
        <path
          d="M109.389 1.33398C106.735 1.33398 104.582 3.47467 104.582 6.11231C104.582 8.74994 106.735 10.8906 109.389 10.8906C112.042 10.8906 114.196 8.74994 114.196 6.11231C114.196 3.47467 112.042 1.33398 109.389 1.33398ZM109.389 9.93497C107.269 9.93497 105.543 8.21955 105.543 6.11231C105.543 4.00507 107.269 2.28965 109.389 2.28965C111.509 2.28965 113.234 4.00507 113.234 6.11231C113.234 8.21955 111.509 9.93497 109.389 9.93497ZM111.254 4.33955L108.427 7.1492L107.524 6.25088C107.336 6.06452 107.034 6.06452 106.846 6.25088C106.659 6.43723 106.659 6.73827 106.846 6.92462L108.091 8.16221C108.278 8.34856 108.581 8.34856 108.769 8.16221L111.936 5.01329C112.124 4.82694 112.124 4.5259 111.936 4.33955C111.749 4.1532 111.441 4.1532 111.254 4.33955Z"
          fill="#31D0AA"
        />
        <path
          d="M152.65 1.33398C149.997 1.33398 147.843 3.47467 147.843 6.11231C147.843 8.74994 149.997 10.8906 152.65 10.8906C155.303 10.8906 157.457 8.74994 157.457 6.11231C157.457 3.47467 155.303 1.33398 152.65 1.33398ZM152.65 9.93497C150.53 9.93497 148.805 8.21955 148.805 6.11231C148.805 4.00507 150.53 2.28965 152.65 2.28965C154.77 2.28965 156.496 4.00507 156.496 6.11231C156.496 8.21955 154.77 9.93497 152.65 9.93497ZM154.515 4.33955L151.689 7.1492L150.785 6.25088C150.598 6.06452 150.295 6.06452 150.107 6.25088C149.92 6.43723 149.92 6.73827 150.107 6.92462L151.352 8.16221C151.54 8.34856 151.843 8.34856 152.03 8.16221L155.198 5.01329C155.385 4.82694 155.385 4.5259 155.198 4.33955C155.01 4.1532 154.703 4.1532 154.515 4.33955Z"
          fill="#31D0AA"
        />
        <path
          d="M195.911 1.33398C193.258 1.33398 191.104 3.47467 191.104 6.11231C191.104 8.74994 193.258 10.8906 195.911 10.8906C198.565 10.8906 200.718 8.74994 200.718 6.11231C200.718 3.47467 198.565 1.33398 195.911 1.33398ZM195.911 9.93497C193.791 9.93497 192.066 8.21955 192.066 6.11231C192.066 4.00507 193.791 2.28965 195.911 2.28965C198.031 2.28965 199.757 4.00507 199.757 6.11231C199.757 8.21955 198.031 9.93497 195.911 9.93497ZM197.776 4.33955L194.95 7.1492L194.046 6.25088C193.859 6.06452 193.556 6.06452 193.368 6.25088C193.181 6.43723 193.181 6.73827 193.368 6.92462L194.613 8.16221C194.801 8.34856 195.104 8.34856 195.291 8.16221L198.459 5.01329C198.646 4.82694 198.646 4.5259 198.459 4.33955C198.271 4.1532 197.964 4.1532 197.776 4.33955Z"
          fill="#31D0AA"
        />
        <g clipPath="url(#clipExampleB)">
          <path
            d="M238.211 1.33398C235.558 1.33398 233.404 3.47467 233.404 6.11231C233.404 8.74994 235.558 10.8906 238.211 10.8906C240.864 10.8906 243.018 8.74994 243.018 6.11231C243.018 3.47467 240.864 1.33398 238.211 1.33398ZM238.211 9.93497C236.091 9.93497 234.366 8.21955 234.366 6.11231C234.366 4.00507 236.091 2.28965 238.211 2.28965C240.331 2.28965 242.057 4.00507 242.057 6.11231C242.057 8.21955 240.331 9.93497 238.211 9.93497ZM240.076 4.33955L237.25 7.1492L236.346 6.25088C236.159 6.06452 235.856 6.06452 235.668 6.25088C235.481 6.43723 235.481 6.73827 235.668 6.92462L236.913 8.16221C237.101 8.34856 237.404 8.34856 237.591 8.16221L240.759 5.01329C240.946 4.82694 240.946 4.5259 240.759 4.33955C240.571 4.1532 240.264 4.1532 240.076 4.33955Z"
            fill="#31D0AA"
          />
        </g>
        <path
          d="M69.0119 1.33398C66.3585 1.33398 64.2051 3.47467 64.2051 6.11231C64.2051 8.74994 66.3585 10.8906 69.0119 10.8906C71.6652 10.8906 73.8187 8.74994 73.8187 6.11231C73.8187 3.47467 71.6652 1.33398 69.0119 1.33398ZM69.0119 9.93497C66.8921 9.93497 65.1664 8.21955 65.1664 6.11231C65.1664 4.00507 66.8921 2.28965 69.0119 2.28965C71.1317 2.28965 72.8573 4.00507 72.8573 6.11231C72.8573 8.21955 71.1317 9.93497 69.0119 9.93497ZM70.8769 4.33955L68.0505 7.1492L67.1468 6.25088C66.9594 6.06452 66.6565 6.06452 66.4691 6.25088C66.2816 6.43723 66.2816 6.73827 66.4691 6.92462L67.714 8.16221C67.9015 8.34856 68.2043 8.34856 68.3918 8.16221L71.5595 5.01329C71.7469 4.82694 71.7469 4.5259 71.5595 4.33955C71.372 4.1532 71.0644 4.1532 70.8769 4.33955Z"
          fill="#31D0AA"
        />
        <path
          d="M27.3368 3.1067C27.1494 2.92035 26.8465 2.92035 26.6591 3.1067L24.3085 5.43852L21.958 3.10192C21.7705 2.91557 21.4677 2.91557 21.2802 3.10192C21.0928 3.28828 21.0928 3.58931 21.2802 3.77567L23.6308 6.11227L21.2802 8.44887C21.0928 8.63522 21.0928 8.93626 21.2802 9.12261C21.4677 9.30897 21.7705 9.30897 21.958 9.12261L24.3085 6.78601L26.6591 9.12261C26.8465 9.30897 27.1494 9.30897 27.3368 9.12261C27.5243 8.93626 27.5243 8.63522 27.3368 8.44887L24.9863 6.11227L27.3368 3.77567C27.5195 3.59409 27.5195 3.28828 27.3368 3.1067Z"
          fill="#ED4B9E"
        />
        <defs>
          <clipPath id="clipExampleB">
            <rect width="11.5363" height="11.468" fill="white" transform="translate(232.443 0.378296)" />
          </clipPath>
        </defs>
      </svg>
    </Svg>
  )
}
