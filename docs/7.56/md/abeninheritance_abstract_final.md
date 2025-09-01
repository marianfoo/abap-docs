  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Inheritance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninheritance.htm) → 

ABAP Objects - Abstract and Final Methods and Classes

Abstract and final methods or classes can be defined using the additions ABSTRACT and FINAL of the statements [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) and [CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass.htm).

Abstract methods are declared in abstract classes and cannot be implemented in the same class, only in a subclass of the inheritance tree. Abstract classes cannot, therefore, be instantiated. A non-abstract method is a concrete method. With the exception of the instance constructor, concrete instance methods of a class can also call their abstract methods.

Final methods can no longer be redefined in subclasses. They cannot have any additional subclasses and close an inheritance tree definitively.

Hints

-   In classes that are both abstract and final, only the static components can be used. Although instance components can be declared, they cannot be used. Specifying ABSTRACT and FINAL together is therefore only useful for [static classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_class_glosry.htm "Glossary Entry").
-   Private methods cannot be redefined and therefore cannot be abstract.