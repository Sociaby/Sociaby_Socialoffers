<?php

class Sociaby_Socialoffers_Block_Tracker extends Mage_Core_Block_Template {
    public function getSociabyId() {
        return Mage::getStoreConfig('offers/general/unique_id');
    }
    public function canRender() {
	return Mage::getStoreConfig('offers/general/conversion_tracking') === 1;
    }
}
