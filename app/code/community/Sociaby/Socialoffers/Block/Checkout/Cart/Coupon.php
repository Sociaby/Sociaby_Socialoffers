<?php

class Sociaby_Socialoffers_Block_Checkout_Cart_Coupon extends Mage_Checkout_Block_Cart_Coupon {
	public function canRenderSociaby() {
		$uniqueId = Mage::getStoreConfig('offers/general/unique_id');
		return isset($uniqueId) && $uniqueId !== "";
	}
}