;(function($){

	$(function(){
		$(".ba-slider").slick({
			dots:true,
			infinite:false
		});

		var qtyField = $(".ba-product__qty-field"),
			qtyUp  = $(".ba-product__qty-up"),
			qtyDown  = $(".ba-product__qty-down");

		qtyUp.on("click", function(event){
			event.preventDefault();
			var oldVal = qtyField.val();

			qtyField.val(++oldVal);

		});

		qtyDown.on("click", function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			if(--oldVal > 0){
				qtyField.val(oldVal);
			}

		});

		var prodCol = $('[name="product_color"]');

		prodCol.on('change', function(){

			if($(this).val()==='black'){
				$('.headphones2').css('display', 'none');
				$('.headphones1').fadeIn('slow');
			}
			else{
				if($(this).val()==='grey'){
					$('.headphones1').css('display', 'none');
					$('.headphones2').fadeIn('slow');
				}
			}

		});

	});



})(jQuery);
