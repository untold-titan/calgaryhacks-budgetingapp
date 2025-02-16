/** @type {import('./$types').LayoutLoad} */
import { FBAPIKEY, FBAUTHDOMAIN, FBPROJID, FBSTORAGEBUCKET, FBAPPID } from '$env/static/private';
export async function load() {
    // Grab Firebase Tokens and stuff
    return {
        firebaseKeys:{
            apikey: FBAPIKEY, 
            authdomain: FBAUTHDOMAIN, 
            projid: FBPROJID, 
            bucket: FBSTORAGEBUCKET, 
            appid: FBAPPID
        }
    };
}