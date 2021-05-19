import CardHelper from "../UI/Helpers/CardHelper/CardHelper";
import data from '../../assets/data/roomInfo'
import logo from '../../assets/img/1.jpeg';


const BaieCard = () => {
    // let title = 'ddsadsada';
    // let desc = 'dsadas as dsad asd dasd asd asda dasdasd asdas';
    // let path = '/'

   let results =  data.map((item) => {
            const {title, desc} = item;
            return <CardHelper title={title} desc={desc} ></CardHelper>
        })
    return {results}

    // return <CardHelper title={title} desc={desc} path={title} img={logo}></CardHelper>
}
export default BaieCard;
