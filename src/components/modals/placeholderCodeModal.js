import {PlaceholderModalToggle} from '../global/Utils.js';


function PlaceholderCodeModal(){

  return (
    <div id="placeholderModal" tabIndex="-1" aria-hidden="true" className="invisible flex justify-center items-center fixed z-[6000] w-full md:inset-0 bg-slate-600/[.5] ">
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">

          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Placeholder Code
                  </h3>
              </div>

              <div className="p-6 space-y-6">
                  <p id="colorLoaderModal">

                  </p>
              </div>

              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button className="btn-primary" onClick={PlaceholderModalToggle}>Close</button>
              </div>
          </div>
      </div>
  </div>
  );
}

export default PlaceholderCodeModal;
