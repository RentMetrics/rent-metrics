import { Link } from "react-router-dom";

export default function StatusCardKPI() {
    return (
        <Link to="" className="bg-white rounded-lg p-4 col-span-1 h-full flex items-center justify-center gap-2">
            <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M22.8126 10.1752L21.3984 11.5894L20.6913 10.8823L16.4486 15.1249L15.7415 18.6605L14.3273 20.0747L10.0847 15.832L5.13492 20.7818L3.7207 19.3676L8.67045 14.4178L4.42781 10.1752L5.84202 8.76101L9.37756 8.0539L13.6202 3.81126L12.9131 3.10416L14.3273 1.68994L22.8126 10.1752Z"
                    fill="#001924"
                />
            </svg>
            <h4 className="text-dark-1 text-lg leading-[1.4] font-bold">
                Add KPI
            </h4>
        </Link>
    );
}
