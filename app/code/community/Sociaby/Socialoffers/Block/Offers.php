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

			$parentIds = Mage::getModel('catalog/product_type_configurable')
							->getParentIdsByChild(
									$item
										->getProduct()
										->getId()
							);

		    array_push($sociabyProductsObjectArray['items'], $item->getName());
		    array_push($sociabyProductsObjectArray['urls'], 

		    	(empty($parentIds)) ?
		    		$item->getProduct()->getProductUrl() :
		    		Mage::getModel('catalog/product')->load(is_array($parentIds) ? $parentIds[0] : $parentIds)->getProductUrl()
		    );
		    
		    $image = (string) $this->helper('catalog/image')->init($item->getProduct(), 'thumbnail')->resize(150, 150);
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
