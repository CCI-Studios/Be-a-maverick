<?php 
function maverick_preprocess_page(&$vars) {
  if (drupal_is_front_page()) {          
   unset($vars['page']['content']['system_main']['default_message']); //will remove message "no front page content is created"       
    drupal_set_title(''); //removes welcome message (page title)
  }
}

function maverick_form_alter(&$form, $form_state, $form_id) {
	if (commerce_form_callback($form_id, $form_state) == "commerce_cart_add_to_cart_form") {

		//$form['submit']['#attributes']['title'] = $form['submit']['#attributes']['value'] = t('Buy Now');
	}

	if($form_id == "commerce_checkout_form_checkout") {
	
		
		$form['customer_profile_billing']['commerce_customer_address']['und'][0]['country']['#weight'] = 100000;
		
		$form['Heading'] = array(
		'#markup' => '<h2>Get<br><strong>Yours</strong></h2>',
		'#weight' => 0
		); 
	}

	if($form_id == "commerce_cart_add_to_cart_form_8_7_6_9_10") {
	
		$form['Heading'] = array(
		'#markup' => '<div class="form-item price"><label>Price</label>60 CAD<br><span>Includes shipping and taxes</span></div>',
		'#weight' => 0
		); 
	}

	if($form_id == "commerce_checkout_form_review") {
	
		$form['customer_profile_billing']['commerce_customer_address']['und'][0]['country']['#weight'] = 100000;
	}
}