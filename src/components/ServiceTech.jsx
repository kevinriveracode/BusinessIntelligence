import React , {Component} from 'react';
import ItemInfo from './item-info';
import '../sass/utils.scss'
class ServiceTech extends Component {
  render(){
    return(
        <section className="u-flex jc-between pad-3-h s-tech">
          <ItemInfo image={'/www/dominio.svg'} name={'Dominio y certificado SSL'} description={'Todos nuestros packs de eCommerce incluyen un dominio gratuito durante toda la duración del contrato de tu tienda online. La encriptación SSL es imprescindible para cualquier tienda online. Con nosotros, es gratis.'} />
          <ItemInfo image={'/www/hosting.svg'} name={'Hosting y cuentas de e-mail'} description={'El hosting georredundante y seguro es uno de los pilares de nuestro negocio. No pagues más con otros proveedores, nosotros lo incluimos en nuestros packs.'}/>
          <ItemInfo image={'/www/seo.svg'} name={'Herramientas de SEO'} description={'También te ayudamos a optimizar el contenido de tu página web para adaptarlo a las necesidades de SEO más actuales.'}/>
        </section>
    )
  }

}

export default ServiceTech;