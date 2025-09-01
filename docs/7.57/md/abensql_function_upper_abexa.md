  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions.htm) →  [DDIC - SQL Functions for Strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_string.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - SQL Function UPPER, ABENSQL_FUNCTION_UPPER_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - SQL Function UPPER

This example demonstrates the SQL function UPPER in ABAP SQL and ABAP CDS.

Source Code   

REPORT demo\_sql\_upper.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      query TYPE string VALUE \`ERROR\`,
      rows  TYPE i      VALUE 100.
    cl\_demo\_input=>add\_field( CHANGING field = query ).
    cl\_demo\_input=>request(   CHANGING field = rows ).
    query = \`%\` && to\_upper( query ) && \`%\`.
    IF rows < 1 OR rows > 1000.
      cl\_demo\_output=>display( 'Enter rows between 1 and 1000' ).
      RETURN.
    ENDIF.
    "UPPER in CDS view
    SELECT arbgb, msgnr, text
           FROM demo\_cds\_upper
           WHERE sprsl = 'E' AND
                 upper\_text LIKE @query
           ORDER BY arbgb, msgnr, text
           INTO TABLE @FINAL(result1)
           UP TO @rows ROWS.
    "UPPER in ABAP SQL
    SELECT arbgb, msgnr, text
           FROM t100
           WHERE sprsl = 'E' AND
                 upper( text ) LIKE @query
           ORDER BY arbgb, msgnr, text
           INTO TABLE @FINAL(result2)
           UP TO @rows ROWS.
    ASSERT result1 = result2.
    cl\_demo\_output=>display( result1 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

A SELECT statement accesses the following CDS DDIC-based view (obsolete) and view entity, which use the SQL function UPPER:

@AbapCatalog.sqlViewName: 'DEMOCDSUPPER'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Upper
  as select from t100
  {
    sprsl,
    arbgb,
    msgnr,
    text,
    upper(text) as upper\_text
  }

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_UPPER\_VE
  as select from t100
  {
    sprsl,
    arbgb,
    msgnr,
    text,
    upper(text) as upper\_text
  }

Another SELECT statement uses the SQL function UPPER directly to access the same data source T100.

Since SQL functions cannot yet be used on the left side of LIKE in the DDL of ABAP CDS, the view returns a helper field, which is evaluated in ABAP SQL. The results are the same. The search effected by the examples is not case-sensitive.