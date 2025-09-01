  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [ABAP Objects - Methods](javascript:call_link\('abenmethods.htm'\)) →  [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS-METHODS%2C%20RETURNING%2C%20ABAPCLASS-METHODS_FUNCTIONAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLASS-METHODS, RETURNING

[Short Reference](javascript:call_link\('abapclass-methods_shortref.htm'\))

Syntax

CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](javascript:call_link\('abapmethods_default.htm'\))*\]*
  *\[*IMPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\)) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[*EXPORTING [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
  *\[*CHANGING  [parameters](javascript:call_link\('abapmethods_parameters.htm'\))*\]*
  RETURNING VALUE(r) [typing](javascript:call_link\('abentyping_syntax.htm'\))
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Effect

This statement declares a [functional](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") meth. The additions have exactly the same syntax and meaning as those for [functional instance methods](javascript:call_link\('abapmethods_functional.htm'\)).

Example

The class circle contains two functional static methods, circumference and area, which work with the constant pi.

CLASS circle DEFINITION.
  PUBLIC SECTION.
    CONSTANTS pi TYPE decfloat34
                 VALUE '3.141592653589793238462643383279503'.
    CLASS-METHODS: circumference IMPORTING r        TYPE decfloat34
                                 RETURNING VALUE(c) TYPE decfloat34,
      area          IMPORTING r        TYPE decfloat34
                    RETURNING VALUE(a) TYPE decfloat34.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS circle IMPLEMENTATION.
  METHOD circumference.
    c = 2 \* pi \* r.
  ENDMETHOD.
  METHOD area.
    a = pi \* r \*\* 2.
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA: circ   TYPE decfloat34,
          area   TYPE decfloat34,
          radius TYPE decfloat34.
    radius = '1.00'.
    circ = circle=>circumference( radius ).
    area = circle=>area( radius ).
  ENDMETHOD.
ENDCLASS.