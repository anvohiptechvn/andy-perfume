import { useEffect, useRef, useState } from 'react';

const useMounted = (): boolean => {
	const [mounted, setMounted] = useState(false);
	const mountedRef = useRef(false);

	useEffect(() => {
		mountedRef.current = true;
		setMounted(true);
		return () => {
			mountedRef.current = false;
			setMounted(false);
		};
	}, []);

	return mounted;
};

export default useMounted;
