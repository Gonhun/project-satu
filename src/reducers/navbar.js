const initialMenu = {
    menu: [
        {
            id:'1',
            name: 'Dashboard',
            navIcon: 'DashboardIcon'
        },
        {
            id:'2',
            name: 'Report',
            navIcon: 'BarChartIcon'
        },
        {
            id:'3',
            name: 'Setting',
            navIcon: 'SettingIcon'
        }
    ]
}

function navbar (state = initialMenu) {
    return state;
}

export default navbar;
