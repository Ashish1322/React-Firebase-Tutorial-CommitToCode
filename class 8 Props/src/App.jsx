import { Card } from "./components/Card";

function App() {
  var name1 = "Ashish";
  var name2 = "Umesh";
  var nme2 = "Mahesh";

  var age = 2;

  return (
    <div>
      {age >= 18 ? <h1>You can Drive</h1> : <h1>You cannot Drive Drive</h1>}

      <div style={{ display: "flex" }}>
        <Card
          imageUrl="https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg"
          title="How to Write Code"
          description="Learn from Commit To code"
          accountName={name1}
          parentColor="red"
        />
        <Card
          imageUrl="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/Woman-riding-bycicle-at-the-park-1296x728-header.jpg?w=1155&h=1528"
          title="How to ride Cycle"
          description="Don' go fast"
          accountName={name2}
          parentColor="green"
        />
        <Card
          imageUrl="data:image/jpeg;base64,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"
          title="How to study more"
          description="Take Good Sleep"
          accountName={nme2}
          parentColor="yellow"
        />
      </div>
    </div>
  );
}

export default App;
