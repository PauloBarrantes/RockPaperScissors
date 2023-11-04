import { ReactComponent as PaperIcon } from "../images/icon-paper.svg";
import { ReactComponent as RockIcon } from "../images/icon-rock.svg";
import { ReactComponent as ScissorsIcon } from "../images/icon-scissors.svg";
import { ReactComponent as SpockIcon } from "../images/icon-spock.svg";
import { ReactComponent as LizardIcon } from "../images/icon-lizard.svg";

import Element from "../IElement";

export const elements: Element[] = [
  {
    name: "Scissors",
    className: "scissors border-scissors-default hover:border-scissors-hover",
    icon: ScissorsIcon,
    beats: ["Paper", "Lizard"],
  },
  {
    name: "Spock",
    className: "spock border-spock-default hover:border-spock-hover",
    icon: SpockIcon,
    beats: ["Scissors", "Stone"],
  },
  {
    name: "Paper",
    className: "paper border-paper-default hover:border-paper-hover",
    icon: PaperIcon,
    beats: ["Stone", "Spook"],
  },

  {
    name: "Lizard",
    className: "lizard border-lizard-default hover:border-lizard-hover",
    icon: LizardIcon,
    beats: ["Spock", "Paper"],
  },
  {
    name: "Rock",
    className: "rock border-rock-default hover:border-rock-hover",
    icon: RockIcon,
    beats: ["Scissors", "Lizard"],
  },
];
