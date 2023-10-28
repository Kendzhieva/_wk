import {
  Action, Containers, Goods, Header, Info,
  Links, Offer, Similar, Subscribers
} from 'components/Group'

function Group() {

  return (
    <>


      <div>
        <Header />
        <Info />
        <Similar />
        <Links />
        <Goods />
        <Offer />
      </div>

      <div className='aside-container'>
        <Action />
        <Subscribers />
        <Containers />
      </div>
    </>
  );
}

export default Group;

