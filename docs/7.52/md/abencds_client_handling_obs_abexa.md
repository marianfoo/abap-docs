  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - Views](javascript:call_link\('abenddic_cds_views.htm'\)) →  [ABAP CDS - Client Handling in CDS Views](javascript:call_link\('abencds_client_handling.htm'\)) → 

CDS Views, Obsolete Client Handling

This example demonstrates how obsolete [cross-client](javascript:call_link\('abencds_view_client_handling_obs.htm'\)) CDS views are handled.

Source Code

REPORT demo\_cds\_client\_handling\_obs.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    out->next\_section( 'Data Types' ).
    out->write(
      name = 'Not client dependent, no client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_2' )
                        )->components ).
    out->write(
      name = 'Not client dependent, no client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN2' )
                        )->components ).
    out->write(
      name = 'Not client dependent, client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_3' )
                        )->components ).
    out->write(
      name = 'Not client dependent, client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN3' )
                        )->components ).
    out->next\_section( 'SELECT Statements' ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_2
           ORDER BY carrid, connid
           INTO TABLE @DATA(result1)
           UP TO 1 ROWS.
    out->write(
      name =  'Not client dependent, no client field, CDS entity'
      data = result1 ).
    SELECT \*
           FROM demo\_cds\_prjctn2
           ORDER BY carrid, connid
           INTO TABLE @DATA(result2)
           UP TO 1 ROWS.
    out->write(
      name =  'Not client dependent, no client field, database view'
      data = result2 ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_3
           WHERE mandt = @sy-mandt
           ORDER BY carrid, connid
           INTO TABLE @DATA(result3)
           UP TO 1 ROWS.
    out->write(
      name = 'Not client dependent, client field, CDS entity'
      data = result3 ).
    SELECT \*
           FROM demo\_cds\_prjctn3 CLIENT SPECIFIED
           WHERE mandt = @sy-mandt
           ORDER BY carrid, connid
           INTO TABLE @DATA(result4)
           UP TO 1 ROWS.
    out->write(
      name = 'Not client dependent, client field, database view,' &
             ' CLIENT SPECIFIED'
      data = result4 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program accesses the following CDS views:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN2'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ClientDependent: false
define view demo\_cds\_spfli\_client\_2
as select from
spfli
{
key spfli.carrid,
key spfli.connid,
spfli.cityfrom,
spfli.cityto
}    

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN3'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ClientDependent: false
define view demo\_cds\_spfli\_client\_3
as select from
spfli
{
key spfli.mandt,
key spfli.carrid,
key spfli.connid,
spfli.cityfrom,
spfli.cityto
}    

They are used to demonstrate the behavior in rare cases where views with the obsolete notation [ClientDependent:false](javascript:call_link\('abencds_view_client_handling_obs.htm'\)) are made into cross-client views even though they contain client-specific data sources:

-   DEMO\_CDS\_SPFLI\_CLIENT\_2 is a cross-client CDS view in which the client column is not specified in the SELECT list.

-   DEMO\_CDS\_SPFLI\_CLIENT\_3 is a cross-client CDS view in which the client column is specified in the SELECT list.

RTTI is used to read the components of the associated data types:

-   The structure of the cross-client CDS entity without client column in the SELECT list does not have a client column.

-   The database view of the cross-client CDS view without client column in the SELECT list does not have a client column.

-   The structure of the cross-client CDS entity with client column in the SELECT list has a client column.

-   The database view of the cross-client CDS view with client column in the SELECT list has a client column, which makes it client-specific.

The statement SELECT is used to make the following accesses:

-   Regular access to a cross-client CDS entity without client column in the SELECT list. The data is read from all clients. No conditions can be specified for the client. The results set does not have a client column.

-   Regular access to a database view of the cross-client CDS entity without client column in the SELECT list. The data is read from all clients. No conditions can be specified for the client. The results set does not have a client column.

-   Regular access to a cross-client CDS entity with client column in the SELECT list. The data of the client specified in the WHERE condition is read. It is not possible to specify the addition CLIENT SPECIFIED here. The results set has a client column.

-   Access to a database view of the cross-client CDS with client column in the SELECT list using CLIENT SPECIFIED. The data of the client specified in the WHERE condition is read. The addition CLIENT SPECIFIED does not need to be specified here. The results set has a client column.

Note

The accesses to the database views of the CDS shown here are for demonstration purposes only. This way of accessing CDS views is obsolete and only the CDS entities should now be accessed.