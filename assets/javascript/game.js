        $(document).ready(function () {

            let targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

            $("#number-to-guess").text(targetNumber);

            let minCrystal = 1;
            let maxCrystal = 12;

            let crystal1 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal; //gives random numbers inclusive of max and min
            let crystal2 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal; //gives random numbers inclusive of max and min
            let crystal3 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal; //gives random numbers inclusive of max and min
            let crystal4 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal; //gives random numbers inclusive of max and min

            let numberOptions = [crystal1, crystal2, crystal3, crystal4];

            let counter = 0;
            
           


            var imgSrc = ["assets/images/crystal-blue.png", "assets/images/crystal-green.png", "assets/images/crystal-red.png", "assets/images/crystal-violet.png"];
            let wins = 0;
            let losses = 0;

            var reset = function () {
                counter = 0;

                $("#userTotal").text(counter);
                targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
                $("#number-to-guess").text(targetNumber);

                let minCrystal = 1;
                let maxCrystal = 12;
                let numberOptions = [crystal1, crystal2, crystal3, crystal4];

                crystal1 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal; //gives random numbers inclusive of max and min
                crystal2 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal; //gives random numbers inclusive of max and min
                crystal3 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal; //gives random numbers inclusive of max and min
                crystal4 = Math.floor(Math.random() * (maxCrystal - minCrystal + 1)) + minCrystal; //gives random numbers inclusive of max and min
                console.log("reset " + numberOptions);    // This updates correctly   


                $("#0").attr("data-crystalvalue", numberOptions[0]);  // Assigns the above new values to crystsls
                $("#1").attr("data-crystalvalue", numberOptions[1]);
                $("#2").attr("data-crystalvalue", numberOptions[2]);
                $("#3").attr("data-crystalvalue", numberOptions[3]);

            };

            reset(); //for page load

            //Loop to create crystals for every numberOption.
            for (var i = 0; i < numberOptions.length; i++) {

                // For each iteration creates an imageCrystal
                var imageCrystal = $("<img>");

                // Gives each crystal the class ".crystal-image" for CSS to take effect
                imageCrystal.addClass("crystal-image");

                // Gives each imageCrystal a src link to the crystal image
                imageCrystal.attr("src", imgSrc[i]);

                // Each imageCrystal given a data attribute called data-crystalValue.
                // This data attribute is set equal to the array value.
                imageCrystal.attr("data-crystalvalue", numberOptions[i]);
                
                // Gives each crystal an id so its value can be reset in reset()
                imageCrystal.attr("id", i)

                // Adds each crystal image (with all it classes and attributes) to the page.
                $("#crystals").append(imageCrystal);
            };

            // Click event applies to each crystal on the page since they all share same class
            $(".crystal-image").on("click", function () {

                // Determine the crystal's value by extracting the value from the data attribute.
                // Using the $(this) keyword specifies the value be extracted from the clicked crystal.
                // Use the .attr("data-crystalvalue")  to get the value out of the "data-crystalvalue" attribute.
                // Since attributes on HTML elements are strings, convert it to an integer before adding to the counter

                var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue);
                // Adds the crystalValue to the user's "counter" which is a global variable.
                // Every click, from every crystal adds to the global counter.
                counter += crystalValue;
                console.log("counter: " + counter + " crystalValue: " + crystalValue);

                $("#userTotal").text(counter);

                if (counter === targetNumber) {
                    wins = wins + 1;

                    $("#wins").text(wins);
                    alert("Win");

                    reset();
                }

                else if (counter >= targetNumber) {
                    losses = losses + 1;

                    $("#losses").text(losses);
                    alert("Loss");

                    reset();
                }

            });

        });