  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CLASS, IMPLEMENTATION, ABAPCLASS_IMPLEMENTATION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

CLASS, IMPLEMENTATION

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_shortref.htm)

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

-   All [concrete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconcrete_glosry.htm "Glossary Entry") methods declared using [METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) or [CLASS-METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods.htm) in the declaration part of the class.
-   All concrete methods of interfaces listed using the statement [INTERFACES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterfaces.htm) in the declaration part of the class.
-   All methods inherited from superclasses that are listed using the statement [METHODS ... REDEFINITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_redefinition.htm) in the declaration part of the class

The implementation of each method corresponds to a processing block [METHOD - ENDMETHOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethod.htm). No statements are allowed in the implementation part outside of method implementations. In a method implementation, all components can be accessed in an instance method, and all static components of the class can be accessed in a static method implementation. No component selector is necessary to address the components of personal classes. Within the implementation of each instance method, there is an implicitly created, local reference variable named me available at runtime, which points to the current instance of the method.

When implementing methods declared in an interface bound by the class using [INTERFACES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterfaces.htm) intf, the name of the method in METHOD must have either intf~ in front of it or use an alias name declared using [ALIASES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapaliases.htm). The interface method must be declared in the interface. Otherwise, a syntax error occurs when local interfaces are used. If a global interface is specified using intf~, only a syntax warning occurs. In this way, the classes remain usable even after subsequent removal of the methods from the global interface, provided they have not used the methods themselves.

Hints

-   A class that does not have to implement any methods because of its declaration part either has an empty implementation part or none at all.
-   Abstract methods in abstract classes cannot be implemented in the implementation part.
-   The implementation part of a class can only be specified in the context described under [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass.htm).

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