  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_oview.htm) →  [Inheritance](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninheritance.htm) → 

Abstract and Final Methods and Classes

Abstract and final methods or classes can be defined using the additions ABSTRACT and FINAL of the statements [METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods.htm) and [CLASS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass.htm).

Abstract methods are declared in abstract classes and cannot be implemented in the same class. They must first be implemented in a subclass of the inheritance tree. Abstract classes cannot, therefore, be instantiated. A non-abstract method is a concrete method. With the exception of the instance constructor, concrete instance methods of a class can also call their abstract methods.

Final methods can no longer be redefined in subclasses. They cannot have any additional subclasses and close an inheritance tree definitively.

Notes

-   In classes that are both abstract and final, only the static components can be used. Although instance components can be declared, they cannot be used. Specifying ABSTRACT and FINAL together, therefore, is useful only for [static classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_class_glosry.htm "Glossary Entry").

-   Private methods cannot be redefined and can therefore not be abstract.