  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Parameter Passing sql\_para](javascript:call_link\('abenabap_sql_parameters.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%2C%20Parameter%20Passing%20to%20a%20CDS%20View%20Entity%2C%20ABENSELECT_CDS_PARA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n%20for%20improvement:)

ABAP SQL, Parameter Passing to a CDS View Entity

This example demonstrates a read performed on a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") using parameter passing.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_param\_view\_entity DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_param\_view\_entity IMPLEMENTATION.
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
           INTO TABLE @FINAL(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

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