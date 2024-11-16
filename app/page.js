import Navbar from "./Navbar/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=" flex gap-48 ml-10 ">
        <div className=" flex flex-col items-start m-5 mt-7 ">
          <a href="/Animalerie">Animalerie</a>
          <a href="/Appareils&Accessoires">Appareils</a>
          <a href="/Auto">Auto</a>
          <a href="/Beaute">Beaute</a>
          <a href="/Bricolage">Bricolage</a>
          <a href="/Maison">Maison</a>
          <a href="/jardin">jardin</a>
          <a href="/jeux">jeux</a>
          <a href="/livres">livres</a>
          <a href="/sport">sport</a>
        </div>
        <div className="mt-10 m-7">
          <h1 className="text-3xl">
            les produits les plus demandes de l'annee
          </h1>
          <section className="flex gap-6">
            <div>
              <a href="/Commande">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/81ahMKZ71SL._AC_UL900_SR900,600_.jpg"
                  alt=""
                  className="w-50 h-56 rounded-3xl mt-16"
                />
                <h2>des lit tres confortable a des prix extraordinaire</h2>
              </a>
            </div>
            <div>
              <a href="/Commande">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/51uat63sl2L._AC_UL900_SR900,600_.jpg"
                  alt=""
                  className="w-50 h-56 rounded-3xl mt-16"
                />
                <h2>des rasoirs exceptionnel et neuf</h2>
              </a>
            </div>
            <div>
              <a href="/Commande">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/71ydwc7eYqL._AC_UL900_SR900,600_.jpg"
                  alt=""
                  className="w-50 h-56 rounded-3xl mt-16"
                />
                <h2>De belle rideau pour decore votre chambre</h2>
              </a>
            </div>
          </section>
          <h1 className="text-3xl">Les meilleure vente en livres</h1>
          <section className="flex gap-6">
            <div>
              <a href="/Commande">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/71EkY0lNd7L._AC_UL300_SR300,200_.jpg"
                  alt=""
                  className="w-50 h-56 rounded-3xl mt-16"
                />
                <h2>Ce que je cherche de Jordan Bardella</h2>
              </a>
            </div>
            <div>
              <a href="/Commande">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/71-GYSRxJ+L._AC_UL900_SR900,600_.jpg"
                  alt=""
                  className="w-50 h-56 rounded-3xl mt-16"
                />
                <h2>
                  Calendrier de l'avent Espace Game livre Jeux pour adultes{" "}
                </h2>
              </a>
            </div>
            <div>
              <a href="/Commande">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/616dMTorcIL._AC_UL900_SR900,600_.jpg"
                  alt=""
                  className="w-50 h-56 rounded-3xl mt-16"
                />
                <h2>meilleure livre pour etre un pro de l'investissement</h2>
              </a>
            </div>
          </section>
          <h1 className="text-3xl">
            Les meilleure vente en nouveaute denichee
          </h1>
          <section className="flex gap-6">
            <div>
              <a href="/Commande">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/81Pfuow1T8L._AC_UL675_SR675,480_.jpg"
                  alt=""
                  className="w-50 h-56 rounded-3xl mt-16"
                />
                <h2>SKYJO Le Tout Nouveau Jeu de societe </h2>
              </a>
            </div>
            <div>
              <a href="/Commande">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/81f+UdtxLzL._AC_UL675_SR675,480_.jpg"
                  alt=""
                  className="w-50 h-56 rounded-3xl mt-16"
                />
                <h2>
                  Puressentiel Soulage les douleurs musculaires & articulaires
                </h2>
              </a>
            </div>
            <div>
              <a href="/Commande">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/I/613Fp8+QDRL._AC_UL675_SR675,480_.jpg"
                  alt=""
                  className="w-50 h-56 rounded-3xl mt-16"
                />
                <h2>meilleure livre pour etre un pro de l'investissement</h2>
              </a>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full h-52 bg-slate-600 mt-10">
        <section className="flex gap-20">
          <div>
            <h4>À propos</h4>
            <p>
              Notre mission est de fournir les meilleurs produits <br /> à des
              prix compétitifs tout en offrant un service client exceptionnel.
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Email: support@example.com</li>
              <li>Téléphone: +221 77 567 43 69</li>
              <li>Adresse: 123 Rue du Commerce,Dakar, Senegal</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Politique de retour</a>
              </li>
              <li>
                <a href="#">Conditions d'utilisation</a>
              </li>
              <li>
                <a href="#">Politique de confidentialité</a>
              </li>
            </ul>
          </div>
        </section>
        <div className="mt-16">
          <p>&copy; 2024 Nom de votre entreprise. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}
