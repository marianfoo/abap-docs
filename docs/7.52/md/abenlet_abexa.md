  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Local Declarations in Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_expr_declarations.htm) →  [let\_exp - LET ... IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) → 

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

A constructor expression with the value operator [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_value.htm) constructs rows in an internal table. The value of the local auxiliary variable it is passed to the table.