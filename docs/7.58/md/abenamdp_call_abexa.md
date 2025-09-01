---
title: "AMDP - Calling an SQLScript Procedure from AMDP"
description: |
  This example demonstrates how a database procedure is called from an AMDP procedure. Source Code  Public class definition CLASS cl_demo_amdp_call_db_prcdr DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class i
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_call_abexa.htm"
abapFile: "abenamdp_call_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abenamdp", "call", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Calling%20an%20SQLScript%20Procedure%20from%20AMDP%2C%20ABENAMDP_CALL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

AMDP - Calling an SQLScript Procedure from AMDP

This example demonstrates how a database procedure is called from an AMDP procedure.

Source Code   

\* Public class definition
CLASS cl\_demo\_amdp\_call\_db\_prcdr DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_amdp\_call\_db\_prcdr IMPLEMENTATION.
  METHOD main.
    DATA incprice TYPE sflight-price VALUE 1.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      out->write(
        \`Current database system does not support AMDP procedures\` ).
      RETURN.
    ENDIF.
    cl\_demo\_input=>new( )->request( CHANGING field = incprice ).
    IF incprice IS INITIAL.
      RETURN.
    ENDIF.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @FINAL(price\_before)
           UP TO 1 ROWS.
    ENDSELECT.
    TRY.
        cl\_demo\_amdp\_call=>increase\_price( incprice ).
      CATCH cx\_amdp\_error INTO FINAL(amdp\_error).
        out->write( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    SELECT price
           FROM sflight
           ORDER BY carrid, connid, fldate
           INTO @FINAL(price\_after)
           UP TO 1 ROWS.
    ENDSELECT.
    IF price\_after - price\_before = incprice.
      out->write( \`Price increased succesfully\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The [SQLScript procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") of the AMDP method INCREASE\_PRICE in the AMDP class CL\_DEMO\_AMDP\_CALL calls a database procedure that is not managed by AMDP of the current database schema in the namespace /1BCAMDP/:

METHOD increase\_price BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT.
  call "/1BCAMDP/ABAP\_DOCU\_DEMO\_INCPRICE"( INC => :INCPRICE );
ENDMETHOD.

The called database procedure is created dynamically in the static constructor of the AMDP class CL\_DEMO\_AMDP\_CALL using [ADBC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc.htm). It is in the same database schema, but due to the namespace /1BCAMDP/ it cannot and must not be used after the addition [USING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod_by_db_proc.htm) of the METHOD statement. Compare this [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_call_amdp_abexa.htm) when calling a further AMDP procedure.