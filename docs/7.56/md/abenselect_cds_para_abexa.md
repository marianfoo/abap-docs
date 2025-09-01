  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL parameter passing sql\_para](javascript:call_link\('abenabap_sql_parameters.htm'\)) → 

ABAP SQL, Parameter Passing to a CDS View Entity

This example demonstrates a read performed on a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") using parameter passing.

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

[SELECT](javascript:call_link\('abapselect.htm'\)) is used to access a CDS view entity with parameters as a [data source](javascript:call_link\('abapselect_data_source.htm'\)). Actual parameters are assigned to the input parameters of the view. The values of these actual parameters are defined via user input.

The view demo\_cds\_param\_view\_entity used has the following CDS source code with a [list of input parameters](javascript:call_link\('abencds_parameter_list_v2.htm'\)):

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