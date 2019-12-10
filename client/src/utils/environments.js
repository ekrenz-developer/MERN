export const mode = process.env.MODE;
const development = process.env.DEVELOPMENT_ENV;
const production = process.env.PRODUCTION_ENV;

let environment;
switch(mode){
	case 'D':
		environment = development;
		break;

	case 'P':
		environment = production;
		break;

	default:
		environment = development;
		break;
}

environment = 'http://localhost:8080';

export default environment;
