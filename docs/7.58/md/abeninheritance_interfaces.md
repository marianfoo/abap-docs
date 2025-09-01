  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Inheritance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Inheritance%20and%20Interfaces%2C%20ABENINHERITANCE_INTERFACES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

ABAP Objects - Inheritance and Interfaces

[Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterfac.htm) are standalone constructs in ABAP Objects that support [polymorphism](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpolymorphism_glosry.htm "Glossary Entry") in classes. The polymorphism of interfaces is based on the fact that each class that implements an interface can implement its methods differently. All interface components look similar externally, which is why [interface reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") can point to objects of all classes that implement the associated interface.

The interface concept exists completely independent of and in addition to the inheritance concept. The classes of an inheritance tree can implement any number of interfaces, but each interface can be implemented only once in each inheritance tree. This ensures that each interface component comp has a unique name across the entire inheritance tree intf~icomp and that it is contained in all subclasses starting with the class that implements it. [Interface reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") that can point to a class of the inheritance tree can also point to all subclasses. Once they are implemented, interface methods are fully functioning components of a class and can be redefined in subclasses. In the case of interface methods defined as optional using [DEFAULT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_default.htm), and without explicit implementation, the default behavior is applied along a path of an inheritance tree until a redefinition with explicit implementation occurs.