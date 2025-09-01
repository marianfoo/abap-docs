---
title: "ABAP EML - RAP Calculator"
description: |
  This example demonstrates a calculator that is implemented in a RAP context using a simple managed RAP BO. Here, a create operation with an ABAP EML MODIFY ENTITY statement takes up user input - numbers and an arithmetic operator - on whose basis a calculation is done. The RAP BO is draft-enabled wh
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_calculator_abexa.htm"
abapFile: "abeneml_calculator_abexa.htm"
keywords: ["select", "delete", "loop", "do", "if", "try", "catch", "method", "class", "data", "abeneml", "calculator", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm) →  [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_modify_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20RAP%20Calculator%2C%20ABENEML_CALCULATOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - RAP Calculator

This example demonstrates a calculator that is implemented in a RAP context using a simple managed RAP BO. Here, a create operation with an ABAP EML MODIFY ENTITY statement takes up user input - numbers and an arithmetic operator - on whose basis a calculation is done. The RAP BO is draft-enabled which does not play a role in this example. See the following related example for more information: [ABAP EML in Use: Managed, Draft-Enabled RAP BO with Late Numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensheet_rap_calc_dr_ln_m_abexa.htm)

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_u\_calculator DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      num1      TYPE c LENGTH 7,
      num2      TYPE c LENGTH 7,
      arithm\_op TYPE c LENGTH 1.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_u\_calculator IMPLEMENTATION.
  METHOD main.
    cl\_demo\_input=>new(
     )->add\_text( \`RAP Calculator with a managed RAP BO\`
     )->add\_text( \`Please enter numbers and an operand \` &&
                  \`(+ - \* P) for the calculation:\`
     )->add\_field( CHANGING field = num1
     )->add\_line(
     )->add\_field( CHANGING field = arithm\_op
     )->add\_line(
     )->add\_field( CHANGING field = num2
     )->request( ).
    out->begin\_section( \`RAP Calculator with a managed RAP BO\` ).
    TRY.
        MODIFY ENTITY demo\_cs\_rap\_draft\_m
         CREATE AUTO FILL CID
         FIELDS ( num1 num2 arithm\_op ) WITH VALUE #(
          ( num1 =  num1
            num2 = num2
            arithm\_op = arithm\_op ) ).
      CATCH cx\_root INTO FINAL(err).
    ENDTRY.
    IF err IS NOT INITIAL.
      out->write( err->get\_text( ) ).
    ENDIF.
    COMMIT ENTITIES RESPONSE OF demo\_cs\_rap\_draft\_m REPORTED DATA(rep).
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    IF rep-calc IS NOT INITIAL.
      out->write\_html( '<b>The calculation cannot be executed:</b>' ).
      LOOP AT rep-calc
         ASSIGNING FIELD-SYMBOL(<reported>).
        out->write( <reported>-%msg->if\_message~get\_text( ) ).
      ENDLOOP.
    ENDIF.
    SELECT SINGLE num1, arithm\_op, num2, calc\_result
     FROM demo\_cs\_tab\_calc INTO @FINAL(calculation).
    IF calculation IS NOT INITIAL.
      out->write\_html(
             '<b>Calculation result</b>'
            )->write( calculation ).
    ENDIF.
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_cs\_tab\_calc.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.