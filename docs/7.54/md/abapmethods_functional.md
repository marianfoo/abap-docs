---
title: "METHODS - RETURNING"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_shortref.htm) Syntax METHODS meth ABSTRACTFINAL(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_abstract_final.htm) DEFAULT IGNOREFAIL(https://help.sap.com/doc/aba
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_functional.htm"
abapFile: "abapmethods_functional.htm"
keywords: ["select", "do", "if", "try", "method", "class", "abapmethods", "functional"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_ifac_components.htm) →  [Methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethods.htm) →  [METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods.htm) → 

METHODS - RETURNING

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_shortref.htm)

Syntax

METHODS meth *\[*[ABSTRACT*|*FINAL*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_abstract_final.htm)
            *|**\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_default.htm)*\]*
  *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_parameters.htm)*\]*
  *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_parameters.htm)*\]*
  RETURNING VALUE(r) [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_complete.htm)
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Addition:

[... RETURNING VALUE(r) typing](#!ABAP_ONE_ADD@1@)

Effect

This statement declares a [functional](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_glosry.htm "Glossary Entry") instance method meth. The same applies to the additions ABSTRACT, FINAL, DEFAULT, IMPORTING, EXPORTING, CHANGING, RAISING, and EXCEPTIONS as to [general instance methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_general.htm).

A functional method can be [called as a function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm) in a suitable reading position.

Addition

... RETURNING VALUE(r) typing

Effect

Alongside any other formal parameters, a functional method has precisely one return value r declared using the addition RETURNING.The return value must be passed by [value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry") using VALUE and be fully typed using [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_complete.htm). In the typing check, [special rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_return_values.htm) apply, depending on whether an explicit actual parameter is bound using [RECEIVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm) or the functional method is used in an operand position.

Notes

-   In the methods of a class, one method of the class [obscures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_functions_syntax.htm) a [built-in function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_function_glosry.htm "Glossary Entry") with the same name. The same applies in functional method calls. Functional method calls and specified built-in functions have similar syntax, which means it is important that a functional method is not given the same name as a built-in function.
    
-   Functional methods are allowed as [actual parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm) of methods, which enables the option of nesting method calls in an operand position.
    
-   The return value of a functional method is always passed by value, which means it is passed only if the functional method exits without error.
    

Example

Declaration of a functional method with input parameter and return value. The method is called as an actual parameter for the input parameter of another method.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS
      meth
        IMPORTING
          name          TYPE string
        RETURNING
          VALUE(result) TYPE string.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    result = |Hello { name }!|.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display(
    NEW cls( )->meth( CONV #( sy-uname ) ) ).