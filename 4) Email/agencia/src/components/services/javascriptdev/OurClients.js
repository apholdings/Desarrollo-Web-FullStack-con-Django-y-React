export default function OurClients() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-1700 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Clients
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                scelerisque amet ullamcorper eu enim et fermentum, augue.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                  alt="Laravel"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                  alt="Statamic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  