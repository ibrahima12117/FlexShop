import Navbar from "../Navbar/page";

function Commande() {
  return (
    <div>
      <Navbar />
      <div className="flex gap-12 m-12">
        <img
          src=" https://th.bing.com/th/id/OIP.CSmqh0nCQOscqaAHv1rdogAAAA?w=234&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="" className="w-96 h-96 rounded-3xl"
        />
        <div className="mt-28 ">
        <h1 className="font-extrabold text-2xl">Commander maintenant une livraison gratuite est disponible dans tout le territoire national</h1>
        <button className="bg-zinc-700 px-16 h-16 rounded-full mt-3 ml-32 text-xl ">commande maintenant</button>
        </div>
      </div>
      <div className="flex gap-12 m-12 mt-20">
        <div className="mt-28 ">
           <h1 className="font-extrabold text-2xl"> Appeler notre service client au 33 567 87 99</h1>
           <p> <i>Grâce à des partenaires logistiques de confiance, vos commandes sont livrées rapidement et en toute sécurité directement à votre porte. Plusieurs options de livraison vous permettent de choisir celle qui convient le mieux à vos besoins.</i></p>
           <button className="bg-zinc-700 px-16 h-16 rounded-full mt-3 ml-32 text-xl ">commande maintenant</button>
        </div>
        <img src="https://th.bing.com/th/id/OIP.71tHPrETLa4oBnx-EAW_GAHaGc?rs=1&pid=ImgDetMain" alt="" className="w-96 h-96 rounded-3xl" />
      </div>
      <div className="flex gap-12 m-12 mt-20">
      <img src="https://th.bing.com/th/id/OIP.BHpCaMOBRyd055ZjsQhtXQHaE8?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="w-96 h-96 rounded-3xl" />
        <div className="mt-28 ">
           <h1 className="font-extrabold text-2xl">Avec nous votre satisfaction est notre fierte</h1>
           <p> <i>Accédez à une vaste gamme de produits du monde entier. Vous trouverez des articles que vous ne pourriez jamais trouver dans un magasin physique local. De plus, les suggestions personnalisées vous aideront à découvrir de nouveaux produits que vous allez adorer.</i></p>
           <button className="bg-zinc-700 px-16 h-16 rounded-full mt-3 ml-32 text-xl ">commande maintenant</button>
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

export default Commande;
