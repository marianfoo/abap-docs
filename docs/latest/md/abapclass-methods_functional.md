  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethods.htm) →  [CLASS-METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS-METHODS%2C%20RETURNING%2C%20ABAPCLASS-METHODS_FUNCTIONAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLASS-METHODS, RETURNING

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_shortref.htm)

Syntax

CLASS-METHODS meth *\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm)*\]*
  *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)*\]*
  *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)*\]*
  RETURNING VALUE(r) [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_syntax.htm)
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Effect

This statement declares a [functional](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry") [static method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_method_glosry.htm "Glossary Entry") meth. The additions have exactly the same syntax and meaning as those for [functional instance methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_functional.htm).

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