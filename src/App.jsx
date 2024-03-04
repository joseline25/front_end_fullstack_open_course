const Hello = (props) => {
  return (
    <div>
      <p>
        {" "}
        You are Welcome {props.name} my {props.relation}!!
      </p>
    </div>
  );
};

const Footer = (props) => {
  return (
    <div>
      <p> Oh No! Oh No Oh no no no no! Bye {props.name} !!</p>
    </div>
  );
};

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <h3>
        {props.part} has {props.exercise}
      </h3>
    </div>
  );
};

const Content = (props) => {
  const { part1, exercises1, part2, exercises2, part3, exercises3 } = props;
  return (
    <div>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  const name = "Peter";
  const relation = "Nobody";

  const friends = [
    { name: "Peter", relation: "Nobody" },
    { name: "Maya", relation: "Cousin" },
  ];

  // erxercise

  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      {/* <p>Hello Jose it is now {now.toString()}</p>
      <p>
        {" "}
        {a} + {b} = {a + b}
      </p>
      <Hello name={"Orli"} relation={"siter"} />
      <Hello />
      <Hello name={friends[0].name} relation={friends[0].relation} />
      <Hello name={friends[1].name} relation={friends[1].relation} /> */}
      <p>Now the Exercise</p>
      <br />
      <Header course={course} />
      <Content
        part1={part1.name}
        exercises1={part1.exercises}
        part2={part2.name}
        exercises2={part2.exercises}
        part3={part3.name}
        exercises3={part3.exercises}
      />

      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
      <p>The second exercise </p>

      <Content
        part1={parts[0].name}
        exercises1={parts[0].exercises}
        part2={parts[1].name}
        exercises2={parts[1].exercises}
        part3={parts[2].name}
        exercises3={parts[2].exercises}
      />

      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
      <Footer name={name} />
    </div>
  );
};

export default App;
