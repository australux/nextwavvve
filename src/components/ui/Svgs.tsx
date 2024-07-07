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
