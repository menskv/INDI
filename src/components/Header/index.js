import React from 'react';
import {Flex} from "../../common/commonStyle";
import {Border, Left, LinkItem, Links} from "./style";


export const Header = () => {
    return (
        <header>
            <Flex justifyContent="center">
                <Border>
                    <Flex justifyContent="space-between">
                        <Left>
                            <span>Наши контакты:</span>
                            <Links>
                                <LinkItem>
                                    <a href="/">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.8" y="0.8" width="32.4" height="32.4" rx="3.2" stroke="white"
                                                  strokeWidth="1.6"/>
                                            <circle cx="16.5" cy="17.5" r="7.65" stroke="white" strokeWidth="1.7"/>
                                            <circle cx="26.75" cy="6.75" r="1.75" fill="white"/>
                                        </svg>
                                    </a>
                                </LinkItem>
                                <LinkItem>
                                    <a href="">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4 0C1.8 0 0 1.8 0 4V29.6C0 31.8 1.8 33.6 4 33.6H29.6C31.8 33.6 33.6 31.8 33.6 29.6V4C33.6 1.8 31.8 0 29.6 0H4ZM4 1.6H29.6C30.9344 1.6 32 2.66562 32 4V29.6C32 30.9344 30.9344 32 29.6 32H4C2.66562 32 1.6 30.9344 1.6 29.6V4C1.6 2.66562 2.66562 1.6 4 1.6ZM15.5156 9.59375C14.6719 9.59062 13.9156 9.64062 13.2406 9.97187C12.9125 10.1344 12.6812 10.3406 12.4937 10.5844C12.4031 10.7062 12.3094 10.8156 12.2562 11.0969C12.2312 11.2344 12.2187 11.4594 12.3625 11.7062C12.5094 11.95 12.8031 12.0875 12.9906 12.1125C13.1219 12.1312 13.4156 12.2562 13.4406 12.2937C13.4437 12.2937 13.4437 12.2937 13.4437 12.2969C13.4437 12.2969 13.5562 12.5937 13.5906 12.8594C13.625 13.1219 13.6219 13.3375 13.6219 13.3375C13.6219 13.3594 13.6219 13.3812 13.6219 13.4031C13.6219 13.4031 13.6687 14.0969 13.6406 14.8125C13.6281 15.0969 13.5906 15.3531 13.5531 15.5781C13.2656 15.2656 12.8469 14.6969 12.2406 13.6437C11.5687 12.4781 11.0344 11.4344 11.0344 11.4344C11.0062 11.3437 10.9062 11.0594 10.5187 10.775C10.0937 10.4625 9.68437 10.4156 9.68437 10.4156C9.63125 10.4062 9.57812 10.4 9.52812 10.4L6.37187 10.4031C6.37187 10.4031 6.18437 10.3906 5.95625 10.4219C5.73125 10.4531 5.39062 10.4781 5.05937 10.8687C5.05937 10.8687 5.05937 10.8687 5.05937 10.8719C4.76562 11.2219 4.78438 11.6094 4.81875 11.8312C4.85312 12.05 4.93437 12.2156 4.93437 12.2156C4.93437 12.2187 4.9375 12.2219 4.9375 12.225C4.9375 12.225 7.51875 17.6469 10.4312 20.8406C12.55 23.1594 14.7219 23.2 16.5125 23.2H17.85C18.1937 23.2 18.5031 23.1844 18.8437 22.9875C19.1844 22.7875 19.4156 22.3031 19.4156 21.9656C19.4156 21.6125 19.4687 21.3375 19.5312 21.1937C19.5781 21.0937 19.6156 21.0562 19.6687 21.0281C19.6812 21.0344 19.675 21.0312 19.7062 21.0562C19.8406 21.1469 20.0594 21.3625 20.3 21.6281C20.7781 22.1594 21.3219 22.8906 22.05 23.3937C22.5719 23.75 23.0656 23.9094 23.4406 23.9687C23.675 24.0062 23.8594 23.9969 23.9875 23.9875L26.975 24C26.9937 24 27.0094 24 27.0281 23.9969C27.0281 23.9969 27.5437 24.0031 28.0781 23.6844C28.3469 23.525 28.6625 23.2219 28.7625 22.7781C28.8656 22.3344 28.7375 21.8781 28.4844 21.4562C28.5281 21.5281 28.4469 21.3812 28.3594 21.2406C28.275 21.1 28.15 20.9125 27.9719 20.6812C27.6187 20.2156 27.0469 19.5656 26.125 18.7062C26.125 18.7062 26.125 18.7062 26.1219 18.7062C25.6562 18.2719 25.3375 17.9625 25.2094 17.7906C25.0812 17.6187 25.1219 17.7094 25.1312 17.6656C25.15 17.5781 25.7125 16.7687 26.8531 15.2406C27.55 14.3125 28.0375 13.6125 28.3594 13.0312C28.6812 12.4531 28.9125 11.95 28.75 11.3344V11.3312C28.6781 11.0625 28.4812 10.8125 28.2812 10.6781C28.0812 10.5406 27.8906 10.4875 27.7187 10.4562C27.3781 10.3875 27.0781 10.4 26.8031 10.4C26.2219 10.4 23.65 10.4219 23.4375 10.4219C23.1875 10.4219 22.775 10.5344 22.5906 10.6437C22.1312 10.9219 22 11.2844 22 11.2844C21.9906 11.3 21.9844 11.3156 21.975 11.3312C21.975 11.3312 21.4469 12.5094 20.7625 13.6719C20.0687 14.85 19.5594 15.4125 19.25 15.6719C19.2406 15.625 19.2437 15.6625 19.2375 15.6C19.2094 15.2687 19.2406 14.8156 19.2406 14.3719C19.2406 13.175 19.3406 12.3375 19.2875 11.6C19.2594 11.2281 19.1906 10.8469 18.9469 10.4969C18.7062 10.1469 18.3 9.91875 17.9 9.82187C17.6594 9.7625 17.3875 9.6125 16.3937 9.60312C16.0906 9.6 15.8 9.59375 15.5156 9.59375ZM16.3781 11.2031C17.2562 11.2125 17.0375 11.2594 17.525 11.3781C17.675 11.4156 17.6375 11.4156 17.6344 11.4094C17.6312 11.4031 17.675 11.4875 17.6937 11.7187C17.725 12.1781 17.6406 13.0937 17.6406 14.3719C17.6406 14.7187 17.6 15.2156 17.6437 15.7344C17.6844 16.25 17.8156 16.9156 18.4344 17.3156C18.725 17.5062 19.0656 17.5187 19.3594 17.4469C19.65 17.3719 19.9125 17.2219 20.1906 17C20.7469 16.5562 21.3656 15.8062 22.1437 14.4812C22.8687 13.2437 23.3969 12.0656 23.4156 12.0281C23.4187 12.025 23.4219 12.025 23.4281 12.0187C23.4375 12.0219 23.425 12.0187 23.4406 12.0187C23.7375 12.0187 26.2625 12 26.8031 12C26.9281 12 26.975 12.0062 27.075 12.0094C27.0469 12.1 27.0781 12.0438 26.9594 12.2562C26.7094 12.7062 26.2531 13.375 25.5719 14.2812C24.4594 15.7687 23.7687 16.3531 23.5656 17.3406C23.4625 17.8375 23.6531 18.3844 23.9344 18.7531C24.2125 19.125 24.5656 19.4437 25.0344 19.8781C25.9031 20.6875 26.4125 21.2719 26.7031 21.6531C26.85 21.8469 26.9406 21.9844 27 22.075C27.0562 22.1687 27.0406 22.1594 27.1156 22.2812C27.1656 22.3656 27.1469 22.3156 27.1562 22.3375C27.0594 22.3656 26.9437 22.4 26.9375 22.4L23.9937 22.3875C23.9406 22.3875 23.8875 22.3937 23.8375 22.4031C23.8375 22.4031 23.8437 22.4125 23.6875 22.3875C23.5281 22.3625 23.2781 22.2937 22.9562 22.0719C22.5687 21.8062 22.025 21.1531 21.4906 20.5594C21.225 20.2625 20.9594 19.9781 20.6281 19.7437C20.2969 19.5125 19.8031 19.2937 19.2719 19.4625C18.7156 19.6375 18.2844 20.0687 18.075 20.5312C17.9187 20.8781 17.9062 21.2406 17.8812 21.5969C17.8562 21.6 17.8844 21.5969 17.8531 21.5969H16.5156C14.6969 21.5969 13.4062 21.725 11.6156 19.7594C9.20312 17.1187 6.99375 12.725 6.63437 12H9.40937C9.45937 12.0187 9.5625 12.0594 9.56875 12.0625L9.57187 12.0656C9.47187 11.9906 9.57812 12.0937 9.57812 12.0937C9.5875 12.1187 9.59687 12.1437 9.60937 12.1656C9.60937 12.1656 10.1594 13.2406 10.8562 14.4437C11.5375 15.6281 12.0344 16.3656 12.5156 16.8531C12.7531 17.0969 12.9969 17.2937 13.3219 17.4031C13.6437 17.5125 14.0625 17.4719 14.3437 17.3187C14.9187 17.0031 14.9969 16.5406 15.0906 16.1344C15.1812 15.7281 15.2187 15.2937 15.2375 14.8812C15.2719 14.0781 15.2219 13.3812 15.2219 13.3375C15.2219 13.325 15.225 13.0344 15.1781 12.6625C15.1312 12.2812 15.0781 11.8156 14.7344 11.3469C14.7312 11.3437 14.7281 11.3437 14.725 11.3406C15.1812 11.275 15.5687 11.1937 16.3781 11.2031ZM23.4344 11.9875L23.425 12.0125C23.4219 12.0125 23.425 12.0125 23.4219 12.0125C23.425 12.0062 23.4344 11.9875 23.4344 11.9875Z"
                                                fill="white"/>
                                        </svg>
                                    </a>
                                </LinkItem>
                                <LinkItem>
                                    <a href="">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.8" y="0.8" width="32.4" height="32.4" rx="3.2" stroke="white"
                                                  strokeWidth="1.6"/>
                                            <path
                                                d="M25.6879 7.00147C25.4443 7.01215 25.2073 7.07993 24.9935 7.16553C24.7819 7.25056 23.5638 7.77048 21.765 8.53956C19.9662 9.30864 17.6279 10.3101 15.3099 11.3032C10.6741 13.2894 6.11852 15.2437 6.11852 15.2437L6.15173 15.231C6.15173 15.231 5.87678 15.3229 5.59802 15.5171C5.45864 15.6142 5.30868 15.7396 5.18591 15.9224C5.06313 16.1052 4.97337 16.3642 5.0072 16.6382C5.12601 17.6006 6.12341 17.8735 6.12341 17.8735L6.12731 17.8755L10.5785 19.3989C10.692 19.7775 11.9285 23.9048 12.2006 24.7788C12.3508 25.262 12.4914 25.5408 12.6381 25.731C12.7115 25.8261 12.7884 25.8998 12.8734 25.9536C12.9072 25.975 12.9427 25.9911 12.9779 26.0054C12.9786 26.0057 12.9791 26.005 12.9799 26.0054C12.9842 26.0073 12.9882 26.0075 12.9925 26.0093L12.9808 26.0064C12.989 26.0097 12.9971 26.0152 13.0052 26.0181C13.0211 26.0236 13.0308 26.0234 13.0511 26.0278C13.5609 26.2058 13.9828 25.8755 13.9828 25.8755L14.0004 25.8618L16.7347 23.3257L21.1722 26.7857L21.2279 26.811C22.0046 27.1559 22.7071 26.9635 23.0961 26.647C23.4851 26.3304 23.6381 25.9224 23.6381 25.9224L23.6547 25.8794L26.9154 8.88428C26.9988 8.50407 27.0107 8.17541 26.932 7.87842C26.8533 7.58144 26.6621 7.32327 26.4222 7.18018C26.1823 7.03709 25.9314 6.99079 25.6879 7.00147ZM25.7142 8.01807C25.8131 8.01349 25.8864 8.0248 25.9095 8.03858C25.9326 8.05236 25.943 8.05055 25.9652 8.13428C25.9874 8.21802 25.9994 8.39439 25.9388 8.67042L25.9369 8.67628L22.6947 25.5728C22.687 25.5898 22.6195 25.7461 22.4652 25.8716C22.3078 25.9996 22.1328 26.0996 21.6683 25.9048L16.8158 22.1206L16.6791 22.0132L16.6761 22.0161L15.225 20.9273L23.3802 11.3325C23.4429 11.259 23.4829 11.1689 23.4955 11.0731C23.508 10.9773 23.4925 10.8799 23.4509 10.7927C23.4093 10.7055 23.3433 10.6323 23.2609 10.5818C23.1785 10.5313 23.0833 10.5058 22.9867 10.5083C22.8923 10.5108 22.8006 10.5399 22.722 10.5923L10.9213 18.4595L6.46325 16.9331C6.46325 16.9331 6.02057 16.6868 5.99938 16.5151C5.99821 16.5056 5.99298 16.5142 6.01598 16.48C6.03899 16.4457 6.09681 16.3879 6.1693 16.3374C6.31429 16.2364 6.47985 16.1753 6.47985 16.1753L6.49645 16.1694L6.51305 16.1626C6.51305 16.1626 11.0688 14.2082 15.7045 12.2222C18.0223 11.2291 20.3602 10.2284 22.1586 9.45948C23.9565 8.69079 25.2556 8.13749 25.3656 8.09327C25.4908 8.04312 25.6153 8.02265 25.7142 8.01807ZM20.306 13.4048L14.1215 20.6812L14.1185 20.6841C14.1089 20.6957 14.0997 20.7078 14.0912 20.7202C14.0814 20.7338 14.0722 20.7478 14.0638 20.7622C14.0291 20.8212 14.0068 20.8867 13.9984 20.9546C13.9984 20.9559 13.9984 20.9572 13.9984 20.9585L13.1927 24.5815C13.1793 24.5424 13.17 24.5281 13.1556 24.4819V24.481C12.8997 23.6587 11.7331 19.7664 11.5716 19.228L20.306 13.4048ZM14.8197 21.8735L15.931 22.7075L14.2982 24.2212L14.8197 21.8735Z"
                                                fill="white"/>
                                        </svg>
                                    </a>
                                </LinkItem>
                            </Links>
                        </Left>
                        <div>

                        </div>
                    </Flex>
                </Border>
            </Flex>
        </header>
    );
};

