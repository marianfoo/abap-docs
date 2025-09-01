---
title: "ADBC, Query"
description: |
  This example demonstrates the execution of a query(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_query.htm) with ADBC. Source Code REPORT demo_adbc_query. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-DATA: BEGIN OF result_line, carrid T
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_query_abexa.htm"
abapFile: "abenadbc_query_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abenadbc", "query", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql.htm) →  [ADBC - ABAP Database Connectivity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc.htm) →  [ADBC Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_abexas.htm) → 

ADBC, Query

This example demonstrates the execution of a [query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_query.htm) with ADBC.

Source Code

REPORT demo\_adbc\_query.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: BEGIN OF result\_line,
                  carrid TYPE sflight-carrid,
                  connid TYPE sflight-connid,
                  fldate TYPE sflight-fldate,
                END OF result\_line,
                result\_tab LIKE TABLE OF result\_line.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid.
    DATA cols TYPE adbc\_column\_tab.
    cols = VALUE #( ( CONV adbc\_name( 'CARRID' ) )
                    ( CONV adbc\_name( 'CONNID' ) )
                    ( CONV adbc\_name( 'FLDATE' ) ) ).
    cl\_demo\_input=>request( CHANGING field = carrid ).
    TRY.
        DATA(result) = NEW cl\_sql\_statement( )->execute\_query(
         \`SELECT carrid, connid, fldate \` &&
         \`FROM sflight \` &&
         \`WHERE mandt  = \` && \`'\` && sy-mandt && \`' AND\` &&
         \`      carrid = \` &&  cl\_abap\_dyn\_prg=>quote(
                                 to\_upper( carrid ) ) ).
        result->set\_param\_table( itab\_ref = REF #( result\_tab )
                                 corresponding\_fields = cols ).
        IF result->next\_package( ) > 0.
          SORT result\_tab BY carrid connid fldate.
          cl\_demo\_output=>display( result\_tab ).
        ENDIF.
      CATCH cx\_sql\_exception INTO DATA(err).
        cl\_demo\_output=>display(  err->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The method EXECUTE\_QUERY from the class CL\_SQL\_STATEMENT is used to extract three columns of the database table SFLIGHT for the current client. An appropriate internal table is bound to the results set using the method SET\_PARAM\_TABLE of the class CL\_SQL\_RESULT\_SET. Using the method NEXT\_PACKAGE, all the rows of the results set are transported into the internal table.

Quotation marks are escaped in the user input. This prevents [SQL injections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_injection_glosry.htm "Glossary Entry").