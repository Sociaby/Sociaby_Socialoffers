#!/bin/sh

# integration tests todo:
# MUST have predefined TEST environment. As we don't have a portable PHP server solution yet.
# TEST environment conditions:
# > preconfigured in NGINX
# > preconfigured URL
# > premade fresh install git repo (reset to HEAD)
# > reset database
# > install this module (must be via modman)
# > run PhantomJS on preconfigured URL.

readonly TEST_URL=http://magen.to/
readonly TEST_DIR=/home/electricjesus/projects/magento/magento/
readonly MYSQL_USR=magento
readonly MYSQL_PWD=magento
#readonly MODMAN_MODULE=git@bitbucket.org:electricjesus/Sociaby_Socialoffers.git
readonly MODMAN_MODULE=localhost:/bare-repos/sociaby
readonly HEADLESS_TESTER=casperjs  #supported: casperjs, phantomjs. write your test js accordingly.
WDIR=`pwd`

if [ `which $HEADLESS_TESTER | wc -l` -eq 0 ]; then
    echo "casperjs does not exist. Please install it first! http://casperjs.org/installation.html"
    exit 0
fi

echo "Preparing test environment ..";
echo Test URL: $TEST_URL;
echo Test DIR: $TEST_DIR;
cd $TEST_DIR;
git clean -fd
echo "Resetting database .. ";
gunzip -c sql/fresh-install.sql.gz | mysql -u$MYSQL_USR -p$MYSQL_PWD
echo "Modman initialization"
modman init
echo "Installing module via modman"
modman clone $MODMAN_MODULE
echo "Invoking module boostrap by loading app"
wget -O /dev/null $TEST_URL
echo "Test env preparation done."
echo "================================================"
echo "Now for the good part.. Running the tests!"
echo "================================================"
cd $WDIR
casperjs integration/*.js
echo "Done. Please refer to the above PhantomJS/CasperJS report."
