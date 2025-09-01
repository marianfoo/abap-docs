---
title: "Data model"
description: |
  The CDS data model consists of the root entity DEMO_CS_RAP_DRAFT_M: @AccessControl.authorizationCheck: #NOT_REQUIRED @ObjectModel.semanticKey: 'id' @UI:  headerInfo:  title:  value: 'id' , typeName: 'Calculation', typeNamePlural: 'Calculations'   define root view entity DEMO_CS_RAP
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensheet_rap_calc_dr_ln_m_abexa.htm"
abapFile: "abensheet_rap_calc_dr_ln_m_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "abensheet", "rap", "calc", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [RAP Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20Calculator%3A%20Managed%2C%20Draft-Enabled%20RAP%20BO%20with%20Late%20Numbering%2C%20ABENSHEET_RAP_CALC_DR_LN_M_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP Calculator: Managed, Draft-Enabled RAP BO with Late Numbering

This example represents a calculator using RAP concepts, i. e. using ABAP EML in the context of a [managed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") and [draft-enabled](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry") RAP business object with [RAP late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_late_numbering_glosry.htm "Glossary Entry") to carry out simple calculations. Here, a [RAP BO instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") consists of a calculation ID (which is the key that is finally set not until the [RAP save sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_save_seq_glosry.htm "Glossary Entry")), two operands (having integer values), the arithmetic operator and the result plus other draft-related fields.

Data model

The CDS data model consists of the root entity DEMO\_CS\_RAP\_DRAFT\_M:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ObjectModel.semanticKey: \['id'\]
@UI: { headerInfo: { title: { value: 'id' },
       typeName: 'Calculation', typeNamePlural: 'Calculations' } }
define root view entity DEMO\_CS\_RAP\_DRAFT\_M
  as select from demo\_cs\_tab\_calc
  {
        //FACET SECTION
        @UI.facet: \[
        // Header Facet (Object Page):
        { id:              'HeaderFacet',
          purpose:         #HEADER,
          type:            #FIELDGROUP\_REFERENCE,
          //label:           'Calculation ID',
          targetQualifier: 'Fieldgroup:HeaderItems',
          position:        10 },
        // Body Facets (Object Page)
        { id:       'Calculation',
          type:     #IDENTIFICATION\_REFERENCE,
          label:    'Calculation',
          position: 10 }
        \]
         // Element List
    @EndUserText.label: 'Calculation ID'
    @UI: { lineItem: \[ { importance: #HIGH, position: 10,  
                         label: 'Calculation ID' },
                     { type: #FOR\_ACTION, dataAction: 'delete\_all',  
                       label: 'Delete All Persisted Calculations' } \],
           fieldGroup: \[ { qualifier: 'Fieldgroup:HeaderItems',  
                           position: 10 } \] }
    key id,
        @UI: { lineItem:       \[ { importance: #HIGH, position: 20,  
                                   label: '1st Operand' } \],
               identification: \[ { position: 20,  
                                   label: '1st Operand' } \],
               fieldGroup:     \[ { qualifier: 'CaluclationItems',  
                                   position: 10 } \] }
        num1,
        @UI: { lineItem:       \[ { importance: #HIGH, position: 30,  
                                   label: 'Operator' } \],
               identification: \[ { position: 30, label: 'Operator' } \],
               fieldGroup:     \[ { qualifier: 'CaluclationItems',  
                                   position: 20 } \] }
        arithm\_op,
        @UI: { lineItem:       \[ { importance: #HIGH, position: 40,  
                                   label: '2nd Operand' } \],
               identification: \[ { position: 40,  
                                   label: '2nd Operand' } \],
               fieldGroup:     \[ { qualifier: 'CaluclationItems',  
                                   position: 30 } \] }
        num2,
        @UI: { lineItem:       \[ { importance: #HIGH, position: 50,  
                                   label: 'Result' } \],
               identification: \[ { position: 50, label: 'Result' } \],
               fieldGroup:     \[ { qualifier: 'CaluclationItems',  
                                   position: 40 } \] }
        calc\_result,
        @UI: { hidden: true }
        @Semantics.systemDateTime.lastChangedAt: true
        crea\_date\_time,
        @EndUserText.label: 'Last Changed At'
        @UI: { fieldGroup:     \[ { qualifier: 'Fieldgroup:HeaderItems',  
                                   position: 20 } \] }
        @Semantics.systemDateTime.localInstanceLastChangedAt: true
        lchg\_date\_time
  }

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_CS\_RAP\_DRAFT\_M is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_cs\_rap\_draft\_m unique;
strict ( 2 );
with draft;
define behavior for DEMO\_CS\_RAP\_DRAFT\_M alias calc
persistent table demo\_cs\_tab\_calc
draft table demo\_cs\_drafttab
lock master
total etag crea\_date\_time
etag master lchg\_date\_time
authorization master ( global )
late numbering
{
  create;
  update;
  delete;
  field ( readonly ) id, calc\_result, crea\_date\_time, lchg\_date\_time;
  field ( mandatory ) num1, num2, arithm\_op;
  static action delete\_all;
  internal action calculation;
  validation validate on save { create; field num1, arithm\_op, num2; }
  determination det\_modify on modify { field num1, num2, arithm\_op; }
  draft action Resume;
  draft action Edit;
  draft action Activate optimized;
  draft action Discard;
  draft determine action Prepare
  {
    validation validate;
  }
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_CS\_RAP\_DRAFT\_M. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. See comments in the code for more information on the implementation.

Source Code   

\* Public class definition
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*        RAP BO consumer for a RAP demo scenario
\*
\* RAP scenario: managed, draft-enabled RAP BO, late numbering
\* Data model: Consists of a root entity only. The BDEF
\* defines the behavior for the entity. The definitions in the BDEF
\* determine which methods must be implemented in this ABAP behavior
\* pool (ABP).
\*
\* This simplified example is not a real life scenario and rather
\* focuses on the technical side by giving an idea how the communication
\* and data exchange between a RAP BO consumer, which is an ABAP report
\* in this case, and RAP BO provider can work and how the methods of
\* an ABP might be self-implemented.
\*
\* See more information on implementations in the ABAP behavior pool.
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
CLASS cl\_demo\_cs\_rap\_draft\_ln\_m DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      activate\_tab  TYPE TABLE FOR ACTION IMPORT
                      demo\_cs\_rap\_draft\_m~activate,
      activate\_tab2 TYPE TABLE FOR ACTION IMPORT
                      demo\_cs\_rap\_draft\_m~activate,
      activate\_tab3 TYPE TABLE FOR ACTION IMPORT
                      demo\_cs\_rap\_draft\_m~activate,
      edit\_tab      TYPE TABLE FOR ACTION IMPORT
                      demo\_cs\_rap\_draft\_m~edit,
      read\_tab      TYPE TABLE FOR READ IMPORT demo\_cs\_rap\_draft\_m,
      f             TYPE RESPONSE FOR FAILED demo\_cs\_rap\_draft\_m,
      r             TYPE RESPONSE FOR REPORTED demo\_cs\_rap\_draft\_m,
      m             TYPE RESPONSE FOR MAPPED demo\_cs\_rap\_draft\_m.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cs\_rap\_draft\_ln\_m IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`RAP Demo: RAP Calculator Using Managed, \` &&
                      \`Draft-Enabled RAP BO (Late Numbering)\` ).
    out->line(
      )->next\_section( \`1) Creating Instances and \` &&
                       \`Saving to the database\` ).
    "Creating instances; draft indicator %is\_draft is enabled
    MODIFY ENTITY demo\_cs\_rap\_draft\_m
     CREATE AUTO FILL CID
     FIELDS ( num1 arithm\_op num2 )
     WITH VALUE #(
        ( %is\_draft = if\_abap\_behv=>mk-on
          num1 = 1 arithm\_op = '+' num2 = 2 )
        ( %is\_draft = if\_abap\_behv=>mk-on
          num1 = 2 arithm\_op = '\*' num2 = 4 )
        ( %is\_draft = if\_abap\_behv=>mk-on
          num1 = 3 arithm\_op = '-' num2 = 5 )
        ( %is\_draft = if\_abap\_behv=>mk-on
          num1 = 1 arithm\_op = '/' num2 = 4 )
        ( %is\_draft = if\_abap\_behv=>mk-on
          num1 = 2 arithm\_op = 'P' num2 = 5 ) )
        FAILED f
        REPORTED r
        MAPPED m.
    "Displaying responses only if FAILED and REPORTED
    "response parameters are not initial
    IF f IS NOT INITIAL OR r IS NOT INITIAL.
      out->write\_html( \`<b>Responses after MODIFY operation</b>\` ).
      IF m IS NOT INITIAL.
        out->write( m ).
      ENDIF.
      IF f IS NOT INITIAL.
        out->write( f ).
      ENDIF.
      IF r IS NOT INITIAL.
        out->write( r ).
      ENDIF.
    ENDIF.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving draft table entries
    SELECT id, num1, arithm\_op, num2, calc\_result, crea\_date\_time,
           lchg\_date\_time, draftentitycreationdatetime,
           draftentitylastchangedatetime
     FROM demo\_cs\_drafttab
     ORDER BY id
     INTO TABLE @DATA(draft\_parent\_before\_act).
    "Retrieving database table entries
    SELECT id, num1, arithm\_op, num2, calc\_result, crea\_date\_time,
           lchg\_date\_time
     FROM demo\_cs\_tab\_calc
     ORDER BY id
     INTO TABLE @DATA(db\_tab\_root\_before\_act).
    "Filling the derived type for the ACTIVATE method by
    "getting %pid values
    LOOP AT m-calc
      ASSIGNING FIELD-SYMBOL(<fs>).
      APPEND VALUE #( %pid = <fs>-%pid )
                             TO activate\_tab.
    ENDLOOP.
    MODIFY ENTITY demo\_cs\_rap\_draft\_m
      EXECUTE activate AUTO FILL CID WITH activate\_tab
      MAPPED m
      FAILED f
      REPORTED r.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving draft table entries
    SELECT id, num1, arithm\_op, num2, calc\_result, crea\_date\_time,
           lchg\_date\_time, draftentitycreationdatetime,
           draftentitylastchangedatetime
     FROM demo\_cs\_drafttab
     ORDER BY id
     INTO TABLE @DATA(draft\_parent\_afer\_act).
    "Retrieving database table entries
    SELECT id, num1, arithm\_op, num2, calc\_result, crea\_date\_time,
           lchg\_date\_time
     FROM demo\_cs\_tab\_calc
     ORDER BY id
     INTO TABLE @DATA(db\_tab\_root\_after\_act).
    "Displaying entries
    out->write\_html( \`<b>a) Draft and database tables before \` &&
                   \`ACTIVATE action</b>\`
      )->write( data = draft\_parent\_before\_act exclude = \`client\`
                name = 'Draft table before activation'
      )->write( data = db\_tab\_root\_before\_act exclude = \`client\`
                name = 'Database table before activation' ).
    out->write\_html( \`<b>b) Draft and database tables after \` &&
                   \`ACTIVATE action</b>\`
      )->write( data = draft\_parent\_afer\_act exclude = \`client\`
                name = 'Draft table after activation'
      )->write( data = db\_tab\_root\_after\_act exclude = \`client\`
                name = 'Database table after activation'
      ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
          )->next\_section( \`2) Creating Invalid Instances\` ).
    "Purposely creating invalid instances;
    "draft indicator %is\_draft is enabled
    MODIFY ENTITY demo\_cs\_rap\_draft\_m
     CREATE AUTO FILL CID
     FIELDS ( num1 arithm\_op num2 )
     WITH VALUE #(
        ( %is\_draft = if\_abap\_behv=>mk-on
          num1 = 1 arithm\_op = 'a' num2 = 1 )  "wrong operator
        ( %is\_draft = if\_abap\_behv=>mk-on
          num1 = 1 arithm\_op = '/' num2 = 0 ) "0 division
        ( %is\_draft = if\_abap\_behv=>mk-on
          num1 = 2 arithm\_op = 'P' num2 = 12345 ) ) "arithmetic overflow
        FAILED f
        REPORTED r
        MAPPED m.
    "Displaying responses only if FAILED and REPORTED
    "response parameters are not initial.
    IF f IS NOT INITIAL OR r IS NOT INITIAL.
      out->write\_html( \`<b>Responses after MODIFY operation</b>\` ).
      IF m IS NOT INITIAL.
        out->write( m ).
      ENDIF.
      IF f IS NOT INITIAL.
        out->write( f ).
      ENDIF.
      IF r IS NOT INITIAL.
        out->write( r ).
      ENDIF.
    ENDIF.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving draft table entries
    SELECT id, num1, arithm\_op, num2, calc\_result, crea\_date\_time,
           lchg\_date\_time, draftentitycreationdatetime,
           draftentitylastchangedatetime
     FROM demo\_cs\_drafttab
     ORDER BY id
     INTO TABLE @draft\_parent\_before\_act.
    "Retrieving database table entries
    SELECT id, num1, arithm\_op, num2, calc\_result, crea\_date\_time,
           lchg\_date\_time
     FROM demo\_cs\_tab\_calc
     ORDER BY id
     INTO TABLE @db\_tab\_root\_before\_act.
    "Filling the derived type for the ACTIVATE method by
    "getting %pid values; here, another table is filled for later use
    LOOP AT m-calc
      ASSIGNING FIELD-SYMBOL(<fs2>).
      APPEND VALUE #( %pid = <fs2>-%pid )
                             TO activate\_tab2.
      APPEND VALUE #( %pid = <fs2>-%pid )
                             TO activate\_tab3.
    ENDLOOP.
    MODIFY ENTITY demo\_cs\_rap\_draft\_m
      EXECUTE activate AUTO FILL CID WITH activate\_tab2
      MAPPED m
      FAILED f
      REPORTED r.
    "Displaying responses only if FAILED and REPORTED
    "response parameters are not initial.
    IF f IS NOT INITIAL OR r IS NOT INITIAL.
      out->write\_html( \`<b>Responses after MODIFY operation</b>\` ).
      IF m IS NOT INITIAL.
        out->write( m ).
      ENDIF.
      IF f IS NOT INITIAL.
        out->write( f ).
      ENDIF.
      IF r IS NOT INITIAL.
        out->write( r ).
      ENDIF.
    ENDIF.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving draft table entries
    SELECT id, num1, arithm\_op, num2, calc\_result, crea\_date\_time,
           lchg\_date\_time, draftentitycreationdatetime,
           draftentitylastchangedatetime
     FROM demo\_cs\_drafttab
     ORDER BY id
     INTO TABLE @draft\_parent\_afer\_act.
    "Retrieving database table entries
    SELECT id, num1, arithm\_op, num2, calc\_result, crea\_date\_time,
           lchg\_date\_time
     FROM demo\_cs\_tab\_calc
     ORDER BY id
     INTO TABLE @db\_tab\_root\_after\_act.
    "Displaying entries
    out->write\_html( \`<b>a) Draft and database tables before \` &&
                   \`ACTIVATE action</b>\`
      )->write( data = draft\_parent\_before\_act exclude = \`client\`
                name = 'Draft table before activation'
      )->write( data = db\_tab\_root\_before\_act exclude = \`client\`
                name = 'Database table before activation' ).
    out->write\_html( \`<b>b) Draft and database tables after \` &&
                   \`ACTIVATE action</b>\`
      )->write( data = draft\_parent\_afer\_act exclude = \`client\`
                name = 'Draft table after activation'
      )->write( data = db\_tab\_root\_after\_act exclude = \`client\`
                name = 'Database table after activation'
      ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
    )->next\_section( \`3) Correcting and Updating Invalid Instances\` ).
    "Preparing the derived type for the read operation to
    "retrieve the field values; the draft indicator is enabled
    LOOP AT activate\_tab3 ASSIGNING FIELD-SYMBOL(<fs3>).
      APPEND VALUE #( %pky = <fs3>-%pky
                      %is\_draft = if\_abap\_behv=>mk-on
                      %control-id = if\_abap\_behv=>mk-on
                      %control-num1 = if\_abap\_behv=>mk-on
                      %control-arithm\_op = if\_abap\_behv=>mk-on
                      %control-num2 = if\_abap\_behv=>mk-on
                      %control-calc\_result = if\_abap\_behv=>mk-on
                      %control-crea\_date\_time = if\_abap\_behv=>mk-on
                      %control-lchg\_date\_time = if\_abap\_behv=>mk-on
                    ) TO read\_tab.
    ENDLOOP.
    "Retrieving the entries of the invalid instances
    READ ENTITY demo\_cs\_rap\_draft\_m
      ALL FIELDS WITH read\_tab
      RESULT FINAL(result).
    "Correcting and updating the invalid instances
    MODIFY ENTITY demo\_cs\_rap\_draft\_m
      UPDATE FROM VALUE #(
        FOR wa IN result (
            %pid = wa-%pid
            %is\_draft = if\_abap\_behv=>mk-on
            num2 = SWITCH #( wa-calc\_result
              WHEN \`Division by 0\` THEN 2
              WHEN \`Overflow error\` THEN 3 )
            arithm\_op = SWITCH #( wa-calc\_result
              WHEN \`Wrong operator\` THEN '+' )
            %control-num2 = SWITCH #( wa-calc\_result
              WHEN \`Division by 0\` THEN if\_abap\_behv=>mk-on
              WHEN \`Overflow error\` THEN if\_abap\_behv=>mk-on
              ELSE if\_abap\_behv=>mk-off )
            %control-arithm\_op = SWITCH #( wa-calc\_result
              WHEN \`Wrong operator\` THEN if\_abap\_behv=>mk-on
              ELSE if\_abap\_behv=>mk-off ) ) )
        FAILED f
        REPORTED r
        MAPPED m.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    MODIFY ENTITY demo\_cs\_rap\_draft\_m
      EXECUTE activate AUTO FILL CID WITH activate\_tab3
      MAPPED m
      FAILED f
      REPORTED r.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving draft table entries
    SELECT id, num1, arithm\_op, num2, calc\_result, crea\_date\_time,
           lchg\_date\_time, draftentitycreationdatetime,
           draftentitylastchangedatetime
     FROM demo\_cs\_drafttab
     ORDER BY id
     INTO TABLE @draft\_parent\_afer\_act.
    "Retrieving database table entries
    SELECT id, num1, arithm\_op, num2, calc\_result, crea\_date\_time,
           lchg\_date\_time
     FROM demo\_cs\_tab\_calc
     ORDER BY id
     INTO TABLE @db\_tab\_root\_after\_act.
    "Displaying entries
    out->write\_html( \`<b>Draft and database tables after \` &&
                   \`ACTIVATE action</b>\`
      )->write( data = draft\_parent\_afer\_act exclude = \`client\`
                name = 'Draft table after activation'
      )->write( data = db\_tab\_root\_after\_act exclude = \`client\`
                name = 'Database table after activation'
      ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_cs\_tab\_calc.                       "#EC CI\_NOWHERE
    DELETE FROM demo\_cs\_drafttab.                       "#EC CI\_NOWHERE
  ENDMETHOD.
  METHOD constructor.
    super->constructor(  ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

RAP Calculator within a class

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

The class that acts as [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") here demonstrates the following:

-   Creating instances and saving to the database
    
    First, five instances are created using an ABAP EML MODIFY statement, i. e. five calculations are triggered. All of them use a different arithmetic operator. They all return a valid result. To show the effect of the statement, the entries of the draft table and the database table are retrieved and displayed. At this stage, the entries are not yet available in the database table. Then, the activate action is executed so that the entries in the draft table are persisted to the database table. The table entries are retrieved again showing that the draft table has no entries. All instances have been persisted to the database.
    
-   Creating invalid entries
    
    Three instances are created using an ABAP EML MODIFY statement, i. e. three calculations are carried out. All of them fail either by using a wrong operator or because of a division by 0 or an arithmetic overflow issue. Consequently, the FAILED and REPORTED response parameters are filled with these instances. In the same way as above, the table entries are retrieved and displayed before and after executing the activate method. Here, the invalid entries are not persisted to the database.
    
-   Correcting and updating invalid entries
    
    The three invalid entries are updated so that the calculation is successful and a valid result is returned. Finally, the now valid instances are saved to the database table.
    

RAP Calculator using an SAP Fiori Elements app

You can test the RAP Calculator using the preview version of an SAP Fiori Elements app as follows:

1.  In [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"), search for and open the service binding DEMO\_RAP\_CALC\_DR\_SB. It is contained in the same package as the class mentioned above.
2.  Make sure that the Local Service Endpoint in the Service Version Details section is published.
3.  Select the entity set DEMO\_CS\_RAP\_DRAFT\_M and choose Preview.
4.  An app is opened in a browser. If you are prompted, provide the system credentials to log on. The app and the managed, draft-enabled RAP BO can be explored. The late numbering aspects comes into the picture when you, for example, create a new instance, i. e. create a new calculation, and you keep a draft version of it instead of saving it to the database. The calculation ID which represents the key of the instance has an initial value. The final key is only set when you save the instance to the database.

See comments in the code for more information.