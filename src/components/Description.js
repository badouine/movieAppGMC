import React from "react";
import {Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Description = () => {

    let history = useHistory();
  return (
    <div>
      <h1>Inception</h1>
      <p>
        Les voitures haut de gamme Jaguar allient design et technologie :
        berlines, voitures de sport et SUV vous feront vivre une expérience de
        conduite unique.
      </p>
      <h1>Burn Out</h1>
      <p>  It stars Uma Thurman as the Bride, who swears revenge on a team of
        assassins (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox)
        and their leader, Bill (David Carradine), after they try to kill her and
        her unborn child. Her journey takes her to Tokyo, where she battles the
        yakuza.</p>
      <h1>Transformer</h1>
      <p>
        The film stars Shia LaBeouf as Sam Witwicky, a teenager who gets caught
        up in a war between the heroic Autobots and the villainous Decepticons,
        two factions of alien robots who can disguise themselves by transforming
        into everyday machinery, primarily vehicles.
      </p> 
      <Button onClick={() => history.push('/')} variant="outline-primary">Go Back</Button>
    </div>
  );
};

export default Description;
