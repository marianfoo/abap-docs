  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethods.htm) →  [CLASS-METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CLASS-METHODS, RETURNING, ABAPCLASS-METHODS_FUNCTIONAL, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

CLASS-METHODS, RETURNING

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_default.htm)*\]*
  *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)*\]*
  *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)*\]*
  RETURNING VALUE(r) [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_syntax.htm)
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Effect

This statement declares a [functional](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_glosry.htm "Glossary Entry") [static method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_method_glosry.htm "Glossary Entry") meth. The additions have exactly the same syntax and meaning as those for [functional instance methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_functional.htm).

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