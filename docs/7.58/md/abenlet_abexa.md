---
title: "LET Expression"
description: |
  This example demonstrates a LET expression in a constructor expression. Source Code  Public class definition CLASS cl_demo_let_it_be DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlet_abexa.htm"
abapFile: "abenlet_abexa.htm"
keywords: ["do", "if", "method", "class", "types", "internal-table", "abenlet", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Local Declarations in Constructor Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocal_expr_declarations.htm) →  [let\_exp, LET ... IN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LET%20Expression%2C%20ABENLET_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LET Expression

This example demonstrates a LET expression in a constructor expression.

Source Code   

\* Public class definition
CLASS cl\_demo\_let\_it\_be DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_let\_it\_be IMPLEMENTATION.
  METHOD main.
    TYPES text TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    out->write(
     VALUE text( LET it = \`be\` IN
                   ( |To { it } is to do|          )
                   ( |To { it }, or not to { it }| )
                   ( |To do is to { it }|          )
                   ( |Do { it } do { it } do|      ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

A constructor expression with the value operator [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_value.htm) constructs lines in an internal table to which the value of the local helper variable it is passed.