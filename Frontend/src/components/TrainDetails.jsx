export default function TrainDetails({ trainNumber, trainDetails }) {
    const filteredTrain = trainDetails.find(
        (train) => train.trainNumber === trainNumber.trainNumber
    );

    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {filteredTrain.trainName}
                </h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Train Number
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {filteredTrain.trainNumber}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Departure Time
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {filteredTrain.departureTime.Hours}:
                            {filteredTrain.departureTime.Minutes
                                ? filteredTrain.departureTime.Minutes
                                : "00"}
                            :
                            {filteredTrain.departureTime.Seconds
                                ? filteredTrain.departureTime.Seconds
                                : "00"}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Delay
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {filteredTrain.delayedBy}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Price
                        </dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul
                                role="list"
                                className="divide-y divide-gray-100 rounded-md border border-gray-200"
                            >
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">
                                                AC
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Rs {filteredTrain.price.AC}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">
                                                Sleeper
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Rs {filteredTrain.price.sleeper}
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Seats Available
                        </dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul
                                role="list"
                                className="divide-y divide-gray-100 rounded-md border border-gray-200"
                            >
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">
                                                AC
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                            {filteredTrain.seatsAvailable.AC}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">
                                                Sleeper
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                            {
                                                filteredTrain.seatsAvailable
                                                    .sleeper
                                            }
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
