  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [AMDP - ABAP Managed Database Procedures](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

AMDP, Calling an AMDP Procedure from SQLScript

This example demonstrates how am AMDP procedure is called from an AMDP procedure.

Source Code

REPORT demo\_amdp\_call\_amdp\_procedure.
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
        cl\_demo\_amdp\_call\_amdp=>increase\_price( clnt     = sy-mandt
                                                incprice = incprice ).
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

The [SQLScript procedure](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry") of the AMDP method INCREASE\_PRICE of the AMDP class CL\_DEMO\_AMDP\_CALL\_AMDP calls a different AMDP procedure that is implemented in the private AMDP method INCREASE\_PRICE\_AMDP of the same class:

Method was not found

The called database procedure must be specified after the addition [USING](javascript:call_link\('abapmethod_by_db_proc.htm'\)) of the statement METHOD. Compare the [executable example](javascript:call_link\('abenamdp_call_abexa.htm'\)) for calling a further database procedure not managed using AMDP.