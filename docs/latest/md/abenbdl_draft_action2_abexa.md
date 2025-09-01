---
title: "RAP - Draft Actions Edit, Discard, Prepare"
description: |
  This example demonstrates how the draft actions Edit, Discard, and Prepare are defined, implemented, and consumed in a managed RAP BO. Data model The CDS data model consists of the root entity DEMO_RAP_MANAGED_DRAFT_ACTIONS: @AccessControl.authorizationCheck: #NOT_REQUIRED @EndUserText.label: '
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action2_abexa.htm"
abapFile: "abenbdl_draft_action2_abexa.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "method", "class", "data", "abenbdl", "draft", "action2", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm) →  [RAP - draft action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm) →  [RAP - Examples of Draft Actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Draft%20Actions%20Edit%2C%20Discard%2C%20Prepare%2C%20ABENBDL_DRAFT_ACTION2_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

RAP - Draft Actions Edit, Discard, Prepare

This example demonstrates how the draft actions Edit, Discard, and Prepare are defined, implemented, and consumed in a managed RAP BO.

Data model

The CDS data model consists of the root entity DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, RAP managed, draft'
define root view entity DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS
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

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as shown below. It is draft-enabled and strict mode is switched on. Therefore, it is mandatory to explicitly declare all draft actions.

The determination setCharField is defined. It is executed on save whenever the field Timestamp is modified. It is implemented in the ABAP behavior pool and it sets the value of the field CharFieldRoot of the respective entity instance to 'A'.

managed implementation in class bp\_demo\_rap\_managed\_draft\_acti unique;
strict(2);
with draft;
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS alias ParentEntity
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
authorization master ( global )
{
  create;
  update;
  delete;
  determination setCharField on save { field Timestamp; }
  draft action ( authorization : none ) Edit;
  draft action Activate optimized;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare
  { determination ( always ) setCharField; }
  field(readonly:update) KeyFieldRoot;
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    Timestamp = crea\_date\_time;
    LastChangedAt = lchg\_date\_time;
  }
}

Behavior implementation

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_MANAGED\_DRAFT\_ACTI. This global class implements the local handler class LHC\_PARENTENTITY, which contains the method setCharField to implement the determination. The actual implementation takes place in the CCIMP include. It sets the value of the field CharFieldRoot of the respective entity instance to 'A'.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_mngd\_draft\_actns DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_mngd\_draft\_actns IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_dbtab\_root.
    DELETE FROM demo\_dbtab\_draft.
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_actions
          ENTITY parententity
            CREATE AUTO FILL CID WITH
            VALUE #( (  %is\_draft          = if\_abap\_behv=>mk-off
                   %control-keyfieldroot = if\_abap\_behv=>mk-on
                   %data-keyfieldroot    = 11 )
                     ( %is\_draft          = if\_abap\_behv=>mk-off
                   %control-keyfieldroot = if\_abap\_behv=>mk-on
                   %data-keyfieldroot    = 22 ) )
      REPORTED DATA(create\_reported)
      FAILED DATA(create\_failed)
      MAPPED DATA(create\_mapped).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    DELETE FROM demo\_dbtab\_draft.
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_actions
      ENTITY parententity
        EXECUTE edit AUTO FILL CID WITH
        VALUE #( ( %key-keyfieldroot           = 11
                   %param-preserve\_changes = 'false' )
                   ( %key-keyfieldroot           = 22
                   %param-preserve\_changes = 'false' ) )
      REPORTED FINAL(edit\_reported)
      FAILED FINAL(edit\_failed)
      MAPPED FINAL(edit\_mapped).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \*
         FROM demo\_dbtab\_draft
         INTO TABLE @FINAL(draft\_table).
    SELECT \*
    FROM demo\_dbtab\_root
    INTO TABLE @FINAL(root\_table).
    out->next\_section( 'active table'
    )->write( root\_table
     )->next\_section( 'draft table after Edit'
     )->write( draft\_table ).
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_actions
      ENTITY parententity
        EXECUTE prepare FROM
        VALUE #( ( %key-keyfieldroot = 11 )
                 ( %key-keyfieldroot = 22 ) )
      REPORTED FINAL(resume\_reported)
      FAILED FINAL(resume\_failed)
      MAPPED FINAL(resume\_mapped).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \*
         FROM demo\_dbtab\_draft
         INTO TABLE @FINAL(draft\_table\_1).
    out->next\_section( 'draft table after Prepare'
    )->write( draft\_table\_1 ).
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_actions
         ENTITY parententity
        EXECUTE discard FROM
       VALUE #( ( %key-keyfieldroot = 11 )
       ( %key-keyfieldroot = 22 ) )
     REPORTED create\_reported
     FAILED create\_failed
     MAPPED create\_mapped.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \*
       FROM demo\_dbtab\_draft
       INTO TABLE @FINAL(draft\_table\_2).
    out->next\_section( 'draft table after Discard'
     )->write( draft\_table\_2 ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   Two active BO instances are created with the statement MODIFY ENTITY.
-   The draft action Edit is executed on both instances with the statement EXECUTE. No changes are made, the only effect of the draft action Edit in this example is that the active instances are copied to the draft database table.
-   The draft action Prepare is executed for the two draft instances that were copied from the persistent table to the draft table during the Edit. The assigned determination setCharField is executed and it inserts a value into field CharFieldRoot.
-   The draft action Discard is executed. It deletes both instances from the draft database table.
-   Using the ABAP SQL SELECT statement, the content of the draft and persistent tables are displayed. It can be seen that the draft action Edit copies the active BO instances to the draft database table. The action Prepare fills the field CharFieldRoot of the draft database table. The draft action Discard deletes the instances from the draft database table.