<!-- COPY:
const data = [
{title:"", lore:"", text:"", sub:[]}
]
-->
<!---------------->
<!---------------->
<!----- DATA:----->
<!---------------->
<!---------------->
const eventData = [
{title:"<span class=\"condition-campaign\">Condition 1</span>", lore:"The plague has spread to the last parts of the forts' middle circle and infested all present enemies.", text:"<p>Every enemy also applies Poison on attack.</p>", sub:[]},
{title:"A Hollow is slain", lore:"The slain Hollow strangely recovers from the fatal blow. Its eyes start gleaming in dangerous red and its attitude becomes exceedingly agitated.", text:"<p><span class=\"condition-encounter\">Condition A</span></p><p>Place a token on that Hollow.<br>The Hollow gains +1 damage and can not be slain anymore.<br>Repeat for any other slain Hollow.</p>", sub:[]},
{title:"NPC is slain", lore:"He was fighting valiantly, but his foes overpower him and end him with gory splatter.", text:"<p>Place a token on the spot the NPC died. This token can be picked up during the encounter.<br>If the encounter ends before the token is picked up, it is removed and lost.</p>", sub:[
{title:"Token is picked up", lore:"From the unsightly remains, you recover a shining metal insignia.", text:"<p>Click <button onclick=\"addItem('Insignia')\">here</button> to add Insignia to inventory.</p>"}
]},
{title:"3 rounds ended and <span class=\"condition-encounter\">Condition A</span>", lore:"The onslaught takes no end and you decide to retreat for now, and search for another way.", text:"<b>The encounter ends.</b>", sub:[]}
]

const conclusionData = {title:"Conclusion", lore:"You are unable to breach the gate with the undying, lurking Hollows in your way. Perhaps there is another way to move past this defense...", text:"<p>Path from 'Fort Inner Gate' to 'Fort Courtyard' is blocked.</p><p>Click <button>here</button> to update the map.</p>",sub:[
{title:"NPC is alive", lore:"Gravely wounded, the NPC retreats under your protection.<br>Once in safety, he hands over a shining insignia as a token of thanks and parts ways to leave the haunted fort.", text:"<p>Click <button onclick=\"addItem('Insignia')\">here</button> to add Insignia to inventory.</p>"}
]}

const rewardData = {title:"Rewards", lore:"", text:"<i class=\"fa-solid fa-user\"></i> x2 Souls<br><i class=\"fa-solid fa-user\"></i> Bones<p>Click <button onclick=\"addItem('Souls', 2); addItem('Bones');\">here</button> to add rewards to inventory.</p>",sub:[]}
