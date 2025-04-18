fx_version 'cerulean'
game 'gta5'

author 'YourName'
description 'UJ License Manager - NUI UI to grant/revoke licenses'
version '1.1'

lua54 'yes'

shared_script {
    '@ox_lib/init.lua'
}


client_scripts {
	'client/**.lua',
}

server_scripts {
	'server/**.lua',
}

ui_page {
    'html/index.html',
}

files {
    'html/index.html',
    'html/style.css',
    'html/script.js'
}
