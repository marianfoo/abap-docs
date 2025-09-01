---
title: "AMDP, SQL Script with Tabular CHANGING Parameter"
description: |
  This example demonstrates how an SQLScript procedure is implemented using AMDP with a tabular CHANGING parameter. Source Code REPORT demo_amdp_changing. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. IF NOT cl_abap_dbfeatures=>use_fe
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_changing_abexa.htm"
abapFile: "abenamdp_changing_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "abenamdp", "changing", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_abexas.htm) → 

AMDP, SQL Script with Tabular CHANGING Parameter

This example demonstrates how an SQLScript procedure is implemented using AMDP with a tabular CHANGING parameter.

Source Code

REPORT demo\_amdp\_changing.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      cl\_demo\_output=>display(
        \`Current database system does not support AMDP procedures\` ).
      RETURN.
    ENDIF.
    DATA lower TYPE scarr-carrid VALUE 'AA'.
    DATA upper TYPE scarr-carrid VALUE 'BA'.
    DATA call\_flag TYPE abap\_bool.
    cl\_demo\_input=>new(
       )->add\_field( CHANGING field = lower
       )->add\_field( CHANGING field = upper
       )->add\_line(
       )->add\_field( EXPORTING text = 'Indirect call'
                               as\_checkbox = abap\_true
                     CHANGING  field = call\_flag
       )->request( ).
    DATA carriers TYPE cl\_demo\_amdp\_changing=>t\_carriers.
    SELECT mandt, carrid
           FROM scarr
           WHERE carrid BETWEEN @lower AND @upper
           ORDER BY mandt, carrid
           INTO CORRESPONDING FIELDS OF TABLE @carriers.
    DATA(out) = cl\_demo\_output=>new( )->write( carriers ).
    TRY.
        IF call\_flag IS INITIAL.
          NEW cl\_demo\_amdp\_changing(
            )->get\_carriers( CHANGING carriers = carriers ).
        ELSE.
          NEW cl\_demo\_amdp\_changing(
            )->call\_get\_carriers( CHANGING carriers = carriers ).
        ENDIF.
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    out->display( carriers ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The following [SQLScript procedure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_script_procedure_glosry.htm "Glossary Entry") is implemented in the AMDP method GET\_CARRIERS of the AMDP class CL\_DEMO\_AMDP\_CHANGING:

METHOD get\_carriers BY DATABASE PROCEDURE FOR HDB
                       LANGUAGE SQLSCRIPT
                    USING scarr.
  carriers  = select s.\*
                   from scarr as s
                   inner join :carriers as c
                     on s.mandt  = c.mandt and
                        s.carrid = c.carrid;
ENDMETHOD.

The tabular CHANGING parameter carriers can be used in this way in the procedure in reading positions and writing positions. Internally, the database procedure uses an identically named output parameter to which the initial value of the CHANGING parameter is assigned (using the invisible IN parameter carrriers\_\_in\_\_) when the procedure is first executed (see [SQL Script for the SAP HANA Database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_hdb_sqlscript.htm)).

A further method, CALL\_GET\_CARRIERS, demonstrates how the SQL Script procedure implemented in GET\_CARRIERS is called from a different SQL Script procedure.

METHOD call\_get\_carriers BY DATABASE PROCEDURE FOR HDB
                            LANGUAGE SQLSCRIPT
                         USING cl\_demo\_amdp\_changing=>get\_carriers.
  call "CL\_DEMO\_AMDP\_CHANGING=>GET\_CARRIERS"(
    CARRIERS\_\_IN\_\_  => :CARRIERS,
    CARRIERS        => :CARRIERS );
ENDMETHOD.

In this case, the implicit IN parameter carrriers\_\_in\_\_ must be filled explicit with the modified actual parameter.

Note

This is a syntax example. The same function can be provided with the same efficiency in ABAP SQL. AMDP is not needed in simple cases like this.