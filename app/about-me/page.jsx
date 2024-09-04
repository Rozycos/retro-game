import TimedComponentSwitcher from "@/components/common/TimedComponentSwitcher";
import "../../styles/globals.scss";
import AboutMe from "@/components/page-specific/AboutMe/AboutMe";
import Loader from "@/components/common/Loader";

export default function AboutMePage() {
    return (
        <TimedComponentSwitcher 
            ThisComponentTime={2000}
            FirstComponent={Loader} 
            SecondComponent={AboutMe} 
            firstComponentProps={{dots:28, time:50, initialText:'Initializing world', finalText:'Done'}} 
            secondComponentProps={''} 
      />
    );
}