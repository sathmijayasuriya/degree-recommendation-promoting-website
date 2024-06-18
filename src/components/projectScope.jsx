import React from "react";

const ProjectScope = (props) => {
  return (
    <div id="projectScope" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Project Scope</h2>
          {/* <p>Explore our research objectives and solutions.</p> */}
        </div>
        <h3>Research Problem</h3>
        <p className="research">
        In Sri Lanka, Advanced Level (A/L) students face a critical juncture upon completing their secondary education: 
        selecting the right Information Technology (IT) degree program at a private university. This decision is pivotal
         as it shapes their academic journey and future career prospects in a rapidly evolving technological landscape. 
         However, the process is fraught with challenges, primarily stemming from the abundance of options available and 
         the lack of personalized guidance tailored to individual student needs.
        The primary challenge lies in the complexity of decision-making faced by A/L students. After completing their A/L education, 
        students often find themselves overwhelmed with choices, ranging from specialized fields like Cyber Security and Data Science
         to broader categories such as IT and Computer Science. Each degree program varies significantly in curriculum, focus areas, career opportunities, and alignment with personal interests and strengths. Without clear guidance or comprehensive information, students may struggle to make informed decisions that align with their long-term career goals and aspirations.
        </p>

<h3>Research Problem Solution</h3>

<p className="research">The research problem solution aims to empower A/L students in Sri Lanka with a comprehensive and personalized approach to selecting IT degree programs at private universities. By leveraging advanced machine learning techniques, particularly a random forest classifier, the solution analyzes a diverse array of inputs including students' A/L streams, interests, skills, and preferences. This data-driven approach enables the system to generate tailored recommendations within broad categories such as IT, Computer Science, Cyber Security, and more.
</p>
<p className="research">Furthermore, integrating eye-tracking analytics enhances recommendation relevance by capturing and analyzing user interactions. This component refines the suggestions based on visual attention patterns, ensuring that the recommended degree programs align closely with individual preferences and priorities. Moreover, the integration of OpenAI facilitates intelligent input assistance, simplifying the profile completion process for students and improving the accuracy of recommendations.
</p>
<p className="research"> The solution not only addresses the challenge of decision-making complexity but also provides students with a user-friendly platform where they can explore multiple degree options aligned with their academic backgrounds and career aspirations. By evaluating past data from surveys, interviews, and workplace visits, the system continuously improves its recommendation accuracy and relevance. Ultimately, this approach aims to enhance student satisfaction and confidence in their university and degree program choices, 
    thereby shaping their future academic and professional success effectively.
</p>
<h3>Research Objectives</h3>
                <div className="researchdiv">
                  <ul>
                    <li className="research1">Developing a robust machine learning algorithm for degree recommendation</li>
                    <li className="research1">Integrating eye-tracking analytics to improve recommendation relevance.</li>
                    <li className="research1">Utilizing OpenAI for enhanced user input assistance.</li>
                    <li className="research1">Evaluating user satisfaction and effectiveness of the recommendation system.</li>
                </ul>
                </div>
                <h3>Methodology</h3>
<p className="research">
The methodology involves comprehensive data collection from surveys, interviews, and past graduate records. Utilizing a random forest classifier, we develop a machine learning algorithm to analyze factors such as A/L stream, interests, and skills. Integration of eye-tracking technology enhances recommendation relevance by capturing user interactions. OpenAI is employed to improve user input assistance, refining profile accuracy. Evaluation encompasses user satisfaction surveys and metrics like recommendation accuracy. This iterative process ensures the effectiveness of our system in guiding A/L students in Sri Lanka towards informed decisions regarding IT degree programs at private universities.
</p>
</div>

    </div>
  );
};

export default ProjectScope;
