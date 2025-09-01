  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 4.xx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-4.htm) →  [News for Release 4.6A](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-46a.htm) → 

ABAP Objects - Inheritance and Nested Interfaces in Release 4.6A

In Release 4.6A the following components are added to the core ABAP Objects functions:

[1\. Inheritance](#!ABAP_MODIFICATION_1@1@)
[2\. Nested Interfaces](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Inheritance

ABAP Objects enables [inheritance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninheritance.htm). The addition INHERITING FROM of the statement [CLASS class DEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass.htm) can be used to derive a class from a superclass. Each subclass inherits all components from all superclasses and enables specialization by adding its own components and by using the [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) of previous methods. This makes it possible to define inheritance trees that become more and more specific from subclass to subclass, starting from the root node OBJECT.

The additions ABSTRACT and FINAL of the statements [CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass.htm) and [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) make it possible to define abstract and final classes and methods. Abstract classes cannot be instantiated. Abstract methods are not implemented in their class and can occur only in abstract classes. Abstract methods can be implemented in a subclass of the abstract class. Final classes cannot have any subclasses. Final methods cannot be redefined. All methods of final classes are automatically final.

Modification 2   

Nested Interfaces

Interfaces can be [nested](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninterface_composition.htm) by specifying other interfaces as components in the definition of an interface:
[INTERFACE i.](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinterface.htm)
...
[INTERFACES: i1, i2  ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinterfaces.htm)
...
[ENDINTERFACE.](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapendinterface.htm)