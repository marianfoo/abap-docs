  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_elem](javascript:call_link\('abensql_elem.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_exp - Constant in SELECT List, ABENSQL_EXPR_LITERAL_ABEXA, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_exp - Constant in SELECT List

This example demonstrates one way to use a constant value in the SELECT list.

Source Code   

REPORT demo\_sql\_expr\_literal.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrier TYPE scarr-carrid.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    SELECT SINGLE @abap\_true
           FROM scarr
           WHERE carrid = @carrier
           INTO @FINAL(exists).
      IF exists = abap\_true.
        cl\_demo\_output=>display(
          |Carrier { carrier } exists in SCARR| ).
      ELSE.
        cl\_demo\_output=>display(
          |Carrier { carrier } does not exist in SCARR| ).
      ENDIF.    ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

It is to be determined whether a row exists for a WHERE condition, regardless of the content of the row. A constant is specified to make specifying a column of the database and transporting it unnecessary. The target object exists is created using an inline declaration.