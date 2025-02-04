import cn from 'classnames';
import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor="#1F2125"
			highlightColor="#292A2E"
			className={cn('rounded-lg', className)}
		/>
	);
};

export default SkeletonLoader;
