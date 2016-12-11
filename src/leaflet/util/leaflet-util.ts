export class LeafletUtil {

	/**
	 * Combine two associative arrays in a shallow manner. Where there are duplicate properties,
	 * the value in the second object will overwrite the value of the first object
	 *
	 * @param aMap The first object
	 * @param bMap The second object
	 * @returns {{}} The aggregate of both objects
	 */
	static mergeMaps(aMap: {}, bMap: {}) {
		let toReturn = {};

		if (null != aMap) {
			for (let k in aMap) {
				if (aMap.hasOwnProperty(k)) {
					toReturn[k] = aMap[k];
				}
			}
		}

		if (null != bMap) {
			for (let k in bMap) {
				if (bMap.hasOwnProperty(k)) {
					toReturn[k] = bMap[k];
				}
			}
		}

		return toReturn;
	}

	/**
	 * Subtracts the properties of an associative array in a shallow manner.
	 * Where there are duplicate properties, the properties will be removed
	 * from the first object.
	 *
	 * @param aMap The object from which to subtract properties
	 * @param bMap The object containing properties to subtract
	 * @returns {{}}
	 */
	static mapSubtract(aMap: {}, bMap: {}) {
		let toReturn = {};

		if (null != aMap) {

			// Copy all of aMap into toReturn
			for (let k in aMap) {
				if (aMap.hasOwnProperty(k)) {
					toReturn[k] = aMap[k];
				}
			}

			// If there's a bMap, delete all bMap keys from aMap
			if (null != bMap) {
				for (let k in bMap) {
					if (bMap.hasOwnProperty(k)) {
						delete toReturn[k];
					}
				}
			}
		}

		return toReturn;
	}
}
