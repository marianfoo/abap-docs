  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, select\_clause](javascript:call_link\('abapselect_clause.htm'\)) →  [SELECT, select\_list](javascript:call_link\('abapselect_list.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, Remove Columns from the SELECT List, ABENSELECT_EXCEPT_COLUMNS_ABEXA, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, Remove Columns from the SELECT List

This example demonstrates how all columns except some specific ones can be read with a dynamic token.

Source Code   

REPORT demo\_select\_except\_columns.
CLASS select\_list DEFINITION.
  PUBLIC SECTION.
    METHODS:
      constructor IMPORTING dbtab  TYPE string
                            except TYPE string,
      get\_token   RETURNING VALUE(token)  TYPE string,
      get\_target  RETURNING VALUE(target) TYPE REF TO data.
  PRIVATE SECTION.
    DATA
      components TYPE cl\_abap\_structdescr=>component\_table.
ENDCLASS.
CLASS select\_list IMPLEMENTATION.
  METHOD constructor.
    components = CAST cl\_abap\_structdescr(
      cl\_abap\_typedescr=>describe\_by\_name( to\_upper( dbtab ) )
        )->get\_components( ).
    SPLIT except AT \`,\` INTO TABLE FINAL(columns).
    LOOP AT columns ASSIGNING FIELD-SYMBOL(<column>).
      DELETE components WHERE name = to\_upper( condense( <column> ) ).
    ENDLOOP.
  ENDMETHOD.
  METHOD get\_token.
    token =
      REDUCE string( INIT s = \`\`
                     FOR <wa> IN components
                     NEXT s &&=  COND #( WHEN s = \`\`  THEN <wa>-name
                                         ELSE  \`, \` && <wa>-name ) ).
  ENDMETHOD.
  METHOD get\_target.
    FINAL(itab\_type) =
     cl\_abap\_tabledescr=>get(
             p\_line\_type  = cl\_abap\_structdescr=>get(
                               p\_components = components )
             p\_table\_kind = cl\_abap\_tabledescr=>tablekind\_std ).
    CREATE DATA target TYPE HANDLE itab\_type.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  FINAL(sel\_list) = NEW select\_list( dbtab  = 'scarr'
                                    except = 'carrid, url' ).
  FINAL(token)  = sel\_list->get\_token( ).
  FINAL(target) = sel\_list->get\_target( ).
  SELECT (token)
         FROM scarr
         INTO TABLE @target->\*.
  cl\_demo\_output=>display( target->\* ).

Description   

Using a helper class, a dynamic token and an appropriate target area are created, that enable the selection of all columns of a database table except a given list. This simple example omits the handling of possible exceptions and does not exclude the client column.