---
title: "AMDP - Calling an SQLScript Procedure from AMDP"
description: |
  This example demonstrates how a database procedure is called from an AMDP procedure. Source Code REPORT demo_amdp_call_db_procedure. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA incprice TYPE sflight-price. IF NOT cl_abap_dbf
version: "7.55"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_call_abexa.htm"
abapFile: "abenamdp_call_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abenamdp", "call", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_abexas.htm) → 

AMDP - Calling an SQLScript Procedure from AMDP

This example demonstrates how a database procedure is called from an AMDP procedure.

Source Code

REPORT demo\_amdp\_call\_db\_procedure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA incprice TYPE sflight-price.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      cl\_demo\_output=>display(
        \`Current database system does not support AMDP procedures\` ).
      RETURN.
    ENDIF.
    cl\_demo\_input=>request( CHANGING field = incprice ).
    IF incprice IS INITIAL.
      RETURN.
    ENDIF.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @DATA(price\_before)
           UP TO 1 ROWS.
    ENDSELECT.
    TRY.
        cl\_demo\_amdp\_call=>increase\_price( incprice ).
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @DATA(price\_after)
           UP TO 1 ROWS.
    ENDSELECT.
    IF price\_after - price\_before = incprice.
      cl\_demo\_output=>display( \`Price increased succesfully\` ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [SQLScript procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") of the AMDP method INCREASE\_PRICE in the AMDP class CL\_DEMO\_AMDP\_CALL calls a database procedure (not managed by AMDP) of the current database schema in the namespace /1BCAMDP/:

METHOD increase\_price BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT.
  call "/1BCAMDP/ABAP\_DOCU\_DEMO\_INCPRICE"( INC => :INCPRICE );
ENDMETHOD.

The called database procedure is created dynamically in the static constructor of the AMDP class CL\_DEMO\_AMDP\_CALL using [ADBC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc.htm). It is in the same database schema, but due to the namespace /1BCAMDP/ it cannot and must not be used after the addition [USING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethod_by_db_proc.htm) of the METHOD statement. Compare this [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_call_amdp_abexa.htm) when calling a further AMDP procedure.