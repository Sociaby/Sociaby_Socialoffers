<?php

class Sociaby_Socialoffers_Block_Offers extends Mage_Core_Block_Template {
    public function getSociabyId() {
        return Mage::getStoreConfig('offers/general/unique_id');
    }
}
