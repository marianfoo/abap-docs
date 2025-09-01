  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

Inheritance and Static Components

[Static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry"), like all components, exist only once in each inheritance tree, and can be used from the level of the declaring class:

-   A subclass can access all non-private static components of its superclasses. The class in which the static component is declared is always the class that is addressed.

-   From outside, the class component selector can be used to access all visible static components. Each class can be specified in which the component exists (that is, the declaring class and each subclass). Regardless of the class name used in the class component selector, however, the class in which the component is declared is addressed.

The class in which the component is declared is always the class addressed, regardless of whether the static component is used internally or externally. This is important in the following cases:

-   Calls of the [static constructors](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry").
    Static constructors are called the first time a class is addressed. If a static component is addressed that is declared in a superclass using the class name of a subclass, only the static constructor of the superclass is called.

-   Access to the [static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry")
    A subclass has access to the content of all non-private static attributes of all superclasses. Conversely, a superclass shares its public and protected static attributes with all of its subclasses. When inherited, therefore, static attributes are not just usable in a single class and can also be used to the subtree of the inheritance tree that consists of all subclasses of the defining class. Changes to the values are visible in all involved classes, regardless of the class used to address an attribute.

-   Registrations of [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry").
    If an event handler is declared for a static event of a subclass inherited from a superclass, it can react to this event only if it is raised by a method of the subclass or one of its subclasses. If the event is raised in a static method of a superclass, it is not handled, even if the method is called in a subclass or if the name of the subclass is specified.

Note

A static attribute of a class can be declared as a private attribute to prevent it from being used by all subclasses.

Example

Calls a static method of a superclass using the name of a subclass. Before the method is executed, the static constructor of the superclass is executed, but not the static constructor of the subclass. The method returns the value that is set in the superclass.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA     a1 TYPE string.
    CLASS-METHODS: class\_constructor,
                   m1 RETURNING value(r1) LIKE a1.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD class\_constructor.
    a1 = 'c1'.
  ENDMETHOD.
  METHOD m1.
    r1 = a1.
  ENDMETHOD.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    CLASS-METHODS class\_constructor.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD class\_constructor.
    a1 = 'c2'.
  ENDMETHOD.
ENDCLASS.
DATA v1 TYPE string.
START-OF-SELECTION.
  v1 = c2=>m1( ).

Example

This example shows how a subclass is used to change a static attribute of a superclass, and how the change is visible in a subclass of a different path in the inheritance tree.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA     a1 TYPE string.
ENDCLASS.
CLASS c11 DEFINITION INHERITING FROM c1.
  ...
ENDCLASS.
CLASS c12 DEFINITION INHERITING FROM c1.
  ...
ENDCLASS.
c11=>a1 = 'Hello Sister'.
MESSAGE c12=>a1 TYPE 'I'.

Executable Example

[Events in Inheritance](javascript:call_link\('abenevent_inheritance_abexa.htm'\))