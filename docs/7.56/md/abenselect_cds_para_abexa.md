---
title: "ABAP SQL, Parameter Passing to a CDS View Entity"
description: |
  This example demonstrates a read performed on a CDS view entity(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm 'Glossary Entry') using parameter passing. Source Code REPORT demo_cds_param_view_entity. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS m
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_cds_para_abexa.htm"
abapFile: "abenselect_cds_para_abexa.htm"
keywords: ["select", "do", "try", "method", "class", "data", "abenselect", "cds", "para", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL parameter passing sql\_para](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_parameters.htm) → 

ABAP SQL, Parameter Passing to a CDS View Entity

This example demonstrates a read performed on a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") using parameter passing.

Source Code

REPORT demo\_cds\_param\_view\_entity.
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
           FROM demo\_cds\_param\_view\_entity(
             p\_distance\_l = @from\_distance,
             p\_distance\_u = @to\_distance,
             p\_unit       = @unit )
           ORDER BY carrid, connid
           INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) is used to access a CDS view entity with parameters as a [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm). Actual parameters are assigned to the input parameters of the view. The values of these actual parameters are defined via user input.

The view demo\_cds\_param\_view\_entity used has the following CDS source code with a [list of input parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_list_v2.htm):

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'View Entity with Input Parameters'
define view entity Demo\_Cds\_Param\_View\_Entity  
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
          distid   =       $parameters.p\_unit
      and distance between $parameters.p\_distance\_l  
                       and $parameters.p\_distance\_u;      

Those rows are read from the DDIC database table SPFLI for which the distance in the transferred unit lies between the two passed values.