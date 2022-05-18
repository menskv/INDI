import React from 'react';
import {Wrapper, Titles, Text, Title, Logo, Button} from "./style";
import {Header} from "../Header";


export const Home = () => {
    return (
        <Wrapper>
            <Header/>
            <Titles>
                <Text>
                    Коворкинг
                </Text>
                <Title>
                    INDI Владимир
                </Title>
                <Logo>
                    <svg width="154" height="77" viewBox="0 0 154 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_170_2)">
                            <rect x="6.47339" y="1.5" width="141.053" height="66" rx="3.5" stroke="white" stroke-width="3" shape-rendering="crispEdges"/>
                        </g>
                        <path d="M33.7952 56.5371V52.2241H36.7063V53.057H34.6972V53.8269H35.6259C36.0381 53.8269 36.38 53.9591 36.6538 54.2236C36.9268 54.4881 37.0637 54.8081 37.0637 55.1812C37.0637 55.5551 36.9268 55.8743 36.6538 56.1396C36.38 56.4041 36.0381 56.5363 35.6259 56.5363H33.7952V56.5371ZM35.5963 55.7071C35.7569 55.7071 35.8908 55.6547 36.0011 55.5491C36.1106 55.4442 36.1646 55.3218 36.1646 55.182C36.1646 55.0429 36.1099 54.9205 36.0011 54.8149C35.8916 54.71 35.7569 54.6576 35.5963 54.6576H34.6972V55.7071H35.5963Z" fill="white"/>
                        <path d="M38.438 56.5371V52.2241H39.34V53.6407H40.2073C40.6387 53.6407 40.9969 53.7798 41.2811 54.0579C41.5645 54.3353 41.7073 54.6796 41.7073 55.0908C41.7073 55.5019 41.5652 55.8455 41.2811 56.1229C40.9969 56.3995 40.6395 56.5378 40.2073 56.5378H38.438V56.5371ZM40.177 55.7071C40.3568 55.7071 40.507 55.6471 40.6262 55.5278C40.7468 55.4092 40.8067 55.2625 40.8067 55.09C40.8067 54.9175 40.7468 54.7716 40.6262 54.6523C40.5063 54.5329 40.3568 54.4729 40.177 54.4729H39.3393V55.7064H40.177V55.7071Z" fill="white"/>
                        <path d="M48.1052 55.9777C47.6901 56.4124 47.1876 56.6305 46.6 56.6305C46.0613 56.6305 45.5996 56.4535 45.2148 56.1001C44.83 55.7459 44.5917 55.3066 44.4999 54.7807H43.9316V56.5371H43.0295V52.224H43.9316V53.9204H44.4999C44.5917 53.4233 44.83 53.0015 45.2162 52.6542C45.6018 52.3076 46.0628 52.1336 46.6 52.1336C47.1876 52.1336 47.6893 52.351 48.1052 52.7864C48.5211 53.2212 48.729 53.7532 48.729 54.3817C48.729 55.0102 48.5211 55.543 48.1052 55.9777ZM47.4673 53.3671C47.2246 53.0981 46.936 52.9643 46.6 52.9643C46.2641 52.9643 45.9755 53.0988 45.7328 53.3671C45.4908 53.6354 45.3694 53.9736 45.3694 54.3802C45.3694 54.7875 45.4908 55.125 45.7328 55.3933C45.9747 55.6615 46.2641 55.7961 46.6 55.7961C46.936 55.7961 47.2246 55.6615 47.4673 55.3933C47.7093 55.125 47.8299 54.7868 47.8299 54.3802C47.8307 53.9736 47.7093 53.6361 47.4673 53.3671Z" fill="white"/>
                        <path d="M52.9803 52.2241V53.057H51.7822V56.5371H50.8831V53.057H49.6821V52.2241H52.9803Z" fill="white"/>
                        <path d="M57.0726 56.5371V53.7973L55.0058 56.5371H54.2236V52.2241H55.1257V54.9669L57.1933 52.2241H57.9717V56.5371H57.0726Z" fill="white"/>
                        <path d="M61.568 55.0908H59.4094V54.3513H61.568V55.0908Z" fill="white"/>
                        <path d="M66.5807 56.5371H65.6816V53.057H63.9123V56.5371H63.0103V52.2241H66.58V56.5371H66.5807Z" fill="white"/>
                        <path d="M69.9915 52.2241C70.4229 52.2241 70.7811 52.3631 71.0653 52.6405C71.3487 52.9187 71.4915 53.2622 71.4915 53.6726C71.4915 54.083 71.3494 54.4265 71.0667 54.7039C70.7833 54.9821 70.4251 55.1212 69.9915 55.1212H69.1242V56.5378H68.2222V52.2248H69.9915V52.2241ZM69.125 53.0578V54.2882H69.9627C70.1425 54.2882 70.2927 54.2289 70.4118 54.1104C70.5324 53.9918 70.5924 53.8467 70.5924 53.6741C70.5924 53.5016 70.5324 53.3557 70.4118 53.2364C70.2919 53.1178 70.1425 53.0578 69.9627 53.0578H69.125Z" fill="white"/>
                        <path d="M73.3251 52.7925C73.7654 52.3532 74.3056 52.1336 74.9442 52.1336C75.5836 52.1336 76.1238 52.3525 76.5641 52.7925C77.0044 53.2318 77.2249 53.7608 77.2249 54.3802C77.2249 54.9996 77.0044 55.5293 76.5641 55.9693C76.1238 56.4101 75.5836 56.6298 74.9442 56.6298C74.3056 56.6298 73.7654 56.4101 73.3251 55.9693C72.8848 55.5293 72.6643 54.9996 72.6643 54.3802C72.6643 53.7608 72.8848 53.2318 73.3251 52.7925ZM73.9882 55.3887C74.2494 55.6615 74.5683 55.7976 74.9442 55.7976C75.3202 55.7976 75.6391 55.6615 75.9003 55.3887C76.1615 55.1159 76.2925 54.7807 76.2925 54.3825C76.2925 53.9842 76.1615 53.6483 75.9003 53.3747C75.6391 53.1011 75.3202 52.9643 74.9442 52.9643C74.5683 52.9643 74.2494 53.1011 73.9882 53.3747C73.7269 53.6483 73.596 53.9842 73.596 54.3825C73.596 54.7807 73.7269 55.1159 73.9882 55.3887Z" fill="white"/>
                        <path d="M81.3437 52.2227C81.5428 52.282 81.7063 52.3534 81.8343 52.4378C81.9624 52.5222 82.0756 52.6058 82.1733 52.6909C82.2717 52.7745 82.3427 52.8467 82.3856 52.9044L82.453 52.9949L81.8817 53.5816C81.8699 53.5649 81.8543 53.5428 81.8336 53.514C81.8129 53.4851 81.767 53.4349 81.696 53.365C81.6249 53.2943 81.5472 53.2335 81.4629 53.1796C81.3793 53.1264 81.269 53.0777 81.1321 53.0321C80.9952 52.9865 80.8561 52.9645 80.7133 52.9645C80.3211 52.9645 79.9933 53.0998 79.7298 53.3703C79.4664 53.6409 79.3347 53.9776 79.3347 54.3804C79.3347 54.7832 79.4664 55.1206 79.7298 55.3912C79.9933 55.6617 80.3211 55.797 80.7133 55.797C80.8657 55.797 81.0115 55.7757 81.1513 55.7324C81.2912 55.6891 81.4066 55.6382 81.4984 55.5789C81.5909 55.5196 81.6715 55.4603 81.7411 55.3995C81.8114 55.3395 81.8625 55.287 81.8935 55.243L81.9409 55.1799L82.4826 55.7666C82.467 55.7909 82.4426 55.8221 82.4108 55.8616C82.379 55.9004 82.3072 55.9695 82.1969 56.0691C82.0867 56.1686 81.9683 56.256 81.8425 56.3313C81.7167 56.4065 81.5517 56.4749 81.3482 56.5372C81.1439 56.5996 80.933 56.6307 80.714 56.6307C80.0739 56.6307 79.5337 56.4111 79.0934 55.9703C78.6531 55.5302 78.4326 55.0005 78.4326 54.3811C78.4326 53.7617 78.6524 53.232 79.0934 52.7935C79.5337 52.3542 80.0739 52.1346 80.714 52.1346C80.9345 52.1346 81.1447 52.1634 81.3437 52.2227Z" fill="white"/>
                        <path d="M86.8101 52.2241V53.057H85.6121V56.5371H84.713V53.057H83.512V52.2241H86.8101Z" fill="white"/>
                        <path d="M89.8221 52.2241C90.2535 52.2241 90.6117 52.3631 90.8958 52.6405C91.1793 52.9187 91.3221 53.2622 91.3221 53.6726C91.3221 54.083 91.18 54.4265 90.8973 54.7039C90.6139 54.9821 90.2557 55.1212 89.8221 55.1212H88.9548V56.5378H88.0527V52.2248H89.8221V52.2241ZM88.9548 53.0578V54.2882H89.7925C89.9723 54.2882 90.1225 54.2289 90.2417 54.1104C90.3623 53.9918 90.4222 53.8467 90.4222 53.6741C90.4222 53.5016 90.3623 53.3557 90.2417 53.2364C90.1218 53.1178 89.9723 53.0578 89.7925 53.0578H88.9548Z" fill="white"/>
                        <path d="M93.2787 55.5209L92.919 56.5371H91.9585L93.6102 52.2241H94.5677L96.2194 56.5371H95.2589L94.8985 55.5209H93.2787ZM94.0904 53.304L93.5776 54.7207H94.5996L94.0904 53.304Z" fill="white"/>
                        <path d="M101.029 56.5371H100.129V54.7807H98.3313V56.5371H97.4292V52.2241H98.3313V53.95H100.129V52.2241H101.029V56.5371Z" fill="white"/>
                        <path d="M105.329 52.2227C105.528 52.282 105.691 52.3534 105.819 52.4378C105.947 52.5222 106.061 52.6058 106.158 52.6909C106.257 52.7745 106.328 52.8467 106.371 52.9044L106.438 52.9949L105.867 53.5816C105.855 53.5649 105.839 53.5428 105.819 53.514C105.798 53.4851 105.752 53.4349 105.681 53.365C105.61 53.2943 105.532 53.2335 105.448 53.1796C105.364 53.1264 105.254 53.0777 105.117 53.0321C104.98 52.9865 104.841 52.9645 104.698 52.9645C104.306 52.9645 103.978 53.0998 103.715 53.3703C103.451 53.6409 103.32 53.9776 103.32 54.3804C103.32 54.7832 103.451 55.1206 103.715 55.3912C103.978 55.6617 104.306 55.797 104.698 55.797C104.851 55.797 104.996 55.7757 105.136 55.7324C105.276 55.6891 105.392 55.6382 105.483 55.5789C105.576 55.5196 105.656 55.4603 105.727 55.3995C105.797 55.3395 105.847 55.287 105.878 55.243L105.926 55.1799L106.468 55.7666C106.452 55.7909 106.428 55.8221 106.396 55.8616C106.364 55.9004 106.292 55.9695 106.182 56.0691C106.072 56.1686 105.953 56.256 105.827 56.3313C105.702 56.4065 105.537 56.4749 105.333 56.5372C105.129 56.5996 104.918 56.6307 104.699 56.6307C104.059 56.6307 103.519 56.4111 103.078 55.9703C102.638 55.5302 102.417 55.0005 102.417 54.3811C102.417 53.7617 102.637 53.232 103.078 52.7935C103.519 52.3542 104.059 52.1346 104.699 52.1346C104.919 52.1346 105.129 52.1634 105.329 52.2227Z" fill="white"/>
                        <path d="M110.794 52.2241V53.057H109.596V56.5371H108.697V53.057H107.496V52.2241H110.794Z" fill="white"/>
                        <path d="M112.037 56.5371V52.2241H113.838C114.219 52.2241 114.534 52.3381 114.783 52.5668C115.032 52.7956 115.157 53.0616 115.157 53.3641C115.157 53.4781 115.141 53.5867 115.109 53.6901C115.078 53.7935 115.038 53.8793 114.989 53.9477C114.941 54.0154 114.893 54.0747 114.844 54.1233C114.796 54.1727 114.756 54.2069 114.726 54.2274L114.676 54.2571C114.695 54.2654 114.72 54.2768 114.75 54.292C114.781 54.3072 114.836 54.3437 114.916 54.403C114.996 54.4623 115.066 54.5269 115.126 54.5968C115.187 54.6667 115.242 54.7625 115.292 54.8841C115.342 55.0057 115.367 55.1349 115.367 55.2739C115.367 55.619 115.233 55.9154 114.966 56.1639C114.698 56.4124 114.357 56.5371 113.941 56.5371H112.037ZM112.939 52.9939V53.9204H113.777C113.925 53.9204 114.042 53.8778 114.128 53.7935C114.214 53.7099 114.257 53.5974 114.257 53.4568C114.257 53.3162 114.214 53.2037 114.128 53.1201C114.042 53.0357 113.925 52.9932 113.777 52.9932H112.939V52.9939ZM113.896 55.7672C114.06 55.7672 114.197 55.714 114.305 55.6076C114.413 55.5012 114.468 55.3705 114.468 55.2139C114.468 55.0573 114.413 54.9259 114.305 54.8179C114.197 54.7108 114.061 54.6576 113.896 54.6576H112.939V55.7672H113.896Z" fill="white"/>
                        <path d="M117.197 52.7925C117.637 52.3532 118.177 52.1336 118.816 52.1336C119.455 52.1336 119.996 52.3525 120.436 52.7925C120.876 53.2318 121.097 53.7608 121.097 54.3802C121.097 54.9996 120.876 55.5293 120.436 55.9693C119.996 56.4101 119.455 56.6298 118.816 56.6298C118.177 56.6298 117.637 56.4101 117.197 55.9693C116.757 55.5293 116.536 54.9996 116.536 54.3802C116.536 53.7608 116.757 53.2318 117.197 52.7925ZM117.86 55.3887C118.121 55.6615 118.44 55.7976 118.816 55.7976C119.192 55.7976 119.511 55.6615 119.772 55.3887C120.034 55.1159 120.164 54.7807 120.164 54.3825C120.164 53.9842 120.033 53.6483 119.772 53.3747C119.511 53.1011 119.192 52.9643 118.816 52.9643C118.44 52.9643 118.121 53.1011 117.86 53.3747C117.598 53.6483 117.468 53.9842 117.468 54.3825C117.468 54.7807 117.599 55.1159 117.86 55.3887Z" fill="white"/>
                        <path d="M67.053 32.3219H66.4062L53.3666 15.022L52.6629 14.0887H47.2209V44.1072H53.4791H53.4984V25.8741H54.1303L67.8892 44.1072H73.3111V14.0887H67.053V32.3219Z" fill="white"/>
                        <path d="M37.1451 14.0887H30.8677V44.1072H37.1451V14.0887Z" fill="white"/>
                        <path d="M124.352 14.0887H118.074V44.1072H124.352V14.0887Z" fill="white"/>
                        <path d="M104.952 18.4428C102.071 15.5403 98.5044 14.0887 94.2509 14.0887H83.387H83.3862V27.9443V31.6789V31.6843H89.6636V27.9443V19.8875H94.2494C96.7499 19.8875 98.8359 20.7805 100.508 22.5673C102.179 24.3533 103.015 26.5345 103.015 29.1094C103.015 31.6843 102.159 33.8647 100.446 35.6515C99.0557 37.1023 97.4314 37.9642 95.574 38.237C95.1456 38.3001 94.7045 38.3312 94.2509 38.3312H91.2117H89.6651H83.3877V39.9698H83.387V44.1095H94.2509C95.0486 44.1095 95.8227 44.0586 96.5715 43.956C99.8187 43.5137 102.612 42.113 104.953 39.7547C107.834 36.8515 109.274 33.3 109.274 29.0995C109.274 24.8975 107.833 21.3452 104.952 18.4428Z" fill="white"/>
                        <defs>
                            <filter id="filter0_d_170_2" x="0.973389" y="0" width="152.053" height="77" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_170_2"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_170_2" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </Logo>
                <Button>
                    Хочу бесплатный час
                </Button>
            </Titles>
        </Wrapper>
    );
};
