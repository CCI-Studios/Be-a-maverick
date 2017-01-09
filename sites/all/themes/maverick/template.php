<?php 
function maverick_preprocess_page(&$vars) {
  if (drupal_is_front_page()) {          
    unset($vars['page']['content']['system_main']['default_message']); //will remove message "no front page content is created"       
    drupal_set_title(''); //removes welcome message (page title)
  }

   if(arg(0) == 'checkout' && is_numeric(arg(1)) && arg(2) == 'review'){

   	drupal_set_title('Payment');

   }

   if(arg(0) == 'checkout' && is_numeric(arg(1)) && !arg(2)){

   	drupal_set_title('Get Yours');

   }

   if(arg(0) == 'checkout' && is_numeric(arg(1)) && arg(2) == 'complete'){

   	drupal_set_title('Order Complete');

   }   
}


function maverick_form_alter(&$form, $form_state, $form_id) {

	if($form_id == "commerce_checkout_form_checkout") {

		$form['customer_profile_billing']['commerce_customer_address']['und'][0]['country']['#weight'] = 100000;
	
	}
	if($form_id == "commerce_cart_add_to_cart_form_11") {
		$form['Heading_size'] = array(
		'#markup' => '<div class="form-item size"><label>Size</label>One size(fitted)</div>',
		'#weight' => 10
		); 
		$form['Heading_price'] = array(
		'#markup' => '<div class="form-item price"><label>Price</label>25 CAD<br><span>Plus 15 CAD shipping and taxes</span></div>',
		'#weight' => 10
		); 
	}
	
	if($form_id == "commerce_cart_add_to_cart_form_8_7_6_9_10") {
	
		$form['Heading'] = array(
		'#markup' => '<div class="form-item price"><label>Price</label>40 CAD<br><span>Plus 15 CAD shipping and taxes</span></div>',
		'#weight' => 10
		); 
	}

	if($form_id == "commerce_checkout_form_review") {
	
		$form['customer_profile_billing']['commerce_customer_address']['und'][0]['country']['#weight'] = 100000;
	}
}

