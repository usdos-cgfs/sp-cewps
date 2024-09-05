const groupsText = `Title,Users,Permissions
ULO-A,CareyAJ; ChadwickAC; JonesAJ3; KaurM1; McCarthyD2; PerinoCG; SlighAC; WaqarI,Read; Limited Access
ULO-AF,CollierKN; EzzedineR; HussainAS; KahlerWA; MishrikiTA; OlajideLF; RazerJQ; RipleyAB; RiveraG; SmithV2,Read; Limited Access
ULO-AVC,BluntKR; BrownTM2; CharlesWongAX; CliftMW; DixonSA; GreskoAJ; HicksKT; JacksonRF; JansonGK2; ONeilCE; RhodesSA; RobinsonJP; SandidgeDE; SommervilleLB; YorkKE,Read; Limited Access
ULO-BP,KovalchukEN; liggettdn,Read; Limited Access
ULO-CA,BockaV; FreemanT2; GoremsE1; GreeneRB; KimM3; OviedoHP; SmithSL3; SomaP; StramblerLD; WolfJA2,Read; Limited Access
ULO-CGFS,KingSA,Read
ULO-CPR,WeissCB,Read; Limited Access
ULO-CSO,DavisCM3; Handon-DavidsonLD; NewmanKD,Read; Limited Access
ULO-CT,HarrisonLG; HaynesDL; HeltJA; JamesLD; McDanielC; McdanielDW; NasirA; PeeleSV,Read; Limited Access
ULO-DRL,ArteagaK; GaitherRK; HerringOW; HowellSC; jacobscm; JudaprawiraAJ; Keyc; Ortiz-RamirezR; StewartDM,Read; Limited Access
ULO-DS,CoachmanBA; JobeOT; JohnsonGT; JoynerBL; MooreEE2; MulhollandKJ; ShinBM; SimpsonKD; TessoS; TynanKK,Read; Limited Access
ULO-DTS,JohnsonLN,Read; Limited Access
ULO-DTSPO,JohnsonLN,Read
ULO-EAP,GrzelakMB; HassanOF; JohnsonH; morrisji2; turnermc2,Read; Limited Access
ULO-EB,MatusCK; McGillSD2,Read; Limited Access
ULO-ECA,AgrawalA; BullockDL; carterme; FernandezJ4; GarrettIS; GonzalezL4; AdriaH; MatthewsDR; McElrathM1; PowellD; ThompsonDL1,Read; Limited Access
ULO-ENR,GlassAM; MatusCK; McGlaughlinE; WhiteLA2,Read; Limited Access
ULO-EUR,BaileyBM2; BucknebergJL; BushmanSE; ParkerJA; SommaCL2,Read; Limited Access
ULO-F,BradfordCO; GreenRJ,Read
ULO-FSI,BennettRA; BishopPD; BricenoLY; WagnerD2,Read; Limited Access
ULO-H,carterjt; QuirkMK,Read
ULO-HR,LamB; TuckerI,Read; Limited Access
ULO-IBC,Morrist; RossAR,Read; Limited Access
ULO-IBWC,Agner-BlairME; MoehligAJ; MorganDL; RossAR; WilsonB1,Read; Limited Access
ULO-IIP,FelderIM; FrostE; GoodeSL; HigginsVL; SimsML,Read; Limited Access
ULO-IJC,MaloneyB; Morrist; RossAR,Read; Limited Access
ULO-INL,DickersonKA; JohnsonMW2; MotenEV,Read; Limited Access
ULO-INR,HENDERSONTL; JonesDP2; MayesJE,Read; Limited Access
ULO-IO,BaileyBM2; BucknebergJL; BushmanSE; CurtisME; DmytryszynNJ; KrauseAG; McJordanMD; MonshizadaS; tiltoned; ToneyWD,Read; Limited Access
ULO-IRM,BazemoreLC; JohnsonLN,Read; Limited Access
ULO-ISN,BakerJN; BluntKR; BrownTM2; CampbellTR2; CharlesWongAX; CliftMW; DavisDN; DeryTR; DixonSA; GreskoAJ; HartshornJT; HicksKT; JacksonRF; JansonGK2; LonghauserML; LoweDL; MasadaDS; MedinaFX; MillerDE; NealJ; ONeilCE; RhodesSA; RobinsonJP; RobinsonSK1; SandidgeDE; Silva-CastellanosML; SommervilleLB; StanleyCE; ThurnKE; WargowskyTM1; YorkKE,Read; Limited Access
ULO-L,,Read; Limited Access
ULO-MED,ArevaloJA; CunninghamJS; Greenleerl; HewlettIS; RussellMO,Read; Limited Access
ULO-NEA,BlountJE2; ColemanJR1; ColemanSY; DavidsonDL; PhamD; SaaiedI; ThomasJM3,Read; Limited Access
ULO-OBO,DeutschNE; EppersonJC; FassnachtPE; FowlkesB; GriffithDJ; HallWS; JacksonMS; JohnsonCC; JohnsonML6; KeneippAM; LewisKJ1; MartinRL2; MichaelisJ; PoundersEE; SmithRM2; StevensonjordanMN; ValeevaOA; WilliamsDD,Read
ULO-OES,ArteagaK; GaitherRK; HerringOW; HowellSC; jacobscm; JudaprawiraAJ; Keyc; Ortiz-RamirezR; StewartDM,Read; Limited Access
ULO-OIG,BukasaMT; RobinsonLM,Read; Limited Access
ULO-Owners,CohoZP; ForondaC; KelleyC; PickeralJM; TalarekRK,Contribute; Limited Access
ULO-PA,JonesEJ3; SwannJ,Read; Limited Access
ULO-PM,BluntKR; BrownTM2; CharlesWongAX; CliftMW; DixonSA; GreskoAJ; HicksKT; JacksonRF; JansonGK2; ONeilCE; RhodesSA; RobinsonJP; SandidgeDE; SommervilleLB; YorkKE,Read; Limited Access
ULO-PRM,KoubaJG; ThornPY; WilsonSN,Read; Limited Access
ULO-RM,DeLimaKC; liggettdn,Read; Limited Access
ULO-S,BeatyV; BradfordCO; GarciaLM2; GreenRJ; LattibudiereM; NgotieDC; Rivera-HamA,Read; Limited Access
ULO-SCA,BlakeJL; BlountJE2; ColemanSY; DavidsonDL; HalleM; ThomasJM3; wennerstromac,Read; Limited Access
ULO-USUN,AmakerT; MorisonL; RobinsonLS2,Read
ULO-WCF,CastelloS; HagmannGR; HeywardAC; McCarthyD2; McMinnK; PrimeauJT,Read
ULO-WHA,EllisPH; FernandoBJ; JacksonMR2; KrykRJ; ScottCC,Read; Limited Access
ULO-GPA,BentonRR; GoodeSL; HigginsVL; JonesEJ3; SimsML; SwannJ,Read
ULO-M,SmithJE2,Read
ULO-K,MooreKL,Read
ULO-CCR,CorcoranP2; HewlettIS; SanonRX,Read
ULO-ICB,BarnesAS; HeywardJN; WaringWG; WashingtonTL2,Read
ULO-CDP,ElginMD; GreenRJ; KingSA; ReavesCX,Read
ULO-GHSD,GarvinBT; OFrielJ; TeshomeGA,Read`

async function loadGroups() {
    await populateEnsuredUsers();
    
const groupRows = groupsText.split(/\r?\n/).slice(1);

console.log(groupRows)

const groups = groupRows.map((row) => {
    const rowComponents = row.split(',')
    return {
        name: rowComponents[0],
        members: rowComponents[1].split(';'),
        roles: rowComponents[2].split(';')
    }
})

console.log(groups)

groups.map(async (group) => {
    
})

}

const ensuredUsers = {};
async function populateEnsuredUsers() {
  const result = await spFetch("_api/web/siteusers");

  if (!result.isSuccess()) {
    alert("Unable to populate site users");
    return;
  }

  result.value.results
    .filter((u) => u.Email)
    .map((u) => {
      const userKey = u.Email.split("@")[0];
      ensuredUsers[userKey] = u;
    });
}

async function ensureUser(userKey) {
  if (ensuredUsers.hasOwnProperty(userKey)) {
    return ensuredUsers[userKey];
  }

  const uri = `_api/web/ensureuser('${userKey}')`;

  ensuredUsers[userKey] = spFetch(uri, "POST");

  return ensuredUsers[userKey];
}

async function spFetch(url, method = "GET", params = {}) {
  const siteEndpoint = url.startsWith("http")
    ? url
    : _spPageContextInfo.webAbsoluteUrl + "/" + url;

  if (params.body) {
    params.body = JSON.stringify(params.body);
  }
  const requestParams = {
    ...params,
    method,
    headers: {
      Accept: "application/json; odata=verbose;charset=utf-8",
      "content-type": "application/json; odata=verbose;charset=utf-8",
      "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
      ...params?.headers,
    },
  };
  const response = await fetch(siteEndpoint, requestParams);
}
