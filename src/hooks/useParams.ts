import { useState, useCallback } from 'react';

/**
 * useParams - A custom hook to get and set URL query parameters using window.location.
 * @returns [params, setParams] - The current params object and a setter function
 */
export default function useParams() {
	// Parse current params from window.location
	const getParams = () => {
		if (typeof window === 'undefined') return {};
		const url = new URL(window.location.href);
		const params: Record<string, string> = {};
		url.searchParams.forEach((value, key) => {
			params[key] = value;
		});
		return params;
	};

	const [params, setParamsState] = useState(getParams);

	// Set params and update URL
	const setParams = useCallback((newParams: Record<string, any>) => {
		if (typeof window === 'undefined') return;
		const url = new URL(window.location.href);
		Object.entries(newParams).forEach(([key, value]) => {
			if (value === undefined || value === null || value === '') {
				url.searchParams.delete(key);
			} else {
				url.searchParams.set(key, value);
			}
		});
		window.history.replaceState({}, '', url.toString());
		setParamsState(getParams());
	}, []);

	return [params, setParams] as const;
}
