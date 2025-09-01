---
title: "SAP HANA, Cached Views"
description: |
  This example demonstrates ABAP SQL access to a cached view(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_cached_views.htm) on the SAP HANA database. Source Code REPORT demo_select_cached_view. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_cached_views_abexa.htm"
abapFile: "abenhana_cached_views_abexa.htm"
keywords: ["select", "delete", "do", "if", "try", "catch", "method", "class", "data", "abenhana", "cached", "views", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_hana.htm) →  [ABAP and SAP HANA, Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_and_hana_abexas.htm) → 

SAP HANA, Cached Views

This example demonstrates ABAP SQL access to a [cached view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_cached_views.htm) on the SAP HANA database.

Source Code

REPORT demo\_select\_cached\_view.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    IF cl\_db\_sys=>is\_in\_memory\_db = abap\_false.
      out->display(
        \`Example can be executed on SAP HANA Database only\` ).
      RETURN.
    ENDIF.
    DATA reset TYPE abap\_bool.
    cl\_demo\_input=>add\_field( EXPORTING
                                text = 'Reset cache'
                                as\_checkbox = abap\_true
                              CHANGING
                                field = reset ).
    DATA minutes TYPE i VALUE 30.
    cl\_demo\_input=>request( EXPORTING
                              text = 'Maximal age in minutes'
                            CHANGING
                              field = minutes ).
    minutes = COND i( WHEN minutes < 1 OR minutes > 60 THEN 30
                      ELSE minutes ).
    IF reset = abap\_true.
      TRY.
          NEW cl\_sql\_statement( )->execute\_ddl(
            \`alter view DEMOCDSCACH drop cache;\` ).
        CATCH cx\_sql\_exception.
      ENDTRY.
      TRY.
          NEW cl\_sql\_statement( )->execute\_ddl(
            |alter view DEMOCDSCACH add cache retention {
               minutes } of | &&
            |MANDT, CARRID, MAX(FLDATE), MIN(PRICE), SUM(SEATSOCC);| ).
        CATCH cx\_sql\_exception INTO DATA(exc).
          out->display( exc->get\_text( ) ).
          RETURN.
      ENDTRY.
    ENDIF.
    DATA(extended\_result) =
      NEW cl\_osql\_extended\_result( iv\_cached\_view = abap\_true ).
    SELECT carrid,
           MAX( fldate )   AS max\_fldate ,
           MIN( price )    AS min\_price,
           SUM( seatsocc ) AS sum\_seatsocc
           FROM demo\_cds\_cached\_view
           GROUP BY carrid
           %\_HINTS HDB 'RESULT\_CACHE'
           INTO TABLE @DATA(result)
           EXTENDED RESULT @extended\_result.
    out->write( result
      )->write\_html( \`<b>Extended Result</b>\` ).
    IF extended\_result->cview\_valid( ).
      out->display(
       | CVIEW\_MAX\_AGE: {
          extended\_result->cview\_max\_age( ) } seconds\\n| &&
       | CVIEW\_LAST\_REFRESH\_TSTMPL: {
          extended\_result->cview\_last\_refresh\_tstmpl( )
            TIMESTAMP = ISO }\\n| ).
    ELSE.
      out->display( \`Invalid result\` ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The instance DEMOCDSCACH of the [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") DEMO\_CDS\_CACHED\_VIEW on the [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry") is designed for caching using [ADBC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_glosry.htm "Glossary Entry") and the SQL statement ALTER TABLE. The maximum cache lifetime cannot be specified. It is also possible to delete an existing cache.

When the CDS view is accessed using the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm), the [database hint](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_hint_glosry.htm "Glossary Entry") [%\_HINTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_db_hints.htm) HDB 'RESULT\_CACHE' can be used to specify that the cache is accessed.

The addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_extended_result.htm) of the [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) clause can be used to determine whether a cache is available and the cache properties are read.