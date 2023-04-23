import { proxy } from "valtio";
import Logo from '../assets/logo_ML@2x.png.png';

const state = proxy({
    locations : [
        {p:'Argentina', c:'AR' },
        {p:'Bolivia', c:'BO' },
        {p:'Brasil', c:'BR' },
        {p:'Chile', c:'CL' },
        {p:'Colombia', c:'CO' },
        {p:'Costa Rica', c:'CR' },
        {p:'Dominicana', c:'DO' },
        {p:'Ecuador', c:'EC' },
        {p:'Guatemala', c:'GT' },
        {p:'Honduras', c:'HN' },
        {p:'México', c:'MX' }
      ],
    grid:["col-12 col-md-6"],
    images:[Logo]
});

export default state;