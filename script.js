jQuery(document).ready(function($){
    console.log("Begin");
    $("#hideGuide").on("click", function(){
      $(".columnRight-container").slideToggle(250);
    });
    
    $("#showGuide").on("click", function(){
      $(".columnRight-container").toggle();
    });

    $(".transitionMetalsKey").hover(function(){
        $(".transitionMetals").toggleClass("elementHover");
        console.log("Transition Metals Activated");
    })

    $(".alkaliMetalKey").hover(function(){
        $(".alkaliMetals").toggleClass("elementHover");
        
    })

    $(".lanthanidesKey").hover(function(){
        $(".lanthanides").toggleClass("elementHover");
        
    })

    $(".actinoidsKey").hover(function(){
        $(".actinoids").toggleClass("elementHover");
        
    })

    $(".othersKey").hover(function(){
        $(".others").toggleClass("elementHover");
        
    })

    $(".alkalineMetalKey").hover(function(){
        $(".alkalineMetals").toggleClass("elementHover");
        
    })

    $(".metalloidsKey").hover(function(){
        $(".metalloids").toggleClass("elementHover");
        
    })

    $(".nonMetalsKey").hover(function(){
        $(".nonMetals").toggleClass("elementHover");
        
    })

    $(".othersKey").hover(function(){
        $(".others").toggleClass("elementHover");
        
    })

    $(".metalKey").hover(function(){
        $(".metals").toggleClass("elementHover");
        
    })

    $(".nobleKey").hover(function(){
        $(".noblegas").toggleClass("elementHover");
        
    })

    $(".halideKey").hover(function(){
        $(".halide").toggleClass("elementHover");
        
    })

    $(".GR1").hover(function(){
        $(".gr1").toggleClass("elementHover");
        console.log("Gr1 highlight");
    })

    $('.hydrogenDetails').hide();
    $('.heliumDetails').hide();

    $(".closeDetails").on("click", function(){
        $(".hydrogenDetails").fadeOut();
    })

    $(".HydrogenElement").on("click", function(){
        $(".hydrogenDetails").fadeIn();
        
    })

    $(".heliumElement").on("click", function(){
        $(".heliumDetails").fadeIn();
        
    })

    $(".closeDetails").on("click", function(){
        $(".heliumDetails").fadeOut();
    })
    
    

    /*$(".row.guide-row").hover(function(e){
        var x = $(e.target).data('activation')

        $("." + x).toggleClass("elementHover");       
        console.log()
    })

   */
    
});