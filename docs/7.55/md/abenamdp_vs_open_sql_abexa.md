  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp.htm) →  [AMDP - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_abexas.htm) → 

AMDP - Comparison of SQLScript with ABAP SQL

This example demonstrates the performance of SQL in AMDP when compared with ABAP SQL.

Source Code

REPORT demo\_amdp\_vs\_open\_sql.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      cl\_demo\_output=>display(
        \`Current database system does not support AMDP procedures\` ).
      RETURN.
    ENDIF.
    DATA time\_stamps TYPE TABLE OF timestampl.
    SELECT changed\_at
           FROM snwd\_so\_inv\_head UP TO 100 ROWS
           INTO TABLE time\_stamps.                      "#EC CI\_NOWHERE
    IF time\_stamps IS INITIAL.
      out->display( 'You must create database entries' &
                    ' with program RS\_EPM\_DGC\_HANA first ...' ).
      RETURN.
    ENDIF.
    DATA(rnd) =  cl\_abap\_random\_int=>create(
                   seed = CONV i( sy-uzeit )
                   min  = 1
                   max  = lines( time\_stamps ) )->get\_next( ).
    CONVERT TIME STAMP time\_stamps\[ rnd \] TIME ZONE 'UTC'
                       INTO DATE DATA(payment\_date).
    cl\_demo\_input=>request( CHANGING field = payment\_date ).
    DATA(oref) = NEW cl\_demo\_amdp\_vs\_open\_sql( ).
    TRY.
        GET RUN TIME FIELD DATA(t01).
        oref->amdp(
          EXPORTING iv\_payment\_date   = payment\_date
                    iv\_clnt           = sy-mandt
          IMPORTING et\_invoice\_header = DATA(invoice\_header)
                    et\_invoice\_item   = DATA(invoice\_item)
                    et\_customer\_info  = DATA(customer\_info) ) .
        GET RUN TIME FIELD DATA(t02).
      CATCH cx\_amdp\_error INTO DATA(amdp\_error).
        out->display( amdp\_error->get\_text( ) ).
        RETURN.
    ENDTRY.
    GET RUN TIME FIELD DATA(t11).
    oref->open\_sql\_nested\_select(
      EXPORTING iv\_payment\_date   = payment\_date
      IMPORTING et\_invoice\_header = DATA(invoice\_header1)
                et\_invoice\_item   = DATA(invoice\_item1)
                et\_customer\_info  = DATA(customer\_info1) ) .
    GET RUN TIME FIELD DATA(t12).
    GET RUN TIME FIELD DATA(t21).
    oref->open\_sql\_for\_all\_entries(
      EXPORTING iv\_payment\_date   = payment\_date
      IMPORTING et\_invoice\_header = DATA(invoice\_header2)
                et\_invoice\_item   = DATA(invoice\_item2)
                et\_customer\_info  = DATA(customer\_info2) ) .
    GET RUN TIME FIELD DATA(t22).
    GET RUN TIME FIELD DATA(t31).
    oref->open\_sql\_subquery(
      EXPORTING iv\_payment\_date   = payment\_date
      IMPORTING et\_invoice\_header = DATA(invoice\_header3)
                et\_invoice\_item   = DATA(invoice\_item3)
                et\_customer\_info  = DATA(customer\_info3) ) .
    GET RUN TIME FIELD DATA(t32).
    IF lines( invoice\_header ) IS INITIAL.
      out->display( 'Nothing found' ).
      RETURN.
    ENDIF.
    out->begin\_section( \`Lines of tables filled\`
      )->write( |INVOICE\_HEADER: {
                   lines( invoice\_header ) }\\n\\n| &&
                |INVOICE\_ITEM:   {
                   lines( invoice\_item ) }\\n\\n|  &&
                |CUSTOMER\_INFO:  {
                   lines( customer\_info ) }| ).
    out->next\_section( \`Runtime AMDP \`
      )->write( |{ CONV decfloat34(
                  ( t02 - t01 ) / 1000000 ) } seconds| ).
    IF invoice\_header  = invoice\_header1 AND
       invoice\_item    = invoice\_item1   AND
       customer\_info   = customer\_info1.
      out->next\_section( \`Runtime Open SQL with Nested SELECT\`
        )->write( |{ CONV decfloat34(
                      ( t12 - t11 ) / 1000000 ) } seconds| ).
    ELSE.
      out->write( 'Different results in Open SQL with Nested SELECT' ).
    ENDIF.
    IF invoice\_header  = invoice\_header2 AND
       invoice\_item    = invoice\_item2   AND
       customer\_info   = customer\_info2.
      out->next\_section( \`Runtime Open SQL with FOR ALL ENTRIES\`
        )->write( |{ CONV decfloat34(
                      ( t22 - t21 ) / 1000000 ) } seconds| ).
    ELSE.
      out->write(
        'Different results in Open SQL with FOR ALL ENTRIES' ).
    ENDIF.
    IF invoice\_header  = invoice\_header3 AND
       invoice\_item    = invoice\_item3   AND
       customer\_info   = customer\_info3.
      out->next\_section( \`Runtime Open SQL with Subquery\`
        )->write( |{ CONV decfloat34(
                      ( t32 - t31 ) / 1000000 ) } seconds| ).
    ELSE.
      out->write( 'Different results in Open SQL with Subquery' ).
    ENDIF.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The AMDP class CL\_DEMO\_AMDP\_VS\_OPEN\_SQL has an AMDP method AMDP and the regular methods OPEN\_SQL\_NESTED\_SELECT, OPEN\_SQL\_FOR\_ALL\_ENTRIES, and OPEN\_SQL\_SUBQUERY. All take the same data from database tables in the EPM model. These database tables can be filled using the program RS\_EPM\_DGC\_HANA. Create the master data again here (X) and enter, for example, the values 100000 for Number of Sales Orders and 90000 for Number Delivered, plus a time interval of approximately three months.

The example program selects a random date from the existing change data and uses it to make the selections. The selections pick invoices paid on this date, plus the associated business partners and product information.

The method OPEN\_SQL\_NESTED\_SELECT uses nested SELECT statements and provides the worst result, as expected. However, the use of FOR ALL ENTRIES in OPEN\_SQL\_FOR\_ALL\_ENTRIES or the same subqueries in OPEN\_SQL\_SUBQUERY as in AMDP demonstrates that AMDP does not provide any performance benefits as long as only SQL is implemented that can also be expressed in ABAP SQL.

SQLScript implementation of the method AMDP

METHOD amdp BY DATABASE PROCEDURE FOR HDB
       LANGUAGE SQLSCRIPT OPTIONS READ-ONLY
       USING snwd\_ad snwd\_bpa snwd\_so\_inv\_head snwd\_so\_inv\_item.
  --  Selection of invoices paid on a specified date
  --  plus business partner and product information
  -- Retrieve all invoice header which were paid on the requested date
  et\_invoice\_header = select
      node\_key            as invoice\_guid,
      created\_at as created\_at,
      changed\_at as paid\_at,
      buyer\_guid
    from
      snwd\_so\_inv\_head
    where
      client         = :iv\_clnt
      and payment\_status = 'P' -- only paid invoices
      and left(changed\_at, 8) = :iv\_payment\_date
      order by invoice\_guid;
  -- Get the items of those invoices
  et\_invoice\_item = select
      node\_key   as item\_guid,
      parent\_key as invoice\_guid,
      product\_guid,
      gross\_amount,
      currency\_code
    from snwd\_so\_inv\_item
    where parent\_key in
        ( select invoice\_guid
            from :et\_invoice\_header )
      order by item\_guid, invoice\_guid, product\_guid;
  -- Get the information about the customers
  et\_customer\_info = select
      bpa.node\_key     as customer\_guid,
      bpa.bp\_id        as customer\_id,
      bpa.company\_name as customer\_name,
      ad.country,
      ad.postal\_code,
      ad.city
    from snwd\_bpa as bpa
    join snwd\_ad as ad on ad.node\_key = bpa.address\_guid
    where bpa.node\_key in ( select distinct buyer\_guid
                              from :et\_invoice\_header )
    order by customer\_id;
ENDMETHOD.

ABAP implementation of the method OPEN\_SQL\_NESTED\_SELECT

METHOD open\_sql\_nested\_select.
  "Selection of invoices paid on a specified date
  "plus business partner and product information
  DATA ls\_invoice\_head  TYPE ty\_invoice\_header.
  DATA lt\_invoice\_item  TYPE tt\_invoice\_item.
  DATA lt\_customer\_info TYPE tt\_customer\_info.
  DATA lv\_payment\_date\_min TYPE timestamp.
  DATA lv\_payment\_date\_max TYPE timestamp.
  CONVERT DATE iv\_payment\_date TIME '0001'
    INTO TIME STAMP lv\_payment\_date\_min TIME ZONE 'UTC'.
  CONVERT DATE iv\_payment\_date TIME '2359'
    INTO TIME STAMP lv\_payment\_date\_max TIME ZONE 'UTC'.
  "Retrieve all invoice header which were paid on the requested date
  SELECT
    node\_key       AS invoice\_guid,
    created\_at     AS created\_at,
    changed\_at     AS paid\_at,
    buyer\_guid
  FROM
    snwd\_so\_inv\_head
  WHERE                                               "#EC CI\_NOFIELD
    payment\_status = 'P'
    AND changed\_at BETWEEN @lv\_payment\_date\_min AND @lv\_payment\_date\_max
  ORDER BY invoice\_guid
  INTO @ls\_invoice\_head.
    CLEAR lt\_invoice\_item.
    CLEAR lt\_customer\_info.
    "Get the items of invoice
    SELECT
      node\_key   AS item\_guid,
      parent\_key AS invoice\_guid,
      product\_guid,
      gross\_amount,
      currency\_code
    FROM snwd\_so\_inv\_item
    WHERE parent\_key = @ls\_invoice\_head-invoice\_guid
    ORDER BY item\_guid, invoice\_guid, product\_guid
    INTO TABLE @lt\_invoice\_item.
    "Get the information about the customers
    SELECT
     bpa~node\_key     AS customer\_guid,
     bpa~bp\_id        AS customer\_id,
     bpa~company\_name AS customer\_name,
     ad~country,
     ad~postal\_code,
     ad~city
   FROM snwd\_bpa AS bpa
   JOIN snwd\_ad AS ad ON ad~node\_key = bpa~address\_guid
   WHERE bpa~node\_key = @ls\_invoice\_head-buyer\_guid
   INTO TABLE @lt\_customer\_info.
    APPEND ls\_invoice\_head           TO et\_invoice\_header.
    APPEND LINES OF lt\_invoice\_item  TO et\_invoice\_item.
    APPEND LINES OF lt\_customer\_info TO et\_customer\_info.
  ENDSELECT.
  "Remove duplicates
  SORT et\_customer\_info BY customer\_guid.
  DELETE ADJACENT DUPLICATES FROM et\_customer\_info.
ENDMETHOD.

ABAP implementation of the method OPEN\_SQL\_FOR\_ALL\_ENTRIES

METHOD open\_sql\_for\_all\_entries.
  "Selection of invoices paid on a specified date
  "plus business partner and product information
  DATA lv\_payment\_date\_min TYPE timestamp.
  DATA lv\_payment\_date\_max TYPE timestamp.
  CONVERT DATE iv\_payment\_date TIME '0001'
    INTO TIME STAMP lv\_payment\_date\_min TIME ZONE 'UTC'.
  CONVERT DATE iv\_payment\_date TIME '2359'
    INTO TIME STAMP lv\_payment\_date\_max TIME ZONE 'UTC'.
  "Retrieve all invoice header which were paid on the requested date
  SELECT
    node\_key       AS invoice\_guid,
    created\_at     AS created\_at,
    changed\_at     AS paid\_at,
    buyer\_guid
  FROM
    snwd\_so\_inv\_head
  INTO TABLE @et\_invoice\_header
  WHERE                                               "#EC CI\_NOFIELD
    payment\_status = 'P'
    AND changed\_at BETWEEN @lv\_payment\_date\_min AND @lv\_payment\_date\_max
  ORDER BY invoice\_guid.
  "Get the items of those invoices
  SELECT
      node\_key   AS item\_guid,
      parent\_key AS invoice\_guid,
      product\_guid,
      gross\_amount,
      currency\_code
   from snwd\_so\_inv\_item
   into table @et\_invoice\_item
   for all entries in @et\_invoice\_header
   where  parent\_key = @et\_invoice\_header-invoice\_guid
   order by primary key.
  "Get the information about the customers
  SELECT
      bpa~node\_key     AS customer\_guid,
      bpa~bp\_id        AS customer\_id,
      bpa~company\_name AS customer\_name,
      ad~country,
      ad~postal\_code,
      ad~city
    FROM snwd\_bpa AS bpa
    JOIN snwd\_ad AS ad ON ad~node\_key = bpa~address\_guid
    INTO TABLE @et\_customer\_info
    FOR ALL ENTRIES IN @et\_invoice\_header
    WHERE bpa~node\_key = @et\_invoice\_header-buyer\_guid.
  SORT et\_customer\_info BY customer\_guid.
ENDMETHOD.

ABAP implementation of the method OPEN\_SQL\_SUBQUERY

METHOD open\_sql\_subquery.
  "Selection of invoices paid on a specified date
  "plus business partner and product information
  DATA lv\_payment\_date\_min TYPE timestamp.
  DATA lv\_payment\_date\_max TYPE timestamp.
  CONVERT DATE iv\_payment\_date TIME '0001'
    INTO TIME STAMP lv\_payment\_date\_min TIME ZONE 'UTC'.
  CONVERT DATE iv\_payment\_date TIME '2359'
    INTO TIME STAMP lv\_payment\_date\_max TIME ZONE 'UTC'.
  "Retrieve all invoice header which were paid on the requested date
  SELECT
   node\_key       AS invoice\_guid,
   created\_at     AS created\_at,
   changed\_at     AS paid\_at,
   buyer\_guid
FROM
   snwd\_so\_inv\_head
     WHERE
   payment\_status = 'P'
   AND changed\_at BETWEEN @lv\_payment\_date\_min AND @lv\_payment\_date\_max
ORDER BY invoice\_guid
INTO TABLE @et\_invoice\_header.
  "Get the items of those invoices
  SELECT
      node\_key   AS item\_guid,
      parent\_key AS invoice\_guid,
      product\_guid,
      gross\_amount,
      currency\_code
   FROM snwd\_so\_inv\_item
   WHERE  parent\_key IN
        ( SELECT node\_key FROM snwd\_so\_inv\_head
             WHERE payment\_status = 'P'
               AND changed\_at
                     BETWEEN @lv\_payment\_date\_min AND @lv\_payment\_date\_max )
   ORDER BY item\_guid, invoice\_guid, product\_guid
   INTO TABLE @et\_invoice\_item.
  "Get the information about the customers
  SELECT
      bpa~node\_key     AS customer\_guid,
      bpa~bp\_id        AS customer\_id,
      bpa~company\_name AS customer\_name,
      ad~country,
      ad~postal\_code,
      ad~city
    FROM snwd\_bpa AS bpa
    JOIN snwd\_ad AS ad ON ad~node\_key = bpa~address\_guid
    WHERE bpa~node\_key IN ( SELECT buyer\_guid FROM snwd\_so\_inv\_head
             WHERE payment\_status = 'P'
               AND changed\_at
                     BETWEEN @lv\_payment\_date\_min AND @lv\_payment\_date\_max )
    ORDER BY customer\_id
    INTO TABLE @et\_customer\_info.
ENDMETHOD.