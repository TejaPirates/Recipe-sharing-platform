



function planmeal(){
    const mealno = Number(document.getElementById("no-of-meals").value)
    const calor_no = Number(document.getElementById("calories").value)
    
    
    let nnveg = radiobtn()
    

    if (calor_no < (Number(mealno)*200))
    {
        alert('Calories should be greater than '+Number(mealno)*200+' kcal')
    }
    
    else if (mealno == 0 || calor_no == 0)
    {
        alert('All fields are required')
    }
    
    else if (nnveg == 'None'){
        alert('Select Whether you are vegetarian or not')
    }
    else{
        

        let m_div = document.getElementById('dummy-cont-1')
        displaynone()
        cleardiv()
        
        m_div.style = "display: flex;"
        let t_kcal = 0
        for (let i = 0;i<mealno;i++){
            if(i==0){
                let results_b = meal_planning_breakfast(calor_no,mealno)
                document.getElementById('breakfast').style = 'display: flex;'
                while (true){
                    if (results_b === undefined)
                        results_b = meal_planning_breakfast(calor_no,mealno)
                    else break
                }
                let kcal = display_breakfast(results_b)
                t_kcal += kcal
                
            }
            else if(i==1){
                let results_l = meal_planning_lunch(calor_no,mealno)
                document.getElementById('lunch').style = 'display: flex;'
                while (true){
                    if (results_l === undefined)
                        results_l = meal_planning_lunch(calor_no,mealno)

                    else break
                    
                    
                }
                
                let kcal = display_lunch(results_l)
                t_kcal += kcal
                
            }
            else if(i==2){
                let result_d = meal_planning_dinner(calor_no,mealno)

                document.getElementById('dinner').style = 'display: flex;'
                while (true){
                    if (result_d === undefined)
                        result_d = meal_planning_dinner(calor_no,mealno)
                    else break
                }
                let kcal = display_dinner(result_d)
                t_kcal += kcal
            }
            else if (i==3){
                let results_l = meal_planning_snacks(calor_no,mealno)
                document.getElementById('snacks-2').style = 'display: flex;'
                while (true){
                    if (results_l === undefined)
                        results_l = meal_planning_snacks(calor_no,mealno)
                    else break
                }
                console.log(results_l)
                let kcal = display_snacks_2(results_l)
                t_kcal += kcal
            }
            else if (i==4){
                let results_l = meal_planning_snacks(calor_no,mealno)
                document.getElementById('snacks-1').style = 'display: flex;'
                while (true){
                    if (results_l === undefined)
                        results_l = meal_planning_snacks(calor_no,mealno)
                    else break
                }
                console.log(results_l)
                let kcal = display_snacks_1(results_l)
                t_kcal += kcal
            }
        }
        console.log(t_kcal)
        document.getElementById('total-kcal').innerHTML ='Total Calories: '+t_kcal + ' Kcal'
    }
}

function display_breakfast(results_b){
    
    
    if (typeof(results_b[0]) == 'string'){
        
        let b1 = document.getElementById('b-dish-name-1')
        let c1 = document.getElementById('b-dish-calor-1')
        b1.innerHTML = results_b[0]
        c1.innerHTML = results_b[1]+' kcal'
        document.getElementById('b-dish-qty-1').innerHTML = '1 Qty'
        let t_kcal = Number(results_b[1])
        console.log(t_kcal)
        return t_kcal

    }
    else{
        if (results_b[0][0] == results_b[1][0]){
            let b1 = document.getElementById('b-dish-name-1')
            let c1 = document.getElementById('b-dish-calor-1')
            document.getElementById('b-dish-qty-1').innerHTML = '2 Qty'
            b1.innerHTML = results_b[0][0]  
            c1.innerHTML = results_b[0][1] * 2+' kcal'
            let t_kcal = Number(results_b[0][1]*2)
            return t_kcal
        
        }
        else{


            let b1 = document.getElementById('b-dish-name-1')
            let c1 = document.getElementById('b-dish-calor-1')
            document.getElementById('b-dish-qty-1').innerHTML = '1 Qty'
            document.getElementById('b-dish-qty-2').innerHTML = '1 Qty'
            b1.innerHTML = results_b[0][0]
            c1.innerHTML = results_b[0][1]+' kcal'
            let b2 = document.getElementById('b-dish-name-2')
            let c2 = document.getElementById('b-dish-calor-2')
            b2.innerHTML = results_b[1][0]
            c2.innerHTML = results_b[1][1]+' kcal'
            let t_kcal = Number(results_b[1][1]) + Number(results_b[0][1])
            return t_kcal
        }
    
    }
    
}

function display_lunch(results_l){

    
    
    if (typeof(results_l[0]) == 'string'){
        let b1 = document.getElementById('l-dish-name-1')
        let c1 = document.getElementById('l-dish-calor-1')
        b1.innerHTML = results_l[0]
        c1.innerHTML = results_l[1]+' kcal'
        document.getElementById('l-dish-qty-1').innerHTML = '1 Qty'
        let t_kcal = Number(results_l[1])
        return t_kcal

    }
    else{
        if (results_l[0][0] == results_l[1][0]){
            let b1 = document.getElementById('l-dish-name-1')
            let c1 = document.getElementById('l-dish-calor-1')
            document.getElementById('l-dish-qty-1').innerHTML = '2 Qty'
            b1.innerHTML = results_l[0][0]  
            c1.innerHTML = results_l[0][1] * 2+' kcal'
            let t_kcal = Number(results_l[0][1]*2)
            return t_kcal
        }
        else{


            let b1 = document.getElementById('l-dish-name-1')
            let c1 = document.getElementById('l-dish-calor-1')
            document.getElementById('l-dish-qty-1').innerHTML = '1 Qty'
            document.getElementById('l-dish-qty-2').innerHTML = '1 Qty'
            b1.innerHTML = results_l[0][0]
            c1.innerHTML = results_l[0][1]+' kcal'
            let b2 = document.getElementById('l-dish-name-2')
            let c2 = document.getElementById('l-dish-calor-2')
            b2.innerHTML = results_l[1][0]
            c2.innerHTML = results_l[1][1]+' kcal'
            let t_kcal = Number(results_l[1][1]) + Number(results_l[0][1])
            return t_kcal
        }
    
    }

}
function display_dinner(results_d){
    if (typeof(results_d[0]) == 'string'){
        console.log(results_d)
        let b1 = document.getElementById('d-dish-name-1')
        let c1 = document.getElementById('d-dish-calor-1')
        b1.innerHTML = results_d[0]
        c1.innerHTML = results_d[1]+' kcal'
        document.getElementById('d-dish-qty-1').innerHTML = '1 Qty'
        let t_kcal = Number(results_d[1])
        return t_kcal

    }
    else{
        if (results_d[0][0] == results_d[1][0]){
            let b1 = document.getElementById('d-dish-name-1')
            let c1 = document.getElementById('d-dish-calor-1')
            document.getElementById('d-dish-qty-1').innerHTML = '2 Qty'
            b1.innerHTML = results_d[0][0]  
            c1.innerHTML = results_d[0][1] * 2+' kcal'
            let t_kcal = Number(results_l[0][1]*2)
            return t_kcal
        }
        else{


            let b1 = document.getElementById('d-dish-name-1')
            let c1 = document.getElementById('d-dish-calor-1')
            document.getElementById('d-dish-qty-1').innerHTML = '1 Qty'
            document.getElementById('d-dish-qty-2').innerHTML = '1 Qty'
            b1.innerHTML = results_d[0][0]
            c1.innerHTML = results_d[0][1]+' kcal'
            let b2 = document.getElementById('d-dish-name-2')
            let c2 = document.getElementById('d-dish-calor-2')
            b2.innerHTML = results_d[1][0]
            c2.innerHTML = results_d[1][1]+' kcal'
            let t_kcal = Number(results_d[1][1]) + Number(results_d[0][1])
            return t_kcal
        }
    
    }

}

function display_snacks_2(results_l){

    
    
    if (typeof(results_l[0]) == 'string'){
        let b1 = document.getElementById('s2-dish-name-1')
        let c1 = document.getElementById('s2-dish-calor-1')
        b1.innerHTML = results_l[0]
        c1.innerHTML = results_l[1]+' kcal'
        document.getElementById('s2-dish-qty-1').innerHTML = '1 Qty'
        let t_kcal = Number(results_l[1])
        return t_kcal

    }
    else{
        if (results_l[0][0] == results_l[1][0]){
            let b1 = document.getElementById('s2-dish-name-1')
            let c1 = document.getElementById('s2-dish-calor-1')
            document.getElementById('s2-dish-qty-1').innerHTML = '2 Qty'
            b1.innerHTML = results_l[0][0]  
            c1.innerHTML = results_l[0][1] * 2+' kcal'
            let t_kcal = Number(results_l[0][1]*2)
            return t_kcal
        }
        else{


            let b1 = document.getElementById('s2-dish-name-1')
            let c1 = document.getElementById('s2-dish-calor-1')
            document.getElementById('s2-dish-qty-1').innerHTML = '1 Qty'
            document.getElementById('s2-dish-qty-2').innerHTML = '1 Qty'
            b1.innerHTML = results_l[0][0]
            c1.innerHTML = results_l[0][1]+' kcal'
            let b2 = document.getElementById('s2-dish-name-2')
            let c2 = document.getElementById('s2-dish-calor-2')
            b2.innerHTML = results_l[1][0]
            c2.innerHTML = results_l[1][1]+' kcal'
            let t_kcal = Number(results_l[1][1]) + Number(results_l[0][1])
            return t_kcal
        }
    
    }

}

function display_snacks_1(results_l){

    
    
    if (typeof(results_l[0]) == 'string'){
        let b1 = document.getElementById('s1-dish-name-1')
        let c1 = document.getElementById('s1-dish-calor-1')
        b1.innerHTML = results_l[0]
        c1.innerHTML = results_l[1]+' kcal'
        document.getElementById('s1-dish-qty-1').innerHTML = '1 Qty'
        let t_kcal = Number(results_l[1])
        return t_kcal

    }
    else{
        if (results_l[0][0] == results_l[1][0]){
            let b1 = document.getElementById('s1-dish-name-1')
            let c1 = document.getElementById('s1-dish-calor-1')
            document.getElementById('s1-dish-qty-1').innerHTML = '2 Qty'
            b1.innerHTML = results_l[0][0]  
            c1.innerHTML = results_l[0][1] * 2 +' kcal'
            let t_kcal = Number(results_l[0][1]*2)
            return t_kcal
        }
        else{


            let b1 = document.getElementById('s1-dish-name-1')
            let c1 = document.getElementById('s1-dish-calor-1')
            document.getElementById('s1-dish-qty-1').innerHTML = '1 Qty'
            document.getElementById('s1-dish-qty-2').innerHTML = '1 Qty'
            b1.innerHTML = results_l[0][0]
            c1.innerHTML = results_l[0][1]+' kcal'
            let b2 = document.getElementById('s1-dish-name-2')
            let c2 = document.getElementById('s1-dish-calor-2')
            b2.innerHTML = results_l[1][0]
            c2.innerHTML = results_l[1][1]+' kcal'
            let t_kcal = Number(results_l[1][1]) + Number(results_l[0][1])
            return t_kcal
        }
    
    }

}






function radiobtn(){
    let radio = document.getElementsByClassName('vegetarian')
    let c = 0
    for (var r of radio)
    {
        if (r.checked) {
            c+=1
            return r.value}
    }
    if(c == 0)
    {return 'None'}
}

function meal_planning_breakfast(calor_no,mealno){
    let breakfast_v100 = ['Banana and Honey','Beans on toast','Apple','Jumbo oats with blueberries']
    let breakfast_n100 = ['Italian Eggs','Ham omelette','Spinach omelette',
    'Scrambled egg and mushroom'] 
    let breakfast_n150 = ['Baked Spinach and eggs','Scrambled egg and Sausage Wrap',
    'Veggie Omelet']
    let breakfast_v150 = ['Buttermilk Pancake','Fried Corn with Bacon','Skinny Mini Banana Muffins',
    'Tropical Fruit Salad']
    let breakfast_200 = ['Protien Waffles','Cheesy Veggie Bake','Peach Mango Orange Smoothie',
    'Oat & Cottage pancakes']
    let breakfast_va200 = ['French Toast with Fruit','Dried Fruit and Almond Granola','Garlic and Onion Frittata',
    'Sweet Potato and Mushroom Hash','Simple Vegan Date Bars','Pumpkin Granoda','Bluewheat Groats with Milk',
    'Simple Spinach Scramble','Oatmeal and raisins','Vegan Banana OatSoy Shake','Chai Pudding',
    'Banana and Strawberry Wrap','Tofu Scramble','Cold Flax Oatmeal','Cherry Fridge Oats','Cinnamon Apple Oatmeal',
    'Huevos Pericos','Morning Fruity Protien Shake','Bacon Weave Open Sandwich','Museli','Cranberry and Energizing Oatmeal'
    ,'Chocolate Overnight Oats','Berry Soymilk Smoothie','Bacon and Swiss Quiche','Pomogranete Muesli','Bleuberry Chai Seed Pudding',
    'Coconut Cinnamon Muesli','Banana Bruschetta','Overnight Chai Pudding','Banana and Cashey Cream Smoothie',
    'Ricotta Blueberry Pancakes','Dairy Free Berry Banana Chia Yogurt'

    ]

    
    let breakfast_kcal = {'Beans on toast':97,'Banana and Honey':99,'Cinnamon toast':120,
                'Pear Green Smoothie':122,
                'Apple':95,'Vegan Cookies':140,'Jumbo oats with blueberries':100,
                'Straberry Oatmeal Breakfast Smoothie':192,'Ham omelette':97,
                'Spinach omelette':94,'Scrambled egg and mushroom':96,
                'Italian Eggs':103,'Baked Spanich and eggs':145,
                'Scrambled egg and Sausage Wrap':144,'Veggie Omelet':149,'Buttermilk Pancake':149,
                'Fried Corn with Bacon':142,'Skinny Mini Banana Muffins':151,'Tropical Fruit Salad':153,'Protien Waffles':195,
                'Cheesy Veggie Bake':194,'Peach Mango Orange Smoothie':197,'Oat & Cottage pancakes':199,
                'French Toast with Fruit':210 ,'Dried Fruit and Almond Granola':220,'Garlic and Onion Frittata':216,
                'Sweet Potato and Mushroom Hash':226,'Simple Vegan Date Bars':231,'Pumpkin Granoda':236,
                'Bluewheat Groats with Milk':246,'Simple Spinach Scramble':252,'Oatmeal and raisins':259,
                'Vegan Banana OatSoy Shake':266,'Chai Pudding':270,'Banana and Strawberry Wrap':274,'Tofu Scramble':280,
                'Cold Flax Oatmeal':285,'Cherry Fridge Oats':291,'Cinnamon Apple Oatmeal':296,'Huevos Pericos':301,
                'Morning Fruity Protien Shake':325,'Cream of Wheat':326,'Bacon Weave Open Sandwich':327,'Museli':349,
                'Cranberry and Energizing Oatmeal':351,'Chocolate Overnight Oats':348,'Berry Soymilk Smoothie':372,
                'Bacon and Swiss Quiche':374,'Almond-Crusted Keto Quiche':376,
                'Bleuberry Chai Seed Pudding':404,'Coconut Cinnamon Muesli':422,'Banana Bruschetta':428,
                'Overnight Chai Pudding':449,'Banana and Cashey Cream Smoothie':451,'High Protien Banana Oatcake':473,
                'Mango Smoothie Bowl':476,'Ricotta Blueberry Pancakes':501,'Dairy Free Berry Banana Chia Yogurt':503
                }
            
    let a_bcalor = Math.floor(calor_no/mealno)
    
    s = false
    
    if (radiobtn() == 1 && (a_bcalor <=110 && a_bcalor >= 90))
    {
        let b_dish = breakfast_v100[Math.floor(Math.random()*(breakfast_v100.length))]
        let calories_b = breakfast_kcal[b_dish]
    
        return [b_dish,calories_b]
    }
    if (radiobtn() == 2 && (a_bcalor <=110 && a_bcalor >= 90))
    {
        let b_dish = breakfast_n100[Math.floor(Math.random()*(breakfast_n100.length))]
        let calories_b = breakfast_kcal[b_dish]
   
        return [b_dish,calories_b]
    }
    if (radiobtn() == 1 && (a_bcalor <=160 && a_bcalor >=140))
    {
        let b_dish = breakfast_v150[Math.floor(Math.random()*(breakfast_v150.length))]
        let calories_b = breakfast_kcal[b_dish]

        return [b_dish,calories_b]
    }
    if (radiobtn() == 2 && (a_bcalor <=160 && a_bcalor >=140))
    {
        let b_dish = breakfast_n150[Math.floor(Math.random()*(breakfast_n150.length))]
        let calories_b = breakfast_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if ((a_bcalor <=210 && a_bcalor >=190))
    {
        let b_dish = breakfast_200[Math.floor(Math.random()*(breakfast_200.length))]
        let calories_b = breakfast_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if (a_bcalor>210){
        
        let closest =findClosest2 (breakfast_va200,breakfast_kcal,a_bcalor)
        let r_no = Math.floor(Math.random()*2)
        let closest_cal = closest[1][r_no]
        let c_dish = closest[0][r_no]
        if (a_bcalor <=closest_cal+10 && a_bcalor>=closest_cal-10){
            return [c_dish,closest_cal]
            
        }
        else{
            s=true
        }
    }
    if ( a_bcalor>210 && s)
    {
        let breakfast_list = breakfast_v100.concat(breakfast_v150.concat(breakfast_200.concat(breakfast_va200)))
        let l = return_value_cal(breakfast_list,breakfast_kcal,a_bcalor)
        return l  
    }
}

function meal_planning_lunch(calor_no,mealno)
{
    //Assigning Lists of Lunch
    let lunch_v100 =['Cabbage Cucumber Salad','Lebanese Tomata and Onion Salad','Veggies with Hummus']
    let lunch_n100 = ['Baked Bluefish','Chicken Kebabs','Italian Meatballs']
    let lunch_v125 = ['Crockpot Pinto Beans','Rajas Con Queso','Pan Fried Broccoli']
    let lunch_n125 = ['Chicken Muffins','Cilantro Lime Grilled Shrimp',]
    let lunch_v150 = ['Turkey and Avocardo Wrap','Tomato Basil Layered Salad','Pineapple,Blueberry,Bran Parfait','Cabbage Fried Rice']
    let lunch_n150 = ['Zucchini Scramble','Sweet Potato and Tuna patties','Baked Chicken Breast','Sweet and Spicy Drumsticks']
    let lunch_v175 = ['Easy Spinach and Scallicon Salad','Sprout Salad','Margherita Pizza 1 slice (107g)']
    let lunch_n175 = ['Yakitori Chicken','Grilled Salmon with Ginger','Plani Tuna Salad']
    let lunch_v200 = ['Cheesy Veggie Bake','Hummus on Rye','Cream cheese and sasla pinwheels','Mozzarella Tortilla Pizza']
    let lunch_n200 = ['Korean Grilled Chicken Breast','Tuna Melt Patties','Ginger Salmon','Ginger-Lime Grilled Shrimp']
    let lunch_vg200 =['French Toast with Fruit','Dried Fruit and Almond Granola','Garlic and Onion Frittata',
    'Sweet Potato and Mushroom Hash','Simple Vegan Date Bars','Pumpkin Granoda','Bluewheat Groats with Milk',
    'Simple Spinach Scramble','Oatmeal and raisins','Vegan Banana OatSoy Shake','Chai Pudding',
    'Banana and Strawberry Wrap','Tofu Scramble','Cold Flax Oatmeal','Cherry Fridge Oats','Cinnamon Apple Oatmeal',
    'Huevos Pericos','Morning Fruity Protien Shake','Bacon Weave Open Sandwich','Museli','Cranberry and Energizing Oatmeal'
    ,'Chocolate Overnight Oats','Berry Soymilk Smoothie','Bacon and Swiss Quiche','Pomogranete Muesli','Bleuberry Chai Seed Pudding',
    'Coconut Cinnamon Muesli','Banana Bruschetta','Overnight Chai Pudding','Banana and Cashey Cream Smoothie',
    'Ricotta Blueberry Pancakes','Dairy Free Berry Banana Chia Yogurt'

    ]




    let lunch_ng200 = ['Cowboy Chicken','Fennel Pork Chops','Thai bazil Chicken','Lemoh Herb Chicken',
                    'Hot and Spicy Tofu','Buffallo Chicken Meatballs','Spicy Lime Chicken','Creamy Chicken Breast',
                    'Garlic Chicken','Honey Sriracha Salmon','Cranberry Sauce Chicken','Grilled Lemongrass Beef',
                    'Jamaican Spiced Chicken','Lemon with Herb Talapia','Honey Mustard Chicken','Dill Poached Salmon',
                    'Breaded Salmon','Chicken Strips','Paleo Turkey Burgers','Healthy Sesame Chicken','Caprese chicken',
                    'Carnitas','Coconut Pecan Chicken','Mango ginger salmon','Tuna with Avocado','Brown Sugar Salmon',
                    'Easy Baked Fish','Baked Pesto Chicken','Cola chicken','Garlic stuffed Roast','Cottage Cheese Tuna Salad',
                    'Beef with cumin','Romano Chicken','Cola chicken','Apricot Chicken Breast','Easy Sauteed Salmon',
                    'Chicken Fajitas','Rib Eye Steak','Baked chicken nuggets','Cola Chops','Curry Chicken',
                    'Beef and Bulgur Burger','Skinny Orange chicken','Beef and bean Chilli','Tilapia Fromage','Chick,\en Alfredo'


                    ]






    let lunch_kcal = {'Baked Bluefish':98,'Chicken Kebabs':96,'Italian Meatballs':101,'Cabbage Cucumber Salad':104,'Lebanese Tomata and Onion Salad':103,'Veggies with Hummus':97,
                'Bell Pepper and Hummus Snacks':101,'Meditteranean Salad':101,'Crockpot Pinto Beans':127,
                'Italian Meatballs':101,'Cilantro Lime Grilled Shrimp':127,'Sweet Potato and Tuna patties':151,
                'Baked Chicken Breast':153,'Sweet and Spicy Drumsticks':149,
                'Rajas Con Queso':123,'Chicken Muffins':126,'Pan Fried Broccoli':124,'Olive Hummins with Carrots':126,
                'Turkey and Avocardo Wrap':147,'Mixed Greans With Slices Cucumber and Avocardo':149,
                'Easy Spinach and Scallicon Salad':175,'Sprout Salad':176,'Tomato Basil Layered Salad':173,
                'Pineapple,Blueberry,Bran Parfait':148,'Zucchini Scramble':148,'Small egg Cabbage Fried Rice':175,
                'Yakitori Chicken':174,'Grilled Salmon with Ginger':177,'Plani Tuna Salad':178,
                'Korean Grilled Chicken Breast':198,'Tuna Melt Patties':199,'Ginger Salmon':202,
                'Ginger-Lime Grilled Shrimp':201,'Margherita Pizza 1 slice (107g)':173,'Cheesy Veggie Bake':198,
                'Cream cheese and sasla pinwheels':205,'Hummus on Rye':203,'Mozzarella Tortilla Pizza':196,'Cowboy Chicken':206,
                'Fennel Pork Chops':206,'Thai bazil Chicken':210,'Lemoh Herb Chicken':211,'Hot and Spicy Tofu':215,
                'Buffallo Chicken Meatballs':217,'Spicy Lime Chicken':220,'Creamy Chicken Breast':221,'Garlic Chicken':225,
                'Honey Sriracha Salmon':227,'Cranberry Sauce Chicken':231,'Grilled Lemongrass Beef':232,'Jamaican Spiced Chicken':235,
                'Lemon with Herb Talapia':241,'Honey Mustard Chicken':246,'Dill Poached Salmon':250,'Breaded Salmon':255,
                'Chicken Strips':261,'Paleo Turkey Burgers':266,'Healthy Sesame Chicken':269,'Caprese chicken':275,
                'Carnitas':280,'Coconut Pecan Chicken':286,'Mango ginger salmon':291,'Tuna with Avocado':296,'Brown Sugar Salmon':302,
                'Easy Baked Fish':301,'Baked Pesto Chicken':311,'Garlic stuffed Roast':321,'Cottage Cheese Tuna Salad':325,'Beef with cumin':330,
                'Romano Chicken':341,'Cola chicken':352,'Apricot Chicken Breast':350,'Easy Sauteed Salmon':363,'Chicken Fajitas':371,
                'Rib Eye Steak':379,'Baked chicken nuggets':391,'Curry Chicken':399,'Cola Chops':401,
                'Beef and Bulgur Burger':424,'Skinny Orange chicken':427,'Beef and bean Chilli':449,'Tilapia Fromage':451,
                'Chicken Alfredo':474,'Garlic Scallops':502,'French Toast with Fruit':210 ,'Dried Fruit and Almond Granola':220,'Garlic and Onion Frittata':216,
                'Sweet Potato and Mushroom Hash':226,'Simple Vegan Date Bars':231,'Pumpkin Granoda':236,
                'Bluewheat Groats with Milk':246,'Simple Spinach Scramble':252,'Oatmeal and raisins':259,
                'Vegan Banana OatSoy Shake':266,'Chai Pudding':270,'Banana and Strawberry Wrap':274,'Tofu Scramble':280,
                'Cold Flax Oatmeal':285,'Cherry Fridge Oats':291,'Cinnamon Apple Oatmeal':296,'Huevos Pericos':301,
                'Morning Fruity Protien Shake':325,'Cream of Wheat':326,'Bacon Weave Open Sandwich':327,'Museli':349,
                'Cranberry and Energizing Oatmeal':351,'Chocolate Overnight Oats':348,'Berry Soymilk Smoothie':372,
                'Bacon and Swiss Quiche':374,'Almond-Crusted Keto Quiche':376,
                'Bleuberry Chai Seed Pudding':404,'Coconut Cinnamon Muesli':422,'Banana Bruschetta':428,
                'Overnight Chai Pudding':449,'Banana and Cashey Cream Smoothie':451,'High Protien Banana Oatcake':473,
                'Mango Smoothie Bowl':476,'Ricotta Blueberry Pancakes':501,'Dairy Free Berry Banana Chia Yogurt':503


                }


    let a_bcalor = Math.floor(calor_no/mealno) 
    
    s = false
    
    if (radiobtn() == 1 && (a_bcalor <=105 && a_bcalor >= 95))
    {
        let b_dish = lunch_v100[Math.floor(Math.random()*(lunch_v100.length))]
        let calories_b = lunch_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if (radiobtn() == 2 && (a_bcalor <=105 && a_bcalor >= 95))
    {
        let b_dish = lunch_n100[Math.floor(Math.random()*(lunch_n100.length))]
        let calories_b = lunch_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if (radiobtn() == 1 && (a_bcalor <=130 && a_bcalor >= 120))
    {
        let b_dish = lunch_v125[Math.floor(Math.random()*(lunch_v125.length))]
        let calories_b = lunch_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if (radiobtn() == 2 && (a_bcalor <=130 && a_bcalor >= 120))
    {
        let b_dish = lunch_n125[Math.floor(Math.random()*(lunch_n125.length))]
        let calories_b = lunch_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if (radiobtn() == 1 && (a_bcalor <=155 && a_bcalor >= 145))
    {
        let b_dish = lunch_v150[Math.floor(Math.random()*(lunch_v150.length))]
        let calories_b = lunch_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if (radiobtn() == 2 && (a_bcalor <=155 && a_bcalor >= 145))
    {
        let b_dish = lunch_n150[Math.floor(Math.random()*(lunch_n150.length))]
        let calories_b = lunch_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if (radiobtn() == 1 && (a_bcalor <=180 && a_bcalor >= 170))
    {
        let b_dish = lunch_v175[Math.floor(Math.random()*(lunch_v175.length))]
        let calories_b = lunch_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if (radiobtn() == 2 && (a_bcalor <=180 && a_bcalor >= 170))
    {
        let b_dish = lunch_n175[Math.floor(Math.random()*(lunch_n175.length))]
        let calories_b = lunch_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if (radiobtn() == 1 && (a_bcalor <=205 && a_bcalor >= 195))
    {
        let b_dish = lunch_v200[Math.floor(Math.random()*(lunch_v200.length))]
        let calories_b = lunch_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if (radiobtn() == 2 && (a_bcalor <=205 && a_bcalor >= 195))
    {
        let b_dish = lunch_n200[Math.floor(Math.random()*(lunch_n200.length))]
        let calories_b = lunch_kcal[b_dish]
        return [b_dish,calories_b]
    }
    if (a_bcalor>210 && radiobtn() == 1){
        
        let closest =findClosest2(lunch_vg200,lunch_kcal,a_bcalor)
        let r_no = Math.floor(Math.random()*2)
        let closest_cal = closest[1][r_no]
        let c_dish = closest[0][r_no]
        if (a_bcalor <=closest_cal+10 && a_bcalor>=closest_cal-10){
            console.log(c_dish+'  '+closest_cal)
            return [c_dish,closest_cal]
            
        }
        else{
            s=true
        }
    }
    
    if ( a_bcalor>210 && s && radiobtn() == 1)
    {
        let lunch_list = lunch_v100.concat(lunch_v150.concat(lunch_v200.concat(lunch_vg200)))
        let l = return_value_cal(lunch_list,lunch_kcal,a_bcalor)
        return l  
    }
    if (a_bcalor>210 && radiobtn() == 2){
        console.log('Hi')
        
        let closest =findClosest2(lunch_ng200,lunch_kcal,a_bcalor)
        let r_no = Math.floor(Math.random()*2)
        let closest_cal = closest[1][r_no]
        let c_dish = closest[0][r_no]
        if (a_bcalor <=closest_cal+10 && a_bcalor>=closest_cal-10){
            console.log(c_dish+'  '+closest_cal)
            return [c_dish,closest_cal]
            
        }
        else{
            s=true
        }
    }
    if ( a_bcalor>210 && s && radiobtn() == 2)
    {
        let lunch_list = lunch_n100.concat(lunch_n150.concat(lunch_n200.concat(lunch_ng200)))
        let l = return_value_cal(lunch_list,lunch_kcal,a_bcalor)
        return l  
    }

    

}

function meal_planning_dinner(calor_no,mealno)
{
    let dinner_v100 = ['Scallion Crusted Salmon','Big Green Salad','Simple Mixed Green Salad','Cucumber Avocardo Salad'] 

    let dinner_v125 = ['Maple Glazed Talapia','Spinach and Broccoli Salad','Cilantro Lime Grilled Shrimp']

    let dinner_v150 = ['Paleo Steamed Broccoli','Zucchini Scramble','Cilantro Lime Shrimp']

    let dinner_v175 = ['Cilantro Turkey Burgers']

    let dinner_v200 = ['Avocado lettuce wrap','Pea & board bean Shakshuka','Roasted SPiced Cauliflower']

    let dinner_g200 = ['Hummus on Rye','Cucumber Tea Sandwiches','Summer Salad with grilled Shrimp','Tomato and Hummus on Rye',
                        'Croque Monsieur Sliders','Bologna Caeser Wraps','Cucumber and Tomato Sandwich','Pimento Cheese Sandwich',
                        'Cottage Cheese Deli Rollup','Tomato and Mayo on Rye','ALT Sandwich','ALT Sandwich','Vegetarian Chickpea Sandwich',
                        'Peanut Butter and Honey Toast','Spaghetti Sandwich','Tomato Avocado Salad','Turkey,Corn and tomato Wrap',
                        'Apple Turkey Burgers','Broccoli Tofu Pitas','Apple Turkey Burgers','Cottage Cheese and Spinach Sandwich',
                        'Seitan Gyros','Roast Broccoli and Grilled Cheese','Simple Ham Sandwich','Peanut Butter and jelly','Sweet Potatao and black bean chilli',
                        'Mushroom Burger with Spinach','Balsamic Zucchini Sandwich','Bleuberry Chai Seed Pudding','Coconut Cinnamon Muesli',
                        'Banana Bruschetta','Overnight Chai Pudding','Banana and Cashey Cream Smoothie','High Protien Banana Oatcake',
                        'Mango Smoothie Bowl','Ricotta Blueberry Pancakes','Dairy Free Berry Banana Chia Yogurt'

                        ]




    
    let dinner_kcal = {'Scallion Crusted Salmon':103,'Big Green Salad':102,'Maple Glazed Talapia':124,
                        'Paleo Steamed Broccoli':149,'Zucchini Scramble':150,'Simple Mixed Green Salad':100,
                        'Spinach and Broccoli Salad':122,'Cilantro Turkey Burgers':175,'Cilantro Lime Shrimp':149,
                        'Cucumber Avocado Salad':100,'Cilantro Lime Grilled Shrimp':123,'Avocado lettuce wrap':198,
                        'Summer Salad with grilled Shrimp':226,'Pea & board bean Shakshuka':199,'Roasted SPiced Cauliflower':202,
                        'Hummus on Rye':204,'Cucumber Tea Sandwiches':210,'Tomato and Hummus on Rye':214,'Croque Monsieur Sliders':219,
                        'Bologna Caeser Wraps':224,'Avocado Hummus Taquitos':231,'Cucumber and Tomato Sandwich':236,'Pimento Cheese Sandwich':241,
                        'Cottage Cheese Deli Rollup':246,'Tomato and Mayo on Rye':250,'ALT Sandwich':261,'ALT Sandwich':265,'Vegetarian Chickpea Sandwich':270,
                        'Peanut Butter and Honey Toast':276,'Spaghetti Sandwich':281,'Tomato Avocado Salad':287,'Turkey,Corn and tomato Wrap':291,
                        'Ham and Cottage Cheese Sandwich':296,'Ham and Cheese Wrap':300,'Broccoli Tofu Pitas':310,'Apple Turkey Burgers':321,'Cottage Cheese and Spinach Sandwich':332,
                        'Seitan Gyros':241,'Roast Broccoli and Grilled Cheese':350,'Simple Ham Sandwich':359,'Peanut Butter and jelly':371,'Sweet Potatao and black bean chilli':381,
                        'Mushroom Burger with Spinach':391,'Balsamic Zucchini Sandwich':401,'Bleuberry Chai Seed Pudding':404,'Coconut Cinnamon Muesli':422,'Banana Bruschetta':428,
                        'Overnight Chai Pudding':449,'Banana and Cashey Cream Smoothie':451,'High Protien Banana Oatcake':473,
                        'Mango Smoothie Bowl':476,'Ricotta Blueberry Pancakes':501,'Dairy Free Berry Banana Chia Yogurt':503
                    }
    let a_bcalor = (calor_no/mealno)
    console.log(a_bcalor)

    if ((a_bcalor <=105 && a_bcalor >= 95))
    {
        let b_dish = dinner_v100[Math.floor(Math.random()*(dinner_v100.length))]
        let calories_b = dinner_kcal[b_dish]
        
        return [b_dish,calories_b]
    }
    if ((a_bcalor <=130 && a_bcalor >= 120))
    {
        let b_dish = dinner_v125[Math.floor(Math.random()*(dinner_v125.length))]
        let calories_b = dinner_kcal[b_dish]
        console.log(b_dish,calories_b)
        return [b_dish,calories_b]
    }
    if ((a_bcalor <=155 && a_bcalor >= 145))
    {
        let b_dish = dinner_v150[Math.floor(Math.random()*(dinner_v150.length))]
        let calories_b = dinner_kcal[b_dish]
        console.log(b_dish,calories_b)
        return [b_dish,calories_b]
    }
    if ((a_bcalor <=180 && a_bcalor >= 170))
    {
        let b_dish = dinner_v175[Math.floor(Math.random()*(dinner_v175.length))]
        let calories_b = dinner_kcal[b_dish]
        console.log(b_dish,calories_b)
        return [b_dish,calories_b]
    }
    if ((a_bcalor <=205 && a_bcalor >= 195))
    {
        let b_dish = dinner_v200[Math.floor(Math.random()*(dinner_v200.length))]
        let calories_b = dinner_kcal[b_dish]
        console.log(b_dish,calories_b)
        return [b_dish,calories_b]
    }
    if (a_bcalor>210){
        
        let closest =findClosest2 (dinner_g200,dinner_kcal,a_bcalor)
        let r_no = Math.floor(Math.random()*2)
        let closest_cal = closest[1][r_no]
        let c_dish = closest[0][r_no]
        if (a_bcalor <=closest_cal+10 && a_bcalor>=closest_cal-10){
            return [c_dish,closest_cal]
            
        }
        else{
            s=true
        }
    }
    if ( a_bcalor>210 && s)
    {
        let dinner_list = dinner_v100.concat(dinner_v150.concat(dinner_v200.concat(dinner_g200)))
        let l = return_value_cal(dinner_list,dinner_kcal,a_bcalor)
        return l  
    }
    


                

}
function meal_planning_snacks(calor_no,mealno){
    let snacks_v100 =['Blueberries 1 cup','Handful of Almonds','1/4 cup of Bried Cranberries']
    let snacks_n100 = ['Hard Boiled Egg','Italian Eggs','Ham omelette']
    let snacks_v125 = ['Salt & Vinegar Popcorn','Fruit Salad','Strawberry Pear Juice']
    let snacks_n125 = ['Tuna avocado Salad','Curry Tuna Salad']
    let snacks_v150 = ['Chai Tea Latte','Mango Lassi','Pineapple Kale Smoothie']
    let snacks_v175 = ['Blueberry Mint Smoothie','Peach and Banana Oat Smoothie','Strawberry Watermelon Smoothie',
    'Banana Almond Butter and Raisins']
    let snacks_v200 = ['Penet Butter & Celery','Apricot Smoothie','Peach Mango Orange Smoothie','Vegan Chocolate Cupcakes']
                    
    let snacks_g200 = ['Mango Blueberry "Fool"','Maple-Vanilla Coconut Milk','Vegan Chocolate Cake',
                        'Date Almond Coco Bliss Balls','Simple Vegan Banana Bread','Cafe Au Lait Puddings',
                        'Banana Bread','Twix Chocolate Croissants','Cauliflower Rice Pudding','Glazed Apricot Twists',
                        'Easy Smores Bars','Veggie Apple Smoothie','Watermelonade','Strawberry Smoothie',
                        'Maple Strawberry and Cream','Tropical Mint Smoothie','Orange Spinach Smoothie',
                        'Strawberry Spinach Smoothie','Beet and Apple Juice','Moist Chocolate Muffins',
                        'Flourless Chocolate Cake','Green Vegan Smoothie','Lemon Olive Oil Cake','Kiwi Sorbet',
                        'Flourless Chocolate Cake'
                        ]







    let snacks_kcal = {'Blueberries 1 cup':97,'Handful of Almonds':99,'1/4 cup of Bried Cranberries':100,
                        'Hard Boiled Egg':99,'Ham omelette':97,'Spinach omelette':94,'Italian Eggs':103,
                        'Curry Tuna Salad':123,'Tuna avocado Salad':125,'Salt & Vinegar Popcorn':124,
                        'Fruit Salad':126,'Strawberry Pear Juice':127,'Chai Tea Latte':150,'Mango Lassi':147,
                        'Pineapple Kale Smoothie':152,'Blueberry Mint Smoothie':173,'Peach and Banana Oat Smoothie':174,
                        'Strawberry Watermelon Smoothie':175,'Banana Almond Butter and Raisins':177,
                        'Penet Butter & Celery':201,'Apricot Smoothie':200,'Peach Mango Orange Smoothie':199,
                        'Vegan Chocolate Cupcakes':202,'Mango Blueberry "Fool"':211,'Maple-Vanilla Coconut Milk':215,
                        'Vegan Chocolate Cake':221,'Simple Vegan Banana Bread':224,'Date Almond Coco Bliss Balls':229,
                        'Cafe Au Lait Puddings':236,'Banana Bread':240 ,'Twix Chocolate Croissants':246,'Cauliflower Rice Pudding':251,
                        'Glazed Apricot Twists':255,'Easy Smores Bars':212,'Veggie Apple Smoothie':264,'Watermelonade':269,'Strawberry Smoothie':274,
                        'Maple Strawberry and Cream':279,'Tropical Mint Smoothie':289,'Orange Spinach Smoothie':296,
                        'Strawberry Spinach Smoothie':302,'Moist Chocolate Muffins':323,'Beet and Apple Juice':327,'Green Vegan Smoothie':349,
                        'Lemon Olive Oil Cake':374,'Kiwi Sorbet':376,'Flourless Chocolate Cake':399
                        
                        }
    a_bcalor = Math.floor(calor_no/mealno)
    console.log(a_bcalor)
    
    if ((radiobtn() == 1 && a_bcalor <=105 && a_bcalor >= 95))
    {
        let b_dish = snacks_v100[Math.floor(Math.random()*(snacks_v100.length))]
        let calories_b = snacks_kcal[b_dish]               
        return [b_dish,calories_b]
    }
    if ((radiobtn() == 2 && a_bcalor <=105 && a_bcalor >= 95))
    {
        let c_list = snacks_v100.concat(snacks_n100)
        let b_dish = c_list[Math.floor(Math.random()*(c_list.length))]
        let calories_b = snacks_kcal[b_dish]               
        return [b_dish,calories_b]
    }
    if ((radiobtn() == 1 && a_bcalor <=130 && a_bcalor >= 120))
    {
        let b_dish = snacks_v125[Math.floor(Math.random()*(snacks_v125.length))]
        let calories_b = snacks_kcal[b_dish]               
        return [b_dish,calories_b]
    }
    if ((radiobtn() == 2 && a_bcalor <=130 && a_bcalor >= 120))
    {
        let c_list = snacks_v125.concat(snacks_n125)
        let b_dish = c_list[Math.floor(Math.random()*(c_list.length))]
        let calories_b = snacks_kcal[b_dish]               
        return [b_dish,calories_b]
    }
    if (( a_bcalor <=155 && a_bcalor >= 145))
    {
        let b_dish = snacks_v150[Math.floor(Math.random()*(snacks_v150.length))]
        let calories_b = snacks_kcal[b_dish]               
        return [b_dish,calories_b]
    }
    if (( a_bcalor <=180 && a_bcalor >= 170))
    {
        let b_dish = snacks_v175[Math.floor(Math.random()*(snacks_v175.length))]
        let calories_b = snacks_kcal[b_dish]               
        return [b_dish,calories_b]
    }
    if (( a_bcalor <=205 && a_bcalor >= 195))
    {
        let b_dish = snacks_v200[Math.floor(Math.random()*(snacks_v200.length))]
        let calories_b = snacks_kcal[b_dish]               
        return [b_dish,calories_b]
    }
    if (a_bcalor>210){
        
        let closest =findClosest2 (snacks_g200,snacks_kcal,a_bcalor)
        let r_no = Math.floor(Math.random()*2)
        let closest_cal = closest[1][r_no]
        let c_dish = closest[0][r_no]
        if (a_bcalor <=closest_cal+10 && a_bcalor>=closest_cal-10){
            return [c_dish,closest_cal]
            
        }
        else{
            s=true
        }
    }
    if ( a_bcalor>210 && s)
    {
        let snacks_list = snacks_v100.concat(snacks_v150.concat(snacks_v200.concat(snacks_g200)))
        let l = return_value_cal(snacks_list,snacks_kcal,a_bcalor)

        return l  
    }

}



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { 
   
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));

                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
 }

 function return_value_cal(list1,kcal,a_bcalor)
 {

    let veg_set =shuffleArray(list1)
        let f = false
        for (let i of veg_set){
            let s = 0
            for(let j of veg_set){
                let cal = kcal[i]+kcal[j]    
                if (f == true)continue
                else if (cal<=a_bcalor+10 && cal>=a_bcalor-10)
                {
                    f = true
                    console.log(i)
                    console.log(j)
                    
                    return [[i,kcal[i]],[j,kcal[j]]]

                }
            }
        }
 }
 function findClosest2(list1,diction, target) {
    let list2 = shuffleArray(list1)
    let closest = diction[list1[0]]; 
    let closestDiff = Math.abs(target - closest);
    let c_dish = list1[0] 
    let l1 = []
    let l2 = []
    // Calculate the difference between the target and closest
    for (let n = 0; n<2 ; n++){
        for (let i of list2) {
            let current = diction[i];
            let currentDiff = Math.abs(target - current); 
            let l1 = []
            let l2 = []
            
       
            // Calculate the difference between the target and current number
            if (currentDiff < closestDiff) {
                closest = current; 
          
                // Update the closest number
                closestDiff = currentDiff; 
                c_dish = i
            }
        }
        let index = list2.indexOf(c_dish)
        let rele = String(list2.splice(index,1))
        
        l1.push(rele)
        l2.push(diction[rele])
        
        
        
    }

    return [l1,l2]
}

function cleardiv(){
    document.getElementById('b-dish-name-2').innerHTML = ''
    document.getElementById('b-dish-calor-2').innerHTML = ''
    document.getElementById('b-dish-qty-2').innerHTML = ''
    document.getElementById('l-dish-name-2').innerHTML = ''
    document.getElementById('l-dish-calor-2').innerHTML = ''
    document.getElementById('l-dish-qty-2').innerHTML = ''
    document.getElementById('d-dish-qty-2').innerHTML = ''
    document.getElementById('d-dish-name-2').innerHTML = ''
    document.getElementById('d-dish-calor-2').innerHTML = ''
    document.getElementById('s1-dish-qty-2').innerHTML = ''
    document.getElementById('s1-dish-name-2').innerHTML = ''
    document.getElementById('s1-dish-calor-2').innerHTML = ''
    document.getElementById('s2-dish-qty-2').innerHTML = ''
    document.getElementById('s2-dish-name-2').innerHTML = ''
    document.getElementById('s2-dish-calor-2').innerHTML = ''

}
function displaynone(){
    document.getElementById('breakfast').style = 'displat: none;'
    document.getElementById('lunch').style = 'displat: none;'
    document.getElementById('dinner').style = 'displat: none;'
    document.getElementById('snacks-1').style = 'displat: none;'
    document.getElementById('snacks-2').style = 'displat: none;'

}











  