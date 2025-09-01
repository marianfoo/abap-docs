  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Examples](javascript:call_link\('abenamdp_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AMDP - Filling a Mesh with SQLScript, ABENMESH_AMDP_ABEXA, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

AMDP - Filling a Mesh with SQLScript

This example demonstrates how a mesh is filled with a database procedure.

Source Code   

REPORT demo\_amdp\_mesh.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF output\_line,
        position TYPE string,
        product  TYPE string,
      END OF output\_line,
      output TYPE STANDARD TABLE OF output\_line WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA order\_ids TYPE RANGE OF snwd\_so-so\_id.
    DATA(rows) = 1.
    cl\_demo\_input=>request( EXPORTING text = \`Orders\`
                            CHANGING field = rows ).
    SELECT 'I' AS sign, 'EQ' AS option, so\_id AS low
           FROM snwd\_so
           ORDER BY low
           INTO CORRESPONDING FIELDS OF TABLE @order\_ids
           UP TO @rows ROWS.                            "#EC CI\_NOWHERE
    FINAL(out) = cl\_demo\_output=>new( ).
    TRY.
        FINAL(order) = NEW cl\_demo\_amdp\_mesh( )->select( order\_ids ).
      CATCH cx\_amdp\_error INTO FINAL(amdp\_error).
        out->display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    TRY.
        LOOP AT order-orders ASSIGNING FIELD-SYMBOL(<order>).
          out->begin\_section( |Order #{ <order>-so\_id }| ).
          ASSIGN order-orders\\\_buyers\[ <order> \]
            TO FIELD-SYMBOL(<buyer>).
          out->begin\_section(
            |Buyer: { <buyer>-company\_name } | &&
            |in { order-bupas\\\_addresses\[ <buyer> \]-city } | ).
          out->write(
            name  = 'Sales Order Items'
            data = VALUE output(
              FOR <item> IN order-orders\\\_items\[ <order> \]
              ( position = <item>-so\_item\_pos
                product = order-items\\\_products\[ <item> \]-product\_id
              ) ) ).
          out->end\_section( )->end\_section( ).
        ENDLOOP.
      CATCH cx\_sy\_itab\_line\_not\_found.
        out->write( 'Inconsistent data?' ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The AMDP class CL\_DEMO\_AMDP\_MESH has a private AMDP method SELECT\_HDB called by the public method SELECT if the current [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") is the SAP HANA database. For all other databases, the private method SELECT\_ABAP\_SQL is called. Both methods return the same results, which is ensured by a [unit test](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry") in the class.

The methods fill the nodes of a [mesh](javascript:call_link\('abenabap_meshes.htm'\)) for sales orders whose type is declared in the AMDP class. The number of sales orders is restricted using a ranges table. In both methods subqueries are used that access local data. In ABAP SQL, the subqueries [access internal tables](javascript:call_link\('abapselect_itab.htm'\)).

SQLScript Implementation of the AMDP Method   

METHOD select\_hdb  BY DATABASE PROCEDURE
                   FOR HDB LANGUAGE SQLSCRIPT
                   OPTIONS READ-ONLY
                   USING snwd\_so snwd\_so\_i snwd\_pd snwd\_bpa snwd\_ad.
  orders = select \* from snwd\_so
    where client = :clnt and so\_id in (
      select low from :order\_ids );
  bupas = select \* from snwd\_bpa
    where client = :clnt and node\_key in (
      select DISTINCT buyer\_guid from :orders );
  adresses = select \* from snwd\_ad
    where client = :clnt and node\_key in (
      select address\_guid from :bupas );
  items = select \* from snwd\_so\_i
    where parent\_key in ( select node\_key from :orders );
  products = select \* from snwd\_pd as product
    where client = :clnt and node\_key in (
      select distinct product\_guid from :items );
ENDMETHOD.

ABAP Implementation of the Regular Method   

METHOD select\_abap\_sql.
  SELECT \*
         FROM snwd\_so
         WHERE so\_id IN @order\_ids
         INTO TABLE @orders.
  SELECT \*
        FROM snwd\_bpa
        WHERE node\_key IN (
          SELECT DISTINCT buyer\_guid FROM @orders AS orders )
        INTO TABLE @bupas.
  SELECT \*
         FROM snwd\_ad
         WHERE node\_key IN (
           SELECT DISTINCT address\_guid FROM @bupas AS bupas )
        INTO TABLE @adresses.
  SELECT \*
         FROM snwd\_so\_i
         WHERE parent\_key IN (
           SELECT DISTINCT node\_key FROM @orders AS orders )
         INTO TABLE @items.
  SELECT \*
         FROM snwd\_pd
         WHERE node\_key IN (
           SELECT DISTINCT product\_guid FROM @items AS items )
         INTO TABLE @products.
ENDMETHOD.

Hint

This is a syntax example for AMDP. The same function can be achieved with the same efficiency in ABAP SQL. AMDP is not needed in simple cases like this.