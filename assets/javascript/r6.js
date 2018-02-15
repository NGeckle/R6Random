//Arrays
$(document).ready(function() {
    var attackOps = ["Ash", "Sledge", "Thatcher", "Thermite", "Twitch", "Montagne", "Glaz", "Fuze", "Blitz", "IQ", "Buck", "Blackbeard", "Capitao", "Hibana", "Jackal", "Ying", "Zofia", "Dokkaebi"];

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
    var thermiteEquipment = ["Claymore", "Flash Grenade"];

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

    var zofiaPrimary = ["LMG-E", "M762"];
    var zofiaSecondary = ["RG15"];
    var zofiaEquipment = ["Breach Charge", "Claymore"];

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

    var recruitAttackRand = recruitAttack[Math.floor(Math.random() * recruitAttack.length)];
    var recruitDefendRand = recruitDefend[Math.floor(Math.random() * recruitDefend.length)];


    $("#attack-op").on("click", function(attackClick) {
        var attackOpsRand = attackOps[Math.floor(Math.random() * attackOps.length)];
        $("#display-op").text(attackOpsRand);

        if (attackOpsRand === "Ash") {
            var ashPRand = ashPrimary[Math.floor(Math.random() * ashPrimary.length)];
            var ashSRand = ashSecondary[Math.floor(Math.random() * ashSecondary.length)];
            var ashERand = ashEquipment[Math.floor(Math.random() * ashEquipment.length)];
            $("#display-pgun").text(ashPRand);
            $("#display-sgun").text(ashSRand);
            $("#display-equip").text(ashERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Sledge") {
            var sledgePRand = sledgePrimary[Math.floor(Math.random() * sledgePrimary.length)];
            var sledgeSRand = sledgeSecondary[Math.floor(Math.random() * sledgeSecondary.length)];
            var sledgeERand = sledgeEquipment[Math.floor(Math.random() * sledgeEquipment.length)];
            $("#display-pgun").text(sledgePRand);
            $("#display-sgun").text(sledgeSRand);
            $("#display-equip").text(sledgeERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Thatcher") {
            var thatcherPRand = thatcherPrimary[Math.floor(Math.random() * thatcherPrimary.length)];
            var thatcherSRand = thatcherSecondary[Math.floor(Math.random() * thatcherSecondary.length)];
            var thatcherERand = thatcherEquipment[Math.floor(Math.random() * thatcherEquipment.length)];
            $("#display-pgun").text(thatcherPRand);
            $("#display-sgun").text(thatcherSRand);
            $("#display-equip").text(thatcherERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Thermite") {
            var thermitePRand = thermitePrimary[Math.floor(Math.random() * thermitePrimary.length)];
            var thermiteSRand = thermiteSecondary[Math.floor(Math.random() * thermiteSecondary.length)];
            var thermiteERand = thermiteEquipment[Math.floor(Math.random() * thermiteEquipment.length)];
            $("#display-pgun").text(thermitePRand);
            $("#display-sgun").text(thermiteSRand);
            $("#display-equip").text(thermiteERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Twitch") {
            var twitchPRand = twitchPrimary[Math.floor(Math.random() * twitchPrimary.length)];
            var twitchSRand = twitchSecondary[Math.floor(Math.random() * twitchSecondary.length)];
            var twitchERand = twitchEquipment[Math.floor(Math.random() * twitchEquipment.length)];
            $("#display-pgun").text(twitchPRand);
            $("#display-sgun").text(twitchSRand);
            $("#display-equip").text(twitchERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Montagne") {
            var montagnePRand = montagnePrimary[Math.floor(Math.random() * montagnePrimary.length)];
            var montagneSRand = montagneSecondary[Math.floor(Math.random() * montagneSecondary.length)];
            var montagneERand = montagneEquipment[Math.floor(Math.random() * montagneEquipment.length)];
            $("#display-pgun").text(montagnePRand);
            $("#display-sgun").text(montagneSRand);
            $("#display-equip").text(montagneERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Glaz") {
            var glazPRand = glazPrimary[Math.floor(Math.random() * glazPrimary.length)];
            var glazSRand = glazSecondary[Math.floor(Math.random() * glazSecondary.length)];
            var glazERand = glazEquipment[Math.floor(Math.random() * glazEquipment.length)];
            $("#display-pgun").text(glazPRand);
            $("#display-sgun").text(glazSRand);
            $("#display-equip").text(glazERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Fuze") {
            var fuzePRand = fuzePrimary[Math.floor(Math.random() * fuzePrimary.length)];
            var fuzeSRand = fuzeSecondary[Math.floor(Math.random() * fuzeSecondary.length)];
            var fuzeERand = fuzeEquipment[Math.floor(Math.random() * fuzeEquipment.length)];
            $("#display-pgun").text(fuzePRand);
            $("#display-sgun").text(fuzeSRand);
            $("#display-equip").text(fuzeERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Blitz") {
            var blitzPRand = blitzPrimary[Math.floor(Math.random() * blitzPrimary.length)];
            var blitzSRand = blitzSecondary[Math.floor(Math.random() * blitzSecondary.length)];
            var blitzERand = blitzEquipment[Math.floor(Math.random() * blitzEquipment.length)];
            $("#display-pgun").text(blitzPRand);
            $("#display-sgun").text(blitzSRand);
            $("#display-equip").text(blitzERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "IQ") {
            var iqPRand = iqPrimary[Math.floor(Math.random() * iqPrimary.length)];
            var iqSRand = iqSecondary[Math.floor(Math.random() * iqSecondary.length)];
            var iqERand = iqEquipment[Math.floor(Math.random() * iqEquipment.length)];
            $("#display-pgun").text(iqPRand);
            $("#display-sgun").text(iqSRand);
            $("#display-equip").text(iqERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Buck") {
            var buckPRand = buckPrimary[Math.floor(Math.random() * buckPrimary.length)];
            var buckSRand = buckSecondary[Math.floor(Math.random() * buckSecondary.length)];
            var buckERand = buckEquipment[Math.floor(Math.random() * buckEquipment.length)];
            $("#display-pgun").text(buckPRand);
            $("#display-sgun").text(buckSRand);
            $("#display-equip").text(buckERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Blackbeard") {
            var blackbeardPRand = blackbeardPrimary[Math.floor(Math.random() * blackbeardPrimary.length)];
            var blackbeardSRand = blackbeardSecondary[Math.floor(Math.random() * blackbeardSecondary.length)];
            var blackbeardERand = blackbeardEquipment[Math.floor(Math.random() * blackbeardEquipment.length)];
            $("#display-pgun").text(blackbeardPRand);
            $("#display-sgun").text(blackbeardSRand);
            $("#display-equip").text(blackbeardERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Capitao") {
            var capitaoPRand = capitaoPrimary[Math.floor(Math.random() * capitaoPrimary.length)];
            var capitaoSRand = capitaoSecondary[Math.floor(Math.random() * capitaoSecondary.length)];
            var capitaoERand = capitaoEquipment[Math.floor(Math.random() * capitaoEquipment.length)];
            $("#display-pgun").text(capitaoPRand);
            $("#display-sgun").text(capitaoSRand);
            $("#display-equip").text(capitaoERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Hibana") {
            var hibanaPRand = hibanaPrimary[Math.floor(Math.random() * hibanaPrimary.length)];
            var hibanaSRand = hibanaSecondary[Math.floor(Math.random() * hibanaSecondary.length)];
            var hibanaERand = hibanaEquipment[Math.floor(Math.random() * hibanaEquipment.length)];
            $("#display-pgun").text(hibanaPRand);
            $("#display-sgun").text(hibanaSRand);
            $("#display-equip").text(hibanaERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Jackal") {
            var jackalPRand = jackalPrimary[Math.floor(Math.random() * jackalPrimary.length)];
            var jackalSRand = jackalSecondary[Math.floor(Math.random() * jackalSecondary.length)];
            var jackalERand = jackalEquipment[Math.floor(Math.random() * jackalEquipment.length)];
            $("#display-pgun").text(jackalPRand);
            $("#display-sgun").text(jackalSRand);
            $("#display-equip").text(jackalERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Ying") {
            var yingPRand = yingPrimary[Math.floor(Math.random() * yingPrimary.length)];
            var yingSRand = yingSecondary[Math.floor(Math.random() * yingSecondary.length)];
            var yingERand = yingEquipment[Math.floor(Math.random() * yingEquipment.length)];
            $("#display-pgun").text(yingPRand);
            $("#display-sgun").text(yingSRand);
            $("#display-equip").text(yingERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Zofia") {
            var zofiaPRand = zofiaPrimary[Math.floor(Math.random() * zofiaPrimary.length)];
            var zofiaSRand = zofiaSecondary[Math.floor(Math.random() * zofiaSecondary.length)];
            var zofiaERand = zofiaEquipment[Math.floor(Math.random() * zofiaEquipment.length)];
            $("#display-pgun").text(zofiaPRand);
            $("#display-sgun").text(zofiaSRand);
            $("#display-equip").text(zofiaERand);
            $("#display-equip2").text("");
        }

        if (attackOpsRand === "Dokkaebi") {
            var dokkaebiPRand = dokkaebiPrimary[Math.floor(Math.random() * dokkaebiPrimary.length)];
            var dokkaebiSRand = dokkaebiSecondary[Math.floor(Math.random() * dokkaebiSecondary.length)];
            var dokkaebiERand = dokkaebiEquipment[Math.floor(Math.random() * dokkaebiEquipment.length)];
            $("#display-pgun").text(dokkaebiPRand);
            $("#display-sgun").text(dokkaebiSRand);
            $("#display-equip").text(dokkaebiERand);
            $("#display-equip2").text("");
        }
        
    })

    $("#defend-op").on("click", function() {
        var defendOpsRand = defendOps[Math.floor(Math.random() * defendOps.length)];
        $("#display-op").text(defendOpsRand);

        if (defendOpsRand === "Smoke") {
            var smokePRand = smokePrimary[Math.floor(Math.random() * smokePrimary.length)];
            var smokeSRand = smokeSecondary[Math.floor(Math.random() * smokeSecondary.length)];
            var smokeERand = smokeEquipment[Math.floor(Math.random() * smokeEquipment.length)];
            $("#display-pgun").text(smokePRand);
            $("#display-sgun").text(smokeSRand);
            $("#display-equip").text(smokeERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Mute") {
            var mutePRand = mutePrimary[Math.floor(Math.random() * mutePrimary.length)];
            var muteSRand = muteSecondary[Math.floor(Math.random() * muteSecondary.length)];
            var muteERand = muteEquipment[Math.floor(Math.random() * muteEquipment.length)];
            $("#display-pgun").text(mutePRand);
            $("#display-sgun").text(muteSRand);
            $("#display-equip").text(muteERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Castle") {
            var castlePRand = castlePrimary[Math.floor(Math.random() * castlePrimary.length)];
            var castleSRand = castleSecondary[Math.floor(Math.random() * castleSecondary.length)];
            var castleERand = castleEquipment[Math.floor(Math.random() * castleEquipment.length)];
            $("#display-pgun").text(castlePRand);
            $("#display-sgun").text(castleSRand);
            $("#display-equip").text(castleERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Pulse") {
            var pulsePRand = pulsePrimary[Math.floor(Math.random() * pulsePrimary.length)];
            var pulseSRand = pulseSecondary[Math.floor(Math.random() * pulseSecondary.length)];
            var pulseERand = pulseEquipment[Math.floor(Math.random() * pulseEquipment.length)];
            $("#display-pgun").text(pulsePRand);
            $("#display-sgun").text(pulseSRand);
            $("#display-equip").text(pulseERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Doc") {
            var docPRand = docPrimary[Math.floor(Math.random() * docPrimary.length)];
            var docSRand = docSecondary[Math.floor(Math.random() * docSecondary.length)];
            var docERand = docEquipment[Math.floor(Math.random() * docEquipment.length)];
            $("#display-pgun").text(docPRand);
            $("#display-sgun").text(docSRand);
            $("#display-equip").text(docERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Rook") {
            var rookPRand = rookPrimary[Math.floor(Math.random() * rookPrimary.length)];
            var rookSRand = rookSecondary[Math.floor(Math.random() * rookSecondary.length)];
            var rookERand = rookEquipment[Math.floor(Math.random() * rookEquipment.length)];
            $("#display-pgun").text(rookPRand);
            $("#display-sgun").text(rookSRand);
            $("#display-equip").text(rookERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Kapkan") {
            var kapkanPRand = kapkanPrimary[Math.floor(Math.random() * kapkanPrimary.length)];
            var kapkanSRand = kapkanSecondary[Math.floor(Math.random() * kapkanSecondary.length)];
            var kapkanERand = kapkanEquipment[Math.floor(Math.random() * kapkanEquipment.length)];
            $("#display-pgun").text(kapkanPRand);
            $("#display-sgun").text(kapkanSRand);
            $("#display-equip").text(kapkanERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Tachanka") {
            var tachankaPRand = tachankaPrimary[Math.floor(Math.random() * tachankaPrimary.length)];
            var tachankaSRand = tachankaSecondary[Math.floor(Math.random() * tachankaSecondary.length)];
            var tachankaERand = tachankaEquipment[Math.floor(Math.random() * tachankaEquipment.length)];
            $("#display-pgun").text(tachankaPRand);
            $("#display-sgun").text(tachankaSRand);
            $("#display-equip").text(tachankaERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Jager") {
            var jagerPRand = jagerPrimary[Math.floor(Math.random() * jagerPrimary.length)];
            var jagerSRand = jagerSecondary[Math.floor(Math.random() * jagerSecondary.length)];
            var jagerERand = jagerEquipment[Math.floor(Math.random() * jagerEquipment.length)];
            $("#display-pgun").text(jagerPRand);
            $("#display-sgun").text(jagerSRand);
            $("#display-equip").text(jagerERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Bandit") {
            var banditPRand = banditPrimary[Math.floor(Math.random() * banditPrimary.length)];
            var banditSRand = banditSecondary[Math.floor(Math.random() * banditSecondary.length)];
            var banditERand = banditEquipment[Math.floor(Math.random() * banditEquipment.length)];
            $("#display-pgun").text(banditPRand);
            $("#display-sgun").text(banditSRand);
            $("#display-equip").text(banditERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Frost") {
            var frostPRand = frostPrimary[Math.floor(Math.random() * frostPrimary.length)];
            var frostSRand = frostSecondary[Math.floor(Math.random() * frostSecondary.length)];
            var frostERand = frostEquipment[Math.floor(Math.random() * frostEquipment.length)];
            $("#display-pgun").text(frostPRand);
            $("#display-sgun").text(frostSRand);
            $("#display-equip").text(frostERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Valkyrie") {
            var valkyriePRand = valkyriePrimary[Math.floor(Math.random() * valkyriePrimary.length)];
            var valkyrieSRand = valkyrieSecondary[Math.floor(Math.random() * valkyrieSecondary.length)];
            var valkyrieERand = valkyrieEquipment[Math.floor(Math.random() * valkyrieEquipment.length)];
            $("#display-pgun").text(valkyriePRand);
            $("#display-sgun").text(valkyrieSRand);
            $("#display-equip").text(valkyrieERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Caveira") {
            var caveiraPRand = caveiraPrimary[Math.floor(Math.random() * caveiraPrimary.length)];
            var caveiraSRand = caveiraSecondary[Math.floor(Math.random() * caveiraSecondary.length)];
            var caveiraERand = caveiraEquipment[Math.floor(Math.random() * caveiraEquipment.length)];
            $("#display-pgun").text(caveiraPRand);
            $("#display-sgun").text(caveiraSRand);
            $("#display-equip").text(caveiraERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Echo") {
            var echoPRand = echoPrimary[Math.floor(Math.random() * echoPrimary.length)];
            var echoSRand = echoSecondary[Math.floor(Math.random() * echoSecondary.length)];
            var echoERand = echoEquipment[Math.floor(Math.random() * echoEquipment.length)];
            $("#display-pgun").text(echoPRand);
            $("#display-sgun").text(echoSRand);
            $("#display-equip").text(echoERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Mira") {
            var miraPRand = miraPrimary[Math.floor(Math.random() * miraPrimary.length)];
            var miraSRand = miraSecondary[Math.floor(Math.random() * miraSecondary.length)];
            var miraERand = miraEquipment[Math.floor(Math.random() * miraEquipment.length)];
            $("#display-pgun").text(miraPRand);
            $("#display-sgun").text(miraSRand);
            $("#display-equip").text(miraERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Lesion") {
            var lesionPRand = lesionPrimary[Math.floor(Math.random() * lesionPrimary.length)];
            var lesionSRand = lesionSecondary[Math.floor(Math.random() * lesionSecondary.length)];
            var lesionERand = lesionEquipment[Math.floor(Math.random() * lesionEquipment.length)];
            $("#display-pgun").text(lesionPRand);
            $("#display-sgun").text(lesionSRand);
            $("#display-equip").text(lesionERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Ela") {
            var elaPRand = elaPrimary[Math.floor(Math.random() * elaPrimary.length)];
            var elaSRand = elaSecondary[Math.floor(Math.random() * elaSecondary.length)];
            var elaERand = elaEquipment[Math.floor(Math.random() * elaEquipment.length)];
            $("#display-pgun").text(elaPRand);
            $("#display-sgun").text(elaSRand);
            $("#display-equip").text(elaERand);
            $("#display-equip2").text("");
        }

        if (defendOpsRand === "Vigil") {
            var vigilPRand = vigilPrimary[Math.floor(Math.random() * vigilPrimary.length)];
            var vigilSRand = vigilSecondary[Math.floor(Math.random() * vigilSecondary.length)];
            var vigilERand = vigilEquipment[Math.floor(Math.random() * vigilEquipment.length)];
            $("#display-pgun").text(vigilPRand);
            $("#display-sgun").text(vigilSRand);
            $("#display-equip").text(vigilERand);
            $("#display-equip2").text("");
        }
    })

    $("#recruit-attack").on("click", function() {
        var recruitAttackRand = recruitAttack[Math.floor(Math.random() * recruitAttack.length)];
        $("#display-op").text(recruitAttackRand);

        if (recruitAttackRand === "SASA") {
            var sasAPRand = sasAPrimary[Math.floor(Math.random() * sasAPrimary.length)];
            var sasASRand = sasASecondary[Math.floor(Math.random() * sasASecondary.length)];
            var sasAE1Rand = sasAEquipment1[Math.floor(Math.random() * sasAEquipment1.length)];
            var sasAE2Rand = sasAEquipment2[Math.floor(Math.random() * sasAEquipment2.length)];
            $("#display-pgun").text(sasAPRand);
            $("#display-sgun").text(sasASRand);
            $("#display-equip").text(sasAE1Rand);
            $("#display-equip2").text(sasAE2Rand);
        }

        if (recruitAttackRand === "FBIA") {
            var fbiAPRand = fbiAPrimary[Math.floor(Math.random() * fbiAPrimary.length)];
            var fbiASRand = fbiASecondary[Math.floor(Math.random() * fbiASecondary.length)];
            var fbiAE1Rand = fbiAEquipment1[Math.floor(Math.random() * fbiAEquipment1.length)];
            var fbiAE2Rand = fbiAEquipment2[Math.floor(Math.random() * fbiAEquipment2.length)];
            $("#display-pgun").text(fbiAPRand);
            $("#display-sgun").text(fbiASRand);
            $("#display-equip").text(fbiAE1Rand);
            $("#display-equip2").text(fbiAE2Rand);
        }

        if (recruitAttackRand === "GIGNA") {
            var gignAPRand = gignAPrimary[Math.floor(Math.random() * gignAPrimary.length)];
            var gignASRand = gignASecondary[Math.floor(Math.random() * gignASecondary.length)];
            var gignAE1Rand = gignAEquipment1[Math.floor(Math.random() * gignAEquipment1.length)];
            var gignAE2Rand = gignAEquipment2[Math.floor(Math.random() * gignAEquipment2.length)];
            $("#display-pgun").text(gignAPRand);
            $("#display-sgun").text(gignASRand);
            $("#display-equip").text(gignAE1Rand);
            $("#display-equip2").text(gignAE2Rand);
        }

        if (recruitAttackRand === "SpetsnazA") {
            var spetsnazAPRand = spetsnazAPrimary[Math.floor(Math.random() * spetsnazAPrimary.length)];
            var spetsnazASRand = spetsnazASecondary[Math.floor(Math.random() * spetsnazASecondary.length)];
            var spetsnazAE1Rand = spetsnazAEquipment1[Math.floor(Math.random() * spetsnazAEquipment1.length)];
            var spetsnazAE2Rand = spetsnazAEquipment2[Math.floor(Math.random() * spetsnazAEquipment2.length)];
            $("#display-pgun").text(spetsnazAPRand);
            $("#display-sgun").text(spetsnazASRand);
            $("#display-equip").text(spetsnazAE1Rand);
            $("#display-equip2").text(spetsnazAE2Rand);
        }

        if (recruitAttackRand === "GSG9A") {
            var gsg9APRand = gsg9APrimary[Math.floor(Math.random() * gsg9APrimary.length)];
            var gsg9ASRand = gsg9ASecondary[Math.floor(Math.random() * gsg9ASecondary.length)];
            var gsg9AE1Rand = gsg9AEquipment1[Math.floor(Math.random() * gsg9AEquipment1.length)];
            var gsg9AE2Rand = gsg9AEquipment2[Math.floor(Math.random() * gsg9AEquipment2.length)];
            $("#display-pgun").text(gsg9APRand);
            $("#display-sgun").text(gsg9ASRand);
            $("#display-equip").text(gsg9AE1Rand);
            $("#display-equip2").text(gsg9AE2Rand);
        }
    })
    $("#recruit-defend").on("click", function() {
        var recruitDefendRand = recruitDefend[Math.floor(Math.random() * recruitDefend.length)];
        $("#display-op").text(recruitDefendRand);
    

        if (recruitDefendRand === "SASD") {
            var sasDPRand = sasDPrimary[Math.floor(Math.random() * sasDPrimary.length)];
            var sasDSRand = sasDSecondary[Math.floor(Math.random() * sasDSecondary.length)];
            var sasDE1Rand = sasDEquipment1[Math.floor(Math.random() * sasDEquipment1.length)];
            var sasDE2Rand = sasDEquipment2[Math.floor(Math.random() * sasDEquipment2.length)];
            $("#display-pgun").text(sasDPRand);
            $("#display-sgun").text(sasDSRand);
            $("#display-equip").text(sasDE1Rand);
            $("#display-equip2").text(sasDE2Rand);
        }

        if (recruitDefendRand === "FBID") {
            var fbiDPRand = fbiDPrimary[Math.floor(Math.random() * fbiDPrimary.length)];
            var fbiDSRand = fbiDSecondary[Math.floor(Math.random() * fbiDSecondary.length)];
            var fbiDE1Rand = fbiDEquipment1[Math.floor(Math.random() * fbiDEquipment1.length)];
            var fbiDE2Rand = fbiDEquipment2[Math.floor(Math.random() * fbiDEquipment2.length)];
            $("#display-pgun").text(fbiDPRand);
            $("#display-sgun").text(fbiDSRand);
            $("#display-equip").text(fbiDE1Rand);
            $("#display-equip2").text(fbiDE2Rand);
        }

        if (recruitDefendRand === "GIGND") {
            var gignDPRand = gignDPrimary[Math.floor(Math.random() * gignDPrimary.length)];
            var gignDSRand = gignDSecondary[Math.floor(Math.random() * gignDSecondary.length)];
            var gignDE1Rand = gignDEquipment1[Math.floor(Math.random() * gignDEquipment1.length)];
            var gignDE2Rand = gignDEquipment2[Math.floor(Math.random() * gignDEquipment2.length)];
            $("#display-pgun").text(gignDPRand);
            $("#display-sgun").text(gignDSRand);
            $("#display-equip").text(gignDE1Rand);
            $("#display-equip2").text(gignDE2Rand);
        }

        if (recruitDefendRand === "SpetsnazD") {
            var spetsnazDPRand = spetsnazDPrimary[Math.floor(Math.random() * spetsnazDPrimary.length)];
            var spetsnazDSRand = spetsnazDSecondary[Math.floor(Math.random() * spetsnazDSecondary.length)];
            var spetsnazDE1Rand = spetsnazDEquipment1[Math.floor(Math.random() * spetsnazDEquipment1.length)];
            var spetsnazDE2Rand = spetsnazDEquipment2[Math.floor(Math.random() * spetsnazDEquipment2.length)];
            $("#display-pgun").text(spetsnazDPRand);
            $("#display-sgun").text(spetsnazDSRand);
            $("#display-equip").text(spetsnazDE1Rand);
            $("#display-equip2").text(spetsnazDE2Rand);
        }

        if (recruitDefendRand === "GSG9D") {
            var gsg9DPRand = gsg9DPrimary[Math.floor(Math.random() * gsg9DPrimary.length)];
            var gsg9DSRand = gsg9DSecondary[Math.floor(Math.random() * gsg9DSecondary.length)];
            var gsg9DE1Rand = gsg9DEquipment1[Math.floor(Math.random() * gsg9DEquipment1.length)];
            var gsg9DE2Rand = gsg9DEquipment2[Math.floor(Math.random() * gsg9DEquipment2.length)];
            $("#display-pgun").text(gsg9DPRand);
            $("#display-sgun").text(gsg9DSRand);
            $("#display-equip").text(gsg9DE1Rand);
            $("#display-equip2").text(gsg9DE2Rand);
        }
    })
});
