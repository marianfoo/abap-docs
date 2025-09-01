  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [UNION](javascript:call_link\('abapunion.htm'\)) →  [UNION Examples](javascript:call_link\('abenunion_abexas.htm'\)) → 

SELECT, Union of CDS View with Input Parameters

This example demonstrates a union of a CDS view with input parameters.

Source Code

REPORT demo\_cds\_parameters\_unit.
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
    SELECT carrid, connid, cityfrom, cityto, distance, distid
           FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance,
                                     p\_distance\_u = @to\_distance,
                                     p\_unit       = 'MI' )
    UNION
    SELECT carrid, connid, cityfrom, cityto, distance, distid
           FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance,
                                     p\_distance\_u = @to\_distance,
                                     p\_unit       = 'KM' )
    ORDER BY distid, carrid, connid
    INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example uses two SELECT statements joined using [UNION](javascript:call_link\('abapunion.htm'\)) to access the following [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

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

This fills the input parameter p\_unit with different values.