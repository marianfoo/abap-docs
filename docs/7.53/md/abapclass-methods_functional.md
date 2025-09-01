  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Methods](javascript:call_link\('abenmethods.htm'\)) →  [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)) → 

CLASS-METHODS - RETURNING

[Quick Reference](javascript:call_link\('abapclass-methods_shortref.htm'\))

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
    CLASS-METHODS: circumference IMPORTING r TYPE decfloat34
                                 RETURNING value(c) TYPE decfloat34,
                   area          IMPORTING r TYPE decfloat34
                                 RETURNING value(a) TYPE decfloat34.
ENDCLASS.
CLASS circle IMPLEMENTATION.
  METHOD circumference.
    c = 2 \* pi \* r.
  ENDMETHOD.
  METHOD area.
    a = pi \* r \*\* 2.
  ENDMETHOD.
ENDCLASS.
DATA: circ   TYPE decfloat34,
      area   TYPE decfloat34,
      radius TYPE decfloat34.
START-OF-SELECTION.
  radius = '1.00'.
  circ = circle=>circumference( radius ).
  area = circle=>area( radius ).