---
title: "CDS Views, Client Handling"
description: |
  This example demonstrates how client-specific(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) CDS views are handled. Source Code REPORT demo_cds_client_handling. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATIO
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling_abexa.htm"
abapFile: "abencds_client_handling_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abencds", "client", "handling", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_views.htm) →  [ABAP CDS - Client Handling in CDS Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) → 

CDS Views, Client Handling

This example demonstrates how [client-specific](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) CDS views are handled.

Source Code

REPORT demo\_cds\_client\_handling.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    out->next\_section( 'Data Types' ).
    out->write(
      name = 'Client dependent, no client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_0' )
                        )->components ).
    out->write(
      name = 'Client dependent, no client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN0' )
                        )->components ).
    out->write(
      name = 'Client dependent, client field, CDS entity'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_SPFLI\_CLIENT\_1' )
                        )->components ).
    out->write(
      name = 'Client dependent, client field, database view'
      data = CAST cl\_abap\_structdescr(
                    cl\_abap\_typedescr=>describe\_by\_name(
                      'DEMO\_CDS\_PRJCTN1' )
                        )->components ).
    out->next\_section( 'SELECT Statements' ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_0
           ORDER BY carrid, connid
           INTO TABLE @DATA(result1)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, no client field, CDS entity'
      data = result1 ).
    SELECT \*
           FROM demo\_cds\_prjctn0
           ORDER BY carrid, connid
           INTO TABLE @DATA(result2)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, no client field, database view'
      data = result2 ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_0
                CLIENT SPECIFIED demo\_cds\_spfli\_client\_0~myclient
           WHERE myclient = @sy-mandt
           ORDER BY carrid, connid
           INTO TABLE @DATA(result3)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, no client field, CDS entity,' &
             ' CLIENT SPECIFIED'
      data = result3 ).
    SELECT \*
           FROM demo\_cds\_spfli\_client\_1
           ORDER BY carrid, connid
           INTO TABLE @DATA(result4)
           UP TO 1 ROWS.
    out->write(
      name = 'Client dependent, client field, CDS entity'
      data = result4 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program accesses the following CDS views:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN0'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
@ClientHandling.type: #CLIENT\_DEPENDENT
@ClientHandling.algorithm: #AUTOMATED
define view demo\_cds\_spfli\_client\_0
  as select from
    spfli
    {
      key spfli.carrid,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN1'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ClientHandling.type: #CLIENT\_DEPENDENT
@ClientHandling.algorithm: #AUTOMATED
define view demo\_cds\_spfli\_client\_1
  as select from
    spfli
    {
      key spfli.mandt,
      key spfli.carrid,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }    

The view DEMO\_CDS\_SPFLI\_CLIENT\_0 is a regular client-specific CDS view in which the client column is not specified in the SELECT list. The view DEMO\_CDS\_SPFLI\_CLIENT\_1 is used to demonstrate the behavior in rare cases where the client column is specified in the SELECT list of a client-specific CDS view.

RTTI is used to read the components of the associated data types:

-   The structure of the client-specific CDS entity without client column in the SELECT list does not have a client column.

-   The database view of the client-specific CDS view without client column in the SELECT list has a client column.

-   Nevertheless, the structure of the client-specific CDS entity with client column in the SELECT list does not have a client column.

-   The database view of the client-specific CDS view with client column in the SELECT list has a client column.

The statement SELECT is used to make the following accesses:

-   Regular access to a client-specific CDS entity without client column in the SELECT list. The data from the current client is read. The results set does not have a client column.

-   Regular access to a database view of the client-specific CDS entity without client column in the SELECT list. The data from the current client is read. The results set has a client column.

-   Access to a client-specific CDS entity without client column in the SELECT list using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm). The data of the client specified in the WHERE condition is read. A name myclient must be defined for this. The results set has a client column with this name.

-   Regular access to a database view of the client-specific CDS entity with client column in the SELECT list. The data from the current client is read. The results set does not have a client column.

The similar program DEMO\_CDS\_CLIENT\_HANDLING\_SV accesses CDS views in which the annotation @ClientHandling.algorithm: #SESSION\_VARIABLE is used instead of @ClientHandling.algorithm: #AUTOMATED. The results are shown in exactly the same way as here, however access using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) is not possible since the [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) is evaluated implicitly in the views.

Note

The accesses to the database views of the CDS shown here are for demonstration purposes only. This way of accessing CDS views is obsolete and only the CDS entities should now be accessed.