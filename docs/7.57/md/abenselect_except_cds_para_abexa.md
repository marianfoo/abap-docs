  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [UNION, INTERSECT, EXCEPT](javascript:call_link\('abapunion.htm'\)) →  [EXCEPT, Examples](javascript:call_link\('abenexcept_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, Difference of CDS View Entity with Input Parameters, ABENSELECT_EXCEPT_CDS_PA
RA_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, Difference of CDS View Entity with Input Parameters

This example demonstrates a difference of a CDS view with input parameters.

Source Code   

REPORT DEMO\_CDS\_PARAMETERS\_EXCEPT.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      from\_distance TYPE s\_distance VALUE 0000,
      to\_distance   TYPE s\_distance VALUE 1000.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = from\_distance
      )->add\_field( CHANGING field = to\_distance
      )->request( ).
    WITH
      +union AS (
        SELECT carrid, connid, cityfrom, cityto, distance, distid
               FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance,
                                         p\_distance\_u = @to\_distance,
                                         p\_unit       = 'MI' )
        UNION
        SELECT carrid, connid, cityfrom, cityto, distance, distid
               FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance,
                                         p\_distance\_u = @to\_distance,
                                         p\_unit       = 'KM' ) )
    SELECT carrid, connid, cityfrom, cityto, distance, distid
           FROM +union
    EXCEPT
    SELECT carrid, connid, cityfrom, cityto, distance, distid
           FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance,
                                     p\_distance\_u = @to\_distance,
                                     p\_unit       = 'KM' )
    ORDER BY distid, carrid, connid
    INTO TABLE @FINAL(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example uses a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") and two SELECT statements joined using [EXCEPT](javascript:call_link\('abapunion.htm'\)) to access the following CDS view entity.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.allowExtensions
@EndUserText.label: 'Demo für Parameter-View'
define view entity demo\_cds\_parameters
  with parameters
    p\_distance\_l :s\_distance,
    p\_distance\_u :s\_distance,
    p\_unit       :s\_distid
  as select from spfli
{
  key carrid,
  key connid,
      cityfrom,
      cityto,
      distance,
      distid
}
where
      distid   = $parameters.p\_unit
  and distance between $parameters.p\_distance\_l and $parameters.p\_distance\_u;

This fills the input parameter p\_unit with different values.