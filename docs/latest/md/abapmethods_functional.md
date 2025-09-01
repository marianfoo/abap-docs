---
title: "METHODS, RETURNING"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_shortref.htm) Syntax METHODS meth ABSTRACTFINAL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm) DEFAULT IGNOREFAIL(https://help.sap.c
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_functional.htm"
abapFile: "abapmethods_functional.htm"
keywords: ["do", "if", "try", "method", "class", "abapmethods", "functional"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethods.htm) →  [METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20RETURNING%2C%20ABAPMETHODS_FUNCTIONAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS, RETURNING

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_shortref.htm)

Syntax

METHODS meth *\[*[ABSTRACT*|*FINAL*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)
            *|**\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm)*\]*
  *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)*\]*
  *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)*\]*
  RETURNING VALUE(r) [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_complete.htm)
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Addition:

[... RETURNING VALUE(r) typing](#!ABAP_ONE_ADD@1@)

Effect

This statement declares a [functional](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry") instance method meth. The same applies to the additions ABSTRACT, FINAL, DEFAULT, IMPORTING, EXPORTING, CHANGING, RAISING, and EXCEPTIONS as to [general instance methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm).

A functional method can be [called as a function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_functional.htm) in a suitable read position.

Addition   

... RETURNING VALUE(r) typing

Effect

In addition to any other formal parameters, a functional method has exactly one return value r declared using the addition RETURNING. The return value must be passed by [value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_value_glosry.htm "Glossary Entry") using VALUE and be completely typed using [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_complete.htm). In the typing check, [special rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_return_values.htm) apply, depending on whether an explicit actual parameter is bound using [RECEIVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_parameters.htm) or the functional method is used in an operand position.

Hints

-   In the methods of a class, one method of the class [hides](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions_syntax.htm) a [built-in function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") with the same name. The same applies in functional method calls. Functional method calls and specified built-in functions have similar syntax, which means it is important that a functional method is not given the same name as a built-in function.
-   Functional methods are allowed as [actual parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_arith_expr.htm) of methods, which enables the option of nesting method calls in an operand position.
-   The return value of a functional method is always passed by value, which means it is passed only if the functional method is completed without errors.
-   In functional methods, the statement [RETURN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreturn.htm) can be used to assign the result of an expression [expr](abapreturn.htm#!ABAP_ONE_ADD@1@) to the return value when terminating the method.

Example

Declaration of a functional method with input parameter and return value. The method is called functionally as an actual parameter for the input parameter of another method.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS
      meth
        IMPORTING
          name          TYPE string
        RETURNING
          VALUE(result) TYPE string.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    result = |Hello { name }!|.
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>display(
      NEW cls( )->meth( CONV #( sy-uname ) ) ).
  ENDMETHOD.
ENDCLASS.