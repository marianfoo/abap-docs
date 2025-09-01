  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_elem](javascript:call_link\('abensql_elem.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20Constant%20in%20SELECT%20List%2C%20ABENSQL_EXPR_LITERAL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

sql\_exp - Constant in SELECT List

This example demonstrates one way to use a constant value in the SELECT list.

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_expr\_literal DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_expr\_literal IMPLEMENTATION.
  METHOD main.
    DATA carrier TYPE scarr-carrid.
    cl\_demo\_input=>new( )->request( CHANGING field = carrier ).
    SELECT SINGLE @abap\_true
           FROM scarr
           WHERE carrid = @carrier
           INTO @FINAL(exists).
    IF exists = abap\_true.
      out->write(
        |Carrier { carrier } exists in SCARR| ).
    ELSE.
      out->write(
        |Carrier { carrier } does not exist in SCARR| ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

It is to be determined whether a row exists for a WHERE condition, regardless of the content of the row. A constant is specified to make specifying a column of the database and transporting it unnecessary. The target object exists is created using an inline declaration.