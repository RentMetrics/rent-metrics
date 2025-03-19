import { Link } from "react-router-dom";

export default function ExcelImportTab() {
  return (
    <div>
      <div className="p-5 bg-white rounded-2xl">
        <div className="w-full overflow-x-auto  font-red-hat-display">
          <div className="flex w-full  items-center justify-center bg-grey-lighter">
            <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border-[#8E99A1] border border-dashed cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clipPath="url(#clip0_26011_16312)">
                  <path
                    d="M39.9927 17.6441C37.7742 8.80647 28.8117 3.44062 19.9741 5.65907C13.0677 7.39279 8.05291 13.3618 7.53622 20.4637C2.63241 21.2724 -0.687381 25.9032 0.121312 30.807C0.840202 35.1666 4.61773 38.3592 9.03605 38.3417H16.5352V35.342H9.03605C5.72273 35.342 3.03671 32.656 3.03671 29.3427C3.03671 26.0294 5.72273 23.3434 9.03605 23.3434C9.86443 23.3434 10.5359 22.6719 10.5359 21.8435C10.5284 14.3885 16.5659 8.3389 24.0209 8.33149C30.4743 8.32503 36.0296 12.8873 37.278 19.2188C37.4012 19.851 37.9143 20.3339 38.5528 20.4187C42.6532 21.0026 45.5037 24.7999 44.9199 28.9002C44.3956 32.5821 41.252 35.3235 37.5329 35.342H31.5336V38.3417H37.5329C43.3313 38.3242 48.0175 33.6094 47.9999 27.8111C47.9853 22.9844 44.6815 18.7895 39.9927 17.6441Z"
                    fill="black"
                  />
                  <path
                    d="M22.97 23.7785L16.9707 29.7778L19.0855 31.8926L22.5351 28.4579V42.8414H25.5348V28.4579L28.9694 31.8926L31.0842 29.7778L25.0848 23.7785C24.4998 23.1969 23.5551 23.1969 22.97 23.7785Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_26011_16312">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="mt-2 text-center text-[#54616B]">
                Upload an Excel file to import historical property data. <br />{" "}
                OR <br /> Choose File
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
          <div className="upload-wrap grid justify-items-end">
            <Link
              to="/add-new-properties"
              className="mt-6 text-base px-[28px] py-[10px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-2 group col-auto"
            >
              Upload
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
