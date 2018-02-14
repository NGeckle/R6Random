//Arrays
var attackOps = ["Ash", "Sledge", "Thatcher", "Thermite", "Twitch", "Montagne", "Glaz", "Fuze", "Blitz", "IQ", "Buck", "Blackbeard", "Capitao", "Hibana", "Jackal", "Ying", "Zophia", "Dokkaebi"];

var defendOps = ["Smoke", "Mute", "Castle", "Pulse", "Doc", "Rook", "Kapkan", "Tachanka", "Jager", "Bandit", "Frost", "Valkyrie", "Caveira", "Echo", "Mira", "Lesion", "Ela", "Vigil"];

var recruitAttack = ["SASA", "FBIA", "GIGNA", "SpetsnazA", "GSG9A"];

var recruitDefend = ["SASD", "FBID", "GIGND", "SpetsnazD", "GSG9D"];
//Guns and equipment
var ashPrimary = ["G36C", "R4-C"];
var ashSecondary = ["M45 MEUSOC", "5.7 USG"];
var ashEquipment = ["Breach Charge", "Flash Grenade"];

var sledgePrimary = ["M590A1", "L85A2"];
var sledgeSecondary = ["P226 MK 25", "SMG-11"];
var sledgeEquipment = ["Frag Grenade", "Flash Grendade"];

var thatcherPrimary = ["AR33", "M590A1", "L85A2"];
var thatcherSecondary =["P226 MK 25"];
var thatcherEquipment = ["Breach Charge", "Claymore"];

var thermitePrimary = ["M1014", "556XI"];
var thermiteSecondary = ["M45 MEUSOC", "5.7 USG"];
var thermiteEquiment = ["Claymore", "Flash Grenade"];

var twitchPrimary = ["F2", "417", "SG-CQB"];
var twitchSecondary = ["P9", "LFP586"];
var twitchEquipment = ["Claymore", "Breach Charge"];

var montagnePrimary = ["Extendable Shield"];
var montagneSecondary = ["P9", "LFP586"];
var montagneEquipment = ["Flash Grenade", "Smoke Grenade"];

var glazPrimary = ["OTs-03"];
var glazSecondary = ["GSH-18", "PMM"];
var glazEquipment = ["Smoke Grenade", "Claymore"];

var fuzePrimary = ["Ballistic Shield", "6P41", "AK-12"];
var fuzeSecondary = ["GSH-18", "PMM"];
var fuzeEquipment = ["Breach Charge", "Smoke Grenade"];

var blitzPrimary = ["Flash Shield"];
var blitzSecondary = ["P12"];
var blitzEquipment = ["Breach Charge", "Smoke Grenade"];

var iqPrimary = ["AUG A2", "552 Commando", "G8A1"];
var iqSecondary = ["P12"];
var iqEquipment = ["Frag Grenade", "Breach Charge"];

var buckPrimary = ["C8-SFW", "CAMRS"];
var buckSecondary = ["MK1 9MM"];
var buckEquipment = ["Frag Grenade", "Flash Grenade"];

var blackbeardPrimary = ["MK17 CQB", "SR-25"];
var blackbeardSecondary = ["D-50"];
var blackbeardEquipment = ["Breach Charge", "Flash Grenade"];

var capitaoPrimary = ["PARA-308", "M249"];
var capitaoSecondary = ["PRB92"];
var capitaoEquipment = ["Claymore", "Flash Grenade"];

var hibanaPrimary = ["Type-89", "Supernova"];
var hibanaSecondary = ["P229", "Bearing 9"];
var hibanaEquipment = ["Flash Grenade", "Claymore"];

var jackalPrimary = ["C7E", "PDW9", "ITA12L"];
var jackalSecondary = ["ITA12S", "USP40"];
var jackalEquipment = ["Breach Charge", "Smoke Grenade"];

var yingPrimary = ["T-95 LSW", "SIX12"];
var yingSecondary = ["Q-929"];
var yingEquipment = ["Breach Charge", "Smoke Grenade"];

var zophiaPrimary = ["LMG-E", "M762"];
var zophiaSecondary = ["RG15"];
var zophiaEquipment = ["Breach Charge", "Claymore"];

var dokkaebiPrimary = ["MK14 EBR", "BOSG 12.2"];
var dokkaebiSecondary = ["C75 Auto", "SMG-12"];
var dokkaebiEquipment = ["Smoke Grenade", "Claymore"];

var smokePrimary = ["FMG-9", "M590A1"];
var smokeSecondary = ["P226 MK 25", "SMG-11"];
var smokeEquipment = ["Barbed Wire", "Impact Grenade"];

var mutePrimary = ["M590A1", "MP5K"];
var muteSecondary = ["P226 MK 25"];
var muteEquipment = ["Deployable Shield", "Nitro Cell"];

var castlePrimary = ["UMP45", "M1014"];
var castleSecondary = ["5.7 USG", "M45 MEUSOC"];
var castleEquipment = ["Impact Grenade", "Deployable Shield"];

var pulsePrimary = ["UMP45", "M1014"];
var pulseSecondary = ["5.7 USG", "M45 MEUSOC"];
var pulseEquipment = ["Nitro Cell", "Barbed Wire"];

var docPrimary = ["SG-CQB", "MP5", "P90"];
var docSecondary = ["P9", "LFP586"];
var docEquipment = ["Barbed Wire", "Deployable Shield"];

var rookPrimary = ["SG-CQB", "MP5", "P90"];
var rookSecondary = ["P9", "LFP586"];
var rookEquipment = ["Impact Grenade", "Deployable Shield"];

var kapkanPrimary = ["9x19VSN", "SASG-12"];
var kapkanSecondary = ["PMM", "GSH-18"];
var kapkanEquipment = ["Nitro Cell", "Barbed Wire"];

var tachankaPrimary = ["9x19VSN", "SASG-12"];
var tachankaSecondary = ["PMM", "GSH-18"];
var tachankaEquipment = ["Deployable Shield", "Barbed Wire"];

var jagerPrimary = ["M870", "416-C Carbine"];
var jagerSecondary = ["P12"];
var jagerEquipment = ["Deployable Shield", "Barbed Wire"];

var banditPrimary = ["M870", "MP7"];
var banditSecondary = ["P12"];
var banditEquipment = ["Barbed Wire", "Nitro Cell"];

var frostPrimary = ["Super 90", "9MM C1"];
var frostSecondary = ["MK1 9MM"];
var frostEquipment = ["Deployable Shield", "Barbed Wire"];

var valkyriePrimary = ["MPX", "SPAS-12"];
var valkyrieSecondary = ["D-50"];
var valkyrieEquipment = ["Deployable Shield", "Nitro Cell"];

var caveiraPrimary = ["M12", "SPAS-15"];
var caveiraSecondary = ["Luison"];
var caveiraEquipment = ["Impact Grenade", "Barbed Wire"];

var echoPrimary = ["MP5SD", "Supernova"];
var echoSecondary = ["P229", "Bearing 9"];
var echoEquipment = ["Deployable Shield", "Barbed Wire"];

var miraPrimary = ["Vector .45 ACP", "ITA12L"];
var miraSecondary = ["ITA12S", "USP40"];
var miraEquipment = ["Deployable Shield", "Nitro Cell"];

var lesionPrimary = ["SIX12 SD", "T-5 SMG"];
var lesionSecondary = ["Q-929"];
var lesionEquipment = ["Deployable Shield", "Impact Grenade"];

var elaPrimary = ["Scorpian EVO 3 A1", "FO-12"];
var elaSecondary = ["RG15"];
var elaEquipment = ["Barbed Wire", "Impact Grenade"];

var vigilPrimary = ["K1A", "BOSG 12.2"];
var vigilSecondary = ["C75 Auto", "SMG-12"];
var vigilEquipment = ["Barbed Wire", "Impact Grenade"];

var sasAPrimary = ["M590A1", "L85A2", "AR33"];
var sasASecondary = ["P226 MK 25", "SMG-11"];
var sasAEquipment1 = ["Breach Charge", "Smoke Grenade"];
var sasAEquipment2 = ["Flash Grenade", "Frag Grenade"];

var fbiAPrimary = ["Ballistic Shield", "M1014", "R4-C", "556XI"];
var fbiASecondary = ["M45 MEUSOC", "5.7 USG"];
var fbiAEquipment1 = ["Breach Charge", "Smoke Grenade"];
var fbiAEquipment2 = ["Frag Grenade", "Flash Grenade"];

var gignAPrimary = ["F2", "Ballistic Shield", "417", "SG-CQB"];
var gignASecondary = ["P9", "LFP586"];
var gignAEquipment1 = ["Breach Charge", "Smoke Grenade"];
var gignAEquipment2 = ["Frag Grenade", "Flash Grenade"];

var spetsnazAPrimary = ["AK-12", "SASG-12", "6P41"];
var spetsnazASecondary = ["PMM", "GSH-18"];
var spetsnazAEquipment1 = ["Breach Charge", "Smoke Grenade"];
var spetsnazAEquipment2 = ["Frag Grenade", "Flash Grenade"];

var gsg9APrimary = ["M870", "G8A1", "AUG A2", "552 Commando"];
var gsg9ASecondary = ["P12"];
var gsg9AEquipment1 = ["Breach Charge", "Smoke Grenade"];
var gsg9AEquipment2 = ["Frag Grenade", "Flash Grenade"];

var sasDPrimary = ["MP5K", "M590A1", "FMG-9"];
var sasDSecondary = ["P226 MK 25", "SMG-11"];
var sasDEquipment1 = ["Barbed Wire"];
var sasDEquipment2 = ["Deployable Shield", "Nitro Cell"];

var fbiDPrimary = ["UMP45", "M1014"];
var fbiDSecondary = ["M45 MEUSOC", "5.7 USG"];
var fbiDEquipment1 = ["Barbed Wire"];
var fbiDEquipment2 = ["Deployable Shield", "Nitro Cell"];

var gignDPrimary = ["MP5", "P90", "SG-CQB"];
var gignDSecondary = ["P9", "LFP586"];
var gignDEquipment1 = ["Barbed Wire"];
var gignDEquipment2 = ["Deployable Shield", "Nitro Cell"];

var spetsnazDPrimary = ["9x19VSN", "SASG-12"];
var spetsnazDSecondary = ["PMM", "GSH-18"];
var spetsnazDEquipment1 = ["Barbed Wire"];
var spetsnazDEquipment2 = ["Deployable Shield", "Nitro Cell"];

var gsg9DPrimary = ["M870", "MP7", "416-C Carbine"];
var gsg9DSecondary = ["P12"];
var gsg9DEquipment1 = ["Barbed Wire"];
var gsg9DEquipment2 = ["Deployable Shield", "Nitro Cell"];


