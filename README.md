# Smart Home Web Frontend

## build with ReactJs

## start projekt

yarn && yarn start

## current functions:

- shows current temperature and air humidity and updates them every two minutes
- shows todays temperature data in a chart the data is fetched from the backend database

# install FSTP use port 22 on RespbarryPI

- sudo apt install vsftpd
- sudo nano /etc/vsftpd.conf
- replace content with:

anonymous_enable=NO

local_enable=YES

write_enable=YES

local_umask=022

chroot_local_user=YES

user_sub_token=$USER

local_root=/home/$USER/FTP

- mkdir -p /home/pi/FTP/files
- chmod a-w /home/pi/FTP
- sudo service vsftpd restart

## commands to move files in protected directory

- sudo cp -a /home/pi/FTP/files/. /var/www/html/
- service apache2 restart
