  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [ABAP Objects - Methods](javascript:call_link\('abenmethods.htm'\)) →  [METHODS](javascript:call_link\('abapmethods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20DEFAULT%2C%20ABAPMETHODS_DEFAULT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS, DEFAULT

[Short Reference](javascript:call_link\('abapmethods_shortref.htm'\))

Syntax

METHODS meth ... DEFAULT IGNORE*|*FAIL ...

Effect

The addition DEFAULT makes the explicit implementation of an interface method optional and defines a default behavior for calls of non-implemented methods. It cannot be used in classes, only in interfaces. All instance methods and static methods can be defined as optional except for constructors and test methods.

A class that implements an interface with the statement [INTERFACES](javascript:call_link\('abapinterfaces.htm'\)) can implement its optional methods, but this is not mandatory. The additions IGNORE or FAIL define the behavior that applies when an optional interface method of an object or class is called at runtime and this object or class is not implemented explicitly.

-   When a non-implemented optional interface method defined with the addition IGNORE is called, the behavior is the same as when it is implemented with an empty body. In particular, all actual parameters are initialized that receive values from formal parameters using [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry").
-   Calls of a non-implemented optional interface method defined using the addition FAIL raise an exception of the class CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD and, if not handled, results in a runtime error CALL\_METHOD\_NOT\_IMPLEMENTED occurs.

The default behavior defined using DEFAULT also applies to the redefinition of an inherited optional interface method using the addition [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)). A subclass that redefines an optional interface method does not need to implement it explicitly. If the implementation is missing, the default behavior is applied along a path of the inheritance tree until an explicit implementation occurs.

Hints

-   The DEFAULT addition can also be used for [BAdI methods](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry").
-   The default behavior defined using DEFAULT FAIL that applies to calls of a non-implemented optional method matches the behavior of calling a non-implemented non-optional method of a regular global interface. In a [BAdI interface](javascript:call_link\('abenbadi_interface_glosry.htm'\) "Glossary Entry") on the other hand, DEFAULT IGNORE matches the default behavior of the [CALL BADI](javascript:call_link\('abapcall_badi.htm'\)) statement.
-   If an optional interface method is redefined in a subclass, it should also be implemented explicitly in this subclass. The default behavior is usually not as expected.

Example

The class class implements the interface intf without implementing its optional methods. A call of the non-implemented static method m1 raises a handled exception, due to the addition FAIL. A call of the non-implemented instance method m2 does not execute any statements due to the addition IGNORE, but sets their return value r to 0.

INTERFACE intf.
  CLASS-METHODS m1 DEFAULT FAIL.
  METHODS       m2 DEFAULT IGNORE
    RETURNING VALUE(r) TYPE i.
ENDINTERFACE.
CLASS class DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
    ALIASES m1 FOR intf~m1.
    ALIASES m2 FOR intf~m2.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS class IMPLEMENTATION.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA oref TYPE REF TO class.
    TRY.
        class=>m1( ).
      CATCH cx\_sy\_dyn\_call\_illegal\_method INTO FINAL(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
    ENDTRY.
    cl\_demo\_output=>display( NEW class( )->m2( ) ).
  ENDMETHOD.
ENDCLASS.