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
            firstComponentProps={{dots:6, time:200, initialText:'Loading', finalText:'Done'}} 
            secondComponentProps={''} 
      />
    );
}