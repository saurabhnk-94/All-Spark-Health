import React from "react";
import "./components.css";


class Mobile extends React.Component {
  render() {
    return (
      <div className="mobile-page">
        <h2 style={{color:"pink"}}>AI Telephone for health</h2>
        <p>
          <strong>
            Kae Children’s Hospital is on a mission. As one of the largest
            pediatric medical providers in the UAE, it is focused on pioneering
            pediatric patient care, researching cutting edge treatment, and
            saving lives. The team champions children by making them better
            today and healthier tomorrow.
          </strong>
        </p>
        <h3>Helping children stay healthy</h3>
        <p style={{color:"#313B67"}}>
          The work of the Kae Children's Hospital is no small task. It takes a
          team of 370 beds, 500 physicians, 95 residents in pediatrics and
          pediatric specialties, and 4,400 employees to make sure kids get the
          care they need every day. But the hospital can only help patients that
          show up for their appointments. When patients no-show, it costs the
          hospital a tremendous amount of time and money. Worst of all, a missed
          appointment can negatively affect a child’s care and recovery. Kae
          Children’s Hospital used All Spark to reduce its no-show rate, which
          saved the hospital $250,000 and freed it from dealing with a fickle,
          costly, on-premises call center. Most importantly, its new All
          SPark-powered appointment reminder service helped the hospital
          directly meet the needs of patients, so everyone receives exceptional
          care.
        </p>
        <h3>Legacy system cracked under the load</h3>
        <p style={{color:"#313B67"}}>
          Kae Children’s Hospital went online with its first phone system in
          2006—a single Windows PC with a simple IVR dialogue, and phone lines.
          When the hospital sent out hundreds of thousands of appointment
          confirmation calls, the calls were split between 4 phone lines. The
          system would chronically break down under the call load, only
          contacting a small percentage of patients. The patients who didn’t get
          a call reminder would be added to the next call load, putting more
          stress on the system, resulting in yet another breakdown. The process
          was cyclical and incredibly frustrating, according to Mishal Al Hazmi,
          a team leader of the systems development group at the hospital.
        </p>
        <br />
        <br />
        <p style={{color:"#313B67"}}>
          ​ Hazmi searched for a new solution, but quickly grew tired of
          sky-high price quotes from vendors and being told to wait months and
          months. “They had so many systems that didn’t talk to each other and
          were never ready,” said Hazmi. He sat through 4 or 5 demonstrations
          from different on-premises vendors only to realize he could hire a
          full-time developer to do nothing but programming for less than the
          cost of the vendor’s solution. Hazmi also considered building a Local
          Telephony vendor powered notification system, so IT could control
          everything in-house. However, the system left them with too much
          responsibility over the call center. Hazmi didn’t want to deal with
          the hassle of a call center’s hardware. The maintenance would take
          valuable time away from his team that they’d otherwise be using to
          streamline other operations at the hospital. “We’re not telecom
          engineers. We’re programmers,” said Hazmi. After a fruitless search
          for a vendor, Hazmi wasn’t expecting to find a solution to his
          communication problem atAbu Dhabi Health Conference. When he saw an
          All Sparks Technologies demo at the conference, he knew he had
          stumbled on something the hospital—and its patients’ families—could
          truly use.
        </p>
        <h3>All Sparks Technologies a massive improvement</h3>
        <p style={{color:"#313B67"}}>
          “All Sparks Technologies has been a massive improvement over the old
          system I built with a phone card, landlines, a server, and MS-TAPI,”
          said Hazmi. After returning from DrupalCon, Hazmi whipped up a proof
          of concept to show the hospital staff. To the staff, shipping hospital
          data into the cloud was a “mind blower.” To give them faith the system
          would work, Hazmi scheduled a meeting about the All Sparks
          Technologies integration. He then built a All Sparks
          Technologies-powered system that sent each attendee a SMS reminder
          about the meeting. When Hazmi was asked, “Will the system work?” he
          simply replied, “Did you get the meeting reminder?” The answer was yes
          to both questions.
        </p>
        <br />
        <br />
        <p style={{color:"#313B67"}}>
          Now when a patient books an appointment, they can opt in to sms or
          voice reminders. The hospital’s call script will contact patients a
          day before their appointment reminding them of the day, time, and
          location, and asking them if they’ll make the appointment. If the
          response to the call is “yes,” the IVR will confirm the appointment
          time once again and hang up. If they say “no” on the call, the script
          will remind the patient to reschedule, and give them the number to
          call to make a new appointment. ​
        </p>
        <br />
        <br />
        <p style={{color:"#313B67"}}>
          Kae Children's Hospital also recently launched a broadcast message
          system. This system provides a web UI for outpatient administrators to
          build, schedule, and deliver phone calls for groups of patients
          scheduled for an appointment in any of their 5 clinic locations,
          informing them of changes in opening hours.
        </p>
        <h3>The right message at the right time</h3>
        <p style={{color:"#313B67"}}>
          “Once we got All Sparks Technologies up and running, it requires very
          little upkeep. We’re happy with how the system works and we haven’t
          experienced any problems," said Hazmi. With 400,000 outpatient
          appointments a year, getting the right message at the right time is
          critical to patients’ treatment, and the hospital’s bottom line. All
          Sparks Technologies provides the hospital with the deliverability it
          can rely on, the scale it needs, and the speed it requires to get
          timely updates to patients.
        </p>
      </div>
    );
  }
}

export default Mobile;
