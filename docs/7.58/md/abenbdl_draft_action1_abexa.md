---
title: "RAP - Draft Action Activate"
description: |
  This example demonstrates how the draft action Activate is defined, implemented, and consumed in a managed RAP BO. Data model The CDS data model consists of the root entity DEMO_RAP_MANAGED_DRAFT_1. Root entity: @AccessControl.authorizationCheck: #CHECK @EndUserText.label: 'CDS view entity, RAP
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action1_abexa.htm"
abapFile: "abenbdl_draft_action1_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "abenbdl", "draft", "action1", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_operations.htm) →  [RAP - draft action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action.htm) →  [RAP - Examples of Draft Actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Draft%20Action%20Activate%2C%20ABENBDL_DRAFT_ACTION1_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Draft Action Activate

This example demonstrates how the draft action Activate is defined, implemented, and consumed in a managed RAP BO.

Data model

The CDS data model consists of the root entity DEMO\_RAP\_MANAGED\_DRAFT\_1.

Root entity:

@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'CDS view entity, RAP managed, draft'
define root view entity DEMO\_RAP\_MANAGED\_DRAFT\_1
  as select from demo\_dbtab\_root
{
  key key\_field      as KeyFieldRoot,
      data\_field     as DataFieldRoot,
      char\_field     as CharFieldRoot,
      @Semantics.systemDateTime.lastChangedAt: true
      crea\_date\_time as Timestamp,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      lchg\_date\_time as LastChangedAt
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_MANAGED\_DRAFT\_1 is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as shown below. It has all mandatory syntax elements required for a draft scenario:

-   with draft; is defined in the [RAP behavior definition header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_header_glosry.htm "Glossary Entry").
-   The [draft table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_table_glosry.htm "Glossary Entry") DEMO\_DBTAB\_DRAFT is defined.
-   The [total ETag](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_etag.htm) field Time stamp is defined in the correct position, namely directly after the lock master
-   The draft action Edit is defined explicitly
    
    Note: If the draft action Edit is enabled implicitly, then it automatically comes with instance feature control and an implementation in the ABAP behavior pool is required. In this example, it is enabled explicitly without feature control, so that it can be handled by the managed RAP BO provider.
    

The draft is completely handled by the RAP framework; no implementation in the ABAP behavior pool is required.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed;
with draft;
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_1 alias ParentEntity
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
etag master LastChangedAt
{
  create;
  update;
  delete;
  field (readonly:update) KeyFieldRoot;
  draft action Edit;
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    Timestamp = crea\_date\_time;
    LastChangedAt = lchg\_date\_time;
  }
}

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_managed\_activate DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_managed\_activate IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_dbtab\_root.
    DELETE FROM demo\_dbtab\_draft.
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_1
      ENTITY parententity
        CREATE FROM
        VALUE #( ( %cid = 'cid1'
                   %is\_draft = if\_abap\_behv=>mk-on
                   %control-keyfieldroot = if\_abap\_behv=>mk-on
                   %data-keyfieldroot = 81000
                   %control-charfieldroot = if\_abap\_behv=>mk-on
                   charfieldroot = 'AAA'
                   %control-datafieldroot = if\_abap\_behv=>mk-on
                   datafieldroot = 'AAA' )
                 ( %cid = 'cid2'
                   %is\_draft = if\_abap\_behv=>mk-on
                   %control-keyfieldroot = if\_abap\_behv=>mk-on
                   %data-keyfieldroot = 81001
                   %control-charfieldroot = if\_abap\_behv=>mk-on
                   charfieldroot = 'BBB'
                   %control-datafieldroot = if\_abap\_behv=>mk-on
                   datafieldroot = 'BBB' ) )
        MAPPED FINAL(create\_mapped)
        FAILED FINAL(create\_failed)
        REPORTED FINAL(create\_reported).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \*
      FROM demo\_dbtab\_draft
      INTO TABLE @FINAL(draft\_parent).
    SELECT \*
      FROM demo\_dbtab\_root
      INTO TABLE @FINAL(active\_parent).
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_1
    ENTITY parententity
      EXECUTE activate AUTO FILL CID WITH
      VALUE #( ( %key-keyfieldroot = 81000 )
               ( %key-keyfieldroot = 81001 ) )
      REPORTED FINAL(activate\_reported)
      FAILED FINAL(activate\_failed)
      MAPPED FINAL(activate\_mapped).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \*
     FROM demo\_dbtab\_draft
     INTO TABLE @FINAL(draft\_parent\_1).
    SELECT \*
      FROM demo\_dbtab\_root
      INTO TABLE @FINAL(active\_parent\_1).
    out->next\_section( 'new draft table'
        )->write( draft\_parent
        )->next\_section( 'active table'
        )->write( active\_parent
        )->next\_section( 'draft table after activation'
        )->write( draft\_parent\_1
        )->next\_section( 'active table after activation'
        )->write( active\_parent\_1 ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   Two draft instances are created with the statement MODIFY ENTITY.
-   The draft action Activate is executed on both instances with the statement EXECUTE.
-   Using the ABAP SQL SELECT statement, the content of the draft and persistent table before and after activation is displayed. Before the activation, the draft table contains the two new draft instances. After the activation, the instances are copied to the persistent table and the content from the draft table is cleared.