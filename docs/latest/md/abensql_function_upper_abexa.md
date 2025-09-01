---
title: "DDIC - SQL Function UPPER"
description: |
  This example demonstrates the SQL function UPPER in ABAP SQL and ABAP CDS. Source Code  Public class definition CLASS cl_demo_sql_upper DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS c
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_function_upper_abexa.htm"
abapFile: "abensql_function_upper_abexa.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "abensql", "function", "upper", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions.htm) →  [DDIC - SQL Functions for Strings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions_string.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Function%20UPPER%2C%20ABENSQL_FUNCTION_UPPER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - SQL Function UPPER

This example demonstrates the SQL function UPPER in ABAP SQL and ABAP CDS.

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_upper DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_upper IMPLEMENTATION.
  METHOD main.
    DATA:
      query TYPE string VALUE \`ERROR\`,
      rows  TYPE i      VALUE 100.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = query
     )->request(   CHANGING field = rows ).
    query = \`%\` && to\_upper( query ) && \`%\`.
    IF rows < 1 OR rows > 1000.
      out->write( 'Enter rows between 1 and 1000' ).
      RETURN.
    ENDIF.
    "UPPER in CDS view entity
    SELECT arbgb, msgnr, text
           FROM demo\_cds\_upper\_ve
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
    out->write( result1 ).
  ENDMETHOD.
ENDCLASS.

Description   

A SELECT statement accesses the following CDS view entity, which uses the SQL function UPPER:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_UPPER\_VE
  as select from t100
{
  key sprsl,
  key arbgb,
  key msgnr,
      text,
      upper(text) as upper\_text
}

Another SELECT statement uses the SQL function UPPER directly to access the same data source T100.

Since SQL functions cannot yet be used on the left side of LIKE in the DDL of ABAP CDS, the view returns a helper field, which is evaluated in ABAP SQL. The results are the same. The search effected by the examples is not case-sensitive.