---
title: "Built-In Functions, Hiding by Methods"
description: |
  Within a class, a built-in function is always hidden by methods(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_glosry.htm 'Glossary Entry') of the class if they have the same name, regardless of the number and type of its arguments. The function is also hidden regardless of
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions_hiding.htm"
abapFile: "abenbuilt_in_functions_hiding.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenbuilt", "functions", "hiding"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in.htm) →  [Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Built-In Functions, Hiding by Methods, ABENBUILT_IN_FUNCTIONS_HIDING, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Built-In Functions, Hiding by Methods

Within a class, a built-in function is always hidden by [methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_glosry.htm "Glossary Entry") of the class if they have the same name, regardless of the number and type of its arguments. The function is also hidden regardless of the number and type of method parameters. This especially takes place in method calls for which no selector \=> or \-> is specified in front of the method name:

-   A [static method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_method_glosry.htm "Glossary Entry") hides a built-in function with the same name in all methods of the associated class.
-   An [instance method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_method_glosry.htm "Glossary Entry") hides a built-in function with the same name in the instance methods of the associated class.

The function is hidden regardless of the operand position. More specifically, any built-in functions called as arguments of other functions are also hidden.

Hint

Methods should never be given the same name as a built-in function.

Example

The following class returns a syntax error. The specification of strlen on the right side of the assignment addresses the method of the class and not the built-in function. It cannot be specified in this operand position since it is not a functional method with a return value.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
    CLASS-METHODS strlen IMPORTING text TYPE string
                         EXPORTING len  TYPE i.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(len) = strlen( \`xxx\` ).
  ENDMETHOD.
  METHOD strlen.
    ...
  ENDMETHOD.
ENDCLASS.