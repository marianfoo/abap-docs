---
title: "AMDP, Filling a Mesh with SQLScript"
description: |
  This example demonstrates how a mesh is filled with a database procedure. Source Code REPORT demo_amdp_mesh. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. TYPES: BEGIN OF output_line, position TYPE string, product  TYPE string, END OF output_line, output TYPE STANDA
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_amdp_abexa.htm"
abapFile: "abenmesh_amdp_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "abenmesh", "amdp", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_abexas.htm) → 

AMDP, Filling a Mesh with SQLScript

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
           UP TO @rows ROWS. "#EC CI\_NOWHERE
    DATA(out) = cl\_demo\_output=>new( ).
    TRY.
        DATA(order) = NEW cl\_demo\_amdp\_mesh( )->select( order\_ids ).
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        out->display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
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
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The AMDP class CL\_DEMO\_AMDP\_MESH has a private AMDP method SELECT\_HDB called by the public method SELECT if the current [standard database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_glosry.htm "Glossary Entry") is the SAP HANA database. For all other databases, the private method SELECT\_OPEN\_SQL is called. Both methods return the same results, verified by a [unit test](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunit_test_glosry.htm "Glossary Entry") in the class.

The methods fill the nodes of a [mesh](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_meshes.htm) for sales orders whose type is declared in the AMDP class. The number of sales orders is restricted using a ranges table. In the method SELECT\_OPEN\_SQL, the Open SQL addition FOR ALL ENTRIES is used, but in SELECT\_OPEN\_SQL the intermediate results can be evaluated in subqueries.

SQLScript implementation of the AMDP method

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

ABAP implementation of the regular method

METHOD select\_open\_sql.
  SELECT \*
         FROM snwd\_so
         INTO TABLE @orders
         WHERE so\_id IN @order\_ids.
  SELECT \*
         FROM snwd\_so\_i
         FOR ALL ENTRIES IN @orders
         WHERE parent\_key = @orders-node\_key
         INTO TABLE @items.
  SELECT \*
        FROM snwd\_pd
        FOR ALL ENTRIES IN @items
        WHERE node\_key = @items-product\_guid
        INTO TABLE @products.
  SELECT \*
        FROM snwd\_bpa
        INTO TABLE bupas
        FOR ALL ENTRIES IN orders
        WHERE node\_key = orders-buyer\_guid
        ##SELECT\_FAE\_WITH\_LOB\[WEB\_ADDRESS\].
  SELECT \*
         FROM snwd\_ad
         FOR ALL ENTRIES IN @bupas
         WHERE node\_key = @bupas-address\_guid
         INTO TABLE @adresses.
ENDMETHOD.

Note

This is a syntax example. The same function can be provided with the same efficiency in Open SQL. AMDP is not needed in simple cases like this.