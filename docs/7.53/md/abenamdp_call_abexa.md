  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

AMDP, Calling an SQLScript Procedure from AMDP

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

The [SQLScript procedure](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") of the AMDP method INCREASE\_PRICE in the AMDP class CL\_DEMO\_AMDP\_CALL calls a database procedure (not managed by AMDP) of the current database schema in the namespace /1BCAMDP/:

METHOD increase\_price BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT.
  call "/1BCAMDP/ABAP\_DOCU\_DEMO\_INCPRICE"( INC => :INCPRICE );
ENDMETHOD.

The called database procedure is created dynamically in the static constructor of the AMDP class CL\_DEMO\_AMDP\_CALL using [ADBC](javascript:call_link\('abenadbc.htm'\)). It is in the same database schema, but due to the namespace /1BCAMDP/ it cannot and must not be used after the addition [USING](javascript:call_link\('abapmethod_by_db_proc.htm'\)) of the METHOD statement. Compare this [executable example](javascript:call_link\('abenamdp_call_amdp_abexa.htm'\)) when calling a further AMDP procedure.