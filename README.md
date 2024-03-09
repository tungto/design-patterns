# Quick Remind

## Class Relations

-   [Association, Aggregation, Composition, Dependency and IOC for Beginners](https://www.codeproject.com/Articles/777540/Association-Aggregation-Composition-Dependency-and)
-   [What is the difference between association, aggregation and composition?](https://stackoverflow.com/questions/885937/what-is-the-difference-between-association-aggregation-and-composition/34069760#34069760)
-   [Association, Aggregation, Composition, Dependency](https://niviki.com/p/association-aggregation-composition-dependency-la-gi)

1. Association

-   represent a bi-directional relationship: one student play many sports, a sport can be played by many student
-   No ownership: student doesn't own sport
-   No lifecycle dependency: If one object is destroyed, the other can continue to exist - If one student stop playing, sport still exist. vice versa

```
public class Student{
	public void play(Sport: sport){
		execute.play(sport);
	}
}
```

2. Aggregation

-   week has-a relationship: a whole has parts that belongs to it
-   no lifecycle dependency: exist independent

```
class Airliner{
	private ArrayList<CrewMember> crew;

	public Airliner(){
		crew = new ArrayList<CrewMember>();
	}

	public void add(CrewMember crewMember){}
}
```

-   airliner have 0 or many crew members
-   can add crew members latter

3. Composition

-   Strong has-a relationship => access parts through its whole
-   Part exclusive belong to whole
-   Lifecycle dependency

```
public class House{
	private Room room;
	public House(){
		room = new Room();
	}
}

```

-   room created at the same time with the House

4. Dependency

-   represent a relationship where change in one class may affect another class
-   Doesn't imply structural relationships but rather a reliance
-   Car depend on Fuel but NO ownership or direct association
-

```
class Car{
	public void start(Fuel fuel){}
}

class Fuel{

}

```

## UML

### Class Diagram

-   [ Create UML class diagrams](https://www.drawio.com/blog/uml-class-diagrams)

# Design Pattern

## Creation Patterns

### Singleton pattern

1. Intent

-   one instance
-   provide global access to this instance

2. Implement

-   private static field for singleton instance
-   private constructor
-   public static creation method to get instance

### Factory Method

-   Concrete Instantiation
