import BikeView from './bikeView/BikeView';
import SidePanel from './sidePanel/SidePanelPresenter';
import { Suspense } from 'react';
import BikePartNavivation from './BikePartNavivation';

const BikeBuilderPage = () => {
	return (
		<div className="flex h-full w-full">
			<div className="h-full flex-grow w-4/6 relative">
				<Suspense fallback={<div>Loading... </div>}>
					<BikeView />
					<BikePartNavivation />
				</Suspense>
			</div>
			<div className="h-full w-2/6 max-w-sm">
				<SidePanel />
			</div>
		</div>
	);
};

export default BikeBuilderPage;
