import TimedComponentSwitcher from "@/components/common/TimedComponentSwitcher";
import styles from "../../styles/elements/AboutMe.module.scss";
import AboutMe from "@/components/page-specific/AboutMe/AboutMe";
import LoadingScreen from "@/components/common/LoadingScreen";

export default function AboutMePage() {
    return (
        <div className={styles.container}>
            <TimedComponentSwitcher 
                switchTime={1100}
                FirstComponent={LoadingScreen} 
                SecondComponent={AboutMe} 
                firstComponentProps={{dots:18, time:50, initialText:'Initializing world', finalText:'Done'}} 
                secondComponentProps={''} 
            />
        </div>
    );
}   