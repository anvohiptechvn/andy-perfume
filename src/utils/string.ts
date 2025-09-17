/**
 * Returns the Messenger URL from the social data array.
 * @param socialData - The array of social link objects (from data.json)
 * @returns The Messenger URL string, or undefined if not found.
 */
export const getMessengerUrl = (socialData: { key: string; href: string }[]): string | undefined => {
	const messenger = socialData.find((item) => item.key === 'messenger');
	return messenger?.href;
};
