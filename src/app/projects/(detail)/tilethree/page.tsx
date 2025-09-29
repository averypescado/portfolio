import styles from "../layout.module.css";
import Image from "next/image";
import YoutubeWidge from "../../_components/youtubewidge/YoutubeWidge";
import NudgeWidget from "../../_components/nudgewidget/Nudgewidget";
import QuoteContain from "../../_components/quotecontain/Quotecontain";
import Problem from "../../_components/problem/Problem";
import Bottomnav from "../../_components/bottomnav/Bottomnav";

export default function TileThreeProject() {
  return (
    <>
    <div className={styles.main}>
      <p>Take notes with Gemini</p>
      <h1>Helping people who missed the meeting: Increasing usage</h1>
      <div className={styles.hero}>
      <Image
          src="/pic1.png"
          alt="text"
          fill
      />

      </div>
      <div className={styles.impact}>Contextual nudges to turn on notes was the first growth experiment for Meet&apos;s flagship AI feature, Take Notes for Me. This features usage was called out by Sundar in recent earnings call.
      </div> 

      <YoutubeWidge videoId="BtXRNTgsgpU" start={352} end={357} />
      <div className={styles.impact}>
        It performs twice as well as general feature promos and has led to double digit increase in people turning on notes.

      </div>
      <NudgeWidget />
      <div className={styles.impact}> 
        But it started as a much larger, completely different feature.
      </div>

      

      <div className={styles.process}>
        <div className={styles.section}>Process</div>
        <p>
          In August 2023, Google Meet announced the feature &quot;Attend for Me&quot; at Google Cloud NEXT. It attracted a lot of attention, as people were intrigued by the promise of having less meetings.
        </p>
      </div>
      <QuoteContain />
      <div className={styles.process}>
        <p>
          The problem was, there was a big difference between what was announced and what we were going to launch anytime soon. Almost a year after the announcement, we still hadn&apos;t launched anything. The team was getting stressed and ancy, I was tasked with creating a plan for how we could launch and continuously improve.
        </p>
      </div>


        <div className={styles.process}>
          <p>
            <b>Grounding in the core problem</b><br></br>
            I had not previously been working in this area, so I started by grounding myself, and then the team in the core problem we are trying to solve.
          </p>
        </div>

        <Problem />
        
        <div className={styles.process}>
          <p><b>Creating a plan</b><br></br>
          After aligning on the problem, I spent the next few weeks working with the team on a proposal for how we could solve the user problem immediately, and then continuously improve over time. The plan clearly laid out how we could start by being helpful with a nudge to hosts when somebody marked &quot;attend for me&quot; in calendar.
          <br></br><br></br>
          Then we could move on to being helpful and personalized, then finally being helpful, personalized and proactive.
          <br></br><br></br>
          I presented the proposal to leadership to positive feedback. A few weeks later, we launched the host nudge. When a user marks &quot;No&quot; as an rsvp, and the meeting starts, the host is automatically notified to turn on the notes.
          </p>
          <div className={styles.roadmap}>
            <Image 
            fill
            src="/roadmap.gif"
            alt="Picture of the author"
            className={styles.picfill}
          />
        </div>

        <p>
        <b>Returning to the core problem and reassessing</b><br></br>
        The host nudges were extremely successful in getting people to turn on notes more often, and in people feeling more secure in saying &quot;no&quot; to a meeting. Soon after that, we got new product leadership. Since we had clear milestones laid out, it was easy for them to take a look at our plan, and decide that it wasn&apos;t the right time to invest towards getting to &quot;personalized&quot; or &quot;personalized and proactive.&quot;       
        <br></br><br></br>
        By grounding ourselves in the core problem, our team made immediate impact, and make and informed decision about when to pause.
         </p>



      </div>




    </div>
    <Bottomnav previous= "Working in AI" prevref= "/projects/tiletwo" next='Mini Meet Platform' nextref="/projects/tilefour"  />
    </>
  );
} 
