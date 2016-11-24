"use strict";

import Ace from "../ace";
import Plugin, { PluginDescription } from "../plugin";

import Settings from "./settings";
import Changelog from "./changelog";
import HideMobile from "./hide-mobile";
import NoShutdownPrompt from "./no-shutdown-prompt";
import OwnedSkins from "./owned-skins";
import SummonerIconDescription from "./summoner-icon-description";
import Resize from "./resize";
import ChampionGroups from "./champion-groups";
import ClassicCurrency from "./classic-currency";
import FancySelect from "./fancy-select";
import RecentlyPlayed from "./recently-played";
import EasyQueueDodge from "./easy-queue-dodge";
import ChampionProfile from "./champion-profile"

export const PLUGINS: PluginDescription[] = [
    Settings,
    Changelog,
    HideMobile,
    NoShutdownPrompt,
    OwnedSkins,
    SummonerIconDescription,
    Resize,
    ChampionGroups,
    ClassicCurrency,
    FancySelect,
    RecentlyPlayed,
    EasyQueueDodge,
    ChampionProfile
];

export default function register(ace: Ace) {
    PLUGINS.forEach(des => {
        const inst = new Plugin(ace, des);
        ace.registerPlugin(inst);
    });
}