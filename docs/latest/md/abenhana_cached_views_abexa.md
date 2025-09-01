---
title: "SAP HANA, Cached Views"
description: |
  This example demonstrates ABAP SQL access to a cached view(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_cached_views.htm) on the SAP HANA database. Source Code  Public class definition CLASS cl_demo_select_cached_view DEFINITION INHERITING FROM cl_demo_classrun
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_cached_views_abexa.htm"
abapFile: "abenhana_cached_views_abexa.htm"
keywords: ["select", "delete", "do", "if", "try", "catch", "method", "class", "data", "abenhana", "cached", "views", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_hana.htm) →  [ABAP and SAP HANA, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_and_hana_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SAP%20HANA%2C%20Cached%20Views%2C%20ABENHANA_CACHED_VIEWS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SAP HANA, Cached Views

This example demonstrates ABAP SQL access to a [cached view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_cached_views.htm) on the SAP HANA database.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_cached\_view DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_cached\_view IMPLEMENTATION.
  METHOD main.
    IF cl\_db\_sys=>is\_in\_memory\_db = abap\_false.
      out->write(
        \`Example can be executed on SAP HANA Database only\` ).
      RETURN.
    ENDIF.
    DATA reset TYPE abap\_bool.
    DATA minutes TYPE i VALUE 30.
    cl\_demo\_input=>new(
     )->add\_field( EXPORTING
                     text = 'Reset cache'
                     as\_checkbox = abap\_true
                   CHANGING
                     field = reset
     )->request(   EXPORTING
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
        CATCH cx\_sql\_exception INTO FINAL(exc).
          out->write( exc->get\_text( ) ).
          RETURN.
      ENDTRY.
    ENDIF.
    FINAL(extended\_result) =
      NEW cl\_osql\_extended\_result( iv\_cached\_view = abap\_true ).
    SELECT carrid,
           MAX( fldate )   AS max\_fldate ,
           MIN( price )    AS min\_price,
           SUM( seatsocc ) AS sum\_seatsocc
           FROM demo\_cds\_cached\_view
           GROUP BY carrid
           %\_HINTS HDB 'RESULT\_CACHE'                     "#EC CI\_HINTS
           INTO TABLE @FINAL(result)
           EXTENDED RESULT @extended\_result.
    out->write( result
      )->write\_html( \`<b>Extended Result</b>\` ).
    IF extended\_result->cview\_valid( ).
      out->write(
       | CVIEW\_MAX\_AGE: {
          extended\_result->cview\_max\_age( ) } seconds\\n| &&
       | CVIEW\_LAST\_REFRESH\_TSTMPL: {
          extended\_result->cview\_last\_refresh\_tstmpl( )
            TIMESTAMP = ISO }\\n| ).
    ELSE.
      out->write( \`Invalid result\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The instance DEMOCDSCACH of the [CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") DEMO\_CDS\_CACHED\_VIEW on the [SAP HANA database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry") is designated for caching using [ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_glosry.htm "Glossary Entry") and the SQL statement ALTER TABLE. The maximum cache lifetime cannot be specified. It is also possible to delete an existing cache.

When the CDS view is accessed using the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm), the [database hint](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_hint_glosry.htm "Glossary Entry") [%\_HINTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_db_hints.htm) HDB 'RESULT\_CACHE' is used to specify that the cache is accessed.

The addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_extended_result.htm) of the [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) clause can be used to determine whether a cache is available, and the cache properties are read.