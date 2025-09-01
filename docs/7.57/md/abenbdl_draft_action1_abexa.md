  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [CDS BDL - draft action](javascript:call_link\('abenbdl_draft_action.htm'\)) →  [CDS BDL - Examples of Draft Actions](javascript:call_link\('abenbdl_draft_action_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Draft Action Activate, ABENBDL_DRAFT_ACTION1_ABEXA, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Draft Action Activate

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

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_RAP\_MANAGED\_DRAFT\_1 is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as shown below. It has all mandatory syntax elements required for a draft scenario:

-   with draft; is defined in the [CDS behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry").
-   The [draft table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry") DEMO\_DBTAB\_DRAFT is defined.
-   The [total ETag](javascript:call_link\('abenbdl_etag.htm'\)) field Time stamp is defined in the correct position, namely directly after the lock master
-   The draft action Edit is defined explicitly
    
    Note: If the draft action Edit is enabled implicitly, then it automatically comes with instance feature control and an implementation in the ABAP behavior pool is required. In this example, it is enabled explicitly without feature control, so that it can be handled by the managed RAP BO provider.
    

The draft is completely handled by the RAP framework; no implementation in the ABAP behavior pool is required.

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

REPORT demo\_rap\_managed\_activate.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new(  ).
    DELETE FROM demo\_dbtab\_root.
    DELETE FROM demo\_dbtab\_draft.
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_1
      ENTITY ParentEntity
        CREATE FROM
        VALUE #( ( %cid = 'cid1'
                   %is\_draft = if\_abap\_behv=>mk-on
                   %control-KeyFieldRoot = if\_abap\_behv=>mk-on
                   %data-KeyFieldRoot = 81000
                   %control-CharFieldRoot = if\_abap\_behv=>mk-on
                   CharFieldRoot = 'AAA'
                   %control-DataFieldRoot = if\_abap\_behv=>mk-on
                   DataFieldRoot = 'AAA' )
                 ( %cid = 'cid2'
                   %is\_draft = if\_abap\_behv=>mk-on
                   %control-KeyFieldRoot = if\_abap\_behv=>mk-on
                   %data-KeyFieldRoot = 81001
                   %control-CharFieldRoot = if\_abap\_behv=>mk-on
                   CharFieldRoot = 'BBB'
                   %control-DataFieldRoot = if\_abap\_behv=>mk-on
                   DataFieldRoot = 'BBB' ) )
        MAPPED FINAL(create\_mapped)
        FAILED FINAL(create\_failed)
        REPORTED FINAL(create\_reported).
    COMMIT ENTITIES.
    SELECT \*
      FROM demo\_dbtab\_draft
      INTO TABLE @FINAL(draft\_parent).
    SELECT \*
      FROM demo\_dbtab\_root
      INTO TABLE @FINAL(active\_parent).
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_1
    ENTITY ParentEntity
      EXECUTE Activate AUTO FILL CID WITH
      VALUE #( ( %key-KeyFieldRoot = 81000 )
               ( %key-KeyFieldRoot = 81001 ) )
      REPORTED FINAL(activate\_reported)
      FAILED FINAL(activate\_failed)
      MAPPED FINAL(activate\_mapped).
    COMMIT ENTITIES.
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
        )->write( active\_parent\_1
         )->display(  ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP program:

-   Two draft instances are created with the statement MODIFY ENTITY.
-   The draft action Activate is executed on both instances with the statement EXECUTE.
-   Using the ABAP SQL SELECT statement, the content of the draft and persistent table before and after activation is displayed. Before the activation, the draft table contains the two new draft instances. After the activation, the instances are copied to the persistent table and the content from the draft table is cleared.