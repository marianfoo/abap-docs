  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_abexas.htm) → 

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
    "Database function selected in database procedure
    TRY.
        NEW cl\_demo\_amdp\_functions\_inpcl( )->select\_get\_scarr\_spfli(
          EXPORTING clnt   = sy-mandt
                    carrid = carrid
          IMPORTING scarr\_spfli\_tab = DATA(result1) ).
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        cl\_demo\_output=>display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    "Database function selected via CDS entity
    SELECT \*
           FROM demo\_cds\_get\_scarr\_spfli\_inpcl( carrid = @carrid )
           INTO TABLE @DATA(result2)
           ##db\_feature\_mode\[amdp\_table\_function\].
    ASSERT result1 = result2.
    cl\_demo\_output=>display( result1 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example access [AMDP functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_function_glosry.htm "Glossary Entry") that are declared and implemented in the [AMDP class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_class_glosry.htm "Glossary Entry") CL\_DEMO\_AMDP\_FUNCTIONS\_INPCL.

-   The method GET\_SCARR\_SPFLI is an [AMDP function implementation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_function_methods.htm) for other AMDP methods with explicitly declared interfaces. It cannot be called in ABAP.

METHOD get\_scarr\_spfli BY DATABASE FUNCTION FOR HDB
                       LANGUAGE SQLSCRIPT
                       OPTIONS READ-ONLY
                       USING scarr spfli.
  RETURN SELECT sc.carrname, sp.connid, sp.cityfrom, sp.cityto
                FROM scarr AS sc
                  INNER JOIN spfli AS sp ON sc.mandt = sp.mandt AND
                                            sc.carrid = sp.carrid
                  WHERE sp.mandt = :clnt AND sp.carrid = :carrid
                  ORDER BY sc.mandt, sc.carrname, sp.connid;
ENDMETHOD.

-   The method SELECT\_GET\_SCARR\_SPFLI is an [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_procedure_methods.htm) that uses SELECT to access the AMDP function implemented in the method GET\_SCARR\_SPFLI. This method is called in the example program.

METHOD select\_get\_scarr\_spfli
       BY DATABASE PROCEDURE FOR HDB
       LANGUAGE SQLSCRIPT
       OPTIONS READ-ONLY
       USING cl\_demo\_amdp\_functions\_inpcl=>get\_scarr\_spfli.
  SCARR\_SPFLI\_TAB =
  SELECT \*
         FROM "CL\_DEMO\_AMDP\_FUNCTIONS\_INPCL=>GET\_SCARR\_SPFLI"(
                clnt => :clnt,
                carrid => :carrid );
ENDMETHOD.

-   The method GET\_SCARR\_SPFLI\_FOR\_CDS is an [AMDP function implementation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_function_methods.htm) for the [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") DEMO\_CDS\_GET\_SCARR\_SPFLI\_INPCL shown as an example of the DDL statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_table_function.htm).

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

This method is declared using the addition [FOR TABLE FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_for_tabfunc.htm) and its interface is determined using theCDS table function. The example program uses [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) to access the CDS table function. The input parameter is filled here.

METHOD get\_scarr\_spfli\_for\_cds
       BY DATABASE FUNCTION FOR HDB
       LANGUAGE SQLSCRIPT
       OPTIONS READ-ONLY
       USING scarr spfli.
  RETURN SELECT sc.mandt as client,
                sc.carrname, sp.connid, sp.cityfrom, sp.cityto
                FROM scarr AS sc
                  INNER JOIN spfli AS sp ON sc.mandt = sp.mandt AND
                                            sc.carrid = sp.carrid
                  WHERE sp.mandt = :clnt AND
                        sp.carrid = :carrid
                  ORDER BY sc.mandt, sc.carrname, sp.connid;
ENDMETHOD.

Both accesses produce the same result (verified by the statement [ASSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassert.htm)).

Note

The CDS table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_INPCL used here has one input parameter for the client, annotated using the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) and the predefined value [#CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm). This input parameter is filled explicitly with the ID of the current client by the Open SQL statement SELECT and used in the implementation of the associated AMDP method for selecting the data. The nearly identical program DEMO\_AMDP\_FUNCTIONS uses the following CDS table function DEMO\_CDS\_GET\_SCARR\_SPFLI in which the current client is selected from the results set of the table function.

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