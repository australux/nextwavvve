import { HTMLAttributes } from "react";

type SVGProps = HTMLAttributes<SVGElement> & {
    className?: string;
};

export const X = (props: SVGProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                />
            </svg>
        </>
    );
};

export const Fire = (props: SVGProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
            </svg>
        </>
    );
};

export const Trash = (props: SVGProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
            </svg>
        </>
    );
};

export const Star = (props: SVGProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
            </svg>
        </>
    );
};

export const Heart = (props: SVGProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
            </svg>
        </>
    );
};

export const No = (props: SVGProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                />
            </svg>
        </>
    );
};

export const ChevronDown = (props: SVGProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
            </svg>
        </>
    );
};

export const ChevronUp = (props: SVGProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
            </svg>
        </>
    );
};

export const Wavvve = (props: SVGProps) => {
    return (
        <>
            <svg
                width="72"
                height="32"
                viewBox="0 0 72 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M22.7712 32H22.9788C26.9059 32 29.3002 27.6802 27.2188 24.35L13.4688 2.35001C12.5551 0.888098 10.9527 0 9.22876 0H9.02124C5.09406 0 2.69985 4.31975 4.78125 7.64999L18.5312 29.65C19.4449 31.1119 21.0473 32 22.7712 32Z"
                    fill="url(#paint0_linear_57_19)"
                />
                <path
                    d="M42.7712 32H42.9788C46.9059 32 49.3002 27.6802 47.2188 24.35L33.4688 2.35001C32.5551 0.888098 30.9527 0 29.2288 0H29.0212C25.0941 0 22.6998 4.31975 24.7812 7.64999L38.5312 29.65C39.4449 31.1119 41.0473 32 42.7712 32Z"
                    fill="url(#paint1_linear_57_19)"
                />
                <path
                    d="M62.7712 32H62.9788C66.9059 32 69.3002 27.6802 67.2188 24.35L53.4688 2.35001C52.5551 0.888098 50.9527 0 49.2288 0H49.0212C45.0941 0 42.6998 4.31975 44.7812 7.64999L58.5312 29.65C59.4449 31.1119 61.0473 32 62.7712 32Z"
                    fill="url(#paint2_linear_57_19)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_57_19"
                        x1="16"
                        y1="0"
                        x2="16"
                        y2="32"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FF8717" />
                        <stop offset="0.13" stopColor="#FF4117" />
                        <stop offset="1" stopColor="#A70D60" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_57_19"
                        x1="36"
                        y1="0"
                        x2="36"
                        y2="32"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FF8717" />
                        <stop offset="0.13" stopColor="#FF4117" />
                        <stop offset="1" stopColor="#A70D60" />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_57_19"
                        x1="56"
                        y1="0"
                        x2="56"
                        y2="32"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FF8717" />
                        <stop offset="0.13" stopColor="#FF4117" />
                        <stop offset="1" stopColor="#A70D60" />
                    </linearGradient>
                </defs>
            </svg>
        </>
    );
};

export const WavvveBW = (props: SVGProps) => {
    return (
        <>
            <svg
                width="72"
                height="32"
                viewBox="0 0 72 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M22.7712 32H22.9788C26.9059 32 29.3002 27.6802 27.2188 24.35L13.4688 2.35001C12.5551 0.888098 10.9527 0 9.22876 0H9.02124C5.09406 0 2.69985 4.31975 4.78125 7.64999L18.5312 29.65C19.4449 31.1119 21.0473 32 22.7712 32Z"
                    fill="url(#paint0_linear_31_10)"
                />
                <path
                    d="M42.7712 32H42.9788C46.9059 32 49.3002 27.6802 47.2188 24.35L33.4688 2.35001C32.5551 0.888098 30.9527 0 29.2288 0H29.0212C25.0941 0 22.6998 4.31975 24.7812 7.64999L38.5312 29.65C39.4449 31.1119 41.0473 32 42.7712 32Z"
                    fill="url(#paint1_linear_31_10)"
                />
                <path
                    d="M62.7712 32H62.9788C66.9059 32 69.3002 27.6802 67.2188 24.35L53.4688 2.35001C52.5551 0.888098 50.9527 0 49.2288 0H49.0212C45.0941 0 42.6998 4.31975 44.7812 7.64999L58.5312 29.65C59.4449 31.1119 61.0473 32 62.7712 32Z"
                    fill="url(#paint2_linear_31_10)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_31_10"
                        x1="16"
                        y1="0"
                        x2="16"
                        y2="32"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#F4F4F5" />
                        <stop offset="1" stopColor="#D1D5DB" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_31_10"
                        x1="36"
                        y1="0"
                        x2="36"
                        y2="32"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#F4F4F5" />
                        <stop offset="1" stopColor="#D1D5DB" />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_31_10"
                        x1="56"
                        y1="0"
                        x2="56"
                        y2="32"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#F4F4F5" />
                        <stop offset="1" stopColor="#D1D5DB" />
                    </linearGradient>
                </defs>
            </svg>
        </>
    );
};

export const Spinner = (props: SVGProps) => {
    return (
        <>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <circle className="spinner_S1WN" cx="4" cy="12" r="3" />
                <circle
                    className="spinner_S1WN spinner_Km9P"
                    cx="12"
                    cy="12"
                    r="3"
                />
                <circle
                    className="spinner_S1WN spinner_JApP"
                    cx="20"
                    cy="12"
                    r="3"
                />
            </svg>
        </>
    );
};

export const MagnifyingGlass = (props: SVGProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
            </svg>
        </>
    );
};

export const Bookmark = (props: SVGProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
            </svg>
        </>
    );
};

export const ListBullet = (props: SVGProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                {...props}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
            </svg>
        </>
    );
};

export const LeftHalf = (props: SVGProps) => {
    return (
        <>
            <svg
                width="30"
                height="60"
                viewBox="0 0 30 60"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30 0L22.918 22.918H-2.5034e-06L18.541 37.082L11.459 60L30 45.8359V0Z"
                />
            </svg>
        </>
    );
};

export const RightHalf = (props: SVGProps) => {
    return (
        <>
            <svg
                width="30"
                height="60"
                viewBox="0 0 30 60"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 45.8359L18.541 60L11.459 37.082L30 22.918H7.08204L0 0V45.8359Z"
                />
            </svg>
        </>
    );
};

export const WavvveLogo = (props: SVGProps) => {
    return (
        <>
            <svg
                viewBox="0 0 64 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M30.3483 19.4293L26.5942 11.2885C26.3167 10.6867 26.7563 10 27.4189 10C27.7732 10 28.0951 10.206 28.2435 10.5276L31.2521 17.0462L33.9665 11.1675C34.2935 10.4593 35.0023 10.0059 35.7823 10.0059H36.5021L32.1544 19.4295C31.9922 19.781 31.6408 20.0064 31.2536 20.0073C30.8648 20.0082 30.5111 19.7824 30.3483 19.4293Z"
                    fill="white"
                />
                <path
                    d="M39.755 17.0526L42.4694 11.1738C42.7964 10.4657 43.5052 10.0122 44.2852 10.0122H45.005L40.6572 19.4358C40.4951 19.7874 40.1436 20.0128 39.7565 20.0137C39.3677 20.0146 39.014 19.7888 38.8512 19.4357L36.731 14.8377C36.4858 14.3061 36.4859 13.6939 36.7311 13.1624L37.3445 11.8328L39.755 17.0526Z"
                    fill="white"
                />
                <path
                    d="M49.1601 19.4417L52.9136 11.3062C53.1911 10.7047 52.7518 10.0181 52.0894 10.0181C51.7353 10.0181 51.4136 10.2239 51.2652 10.5453L48.2579 17.0584L45.8454 11.8328L45.2316 13.1621C44.9861 13.6938 44.986 14.3063 45.2312 14.8381L47.3541 19.4416C47.5169 19.7947 47.8706 20.0205 48.2594 20.0196C48.6465 20.0187 48.9979 19.7932 49.1601 19.4417Z"
                    fill="white"
                />
                <path
                    d="M4.04 20L0.28 10.5H2.16L4.88 17.9H4.28L6.98 10.5H8.02L10.72 17.9H10.12L12.84 10.5H14.72L10.98 20H9.92L7.18 12.82H7.84L5.08 20H4.04ZM20.0866 20.2C19.2199 20.2 18.4332 19.9867 17.7266 19.56C17.0199 19.12 16.4599 18.5267 16.0466 17.78C15.6466 17.0333 15.4466 16.1933 15.4466 15.26C15.4466 14.3267 15.6466 13.4867 16.0466 12.74C16.4599 11.9933 17.0132 11.4 17.7066 10.96C18.4132 10.52 19.2066 10.3 20.0866 10.3C20.8066 10.3 21.4466 10.4533 22.0066 10.76C22.5799 11.0533 23.0399 11.4667 23.3866 12C23.7332 12.52 23.9266 13.1267 23.9666 13.82V16.68C23.9266 17.36 23.7332 17.9667 23.3866 18.5C23.0532 19.0333 22.5999 19.4533 22.0266 19.76C21.4666 20.0533 20.8199 20.2 20.0866 20.2ZM20.3866 18.5C21.2799 18.5 21.9999 18.2 22.5466 17.6C23.0932 16.9867 23.3666 16.2067 23.3666 15.26C23.3666 14.6067 23.2399 14.04 22.9866 13.56C22.7466 13.0667 22.3999 12.6867 21.9466 12.42C21.4932 12.14 20.9666 12 20.3666 12C19.7666 12 19.2332 12.14 18.7666 12.42C18.3132 12.7 17.9532 13.0867 17.6866 13.58C17.4332 14.06 17.3066 14.6133 17.3066 15.24C17.3066 15.88 17.4332 16.4467 17.6866 16.94C17.9532 17.42 18.3199 17.8 18.7866 18.08C19.2532 18.36 19.7866 18.5 20.3866 18.5ZM23.2466 20V17.44L23.5866 15.12L23.2466 12.82V10.5H25.0666V20H23.2466Z"
                    fill="white"
                />
                <path
                    d="M58.72 20.2C57.7733 20.2 56.92 19.9867 56.16 19.56C55.4 19.12 54.8 18.5267 54.36 17.78C53.92 17.0333 53.7 16.1867 53.7 15.24C53.7 14.3067 53.9133 13.4667 54.34 12.72C54.78 11.9733 55.3667 11.3867 56.1 10.96C56.8467 10.52 57.68 10.3 58.6 10.3C59.48 10.3 60.2533 10.5 60.92 10.9C61.6 11.3 62.1267 11.8533 62.5 12.56C62.8867 13.2667 63.08 14.0667 63.08 14.96C63.08 15.0933 63.0733 15.24 63.06 15.4C63.0467 15.5467 63.02 15.72 62.98 15.92H54.96V14.42H62.02L61.36 15C61.36 14.36 61.2467 13.82 61.02 13.38C60.7933 12.9267 60.4733 12.58 60.06 12.34C59.6467 12.0867 59.1467 11.96 58.56 11.96C57.9467 11.96 57.4067 12.0933 56.94 12.36C56.4733 12.6267 56.1133 13 55.86 13.48C55.6067 13.96 55.48 14.5267 55.48 15.18C55.48 15.8467 55.6133 16.4333 55.88 16.94C56.1467 17.4333 56.5267 17.82 57.02 18.1C57.5133 18.3667 58.08 18.5 58.72 18.5C59.2533 18.5 59.74 18.4067 60.18 18.22C60.6333 18.0333 61.02 17.7533 61.34 17.38L62.5 18.56C62.0467 19.0933 61.4867 19.5 60.82 19.78C60.1667 20.06 59.4667 20.2 58.72 20.2Z"
                    fill="white"
                />
            </svg>
        </>
    );
};
