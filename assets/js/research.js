/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Fuzzy Optimisation based Cricket Talent Identification",
    authors:
      "Naveed Jeelani Khan and Gulfam Ahamad",
    conferences:
      "Expert Systems with Applications, Elsevier SCI IF:8.6",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "Jeelani Khan N, Ahamad G. Fuzzy optimisation based cricket talent identification. Expert System with Applications , Elsevier. 2024 Mar; 237:121573. Available from: https://linkinghub.elsevier.com/retrieve/pii/S0957417423020754",
    },
    abstract:
      "In this study, we proposed a cricket talent identification model based on fuzzy optimization that employs the fuzzy analytical hierarchy process (FAHP) and particle swarm optimization (PSO). To evaluate the performance of the model, we used a primary dataset (n=56) collected from four different schools in J&K UT, India. Our model demonstrated high accuracy, precision, and recall with an accuracy of 92.8%, precision of 96%, and recall of 88%. The model also achieved a low miss rate of 11% and an F1 score of 92.3%. To the best of our knowledge, this is the first attempt to identify cricket talent using this methodology, which overcomes many limitations of conventional AHP-based models. By deriving an exact priority vector from the fuzzy comparison matrix for the criteria, our model eliminates the need for further procedures of defuzzification, making it more efficient and accurate. A comparative analysis of results gained from using gaussian fuzzy numbers is also provided. Our study demonstrates the feasibility and potential of using fuzzy optimization techniques for cricket talent identification.",
    absbox: "absPopup1",
  },

  {
    title: "SVMCTI: support vector machine based cricket talent ıdentification model",
    authors:
      "Nahida Reyaz, Gulfam Ahamad, Naveed Jeelani Khan, Mohd Naseem & Javed Ali ",
    conferences:
      "International Journal of Information Technology , Springer",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver:
        "Reyaz, N., Ahamad, G., Khan, N.J. et al. SVMCTI: support vector machine based cricket talent ıdentification model. Int. j. inf. tecnol. 16, 1931–1944 (2024). https://doi.org/10.1007/s41870-023-01686-w.",
    },
    abstract:
      "Sports talent recognition is one of the intensively discussed topics in this day and age. Cricket is a sport of keen interest and has fascinated researchers all over the world to ponder and work in this domain. In this era of technological competence, incorporating technology in cricket talent identification is an incumbent task. Also, early-age talent identification is considered to be more beneficial as instead of wasting time and other resources on random performers, we can limit the training and spending on the talented performers that could yield better results. In this article, a machine learning-based approach is proposed for Cricket Talent Identification using a Support Vector Machine (SVM) employing a Radial Basis Function(RBF) kernel to classify a dataset of performers into talented performers (possessing cricketing talent) and non-talented performers (not possessing cricketing talent). The data have been collected manually from early-age performers taking into consideration the benefits of talent identification at early ages. The data concerning various physical/motor, anthropometric, and cognitive abilities have been gathered. Using Chi-Square feature selection, the best-contributing parameters were determined and supplied to the model. After performing experimentation, the results were evaluated based on various evaluation metrics. we achieved an accuracy score of 96.42%, a precision of 94%, and an f1_score of 96%. The results obtained have been cross-validated using the 10-cross validation technique.",
    absbox: "absPopup2",
  },

  {
    title:
      "Optimal feature selection for cricket talent identification",
    authors: "Naveed Jeelani Khan, Gulfam Ahamad, Nahida Reyaz and Mohd Naseem",
    conferences:
      "International Journal of Advanced Technology and Engineering Exploration (IJATEE)",
    researchYr: 2023,
    citebox: "popup3",
    image: "assets/images/research-page/wordRepresentation.png",
    citation: {
      vancouver:
        "Khan NJ, Ahamad G, Reyaz N, Naseem M. Optimal feature selection for cricket talent identification. International Journal of Advanced Technology and Engineering Exploration. 2023; 10(98):67-86. DOI:10.19101/IJATEE.2021.876300.",
    },
    abstract:
      "Cricket talent identification (TiD) is a methodical process that aims to find the young athletes possessing a potential to excel in the cricket sport at an early age. The sports scientists have identified a set of twenty-eight parameters that determine the cricket TiD. In order to realize the objective of computational efficiency by reducing the feature set, we perform an optimal feature selection for cricket TiD using nine different feature selection techniques Viz. mutual information, information gain ratio, correlation, chi square, univariate root mean square error (RMSE), receiver operating characteristic (ROC) with decision tree classifier, reliefF, boruta and oneR. The individual results obtained from the feature selection techniques are provided along with the individual ranking. We aggregate the results using two different rank aggregation techniques namely average ranking aggregation and majority vote ranking aggregation. The aggregation results show a significant agreement between the two schemes. Fourteen out of twenty-eight features are selected using a threshold of 0.52– the value selected on recommendation of four different domain experts. 71.4% of the selected features are sport-centric and only 28.6% of the selected features are from the cognitive ability category. To the best of our knowledge, this is first such attempt to identify the talent in cricket using this methodology.",
    absbox: "absPopup3",
  },

  {
    title:
      "An IoT/FOG based framework for sports talent identification in COVID-19 like situations",
    authors:
      "Naveed Jeelani Khan, Gulfam Ahamad & Mohd Naseem",
    conferences:
      "International Journal of Information Technology , Springer",
    researchYr: 2022,
    citebox: "popup4",
    image: "assets/images/research-page/dialogueState.png",
    citation: {
      vancouver:
        "Khan, N.J., Ahamad, G. & Naseem, M. An IoT/FOG based framework for sports talent identification in COVID-19 like situations. Int. j. inf. tecnol. 14, 2513–2521 (2022). https://doi.org/10.1007/s41870-022-00984-z",
    },
    abstract:
      "COVID-19 crippled all the domains of our society. The inevitable lockdowns and social distancing procedures have hit the process of traditional sports talent identification (TiD) severely. This will interrupt the career-excellency of athletes and will also affect the future talent in the years to come. We explore the effect of COVID-19 on sports talent identification and propose an IoT/Fog-based framework for theTiD process during COVID-19 and COVID–like situations. Our proposed novel six-layer model facilitates the sports talent identification remotely using the various latest Information and Communication Technologies like IoT, fog and cloud computing. All the stakeholders like experts, coaches, players, institutes etc. are taken into consideration. The framework is mobile, widely accessible, scalable, cost-effective, secure, platform/location independent and fast. A brief case study of cricket talent identification using the proposed framework is also provided.",
    absbox: "absPopup4",
  },

  {
    title: "Computational efficiency in sports talent identification - a systematic review",
    authors: "Naveed Jeelani Khan; Gulfam Ahamad; Mohd. Naseem; Shahab Saquib Sohail",
    conferences:
      "International Journal of Applied Decision Sciences (IJADS), Vol. 16, No. 3, 2023",
    researchYr: 2023,
    citebox: "popup5",
    image: "assets/images/research-page/semanticSegmentation.png",
    citation: {
      vancouver:
        "Khan NJ, Ahamad G, Naseem M, Sohail SS. Computational efficiency in sports talent identification – a systematic review. Int J Appl Decis Sci. 2023;16(3). ",
    },
    abstract:
      "The selection of talent for sports has always been of great concern. The research interest in the domain of computational decision-making for sports talent identification is on an increasing curve. The conventional approaches are being modelled into the scientific models using various analytical and mathematical computational techniques. This paper reviews some of the talent identification models and aims to project the current perspective of the computational techniques being employed in sports talent identification (TiD). Articles from a timeframe of 1995-2020 were systematically selected in accordance with the PRISMA guidelines. We remain focused on the computational methodology being employed in the TiD models. The review delivers the findings and highlights some of the inherent issues that are not being addressed by the existing TiD models.",
    absbox: "absPopup5",
  },

  {
    title: "Fuzzy Discrete Event System (FDES): A Survey",
    authors: "Naveed Jeelani Khan, Gulfam Ahamad, Mohd Naseem & Qamar Rayees Khan ",
    conferences:
      " Lecture Notes in Electrical Engineering ((LNEE,volume 723))",
    researchYr: 2021,
    citebox: "popup6",
    image: "assets/images/research-page/deepNetwork.png",
    citation: {
      vancouver:
        "Khan, N.J., Ahamad, G., Naseem, M., Khan, Q.R. (2021). Fuzzy Discrete Event System (FDES): A Survey. In: Iqbal, A., Malik, H., Riyaz, A., Abdellah, K., Bayhan, S. (eds) Renewable Power for Sustainable Growth. Lecture Notes in Electrical Engineering, vol 723. Springer, Singapore. https://doi.org/10.1007/978-981-33-4080-0_51",
    },
    abstract:
      "The discrete event system (DES) has been deliberated upon for quite a long time. With the advent of fuzzy systems, the research community moved in the direction of fuzzification of the relevant activities. At the outset of the twenty-first century, one such attempt was made by Feng Lin and Hao Ying who brought forward the concept of fuzzy discrete event systems (FDES), which in its simple terms is the fuzzification of DES. The distinction of FDES lies in its ability to model the systems where states are fuzzy and transition from one state to other is not inconsequential, e.g., medical treatment planning, fuzzy control systems, etc. Since the field is of recent origin, the ideas regarding FDES seem to be dispersed. This paper tries to introduce, assemble and organise the basic concepts regarding FDES. We illustrate the development of FDES from a crisp DES and highlight the decision-making process in FDES. Two broad areas of associated use are also discussed as applications.",
    absbox: "absPopup6",
  },

  {
    title:
      "A Fuzzy Optimization based Cricket Talent Acquisition and Ranking Quotient (C-TARQ)",
    authors: "Naveed Jeelani Khan, Gulfam Ahamad and Mohd Naseem",
    conferences:
      "IEEE Xplore",
    researchYr: 2022,
    citebox: "popup7",
    image: "assets/images/research-page/imageDecomposition.png",
    citation: {
      vancouver:
        "N. J. Khan, G. Ahamad and M. Naseem, A Fuzzy Optimization based Cricket Talent Acquisition and Ranking Quotient (C-TARQ), 2022 5th International Conference on Multimedia, Signal Processing and Communication Technologies (IMPACT), Aligarh, India, 2022, pp. 1-6, doi: 10.1109/IMPACT55510.2022.10029020.",
    },
    abstract:
      "Cricket talent identification is a methodical process that aims to find the young athletes possessing a potential to excel in the cricket sport. We propose a cricket talent identification model based on fuzzy optimization, employing the fuzzy analytical hierarchy process (F AHP) and particle swarm optimization (PSO). To the best of our knowledge, this is first such attempt to identify the talent in cricket using this methodology. In order to overcome the challenges like lack of quality coaches, poor infrastructure availability, identifying the crude talent from remote rural areas, poor communication linkage between sports academies, early talent pooling etc., we develop a web-based cricket talent identification system (cricket talent acquisition and ranking quotient: C-TARQ). We use the PHP web programming on the modern LARAVEL framework. The validation of model is provided on a primary dataset (n=56) collected from four different schools of the J…K UT, India. The webpage screenshots, results and class diagram of the system is provided. The model classifies the potential talented and non-talented enthusiasts correctly with an accuracy of 92.8%, precision of 96% and recall of 88%. We get a miss rate of 11% and F1 score of 92.3%.",
    absbox: "absPopup7",
  },
  {
    title:
      "Machine Learning in Sports Talent Identification: A Systematic Review",
    authors:
      "Nahida Reyaz; Gulfam Ahamad; Naveed Jeelani Khan; Mohd Naseem",
    conferences:
      "IEEE Xplore",
    researchYr: 2022,
    citebox: "popup8",
    image: "assets/images/research-page/neuralNetworks.jpg",
    citation: {
      vancouver:
        "N. Reyaz, G. Ahamad, N. J. Khan and M. Naseem, Machine Learning in Sports Talent Identification: A Systematic Review, 2022 2nd International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET), Patna, India, 2022, pp. 1-6, doi: 10.1109/ICEFEET51821.2022.9848247.",
    },
    abstract:
      "Sports talent identification is drawing an increasing research interest from the academic community. The traditional approaches are being systematized into the scientific approaches. The scientific approaches project an analytical understanding of the Talent Identification and Development (TID) process. This paper reviews the work done in this field from 1996 – 2021. We have reviewed the articles in accordance with the PRISMA guidelines. We trace the computational procedures that have evolved with time, for the sports talent identification. The special focus has been given to the role of machine learning in Cricket Talent Identification. The review delivers and discusses some key findings.",
    absbox: "absPopup8",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
