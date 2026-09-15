// Mechanics desc style (es): official game terminology. el usuario (user), el objetivo
//   (target), efecto secundario, hacer retroceder (flinch), golpe crítico, niveles (stages),
//   problema de estado (status), movimiento multigolpe, prioridad, sustituto, redondeado
//   hacia abajo/arriba. Decimal comma (1,5). Boilerplate shared verbatim — QC one, fix all.
// Cross-references generated from name fields / pokedex-names.ts. CAP entities keep name
//   null (English fallback); descs are translated with English names inline.

export const AbilitiesText: { [id: IDEntry]: AbilityText } = {
	noability: {
		name: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	adaptability: {
		name: "Adaptable",
		// Official flavor text: "Potencia aún más los movimientos cuyo tipo coincida con el suyo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	aerilate: {
		name: "Piel Celeste",
		// Official flavor text: "Convierte los movimientos de tipo Normal en tipo Volador y aumenta ligeramente su potencia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	aftermath: {
		name: "Detonación",
		// Official flavor text: "Daña al agresor que le ha dado el golpe de gracia con un movimiento de contacto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		damage: "  ¡{POKEMON} ha resultado herido!",
	},
	airlock: {
		name: "Bucle Aire",
		shortDesc: null, // NEEDS TRANSLATION

		start: "  Los efectos del tiempo atmosférico se han neutralizado.",
	},
	analytic: {
		name: "Cálculo Final",
		// Official flavor text: "Aumenta la potencia de su movimiento si es el último en atacar."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	angerpoint: {
		name: "Irascible",
		// Official flavor text: "Si recibe un golpe crítico, monta en cólera y sube su Ataque hasta el máximo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		boost: "  ¡El Ataque de {POKEMON} ha aumentado al máximo!",
	},
	angershell: {
		name: "Coraza Ira",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	anticipation: {
		name: "Anticipación",
		// Official flavor text: "Prevé los movimientos peligrosos del rival."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} se ha estremecido!",
	},
	arenatrap: {
		name: "Trampa Arena",
		// Official flavor text: "Evita que el rival huya."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	armortail: {
		name: "Cola Armadura",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		block: "#damp",
	},
	aromaveil: {
		name: "Velo Aroma",
		// Official flavor text: "Se protege a sí mismo y a sus aliados de ataques que impiden elegir movimientos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		block: "  ¡Velo Aroma ha protegido a {POKEMON}!",
	},
	asone: {
		name: "Unidad Ecuestre",
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} tiene dos habilidades!",
	},
	asoneglastrier: {
		name: "Unidad Ecuestre (Glastrier)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION
	},
	asonespectrier: {
		name: "Unidad Ecuestre (Spectrier)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION
	},
	aurabreak: {
		name: "Rompeaura",
		// Official flavor text: "Invierte los efectos de las auras, por lo que baja la potencia de ciertos movimientos en vez de subirla."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} ha invertido todas las auras!",
	},
	auraguard: {
		name: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	baddreams: {
		name: "Mal Sueño",
		// Official flavor text: "Inflige daño a cualquier rival que esté dormido."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "  ¡{POKEMON} está inmerso en un sueño agitado!",
	},
	ballfetch: {
		name: "Recogebolas",
		shortDesc: null, // NEEDS TRANSLATION
	},
	battery: {
		name: "Batería",
		shortDesc: null, // NEEDS TRANSLATION
	},
	battlearmor: {
		name: "Armadura Batalla",
		shortDesc: null, // NEEDS TRANSLATION
	},
	battlebond: {
		name: "Fuerte Afecto",
		// Official flavor text: "Al derrotar a un rival, los vínculos con su Entrenador se refuerzan y se convierte en Greninja Ash. Su Shuriken de Agua también se ve potenciado."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		activate: "  ¡{POKEMON} siente la fuerza de vuestro afecto mutuo!",
		transform: "¡{POKEMON} se ha convertido en Greninja Ash!",
	},
	beadsofruin: {
		name: "Abalorio Debacle",
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} ha mermado la Defensa Especial de los demás Pokémon con Abalorio Debacle!",
	},
	beastboost: {
		name: "Ultraimpulso",
		// Official flavor text: "Si derrota a un rival en ese turno, aumenta su característica más fuerte."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	berserk: {
		name: "Cólera",
		// Official flavor text: "Aumenta su Ataque Especial si sus PS se ven reducidos a la mitad debido a algún ataque."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	bigpecks: {
		name: "Sacapecho",
		shortDesc: null, // NEEDS TRANSLATION
	},
	blaze: {
		name: "Mar Llamas",
		// Official flavor text: "Potencia sus movimientos de tipo Fuego cuando le quedan pocos PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	bulletproof: {
		name: "Antibalas",
		shortDesc: null, // NEEDS TRANSLATION
	},
	cheekpouch: {
		name: "Carrillo",
		// Official flavor text: "Recupera PS al comer cualquier baya."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	chillingneigh: {
		name: "Relincho Blanco",
		// Official flavor text: "Al derrotar a un objetivo, emite un relincho gélido y aumenta su Ataque."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	chlorophyll: {
		name: "Clorofila",
		// Official flavor text: "Sube su Velocidad cuando hace sol."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	clearbody: {
		name: "Cuerpo Puro",
		shortDesc: null, // NEEDS TRANSLATION
	},
	cloudnine: {
		name: "Aclimatación",
		shortDesc: null, // NEEDS TRANSLATION

		start: "#airlock",
	},
	colorchange: {
		name: "Cambio Color",
		// Official flavor text: "Adopta el tipo del último movimiento del que es blanco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	comatose: {
		name: "Letargo Perenne",
		// Official flavor text: "No despierta jamás de su profundo letargo e incluso ataca dormido."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} está sumido en un profundo letargo!",
	},
	commander: {
		name: "Comandar",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  ¡{POKEMON} ha sido engullido por {TARGET} y se ha convertido en su comandante!",
	},
	competitive: {
		name: "Tenacidad",
		// Official flavor text: "Aumenta mucho su Ataque Especial cuando el rival le baja cualquiera de sus características."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	compoundeyes: {
		name: "Ojo Compuesto",
		shortDesc: null, // NEEDS TRANSLATION
	},
	contrary: {
		name: "Respondón",
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	corrosion: {
		name: "Corrosión",
		shortDesc: null, // NEEDS TRANSLATION
	},
	costar: {
		name: "Unísono",
		shortDesc: null, // NEEDS TRANSLATION
	},
	cottondown: {
		name: "Pelusa",
		// Official flavor text: "Al ser alcanzado por un ataque, suelta una pelusa de algodón que reduce la Velocidad de todos los demás Pokémon."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	cudchew: {
		name: "Rumia",
		shortDesc: null, // NEEDS TRANSLATION
	},
	curiousmedicine: {
		name: "Medicina Extraña",
		shortDesc: null, // NEEDS TRANSLATION
	},
	cursedbody: {
		name: "Cuerpo Maldito",
		// Official flavor text: "Puede anular el movimiento usado en su contra."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	cutecharm: {
		name: "Gran Encanto",
		// Official flavor text: "Puede causar enamoramiento al rival que lo toque."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	damp: {
		name: "Humedad",
		// Official flavor text: "Aumenta la humedad del entorno y evita que se puedan utilizar movimientos explosivos, tales como Autodestrucción."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		block: "  ¡{SOURCE} no puede usar {MOVE}!",
	},
	dancer: {
		name: "Pareja de Baile",
		// Official flavor text: "Puede copiar inmediatamente cualquier movimiento de baile que haya usado otro Pokémon presente en el combate."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	darkaura: {
		name: "Aura Oscura",
		// Official flavor text: "Aumenta la potencia de todos los movimientos de tipo Siniestro."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} irradia un aura oscura!",
	},
	dauntlessshield: {
		name: "Escudo Recio",
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	dazzling: {
		name: "Cuerpo Vívido",
		// Official flavor text: "Desconcierta al rival y le impide utilizar movimientos con prioridad en su contra."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		block: "#damp",
	},
	defeatist: {
		name: "Flaqueza",
		// Official flavor text: "Se debilita tanto cuando sus PS se ven reducidos a la mitad que su Ataque y su Ataque Especial bajan."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	defiant: {
		name: "Competitivo",
		// Official flavor text: "Sube mucho su Ataque cuando el rival le baja las características."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	deltastream: {
		name: "Ráfaga Delta",
		// Official flavor text: "Altera el clima para anular las vulnerabilidades del tipo Volador."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	desolateland: {
		name: "Tierra del Ocaso",
		// Official flavor text: "Altera el clima para anular los ataques de tipo Agua."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	disguise: {
		name: "Disfraz",
		// Official flavor text: "Puede eludir un ataque valiéndose de la tela que le cubre el cuerpo una vez por combate."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		block: "  ¡El disfraz ha actuado como señuelo!",
		transform: "¡El disfraz de {POKEMON} se ha roto!",
	},
	download: {
		name: "Descarga",
		// Official flavor text: "Compara la Defensa y la Defensa Especial del rival para ver cuál es inferior y aumenta su propio Ataque o Ataque Especial según sea lo más eficaz."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragonize: {
		name: "Piel Dragontina",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragonsmaw: {
		name: "Mandíbula Dragón",
		shortDesc: null, // NEEDS TRANSLATION
	},
	drizzle: {
		name: "Llovizna",
		shortDesc: null, // NEEDS TRANSLATION
	},
	drought: {
		name: "Sequía",
		shortDesc: null, // NEEDS TRANSLATION
	},
	dryskin: {
		name: "Piel Seca",
		// Official flavor text: "Pierde PS si hace sol y los recupera si llueve o recibe un movimiento de tipo Agua. Los movimientos de tipo Fuego, por su parte, le hacen más daño de lo normal."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "#aftermath",
	},
	earlybird: {
		name: "Madrugar",
		shortDesc: null, // NEEDS TRANSLATION
	},
	eartheater: {
		name: "Geofagia",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	eelevate: {
		name: "Impulso Anguila",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	effectspore: {
		name: "Efecto Espora",
		// Official flavor text: "Puede dormir, envenenar o paralizar al Pokémon con el que entre en contacto al recibir un ataque."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	electricsurge: {
		name: "Electrogénesis",
		shortDesc: null, // NEEDS TRANSLATION
	},
	electromorphosis: {
		name: "Dinamo",
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} se ha cargado de electricidad gracias a {MOVE}!",
	},
	embodyaspectcornerstone: {
		name: "Evocarrecuerdos (Cimiento)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION

		boost: "  ¡{POKEMON} ha hecho brillar la Máscara Cimiento y ha aumentado su Defensa!",
	},
	embodyaspecthearthflame: {
		name: "Evocarrecuerdos (Horno)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION

		boost: "  ¡{POKEMON} ha hecho brillar la Máscara Horno y ha aumentado su Ataque!",
	},
	embodyaspectteal: {
		name: "Evocarrecuerdos (Turquesa)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION

		boost: "  ¡{POKEMON} ha hecho brillar la Máscara Turquesa y ha aumentado su Velocidad!",
	},
	embodyaspectwellspring: {
		name: "Evocarrecuerdos (Fuente)", // PS-style disambiguator (not part of the official name)
		shortDesc: null, // NEEDS TRANSLATION

		boost: "  ¡{POKEMON} ha hecho brillar la Máscara Fuente y ha aumentado su Defensa Especial!",
	},
	emergencyexit: {
		name: "Retirada",
		// Official flavor text: "Abandona el terreno de combate cuando sus PS se ven reducidos a la mitad para evitar males mayores."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	fairyaura: {
		name: "Aura Feérica",
		// Official flavor text: "Aumenta la potencia de todos los movimientos de tipo Hada."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} irradia un aura feérica!",
	},
	filter: {
		name: "Filtro",
		shortDesc: null, // NEEDS TRANSLATION
	},
	firemane: {
		name: "Crin de Fuego",
		shortDesc: null, // NEEDS TRANSLATION
	},
	flamebody: {
		name: "Cuerpo Llama",
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flareboost: {
		name: "Ímpetu Ardiente",
		// Official flavor text: "Aumenta la potencia de sus ataques especiales cuando sufre quemaduras."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	flashfire: {
		name: "Absorbe Fuego",
		// Official flavor text: "Si le alcanza algún movimiento de tipo Fuego, potencia sus propios movimientos de dicho tipo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡La potencia de los movimientos de tipo Fuego de {POKEMON} ha aumentado!",
	},
	flowergift: {
		name: "Don Floral",
		// Official flavor text: "Si hace sol, aumenta su Ataque y su Defensa Especial, así como los de sus aliados."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flowerveil: {
		name: "Velo Flor",
		// Official flavor text: "Evita que los Pokémon de tipo Planta aliados sufran problemas de estado o que les bajen sus características."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		block: "  ¡Velo Flor ha protegido a {POKEMON}!",
	},
	fluffy: {
		name: "Peluche",
		// Official flavor text: "Reduce a la mitad el daño provocado por los movimientos de contacto, pero duplica el infligido por los de tipo Fuego."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	forecast: {
		name: "Predicción",
		// Official flavor text: "Cambia a tipo Agua, Fuego o Hielo en función del tiempo atmosférico."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	forewarn: {
		name: "Alerta",
		// Official flavor text: "Indica el movimiento más potente del rival al entrar en combate."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡Se ha detectado el movimiento {MOVE} de {TARGET}!",
		activateNoTarget: "  ¡Alerta de {POKEMON} detectó {MOVE}!",
	},
	friendguard: {
		name: "Compiescolta",
		shortDesc: null, // NEEDS TRANSLATION
	},
	frisk: {
		name: "Cacheo",
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} ha cacheado a {TARGET} y ha hallado {ITEM:indefinite:classified}!",
		activateNoTarget: "  ¡{POKEMON} ha cacheado a su rival y ha encontrado {ITEM}!",
	},
	fullmetalbody: {
		name: "Guardia Metálica",
		shortDesc: null, // NEEDS TRANSLATION
	},
	furcoat: {
		name: "Pelaje Recio",
		shortDesc: null, // NEEDS TRANSLATION
	},
	galewings: {
		name: "Alas Vendaval",
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	galvanize: {
		name: "Piel Eléctrica",
		// Official flavor text: "Convierte los movimientos de tipo Normal en tipo Eléctrico y aumenta ligeramente su potencia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gluttony: {
		name: "Gula",
		// Official flavor text: "Cuando sus PS se ven reducidos a la mitad, engulle la baya que normalmente solo se comería cuando le quedasen pocos PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	goodasgold: {
		name: "Cuerpo Áureo",
		shortDesc: null, // NEEDS TRANSLATION
	},
	gooey: {
		name: "Baba",
		shortDesc: null, // NEEDS TRANSLATION
	},
	gorillatactics: {
		name: "Monotema",
		// Official flavor text: "Potencia su Ataque, pero solo puede usar el primer movimiento escogido."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	grasspelt: {
		name: "Manto Frondoso",
		shortDesc: null, // NEEDS TRANSLATION
	},
	grassysurge: {
		name: "Herbogénesis",
		shortDesc: null, // NEEDS TRANSLATION
	},
	grimneigh: {
		name: "Relincho Negro",
		// Official flavor text: "Al derrotar a un objetivo, emite un relincho aterrador y aumenta su Ataque Especial."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	guarddog: {
		name: "Perro Guardián",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gulpmissile: {
		name: "Tragamisil",
		// Official flavor text: "Tras usar Surf o Buceo, emerge con una presa en la boca. Al recibir daño, ataca escupiéndola al rival."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	guts: {
		name: "Agallas",
		// Official flavor text: "Si sufre un problema de estado, se viene arriba y aumenta su Ataque."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	hadronengine: {
		name: "Motor Hadrónico",
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} crea un campo eléctrico que impulsa su motor futurista!",
		activate: "  ¡El campo eléctrico impulsa el motor futurista de {POKEMON}!",
	},
	harvest: {
		name: "Cosecha",
		// Official flavor text: "Puede reutilizar varias veces una misma baya."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		addItem: "  ¡{POKEMON} ha recogido {ITEM:indefinite}!",
	},
	healer: {
		name: "Alma Cura",
		// Official flavor text: "A veces cura los problemas de estado de un aliado."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	heatproof: {
		name: "Ignífugo",
		// Official flavor text: "Su cuerpo, resistente al calor, reduce a la mitad el daño recibido por movimientos de tipo Fuego."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	heavymetal: {
		name: "Metal Pesado",
		// Official flavor text: "Duplica su peso."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	honeygather: {
		name: "Recogemiel",
		shortDesc: null, // NEEDS TRANSLATION
	},
	hospitality: {
		name: "Hospitalidad",
		shortDesc: null, // NEEDS TRANSLATION

		heal: "  ¡{POKEMON} se ha bebido el té que ha preparado {SOURCE}!",
	},
	hugepower: {
		name: "Potencia",
		shortDesc: null, // NEEDS TRANSLATION
	},
	hungerswitch: {
		name: "Mutapetito",
		// Official flavor text: "Alterna entre su Forma Saciada y Forma Voraz al final de cada turno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	hustle: {
		name: "Entusiasmo",
		// Official flavor text: "Aumenta su Ataque, pero reduce su Precisión."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	hydration: {
		name: "Hidratación",
		// Official flavor text: "Cura los problemas de estado si está lloviendo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hypercutter: {
		name: "Corte Fuerte",
		shortDesc: null, // NEEDS TRANSLATION
	},
	icebody: {
		name: "Gélido",
		// Official flavor text: "Recupera PS de forma gradual cuando hay tormentas de granizo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	iceface: {
		name: "Cara de Hielo",
		// Official flavor text: "Absorbe el daño de un ataque físico con el hielo de la cabeza, tras lo cual cambia de forma. El hielo se regenerará la próxima vez que granice."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	icescales: {
		name: "Escama de Hielo",
		shortDesc: null, // NEEDS TRANSLATION
	},
	illuminate: {
		name: "Iluminación",
		// Official flavor text: "Aumenta la probabilidad de encontrar Pokémon al iluminar el entorno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	illusion: {
		name: "Ilusión",
		// Official flavor text: "Adopta el aspecto del último Pokémon del equipo al entrar en combate para desconcertar al rival."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		end: "  ¡La ilusión de {POKEMON} se ha desvanecido!",
	},
	immunity: {
		name: "Inmunidad",
		shortDesc: null, // NEEDS TRANSLATION
	},
	imposter: {
		name: "Impostor",
		// Official flavor text: "Se transforma en el Pokémon que tiene enfrente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	infiltrator: {
		name: "Allanamiento",
		// Official flavor text: "Ataca sorteando la barrera o el sustituto del rival."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	innardsout: {
		name: "Revés",
		// Official flavor text: "Al caer debilitado, inflige al rival un daño equivalente a los PS que le quedaran."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		damage: "#aftermath",
	},
	innerfocus: {
		name: "Fuerza Mental",
		// Official flavor text: "Gracias a su profunda concentración, no se amedrenta ante los ataques del rival."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	insomnia: {
		name: "Insomnio",
		shortDesc: null, // NEEDS TRANSLATION
	},
	intimidate: {
		name: "Intimidación",
		// Official flavor text: "Al entrar en combate amilana al rival de tal manera que su Ataque disminuye."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	intrepidsword: {
		name: "Espada Indómita",
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	ironbarbs: {
		name: "Punta Acero",
		// Official flavor text: "Inflige daño al rival si este le golpea con un movimiento de contacto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		damage: "#roughskin",
	},
	ironfist: {
		name: "Puño Férreo",
		// Official flavor text: "Aumenta la potencia de los puñetazos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	justified: {
		name: "Justiciero",
		shortDesc: null, // NEEDS TRANSLATION
	},
	keeneye: {
		name: "Vista Lince",
		// Official flavor text: "Su aguda vista evita que le disminuya la Precisión."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	klutz: {
		name: "Zoquete",
		// Official flavor text: "No puede usar objetos equipados."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	leafguard: {
		name: "Defensa Hoja",
		// Official flavor text: "Evita los problemas de estado si hace sol."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	levitate: {
		name: "Levitación",
		// Official flavor text: "Su capacidad de flotar sobre el suelo le proporciona inmunidad frente a los movimientos de tipo Tierra."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	libero: {
		name: "Líbero",
		// Official flavor text: "Cambia su tipo al del movimiento que va a usar."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	lightmetal: {
		name: "Metal Liviano",
		// Official flavor text: "Reduce a la mitad su peso."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	lightningrod: {
		name: "Pararrayos",
		// Official flavor text: "Atrae y neutraliza los movimientos de tipo Eléctrico, que además le suben el Ataque Especial."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} ha atraído el ataque!",
	},
	limber: {
		name: "Flexibilidad",
		shortDesc: null, // NEEDS TRANSLATION
	},
	lingeringaroma: {
		name: "Olor Persistente",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  ¡Un olor persistente impregna a {TARGET}!",
	},
	liquidooze: {
		name: "Lodo Líquido",
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "  ¡{POKEMON} ha absorbido la secreción viscosa tóxica!",
	},
	liquidvoice: {
		name: "Voz Fluida",
		// Official flavor text: "Hace que todos sus movimientos que usan sonido pasen a ser de tipo Agua."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	longreach: {
		name: "Remoto",
		shortDesc: null, // NEEDS TRANSLATION
	},
	magicbounce: {
		name: "Espejo Mágico",
		// Official flavor text: "Puede devolver los movimientos de estado lanzados por el rival, sin verse afectado por ellos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		move: "#magiccoat",
	},
	magicguard: {
		name: "Muro Mágico",
		// Official flavor text: "Solo recibe daño de ataques."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	magician: {
		name: "Prestidigitador",
		// Official flavor text: "Roba el objeto del Pokémon al que alcance con un movimiento."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	magmaarmor: {
		name: "Escudo Magma",
		shortDesc: null, // NEEDS TRANSLATION
	},
	magnetpull: {
		name: "Imán",
		// Official flavor text: "Su magnetismo atrae a los Pokémon de tipo Acero y les impide huir."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	marvelscale: {
		name: "Escama Especial",
		shortDesc: null, // NEEDS TRANSLATION
	},
	megalauncher: {
		name: "Megadisparador",
		// Official flavor text: "Aumenta la potencia de algunos movimientos de pulsos y auras."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	megasol: {
		name: "Megasolar",
		shortDesc: null, // NEEDS TRANSLATION
	},
	merciless: {
		name: "Ensañamiento",
		shortDesc: null, // NEEDS TRANSLATION
	},
	mimicry: {
		name: "Mimetismo",
		// Official flavor text: "Cambia su tipo según el campo que haya en el terreno de combate."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  ¡{POKEMON} ha recobrado su tipo original!",
	},
	mindseye: {
		name: "Ojo Mental",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	minus: {
		name: "Menos",
		// Official flavor text: "Potencia su Ataque Especial si un Pokémon aliado tiene la habilidad Más o Menos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	mirrorarmor: {
		name: "Coraza Reflejo",
		// Official flavor text: "Refleja los efectos que reducen las características."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mistysurge: {
		name: "Nebulogénesis",
		shortDesc: null, // NEEDS TRANSLATION
	},
	moldbreaker: {
		name: "Rompemoldes",
		// Official flavor text: "Las habilidades del objetivo no afectan a los movimientos que emplea."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} rompe el molde!",
	},
	moody: {
		name: "Veleta",
		// Official flavor text: "Una característica le sube mucho en cada turno, pero le baja otra."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	motordrive: {
		name: "Electromotor",
		// Official flavor text: "Si le alcanza un movimiento de tipo Eléctrico, le sube la Velocidad en vez de sufrir daño."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	moxie: {
		name: "Autoestima",
		// Official flavor text: "Al debilitar a un objetivo, su confianza se refuerza de tal manera que aumenta su Ataque."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	multiscale: {
		name: "Multiescamas",
		shortDesc: null, // NEEDS TRANSLATION
	},
	multitype: {
		name: "Multitipo",
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mummy: {
		name: "Momia",
		// Official flavor text: "Contagia la habilidad Momia al rival que entre en contacto con él."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  ¡La habilidad de {TARGET} es ahora Momia!",
	},
	myceliummight: {
		name: "Poder Fúngico",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	naturalcure: {
		name: "Cura Natural",
		shortDesc: null, // NEEDS TRANSLATION

		activate: null, // NEEDS TRANSLATION
	},
	neuroforce: {
		name: "Fuerza Cerebral",
		// Official flavor text: "Potencia los ataques supereficaces."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	neutralizinggas: {
		name: "Gas Reactivo",
		// Official flavor text: "Anula los efectos de las habilidades de los demás Pokémon presentes mientras esté en el terreno de combate."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡Un gas reactivo se propaga por toda la zona!",
		end: "  El gas reactivo se ha disipado.",
	},
	noguard: {
		name: "Indefenso",
		shortDesc: null, // NEEDS TRANSLATION
	},
	normalize: {
		name: "Normalidad",
		// Official flavor text: "Hace que todos sus movimientos se vuelvan de tipo Normal y aumenten ligeramente su potencia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	oblivious: {
		name: "Despiste",
		// Official flavor text: "Su indiferencia evita que sea provocado o caiga presa del enamoramiento."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	opportunist: {
		name: "Oportunista",
		shortDesc: null, // NEEDS TRANSLATION
	},
	orichalcumpulse: {
		name: "Latido Oricalco",
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} intensifica el brillo del sol y desata su pulso primigenio!",
		activate: "  ¡{POKEMON} recibe los rayos del sol y desata su pulso primigenio!",
	},
	overcoat: {
		name: "Funda",
		// Official flavor text: "No le afectan las tormentas de arena, el granizo y los movimientos con polvos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	overgrow: {
		name: "Espesura",
		// Official flavor text: "Potencia sus movimientos de tipo Planta cuando le quedan pocos PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	owntempo: {
		name: "Ritmo Propio",
		// Official flavor text: "Como le gusta hacer las cosas a su manera, los rivales no logran confundirlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	parentalbond: {
		name: "Amor Filial",
		// Official flavor text: "Une fuerzas con su cría y ataca dos veces."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	pastelveil: {
		name: "Velo Pastel",
		// Official flavor text: "Se protege a sí mismo y a sus aliados del envenenamiento."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	perishbody: {
		name: "Cuerpo Mortal",
		// Official flavor text: "Si le alcanza un movimiento de contacto, se debilitará al cabo de 3 turnos, así como su agresor, a menos que abandonen el terreno de combate."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡Ambos Pokémon se debilitarán dentro de tres turnos!",
	},
	pickpocket: {
		name: "Hurto",
		// Official flavor text: "Si el rival usa un movimiento de contacto al atacar, le roba el objeto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	pickup: {
		name: "Recogida",
		// Official flavor text: "Puede recoger objetos que el rival haya usado, o bien otros que encuentre en plena aventura."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		addItem: "#recycle",
	},
	piercingdrill: {
		name: "Turbotaladro",
		shortDesc: null, // NEEDS TRANSLATION
	},
	pixilate: {
		name: "Piel Feérica",
		// Official flavor text: "Convierte los movimientos de tipo Normal en tipo Hada y aumenta ligeramente su potencia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	plus: {
		name: "Más",
		// Official flavor text: "Potencia su Ataque Especial si un Pokémon aliado tiene la habilidad Más o Menos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisonheal: {
		name: "Antídoto",
		// Official flavor text: "Si resulta envenenado, recupera PS en vez de perderlos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	poisonpoint: {
		name: "Punto Tóxico",
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisonpuppeteer: {
		name: "Títere Tóxico",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	poisontouch: {
		name: "Toque Tóxico",
		// Official flavor text: "Puede envenenar al objetivo con solo tocarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	powerconstruct: {
		name: "Agrupamiento",
		// Official flavor text: "Cuando sus PS se ven reducidos a la mitad, las células se reagrupan y adopta su Forma Completa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  Sientes múltiples presencias...",
		transform: "¡{POKEMON} ha adoptado la Forma Completa!",
	},
	powerofalchemy: {
		name: "Reacción Química",
		// Official flavor text: "Reacciona copiando la habilidad de un aliado debilitado."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "#receiver",
	},
	powerspot: {
		name: "Fuente Energía",
		// Official flavor text: "Potencia los movimientos de los Pokémon adyacentes."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	prankster: {
		name: "Bromista",
		// Official flavor text: "Sus movimientos de estado tienen prioridad alta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	pressure: {
		name: "Presión",
		// Official flavor text: "Presiona al rival para que sus PP se acaben antes."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} ejerce presión!",
	},
	primordialsea: {
		name: "Mar del Albor",
		// Official flavor text: "Altera el clima para anular los ataques de tipo Fuego."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	prismarmor: {
		name: "Armadura Prisma",
		shortDesc: null, // NEEDS TRANSLATION
	},
	propellertail: {
		name: "Hélice Caudal",
		shortDesc: null, // NEEDS TRANSLATION
	},
	protean: {
		name: "Mutatipo",
		// Official flavor text: "Cambia su tipo al del movimiento que va a usar."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	protosynthesis: {
		name: "Paleosíntesis",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  ¡La habilidad Paleosíntesis de {POKEMON} se ha activado gracial al sol!",
		activateFromItem: "  ¡{POKEMON} ha usado la Energía Potenciadora para activar Paleosíntesis!",
		start: "  ¡{STAT:definite:capitalize} de {POKEMON} se ha reforzado!",
		end: "  ¡El efecto de Paleosíntesis de {POKEMON} ha desaparecido!",
	},
	psychicsurge: {
		name: "Psicogénesis",
		shortDesc: null, // NEEDS TRANSLATION
	},
	punkrock: {
		name: "Punk Rock",
		// Official flavor text: "Potencia los movimientos que usan sonido y reduce a la mitad el daño que le infligen dichos movimientos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	purepower: {
		name: "Energía Pura",
		shortDesc: null, // NEEDS TRANSLATION
	},
	purifyingsalt: {
		name: "Sal Purificadora",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	quarkdrive: {
		name: "Carga Cuark",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  ¡La habilidad Carga Cuark de {POKEMON} se ha activado gracias al campo eléctrico!",
		activateFromItem: "  ¡{POKEMON} ha usado la Energía Potenciadora para activar Carga Cuark!",
		start: "  ¡{STAT:definite:capitalize} de {POKEMON} se ha reforzado!",
		end: "  ¡El efecto de Carga Cuark de {POKEMON} ha desaparecido!",
	},
	queenlymajesty: {
		name: "Regia Presencia",
		// Official flavor text: "Intimida al objetivo y le impide usar movimientos con prioridad."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		block: "#damp",
	},
	quickdraw: {
		name: "Mano Rápida",
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  ¡{POKEMON} ataca primero gracias a la habilidad Mano Rápida!",
	},
	quickfeet: {
		name: "Pies Rápidos",
		// Official flavor text: "Aumenta la Velocidad si sufre problemas de estado."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	raindish: {
		name: "Cura Lluvia",
		// Official flavor text: "Recupera PS de forma gradual cuando llueve."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	rattled: {
		name: "Cobardía",
		// Official flavor text: "Si le alcanza un movimiento de tipo Siniestro, Bicho o Fantasma, el miedo hace que le suba la Velocidad."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	receiver: {
		name: "Receptor",
		// Official flavor text: "Adquiere la habilidad de un aliado debilitado."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  ¡El Pokémon ha recibido la habilidad {ABILITY} de {SOURCE}!",
	},
	reckless: {
		name: "Audaz",
		// Official flavor text: "Potencia los movimientos que también dañan al usuario."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	refrigerate: {
		name: "Piel Helada",
		// Official flavor text: "Convierte los movimientos de tipo Normal en tipo Hielo y aumenta ligeramente su potencia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	regenerator: {
		name: "Regeneración",
		shortDesc: null, // NEEDS TRANSLATION
	},
	ripen: {
		name: "Maduración",
		// Official flavor text: "Hace madurar las bayas, por lo que duplica sus efectos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	rivalry: {
		name: "Rivalidad",
		// Official flavor text: "Si el objetivo es del mismo sexo, su competitividad le lleva a infligir más daño. Si es del sexo contrario, en cambio, el daño será menor."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	rkssystem: {
		name: "Sistema Alfa",
		shortDesc: null, // NEEDS TRANSLATION
	},
	rockhead: {
		name: "Cabeza Roca",
		// Official flavor text: "No puede dañarse con sus propios movimientos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	rockypayload: {
		name: "Transportarrocas",
		shortDesc: null, // NEEDS TRANSLATION
	},
	roughskin: {
		name: "Piel Tosca",
		// Official flavor text: "Hiere con su piel áspera al rival que lo ataque con un movimiento de contacto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "  ¡{POKEMON} ha resultado herido!",
	},
	runaway: {
		name: "Fuga",
		shortDesc: null, // NEEDS TRANSLATION
	},
	sandforce: {
		name: "Poder Arena",
		// Official flavor text: "Potencia los movimientos de tipo Tierra, Acero y Roca durante las tormentas de arena."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sandrush: {
		name: "Ímpetu Arena",
		// Official flavor text: "Aumenta su Velocidad durante las tormentas de arena."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sandspit: {
		name: "Expulsarena",
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sandstream: {
		name: "Chorro Arena",
		shortDesc: null, // NEEDS TRANSLATION
	},
	sandveil: {
		name: "Velo Arena",
		// Official flavor text: "Aumenta su Evasión durante las tormentas de arena."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sapsipper: {
		name: "Herbívoro",
		// Official flavor text: "Neutraliza los movimientos de tipo Planta y sube su Ataque."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	schooling: {
		name: "Banco",
		// Official flavor text: "Forma bancos con sus congéneres cuando tiene muchos PS, lo cual le otorga más fuerza. Cuando le quedan pocos PS, el banco se dispersa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		transform: "¡{POKEMON} ha formado un banco!",
		transformEnd: "¡El banco de {POKEMON} se ha dispersado!",
	},
	scrappy: {
		name: "Intrépido",
		// Official flavor text: "Puede alcanzar a Pokémon de tipo Fantasma con movimientos de tipo Normal o Lucha."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	screencleaner: {
		name: "Antibarrera",
		shortDesc: null, // NEEDS TRANSLATION
	},
	seedsower: {
		name: "Disemillar",
		shortDesc: null, // NEEDS TRANSLATION
	},
	serenegrace: {
		name: "Dicha",
		// Official flavor text: "Aumenta la probabilidad de que los movimientos causen efectos secundarios."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	shadowshield: {
		name: "Guardia Espectro",
		shortDesc: null, // NEEDS TRANSLATION
	},
	shadowtag: {
		name: "Sombra Trampa",
		// Official flavor text: "Impide que el enemigo huya o sea cambiado por otro."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	sharpness: {
		name: "Cortante",
		shortDesc: null, // NEEDS TRANSLATION
	},
	shedskin: {
		name: "Mudar",
		// Official flavor text: "Puede curar sus problemas de estado al mudar la piel."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sheerforce: {
		name: "Potencia Bruta",
		// Official flavor text: "Sube la potencia de sus movimientos en detrimento de los efectos secundarios, que se ven anulados."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	shellarmor: {
		name: "Caparazón",
		shortDesc: null, // NEEDS TRANSLATION
	},
	shielddust: {
		name: "Polvo Escudo",
		// Official flavor text: "El polvo de escamas que lo envuelve lo protege de los efectos secundarios de los ataques recibidos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	shieldsdown: {
		name: "Escudo Limitado",
		// Official flavor text: "Rompe su coraza cuando sus PS se ven reducidos a la mitad y adopta una forma ofensiva."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		transform: "¡Escudo Limitado activado!",
		transformEnd: "Escudo Limitado desactivado.",
	},
	simple: {
		name: "Simple",
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	skilllink: {
		name: "Encadenado",
		// Official flavor text: "Ejecuta siempre los movimientos múltiples con el número máximo de golpes."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	slowstart: {
		name: "Inicio Lento",
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} no rinde todo lo que podría!",
		end: "  ¡{POKEMON} ahora va a a por todas!",
	},
	slushrush: {
		name: "Quitanieves",
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	sniper: {
		name: "Francotirador",
		shortDesc: null, // NEEDS TRANSLATION
	},
	snowcloak: {
		name: "Manto Níveo",
		// Official flavor text: "Sube la Evasión cuando graniza."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	snowwarning: {
		name: "Nevada",
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	solarpower: {
		name: "Poder Solar",
		// Official flavor text: "Si hace sol, aumenta su Ataque Especial, pero pierde PS en cada turno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	solidrock: {
		name: "Roca Sólida",
		shortDesc: null, // NEEDS TRANSLATION
	},
	soulheart: {
		name: "Coránima",
		shortDesc: null, // NEEDS TRANSLATION
	},
	soundproof: {
		name: "Insonorizar",
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	speedboost: {
		name: "Impulso",
		// Official flavor text: "Aumenta su Velocidad en cada turno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	spicyspray: {
		name: "Salpicante",
		shortDesc: null, // NEEDS TRANSLATION
	},
	stakeout: {
		name: "Vigilante",
		shortDesc: null, // NEEDS TRANSLATION
	},
	stall: {
		name: "Rezagado",
		shortDesc: null, // NEEDS TRANSLATION
	},
	stalwart: {
		name: "Acérrimo",
		shortDesc: null, // NEEDS TRANSLATION
	},
	stamina: {
		name: "Firmeza",
		shortDesc: null, // NEEDS TRANSLATION
	},
	stancechange: {
		name: "Cambio Táctico",
		// Official flavor text: "Adopta la Forma Filo al lanzar un ataque, o bien la Forma Escudo si usa el movimiento Escudo Real."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		transform: "¡Cambio a Forma Filo!",
		transformEnd: "¡Cambio a Forma Escudo!",
	},
	static: {
		name: "Electricidad Estática",
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	steadfast: {
		name: "Impasible",
		shortDesc: null, // NEEDS TRANSLATION
	},
	steamengine: {
		name: "Combustible",
		// Official flavor text: "Si le alcanza un movimiento de tipo Fuego o Agua, le sube muchísimo la Velocidad."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	steelworker: {
		name: "Acero Templado",
		shortDesc: null, // NEEDS TRANSLATION
	},
	steelyspirit: {
		name: "Alma Acerada",
		// Official flavor text: "Potencia los movimientos de tipo Acero de los aliados."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	stench: {
		name: "Hedor",
		// Official flavor text: "Puede amedrentar al rival al atacarlo debido al mal olor que emana."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	stickyhold: {
		name: "Viscosidad",
		// Official flavor text: "Los objetos se quedan pegados a su cuerpo, por lo que no pueden robárselos."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		block: "  ¡Es imposible robarle objetos a {POKEMON}!",
	},
	stormdrain: {
		name: "Colector",
		// Official flavor text: "Atrae y neutraliza los movimientos de tipo Agua, que además le suben el Ataque Especial."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "#lightningrod",
	},
	strongjaw: {
		name: "Mandíbula Fuerte",
		// Official flavor text: "Su robusta mandíbula le confiere una mordedura potente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sturdy: {
		name: "Robustez",
		// Official flavor text: "Evita que el rival pueda debilitarlo de un solo golpe cuando tiene los PS al máximo. También evita los movimientos fulminantes."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} ha aguantado el golpe!",
	},
	suctioncups: {
		name: "Ventosas",
		shortDesc: null, // NEEDS TRANSLATION

		block: "  ¡{POKEMON} se aferra al suelo gracias a la habilidad Ventosas!",
	},
	superluck: {
		name: "Afortunado",
		shortDesc: null, // NEEDS TRANSLATION
	},
	supersweetsyrup: {
		name: "Néctar Dulce",
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡El néctar de {POKEMON} desprende un aroma dulzón!",
	},
	supremeoverlord: {
		name: "General Supremo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  ¡{POKEMON} recibe fuerzas de los aliados caídos!",
	},
	surgesurfer: {
		name: "Cola Surf",
		shortDesc: null, // NEEDS TRANSLATION
	},
	swarm: {
		name: "Enjambre",
		// Official flavor text: "Potencia sus movimientos de tipo Bicho cuando le quedan pocos PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	sweetveil: {
		name: "Velo Dulce",
		// Official flavor text: "No cae dormido y evita también que sus aliados se duerman."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		block: "  ¡{POKEMON} no se ha dormido debido al efecto de Velo Dulce!",
	},
	swiftswim: {
		name: "Nado Rápido",
		// Official flavor text: "Sube su Velocidad cuando llueve."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	swordofruin: {
		name: "Espada Debacle",
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} ha mermado la Defensa de los demás Pokémon con Espada Debacle!",
	},
	symbiosis: {
		name: "Simbiosis",
		// Official flavor text: "Pasa su objeto a un aliado que ya haya utilizado el suyo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  ¡{POKEMON} le ha dado {ITEM:definite:classified} a {TARGET}!",
	},
	synchronize: {
		name: "Sincronía",
		// Official flavor text: "Contagia el envenenamiento, las quemaduras o la parálisis al Pokémon que le cause ese estado."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	tabletsofruin: {
		name: "Tablilla Debacle",
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} ha mermado el Ataque de los demás Pokémon con Tablilla Debacle!",
	},
	tangledfeet: {
		name: "Tumbos",
		shortDesc: null, // NEEDS TRANSLATION
	},
	tanglinghair: {
		name: "Rizos Rebeldes",
		shortDesc: null, // NEEDS TRANSLATION
	},
	technician: {
		name: "Experto",
		// Official flavor text: "Potencia sus movimientos más débiles."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	telepathy: {
		name: "Telepatía",
		shortDesc: null, // NEEDS TRANSLATION

		block: "  ¡{POKEMON} no ha sufrido el ataque de su aliado!",
	},
	teraformzero: {
		name: "Teraformación 0",
		shortDesc: null, // NEEDS TRANSLATION
	},
	terashell: {
		name: "Teracaparazón",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  ¡{POKEMON} ha hecho brillar su caparazón y ha alterado su compatibilidad entre tipos!",
	},
	terashift: {
		name: "Teracambio",
		shortDesc: null, // NEEDS TRANSLATION

		transform: "¡{POKEMON} se ha transformado!",
	},
	teravolt: {
		name: "Terravoltaje",
		// Official flavor text: "Las habilidades del objetivo no afectan a los movimientos que emplea."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} desprende un aura chisporroteante!",
	},
	thermalexchange: {
		name: "Termoconversión",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	thickfat: {
		name: "Sebo",
		// Official flavor text: "Gracias a la gruesa capa de grasa que lo protege, reduce a la mitad el daño que recibe de ataques de tipo Fuego o Hielo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tintedlens: {
		name: "Cromolente",
		shortDesc: null, // NEEDS TRANSLATION
	},
	torrent: {
		name: "Torrente",
		// Official flavor text: "Potencia sus movimientos de tipo Agua cuando le quedan pocos PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	toughclaws: {
		name: "Garra Dura",
		shortDesc: null, // NEEDS TRANSLATION
	},
	toxicboost: {
		name: "Ímpetu Tóxico",
		// Official flavor text: "Aumenta la potencia de sus ataques físicos cuando está envenenado."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	toxicchain: {
		name: "Cadena Tóxica",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	toxicdebris: {
		name: "Capa Tóxica",
		shortDesc: null, // NEEDS TRANSLATION
	},
	trace: {
		name: "Calco",
		// Official flavor text: "Al entrar en combate copia la habilidad del rival."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  ¡{POKEMON} rastreó {ABILITY} de {SOURCE}!",
	},
	transistor: {
		name: "Transistor",
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	triage: {
		name: "Primer Auxilio",
		shortDesc: null, // NEEDS TRANSLATION
	},
	truant: {
		name: "Ausente",
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		cant: "¡{POKEMON} está holgazaneando!",
	},
	turboblaze: {
		name: "Turbollama",
		// Official flavor text: "Las habilidades del objetivo no afectan a los movimientos que emplea."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ¡{POKEMON} desprende un aura llameante!",
	},
	unaware: {
		name: "Ignorante",
		// Official flavor text: "Pasa por alto las mejoras en las características del rival al atacar."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	unburden: {
		name: "Liviano",
		// Official flavor text: "Sube su Velocidad si usa o pierde el objeto que lleva."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	unnerve: {
		name: "Nerviosismo",
		// Official flavor text: "Pone nervioso al rival y le impide usar bayas."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{TEAM:capitalize} está muy nervioso y no puede comer bayas!",
	},
	unseenfist: {
		name: "Puño Invisible",
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	vesselofruin: {
		name: "Caldero Debacle",
		shortDesc: null, // NEEDS TRANSLATION

		start: "  ¡{POKEMON} ha mermado el Ataque Especial de los demás Pokémon con Caldero Debacle!",
	},
	victorystar: {
		name: "Tinovictoria",
		shortDesc: null, // NEEDS TRANSLATION
	},
	vitalspirit: {
		name: "Espíritu Vital",
		shortDesc: null, // NEEDS TRANSLATION
	},
	voltabsorb: {
		name: "Absorbe Electricidad",
		// Official flavor text: "Si le alcanza un movimiento de tipo Eléctrico, recupera PS en vez de sufrir daño."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wanderingspirit: {
		name: "Alma Errante",
		// Official flavor text: "Si le alcanza un movimiento de contacto, intercambia su habilidad con la del agresor."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "#skillswap",
	},
	waterabsorb: {
		name: "Absorbe Agua",
		// Official flavor text: "Si le alcanza un movimiento de tipo Agua, recupera PS en vez de sufrir daño."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	waterbubble: {
		name: "Pompa",
		// Official flavor text: "Reduce el daño que le provocan los movimientos de tipo Fuego y es inmune a las quemaduras."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	watercompaction: {
		name: "Hidrorrefuerzo",
		shortDesc: null, // NEEDS TRANSLATION
	},
	waterveil: {
		name: "Velo Agua",
		shortDesc: null, // NEEDS TRANSLATION
	},
	weakarmor: {
		name: "Armadura Frágil",
		// Official flavor text: "Al recibir daño de un ataque físico, le baja la Defensa, pero le sube mucho la Velocidad."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wellbakedbody: {
		name: "Cuerpo Horneado",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	whitesmoke: {
		name: "Humo Blanco",
		shortDesc: null, // NEEDS TRANSLATION
	},
	wimpout: {
		name: "Huida",
		// Official flavor text: "Se asusta y abandona el terreno de combate cuando sus PS se ven reducidos a la mitad."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	windpower: {
		name: "Energía Eólica",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "#electromorphosis",
	},
	windrider: {
		name: "Surcavientos",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	wonderguard: {
		name: "Superguarda",
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wonderskin: {
		name: "Piel Milagro",
		// Official flavor text: "Presenta una mayor resistencia ante los movimientos de estado."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	zenmode: {
		name: "Modo Daruma",
		// Official flavor text: "Cambia de forma si sus PS se ven reducidos a la mitad."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		transform: "¡Modo Daruma activado!",
		transformEnd: "Modo Daruma desactivado.",
	},
	zerotohero: {
		name: "Cambio Heroico",
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  ¡{POKEMON} ha vuelto con una transformación heroica!",
	},

	// CAP
	mountaineer: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		shortDesc: null, // NEEDS TRANSLATION
	},
	rebound: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		move: "#magiccoat",
	},
	persistent: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: null, // NEEDS TRANSLATION
	},
	// A Golden Experience
	poisonousradula: {
		name: "Poisonous Radula",
		shortDesc: "Super effective Poison moves lowers the target's corresponding Defense stat by 1.",
	},
	daredevil: {
		name: "Daredevil",
		desc: "This Pokemon does not take recoil damage, except Struggle. Does not affect Life Orb damage or crash damage.",
		shortDesc: "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.",
	},
	waterproof: {
		name: "Waterproof",
		desc: "This Pokemon is immune to Water-type moves and Electric-type moves and raises its Speed by 1 stage when hit by an Water-type move.",
		shortDesc: "This Pokemon's Speed is raised 1 stage if hit by an Water or Electric move; Water and Electric immunity.",
	},
	racketeering: {
		name: "Racketeering",
		shortDesc: "Raises the power of healing moves, Good Fishing, Knock Off, Midnight Snack, Pluck, Spectral Thief and Thief by 50%.",
	},
	snobbery: {
		name: "Snobbery",
		desc: "If a Pokemon uses a Bug-, Dark- or Poison-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Bug-/Dark-/Poison-type moves against this Pokemon deal damage with a halved offensive stat.",
	},
	starsforce: {
		name: "Star's Force",
		desc: "When this Pokémon has 1/3 or less of its maximum HP, rounded down, all of its stats are x1.5.",
		shortDesc: "At 1/3 or less of max HP, all stats are x1.5.",
	},
	webweaver: {
		name: "Web Weaver",
    	shortDesc: "A the end of each turn, lowers the Speed of every other grounded Pokemon by 1.",
	},
	perforating: {
		name: "Perforating",
		shortDesc: "Bug & Poison moves deal 2x damage if resisted, can poison Steel types, Poison moves hit Steel types",
	},
	doublespirit: {
		name: "Double Spirit",
		shortDesc: "If Girafatak: Applies Power Trick before using a Physical/Special move, and is Normal/Dark before a Physical move, Normal/Psychic before a Special move.",
	},
	divination: {
		name: "Divination",
		shortDesc: "On switch-in, reveals a random move of each adjacent opponent.",
	},
	arcanemastery: {
		name: "Arcane Mastery",
		shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using a Psychic-type or a Dark-type attack.",
	},
	strangebody: {
		name: "Strange Body",
		shortDesc: "If this Pokemon is hit by a physical super effective move, it takes neutral damage.",
	},
	toymaker: {
		name: "Toymaker",
		desc: "At the end of each turn, if it doesn't have an held item, the user acquires a random item. (Leftovers, Sitrus Berry, Lum Berry, Figy Berry, Starf Berry, Choice Band, Choice Specs, Choice Scarf, Flame Orb, Para Orb, Toxic Orb, Light Ball, Iron Ball, Rocky Helmet, Heavy-Duty Boots)",
		shortDesc: "Gets a random item from a list at the end of the turn if the user doesn't already have one.",
	},
	woodclearing: {
		name: "Wood Clearing",
		desc: "If Grassy Terrain is active, this Pokemon's attacks have their power multiplied by 1.3. This Pokemon's attacks always hit Grass-type targets for super effective damage.",
		shortDesc: "This Pokemon's attacks do 1.3x in Grassy Terrain; always hits Grass targets for super effective.",
	},
	microclimate: {
		name: "Microclimate",
		shortDesc: "Reverses effects of Sun and Rain; negates Sand and Snow.",
	},
	voidheart: {
		name: "Void-Heart",
		shortDesc: "This Pokemon heals 25% of its max HP if it attacks and KOes another Pokemon.",
	},
	convectioncurrent: {
		name: "Convection Current",
		desc: "If Gravity is active, this Pokemon's Speed is doubled.",
		shortDesc: "If Gravity is active, this Pokemon's Speed is doubled.",
	},
	endlessdream: {
		name: "Endless Dream",
		desc: "While this Pokemon is active, every other Pokemon is treated as if it has the Comatose ability. Pokemon that are either affected by Sweet Veil, or have Insomnia or Vital Spirit as their abilities are immune this effect.",
		shortDesc: "All Pokemon are under Comatose effect.",
	},
	evaporate: {
		name: "Evaporate",
		desc: "If the Pokemon or the opponent uses a Water type move, it triggers the Haze effect. Immune to Water.",
		shortDesc: "Haze when any Pokemon uses a Water move; Water immunity.",
	},
	desertsong: {
		name: "Desert Song",
		desc: "This Pokemon's sound-based moves become Ground-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's sound-based moves become Ground type.",
	},
	sundownswitch: {
		name: "Sundown Switch",
		desc: "If Cacturne-Mega: Changes to Day form before using Grass move; to Night before using Dark move.",
	},
	blindrage: {
		name: "Blind Rage",
		shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a move.",
	},
	hardrock: {
		name: "Hard Rock",
		shortDesc: "This Pokemon's Attack is multiplied by 1.5, and its Defense is doubled, but its Sp. Def is halved.",
	},
	forgery: {
		name: "Forgery",
		desc: "If this Pokemon is Zoroark-Mega, it inherits the item of the last unfainted Pokemon in its party.",
		shortDesc: "If Zoroark-Mega: Inherits the item of the last party member.",
	},
	clairvoyance: {
		name: "Clairvoyance",
		desc: "This Pokémon's Psychic-type moves take effect two turns after being used. At the end of that turn, the damage is calculated at that time and dealt to the Pokémon at the position the target had when the move was used. Only one move can be delayed at a time. If the user is no longer active at the time an attacking move should hit, damage is calculated based on the user's natural Attack or Special Attack stat, types, and level, with no boosts from its held item or Ability. Status moves are used by the Pokémon at the position the user had when the move was used.",
		shortDesc: "Psychic-type moves delayed until two turns later, but only one at a time.",
	},
	whiplash: {
		name: "Whiplash",
		shortDesc: "This Pokemon's tail-based attacks have their priority increased by 1.",
	},
	boarding: {
		name: "Boarding",
		desc: "If the target is under the effect of a trapping move or ability, then this Pokemon's attacks deal 1.3x more damages.",
		shortDesc: "This Pokemon deals 1.3x damage to trapped opponents.",
	},
	lasttoxin: {
		name: "Last Toxin",
		desc: "When this Pokemon brings an opponent to 50% or under using an attacking move, it badly poisons that opponent.",
		shortDesc: "Badly poison enemies brought under half health.",
	},
	chakrasurge: {
		name: "Chakra Surge",
		shortDesc: "On switch-in, sets Chakra Terrain.",
	},
	striker: {
		name: "Striker",
		desc: "This Pokemon's kick-based attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's kick-based attacks have 1.2x power.",
	},
	insectivorous: {
		name: "Insectivorous",
		desc: "This Pokemon is immune to Bug-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Bug-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Bug moves; Bug immunity.",
	},
	cosmicenergy: {
		name: "Cosmic Energy",
		desc: "This Pokemon's attacks do not have to charge or recharge.",
		shortDesc: "Skip charging and recharging turns of moves.",
	},
	ignite: {
		name: "Ignite",
		desc: "This Pokemon's Normal-type moves become Fire-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fire type and have 1.2x power.",
	},
	nightlight: {
		name: "Night Light",
		desc: "If a Pokemon uses a Dark- or Ghost-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Dark-/Ghost-type moves against this Pokemon deal damage with a halved offensive stat.",
	},
	parasitism: {
		name: "Parasitism",
		desc: "If this Pokemon is knocked out with a move, that move's user is affected by Leech Seed and Yawn.",
		shortDesc: "If this Pokemon is KOed by a move, that move's user is affected by Leech Seed and Yawn.",

		damage: "  {POKEMON} was hurt!",
	},
	explosive: {
		name: "Explosive",
		desc: "This Pokémon does not suffer the drawbacks of recoil moves and sacrificial moves. All self-KO moves used by this Pokémon have x0.8 base power.",
		shortDesc: "Ignores recoil and self-KO effects of its moves. Self-KO moves have x0.8 BP.",
	},
	accumulate: {
		name: "Accumulate",
		shortDesc: "This Pokemon gets 1 Stockpile at the end of each full turn it has been on the field.",
	},
	blowhole: {
		name: "Blowhole",
		desc: "Before this Pokemon uses any Water-type move, it sets Rain Dance.",
		shortDesc: "Sets Rain Dance before using a Water-type move.",
	},
	iceneedles: {
		name: "Ice Needles",
		desc: "Pokemon making contact with this Pokemon lose an amount of their maximum HP factoring their weakness to Ice-type, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose an amount of their max HP depending on their Ice weakness.",

		damage: "#iceneedles",
	},
	eternalwinter: {
		name: "Eternal Winter",
		desc: "On switch-in, the weather becomes Eternal Winter. This weather remains in effect until this Ability is no longer active for any Pokémon, or the weather is changed by Delta Stream, Desolate Land or Primordial Sea. Super effective moves only inflict 3/4 damages on this Pokemon.",
		shortDesc: "On switch-in, eternal winter begins until this Ability is not active in battle.",
	},
	disillusioned: {
		name: "Disillusioned",
		desc: "This Pokemon is immune to Fairy-type moves and raises its Sp. Defense by 1 stage when hit by a Fairy-type move.",
		shortDesc: "This Pokemon's Sp. Def is raised 1 stage if hit by an Fairy move; Fairy immunity.",
	},
	leafdress: {
		name: "Leaf Dress",
		shortDesc: "If not Grass: gives Grass resists; if Grass: negates Grass weaknesses, status and hazard damage.",
	},
	unstableshell: {
		name: "Unstable Shell",
		desc: "Pokemon making contact with this Pokemon make it lose 1/4 of its max HP and lose double the amount, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon make it lose 1/4 of its max HP and lose double the amount.",
	},
	sleightofhand: {
		name: "Sleight of Hand",
		desc: "This Pokémon's contact moves become special attacks and do not make contact with the target.",
		shortDesc: "This Pokémon's contact moves become special and non-contact.",
	},
	hyperthermia: {
		name: "Hyperthermia",
		desc: "This Pokemon can't have its stats dropped by any means, including its own attacks.",
		shortDesc: "This Pokemon can't have its stats dropped by any means, including its own attacks.",
	},
	unconcerned: {
		name: "Unconcerned",
		shortDesc: "This Pokemon ignores its own stat stages when taking or doing damage.",
	},
	hydrophilic: {
		name: "Hydrophilic",
		desc: "This Pokemon's offensive stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
		shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved.",
	},
	virality: {
		name: "Virality",
		desc: "Pokemon making contact with this Pokemon have their Ability changed to Virality. Does not affect Pokemon with the As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Megazord, Multitype, Mummy, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Sundown Switch, Tera Shift, Virality, Zen Mode, or Zero to Hero Abilities.",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Virality.",
	},
	goodluck: {
		name: "Good Luck",
		shortDesc: "If this Pokémon's Speed is higher than its target's Speed, its critical rate ratio is raised by 3.",
	},
	dodge: {
		name: "Dodge",
		shortDesc: "When taking damages, this Pokemon adds 50% of its Speed to its corresponding defense.",
	},
	faithfulcompanion: {
		name: "Faithful Companion",
		shortDesc: "If the ally is Piratcy, gives to the ally this Pokemon's item, and steals an item from the opponent.",
	},
	cheerleader: {
		name: "Cheerleader",
		shortDesc: "If the ally has Cheerleader: if Plusle, Attack, Special Attack and Speed x1.5; if Minun, Defense, Special Defense and Speed x1.5.",
		desc: "If the ally has Cheerleader: if Plusle, its Atk, Sp. Atk and Speed are x1.5; if Minun, its Def, Sp. Def and Speed are x1.5.",
	},
	withering: {
		name: "Withering",
		shortDesc: "This Pokemon's contact moves lower the target's Speed by 1 stage.",
	},
	cacophony: {
		name: "Cacophony",
		desc: "This Pokemon's sound-based moves have their power multiplied by 1.3. This Pokemon takes halved damage from sound-based moves.",
		shortDesc: "This Pokemon receives 1/2 damage from sound moves. Its own have 1.3x power.",
	},
	happygolucky: {
		name: "Happy-Go-Lucky",
		desc: "This Pokemon's Attack, Defense, Special Attack, and Special Defense get a boost depending on the happiness of the Pokemon (maximum 20%).",
		shortDesc: "Boosts Attack, Defense, Special Attack, and Special Defense by 1% per 12.5 happiness (max 20%).",
	},
	mightywall: {
		name: "Mighty Wall",
		desc: "This Pokemon's Defense and Special Defense are multiplied by 1.5, and by 0.5 when it switches out.",
		shortDesc: "This Pokemon's Defense and Sp. Defense are multiplied by 1.5, and by 0.5 when it switches out.",
	},
	karma: {
		name: "Karma",
		shortDesc: "This Pokemon's delayed moves have their power multiplied by 1.5.",
	},
	souldevourer: {
		name: "Soul Devourer",
		shortDesc: "If any target is trapped, this target loses 1/8 of its max HP, and this Pokemon heals for the same amount.",
	},
	soothingfragrance: {
		name: "Soothing Fragrance",
		shortDesc: "Opposing Pokemon have their Attack reduced by 25%, and allies have their Defense raised by 25%.",
	},
	tempestuous: {
		name: "Tempestuous",
		desc: "When replacing a fainted party member, this Pokémon charges power to double the power of its Electric-type move on its next Electric-type move.",
		shortDesc: "Gains the effect of Charge when replacing a fainted ally.",
	},
	ambush: {
		name: "Ambush",
		shortDesc: "This Pokémon's attacks are critical hits if the user moves before the target.",
	},
	steelbreaker: {
		name: "Steelbreaker",
		shortDesc: "This Pokémon's attacks are critical hits if the target is a Steel-type Pokémon.",
	},
	bitterhatred: {
		name: "Bitter Hatred",
		shortDesc: "This Pokemon's Sp. Atk is raised by 1 when hit.",
	},
	pollution: {
		name: "Pollution",
		desc: "Poison Point. This Pokemon's offensive stat is doubled while using a Poison-type attack. If a Pokemon uses a Water-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Poison Point. This Pokemon's Poison power is 2x; Water power against it is halved.",
	},
	freegullet: {
		name: "Free Gullet",
		desc: "Fails if this Pokemon isn't Cramorant-Mega. Surf/Dive, Gulping, Stockpile; Thunderbolt/Wild Charge, Gorging, Charge; Ventilation/Brave Bird, base form, enemy loses 1/8 HP. Surf/Dive have 1.5x power.",
		shortDesc: "Cramorant-Mega: Surf/Dive, Gulping, Stockpile; Thunderbolt/Wild Charge, Gorging, Charge; Ventilation/Brave Bird, base form, enemy loses 1/8 HP. Surf/Dive have 1.5x power.",
	},
	blindeye: {
		name: "Blind Eye",
		shortDesc: "This Pokemon's type affinities are reversed.",
	},
	counterstrike: {
		name: "Counter Strike",
		shortDesc: "This Pokemon reflects 50% of the damage it receives.",
	},
	climaticchange: {
		name: "Climatic Change",
		desc: "Upon using a Water, Fire, or Ice move, this Pokemon changes to that type and sets the corresponding weather.",
		shortDesc: "Changes type and weather when using Water/Fire/Ice moves.",
	},
	hyperglycemia: {
		name: "Hyperglycemia",
		desc: "At the end of each turn, every Pokemon gets 1 Stockpile. Reduces the damage taken by X*10%, with X the amount of Stockpiles this Pokemon has, and boosts this Pokemon's damage by Y*10%, Y being the amount of Stockpiles the target has.",
		shortDesc: "Every Pokemon Stockpiles at the end of each turn. Reduces damage by X*10%, and boosts damage by Y*10%.",
	},
	graviton: {
		name: "Graviton",
		shortDesc: "On switch-in, this Pokémon summons Gravity.",
	},
	solarenergy: {
		name: "Solar Energy",
		desc: "If Sunny Day is active, this Pokémon can skip the charging and recharging turn of its moves. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
		shortDesc: "If Sunny Day is active, this Pokémon skips the charging and recharging turn of its moves.",
	},
	punchprodigee: {
		name: "Punch Prodigee",
		shortDesc: "Gives a +1 priority to punch moves.",
	},
	heavyweapon: {
		name: "Heavy Weapon",
		shortDesc: "Gives an ally Octillery +1 priority on all its moves.",
	},
	lightpower: {
		name: "Light Power",
		shortDesc: "This Pokemon's Special Attack is doubled.",
	},
	thermalswitch: {
		name: "Thermal Switch",
		desc: "Immunity to Burn. This Pokemon has two forms, Passive and Active. It starts the fight with Passive form. If Sun is set or it's hit by a Fire-type move, it switches to Active form until it switches out. If Snow is set, it's frozen, or it's hit by an Ice-type move, it switches to Passive form.",
		shortDesc: "Burn immunity. Sun or Fire-type move: Active form; Snow, frozen or Ice-type move: Passive form.",
	},
	ironbody: {
		name: "Iron Body",
		shortDesc: "On switch in, adds Steel type to the user. Has no effect if the user is Steel-type.",
	},
	psychicprowess: {
		name: "Psychic Prowess",
		desc: "This Pokemon's offensive stat is doubled while using a Psychic-type attack. If a Pokemon uses a Psychic-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it. Using Amnesia also boosts this Pokémon's Special Attack by 2 stages.",
		shortDesc: "This Pokemon's Psychic power is 2x; it can't be paralyzed; Psychic power against it is halved; Amnesia also boosts SpA by 2.",
	},
	hugeclamp: {
		name: "Huge Clamp",
		shortDesc: "This Pokemon's Atk is boosted by 1.5, but its Speed is halved.",
	},
   	healingecho: {
	    name: "Healing Echo",
		desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity. Thousand Arrows can hit this Pokemon as if it did not have this Ability. When this Pokémon uses a Sound move, it is healed by 12.5% of its HP.",
		shortDesc: "This Pokemon is immune to Ground; heals 12.5% HP if the Pokémon uses a Sound move.",
	},
	mightyhorn: {
		name: "Mighty Horn",
		desc: "This Pokemon's drill-based attacks have their power and accuracy multiplied by 1.3.",
		shortDesc: "This Pokemon's drill-based attacks have 1.3x power and 1.3x accuracy.",
	},
	petrify: {
		name: "Petrify",
		shortDesc: "On switch-in, the opposing targets' type is changed to Rock.",
	},
	muddyland: {
		name: "Muddy Land",
		shortDesc: "On switch-in, summons Water Sport and Mud Sport.",
	},
	aerodynamism: {
		name: "Aerodynamism",
		desc: "This Pokemon's Wind moves do not miss. Wind move and Sandstorm immunity.",
	},
	sandsoftime: {
		name: "Sands of Time",
		desc: "Under Sandstorm, user skips Charge and Recharge turns. Immunity to Sandstorm damage. (note: this also ignores sand's damage reduction to moves like Solar Beam)",
		shortDesc: "Under sandstorm, skips charge and recharge. Sand Immunity.",
	},
	megazord: {
		name: "Megazord",
		shortDesc: "Combination of the Intrepid Sword and Dauntless Shield Abilities.",

		start: "  [POKEMON] has two Abilities!",
	},
	masquerade: {
		name: "Masquerade",
		desc: "This Pokémon inherits the Ability of the last unfainted Pokemon in its party until it takes direct damage from another Pokémon's attack. Permanent abilities cannot be copied.",
		shortDesc: "Inherits the Ability of the last party member. Wears off when attacked.",
	},
	meiji: {
		name: "Meiji",
		shortDesc: "On switch-in, uses Future Sight.",
	},
};
