  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character.htm) →  [RAP - draft table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_table.htm) →  [RAP - query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_query_view.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20RAP%20BO%20with%20DCL%20Access%20Control%2C%20ABENBDL_DRAFT_QUERY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

RAP - RAP BO with DCL Access Control

This example demonstrates how read access control is implemented and evaluated for a RAP BO for active data and for draft data using the CDS data control language [CDS DCL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_glosry.htm "Glossary Entry").

Data model

The CDS data model consists of the root view entity DEMO\_RAP\_MANAGED\_DRAFT\_QUERY.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, RAP managed, draft'
define root view entity DEMO\_RAP\_MANAGED\_DRAFT\_QUERY
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

This CDS root view entity has the CDS DCL access condition DEMO\_RAP\_DRAFT\_QUERY attached to it, which restricts read access to the active data.

@EndUserText.label: 'Access Control for RAP draft query demo'
@MappingRole: true
define role DEMO\_RAP\_DRAFT\_QUERY {
  grant
    select
      on
        DEMO\_RAP\_MANAGED\_DRAFT\_QUERY
          where
            CharFieldRoot <> 'AAA';            
}

Draft Query View

The following CDS view entity DEMO\_RAP\_DRAFT\_QUERY\_VIEW defines a draft query view. It selects all fields from a RAP draft table. It has a CDS DCL source attached to it, which defines read access restrictions for the draft data.

@AbapCatalog.viewEnhancementCategory: \[#NONE\]
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity used as draft query view'
@Metadata.ignorePropagatedAnnotations: true
define view entity DEMO\_RAP\_DRAFT\_QUERY\_VIEW
  as select from demo\_dbtab\_draft
{
  key keyfieldroot                  as Keyfieldroot,
      datafieldroot                 as Datafieldroot,
      charfieldroot                 as Charfieldroot,
      timestamp                     as Timestamp,
      lastchangedat                 as Lastchangedat,
      draftentitycreationdatetime   as Draftentitycreationdatetime,
      draftentitylastchangedatetime as Draftentitylastchangedatetime,
      draftadministrativedatauuid   as Draftadministrativedatauuid,
      draftentityoperationcode      as Draftentityoperationcode,
      hasactiveentity               as Hasactiveentity,
      draftfieldchanges             as Draftfieldchanges
}

This CDS view entity has the CDS DCL access condition DEMO\_RAP\_DCL\_DRAFT attached to it, which restricts read access to the draft data.

@EndUserText.label: 'Access restriction for draft query view'
@MappingRole: true
define role DEMO\_RAP\_DCL\_DRAFT {
  grant
    select
      on
        DEMO\_RAP\_DRAFT\_QUERY\_VIEW
          where
            CharFieldRoot <> 'AAA';            
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_MANAGED\_DRAFT\_QUERY is managed and draft-enabled. It specifies the CDS view entity DEMO\_RAP\_DRAFT\_QUERY\_VIEW as draft query view.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") are not implemented in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") here.

managed implementation in class bp\_demo\_rap\_managed\_draft\_quer unique;
strict ( 2 );
with draft;
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_QUERY alias RootEntity
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft query DEMO\_RAP\_DRAFT\_QUERY\_VIEW
lock master
total etag Timestamp
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly : update ) KeyFieldRoot;
  draft action Activate optimized;
  draft action Discard;
  draft action Edit;
  draft action Resume;
  draft determine action Prepare;
  mapping for demo\_dbtab\_root
    {
      KeyFieldRoot  = key\_field;
      DataFieldRoot = data\_field;
      CharFieldRoot = char\_field;
      Timestamp     = crea\_date\_time;
      LastChangedAt = lchg\_date\_time;
    }
}

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_draft\_query\_view DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_draft\_query\_view IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_dbtab\_root.
    DELETE FROM demo\_dbtab\_draft.
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_query
           ENTITY rootentity
           CREATE
             FIELDS ( keyfieldroot charfieldroot )
              AUTO FILL CID WITH VALUE #(
            ( %cid = 'cid1'  keyfieldroot = 1 charfieldroot = 'AAA' )
            ( %cid = 'cid2'  keyfieldroot = 2 charfieldroot = 'AAA' )
            ( %cid = 'cid3'  keyfieldroot = 3 charfieldroot = 'BBB' )
            ( %cid = 'cid4'  keyfieldroot = 4 charfieldroot = 'CCC' ) )
      REPORTED DATA(create\_reported1)
      FAILED DATA(create\_failed2)
      MAPPED DATA(create\_mapped2).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    READ ENTITIES OF demo\_rap\_managed\_draft\_query
         ENTITY rootentity
         ALL FIELDS WITH VALUE #(
         ( %key-keyfieldroot = 1 )
         ( %key-keyfieldroot = 2 )
         ( %key-keyfieldroot = 3 )
         ( %key-keyfieldroot = 4 ) )
         RESULT FINAL(read\_result)
         FAILED FINAL(failed\_result).
    SELECT \*
         FROM demo\_dbtab\_root
         INTO TABLE @DATA(active\_table).
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_query
         ENTITY rootentity
         CREATE AUTO FILL CID WITH
         VALUE #(
         ( %cid = 'cid5'
         %is\_draft = if\_abap\_behv=>mk-on
         %control-keyfieldroot = if\_abap\_behv=>mk-on
         %data-keyfieldroot = 11111
         %control-charfieldroot = if\_abap\_behv=>mk-on
         charfieldroot = 'AAA' )
         ( %cid = 'cid6'
         %is\_draft = if\_abap\_behv=>mk-on
         %control-keyfieldroot = if\_abap\_behv=>mk-on
         %data-keyfieldroot = 22222
         %control-charfieldroot = if\_abap\_behv=>mk-on
         charfieldroot = 'AAA' )
         ( %cid = 'cid7'
         %is\_draft = if\_abap\_behv=>mk-on
         %control-keyfieldroot = if\_abap\_behv=>mk-on
         %data-keyfieldroot = 33333
         %control-charfieldroot = if\_abap\_behv=>mk-on
         charfieldroot = 'BBB' )
         ( %cid = 'cid8'
         %is\_draft = if\_abap\_behv=>mk-on
         %control-keyfieldroot = if\_abap\_behv=>mk-on
         %data-keyfieldroot = 44444
         %control-charfieldroot = if\_abap\_behv=>mk-on
         charfieldroot = 'CCC' ) )
      REPORTED DATA(create\_reported)
      FAILED DATA(create\_failed)
      MAPPED DATA(create\_mapped).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    READ ENTITIES OF demo\_rap\_managed\_draft\_query
        ENTITY rootentity
        ALL FIELDS WITH VALUE #(
        ( %key-keyfieldroot = 11111 %is\_draft = if\_abap\_behv=>mk-on )
        ( %key-keyfieldroot = 22222 %is\_draft = if\_abap\_behv=>mk-on )
        ( %key-keyfieldroot = 33333 %is\_draft = if\_abap\_behv=>mk-on )
        ( %key-keyfieldroot = 44444 %is\_draft = if\_abap\_behv=>mk-on ) )
        RESULT FINAL(read\_result\_draft)
        FAILED FINAL(failed\_result\_draft).
    SELECT \*
    FROM demo\_dbtab\_draft
    INTO TABLE @DATA(draft\_table).
    out->next\_section( 'Active data, SQL read: full data'
    )->write( active\_table
    )->next\_section( 'Active data, EML read: DCL access control applied'
    )->write( read\_result
    )->next\_section( 'Draft table, SQL read: full data'
    )->write( draft\_table
    )->next\_section( 'draft table, EML read: DCL access control applied'
    )->write( read\_result\_draft ).
    "Discard draft data
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_query
           ENTITY rootentity
           EXECUTE discard FROM
           VALUE #( ( %key-keyfieldroot = 11111 )
           ( %key-keyfieldroot = 22222 )
           ( %key-keyfieldroot = 33333 )
           ( %key-keyfieldroot = 44444 ) )
         REPORTED create\_reported
         FAILED create\_failed
         MAPPED create\_mapped.
    COMMIT ENTITIES.
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML and ABAP SQL

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   It creates four active entity instances using the EML statement [MODIFY ENTITIES CREATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm).
-   It reads these active instances, first with the EML statement [READ ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm), and afterwards with ABAP SQL [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm). In the EML read, the DCL access condition is applied and the result set is filtered according to the access condition. Some data sets are filtered out. By contrast, the ABAP SQL SELECT displays all instances that were saved on the database.
-   It creates four draft instances using the EML statement MODIFY ENTITIES CREATE.
-   It reads these draft instances, first with the EML statement READ ENTITIES, and afterwards with ABAP SQL SELECT. In the EML read, the DCL access condition attached to the draft query view is applied and the result set is filtered according to the access condition. Some data sets are filtered out. By contrast, the ABAP SQL SELECT displays all instances that were saved in the RAP draft table.
-   Finally, the RAP draft table is cleared using the draft action [Discard](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action.htm).