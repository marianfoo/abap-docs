---
title: "RAP - RAP BO Extension Using Interface"
description: |
  This example demonstrates a RAP BO extension via a RAP BO interface. Base RAP BO Data model The CDS data model consists of four nodes which form a hierarchical CDS composition tree. They are connected via CDS compositions. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED @EndUserText.l
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_using_interface_abexa.htm"
abapFile: "abenbdl_using_interface_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "abenbdl", "using", "interface", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension_syntax.htm) →  [RAP - using interface, Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_using_interface.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20RAP%20BO%20Extension%20Using%20Interface%2C%20ABENBDL_USING_INTERFACE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

RAP - RAP BO Extension Using Interface

This example demonstrates a RAP BO extension via a RAP BO interface.

Base RAP BO   

Data model

The CDS data model consists of four nodes which form a hierarchical CDS composition tree. They are connected via CDS compositions.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS root view entity, extensibility demo'
define root view entity DEMO\_RAP\_EXTENSIBLE\_ROOT
  as select from demo\_dbtab\_root
  composition of exact one to many DEMO\_RAP\_EXTENSIBLE\_CHILD as \_child
{
  key demo\_dbtab\_root.key\_field      as KeyField,
      demo\_dbtab\_root.data\_field     as DataField,
      @Consumption.hidden
      demo\_dbtab\_root.char\_field     as CharField,
      demo\_dbtab\_root.char\_field\_2   as CharField2,
      demo\_dbtab\_root.dec\_field      as DecField,
      demo\_dbtab\_root.crea\_date\_time as Timestamp,
      demo\_dbtab\_root.lchg\_date\_time as LastChangedAt,
      \_child
}

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, child'
define view entity DEMO\_RAP\_EXTENSIBLE\_CHILD
  as select from demo\_dbtab\_child
  association to parent DEMO\_RAP\_EXTENSIBLE\_ROOT   as \_parent  
    on $projection.KeyField = \_parent.KeyField
  composition of exact one to many DEMO\_RAP\_EXTENSIBLE\_GRCHLD as \_grchld
{
  key demo\_dbtab\_child.key\_field       as KeyField,
  key demo\_dbtab\_child.key\_field\_child as KeyFieldChild,
      demo\_dbtab\_child.data\_field      as DataField,
      demo\_dbtab\_child.char\_field      as CharField,
      \_parent,
      \_grchld
}

Grandchild entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, grandchild'
define view entity DEMO\_RAP\_EXTENSIBLE\_GRCHLD
  as select from demo\_dbtab\_grchl
  composition of exact one to many DEMO\_RAP\_EXTENSIBLE\_GGCHLD as \_child
  association        to parent DEMO\_RAP\_EXTENSIBLE\_CHILD  as \_parent
    on  $projection.KeyField      = \_parent.KeyField
    and $projection.KeyFieldChild = \_parent.KeyFieldChild
  association to exact one DEMO\_RAP\_EXTENSIBLE\_ROOT   as \_GrandParent
    on  $projection.KeyField = \_GrandParent.KeyField
{
  key demo\_dbtab\_grchl.key\_field        as KeyField,
  key demo\_dbtab\_grchl.key\_field\_child  as KeyFieldChild,
  key demo\_dbtab\_grchl.key\_field\_grchld as KeyFieldGrchld,
      demo\_dbtab\_grchl.data\_field       as DataField,
      demo\_dbtab\_grchl.char\_field       as CharField,
      \_parent,
      \_GrandParent,
      \_child
}

Great-grandchild entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Great-grandchild'
define view entity DEMO\_RAP\_EXTENSIBLE\_GGCHLD
  as select from demo\_dbtab\_ggchl
  association     to parent DEMO\_RAP\_EXTENSIBLE\_GRCHLD  
                                                  as \_parent            
    on  $projection.KeyField       = \_parent.KeyField
    and $projection.KeyFieldChild  = \_parent.KeyFieldChild
    and $projection.KeyFieldGrchld = \_parent.KeyFieldGrchld
  association     to DEMO\_RAP\_EXTENSIBLE\_CHILD    as \_GrandParent      
    on  $projection.KeyField      = \_GrandParent.KeyField
    and $projection.KeyFieldChild = \_GrandParent.KeyFieldChild
  association \[1..1\] to DEMO\_RAP\_EXTENSIBLE\_ROOT  as \_GreatGrandParent
    on  $projection.KeyField = \_GreatGrandParent.KeyField
{
  key key\_field        as KeyField,
  key key\_field\_child  as KeyFieldChild,
  key key\_field\_grchld as KeyFieldGrchld,
  key key\_field\_ggchld as KeyFieldGgchld,
      data\_field       as DataField,
      char\_field       as CharField,
      \_parent,
      \_GrandParent,
      \_GreatGrandParent
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_EXTENSIBLE\_ROOT is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as shown below. It defines a managed, draft-enabled RAP BO with multiple extension points.

managed implementation in class bp\_demo\_rap\_extensible\_root unique;
strict(2);
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
with draft;
define behavior for DEMO\_RAP\_EXTENSIBLE\_ROOT alias Root
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_exdrf
lock master
total etag Timestamp
authorization master ( instance )
extensible
etag master LastChangedAt
{
  create;
  update;
  delete;
  association \_child { create; with draft; }
  draft action ( authorization : none ) Edit;
  draft action Activate optimized;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare extensible;
  field(readonly:update) KeyField;
  mapping for demo\_dbtab\_root
  {
    KeyField = key\_field;
    DataField = data\_field;
    CharField = char\_field;
    CharField2 = char\_field\_2;
    DecField = dec\_field;
    Timestamp = crea\_date\_time;
    LastChangedAt = lchg\_date\_time;
  }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_CHILD alias Child
persistent table demo\_dbtab\_child
draft table demo\_dbtab\_exchl
(lock, etag, authorization) dependent by \_parent
extensible
{
  update;
  delete;
  field ( readonly ) KeyField;
  association \_parent { with draft; }
  association \_grchld { create; with draft; }
  field(readonly:update) KeyFieldChild;
  mapping for demo\_dbtab\_child
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    DataField = data\_field;
    CharField = char\_field;
  }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_GRCHLD alias GrandChild
persistent table demo\_dbtab\_grchl
draft table demo\_dbtab\_grch
(lock,authorization,etag) dependent by \_GrandParent
extensible
{
  update;
  delete;
  field ( readonly ) KeyField, KeyFieldChild;
  association \_GrandParent { with draft; }
  association \_parent { with draft; }
  association \_child { create; with draft; }
  field(readonly:update) KeyFieldGrchld;
  mapping for demo\_dbtab\_grchl
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    KeyFieldGrchld = key\_field\_grchld;
    DataField = data\_field;
    CharField = char\_field;
  }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_GGCHLD alias GreatGrandChild
persistent table demo\_dbtab\_ggchl
draft table demo\_dbtab\_ggrch
(lock, authorization, etag) dependent by \_GreatGrandParent
extensible
{
  update;
  delete;
  field ( readonly ) KeyField, KeyFieldChild, KeyFieldGrChld;
  association \_GrandParent { with draft; }
  association \_parent { with draft; }
  association \_GreatGrandParent { with draft; }
  field(readonly:update) KeyFieldGgchld;
  mapping for demo\_dbtab\_ggchl
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    KeyFieldGrchld = key\_field\_grchld;
    KeyFieldGgchld = key\_field\_ggchld;
    DataField = data\_field;
    CharField = char\_field;
  }
}

Behavior implementation

For the RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_EXTENSIBLE\_ROOT, see CCIMP include. It implements the method get\_instance\_authorizations for instance authorization control. It returns information on whether update and delete operations are allowed on instances. In this example, these operations are not allowed if CharField has a particular value.

Note: This is a simple example that serves demonstration purposes.

RAP BO Interface   

CDS data model projection

Root node projection:

@EndUserText.label: 'CDS transactional interface'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_RAP\_EXT\_USING\_INTERFACE
  provider contract transactional\_interface
  as projection on DEMO\_RAP\_EXTENSIBLE\_ROOT
{
  key KeyField as KeyInt,
      DataField as DataInt,
      CharField as CharInt,
      DecField as DecInt,
      \_child:  
        redirected to composition child DEMO\_RAP\_EXT\_USING\_INT\_CHILD
}

Child node projection:

@EndUserText.label: 'CDS transactional interface'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_RAP\_EXT\_USING\_INT\_CHILD  
as projection on DEMO\_RAP\_EXTENSIBLE\_CHILD {
  key KeyField,
  key KeyFieldChild,
  DataField,
  CharField,
  /\* Associations \*/
  \_grchld:  
    redirected to composition child DEMO\_RAP\_EXT\_USING\_INT\_GRCHLD,
  \_parent: redirected to parent DEMO\_RAP\_EXT\_USING\_INTERFACE
}

Projection of grandchild node:

@EndUserText.label: 'CDS transactional interface'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_RAP\_EXT\_USING\_INT\_GRCHLD  
as projection on DEMO\_RAP\_EXTENSIBLE\_GRCHLD {
  key KeyField,
  key KeyFieldChild,
  key KeyFieldGrchld,
  DataField,
  CharField,
  /\* Associations \*/
  \_child:  
    redirected to composition child DEMO\_RAP\_EXT\_USING\_INT\_GGCHLD,
//  \_Children4Ext,
  \_GrandParent: redirected to DEMO\_RAP\_EXT\_USING\_INTERFACE,
  \_parent: redirected to parent DEMO\_RAP\_EXT\_USING\_INT\_CHILD
}

Projection of great-grandchild node:

@EndUserText.label: 'CDS transactional interface'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_RAP\_EXT\_USING\_INT\_GGCHLD  
as projection on DEMO\_RAP\_EXTENSIBLE\_GGCHLD {
  key KeyField,
  key KeyFieldChild,
  key KeyFieldGrchld,
  key KeyFieldGgchld,
  DataField,
  CharField,
  /\* Associations \*/
  \_GrandParent: redirected to DEMO\_RAP\_EXT\_USING\_INT\_CHILD,
  \_GreatGrandParent: redirected to DEMO\_RAP\_EXT\_USING\_INTERFACE,
  \_parent: redirected to parent DEMO\_RAP\_EXT\_USING\_INT\_GRCHLD
}

RAP interface behavior definition

The following interface BDEF projects the base RAP BO.

interface;
use draft;
extensible;
define behavior for DEMO\_RAP\_EXT\_USING\_INTERFACE alias RootInterface
{
  use create;
  use update;
  use delete;
  use action Edit;
  use action Activate;
  use action Discard;
  use action Resume;
  use action Prepare;
  use association \_child { create; with draft; }
}
define behavior for DEMO\_RAP\_EXT\_USING\_INT\_CHILD alias ChildInterface
{
  use update;
  use delete;
  use association \_parent { with draft; }
  use association \_grchld { create; with draft; }
}
define behavior for DEMO\_RAP\_EXT\_USING\_INT\_GRCHLD alias GrandChildInterface
{
  use update;
  use delete;
  use association \_GrandParent { with draft; }
  use association \_parent { with draft; }
  use association \_child { create; with draft; }
}
define behavior for DEMO\_RAP\_EXT\_USING\_INT\_GGCHLD alias GreatGrandChildInterface
{
  use update;
  use delete;
  use association \_GrandParent { with draft; }
  use association \_parent { with draft; }
  use association \_GreatGrandParent { with draft; }
}

BDEF Extension   

The BDEF extension DEMO\_RAP\_EXT\_USING\_INTERF extends the RAP BO via its interface. It addresses the root node by its interface name, RootInterface. It adds one extension action to the RAP BO.

extension using interface DEMO\_RAP\_EXT\_USING\_INTERFACE
implementation in class bp\_demo\_rap\_ext\_using\_interf unique;
extend behavior for RootInterface {
action (authorization : instance) SetValue\_ext;
}
extend behavior for ChildInterface {
}
extend behavior for GrandChildInterface {
}
extend behavior for GreatGrandChildInterface {
}

Extension ABP

The extension action setValue\_ext is implemented in the extension ABP, see CCIMP include. When executed, it changes the value of field CharInt.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_ext\_via\_interface DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_ext\_via\_interface IMPLEMENTATION.
  METHOD main.
    "Empty tables
    DELETE FROM demo\_dbtab\_root.
    MODIFY ENTITIES OF demo\_rap\_ext\_using\_interface
    ENTITY rootinterface
    CREATE FIELDS ( keyint dataint charint )
    WITH VALUE #( ( %cid = 'cid1'
                    keyint = 1
                    dataint = \`aaa\`
                    charint = 'AAA' )
                    ( %cid = 'cid2'
                    keyint = 2
                    dataint = \`bbb\`
                    charint = 'BBB' )  )
     MAPPED FINAL(mapped)
     FAILED DATA(failed)
     REPORTED DATA(reported).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, data\_field, char\_field
    FROM  demo\_dbtab\_root
    INTO TABLE @FINAL(create\_root).
    MODIFY ENTITIES OF demo\_rap\_ext\_using\_interface
      ENTITY rootinterface
      EXECUTE setvalue\_ext
      FROM VALUE #( ( keyint = 1 ) )
      FAILED failed
      REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, data\_field, char\_field
      FROM  demo\_dbtab\_root
      INTO TABLE @FINAL(action\_setvalue\_ext).
    "Display
    out->next\_section( 'CREATE (root entity)'
            )->write( create\_root
            )->next\_section( 'Execute action'
            )->write( action\_setvalue\_ext ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses ABAP SQL and [ABAP EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP BO interface from an ABAP class and performs the following steps:

-   It creates two instances of the root entity.
-   It executes the action setValue\_ext for one of the instances.
-   The content of the database table after the create operation and after the action is displayed.