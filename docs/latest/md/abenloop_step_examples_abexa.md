---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_step_examples DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. TYPES: BEGIN OF customer_purchase, cust_id    TYPE c LENGTH 8, cust_name  TYPE string, item_id    TYPE c LENGTH 9, purch_date
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_step_examples_abexa.htm"
abapFile: "abenloop_step_examples_abexa.htm"
keywords: ["insert", "delete", "loop", "do", "if", "case", "method", "class", "data", "types", "internal-table", "abenloop", "step", "examples", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, Basic Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) →  [LOOP AT itab, cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_cond.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20STEP%20Examples%2C%20ABENLOOP_STEP_EXAMPLES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - STEP Examples

The example demonstrates different usages of the addition STEP.

Source Code   

\* Public class definition
CLASS cl\_demo\_step\_examples DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    TYPES:
      BEGIN OF customer\_purchase,
        cust\_id    TYPE c LENGTH 8,
        cust\_name  TYPE string,
        item\_id    TYPE c LENGTH 9,
        purch\_date TYPE datn,
        proc\_date  TYPE datn,
      END OF customer\_purchase,
      customer\_purchases TYPE STANDARD TABLE OF customer\_purchase
        WITH EMPTY KEY.
    METHODS:
      constructor,
      purchase\_order,
      quarterly\_order,
      discount,
      tombola.
  PRIVATE SECTION.
    CONSTANTS co\_example\_customer TYPE c LENGTH 8 VALUE '00000001'.
    DATA m\_customer\_purchases
      TYPE customer\_purchases.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_step\_examples IMPLEMENTATION.
  METHOD main.
    me->purchase\_order( ).
    me->quarterly\_order( ).
    me->discount( ).
    me->tombola( ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    m\_customer\_purchases = VALUE customer\_purchases(
            ( cust\_id = '00000001' cust\_name = \`Customer A\`
              item\_id = '781029348' purch\_date = \`20211108\`
              proc\_date = \`20211109\` )
            ( cust\_id = '00000001' cust\_name = \`Customer A\`
              item\_id = '781028275' purch\_date = \`20211117\`
              proc\_date = \`20211118\` )
            ( cust\_id = '00000001' cust\_name = \`Customer A\`
              item\_id = '781029350' purch\_date = \`20211203\`
              proc\_date = \`20211206\` )
            ( cust\_id = '00000002' cust\_name = \`Customer B\`
              item\_id = '781029348' purch\_date = \`20211207\`
              proc\_date = \`20211208\` )
            ( cust\_id = '00000003' cust\_name = \`Customer C\`
              item\_id = '781029353' purch\_date = \`20211215\`
              proc\_date = \`20211216\` )
            ( cust\_id = '00000004' cust\_name = \`Customer D\`
              item\_id = '781029321' purch\_date = \`20211215\`
              proc\_date = \`20211216\` )
            ( cust\_id = '00000005' cust\_name = \`Customer E\`
              item\_id = '781029342' purch\_date = \`20211216\`
              proc\_date = \`20211217\` ) ).
  ENDMETHOD.
  METHOD discount.
    TYPES:
      BEGIN OF order,
        tabix      TYPE sy-tabix,
        item\_id    TYPE c LENGTH 9,
        purch\_date TYPE datn,
        proc\_date  TYPE datn,
      END OF order,
      orders TYPE TABLE OF order WITH EMPTY KEY,
      BEGIN OF discount\_candidate,
        tabix      TYPE sy-tabix,
        item\_id    TYPE c LENGTH 9,
        purch\_date TYPE datn,
        proc\_date  TYPE datn,
      END OF discount\_candidate,
      discount\_candidates TYPE TABLE OF discount\_candidate
        WITH EMPTY KEY.
    DATA(orders) = VALUE orders( FOR <fs> IN m\_customer\_purchases
      INDEX INTO idx STEP -1 WHERE ( cust\_id = co\_example\_customer )
                                 ( tabix = idx item\_id = <fs>-item\_id
                                   purch\_date = <fs>-purch\_date
                                   proc\_date = <fs>-proc\_date ) ).
    DELETE orders WHERE purch\_date <= \`20211001\`
      OR purch\_date >= \`20211231\`.
    FINAL(discounts) = VALUE discount\_candidates(
                            ( LINES OF orders FROM 3 STEP 3 ) ).
    FINAL(is\_discount\_granted) = xsdbool( discounts IS NOT INITIAL ).
    out->write(
      |Discount of { m\_customer\_purchases\[ cust\_id =
        co\_example\_customer \]-cust\_name } ({ co\_example\_customer
        }) granted: { is\_discount\_granted }| ).
  ENDMETHOD.
  METHOD purchase\_order.
    TYPES:
      BEGIN OF order,
        tabix      TYPE sy-tabix,
        item\_id    TYPE c LENGTH 9,
        purch\_date TYPE datn,
        proc\_date  TYPE datn,
      END OF order.
    DATA orders TYPE TABLE OF order.
    LOOP AT m\_customer\_purchases REFERENCE INTO FINAL(customer\_purchase)
      STEP -1 WHERE cust\_id = co\_example\_customer.
      orders = VALUE #( BASE orders
          ( tabix = sy-tabix item\_id = customer\_purchase->item\_id
            purch\_date = customer\_purchase->purch\_date
            proc\_date = customer\_purchase->proc\_date ) ).
    ENDLOOP.
    out->write( |Orders of { m\_customer\_purchases\[ cust\_id =
      co\_example\_customer \]-cust\_name } ({ co\_example\_customer })| ).
    out->write( orders ).
  ENDMETHOD.
  METHOD quarterly\_order.
    TYPES:
      BEGIN OF order,
        tabix      TYPE sy-tabix,
        item\_id    TYPE c LENGTH 9,
        purch\_date TYPE datn,
        proc\_date  TYPE datn,
      END OF order,
      orders TYPE TABLE OF order WITH EMPTY KEY,
      BEGIN OF quarter,
        quarter\_start TYPE datn,
        quarter\_end   TYPE datn,
      END OF quarter,
      quarters TYPE TABLE OF quarter WITH EMPTY KEY.
    DATA quarter\_name TYPE string.
    FINAL(quarters) = VALUE quarters( ( quarter\_start = \`20211001\`
                                       quarter\_end = \`20211231\` ) ).
    FINAL(quarter) = REF #( quarters\[ lines( quarters ) \] ).
    FINAL(q\_start) = quarter->quarter\_start.
    FINAL(q\_end) = quarter->quarter\_end.
    FINAL(orders) = VALUE orders( FOR <fs> IN m\_customer\_purchases
      INDEX INTO idx STEP -1 WHERE ( purch\_date >= q\_start
                                     AND purch\_date <= q\_end )
                                  ( tabix = idx item\_id = <fs>-item\_id
                                    purch\_date = <fs>-purch\_date
                                    proc\_date = <fs>-proc\_date ) ).
    FINAL(quarter\_start\_month) = substring( val = q\_start
                                           off = 4 len = 2 ).
    CASE quarter\_start\_month.
      WHEN \`01\`.
        quarter\_name = \`Quarter 1\`.
      WHEN \`04\`.
        quarter\_name = \`Quarter 2\`.
      WHEN \`07\`.
        quarter\_name = \`Quarter 3\`.
      WHEN \`10\`.
        quarter\_name = \`Quarter 4\`.
    ENDCASE.
    FINAL(quarter\_year) = substring( val = q\_start len = 4 ).
    out->write(
     |Orders of all customers in { quarter\_name } { quarter\_year }:| ).
    IF orders IS NOT INITIAL.
      out->write( orders ).
    ELSE.
      out->write( |No orders found.| ).
    ENDIF.
  ENDMETHOD.
  METHOD tombola.
    TYPES:
      BEGIN OF customer\_benefit,
        cust\_id          TYPE c LENGTH 8,
        discount\_granted TYPE abap\_bool,
        tombola\_won      TYPE abap\_bool,
      END OF customer\_benefit,
      customer\_benefits TYPE STANDARD TABLE OF customer\_benefit
        WITH EMPTY KEY.
    DATA(customer\_benefit) = VALUE customer\_benefits( ).
    DATA(win\_candidates) = VALUE customer\_benefits( ).
    FINAL(customers\_with\_discounts) = VALUE customer\_benefits(
                                    ( cust\_id = co\_example\_customer
                                      discount\_granted = abap\_true ) ).
    LOOP AT m\_customer\_purchases REFERENCE INTO FINAL(tombola) STEP 2
         GROUP BY ( cust\_id = tombola->cust\_id )
           REFERENCE INTO FINAL(customer).
      IF NOT line\_exists( customers\_with\_discounts\[ cust\_id =
                                                 customer->cust\_id \] ).
        INSERT VALUE #( cust\_id     = customer->cust\_id
                        tombola\_won = abap\_true )
                      INTO TABLE win\_candidates.
      ENDIF.
    ENDLOOP.
    INSERT LINES OF customers\_with\_discounts
      INTO TABLE customer\_benefit.
    INSERT LINES OF win\_candidates STEP 2 INTO TABLE customer\_benefit.
    out->write( customer\_benefit ).
  ENDMETHOD.
ENDCLASS.

Description   

The table customer\_purchases stores customer data and purchased item data. There are four methods which show the use of STEP in different contexts.

-   Method purchase\_order
    
    Looping across the lines of the internal table customer\_purchases with LOOP and with STEP -1, indicating a backward loop, to get all purchase orders of a specific customer from the newest to the oldest date.
    
-   Method quarterly\_order
    
    Looping across the lines of the internal table customer\_purchases with FOR and STEP -1, indicating a backward loop, within a specific time period from the newest to the oldest date.
    
-   Method discount
    
    Looping across the lines of the internal table customer\_purchases with FOR and STEP -1 as for method quarterly\_order. Inserting lines of the internal table orders when constructing the internal table discount\_candidates with the additions FROM 3 and STEP 3 to get every third line starting from the third line.
    
-   Method tombola
    
    Looping across the lines of the internal table customer\_purchases with STEP 2 to get every second line and grouping the lines with the group key cust\_id. Inserting the lines of the internal table win\_candidates into the internal table customer\_benefit with STEP 2 to get every second table line.