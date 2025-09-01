  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Local Declarations in Expressions](javascript:call_link\('abenlocal_expr_declarations.htm'\)) →  [let\_exp, LET ... IN](javascript:call_link\('abaplet.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LET Expression, ABENLET_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

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

A constructor expression with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) constructs lines in an internal table to which the value of the local helper variable it is passed.