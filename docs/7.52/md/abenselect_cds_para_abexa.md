  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - Parameter Passing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_parameters.htm) → 

Open SQL, parameter passing to CDS view

This example demonstrates a read performed on a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") with pass by parameter.

Source Code

REPORT demo\_cds\_parameters.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      from\_distance TYPE s\_distance VALUE 2000,
      to\_distance   TYPE s\_distance VALUE 6000,
      unit          TYPE s\_distid   VALUE 'MI'.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = from\_distance
      )->add\_field( CHANGING field = to\_distance
      )->add\_field( CHANGING field = unit
      )->request( ).
    SELECT \*
           FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance,
                                     p\_distance\_u = @to\_distance,
                                     p\_unit       = @unit )
           ORDER BY carrid, connid
           INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) is used to access a CDS view with parameters as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm). Actual parameters are assigned to the input parameters of the view. The values of these actual parameters can be defined by input.

The view in question, demo\_cds\_parameters, has the following CDS source code with a [list of input parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm):

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PARA'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.allowExtensions
@EndUserText.label: 'Demo für Parameter-View'
define view demo\_cds\_parameters
  with parameters
    p\_distance\_l :s\_distance,
    p\_distance\_u :s\_distance,
    p\_unit       :s\_distid
  as select from
    spfli
    {
      key carrid,
      key connid,
          cityfrom,
          cityto,
          distance,
          distid
    }
    where
          distid   =       :p\_unit
      and distance between :p\_distance\_l and :p\_distance\_u;          

This means that those rows are read from the database table SPFLI whose distance in the passed unit is located between the two passed values.