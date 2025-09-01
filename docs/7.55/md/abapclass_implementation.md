  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [CLASS](javascript:call_link\('abapclass.htm'\)) → 

CLASS, IMPLEMENTATION

[Short Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax

CLASS class IMPLEMENTATION.
  ...
  METHOD ...
    ...
  ENDMETHOD.
  ...
ENDCLASS.

Effect

In the statement block CLASS class IMPLEMENTATION - ENDCLASS, the following methods of a class class must be implemented, in any order:

-   All [concrete](javascript:call_link\('abenconcrete_glosry.htm'\) "Glossary Entry") methods declared using [METHODS](javascript:call_link\('abapmethods.htm'\)) or [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)) in the declaration part of the class.
    

-   All concrete methods of interfaces listed using the statement [INTERFACES](javascript:call_link\('abapinterfaces.htm'\)) in the declaration part of the class.
    

-   All methods inherited from superclasses that are listed using the statement [METHODS ... REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)) in the declaration part of the class

The implementation of each method corresponds to a processing block [METHOD - ENDMETHOD](javascript:call_link\('abapmethod.htm'\)). No statements are allowed in the implementation part outside of method implementations. In a method implementation, all components can be accessed in an instance method, and all static components of the class can be accessed in a static method implementation. No component selector is necessary to address the components of personal classes. Within the implementation of each instance method, there is an implicitly created, local reference variable named me available at runtime, which points to the current instance of the method.

When implementing methods declared in an interface bound by the class using [INTERFACES](javascript:call_link\('abapinterfaces.htm'\)) intf, the name of the method in METHOD must have either intf~ in front of it or use an alias name declared using [ALIASES](javascript:call_link\('abapaliases.htm'\)). The interface method must be declared in the interface. Otherwise, a syntax error occurs when local interfaces are used. If a global interface is specified using intf~, only a syntax warning occurs. In this way, the classes remain usable even after subsequent removal of the methods from the global interface, provided they have not used the methods themselves.

Hints

-   A class that does not have to implement any methods because of its declaration part either has an empty implementation part or none at all.
    

-   Abstract methods in abstract classes cannot be implemented in the implementation part.
    

-   The implementation part of a class can only be specified in the context described under [CLASS](javascript:call_link\('abapclass.htm'\)).
    

Example

In this example, three methods of the class c2 must be implemented. The method m1 in c1 is abstract and must not be implemented there.

INTERFACE i1.
  METHODS m1.
ENDINTERFACE.
CLASS c1 DEFINITION ABSTRACT.
  PROTECTED SECTION.
    METHODS m1 ABSTRACT.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    INTERFACES i1.
    METHODS m2.
  PROTECTED SECTION.
    METHODS m1 REDEFINITION.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m1.
    ...
  ENDMETHOD.
  METHOD m2.
    ...
  ENDMETHOD.
  METHOD i1~m1.
    ...
  ENDMETHOD.
ENDCLASS.