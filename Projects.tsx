import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft, Search, Filter, X } from 'lucide-react';
import { usePageView } from '../hooks/usePageView';

type LinkSection = {
  title: string;
  links: string[];
};

const linkSections: LinkSection[] = [
   {
    title: "RammerHead",
    links: [
    "https://emberejmsunblocked.plantah2oasis.cl/",  
    "https://qwertyuiopasdfghj.plantah2oasis.cl/",  
    "https://pbskidslearningindianetwork.giantrobotfactory.com/",  
    "https://classgregtonae.association-solefe.fr/",  
    "https://notfrodem.plantah2oasis.cl/",  
    "https://rh.teacherease.net/",  
    "https://sciencefun.exmec.cl/",  
    "https://gardevoir62.lqtai.com/",  
    "https://math.planthaven.com.au/",  
    "https://ejmsproxy.plantah2oasis.cl/",  
    "https://learn.past.history.vikinggroup.net/",  
    "https://quizzit.osteopatka.sk/",  
    "https://edpuzzle.marwire.es/",  
    "https://sand-proxyxy.viiic.net/",  
    "https://worldofmath.thedonohues.org/",  
    "https://practice.qwezt.com/",  
    "https://dynamic.qlabs.pro/",  
    "https://practice.hse.tw/",  
    "https://study-resources.g8z.net/",  
    "https://verdilia1808hfa.8bit.ca/",  
    "https://amazingness.centrodiagnosticogenetico.com/",  
    "https://gannonistoocool.qualitypoolsboulder.com/",  
    "https://ocrrefererencelanguage.damidero.ar/",  
    "https://librarygroup.seburn.net/",  
    "https://7225575.swondude.com/",  
    "https://proxy-creator-rammer.bigheadpromo.com/",  
    "https://proxy-creator-rammer.privateimport.jp/",  
    "https://proxy-creator-rammer.saturdaynitespecial.ca/",  
    "https://piracybad.fairuse.org/",  
    "https://observingskibiditoiletisoneofmyfavoriteactivities.macao.net/",  
    "https://31415926.daneisaweeb.browell.ar/",  
    "https://unblock.party/",  
    "https://2ammando.autobothq.com/",  
    "https://mathemmatics.how.to.capisi.se/",  
    "https://history.wiki.prjct.com/",  
    "https://tge.hyundai-cme.net/",  
    "https://q.azulnaturalbeef.com/",  
    "https://test-872346.apps.dj/",  
    "https://fast-test.rammerhead.furkanpowered.com/",  
    "https://good.e-m-a-i-l.org/",  
    "https://geography.otzivs.ru/",  
    "https://zaver.minecraftnoob.com/",  
    "https://learningforfunyay.suredoc.net/",  
    "https://1029384756isacoolstring.thedesktop.com/",  
    "https://thanksforthehelp.wikilegia.com/",  
    "https://ok.chibra.cl/",  
    "https://study.booka.dj/",  
    "https://idc.palomadi.ar/",  
    "https://and.palomadi.ar/",  
    "https://go.away.pk/",  
    "https://idk.palomadi.ar/",  
    "https://why.palomadi.ar/",  
    "https://spinnacash.away.pk/",  
    "https://moinpostedthegyattone.away.pk/",  
    "https://ishouldstop.away.pk/",  
    "https://sethandmoinareannoying.away.pk/",  
    "https://thomascooked.away.pk/",  
    "https://sebasistooskibidi.away.pk/",  
    "https://why.xypka.xyz/",  
    "https://idc.away.pk/",  
    "https://and.away.pk/",  
    "https://idk.away.pk/",  
    "https://jadenchenstopplayingflorr.j82.org/",  
    "https://realsheet.nexalfa.com/",  
    "https://realsheet.wellent.hk/",  
    "https://yourskibilol.blakedavidson.me/",  
    "https://proxy-creator-dayo.sweatshopp.us/",  
    "https://jason.chibra.cl/",  
    "https://5.mvhirsch.de/",  
    "https://b.focusmem-romandie.ch/",  
    "https://j.cicles.cat/",  
    "https://1.boclet.net/",  
    "https://theyaintbelieveinusezggtho.ehcp.eu/",  
    "https://skibidiohiogrimaceshakeleveltengyatmadsus.scottexteriors.com/",  
    "https://cp.iscool.scottexteriors.com/",  
    "https://lancetheacnemonster.browell.ar/",  
    "https://geometry.embeddedonline.org/",  
    "https://space.kitmadethis.seburn.net/",  
    "https://amazingscenery.lospenitentes.com/",  
    "https://geographytraining.wayner.ca/",  
    "https://legion.shootsell.com/",  
    "https://10.macao.net/",  
    "https://frenchhelp.alte.ca/",  
    "https://geometrytutor.actsministries.org/",  
    "https://pillowbread.yes.pii.at/",  
    "https://schoolsources.buys.ru/",  
    "https://biologyap.csproject.org/",  
    "https://totallymath.cloudsites.me/",  
    "https://nhkmathvideostudent.runrenedu.com/",  
    "https://64r.grigorev.fi/",  
    "https://ik6.consultancy-x.com/",  
    "https://lkjh.apakes.com.my/",  
    "https://yrtgr.pcinit.com/",  
    "https://qwedsa.animeking.dk/",  
    "https://you.jcho.com/",  
    "https://makhub.yehua.cl/",  
    "https://okhub.ctx.cl/",  
    "https://69kho.dynet.com/",  
    "https://remiesspace.rove.cl/",  
    "https://nikihub.rove.cl/",  
    "https://ehms.jaytex.org/",  
    "https://pornhub.bloodforthebloodgod.com/",  
    "https://ejaculation.j82.org/",  
    "https://kelvinxuisgay.akuma.me/",  
    "https://canvaclasses.abatek.com/",  
    "https://rammerhammer.guitarasia.com/",  
    "https://surfingking2.1337.cx/",  
    "https://rammerhead.serveblog.net/",  
    "https://u3yfhr98.rammerhead.furkanpowered.com/",  
    "https://345y64567567uh.rammerhead.furkanpowered.com/",  
    "https://78342.rammerhead.furkanpowered.com/",  
    "https://ewrgwrgtergt.rammerhead.furkanpowered.com/",  
    "https://ertgt45t.rammerhead.furkanpowered.com/",  
    "https://mathcoding.styledcomputing.com/",  
    "https://hehehehaw.ajalo.com/",  
    "https://bee-movie.minecraftnoob.com/"
    ]
  },
  {
    title: "Interstellar",
    links: [
    "https://tools.development.sanluix.org/",  
    "https://kappa.y.glenwaverleychurches.org/",  
    "https://epsilon.y.glenwaverleychurches.org/",  
    "https://roundrockisd.online/",  
    "https://adsadkjsadjksakldjxx.math-solver.online/",  
    "https://youth.prosports.cl/",  
    "https://football-wa.deakinsports.com.au/",  
    "https://lights.skylinedesignstudio.com.au/",  
    "https://cdn.i-mind.cl/",  
    "https://space-history.us.to/",  
    "https://stats.volkszaehler.org/",  
    "https://sunrise.sun.2of1.org/",  
    "https://s.j0.icom.org.np/",  
    "https://frontend.development.sanluix.org/",  
    "https://r.j0.icom.org.np/",  
    "https://n.c.gracemp.org/",  
    "https://demo.cloud.rigaprecast.com/",  
    "https://mobile.development.sanluix.org/",  
    "https://construct.rustyfoundation.com/",  
    "https://law.dhconsulting.cl/",  
    "https://1.videospeed.cl/",  
    "https://hiphop.symphonic-music.com/",  
    "https://soccer.oldsouthmarlinclub.com/",  
    "https://1.vivocolor.cl/",  
    "https://boeing.morlockaerospace.com/",  
    "https://mre.stormfood.com/",  
    "https://entrepreneurship.keybusinessconnection.com/",  
    "https://1.burgermap.org/",  
    "https://2.intothelightprod.com/",  
    "https://the.strategyofcombat.com/",  
    "https://testing.sgmlguru.org/",  
    "https://china.dingshun.hk/",  
    "https://books.michelleingah.com/",  
    "https://cheap.showmyhomes.com/",  
    "https://1.rodolfocolen.com/",  
    "https://dove.soapclient.com/",  
    "https://int.adepoju.org/",  
    "https://spacial-awareness.potomacriversafetycommittee.org/",  
    "https://safety.electricalone.com/",  
    "https://training.tecteach.net/",  
    "https://hygiene.soapagent.com/",  
    "https://s1.cambrianscientific.com/",  
    "https://meteor.newsofmaricopa.com/",  
    "https://dramatic-arts.mackproductions.com/",  
    "https://starrprox.my.to/",  
    "https://edumath.xyz/",  
    "https://1.southwestvoodoo.com/",  
    "https://dove.soapagent.com/",  
    "https://quarterpounder.mrlewburger.com/"  
    ]
  },
  {
    title: "Sodium",
    links: [
    "https://sodium-5h8.pages.dev/welcome",  
    "https://beta.sodium-5h8.pages.dev/welcome",  
    "https://sodium.onrender.com/welcome.html",  
    "https://sodium-5h8.pages.dev",  
    "https://v2.sodium-5h8.pages.dev/welcome"  
    ]
  },
  {
    title: "Doge Unblocker",
    links: [
      "https://surfdoge.pro/app",
      "https://testing1235.punked.us/",
      "https://researchasia99.farted.net/",
      "https://mines.5thaurora.com/",
      "https://lickmytipandbusthard.vercel.app/",
      "https://v3-fawn-five.vercel.app/app",
      "https://i-love-sticking-it-in-autistic-kids.nard.ca/",
      "https://v4-murex.vercel.app/app",
      "https://lililqpqlilil.vercel.app/app",
      "https://nathan-is-gay.vercel.app/app",
      "https://gyat-gyat-gyat-allday.vercel.app/",
      "https://themountains.learnwithalpine.org/",
      "https://dogeunblockeriscool.mobil-ray.ru/",
      "https://ridwanssnaefss.cissp.or.id/",
      "https://mines.5thaurora.com/",
      "https://i-kidnap-kids-with-downsyndrome-then-squirt-my-sauce-in-them.us.to/",
      "https://beluganotreal.vercel.app/app",
      "https://alain.sdsrp.com/",
      "https://school.sdsrp.com/",
      "https://student.sspcschools.com/",
      "https://ilikerapingkidsandputtingmydingllinginthemthenmakeingmilk.vercel.app/app",
      "https://mathpractice.ugli.se/",
      "https://mathhelp1.jlengineering.se/",
      "https://farts-six.vercel.app/",
      "https://itwasmadeformyschool.vercel.app/",
      "https://s.worksheets.lol/",
      "https://idk-2s4ts-projects.vercel.app/",
      "https://idk-2s4ts-projects.vercel.app/",
      "https://dogeontop1234.kalbas.com.vn/",
      "https://s.worksheets.lol/",
      "https://itwasmadeformyschool.vercel.app/",
      "https://i-have-kids-in-my-basement.vercel.app/app",
      "https://ilikerapingkidsandputtingmydingllinginthemthenmakeingmilk.vercel.app/app",
      "https://jstrisisez.vercel.app/",
      "https://doge-fork-rho.vercel.app/apps",
      "https://doge-network-v4-smoky.vercel.app/app",
      "https://green-fn-eight.vercel.app/",
      "https://mathpractice.ugli.se/",
      "https://notadogev3linkbylucas.vercel.app/app",
      "https://holasoy.vercel.app/"
    ]
  },
  {
    title: "Abyss",
    links: [
      "https://belly.assuregloves.com/",
      "https://therapy.session.consultancy-x.com/",
      "https://bread.rheinfathia.com/",
      "https://arrow.rheinfathia.com/",
      "https://soysauce-cheap.kawa-kun.com/",
      "https://basis.lutyk.com.ar/",
      "https://intoabyss2.1337.cx/",
      "https://socialstudies.uk.jlh.com.my/",
      "https://schoology.com.wiftee.com/",
      "https://point-to-ip.galecsy.com/",
      "https://math.kittendev.xyz/",
      "https://range.newhopes.info/",
      "https://makeone7.scottexteriors.com/",
      "https://minnetonkahighschool.potomacriversafetycommittee.org/",
      "https://fraud.newhopes.info/",
      "https://smoke.assuregloves.com/",
      "https://grant.newhopes.info/",
      "https://hohohoho.santa.tafca.co.uk/",
      "https://bowldogmadethis.potomacriversafetycommittee.org/",
      "https://right.newhopes.info/",
      "https://crown.rheinfathia.com/",
      "https://grind.idialup.co.za/",
      "https://spoil.lutyk.com.ar/",
      "https://googledrive.es-1197.info/",
      "https://charm.lutyk.com.ar/",
      "https://airpatrol.gov.atlanticcommunications.net/",
      "https://8ij.rabizand.ir/",
      "https://edpuzzle.smartinnovation.md/",
      "https://makeone3.scottexteriors.com/",
      "https://makeone4.scottexteriors.com/",
      "https://googledrive.potomacriversafetycommittee.org/",
      "https://donaldttrumpplaysdrums.1337.cx/",
      "https://maths.jumpingcrab.com/",
      "https://dozen.newhopes.info/",
      "https://child.idialup.co.za/",
      "https://applyforcolleges.wiki.gd/",
      "https://chief.lutyk.com.ar/",
      "https://math.learning.uk.rsjug.org/",
      "https://swear.idialup.co.za/",
      "https://schooltests.moonangel.com/",
      "https://housesforsale.home.kg/",
      "https://naturaldisasters.baselinux.net/",
      "https://edpuzzle.com.bygone-transport.co.uk/",
      "https://makeone9.scottexteriors.com/",
      "https://obese.pintravel.ro/",
      "https://stock.pintravel.ro/",
      "https://mysso.ayrnatales.net/",
      "https://ample.oresumodaopera.com.br/",
      "https://intoabyss1.1337.cx/",
      "https://shine.lutyk.com.ar/",
      "https://locations.showmyhomes.com/",
      "https://googledrive.smartinnovation.md/",
      "https://collegeapp.ma.chickenkiller.com/",
      "https://worth.newhopes.info/",
      "https://aaaaa.kvmcommunity.com/"
    ]
  },
  {
    title: "Tinf0il",
    links: [
      "https://tinf0il.online/index.html",
      "https://chromebook.digital/",
      "https://schoology.college/",
      "https://compsci.college/",
      "https://spanish101.college/",
      "https://commonapp.college/",
      "https://rakhmatullo.gay/"
    ]
  },
  {
    title: "Shadow Browser",
    links: [
      "https://phantom.lol/",
      "https://phantomwebworks.org/"
    ]
  },
  {
    title: "Shuttle",
    links: [
      "https://math.apsago.com/",
      "https://counting.jweststudio.com/",
      "https://art.ontariobsd.net/",
      "https://geometry.precisewarehousing.com/",
      "https://math.faverybishop.com/",
      "https://algebra.sembiring.com/",
      "https://algebra.sjtech.org/",
      "https://math.velkat.org/",
      "https://math.ajatar.org/",
      "https://algebra.stickyricecakes.com/",
      "https://space.banquick.com/",
      "https://math.polonisgroup.com/",
      "https://math.smelle.net/",
      "https://math.abasma.com/",
      "https://link.embedding.mov/"
    ]
  },
  {
    title: "Utopia",
    links: [
      "https://want-more-ismaeltech.koyeb.app/",
      "https://login.tutor.fununit.com/",
      "https://angle.sci.amotaal.com/",
      "https://schoolfr-wpcero.koyeb.app/"
    ]
  },
  {
    title: "Sunset Network",
    links: [
      "https://sun-set.is-very.fun/",
      "https://1555-ne-forbes-rd-bend-or-97701.is-very.fun/",
      "https://source-codes-id38401-redtanksandmotorcycles.is-very.fun/",
      "https://fire.super-modding.quest/",
      "https://goofypr-z0cyou-d4t-d3-sysadmin-wiii-n0t-block.usercontent.motorcycles/",
      "https://testing.usercontent.motorcycles/",
      "https://educationalpencilsharpenermedical.info.gf/",
      "https://school-is-crusty-like-when-the-teacher-graded-he-gave-me-an-f.fatshark.net/",
      "https://i-dont-care-about-my-5-month-old-library-book-still-due.super-modding.quest/",
      "https://mathmatics.super-modding.quest/",
      "https://learn25languagesedu.info.gf/",
      "https://algebraicfunctions101.strangled.net/",
      "https://edupremedicalbiologyedu.info.gf/",
      "https://mathgeeksforum.strangled.net/",
      "https://eduautobiographypractice.eduarmor.com/",
      "https://eduhowtomath4ue",
      "https://biologybasics101.ignorelist.com/",
      "https://edugrammarcomposition.info.gf/"
    ]
  },
  {
    title: "Emerald",
    links: [
      "https://calllmemaybe.cddo.cc/"
    ]
  },
  {
    title: "Static",
    links: [
      "https://history.elevatecorp.xyz/static/",
      "https://ila.centraloff.org/static/",
      "https://science.madroid.design/static/",
      "https://kwazyisntgay.vercel.app/static/",
      "https://kwazyisstraight.vercel.app/static/",
      "https://desm0slearning.vercel.app/static/",
      "https://desm0s.vercel.app/static/",
      "https://kwazytopg.vercel.app/static/",
      "https://furrysarehot.vercel.app/static/",
      "https://furrysrcool.vercel.app/static/",
      "https://ikilledmydog.vercel.app/static/",
      "https://mydogdied.vercel.app/static/",
      "https://gigachadd.vercel.app/static/",
      "https://ight.vercel.app/static/",
      "https://sureee.vercel.app/static/",
      "https://dragonmasteriskool.vercel.app/static/",
      "https://tyagain.vercel.app/static/",
      "https://kwazyrawr.vercel.app/static/",
      "https://tiwschool.vercel.app/static/",
      "https://schoolsuscks.vercel.app/static/",
      "https://kwazyonlylink.vercel.app/static/",
      "https://kwazydabest.vercel.app/static/",
      "https://furrys.vercel.app/static/"
    ]
  }
];

const LinksDisplay = () => {
  const [shootingStars, setShootingStars] = useState<{id: number, top: string, left: string, delay: string}[]>([]);
  const [cosmicDust, setCosmicDust] = useState<{id: number, top: string, left: string, size: string, delay: string}[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<string[]>(linkSections.map(section => section.title));
  usePageView();
  
  useEffect(() => {
    // Create shooting stars
    const createShootingStars = () => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 15}s`
        });
      }
      setShootingStars(stars);
    };

    // Create cosmic dust particles
    const createCosmicDust = () => {
      const dust = [];
      for (let i = 0; i < 30; i++) {
        dust.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 2 + 1}px`,
          delay: `${Math.random() * 15}s`
        });
      }
      setCosmicDust(dust);
    };

    createShootingStars();
    createCosmicDust();
    const starsInterval = setInterval(createShootingStars, 15000);
    const dustInterval = setInterval(createCosmicDust, 30000);

    return () => {
      clearInterval(starsInterval);
      clearInterval(dustInterval);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilterClick = (title: string) => {
    if (activeFilter === title) {
      setActiveFilter(null);
      setVisibleSections(linkSections.map(section => section.title));
    } else {
      setActiveFilter(title);
      setVisibleSections([title]);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const clearFilter = () => {
    setActiveFilter(null);
    setVisibleSections(linkSections.map(section => section.title));
  };

  const filteredSections = linkSections.filter(section => 
    visibleSections.includes(section.title)
  ).map(section => ({
    ...section,
    links: section.links.filter(link => 
      link.toLowerCase().includes(searchTerm)
    )
  })).filter(section => section.links.length > 0);

  return (
    <div className="min-h-screen starry-bg relative overflow-hidden">
      {/* Cosmic dust particles */}
      {cosmicDust.map(dust => (
        <div
          key={dust.id}
          className="cosmic-dust"
          style={{
            top: dust.top,
            left: dust.left,
            width: dust.size,
            height: dust.size,
            animationDelay: dust.delay
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {shootingStars.map(star => (
        <div 
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay
          }}
        />
      ))}
      
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="link-item">
            <ArrowLeft className="link-icon" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold neon-text glow-text">Proxy Links</h1>
        </div>

        {/* Search and Filter */}
        <div className="neon-glass mb-6 p-4 neon-border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search links..."
                className="pl-10 pr-10 py-2 w-full bg-black/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                value={searchTerm}
                onChange={handleSearch}
              />
              {searchTerm && (
                <button 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                  onClick={clearSearch}
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {activeFilter ? (
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm flex items-center gap-1">
                      {activeFilter}
                      <button 
                        className="ml-1 text-gray-400 hover:text-white"
                        onClick={clearFilter}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 max-w-md">
                    {linkSections.slice(0, 5).map((section, index) => (
                      <button
                        key={index}
                        className="px-3 py-1 bg-black/30 hover:bg-purple-900/50 rounded-full text-sm transition-colors duration-300"
                        onClick={() => handleFilterClick(section.title)}
                      >
                        {section.title}
                      </button>
                    ))}
                    <button
                      className="px-3 py-1 bg-black/30 hover:bg-purple-900/50 rounded-full text-sm transition-colors duration-300"
                    >
                      More...
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSections.map((section, index) => (
            <div key={index} className="neon-glass neon-border">
              <h2 className="section-title neon-text flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                {section.title} 
                <span className="text-sm text-gray-400 ml-2">({section.links.length})</span>
              </h2>
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="link-card group hover:neon-border-blue transition-all duration-300">
                    <ExternalLink className="link-icon text-purple-400 group-hover:text-blue-400" />
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline truncate flex-1 group-hover:text-blue-300"
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredSections.length === 0 && (
          <div className="neon-glass p-8 text-center neon-border">
            <p className="text-xl neon-text mb-4">No results found</p>
            <p className="text-gray-400">Try adjusting your search or filters</p>
            <button 
              className="mt-4 px-4 py-2 bg-purple-900/50 rounded-lg hover:bg-purple-800/50 transition-colors"
              onClick={() => {
                setSearchTerm('');
                clearFilter();
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinksDisplay;