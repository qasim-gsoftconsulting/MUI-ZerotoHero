import PeopleIcon from '@mui/icons-material/People';
import DnsIcon from '@mui/icons-material/Dns';
import PublicIcon from '@mui/icons-material/Public'
import InsertChartIcon from '@mui/icons-material/InsertChart';

export const mainNavbarItems = [

        {
     id:'1',
     icon:<PeopleIcon/>,
     label: 'Authentication',
     route: 'authentication',
    },
    {
        id:'2',
        icon: <InsertChartIcon/>,
        label: 'Database',
        route: 'database',
    },

    {
        id:'3',
        icon:<DnsIcon/>,
        label:'Storage' ,
        route: 'storage',
    },

    {
        id:'4',
        icon: <PublicIcon/>,
        label: 'Hosting',
        route: 'hosting',
    }

 ]

