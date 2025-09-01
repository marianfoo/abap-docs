---
title: "Built-In Functions - Obscured by Methods"
description: |
  Within a class, a built-in function is always obscured by methods(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_glosry.htm 'Glossary Entry') of the class if they have the same name, regardless of the number and type of arguments in the function. The function is also obscure
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_functions_hiding.htm"
abapFile: "abenbuilt_in_functions_hiding.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenbuilt", "functions", "hiding"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in.htm) →  [Built-In Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_functions.htm) → 

Built-In Functions - Obscured by Methods

Within a class, a built-in function is always obscured by [methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_glosry.htm "Glossary Entry") of the class if they have the same name, regardless of the number and type of arguments in the function. The function is also obscured regardless of the number and type of method parameters. This also takes place in method calls for which no selector \=> or \-> is specified in front of the method name:

-   A [static method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_method_glosry.htm "Glossary Entry") obscures a built-in function with the same name in all methods of the associated class.

-   An [instance method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninstance_method_glosry.htm "Glossary Entry") obscures a built-in function with the same name in the instance methods of the associated class.

The function is obscured regardless of the operand position. More specifically, any built-in functions called as arguments of other functions are also obscured.

Note

Methods should never be given the same name as a built-in function.

Example

The following class returns a syntax error. The strlen specified on the right side of the assignment indicates the method of the class and not the built-in function. It cannot be specified in this operand position since it is not a functional method with return code.

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