<?php   
class Sociaby_Socialoffers_Block_Offers extends Mage_Core_Block_Template{
	public function getSociabyId() {
		return Mage::getStoreConfig('offers/general/unique_id');
	}

	public function getSociabyProductsObjectArray() {
		$quote = Mage::getSingleton('checkout/session')->getQuote();
		$cartItems = $quote->getAllVisibleItems();

		$sociabyProductsObjectArray  = array(
		'items'  => array(), 
		'urls'   => array(), 
		'images' => array(), 
		'prices' => array()
		);

		
		foreach ($cartItems as $item) {
		    array_push($sociabyProductsObjectArray['items'], $item->getName());
		    array_push($sociabyProductsObjectArray['urls'], $item->getProduct()->getProductUrl());
		    $image = (string) $this->helper('catalog/image')->init($item->getProduct(), 'small_image');
		    array_push($sociabyProductsObjectArray['images'], $image);
		    array_push($sociabyProductsObjectArray['prices'], round($item->getPrice(),2));
		}
		
		return
			"var sociabyProductsObjectArray_{$this->getSociabyId()} = {$this->_je($sociabyProductsObjectArray)};";
	}
	private function _je( $o ) {
		return json_encode($o);
	}

}