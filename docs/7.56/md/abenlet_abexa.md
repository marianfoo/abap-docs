---
title: "LET Expression"
description: |
  This example demonstrates a LET expression in a constructor expression. Source Code REPORT demo_let_it_be. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES text TYPE STANDARD TABLE OF string WITH EMPTY KEY. cl_demo_output=>new( )
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlet_abexa.htm"
abapFile: "abenlet_abexa.htm"
keywords: ["select", "do", "method", "class", "types", "internal-table", "abenlet", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Local Declarations in Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocal_expr_declarations.htm) →  [let\_exp, LET ... IN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplet.htm) → 

LET Expression

This example demonstrates a LET expression in a constructor expression.

Source Code

REPORT demo\_let\_it\_be.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES text TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    cl\_demo\_output=>new( )->write(
     VALUE text( LET it = \`be\` IN
                   ( |To { it } is to do|          )
                   ( |To { it }, or not to { it }| )
                   ( |To do is to { it }|          )
                   ( |Do { it } do { it } do|      ) )
    )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A constructor expression with the value operator [VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_value.htm) constructs lines in an internal table to which the value of the local helper variable it is passed.