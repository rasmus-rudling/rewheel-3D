import BikeView from './bikeView/BikeView';
import SidePanel from './sidePanel/SidePanelPresenter';
import { Suspense } from 'react';
import BikePartNavivation from './BikePartNavivation';

import { useSelector, RootStateOrAny } from 'react-redux';


const BikeBuilderPage = () => {
  const currentBikeBuild = useSelector((state: RootStateOrAny) => state.currentBuild);

	return (
		<div className="flex h-full w-full">
			<div className="h-full flex-grow w-4/6 relative">
				<Suspense fallback={<div>Loading... </div>}>
					<BikeView bikeBuild={currentBikeBuild} />
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
