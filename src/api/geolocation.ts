import axios from "../utils/axios";

export const fetchLocation = async (locationName: string) => {
  try {
    const res = await axios.get('/geo/1.0/direct', {
      params: { q: locationName }
    });
    return res;
  } catch(err) {
    console.log('Failed to fetch location:', err);
    return { status: false, data: [] };
  }
}
