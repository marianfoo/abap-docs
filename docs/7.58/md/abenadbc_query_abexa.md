---
title: "ADBC - Query"
description: |
  This example demonstrates the execution of a query(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_query.htm) with ADBC. Source Code  Public class definition CLASS cl_demo_adbc_query DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC . PUBLIC SECTION. METHO
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_query_abexa.htm"
abapFile: "abenadbc_query_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abenadbc", "query", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc.htm) →  [ADBC - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20Query%2C%20ABENADBC_QUERY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - Query

This example demonstrates the execution of a [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_query.htm) with ADBC.

Source Code   

\* Public class definition
CLASS cl\_demo\_adbc\_query DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA:
      BEGIN OF result\_line,
        carrid TYPE sflight-carrid,
        connid TYPE sflight-connid,
        fldate TYPE sflight-fldate,
      END OF result\_line .
    DATA:
      result\_tab LIKE TABLE OF result\_line .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_adbc\_query IMPLEMENTATION.
  METHOD main.
    DATA(carrid) = CONV sflight-carrid( 'LH' ).
    DATA cols TYPE adbc\_column\_tab.
    cols = VALUE #( ( CONV adbc\_name( 'CARRID' ) )
                    ( CONV adbc\_name( 'CONNID' ) )
                    ( CONV adbc\_name( 'FLDATE' ) ) ).
    cl\_demo\_input=>new( )->request( CHANGING field = carrid ).
    TRY.
        FINAL(result) = NEW cl\_sql\_statement( )->execute\_query(
         \`SELECT CARRID, CONNID, FLDATE \` &&
         \`FROM SFLIGHT \` &&
         \`WHERE MANDT  = \` && \`'\` && sy-mandt && \`' AND\` &&
         \`      CARRID = \` &&  cl\_abap\_dyn\_prg=>quote(
                                 to\_upper( carrid ) ) ).
        result->set\_param\_table( itab\_ref = REF #( result\_tab )
                                 corresponding\_fields = cols ).
        IF result->next\_package( ) > 0.
          SORT result\_tab BY carrid connid fldate.
          out->write( result\_tab ).
        ENDIF.
      CATCH cx\_sql\_exception INTO FINAL(err).
        out->write(  err->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The method EXECUTE\_QUERY from the class CL\_SQL\_STATEMENT is used to read three columns of the database table SFLIGHT for the current client. An appropriate internal table is bound to the result set using the method SET\_PARAM\_TABLE of the class CL\_SQL\_RESULT\_SET. Using the method NEXT\_PACKAGE, all the rows of the result set are transported to the internal table.

Quotation marks are escaped in the user input to prevent [SQL injections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_injection_glosry.htm "Glossary Entry").