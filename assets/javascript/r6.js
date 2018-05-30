$(document).ready(function() {
    //Operators
    var attackOps = ["Ash", "Sledge", "Thatcher", "Thermite", "Twitch", "Montagne", "Glaz", "Fuze", "Blitz", "IQ", "Buck", "Blackbeard", "Capitao", "Hibana", "Jackal", "Ying", "Zofia", "Dokkaebi", "Lion", "Finka"];

    var defendOps = ["Smoke", "Mute", "Castle", "Pulse", "Doc", "Rook", "Kapkan", "Tachanka", "Jager", "Bandit", "Frost", "Valkyrie", "Caveira", "Echo", "Mira", "Lesion", "Ela", "Vigil", "Alibi", "Maestro"];

    var recruitAttack = ["SASA", "FBIA", "GIGNA", "SpetsnazA", "GSG9A"];

    var recruitDefend = ["SASD", "FBID", "GIGND", "SpetsnazD", "GSG9D"];
    //Guns and equipment
        //Attack Ops
    var ashPrimary = ["G36C", "R4-C"];
    var ashSecondary = ["M45 MEUSOC", "5.7 USG"];
    var ashEquipment = ["Breach Charge", "Stun Grenade"];
    var ashGadget = ["Breaching Round"];

    var sledgePrimary = ["M590A1", "L85A2"];
    var sledgeSecondary = ["P226 MK 25", "SMG-11"];
    var sledgeEquipment = ["Frag Grenade", "Stun Grendade"];
    var sledgeGadget = ["Tactical Breaching Hammer"];

    var thatcherPrimary = ["AR33", "M590A1", "L85A2"];
    var thatcherSecondary =["P226 MK 25"];
    var thatcherEquipment = ["Breach Charge", "Claymore"];
    var thatcherGadget = ["EMP Grenade"];

    var thermitePrimary = ["M1014", "556XI"];
    var thermiteSecondary = ["M45 MEUSOC", "5.7 USG"];
    var thermiteEquipment = ["Claymore", "Stun Grenade"];
    var thermiteGadget = ["Exothermic Charge"];

    var twitchPrimary = ["F2", "417", "SG-CQB"];
    var twitchSecondary = ["P9", "LFP586"];
    var twitchEquipment = ["Claymore", "Breach Charge"];
    var twitchGadget = ["Shock Drone"];

    var montagnePrimary = ["Extendable Shield"];
    var montagneSecondary = ["P9", "LFP586"];
    var montagneEquipment = ["Stun Grenade", "Smoke Grenade"];
    var montagneGadget = ["Extendable Shield"];

    var glazPrimary = ["OTs-03"];
    var glazSecondary = ["GSH-18", "PMM"];
    var glazEquipment = ["Smoke Grenade", "Claymore"];
    var glazGadget = ["Flip Sight"];

    var fuzePrimary = ["Ballistic Shield", "6P41", "AK-12"];
    var fuzeSecondary = ["GSH-18", "PMM"];
    var fuzeEquipment = ["Breach Charge", "Smoke Grenade"];
    var fuzeGadget = ["Cluster Charge"];

    var blitzPrimary = ["Flash Shield"];
    var blitzSecondary = ["P12"];
    var blitzEquipment = ["Breach Charge", "Smoke Grenade"];
    var blitzGadget = ["Flash Shield"];

    var iqPrimary = ["AUG A2", "552 Commando", "G8A1"];
    var iqSecondary = ["P12"];
    var iqEquipment = ["Frag Grenade", "Breach Charge"];
    var iqGadget = ["Electronics Detector"];

    var buckPrimary = ["C8-SFW", "CAMRS"];
    var buckSecondary = ["MK1 9MM"];
    var buckEquipment = ["Frag Grenade", "Stun Grenade"];
    var buckGadget = ["Skeleton Key"];

    var blackbeardPrimary = ["MK17 CQB", "SR-25"];
    var blackbeardSecondary = ["D-50"];
    var blackbeardEquipment = ["Breach Charge", "Stun Grenade"];
    var blackbeardGadget = ["Rifle Shield"];

    var capitaoPrimary = ["PARA-308", "M249"];
    var capitaoSecondary = ["PRB92"];
    var capitaoEquipment = ["Claymore", "Stun Grenade"];
    var capitaoGadget = ["Tactical Crossbow"];

    var hibanaPrimary = ["Type-89", "Supernova"];
    var hibanaSecondary = ["P229", "Bearing 9"];
    var hibanaEquipment = ["Stun Grenade", "Breach Charge"];
    var hibanaGadget = ["X-KAIROS"];

    var jackalPrimary = ["C7E", "PDW9", "ITA12L"];
    var jackalSecondary = ["ITA12S", "USP40"];
    var jackalEquipment = ["Breach Charge", "Smoke Grenade"];
    var jackalGadget = ["Eyenox Model III"];

    var yingPrimary = ["T-95 LSW", "SIX12"];
    var yingSecondary = ["Q-929"];
    var yingEquipment = ["Breach Charge", "Claymore"];
    var yingGadget = ["Candela"];

    var zofiaPrimary = ["LMG-E", "M762"];
    var zofiaSecondary = ["RG15"];
    var zofiaEquipment = ["Breach Charge", "Claymore"];
    var zofiaGadget = ["KS79 LIFELINE"];

    var dokkaebiPrimary = ["MK14 EBR", "BOSG 12.2"];
    var dokkaebiSecondary = ["C75 Auto", "SMG-12"];
    var dokkaebiEquipment = ["Smoke Grenade", "Claymore"];
    var dokkaebiGadget = ["Logic Bomb"];

    var lionPrimary = ["V308", "417", "SG-CQB"];
    var lionSecondary = ["P9", "LFP586"];
    var lionEquipment = ["CLaymore", "Stun Grenade"];
    var lionGadget = ["EE-ONE-D"];

    var finkaPrimary = ["Spear .308", "6P41", "SASG-12"];
    var finkaSecondary = ["PMM", "GSH-18"];
    var finkaEquipment = ["Breach Charge", "Stun Grenade"];
    var finkaGadget = ["Adrenal Surge"];

        //Defend Ops

    var smokePrimary = ["FMG-9", "M590A1"];
    var smokeSecondary = ["P226 MK 25", "SMG-11"];
    var smokeEquipment = ["Barbed Wire", "Impact Grenade"];
    var smokeGadget = ["Remote Gas Grenade"];

    var mutePrimary = ["M590A1", "MP5K"];
    var muteSecondary = ["P226 MK 25"];
    var muteEquipment = ["Bullet-proof Camera", "Nitro Cell"];
    var muteGadget = ["Signal Disruptor"];

    var castlePrimary = ["UMP45", "M1014"];
    var castleSecondary = ["5.7 USG", "M45 MEUSOC"];
    var castleEquipment = ["Impact Grenade", "Bullet-proof Camera"];
    var castleGadget = ["Armor Panel"];

    var pulsePrimary = ["UMP45", "M1014"];
    var pulseSecondary = ["5.7 USG", "M45 MEUSOC"];
    var pulseEquipment = ["Nitro Cell", "Barbed Wire"];
    var pulseGadget = ["Heartbeat Sensor"];

    var docPrimary = ["SG-CQB", "MP5", "P90"];
    var docSecondary = ["P9", "LFP586"];
    var docEquipment = ["Barbed Wire", "Bullet-proof Camera"];
    var docGadget = ["Stim Pistol"];

    var rookPrimary = ["SG-CQB", "MP5", "P90"];
    var rookSecondary = ["P9", "LFP586"];
    var rookEquipment = ["Impact Grenade", "Deployable Shield"];
    var rookGadget = ["Armor Pack"];

    var kapkanPrimary = ["9x19VSN", "SASG-12"];
    var kapkanSecondary = ["PMM", "GSH-18"];
    var kapkanEquipment = ["Nitro Cell", "Impact Grenade"];
    var kapkanGadget = ["Entry Denial Device"];

    var tachankaPrimary = ["9x19VSN", "SASG-12"];
    var tachankaSecondary = ["PMM", "GSH-18"];
    var tachankaEquipment = ["Deployable Shield", "Barbed Wire"];
    var tachankaGadget = ["Mounted LMG"];

    var jagerPrimary = ["M870", "416-C Carbine"];
    var jagerSecondary = ["P12"];
    var jagerEquipment = ["Deployable Shield", "Barbed Wire"];
    var jagerGadget = ["Active Defense System"];

    var banditPrimary = ["M870", "MP7"];
    var banditSecondary = ["P12"];
    var banditEquipment = ["Barbed Wire", "Nitro Cell"];
    var banditGadget = ["Shock Wire"];

    var frostPrimary = ["Super 90", "9MM C1"];
    var frostSecondary = ["MK1 9MM"];
    var frostEquipment = ["Bullet-proof Camera", "Barbed Wire"];
    var frostGadget = ["Welcome Mat"];

    var valkyriePrimary = ["MPX", "SPAS-12"];
    var valkyrieSecondary = ["D-50"];
    var valkyrieEquipment = ["Deployable Shield", "Nitro Cell"];
    var valkyrieGadget = ["Black Eye"];

    var caveiraPrimary = ["M12", "SPAS-15"];
    var caveiraSecondary = ["Luison"];
    var caveiraEquipment = ["Impact Grenade", "Bullet-proof Camera"];
    var caveiraGadget = ["Silent Step"];

    var echoPrimary = ["MP5SD", "Supernova"];
    var echoSecondary = ["P229", "Bearing 9"];
    var echoEquipment = ["Deployable Shield", "Barbed Wire"];
    var echoGadget = ["Yokai"];

    var miraPrimary = ["Vector .45 ACP", "ITA12L"];
    var miraSecondary = ["ITA12S", "USP40"];
    var miraEquipment = ["Deployable Shield", "Nitro Cell"];
    var mireGadget = ["Black Mirror"];

    var lesionPrimary = ["SIX12 SD", "T-5 SMG"];
    var lesionSecondary = ["Q-929"];
    var lesionEquipment = ["Deployable Shield", "Impact Grenade"];
    var lesionGadget = ["Gu"];

    var elaPrimary = ["Scorpian EVO 3 A1", "FO-12"];
    var elaSecondary = ["RG15"];
    var elaEquipment = ["Barbed Wire", "Deployable Shield"];
    var elaGadget = ["Grzmot Mine"];

    var vigilPrimary = ["K1A", "BOSG 12.2"];
    var vigilSecondary = ["C75 Auto", "SMG-12"];
    var vigilEquipment = ["Bullet-proof Camera", "Impact Grenade"];
    var vigilGadget = ["ERC-7"];

    var alibiPrimary = ["Mx4 Storm", "ACS12"];
    var alibiSecondary = ["Bailiff 410", "Keratos .357"];
    var alibiEquipment = ["Impact Grenade", "Deployable Shield"];
    var alibiGadget = ["Prisma"];

    var maestroPrimary = ["ALDA 5.56", "ACS12"];
    var maestroSecondary = ["Bailiff 410", "Keratos .357"];
    var maestroEquipment = ["Barbed Wire", "Deployable Shield"];
    var maestroGadget = ["Evil Eye"];

        //Recruits

    var sasAPrimary = ["M590A1", "L85A2", "AR33"];
    var sasASecondary = ["P226 MK 25", "SMG-11"];
    var sasAEquipment1 = ["Breach Charge", "Smoke Grenade"];
    var sasAEquipment2 = ["Stun Grenade", "Frag Grenade"];

    var fbiAPrimary = ["Ballistic Shield", "M1014", "R4-C", "556XI"];
    var fbiASecondary = ["M45 MEUSOC", "5.7 USG"];
    var fbiAEquipment1 = ["Breach Charge", "Smoke Grenade"];
    var fbiAEquipment2 = ["Frag Grenade", "Stun Grenade"];

    var gignAPrimary = ["F2", "Ballistic Shield", "417", "SG-CQB"];
    var gignASecondary = ["P9", "LFP586"];
    var gignAEquipment1 = ["Breach Charge", "Smoke Grenade"];
    var gignAEquipment2 = ["Frag Grenade", "Stun Grenade"];

    var spetsnazAPrimary = ["AK-12", "SASG-12", "6P41"];
    var spetsnazASecondary = ["PMM", "GSH-18"];
    var spetsnazAEquipment1 = ["Breach Charge", "Smoke Grenade"];
    var spetsnazAEquipment2 = ["Frag Grenade", "Stun Grenade"];

    var gsg9APrimary = ["M870", "G8A1", "AUG A2", "552 Commando"];
    var gsg9ASecondary = ["P12"];
    var gsg9AEquipment1 = ["Breach Charge", "Smoke Grenade"];
    var gsg9AEquipment2 = ["Frag Grenade", "Stun Grenade"];

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

    var recruitAttackRand = recruitAttack[Math.floor(Math.random() * recruitAttack.length)];
    var recruitDefendRand = recruitDefend[Math.floor(Math.random() * recruitDefend.length)];

    var attack = function() {
        var attackOpsRand = attackOps[Math.floor(Math.random() * attackOps.length)];

        if (attackOpsRand === "Ash") {
            var ashPRand = ashPrimary[Math.floor(Math.random() * ashPrimary.length)];
            var ashSRand = ashSecondary[Math.floor(Math.random() * ashSecondary.length)];
            var ashERand = ashEquipment[Math.floor(Math.random() * ashEquipment.length)];
            var ashGRand = ashGadget[Math.floor(Math.random() * ashGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(ashPRand);
            $("#display-sgun").append(ashSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(ashERand);
            $("#display-equip2").append(ashGRand);
        }

        if (attackOpsRand === "Sledge") {
            var sledgePRand = sledgePrimary[Math.floor(Math.random() * sledgePrimary.length)];
            var sledgeSRand = sledgeSecondary[Math.floor(Math.random() * sledgeSecondary.length)];
            var sledgeERand = sledgeEquipment[Math.floor(Math.random() * sledgeEquipment.length)];
            var sledgeGRand = sledgeGadget[Math.floor(Math.random() * sledgeGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(sledgePRand);
            $("#display-sgun").append(sledgeSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(sledgeERand);
            $("#display-equip2").append(sledgeGRand);
        }

        if (attackOpsRand === "Thatcher") {
            var thatcherPRand = thatcherPrimary[Math.floor(Math.random() * thatcherPrimary.length)];
            var thatcherSRand = thatcherSecondary[Math.floor(Math.random() * thatcherSecondary.length)];
            var thatcherERand = thatcherEquipment[Math.floor(Math.random() * thatcherEquipment.length)];
            var thatcherGRand = thatcherGadget[Math.floor(Math.random() * thatcherGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(thatcherPRand);
            $("#display-sgun").append(thatcherSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(thatcherERand);
            $("#display-equip2").append(thatcherGRand);
        }

        if (attackOpsRand === "Thermite") {
            var thermitePRand = thermitePrimary[Math.floor(Math.random() * thermitePrimary.length)];
            var thermiteSRand = thermiteSecondary[Math.floor(Math.random() * thermiteSecondary.length)];
            var thermiteERand = thermiteEquipment[Math.floor(Math.random() * thermiteEquipment.length)];
            var thermiteGRand = thermiteGadget[Math.floor(Math.random() * thermiteGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(thermitePRand);
            $("#display-sgun").append(thermiteSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(thermiteERand);
            $("#display-equip2").append(thermiteGRand);
        }

        if (attackOpsRand === "Twitch") {
            var twitchPRand = twitchPrimary[Math.floor(Math.random() * twitchPrimary.length)];
            var twitchSRand = twitchSecondary[Math.floor(Math.random() * twitchSecondary.length)];
            var twitchERand = twitchEquipment[Math.floor(Math.random() * twitchEquipment.length)];
            var twitchGRand = twitchGadget[Math.floor(Math.random() * twitchGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(twitchPRand);
            $("#display-sgun").append(twitchSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(twitchERand);
            $("#display-equip2").append(twitchGRand);
        }

        if (attackOpsRand === "Montagne") {
            var montagnePRand = montagnePrimary[Math.floor(Math.random() * montagnePrimary.length)];
            var montagneSRand = montagneSecondary[Math.floor(Math.random() * montagneSecondary.length)];
            var montagneERand = montagneEquipment[Math.floor(Math.random() * montagneEquipment.length)];
            var montagneGRand = montagneGadget[Math.floor(Math.random() * montagneGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(montagnePRand);
            $("#display-sgun").append(montagneSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(montagneERand);
            $("#display-equip2").append(montagneGRand);
        }

        if (attackOpsRand === "Glaz") {
            var glazPRand = glazPrimary[Math.floor(Math.random() * glazPrimary.length)];
            var glazSRand = glazSecondary[Math.floor(Math.random() * glazSecondary.length)];
            var glazERand = glazEquipment[Math.floor(Math.random() * glazEquipment.length)];
            var glazGRand = glazGadget[Math.floor(Math.random() * glazGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(glazPRand);
            $("#display-sgun").append(glazSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(glazERand);
            $("#display-equip2").append(glazGRand);
        }

        if (attackOpsRand === "Fuze") {
            var fuzePRand = fuzePrimary[Math.floor(Math.random() * fuzePrimary.length)];
            var fuzeSRand = fuzeSecondary[Math.floor(Math.random() * fuzeSecondary.length)];
            var fuzeERand = fuzeEquipment[Math.floor(Math.random() * fuzeEquipment.length)];
            var fuzeGRand = fuzeGadget[Math.floor(Math.random() * fuzeGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(fuzePRand);
            $("#display-sgun").append(fuzeSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(fuzeERand);
            $("#display-equip2").append(fuzeGRand);
        }

        if (attackOpsRand === "Blitz") {
            var blitzPRand = blitzPrimary[Math.floor(Math.random() * blitzPrimary.length)];
            var blitzSRand = blitzSecondary[Math.floor(Math.random() * blitzSecondary.length)];
            var blitzERand = blitzEquipment[Math.floor(Math.random() * blitzEquipment.length)];
            var blitzGRand = blitzGadget[Math.floor(Math.random() * blitzGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(blitzPRand);
            $("#display-sgun").append(blitzSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(blitzERand);
            $("#display-equip2").append(blitzGRand);
        }

        if (attackOpsRand === "IQ") {
            var iqPRand = iqPrimary[Math.floor(Math.random() * iqPrimary.length)];
            var iqSRand = iqSecondary[Math.floor(Math.random() * iqSecondary.length)];
            var iqERand = iqEquipment[Math.floor(Math.random() * iqEquipment.length)];
            var iqGRand = iqGadget[Math.floor(Math.random() * iqGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(iqPRand);
            $("#display-sgun").append(iqSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(iqERand);
            $("#display-equip2").append(iqGRand);
        }

        if (attackOpsRand === "Buck") {
            var buckPRand = buckPrimary[Math.floor(Math.random() * buckPrimary.length)];
            var buckSRand = buckSecondary[Math.floor(Math.random() * buckSecondary.length)];
            var buckERand = buckEquipment[Math.floor(Math.random() * buckEquipment.length)];
            var buckGRand = buckGadget[Math.floor(Math.random() * buckGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(buckPRand);
            $("#display-sgun").append(buckSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(buckERand);
            $("#display-equip2").append(buckGRand);
        }

        if (attackOpsRand === "Blackbeard") {
            var blackbeardPRand = blackbeardPrimary[Math.floor(Math.random() * blackbeardPrimary.length)];
            var blackbeardSRand = blackbeardSecondary[Math.floor(Math.random() * blackbeardSecondary.length)];
            var blackbeardERand = blackbeardEquipment[Math.floor(Math.random() * blackbeardEquipment.length)];
            var blackbeardGRand = blackbeardGadget[Math.floor(Math.random() * blackbeardGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(blackbeardPRand);
            $("#display-sgun").append(blackbeardSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(blackbeardERand);
            $("#display-equip2").append(blackbeardGRand);
        }

        if (attackOpsRand === "Capitao") {
            var capitaoPRand = capitaoPrimary[Math.floor(Math.random() * capitaoPrimary.length)];
            var capitaoSRand = capitaoSecondary[Math.floor(Math.random() * capitaoSecondary.length)];
            var capitaoERand = capitaoEquipment[Math.floor(Math.random() * capitaoEquipment.length)];
            var capitaoGRand = capitaoGadget[Math.floor(Math.random() * capitaoGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(capitaoPRand);
            $("#display-sgun").append(capitaoSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(capitaoERand);
            $("#display-equip2").append(capitaoGRand);
        }

        if (attackOpsRand === "Hibana") {
            var hibanaPRand = hibanaPrimary[Math.floor(Math.random() * hibanaPrimary.length)];
            var hibanaSRand = hibanaSecondary[Math.floor(Math.random() * hibanaSecondary.length)];
            var hibanaERand = hibanaEquipment[Math.floor(Math.random() * hibanaEquipment.length)];
            var hibanaGRand = hibanaGadget[Math.floor(Math.random() * hibanaGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(hibanaPRand);
            $("#display-sgun").append(hibanaSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(hibanaERand);
            $("#display-equip2").append(hibanaGRand);
        }

        if (attackOpsRand === "Jackal") {
            var jackalPRand = jackalPrimary[Math.floor(Math.random() * jackalPrimary.length)];
            var jackalSRand = jackalSecondary[Math.floor(Math.random() * jackalSecondary.length)];
            var jackalERand = jackalEquipment[Math.floor(Math.random() * jackalEquipment.length)];
            var jackalGRand = jackalGadget[Math.floor(Math.random() * jackalGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(jackalPRand);
            $("#display-sgun").append(jackalSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(jackalERand);
            $("#display-equip2").append(jackalGRand);
        }

        if (attackOpsRand === "Ying") {
            var yingPRand = yingPrimary[Math.floor(Math.random() * yingPrimary.length)];
            var yingSRand = yingSecondary[Math.floor(Math.random() * yingSecondary.length)];
            var yingERand = yingEquipment[Math.floor(Math.random() * yingEquipment.length)];
            var yingGRand = yingGadget[Math.floor(Math.random() * yingGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(yingPRand);
            $("#display-sgun").append(yingSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(yingERand);
            $("#display-equip2").append(yingGRand);
        }

        if (attackOpsRand === "Zofia") {
            var zofiaPRand = zofiaPrimary[Math.floor(Math.random() * zofiaPrimary.length)];
            var zofiaSRand = zofiaSecondary[Math.floor(Math.random() * zofiaSecondary.length)];
            var zofiaERand = zofiaEquipment[Math.floor(Math.random() * zofiaEquipment.length)];
            var zofiaGRand = zofiaGadget[Math.floor(Math.random() * zofiaGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(zofiaPRand);
            $("#display-sgun").append(zofiaSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(zofiaERand);
            $("#display-equip2").append(zofiaGRand);
        }

        if (attackOpsRand === "Dokkaebi") {
            var dokkaebiPRand = dokkaebiPrimary[Math.floor(Math.random() * dokkaebiPrimary.length)];
            var dokkaebiSRand = dokkaebiSecondary[Math.floor(Math.random() * dokkaebiSecondary.length)];
            var dokkaebiERand = dokkaebiEquipment[Math.floor(Math.random() * dokkaebiEquipment.length)];
            var dokkaebiGRand = dokkaebiGadget[Math.floor(Math.random() * dokkaebiGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(dokkaebiPRand);
            $("#display-sgun").append(dokkaebiSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(dokkaebiERand);
            $("#display-equip2").append(dokkaebiGRand);
        }

        if (attackOpsRand === "Lion") {
            var lionPRand = lionPrimary[Math.floor(Math.random() * lionPrimary.length)];
            var lionSRand = lionSecondary[Math.floor(Math.random() * lionSecondary.length)];
            var lionERand = lionEquipment[Math.floor(Math.random() * lionEquipment.length)];
            var lionGRand = lionGadget[Math.floor(Math.random() * lionGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(lionPRand);
            $("#display-sgun").append(lionSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(lionERand);
            $("#display-equip2").append(lionGRand);
        }

        if (attackOpsRand === "Finka") {
            var finkaPRand = finkaPrimary[Math.floor(Math.random() * finkaPrimary.length)];
            var finkaSRand = finkaSecondary[Math.floor(Math.random() * finkaSecondary.length)];
            var finkaERand = finkaEquipment[Math.floor(Math.random() * finkaEquipment.length)];
            var finkaGRand = finkaGadget[Math.floor(Math.random() * finkaGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(attackOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(finkaPRand);
            $("#display-sgun").append(finkaSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(finkaERand);
            $("#display-equip2").append(finkaGRand);
        }
    };

    var defend = function() {
        var defendOpsRand = defendOps[Math.floor(Math.random() * defendOps.length)];

        if (defendOpsRand === "Smoke") {
            var smokePRand = smokePrimary[Math.floor(Math.random() * smokePrimary.length)];
            var smokeSRand = smokeSecondary[Math.floor(Math.random() * smokeSecondary.length)];
            var smokeERand = smokeEquipment[Math.floor(Math.random() * smokeEquipment.length)];
            var smokeGRand = smokeGadget[Math.floor(Math.random() * smokeGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(smokePRand);
            $("#display-sgun").append(smokeSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(smokeERand);
            $("#display-equip2").append(smokeGRand);
        }

        if (defendOpsRand === "Mute") {
            var mutePRand = mutePrimary[Math.floor(Math.random() * mutePrimary.length)];
            var muteSRand = muteSecondary[Math.floor(Math.random() * muteSecondary.length)];
            var muteERand = muteEquipment[Math.floor(Math.random() * muteEquipment.length)];
            var muteGRand = muteGadget[Math.floor(Math.random() * muteGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(mutePRand);
            $("#display-sgun").append(muteSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(muteERand);
            $("#display-equip2").append(muteGRand);
        }

        if (defendOpsRand === "Castle") {
            var castlePRand = castlePrimary[Math.floor(Math.random() * castlePrimary.length)];
            var castleSRand = castleSecondary[Math.floor(Math.random() * castleSecondary.length)];
            var castleERand = castleEquipment[Math.floor(Math.random() * castleEquipment.length)];
            var castleGRand = castleGadget[Math.floor(Math.random() * castleGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(castlePRand);
            $("#display-sgun").append(castleSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(castleERand);
            $("#display-equip2").append(castleGRand);
        }

        if (defendOpsRand === "Pulse") {
            var pulsePRand = pulsePrimary[Math.floor(Math.random() * pulsePrimary.length)];
            var pulseSRand = pulseSecondary[Math.floor(Math.random() * pulseSecondary.length)];
            var pulseERand = pulseEquipment[Math.floor(Math.random() * pulseEquipment.length)];
            var pulseGRand = pulseGadget[Math.floor(Math.random() * pulseGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(pulsePRand);
            $("#display-sgun").append(pulseSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(pulseERand);
            $("#display-equip2").append(pulseGRand);
        }

        if (defendOpsRand === "Doc") {
            var docPRand = docPrimary[Math.floor(Math.random() * docPrimary.length)];
            var docSRand = docSecondary[Math.floor(Math.random() * docSecondary.length)];
            var docERand = docEquipment[Math.floor(Math.random() * docEquipment.length)];
            var docGRand = docGadget[Math.floor(Math.random() * docGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(docPRand);
            $("#display-sgun").append(docSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(docERand);
            $("#display-equip2").append(docGRand);
        }

        if (defendOpsRand === "Rook") {
            var rookPRand = rookPrimary[Math.floor(Math.random() * rookPrimary.length)];
            var rookSRand = rookSecondary[Math.floor(Math.random() * rookSecondary.length)];
            var rookERand = rookEquipment[Math.floor(Math.random() * rookEquipment.length)];
            var rookGRand = rookGadget[Math.floor(Math.random() * rookGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(rookPRand);
            $("#display-sgun").append(rookSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(rookERand);
            $("#display-equip2").append(rookGRand);
        }

        if (defendOpsRand === "Kapkan") {
            var kapkanPRand = kapkanPrimary[Math.floor(Math.random() * kapkanPrimary.length)];
            var kapkanSRand = kapkanSecondary[Math.floor(Math.random() * kapkanSecondary.length)];
            var kapkanERand = kapkanEquipment[Math.floor(Math.random() * kapkanEquipment.length)];
            var kapkanGRand = kapkanGadget[Math.floor(Math.random() * kapkanGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(kapkanPRand);
            $("#display-sgun").append(kapkanSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(kapkanERand);
            $("#display-equip2").append(kapkanGRand);
            // The code below this works
            // if (kapkanPRand === "SASG-12") {
            //     $("#ammo").text("ammo");
            // }
        }

        if (defendOpsRand === "Tachanka") {
            var tachankaPRand = tachankaPrimary[Math.floor(Math.random() * tachankaPrimary.length)];
            var tachankaSRand = tachankaSecondary[Math.floor(Math.random() * tachankaSecondary.length)];
            var tachankaERand = tachankaEquipment[Math.floor(Math.random() * tachankaEquipment.length)];
            var tachankaGRand = tachankaGadget[Math.floor(Math.random() * tachankaGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(tachankaPRand);
            $("#display-sgun").append(tachankaSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(tachankaERand);
            $("#display-equip2").append(tachankaGRand);
        }

        if (defendOpsRand === "Jager") {
            var jagerPRand = jagerPrimary[Math.floor(Math.random() * jagerPrimary.length)];
            var jagerSRand = jagerSecondary[Math.floor(Math.random() * jagerSecondary.length)];
            var jagerERand = jagerEquipment[Math.floor(Math.random() * jagerEquipment.length)];
            var jagerGRand = jagerGadget[Math.floor(Math.random() * jagerGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(jagerPRand);
            $("#display-sgun").append(jagerSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(jagerERand);
            $("#display-equip2").append(jagerGRand);
        }

        if (defendOpsRand === "Bandit") {
            var banditPRand = banditPrimary[Math.floor(Math.random() * banditPrimary.length)];
            var banditSRand = banditSecondary[Math.floor(Math.random() * banditSecondary.length)];
            var banditERand = banditEquipment[Math.floor(Math.random() * banditEquipment.length)];
            var banditGRand = banditGadget[Math.floor(Math.random() * banditGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(banditPRand);
            $("#display-sgun").append(banditSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(banditERand);
            $("#display-equip2").append(banditGRand);
        }

        if (defendOpsRand === "Frost") {
            var frostPRand = frostPrimary[Math.floor(Math.random() * frostPrimary.length)];
            var frostSRand = frostSecondary[Math.floor(Math.random() * frostSecondary.length)];
            var frostERand = frostEquipment[Math.floor(Math.random() * frostEquipment.length)];
            var frostGRand = frostGadget[Math.floor(Math.random() * frostGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(frostPRand);
            $("#display-sgun").append(frostSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(frostERand);
            $("#display-equip2").append(frostGRand);
        }

        if (defendOpsRand === "Valkyrie") {
            var valkyriePRand = valkyriePrimary[Math.floor(Math.random() * valkyriePrimary.length)];
            var valkyrieSRand = valkyrieSecondary[Math.floor(Math.random() * valkyrieSecondary.length)];
            var valkyrieERand = valkyrieEquipment[Math.floor(Math.random() * valkyrieEquipment.length)];
            var valkyrieGRand = valkyrieGadget[Math.floor(Math.random() * valkyrieGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(valkyriePRand);
            $("#display-sgun").append(valkyrieSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(valkyrieERand);
            $("#display-equip2").append(valkyrieGRand);
        }

        if (defendOpsRand === "Caveira") {
            var caveiraPRand = caveiraPrimary[Math.floor(Math.random() * caveiraPrimary.length)];
            var caveiraSRand = caveiraSecondary[Math.floor(Math.random() * caveiraSecondary.length)];
            var caveiraERand = caveiraEquipment[Math.floor(Math.random() * caveiraEquipment.length)];
            var caveiraGRand = caveiraGadget[Math.floor(Math.random() * caveiraGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(caveiraPRand);
            $("#display-sgun").append(caveiraSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(caveiraERand);
            $("#display-equip2").append(caveiraGRand);
        }

        if (defendOpsRand === "Echo") {
            var echoPRand = echoPrimary[Math.floor(Math.random() * echoPrimary.length)];
            var echoSRand = echoSecondary[Math.floor(Math.random() * echoSecondary.length)];
            var echoERand = echoEquipment[Math.floor(Math.random() * echoEquipment.length)];
            var echoGRand = echoGadget[Math.floor(Math.random() * echoGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(echoPRand);
            $("#display-sgun").append(echoSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(echoERand);
            $("#display-equip2").append(echoGRand);
        }

        if (defendOpsRand === "Mira") {
            var miraPRand = miraPrimary[Math.floor(Math.random() * miraPrimary.length)];
            var miraSRand = miraSecondary[Math.floor(Math.random() * miraSecondary.length)];
            var miraERand = miraEquipment[Math.floor(Math.random() * miraEquipment.length)];
            var miraGRand = miraGadget[Math.floor(Math.random() * miraGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(miraPRand);
            $("#display-sgun").append(miraSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(miraERand);
            $("#display-equip2").append(miraGRand);
        }

        if (defendOpsRand === "Lesion") {
            var lesionPRand = lesionPrimary[Math.floor(Math.random() * lesionPrimary.length)];
            var lesionSRand = lesionSecondary[Math.floor(Math.random() * lesionSecondary.length)];
            var lesionERand = lesionEquipment[Math.floor(Math.random() * lesionEquipment.length)];
            var lesionGRand = lesionGadget[Math.floor(Math.random() * lesionGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(lesionPRand);
            $("#display-sgun").append(lesionSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(lesionERand);
            $("#display-equip2").append(lesionGRand);
        }

        if (defendOpsRand === "Ela") {
            var elaPRand = elaPrimary[Math.floor(Math.random() * elaPrimary.length)];
            var elaSRand = elaSecondary[Math.floor(Math.random() * elaSecondary.length)];
            var elaERand = elaEquipment[Math.floor(Math.random() * elaEquipment.length)];
            var elaGRand = elaGadget[Math.floor(Math.random() * elaGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(elaPRand);
            $("#display-sgun").append(elaSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(elaERand);
            $("#display-equip2").append(elaGRand);
        }

        if (defendOpsRand === "Vigil") {
            var vigilPRand = vigilPrimary[Math.floor(Math.random() * vigilPrimary.length)];
            var vigilSRand = vigilSecondary[Math.floor(Math.random() * vigilSecondary.length)];
            var vigilERand = vigilEquipment[Math.floor(Math.random() * vigilEquipment.length)];
            var vigilGRand = vigilGadget[Math.floor(Math.random() * vigilGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(vigilPRand);
            $("#display-sgun").append(vigilSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(vigilERand);
            $("#display-equip2").append(vigilGRand);
        }

        if (defendOpsRand === "Alibi") {
            var alibiPRand = alibiPrimary[Math.floor(Math.random() * alibiPrimary.length)];
            var alibiSRand = alibiSecondary[Math.floor(Math.random() * alibiSecondary.length)];
            var alibiERand = alibiEquipment[Math.floor(Math.random() * alibiEquipment.length)];
            var alibiGRand = alibiGadget[Math.floor(Math.random() * alibiGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(alibiPRand);
            $("#display-sgun").append(alibiSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(alibiERand);
            $("#display-equip2").append(alibiGRand);
        }

        if (defendOpsRand === "Maestro") {
            var maestroPRand = maestroPrimary[Math.floor(Math.random() * maestroPrimary.length)];
            var maestroSRand = maestroSecondary[Math.floor(Math.random() * maestroSecondary.length)];
            var maestroERand = maestroEquipment[Math.floor(Math.random() * maestroEquipment.length)];
            var maestroGRand = maestroGadget[Math.floor(Math.random() * maestroGadget.length)];
            $("#div1").html("<div id='opBadge' class='operator'><img src='./assets/images/'></div><br><div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(defendOpsRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(maestroPRand);
            $("#display-sgun").append(maestroSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(maestroERand);
            $("#display-equip2").append(maestroGRand);
        }
    };

    var attackRecruit = function() {
        var recruitAttackRand = recruitAttack[Math.floor(Math.random() * recruitAttack.length)];

        if (recruitAttackRand === "SASA") {
            var sasAPRand = sasAPrimary[Math.floor(Math.random() * sasAPrimary.length)];
            var sasASRand = sasASecondary[Math.floor(Math.random() * sasASecondary.length)];
            var sasAE1Rand = sasAEquipment1[Math.floor(Math.random() * sasAEquipment1.length)];
            var sasAE2Rand = sasAEquipment2[Math.floor(Math.random() * sasAEquipment2.length)];
            $("#div1").html("<div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(recruitAttackRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(sasAPRand);
            $("#display-sgun").append(sasASRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(sasAE1Rand);
            $("#display-equip2").append(sasAE2Rand);
        }

        if (recruitAttackRand === "FBIA") {
            var fbiAPRand = fbiAPrimary[Math.floor(Math.random() * fbiAPrimary.length)];
            var fbiASRand = fbiASecondary[Math.floor(Math.random() * fbiASecondary.length)];
            var fbiAE1Rand = fbiAEquipment1[Math.floor(Math.random() * fbiAEquipment1.length)];
            var fbiAE2Rand = fbiAEquipment2[Math.floor(Math.random() * fbiAEquipment2.length)];
            $("#div1").html("<div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(recruitAttackRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(fbiAPRand);
            $("#display-sgun").append(fbiASRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(fbiAE1Rand);
            $("#display-equip2").append(fbiAE2Rand);
        }

        if (recruitAttackRand === "GIGNA") {
            var gignAPRand = gignAPrimary[Math.floor(Math.random() * gignAPrimary.length)];
            var gignASRand = gignASecondary[Math.floor(Math.random() * gignASecondary.length)];
            var gignAE1Rand = gignAEquipment1[Math.floor(Math.random() * gignAEquipment1.length)];
            var gignAE2Rand = gignAEquipment2[Math.floor(Math.random() * gignAEquipment2.length)];
            $("#div1").html("<div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(recruitAttackRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(gignAPRand);
            $("#display-sgun").append(gignASRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(gignAE1Rand);
            $("#display-equip2").append(gignAE2Rand);
        }

        if (recruitAttackRand === "SpetsnazA") {
            var spetsnazAPRand = spetsnazAPrimary[Math.floor(Math.random() * spetsnazAPrimary.length)];
            var spetsnazASRand = spetsnazASecondary[Math.floor(Math.random() * spetsnazASecondary.length)];
            var spetsnazAE1Rand = spetsnazAEquipment1[Math.floor(Math.random() * 
            spetsnazAEquipment1.length)];
            var spetsnazAE2Rand = spetsnazAEquipment2[Math.floor(Math.random() * 
            spetsnazAEquipment2.length)];
            $("#div1").html("<div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(recruitAttackRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(spetsnazAPRand);
            $("#display-sgun").append(spetsnazASRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(spetsnazAE1Rand);
            $("#display-equip2").append(spetsnazAE2Rand);
        }

        if (recruitAttackRand === "GSG9A") {
            var gsg9APRand = gsg9APrimary[Math.floor(Math.random() * gsg9APrimary.length)];
            var gsg9ASRand = gsg9ASecondary[Math.floor(Math.random() * gsg9ASecondary.length)];
            var gsg9AE1Rand = gsg9AEquipment1[Math.floor(Math.random() * gsg9AEquipment1.length)];
            var gsg9AE2Rand = gsg9AEquipment2[Math.floor(Math.random() * gsg9AEquipment2.length)];
            $("#div1").html("<div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(recruitAttackRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(gsg9APRand);
            $("#display-sgun").append(gsg9ASRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(gsg9AE1Rand);
            $("#display-equip2").append(gsg9AE2Rand);
        }
    };

    var defendRecruit = function() {
        var recruitDefendRand = recruitDefend[Math.floor(Math.random() * recruitDefend.length)];

        if (recruitDefendRand === "SASD") {
            var sasDPRand = sasDPrimary[Math.floor(Math.random() * sasDPrimary.length)];
            var sasDSRand = sasDSecondary[Math.floor(Math.random() * sasDSecondary.length)];
            var sasDE1Rand = sasDEquipment1[Math.floor(Math.random() * sasDEquipment1.length)];
            var sasDE2Rand = sasDEquipment2[Math.floor(Math.random() * sasDEquipment2.length)];
            $("#div1").html("<div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(recruitDefendRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(sasDPRand);
            $("#display-sgun").append(sasDSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(sasDE1Rand);
            $("#display-equip2").append(sasDE2Rand);
        }

        if (recruitDefendRand === "FBID") {
            var fbiDPRand = fbiDPrimary[Math.floor(Math.random() * fbiDPrimary.length)];
            var fbiDSRand = fbiDSecondary[Math.floor(Math.random() * fbiDSecondary.length)];
            var fbiDE1Rand = fbiDEquipment1[Math.floor(Math.random() * fbiDEquipment1.length)];
            var fbiDE2Rand = fbiDEquipment2[Math.floor(Math.random() * fbiDEquipment2.length)];
            $("#div1").html("<div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(recruitDefendRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(fbiDPRand);
            $("#display-sgun").append(fbiDSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(fbiDE1Rand);
            $("#display-equip2").append(fbiDE2Rand);
        }

        if (recruitDefendRand === "GIGND") {
            var gignDPRand = gignDPrimary[Math.floor(Math.random() * gignDPrimary.length)];
            var gignDSRand = gignDSecondary[Math.floor(Math.random() * gignDSecondary.length)];
            var gignDE1Rand = gignDEquipment1[Math.floor(Math.random() * gignDEquipment1.length)];
            var gignDE2Rand = gignDEquipment2[Math.floor(Math.random() * gignDEquipment2.length)];
            $("#div1").html("<div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(recruitDefendRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(gignDPRand);
            $("#display-sgun").append(gignDSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(gignDE1Rand);
            $("#display-equip2").append(gignDE2Rand);
        }

        if (recruitDefendRand === "SpetsnazD") {
            var spetsnazDPRand = spetsnazDPrimary[Math.floor(Math.random() * spetsnazDPrimary.length)];
            var spetsnazDSRand = spetsnazDSecondary[Math.floor(Math.random() * spetsnazDSecondary.length)];
            var spetsnazDE1Rand = spetsnazDEquipment1[Math.floor(Math.random() * 
            spetsnazDEquipment1.length)];
            var spetsnazDE2Rand = spetsnazDEquipment2[Math.floor(Math.random() * 
            spetsnazDEquipment2.length)];
            $("#div1").html("<div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(recruitDefendRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(spetsnazDPRand);
            $("#display-sgun").append(spetsnazDSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(spetsnazDE1Rand);
            $("#display-equip2").append(spetsnazDE2Rand);
        }

        if (recruitDefendRand === "GSG9D") {
            var gsg9DPRand = gsg9DPrimary[Math.floor(Math.random() * gsg9DPrimary.length)];
            var gsg9DSRand = gsg9DSecondary[Math.floor(Math.random() * gsg9DSecondary.length)];
            var gsg9DE1Rand = gsg9DEquipment1[Math.floor(Math.random() * gsg9DEquipment1.length)];
            var gsg9DE2Rand = gsg9DEquipment2[Math.floor(Math.random() * gsg9DEquipment2.length)];
            $("#div1").html("<div id='opPicture' class='operator'><img src='./assets/images/'></div><br><h2 id='display-op' class='operator'></h2>");
            $("#display-op").append(recruitDefendRand);
            $("#div2").html("<div class='guns'><img src='./assets/images/'><h3 id='display-pgun'></h3><p id='ammo'></p></div><br><div class='guns'><img src='./assets/images/'><h3 id='display-sgun'></h3></div>");
            $("#display-pgun").append(gsg9DPRand);
            $("#display-sgun").append(gsg9DSRand);
            $("#div3").html("<div class='equipment'><img src='./assets/images/'><h3 id='display-equip'></h3></div><br><div class='equipment'><img src='./assets/images/'><h3 id='display-equip2'></h3></div>");
            $("#display-equip").append(gsg9DE1Rand);
            $("#display-equip2").append(gsg9DE2Rand);
        }
    };

    //On click events
    $("#attack-op").on("click", function() {
        if (window.location.href.indexOf("index.html") > -1) {
            window.location = "./attack.html";
        }
        else if (window.location.href.indexOf("defense.html") > -1) {
            window.location = "./attack.html";
        }
        else if (window.location.href.indexOf("recruitAttack.html") > -1) {
            window.location = "./attack.html";
        }
        else if (window.location.href.indexOf("recruitDefense.html") > -1) {
            window.location = "./attack.html";
        }
        else {
            attack();
        }
    });

    $("#defend-op").on("click", function() {
        if (window.location.href.indexOf("index.html") > -1) {
            window.location = "./defense.html";
        }
        else if (window.location.href.indexOf("attack.html") > -1) {
            window.location = "./defense.html";
        }
        else if (window.location.href.indexOf("recruitAttack.html") > -1) {
            window.location = "./defense.html";
        }
        else if (window.location.href.indexOf("recruitDefense.html") > -1) {
            window.location = "./defense.html";
        }
        else {
            defend();
        }
    });

    $("#recruit-attack").on("click", function() {
        if (window.location.href.indexOf("index.html") > -1) {
            window.location = "./recruitAttack.html";
        }
        else if (window.location.href.indexOf("defense.html") > -1) {
            window.location = "./recruitAttack.html";
        }
        else if (window.location.href.indexOf("attack.html") > -1) {
            window.location = "./recruitAttack.html";
        }
        else if (window.location.href.indexOf("recruitDefense.html") > -1) {
            window.location = "./recruitAttack.html";
        }
        else {
            attackRecruit();
        }
    });

    $("#recruit-defend").on("click", function() {
        if (window.location.href.indexOf("index.html") > -1) {
            window.location = "./recruitDefense.html";
        }
        else if (window.location.href.indexOf("defense.html") > -1) {
            window.location = "./recruitDefense.html";
        }
        else if (window.location.href.indexOf("recruitAttack.html") > -1) {
            window.location = "./recruitDefense.html";
        }
        else if (window.location.href.indexOf("attack.html") > -1) {
            window.location = "./recruitDefense.html";
        }
        else {
            defendRecruit();
        }
    });

    //On load run the randomize function for the specific page
    $(window).on("load", function() {
        if (window.location.href.indexOf("attack.html") > -1) {
            attack();
        }
        if (window.location.href.indexOf("defense.html") > -1) {
            defend();
        }
        if (window.location.href.indexOf("recruitAttack.html") > -1) {
            attackRecruit();
        }
        if (window.location.href.indexOf("recruitDefense.html") > -1) {
            defendRecruit();
        }
    });
    
});
