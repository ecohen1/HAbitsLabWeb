'use strict'
var app = angular.module("publicationApp", []);
app.controller("publicationCtrl", function($scope) {
    $scope.publications = [
        {"title":"Effects of Coaching on Adherence in Remote Health Monitoring Systems",
        "conference": "ACM Conference on Wireless Health (WH) 2015",
        "description": "Among all of the major organizations, including the World Health Organization, the Centers for Disease Control and the Pew report the focus on disease prevention is critical.",
        "src": "http://dl.acm.org/citation.cfm?id=2811949"},

        {"title": "A Data-Driven Feature Extraction Framework for Predicting the Severity of Condition for Congestive Heart Failure Patients",
        "conference": "IEEE Engineering in Medicine and Biology Society (EMBC) 2015",
        "description": "In this paper, we propose a novel methodology for utilizing disease diagnostic information to predict severity of condition for Congestive Heart Failure (CHF) patients.",
        "src":"http://www.ncbi.nlm.nih.gov/pubmed/26736808"},

        {"title": "Detection of Gestures Associated with Medication Adherence using Smartwatch-based Inertial Sensors",
        "conference": "IEEE Sensors Journal, 2015",
        "description": "Poor adherence to prescription medication can compromise treatment effectiveness and cost the billions of dollars in unnecessary health care expenses.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&arnumber=7315013"},

        {"title": "Power Optimization for Wearable Devices",
        "conference": " IEEE Percom: WristSense, 2015",
        "description": "In recent years, several wearable devices have been proposed for monitoring nutrition intake, tracking energy expenditure, and performing activity recognition.",
        "src": "http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=7134100"},

        {"title": "Improving Compliance in Remote Healthcare Systems Through Smartphone Battery Optimization",
        "conference": "IEEE Journal of Biomedical and Health Informatics",
        "description": "Remote health monitoring (RHM) has emerged as a solution to help reduce the cost burden of unhealthy lifestyles and aging populations.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6827927"},

        {"title": "A Smartwatch-Based Medication Adherence System",
        "conference": "IEEE 12th International Conference on Wearable and Implantable Body Sensor Networks (BSN), 2015",
        "description": "Poor adherence to prescription medication can compromise treatment effectiveness and cost the billions of dollars in unnecessary health care expenses.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=7299348"},

        {"title": "Designing a Robust Activity Recognition Framework for Health and Exergaming Using Wearable Sensors",
        "conference": "IEEE Journal of Biomedical and Health Informatics",
        "description": "Detecting human activity independent of intensity is essential in many applications, primarily in calculating metabolic equivalent rates and extracting human context awareness.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6648432"},

        {"title": "BreathSens: A Continuous On-Bed Respiratory Monitoring System With Torso Localization Using an Unobtrusive Pressure Sensing Array",
        "conference": "IEEE Journal of Biomedical and Health Informatics",
        "description": "The ability to continuously monitor respiration rates of patients in homecare or in clinics is an important goal.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6869013"},

        {"title": "Sleep posture analysis using a dense pressure sensitive bedsheet",
        "conference": "Pervasive and Mobile Computing (PMC) Journal Special Issue 2014",
        "description": "Sleep posture affects the quality of our sleep and is especially important for such medical conditions as sleep apnea and pressure ulcers.",
        "src": "http://www.sciencedirect.com/science/article/pii/S1574119213001326"},

        {"title": "Using Pressure Map Sequences for Recognition of On Bed Rehabilitation Exercises",
        "conference": "IEEE Journal of Biomedical and Health Informatics",
        "description": "Physical rehabilitation is an important process for patients recovering after surgery. In this paper, we propose and develop a framework to monitor on-bed range of motion exercises that allows physical therapists to evaluate patient adherence to set exercise programs. ",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6698387"}
    ];

    $scope.publications2 = [
        {"title": "Using electronic health records to predict severity of condition for congestive heart failure patients",
        "conference": "ACM International Joint Conference on Pervasive and Ubiquitous Computing (Ubicomp) 2014.",
        "description": "We propose a novel way to design an analytics engine based exclusively on electronic health records (EHR).",
        "src": "http://dl.acm.org/citation.cfm?doid=2638728.2638815"},

        {"title": "A dense pressure sensitive bedsheet design for unobtrusive sleep posture monitoring",
        "conference": "Conf. on Pervasive Comp. and Comm (PerCom) 2013",
        "description": "Sleep plays a pivotal role in the quality of life, and sleep posture is related to many medical conditions such as sleep apnea.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6526734"},

        {"title": "On-bed monitoring for range of motion exercises with a pressure sensitive bedsheet",
        "conference": "2013 IEEE International Conference on Body Sensor Networks",
        "description": "This paper presents the design of an on-bed rehabilitation exercise monitoring system that utilizes a high density sensor bedsheet to evaluate active range of motion exercises.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6575475"},

        {"title": "A Framework for Predicting Adherence in Remote Health Monitoring Systems",
        "conference": "ACM Conference on Wireless Health (WH) 2014",
        "description": "Remote health monitoring (RHM) systems have shown potential effectiveness in disease management and prevention.",
        "src": "http://dl.acm.org/citation.cfm?doid=2668883.2669586"},

        {"title": "Non-Invasive Monitoring of Eating Behavior using Spectrogram Analysis in a Wearable Necklace",
        "conference": "IEEE EMBS Conference on Healthcare Innovation & Point-of-Care Healthcare Technologies (PHT) 2014",
        "description": "Food intake levels, hydration, chewing and swallowing rate, and dietary choices are all factors known to impact one's health.",
        "src": "http://emb.citengine.com/event/hipt-2014/paper-details?pdID=2436"},

        {"title": "Remote health monitoring: Predicting outcome success based on contextual features for cardiovascular disease",
        "conference": "IEEE Engineering in Medicine and Biology Society (EMBC) 2014.",
        "description": "Current studies have produced a plethora of remote health monitoring (RHM) systems designed to enhance the care of patients with chronic diseases.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&arnumber=6943953"},

        {"title": "Anti-Cheating: Detecting Self-Inflicted and Impersonator Cheaters for Remote Health Monitoring Systems with Wearable Sensors",
        "conference": "IEEE Body Sensor Networks (BSN) 2014",
        "description": "In remote health monitoring of patient's physical activity, ensuring correctness and authenticity of the received data is essential.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6855623"},

        {"title": "Battery optimization in smartphones for remote health monitoring systems to enhance user adherence",
        "conference": "PErvasive Technologies Related to Assistive Environments (PETRA) 2014",
        "description": "Remote health monitoring (RHM) can help save the cost burden of unhealthy lifestyles. Of increased popularity is the use of smartphones to collect data, measure physical activity, and provide coaching and feedback to users.",
        "src": "http://dl.acm.org/citation.cfm?id=2674407"},

        {"title": "Robust human intensity-varying activity recognition using Stochastic Approximation in wearable sensors",
        "conference": "IEEE Body Sensor Networks (BSN) 2013",
        "description": "Detecting human activity independent of intensity is essential in many applications, primarily in calculating metabolic equivalent rates (MET) and extracting human context awareness from on-body inertial sensors.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6575515"},

        {"title": "Beyond Dr. Google: Early Results of a Personalized Weight-Tracking Smartphone Application and Alert System for Patients with Ascites",
        "conference": "65th Annual Meeting of the American Association for the Study of Liver Disease (AASLD) 2014",
        "description": "Medical management of ascites is currently limited to dietary sodium restriction, diuretics, and large-volume paracentesis (LVP) with few interventions in place to prevent ascites-related complications.",
        "src": "http://onlinelibrary.wiley.com/doi/10.1002/hep.27493/full"}
    ];

    $scope.publications3 = [
        {"title": "Staying Connected: a CVD Risk Intervention for Young Black Women",
        "conference": "American Heart Association (AHA) 2014",
        "description": "Fifty thousand Black women, disproportionately affected by cardiovascular disease (CVD), die annually; 49% of Black women ≥ 20 years have CVD.",
        "src": "http://circ.ahajournals.org/content/130/Suppl_2/A19005.short"},

        {"title": "Support Vector Regression for METs of Exergaming Actions",
        "conference": "IEEE EMBS Conference on Healthcare Innovation & Point-of-Care Healthcare Technologies (PHT) 2014",
        "description": "Sedentary behavior is a root cause of several chronic conditions affecting health of adults and children in the United States and worldwide.",
        "src": "http://emb.citengine.com/event/hipt-2014/paper-details?pdID=2508"},

        {"title": "Multiple Model Analytics for Adverse Event Prediction in Remote Health Monitoring Systems",
        "conference": "IEEE EMBS Conference on Healthcare Innovation & Point-of-Care Healthcare Technologies (PHT) 2014",
        "description": "Remote health monitoring systems (RHMS) are gaining an important role in healthcare by collecting and transmitting patient vital information and providing data analysis and medical adverse event prediction (e.g. hospital readmission prediction).",
        "src": "http://emb.citengine.com/event/hipt-2014/paper-details?pdID=2445"},

        {"title": "Spectrogram-Based Audio Classification of Nutrition Intake",
        "conference": "IEEE EMBS Conference on Healthcare Innovation & Point-of-Care Healthcare Technologies (PHT) 2014",
        "description": "Acoustic monitoring of food intake in an unobtrusive, wearable form-factor can encourage healthy dietary choices by enabling individuals to monitor their eating patterns, maintain regularity in their meal times, and ensure adequate hydration levels.",
        "src": "http://emb.citengine.com/event/hipt-2014/paper-details?pdID=2458"},

        {"title": "A Wearable Nutrition Monitoring System",
        "conference": "IEEE Body Sensor Networks (BSN) 2014",
        "description": "Maintaining appropriate levels of food intake anddeveloping regularity in eating habits is crucial to weight lossand the preservation of a healthy lifestyle.",
        "src": "http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6855620"},

        {"title": "Determining the Single Best Axis for Exercise Repetition Recognition and Counting on SmartWatches",
        "conference": "IEEE Body Sensor Networks (BSN) 2014",
        "description": "Due to the exploding costs of chronic diseasesstemming from physical inactivity, wearable sensor systems toenable remote, continuous monitoring of individuals has increasedin popularity.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6855613"},

        {"title": "Remote patient monitoring: what impact can data analytics have on cost?",
        "conference": "IEEE Body Sensor Networks (BSN) 2013",
        "description": "While significant effort has been made on designing Remote Monitoring Systems (RMS), limited research has been conducted on the potential cost savings that these systems offer in terms of reduction in readmission costs, as well as the costs associated with human resources involved in the intervention process.",
        "src": "http://dl.acm.org/citation.cfm?id=2534108"},

        {"title": "MET calculations from on-body accelerometers for exergaming movements",
        "conference": "IEEE Body Sensor Networks (BSN) 2013",
        "description": "The use of accelerometers to approximate energy expenditure and serve as inputs for exergaming, have both increased in prevalence in response to the worldwide obesity epidemic.",
        "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6575520"},

        {"title": "Improving accuracy in E-Textiles as a platform for pervasive sensing",
        "conference": "IEEE Body Sensor Networks (BSN) 2013",
        "description": "Recently Electronic Textile (E-Textile) technology enables the weaving computation and communication components into the clothes that we wear and objects that we interact with every day.",
        "src": "http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6575514"},

        {"title": "Inconspicuous on-bed respiratory rate monitoring",
        "conference": "PErvasive Technologies Related to Assistive Environments (PETRA) 2013",
        "description": "The monitoring of human respiratory rate is essential in many clinical applications including the detection and monitoring of sleep disorders, the monitoring of newborns for Sudden Infant Death Syndrome (SIDS), and identifying patients at high risk up to 24 hours before an adverse event like stroke and cardiac arrest.",
        "src": "http://dl.acm.org/citation.cfm?id=2504353"}
    ];

    $scope.publications4 = [
      {"title": "Dynamic Task Optimization in Remote Diabetes Monitoring Systems",
      "conference": "Int. Conf. on Healthcare Informatics, Imaging and Systems Biology 2012",
      "description": "Diabetes is the seventh leading cause of death in the United States, but careful symptom monitoring can prevent adverse events.",
      "src": "http://ieeexplore.ieee.org/xpl/abstractAuthors.jsp?arnumber=6366181"},

      {"title": "Opportunistic hierarchical classification for power optimization in wearable movement monitoring systems",
      "conference": "IEEE Int. Symposium on Industrial Embedded Systems (SIES) 2012",
      "description": "Patient monitoring systems are becoming increasingly important in accurately diagnosing and treating growing worldwide chronic conditions especially the obesity epidemic.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&arnumber=6356575"},

      {"title": "WANDA: an end-to-end remote health monitoring and analytics system for heart failure patients",
      "conference": "Wireless Health 2012",
      "description": "Recent advances in wireless sensors, mobile technologies, and cloud computing have made continuous remote monitoring of patients possible.",
      "src": "http://dl.acm.org/citation.cfm?id=2448105"},

      {"title": "Artificial spider: eight-legged arachnid and autonomous learning of locomotion",
      "conference": "SPIE-Unmanned Systems Technology VIII 2006",
      "description": "Evolution has produced organisms whose locomotive agility and adaptivity mock the difficulty faced by robotic scientists.",
      "src": "http://proceedings.spiedigitallibrary.org/proceeding.aspx?articleid=1286440"}
    ]

});
