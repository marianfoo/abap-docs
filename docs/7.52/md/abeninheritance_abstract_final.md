  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

Abstract and Final Methods and Classes

Abstract and final methods or classes can be defined using the additions ABSTRACT and FINAL of the statements [METHODS](javascript:call_link\('abapmethods.htm'\)) and [CLASS](javascript:call_link\('abapclass.htm'\)).

Abstract methods are declared in abstract classes and cannot be implemented in the same class. They must first be implemented in a subclass of the inheritance tree. Abstract classes cannot, therefore, be instantiated. A non-abstract method is a concrete method. With the exception of the instance constructor, concrete instance methods of a class can also call their abstract methods.

Final methods can no longer be redefined in subclasses. They cannot have any additional subclasses and close an inheritance tree definitively.

Notes

-   In classes that are both abstract and final, only the static components can be used. Although instance components can be declared, they cannot be used. Specifying ABSTRACT and FINAL together therefore is useful only for [static classes](javascript:call_link\('abenstatic_class_glosry.htm'\) "Glossary Entry").

-   Private methods cannot be redefined and can therefore not be abstract.