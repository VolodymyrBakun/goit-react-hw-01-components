import  Profile  from "./Profile/Profile.js";
import user from "../user.json"
import  Statistics  from "./Statistics/Statistics.jsx";
import data from "../data.json"
import FriendList from "./FriendList/FriendList.jsx";
import friends from "../friends.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import transactions from "../transactions.json"

export const App = () => {
  return (

    <div>
      <Profile userName={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
