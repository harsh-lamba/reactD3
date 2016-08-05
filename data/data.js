
class DataProvider {
    getMainMenuItems() {
        return [
            { 'id': 'home', 'label': 'Home', 'icon': '', 'icon': ''},
            { 'id': 'about', 'label': 'About us', 'icon': ''},
            { 'id': 'documents', 'label': 'Documents', 'icon': ''},
            { 'id': 'data', 'label': 'Download Data', 'icon': ''},
            { 'id': 'education', 'label': 'Education', 'icon': ''},
            { 'id': 'news', 'label': 'News', 'icon': ''},
            { 'id': 'join', 'label': 'Join The Index', 'icon': ''},
        ];
    }

    getFooterMenuItems() {
        return [
            { 'id': 'faq', 'label': 'FAQs', 'icon': ''},
            { 'id': 'privacy', 'label': 'Privacy Policy', 'icon': ''},
            { 'id': 'legal', 'label': 'Legal Terms', 'icon': ''}
        ];
    }

    getTopMenuItems() {
        return [
            { 'id': 'contact', 'label': '', 'icon': 'envelope'},
            {
                'id': 'loggedinuser',
                'label': '',
                'icon': 'user',
                'children': [
                    { 'id': 'profile', 'label': 'My Profile', 'icon': ''},
                    { 'id': 'logout', 'label': 'Logout', 'icon': ''},
                ]
            },
            { 'id': 'guestlogin', 'label': '', 'icon': 'Login / Sign up'}
        ];
    }
}

export default DataProvider;