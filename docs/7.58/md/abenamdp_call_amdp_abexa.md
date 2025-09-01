  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Calling%20an%20AMDP%20Procedure%20from%20SQLScript%2C%20ABENAMDP_CALL_AMDP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

AMDP - Calling an AMDP Procedure from SQLScript

This example demonstrates how am AMDP procedure is called from an AMDP procedure.

Source Code   

\* Public class definition
CLASS cl\_demo\_amdp\_call\_amdp\_prcdr DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_amdp\_call\_amdp\_prcdr IMPLEMENTATION.
  METHOD main.
    DATA incprice TYPE sflight-price.
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
        cl\_demo\_amdp\_call\_amdp=>increase\_price( clnt     = sy-mandt
                                                incprice = incprice ).
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

The [SQLScript procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") of the AMDP method INCREASE\_PRICE of the AMDP class CL\_DEMO\_AMDP\_CALL\_AMDP calls a different AMDP procedure that is implemented in the private AMDP method INCREASE\_PRICE\_AMDP of the same class:

METHOD increase\_price BY DATABASE PROCEDURE
                      FOR HDB LANGUAGE SQLSCRIPT
                      USING cl\_demo\_amdp\_call\_amdp=>increase\_price\_amdp.
  call "CL\_DEMO\_AMDP\_CALL\_AMDP=>INCREASE\_PRICE\_AMDP"(
    CLNT => :CLNT, INCPRICE => :INCPRICE );
ENDMETHOD.

METHOD increase\_price\_amdp BY DATABASE PROCEDURE
                           FOR HDB LANGUAGE SQLSCRIPT
                           USING sflight.
  update sflight set price = price + incprice
               where mandt = clnt;
ENDMETHOD.

The called database procedure must be specified after the addition [USING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod_by_db_proc.htm) of the statement METHOD. Compare the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_call_abexa.htm) for calling a further database procedure not managed using AMDP.