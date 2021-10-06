function optionSelected(answer){
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
        /*HATE IT-----------------------------------------------------------------------------------------------------------------------*/
    if (userAns == "1 - Hate it") {
        if (correcAns == "Environmental Science (BSES)") {
            BSES += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Geology (BS Geology)") {
            BSG += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Molecular Biology (BS Molecular Biology)") {
            BSMB += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Physics (BS Physics) and Applied Physics (BS Applied Physics)") {
            BSAP += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Chemistry (BS Chemistry)") {
            BSC += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Food Technology (BS Food Technology)") {
            BSFT += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Nutrition and Dietetics (BS Nutrition and Dietetics)") {
            BSND += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Medical Technology (BS Med Tech)") {
            BSMT += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Midwifery (BS Midwifery)") {
            BSM += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Nursing (BSN)") {
            BSN += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Occupational Therapy (BSOT)") {
            BSOT += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Pharmacy (BS Pharmacy)") {
            BSP += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Radiologic Technology (BS Rad Tech)") {
            BSRT += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Respiratory Therapy (BSRT)") {
            BStherapy += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Speech-Language Pathology") {
            SLP += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Computer Science (BSCS)") {
            BSCS += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Information Technology (BSIT) and Information Systems (BSIS)") {
            BSIS += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Aeronautical Engineering (BS AeroE)") {
            BSA += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Biological Engineering (BSBE)") {
            BSBE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Industrial Engineering (BSIE)") {
            BSIE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Chemical Engineering (BSChE)") {
            BSCHE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Civil engineering (BSCE)") {
            BSCE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Computer Engineering (BSCpE)") {
            BSCPE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Electrical Engineering (BSEE)") {
            BSEE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Electronics and Communications Engineering (BSECE)") {
            BSECE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Sanitary Engineering (BSSE)") {
            BSSE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Geodetic Engineering (BSGE) AND Geological Engineering (BSGeoE) AND Mining Engineering (BSME)") {
            BSGEOE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Ceramic Engineering (BSCerE)") {
            BSCERE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Marine Engineering (BSMarE)") {
            BSMARE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Materials Engineering (BSMatE)") {
            BSMATE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Mechanical Engineering (BSME)") {
            BSME += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Metallurgical Engineering (BSMetE)") {
            BSMETE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Petroleum Engineering (BSPetE)") {
            BSPETE += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Marine Transportation (BSMT)") {
            BSMTrans += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Mathematics (BS Mathematics) and Applied Mathematics (BS Applied Mathematics)") {
            BSMath += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Statistics (BS Stat)") {
            BSS += 1; //upgrading score value with 1
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }
        /*DISLIKE-----------------------------------------------------------------------------------------------------------------------*/
    }else if (userAns == "2 - Dislike it") {
         if (correcAns == "Environmental Science (BSES)") {
            BSES += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Geology (BS Geology)") {
            BSG += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Molecular Biology (BS Molecular Biology)") {
            BSMB += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Physics (BS Physics) and Applied Physics (BS Applied Physics)") {
            BSAP += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Chemistry (BS Chemistry)") {
            BSC += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Food Technology (BS Food Technology)") {
            BSFT += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Nutrition and Dietetics (BS Nutrition and Dietetics)") {
            BSND += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Medical Technology (BS Med Tech)") {
            BSMT += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Midwifery (BS Midwifery)") {
            BSM += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Nursing (BSN)") {
            BSN += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Occupational Therapy (BSOT)") {
            BSOT += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Pharmacy (BS Pharmacy)") {
            BSP += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Radiologic Technology (BS Rad Tech)") {
            BSRT += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Respiratory Therapy (BSRT)") {
            BStherapy += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Speech-Language Pathology") {
            SLP += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Computer Science (BSCS)") {
            BSCS += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Information Technology (BSIT) and Information Systems (BSIS)") {
            BSIS += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Aeronautical Engineering (BS AeroE)") {
            BSA += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Biological Engineering (BSBE)") {
            BSBE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Industrial Engineering (BSIE)") {
            BSIE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Chemical Engineering (BSChE)") {
            BSCHE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Civil engineering (BSCE)") {
            BSCE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Computer Engineering (BSCpE)") {
            BSCPE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Electrical Engineering (BSEE)") {
            BSEE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Electronics and Communications Engineering (BSECE)") {
            BSECE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Sanitary Engineering (BSSE)") {
            BSSE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Geodetic Engineering (BSGE) AND Geological Engineering (BSGeoE) AND Mining Engineering (BSME)") {
            BSGEOE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Ceramic Engineering (BSCerE)") {
            BSCERE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Marine Engineering (BSMarE)") {
            BSMARE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Materials Engineering (BSMatE)") {
            BSMATE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Mechanical Engineering (BSME)") {
            BSME += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Metallurgical Engineering (BSMetE)") {
            BSMETE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Petroleum Engineering (BSPetE)") {
            BSPETE += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Marine Transportation (BSMT)") {
            BSMTrans += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Mathematics (BS Mathematics) and Applied Mathematics (BS Applied Mathematics)") {
            BSMath += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Statistics (BS Stat)") {
            BSS += 2; //upgrading score value with 2
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }
        /*NEUTRAL-----------------------------------------------------------------------------------------------------------------------*/
    }else if (userAns == "3 - Neutral") {
         if (correcAns == "Environmental Science (BSES)") {
            BSES += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Geology (BS Geology)") {
            BSG += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Molecular Biology (BS Molecular Biology)") {
            BSMB += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Physics (BS Physics) and Applied Physics (BS Applied Physics)") {
            BSAP += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Chemistry (BS Chemistry)") {
            BSC += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Food Technology (BS Food Technology)") {
            BSFT += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Nutrition and Dietetics (BS Nutrition and Dietetics)") {
            BSND += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Medical Technology (BS Med Tech)") {
            BSMT += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Midwifery (BS Midwifery)") {
            BSM += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Nursing (BSN)") {
            BSN += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Occupational Therapy (BSOT)") {
            BSOT += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Pharmacy (BS Pharmacy)") {
            BSP += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Radiologic Technology (BS Rad Tech)") {
            BSRT += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Respiratory Therapy (BSRT)") {
            BStherapy += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Speech-Language Pathology") {
            SLP += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Computer Science (BSCS)") {
            BSCS += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Information Technology (BSIT) and Information Systems (BSIS)") {
            BSIS += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Aeronautical Engineering (BS AeroE)") {
            BSA += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Biological Engineering (BSBE)") {
            BSBE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Industrial Engineering (BSIE)") {
            BSIE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Chemical Engineering (BSChE)") {
            BSCHE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Civil engineering (BSCE)") {
            BSCE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Computer Engineering (BSCpE)") {
            BSCPE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Electrical Engineering (BSEE)") {
            BSEE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Electronics and Communications Engineering (BSECE)") {
            BSECE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Sanitary Engineering (BSSE)") {
            BSSE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Geodetic Engineering (BSGE) AND Geological Engineering (BSGeoE) AND Mining Engineering (BSME)") {
            BSGEOE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Ceramic Engineering (BSCerE)") {
            BSCERE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Marine Engineering (BSMarE)") {
            BSMARE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Materials Engineering (BSMatE)") {
            BSMATE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Mechanical Engineering (BSME)") {
            BSME += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Metallurgical Engineering (BSMetE)") {
            BSMETE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Petroleum Engineering (BSPetE)") {
            BSPETE += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Marine Transportation (BSMT)") {
            BSMTrans += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Mathematics (BS Mathematics) and Applied Mathematics (BS Applied Mathematics)") {
            BSMath += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Statistics (BS Stat)") {
            BSS += 3; //upgrading score value with 3
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }
        /*LIKEIT-----------------------------------------------------------------------------------------------------------------------*/
    }else if (userAns == "4 - Like it") {
         if (correcAns == "Environmental Science (BSES)") {
            BSES += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Geology (BS Geology)") {
            BSG += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Molecular Biology (BS Molecular Biology)") {
            BSMB += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Physics (BS Physics) and Applied Physics (BS Applied Physics)") {
            BSAP += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Chemistry (BS Chemistry)") {
            BSC += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Food Technology (BS Food Technology)") {
            BSFT += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Nutrition and Dietetics (BS Nutrition and Dietetics)") {
            BSND += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Medical Technology (BS Med Tech)") {
            BSMT += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Midwifery (BS Midwifery)") {
            BSM += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Nursing (BSN)") {
            BSN += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Occupational Therapy (BSOT)") {
            BSOT += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Pharmacy (BS Pharmacy)") {
            BSP += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Radiologic Technology (BS Rad Tech)") {
            BSRT += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Respiratory Therapy (BSRT)") {
            BStherapy += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Speech-Language Pathology") {
            SLP += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Computer Science (BSCS)") {
            BSCS += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Information Technology (BSIT) and Information Systems (BSIS)") {
            BSIS += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Aeronautical Engineering (BS AeroE)") {
            BSA += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Biological Engineering (BSBE)") {
            BSBE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Industrial Engineering (BSIE)") {
            BSIE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Chemical Engineering (BSChE)") {
            BSCHE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Civil engineering (BSCE)") {
            BSCE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Computer Engineering (BSCpE)") {
            BSCPE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Electrical Engineering (BSEE)") {
            BSEE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Electronics and Communications Engineering (BSECE)") {
            BSECE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Sanitary Engineering (BSSE)") {
            BSSE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Geodetic Engineering (BSGE) AND Geological Engineering (BSGeoE) AND Mining Engineering (BSME)") {
            BSGEOE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Ceramic Engineering (BSCerE)") {
            BSCERE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Marine Engineering (BSMarE)") {
            BSMARE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Materials Engineering (BSMatE)") {
            BSMATE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Mechanical Engineering (BSME)") {
            BSME += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Metallurgical Engineering (BSMetE)") {
            BSMETE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Petroleum Engineering (BSPetE)") {
            BSPETE += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Marine Transportation (BSMT)") {
            BSMTrans += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Mathematics (BS Mathematics) and Applied Mathematics (BS Applied Mathematics)") {
            BSMath += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Statistics (BS Stat)") {
            BSS += 4; //upgrading score value with 4
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }
        /*LOVEIT-----------------------------------------------------------------------------------------------------------------------*/
    }else if (userAns == "5 - Love it") {
         if (correcAns == "Environmental Science (BSES)") {
            BSES += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Geology (BS Geology)") {
            BSG += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Molecular Biology (BS Molecular Biology)") {
            BSMB += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Physics (BS Physics) and Applied Physics (BS Applied Physics)") {
            BSAP += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Chemistry (BS Chemistry)") {
            BSC += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Food Technology (BS Food Technology)") {
            BSFT += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Nutrition and Dietetics (BS Nutrition and Dietetics)") {
            BSND += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Medical Technology (BS Med Tech)") {
            BSMT += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Midwifery (BS Midwifery)") {
            BSM += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Nursing (BSN)") {
            BSN += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Occupational Therapy (BSOT)") {
            BSOT += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Pharmacy (BS Pharmacy)") {
            BSP += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Radiologic Technology (BS Rad Tech)") {
            BSRT += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Respiratory Therapy (BSRT)") {
            BStherapy += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Speech-Language Pathology") {
            SLP += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Computer Science (BSCS)") {
            BSCS += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Information Technology (BSIT) and Information Systems (BSIS)") {
            BSIS += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Aeronautical Engineering (BS AeroE)") {
            BSA += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Biological Engineering (BSBE)") {
            BSBE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Industrial Engineering (BSIE)") {
            BSIE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Chemical Engineering (BSChE)") {
            BSCHE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Civil engineering (BSCE)") {
            BSCE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Computer Engineering (BSCpE)") {
            BSCPE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Electrical Engineering (BSEE)") {
            BSEE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Electronics and Communications Engineering (BSECE)") {
            BSECE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Sanitary Engineering (BSSE)") {
            BSSE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Geodetic Engineering (BSGE) AND Geological Engineering (BSGeoE) AND Mining Engineering (BSME)") {
            BSGEOE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Ceramic Engineering (BSCerE)") {
            BSCERE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Marine Engineering (BSMarE)") {
            BSMARE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Materials Engineering (BSMatE)") {
            BSMATE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Mechanical Engineering (BSME)") {
            BSME += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Metallurgical Engineering (BSMetE)") {
            BSMETE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Petroleum Engineering (BSPetE)") {
            BSPETE += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Marine Transportation (BSMT)") {
            BSMTrans += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }else if (correcAns == "Mathematics (BS Mathematics) and Applied Mathematics (BS Applied Mathematics)") {
            BSMath += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

        else if (correcAns == "Statistics (BS Stat)") {
            BSS += 5; //upgrading score value with 5
            answer.classList.add("correct"); //adding green color to correct selected option
            answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        }

    }

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options

    }
    next_btn.classList.add("show"); //show the next button if user selected any option
    document.getElementById('buttonClick').click();


}