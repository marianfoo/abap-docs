  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm) →  [CDS BDL - draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm) →  [CDS BDL - Examples of draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action_abexas.htm) → 

CDS BDL - draft action Activate

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_MANAGED\_DRAFT\_1 is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as shown below. It has all mandatory syntax elements required for a draft scenario:

-   with draft; is defined in the [CDS behavior definition header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef_header_glosry.htm "Glossary Entry").
-   The [draft table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendraft_table_glosry.htm "Glossary Entry") DEMO\_DBTAB\_DRAFT is defined.
-   The [total ETag](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_etag.htm) field Time stamp is defined in the correct position, namely directly after the lock master
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
    DATA(out) = cl\_demo\_output=>new(  ).
    DELETE FROM demo\_dbtab\_root.
    DELETE FROM demo\_dbtab\_draft.
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_1
      ENTITY ParentEntity
        CREATE FROM
        VALUE #( (
                   %cid = 'cid1'
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
        MAPPED DATA(create\_mapped)
        FAILED DATA(create\_failed)
        REPORTED DATA(create\_reported).
    COMMIT ENTITIES.
    SELECT \*
      FROM demo\_dbtab\_draft
      INTO TABLE @DATA(draft\_parent).
    SELECT \*
      FROM demo\_dbtab\_root
      INTO TABLE @DATA(active\_parent).
    MODIFY ENTITIES OF demo\_rap\_managed\_draft\_1
    ENTITY ParentEntity
      EXECUTE Activate FROM
      VALUE #( ( %key-KeyFieldRoot = 81000 )
               ( %key-KeyFieldRoot = 81001 ) )
      REPORTED DATA(activate\_reported)
      FAILED DATA(activate\_failed)
      MAPPED DATA(activate\_mapped).
    COMMIT ENTITIES.
    SELECT \*
     FROM demo\_dbtab\_draft
     INTO TABLE @DATA(draft\_parent\_1).
    SELECT \*
      FROM demo\_dbtab\_root
      INTO TABLE @DATA(active\_parent\_1).
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

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   Two draft instances are created with the statement MODIFY ENTITY.
-   The draft action Activate is executed on both instances with the statement EXECUTE.
-   Using the ABAP SQL SELECT statement, the content of the draft and persistent table before and after activation is displayed. Before the activation, the draft table contains the two new draft instances. After the activation, the instances are copied to the persistent table and the content from the draft table is cleared.