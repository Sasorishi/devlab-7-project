import React, { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import Chart from "../components/ChartComponent"
import Dashmenu from "../components/dashmenuComponents/DashmenuComponent"
import Map from "../components/chartComponents/MapComponent"
import Options from "../components/chartComponents/OptionsComponents"
import NavbarLayout from "../components/layout/NavbarLayout"
import Footer from "../components/layout/FooterLayout"

function BuilderChart() {
	const location = useLocation()
	// const [selectedColor, setSelectedColor] = useState("#ffffff");
	// const [title, setTitle] = useState("");
	const [jsonData, setJsonData] = useState(null)
	const [numberDataset, setNumberDataset] = useState(0)

	// const handleColorChange = (newColor) => {
	//   setSelectedColor(newColor);
	// };

	useEffect(() => {
		if (location.state) {
			setJsonData(location.state.jsonData)
			setNumberDataset(location.state.numberDataset)
		}
	}, [location.state])

	// Fonction pour fermer le modal
	function closeModal() {
		document.getElementById("modal").classList.add("hidden")
	}

	return (
		<>
		<NavbarLayout />
		<div className="mx-auto mb-5 h-auto py-[50px] bg-white">
			<div className="flex flex-col items-center justify-center p-5">
				<h1 className="text-[#ffcc00] uppercase ">Chart Builder - Dataset {numberDataset}</h1>
			</div>
			<Dashmenu />
			<div className="container mx-auto min-h-screen sm:mt-[50px] p-5">
				<div id="modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
					<div className="relative m-auto p-4 w-full max-w-2xl max-h-full">
						<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
							<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white">Donnée JSON</h3>
								<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal" onClick={closeModal}>
									<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
									</svg>
									<span className="sr-only">Close modal</span>
								</button>
							</div>
							<div className="p-4 md:p-5 space-y-4">
								<textarea
									id="message"
									rows="14"
									className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
									placeholder="Écrire le JSON..."
									value={jsonData}></textarea>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-3 sm:gap-8 justify-center my-5 w-full">
					<div className="animate-in" data-aos="" data-aos-easing="linear" data-aos-delay="0" data-aos-offset="0" data-aos-duration="100">
						<div className="box mx-auto p-6 border border-[#ffcc00] shadow-[0_0_20px_#ffcc00] rounded-lg  w-full">
							<Options chartId={"chart-container-1"} />
							<div id="chart-container-1">
								<Chart type="bar" title="Nombre de place par année" width={250} height={200} dataset={jsonData} numberDataset={numberDataset} field_1={"date_mes"} field_2={"nb_place"} labelValue={"Nombre de places"} />
							</div>
						</div>
					</div>
					<div className="animate-in" data-aos-easing="linear" data-aos-delay="100" data-aos-offset="0">
						<div className="box mx-auto p-6 border border-[#ffcc00] shadow-[0_0_20px_#ffcc00] rounded-lg  w-full">
							<Options chartId={"chart-container-2"} />
							<div id="chart-container-2">
								<Chart type="pie" title="Les types de bornes" width={250} height={200} dataset={jsonData} numberDataset={numberDataset} field={"type_borne"} />
							</div>
						</div>
					</div>
					<div className="animate-in" data-aos-easing="linear" data-aos-delay="200" data-aos-offset="0">
						<div className="box mx-auto p-6 border border-[#ffcc00] shadow-[0_0_20px_#ffcc00] rounded-lg  w-full">
							<Options chartId={"chart-container-3"} />
							<div id="chart-container-3">
								<Chart type="bar" title="Nombre de accès recharge" width={250} height={200} dataset={jsonData} numberDataset={numberDataset} field={"acces_recharge"} labelValue={"Nombre de accès recharge"} />
							</div>
						</div>
					</div>
					<div className="animate-in" data-aos-easing="linear" data-aos-delay="300" data-aos-offset="0">
						<div className="box mx-auto p-6 border border-[#ffcc00] shadow-[0_0_20px_#ffcc00] rounded-lg  w-full">
							<Options chartId={"chart-container-4"} />
							<div id="chart-container-4">
								<Chart type="line" title="Évolution de bornes par année" width={250} height={200} dataset={jsonData} numberDataset={numberDataset} field={"date_mes"} labelValue={"Nombre de bornes"} />
							</div>
						</div>
					</div>
				</div>
				<div className="box mx-auto p-6 border border-[#ffcc00] shadow-[0_0_20px_#ffcc00] rounded-lg  w-full">
					<div className="animate-in" data-aos-easing="linear" data-aos-delay="400" data-aos-offset="0">
						<Options chartId={"map-container"} />
						<div id="map-container" className="mx-auto w-full p-6 bg-white">
							<Map title="Géolocalisation des bornes" jsonDataProp={jsonData} />
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-3 sm:gap-8 justify-center my-5 w-full ">
					<div className="animate-in" data-aos-easing="linear" data-aos-delay="0" data-aos-offset="0" data-aos-duration="100">
						<div className="box mx-auto p-6 rounded-lg border border-[#ffcc00] shadow-[0_0_20px_#ffcc00]  w-full">
							<Options chartId={"chart-container-5"} />
							<div id="chart-container-5">
								<Chart type="radar" title="Capacité de charge" width={250} height={200} dataset={jsonData} numberDataset={numberDataset} field_1={"date_mes"} field_2={"nb_place"} labelValue={"Nombre de places"} />
							</div>
						</div>
					</div>
					<div className="animate-in" data-aos-easing="linear" data-aos-delay="100" data-aos-offset="0">
						<div className="box mx-auto p-6 border  rounded-lg  border-[#ffcc00] shadow-[0_0_20px_#ffcc00]">
							<Options chartId={"chart-container-6"} />
							<div id="chart-container-6">
								<Chart type="polarArea" title="Les différents opérateurs" width={250} height={200} dataset={jsonData} numberDataset={numberDataset} field={"n_operateur"} />
							</div>
						</div>
					</div>
					<div className="animate-in" data-aos-easing="linear" data-aos-delay="200" data-aos-offset="0">
						<div className="box mx-auto p-6 rounded-lg border border-[#ffcc00] shadow-[0_0_20px_#ffcc00] ">
							<Options chartId={"chart-container-7"} />
							<div id="chart-container-7">
								<Chart type="bubble" title="Nombre total d'aménageurs" width={250} height={200} dataset={jsonData} numberDataset={numberDataset} field={"n_amenageur"} />
							</div>
						</div>
					</div>
					<div className="animate-in" data-aos-easing="linear" data-aos-delay="300" data-aos-offset="0">
						<div className="box mx-auto p-6 rounded-lg border border-[#ffcc00] shadow-[0_0_20px_#ffcc00] ">
							<Options chartId={"chart-container-8"} />
							<div id="chart-container-8">
								<Chart type="scatter" title="Accessibilité par heures/jours" width={250} height={200} dataset={jsonData} numberDataset={numberDataset} field={"date_mes"} labelValue={"Nombre de bornes"} />
							</div>
						</div>
					</div>
				</div>
				{/* <div className="flex flex-row gap-4 justify-center">
          <Chart
            type="BarChart"
            title={title}
            width={width}
            height={height}
            dataset={jsonData}
            numberDataset={numberDataset}
          />
          <Chart
            type="BarChart"
            title={title}
            width={width}
            height={height}
            dataset={jsonData}
            numberDataset={numberDataset}
          />
          <Chart
            type="BarChart"
            title={title}
            width={width}
            height={height}
            dataset={jsonData}
            numberDataset={numberDataset}
          />
          <Chart
            type="BarChart"
            title={title}
            width={width}
            height={height}
            dataset={jsonData}
            numberDataset={numberDataset}
          />
        </div> */}
			</div>
		</div>
				<Footer />
				</>

	)
}

export default BuilderChart
