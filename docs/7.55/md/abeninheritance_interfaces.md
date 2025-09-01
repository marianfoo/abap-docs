  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

ABAP Objects - Inheritance and Interfaces

[Interfaces](javascript:call_link\('abeninterfac.htm'\)) are standalone constructs in ABAP Objects that support [polymorphism](javascript:call_link\('abenpolymorphism_glosry.htm'\) "Glossary Entry") in classes. The polymorphism of interfaces is based on the fact that each class that implements an interface can implement its methods differently. All interface components look similar externally, which is why [interface reference variables](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") can point to objects of all classes that implement the associated interface.

The interface concept exists completely independent of and in addition to the inheritance concept. The classes of an inheritance tree can implement any number of interfaces, but each interface can be implemented only once in each inheritance tree. This ensures that each interface component comp has a unique name across the entire inheritance tree intf~icomp and that is contained in all subclasses starting with the class that implements it. [Interface reference variables](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") that can point to a class of the inheritance tree can also point to all subclasses. Once they are implemented, interface methods are fully functioning components of a class and can be redefined in subclasses. In the case of interface methods defined as optional using [DEFAULT](javascript:call_link\('abapmethods_default.htm'\)), and without explicit implementation, the default behavior is applied along a path of an inheritance tree until a redefinition with explicit implementation occurs.