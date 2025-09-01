  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [UNION, INTERSECT, EXCEPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) →  [UNION, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunion_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Union%20of%20CDS%20View%20Entity%20with%20Input%20Parameters%2C%20ABENSELECT_UNION_CDS_PARA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion%20for%20improvement:)

SELECT, Union of CDS View Entity with Input Parameters

This example demonstrates a union of a CDS view with input parameters.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_parameters\_unit DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_parameters\_unit IMPLEMENTATION.
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
    INTO TABLE @FINAL(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

This example uses two SELECT statements joined using [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) to access the following CDS view entity.

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