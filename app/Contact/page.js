import Navbar from "../Navbar/page";

function Contact() {
  return (
    <div>
      <Navbar />
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDr6pdI3cdW-H69mg_Ur4ksK2z10w80e3iSQ&s"
          alt=""
          className="w-full h-6/7 mt-12"
        />
       
        <div >
          <section className="w-96 h-auto bg-slate-600 ml-36 rounded-3xl -mt-16 absolute px-6 m-7">
            <div className="font-bold text-2xl">
              <h1>Formulaire de contact direct</h1>{" "}
              <p>
                {" "}
                Vous pouvez également nous contacter directement en remplissant
                le formulaire disponible ci-dessous{" "}
              </p>
            </div>
            <form>
              {" "}
              <div className="mt-6">
                <label htmlFor="first-name">Votre prénom *</label>{" "}
                <input
                  type="text"
                  id="first-name"
                  required
                  className="bg-slate-700 rounded-full px-7"
                />{" "}
              </div>
              <div className="mt-6">
                <label htmlFor="last-name">Votre nom *</label>{" "}
                <input
                  type="text"
                  id="last-name"
                  required
                  className="bg-slate-700 rounded-full px-7"
                />{" "}
              </div>
              <div className="mt-6">
                <label htmlFor="email">Votre email *</label>{" "}
                <input
                  type="email"
                  id="email"
                  required
                  className="bg-slate-700 rounded-full px-7"
                />{" "}
              </div>
              <div className="mt-6">
                <label htmlFor="phone">Votre téléphone</label>{" "}
                <input
                  type="tel"
                  id="phone"
                  className="bg-slate-700 rounded-full px-7"
                />{" "}
              </div>
              <div className="mt-6">
                <label htmlFor="message">Votre message *</label>{" "}
                <textarea
                  id="message"
                  required
                  className="bg-slate-700 rounded-full px-7"
                ></textarea>{" "}
              </div>
              <br />
              <button type="submit" className="bg-slate-700 rounded-full px-9">
                {" "}
                Envoyer{" "}
              </button>{" "}
            </form>
          </section>
        
        </div>
      </div>
     
    </div>
    
  );
}

export default Contact;
