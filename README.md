Sociaby Social Discounts
=======================


What is it?
----------

###Reward your best customers with discounts for sharing your products.

[Sociaby](http://sociaby.com/) provides a small widget that offers users the option to share their purchase in exchange for a coupon code.
Our network tracks how valuable a tweet or share from a given user can be and allows you to adjust your discount offer accordingly.
Not only do you get social mentions at a much higher rate than passive share buttons, but you also prevent abandonment and save money on 
affiliate commissions by keeping users in your checkout flow rather than Googling for coupons. 

An account with Sociaby is required to use this extension. You can get more information and sign up for our free beta or a free trial at [sociaby.com](http://www.sociaby.com/).

Read more about us, [here](http://sociaby.com/about/)!

Installation
------------

Currently, there are three methods to install Sociaby:

 1. Install this module via Magento Connect. It should do most of the stuff for you.

 2. Install this module using [modman](https://github.com/colinmollenhour/modman)

   * `modman clone git://github.com/sociaby/Sociaby_Socialoffers` **OR**
   * `modman clone git@bitbucket.org:sociaby/Sociaby_Socialoffers.git`
   * Make sure you have installed [modman](https://github.com/colinmollenhour/modman) prior to this step.

 3. Install manually by:

   * [Downloading the tarball](http://www.google.com) and deflating it inside your Magento installation's root (where you can find index.php).
   * Via S/FTP by copying the `app/` directory inside the tarball into your Magento installation's root. Don't worry, you will not overwrite anything important.

If you can't seem to get to the pages mentioned in the **Configuration** section, please refer to the **Troubleshooting** section.


Configuration
-------------

 1. After installing the module, please do the usual rituals of clearing the cache, and logging out of admin before trying to configure.
 2. Go to `System -> Configuration` Page and find the `Sociaby` Tab there. 
 3. Enter your API key code obtainable from your [Sociaby](https://sociaby.com/login/) account. Save configuration.
 4. Clear the cache yet again to be sure.
 5. Done!


Troubleshooting
---------------


#### Why can't I see the admin page to configure the extension?

Make sure you clear Magento's cache (either by deleting the contents of `var/cache` or via Magento admin (System > Cache Management). If you're already logged in into the administration pages, please logout, and log in back again.

#### The Sociaby share widget seems missing from the checkout/cart page? It should be displayed on top of the coupon code input box, right?

Yes, that should be right. There are a couple of reasons why this could happen:

 * You haven't configured your app yet. [Login](https://sociaby.com/login/) to your app and configure your first coupon code.
 * You probably customized your discount/coupon code box lately and haven't changed your configuration yet. 
 * You're probably working from localhost / any development site that isn't visible in the interwebs. Try it on a staging environment perhaps?

If your problems persist, please do not hesitate to [contact us](http://sociaby.com/contact/). Give us a shout.  We'd love to hear from you!



