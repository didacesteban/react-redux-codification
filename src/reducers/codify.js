import {codify} from '../managers/codify';
export default function (state = null, action) {
    switch (action.type) {
        case 'CODIFY_TEXT':
          return codify(action.payload);
    }
    return state;
}
