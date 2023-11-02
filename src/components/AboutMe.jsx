function AboutMe() {
  return (
    <div className="grid grid-rows-2">
      <div className="px-4 py-6 w-40">
        <img
          src="metTesting.jpg"
          alt=""
          className="rounded-full bg-slate-400"
        />
      </div>
      <div className="grid grid-rows-2 gap-x-8 px-3 pt-4">
        <div className="px-">
          <p className="text-sm leading-2 font-semibold text-stone-600">
            I am a JavaScript developer with beginner to intermediate skills. My
            area of expertise is in JS, but I am proficient in C#, the entity
            Framework, CSS, and HTML. Furthermore, I am currently learning
            Node.js and Express Framework. I am seeking a junior position within
            the field, and although my learning was done through UDEMY, I am
            confident in my skills and am willing to take any competency test..
            <br />
          </p>
        </div>
        <div className="">
          <p className="text-sm leading-2 font-semibold text-stone-600">
            Je suis un développeur JavaScript avec des connaissances débutantes
            à intermédiaires. Mon domaine d’expertise est en JS, mais je suis
            compétent avec C#, Entity-Framework, CSS, et HTML. De plus, je suis
            actuellement en train d'apprendre Node.js Framework Express. Je suis
            à la recherche d'un poste de débutant dans le domaine, et même si
            mon apprentissage a été fait par UDEMY, je suis confiant en mes
            compétences et je serai prêt à passer tout test d’aptitudes..
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
