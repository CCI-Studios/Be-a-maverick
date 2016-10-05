<?php


$aliases['dev'] = array(
	'uri'=> 'maverick.ccistaging.com',
	'root' => '/home/staging/subdomains/maverick/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=>'-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'beamaverick.org',
	'root' => '/home/beamaverick/subdomains/live/public_html',
	'remote-host'=> 'host.cciserver2.com',
	'remote-user'=> 'beamaverick',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
);