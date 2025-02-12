import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { MdFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { SiBurgerking } from "react-icons/si";
import { CiBowlNoodles } from "react-icons/ci";

const Cotegorie=[
    {
        id:1,
        name:"All",
        image:<TiThSmall className="w-[2rem] h-[2rem] text-yellow-500" />
    },
    {
        id:2,
        name:"breakfast",
        image:<MdFreeBreakfast className="w-[2rem] h-[2rem] text-yellow-500"/>
    },
    {
        id:3,
        name:"soups",
        image:<TbSoupFilled className="w-[2rem] h-[2rem] text-yellow-500"/>
    },
    {
        id:4,
        name:"pasta",
        image:<CiBowlNoodles className="w-[2rem] h-[2rem] text-yellow-500"/>
    },
    {
        id:5,
        name:"main_course",
        image:<MdFoodBank className="w-[2rem] h-[2rem] text-yellow-500"/>
    },
    {
        id:6,
        name:"pizza",
        image:<GiFullPizza className="w-[2rem] h-[2rem] text-yellow-500"/>
    },
    {
        id:7,
        name:"burger",
        image:<SiBurgerking className="w-[2rem] h-[2rem] text-yellow-500"/>
    },
]

export default Cotegorie;