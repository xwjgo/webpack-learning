import _ from 'lodash';
import '../dist/css/color.less';


function component () {
    let  element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'xuwenjiang', '||']);
    return element;
}

document.body.appendChild(component());