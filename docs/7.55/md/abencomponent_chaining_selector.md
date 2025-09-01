---
title: "Chainings"
description: |
  Whenever operands are composed of components, which in turn contain components, the names of these components are composed of chainings with multiple component selectors. The following rules apply for such chained names(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchained_name_gl
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponent_chaining_selector.htm"
abapFile: "abencomponent_chaining_selector.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abencomponent", "chaining", "selector"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm) →  [Names for Single Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_names.htm) → 

Chainings

Whenever operands are composed of components, which in turn contain components, the names of these components are composed of chainings with multiple component selectors. The following rules apply for such [chained names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchained_name_glosry.htm "Glossary Entry"):

-   Taken together, the names to the left of each structure component selector must address a structured data type or a structure.

-   Taken together, the names to the left of each object component selector must address a reference variable.

-   The class component selector can occur in a name exactly once as the first selector.

-   The interface component selector can only occur more than once in a name if other component selectors are listed between the individual interface component selectors.

Hint

In addition to the chaining of names, the following chainings are possible:

-   [Method chainings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with the object component selector

-   [Chainings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_exp_chaining.htm) of [table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expression_glosry.htm "Glossary Entry")

Chainings can be combined in any way as long as the corresponding rules are respected.

Example

Declaration of a nested structured data type struc2 in struc1 and a structure struc3 in an interface i1.

The component comp of struc3 is a data reference variable of the static type struc1. The i1 interface is the component interface of i2 and the latter is implemented in c1. In c2, a [static attribute](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_attribute_glosry.htm "Glossary Entry") is declared as the object reference of the static type c1. The expression in the last line can be at an operand position that expects a data object, and identifies the component comp of the structure struc2 in a chaining that starts at class c2. A prerequisite for use of the expression is that both reference variables, oref and dref, point to the respective instances.

INTERFACE i1.
  TYPES: BEGIN OF struc1,
           ...
           BEGIN OF struc2,
             ...,
             comp TYPE ...,
             ...,
           END OF struc2,
           ...
         END OF struc1.
  DATA: BEGIN OF struc3,
          ...
          dref TYPE REF TO struc1,
          ...
        END OF struc3.
ENDINTERFACE.
INTERFACE i2.
  INTERFACES i1.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i2.
ENDCLASS.
CLASS c2 DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA oref TYPE REF TO c1.
ENDCLASS.
...
... c2=>oref->i1~struc3-dref->struc2-comp ...