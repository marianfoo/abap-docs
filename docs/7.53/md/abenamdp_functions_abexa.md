---
title: "AMDP, AMDP Functions"
description: |
  This example demonstrates AMDP functions and how they are used. Source Code REPORT demo_amdp_functions_inpcl. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. IF NOT cl_abap_dbfeatures=>use_features( EXPORTING requested_features = VA
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_functions_abexa.htm"
abapFile: "abenamdp_functions_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abenamdp", "functions", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_abexas.htm) → 

AMDP, AMDP Functions

This example demonstrates AMDP functions and how they are used.

Source Code

REPORT demo\_amdp\_functions\_inpcl.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method )
                       ( cl\_abap\_dbfeatures=>amdp\_table\_function ) ) ).
      cl\_demo\_output=>display(
        \`System does not support AMDP or CDS table functions\` ).
      RETURN.
    ENDIF.
    DATA carrid TYPE s\_carr\_id VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    carrid = to\_upper( carrid ).
    "AMDP table function selected in database procedure
    TRY.
        NEW cl\_demo\_amdp\_functions\_inpcl(
              )->select\_get\_scarr\_spfli(
          EXPORTING clnt   = sy-mandt
                    carrid = carrid
          IMPORTING scarr\_spfli\_tab = DATA(result1) ).
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    "AMDP table function selected via CDS entity
    SELECT \*
           FROM demo\_cds\_get\_scarr\_spfli\_inpcl( carrid = @carrid )
           INTO TABLE @DATA(result2)
           ##db\_feature\_mode\[amdp\_table\_function\].
    ASSERT result1 = result2.
    cl\_demo\_output=>write( result1 ).
    "AMDP scalar function called from ABAP
    TRY.
        SELECT carrid, connid, cityfrom, cityto, fltime
               FROM spfli
               WHERE carrid = @carrid AND
                     fltime = @( NEW cl\_demo\_amdp\_functions\_inpcl(
                                )->get\_max\_fltime\_spfli(
                                     EXPORTING clnt = sy-mandt
                                               carrid = carrid ) )
               INTO TABLE @DATA(result3).
      CATCH cx\_amdp\_error INTO amdp\_error.
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    "AMDP scalar function called from database procedure
    TRY.
        NEW cl\_demo\_amdp\_functions\_inpcl(
              )->select\_spfli\_by\_max\_fltime(
          EXPORTING clnt   = sy-mandt
                    carrid = carrid
          IMPORTING spfli\_tab = DATA(result4) ).
      CATCH cx\_amdp\_error INTO amdp\_error.
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    ASSERT result3 = result4.
    cl\_demo\_output=>display( result3 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example accesses [AMDP functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_glosry.htm "Glossary Entry") that are declared and implemented in the [AMDP class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_class_glosry.htm "Glossary Entry") CL\_DEMO\_AMDP\_FUNCTIONS\_INPCL.

-   The method GET\_SCARR\_SPFLI is an [AMD function implementation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_methods.htm) for an [AMDP table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") that can only be called in other AMDP methods. It has an explicitly declared interface.

METHOD get\_scarr\_spfli BY DATABASE FUNCTION FOR HDB
                       LANGUAGE SQLSCRIPT
                       OPTIONS READ-ONLY
                       USING scarr spfli.
  RETURN SELECT sc.carrname, sp.connid, sp.cityfrom, sp.cityto
                from scarr as sc
                  inner join spfli as sp on sc.mandt = sp.mandt and
                                            sc.carrid = sp.carrid
                  where sp.mandt = :clnt AND sp.carrid = :carrid
                  ORDER BY sc.mandt, sc.carrname, sp.connid;
endmethod.

This method cannot be called in ABAP.

-   The method SELECT\_GET\_SCARR\_SPFLI is an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_procedure_methods.htm) that uses SELECT to access the AMDP table function implemented in the method GET\_SCARR\_SPFLI.

METHOD select\_get\_scarr\_spfli
       BY DATABASE PROCEDURE FOR HDB
       LANGUAGE SQLSCRIPT
       OPTIONS READ-ONLY
       USING cl\_demo\_amdp\_functions\_inpcl=>get\_scarr\_spfli.
  scarr\_spfli\_tab =
  select \*
         from "CL\_DEMO\_AMDP\_FUNCTIONS\_INPCL=>GET\_SCARR\_SPFLI"(
                clnt => :clnt,
                carrid => :carrid );
ENDMETHOD.

This method is called in the example program.

-   The method GET\_SCARR\_SPFLI\_FOR\_CDS is an [](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry")[AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_methods.htm) function implementation for the [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry") CDS DEMO\_CDS\_GET\_SCARR\_SPFLI\_INPCL shown as an example of the DDL statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_table_function.htm)[](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_table_function.htm):

@ClientHandling.type: #CLIENT\_DEPENDENT
define table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_INPCL
  with parameters
    @Environment.systemField: #CLIENT
    clnt   :abap.clnt,
    carrid :s\_carr\_id
  returns
  {
    client   :s\_mandt;
    carrname :s\_carrname;
    connid   :s\_conn\_id;
    cityfrom :s\_from\_cit;
    cityto   :s\_to\_city;
  }
  implemented by method
    CL\_DEMO\_AMDP\_FUNCTIONS\_INPCL=>GET\_SCARR\_SPFLI\_FOR\_CDS;

This method is declared using the addition [FOR TABLE FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-methods_for_tabfunc.htm) and its interface is determined using the CDS table function.

METHOD get\_scarr\_spfli\_for\_cds
       BY DATABASE FUNCTION FOR HDB
       LANGUAGE SQLSCRIPT
       OPTIONS READ-ONLY
       USING scarr spfli.
  RETURN SELECT sc.mandt as client,
                sc.carrname, sp.connid, sp.cityfrom, sp.cityto
                from scarr as sc
                  inner join spfli as sp on sc.mandt = sp.mandt and
                                            sc.carrid = sp.carrid
                  where sp.mandt = :clnt AND
                        sp.carrid = :carrid
                  ORDER BY sc.mandt, sc.carrname, sp.connid;
endmethod.

The example program uses [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) to access the CDS table function. The input parameter is filled here. Access to both AMDP table functions produces the same result, which is ensured by the [ASSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassert.htm) statement.

-   The method GET\_MAX\_FLTIME\_SPFLI is an [](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry")[AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_methods.htm) function implementation for an [AMDP scalar function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry"). It has an explicitly declared interface and can be called in ABAP.

METHOD get\_max\_fltime\_spfli
       BY DATABASE FUNCTION FOR HDB
       LANGUAGE SQLSCRIPT
       OPTIONS READ-ONLY
               DETERMINISTIC
       USING spfli.
  SELECT MAX(fltime) INTO max\_fltime
               FROM spfli
                 WHERE mandt = :clnt AND
                       carrid = :carrid;
ENDMETHOD.

In the example program, a WHERE condition of a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement contains a [host expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_expression_glosry.htm "Glossary Entry") with a functional method call of this ADMP function implementation.

-   The method SELECT\_SPFLI\_BY\_MAX\_FLTIME is an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_procedure_methods.htm) where the AMDP scalar function that is implemented in the method GET\_MAX\_FLTIME\_SPFLI is called in its SELECT statement in the WHERE condition.

METHOD select\_spfli\_by\_max\_fltime
       BY DATABASE PROCEDURE FOR HDB
       LANGUAGE SQLSCRIPT
       OPTIONS READ-ONLY
       USING spfli
             cl\_demo\_amdp\_functions\_inpcl=>get\_max\_fltime\_spfli.
  spfli\_tab =
  select carrid, connid, cityfrom, cityto, fltime
         from spfli
              where
                mandt = :clnt and
                fltime =
                "CL\_DEMO\_AMDP\_FUNCTIONS\_INPCL=>GET\_MAX\_FLTIME\_SPFLI"(
                  clnt => :clnt,
                  carrid => :carrid );
ENDMETHOD.

This method is called in the example program. The preceding ABAP SQL statement and the method call have the same result, which is ensured by the [ASSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassert.htm) statement.

Note

The CDS table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_INPCL used here has one input parameter for the client, annotated using the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter_annotations.htm) and the predefined value [#CLIENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter_annotations.htm). This input parameter is filled explicitly with the ID of the current client by the ABAP SQL statement SELECT and used in the implementation of the associated AMDP method for selecting the data. The nearly identical program DEMO\_AMDP\_FUNCTIONS uses the following CDS table function DEMO\_CDS\_GET\_SCARR\_SPFLI in which the current client is selected from the results set of the table function.

@ClientHandling.type: #CLIENT\_DEPENDENT
@AccessControl.authorizationCheck:#NOT\_ALLOWED
define table function DEMO\_CDS\_GET\_SCARR\_SPFLI
  with parameters
    carrid :s\_carr\_id
  returns
  {
    client   :s\_mandt;
    carrname :s\_carrname;
    connid   :s\_conn\_id;
    cityfrom :s\_from\_cit;
    cityto   :s\_to\_city;
  }
  implemented by method
    CL\_DEMO\_AMDP\_FUNCTIONS=>GET\_SCARR\_SPFLI\_FOR\_CDS;