import axios from "axios";
import { RelayControllUrl } from '../../urls'

export const writeRelayHigh = () => {
    try {
        axios.get(RelayControllUrl + '/relayHigh')
    } catch (error) {
        console.log('Error in writeRelayHigh: ', error);
    }
}

export const writeRelayLow = () => {
    try {
        axios.get(RelayControllUrl + '/relayLow')
    } catch (error) {
        console.log('Error in writeRelayLow: ', error);
    }
}
