  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_syntax.htm) →  [RAP - Extension Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh_extend.htm) →  [RAP - ancestor association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_ancestor_ext.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Node%20Extension%2C%20ABENBDL_ASSOC_EXT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Node Extension

This example demonstrates how to add an extension node with behavior to a RAP BO.

Original RAP BO   

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

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_EXTENSIBLE\_ROOT is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as shown below. It defines a managed, draft-enabled RAP BO with multiple extension points.

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

For the RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_EXTENSIBLE\_ROOT, see CCIMP include. It implements the method get\_instance\_authorizations for instance authorization control. It returns information on whether update and delete operations are allowed on instances. In this example, these operations are not allowed if CharField has a particular value.

Note: This is a simple example that serves demonstration purposes.

Extension RAP BO   

CDS data model extension

One extension node is added to the RAP BO on the hierarchy level of the great-grandchild: DEMO\_RAP\_EXTENSIBLE\_EXT. It defines associations to all four original nodes.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, extension node'
define view entity DEMO\_RAP\_EXTENSIBLE\_EXT
  as select from demo\_ggchl\_ex\_ba
  association        to parent DEMO\_RAP\_EXTENSIBLE\_GRCHLD  
                                                  as \_parent            
    on  $projection.Keyfield       = \_parent.KeyField
    and $projection.Keyfieldchild  = \_parent.KeyFieldChild
    and $projection.Keyfieldgrchld = \_parent.KeyFieldGrchld
  association        to DEMO\_RAP\_EXTENSIBLE\_GGCHLD
                                                  as \_Sibling4          
    on  $projection.Keyfield       = \_Sibling4.KeyField
    and $projection.Keyfieldchild  = \_Sibling4.KeyFieldChild
    and $projection.Keyfieldgrchld = \_Sibling4.KeyFieldGrchld
    and $projection.Keyfieldggchld = \_Sibling4.KeyFieldGgchld
  association \[1..1\] to DEMO\_RAP\_EXTENSIBLE\_ROOT  as \_GreatGrandParent1
    on  $projection.Keyfield = \_GreatGrandParent1.KeyField
  association        to DEMO\_RAP\_EXTENSIBLE\_CHILD as \_GrandParent2      
    on  $projection.Keyfield      = \_GrandParent2.KeyField
    and $projection.Keyfieldchild = \_GrandParent2.KeyFieldChild
{
  key key\_field                      as Keyfield,
  key key\_field\_child                 as Keyfieldchild,
  key key\_field\_grchld                as Keyfieldgrchld,
  key key\_field\_ggchld                as Keyfieldggchld,
      data\_field                     as Datafield,
      char\_field                     as Charfield,
      \_GreatGrandParent1.Timestamp   as Timestamp,
      \_parent,
      \_Sibling4,
      \_GreatGrandParent1,
      \_GrandParent2
}

The direct parent entity of the extension node DEMO\_RAP\_EXTENSIBLE\_GRCHLD is extended. The extension defines and exposes a to-child association to the extension node.

extend view entity DEMO\_RAP\_EXTENSIBLE\_GRCHLD with
composition of exact one to many DEMO\_RAP\_EXTENSIBLE\_EXT as \_Children4Ext  
{
  \_Children4Ext
}

BDEF extension

The BDEF extension DEMO\_RAP\_EXTENSION\_1 adds the extension node to the RAP BO. It adds behavior to the extension node with the define behavior for syntax. It uses the syntax ancestor association for all associations except the one that leads to the direct parent node.

extension using interface demo\_rap\_ext\_using\_interface;
foreign entity demo\_rap\_factory\_ACTION;
extend behavior for GrandChildInterface
{
  association \_Children4Ext { create; with draft; }
}
define behavior for DEMO\_RAP\_EXTENSIBLE\_EXT alias ExtNode
  using DEMO\_RAP\_EXT\_USING\_INT\_EXT
persistent table demo\_ggchl\_ex\_ba
draft table demo\_ggrch\_ext
etag master Timestamp
( lock, authorization ) dependent
{
  update;
  delete;
  field ( readonly )
  KeyField, KeyFieldchild, Keyfieldgrchld;
  field ( readonly : update ) Keyfieldggchld;
  association \_parent { with draft; }
  association \_Sibling4 { with draft; }
  ancestor association \_GrandParent2 { with draft; }
  ancestor association \_GreatGrandParent1 { with draft; }
  mapping for demo\_ggchl\_ex\_ba
  {
    Keyfield = key\_field;
    Keyfieldchild = key\_field\_child;
    Keyfieldgrchld = key\_field\_grchld;
    Keyfieldggchld = key\_field\_ggchld;
    Datafield = data\_field;
    Charfield = char\_field;
  }
}

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_node\_extension DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_node\_extension IMPLEMENTATION.
  METHOD main.
    "Empty tables
    DELETE FROM demo\_dbtab\_root.
    DELETE FROM demo\_dbtab\_exdrf.
    DELETE FROM demo\_dbtab\_child.
    DELETE FROM demo\_dbtab\_exchl.
    DELETE FROM demo\_dbtab\_grchl.
    DELETE FROM demo\_dbtab\_grch.
    DELETE FROM demo\_dbtab\_ggchl.
    DELETE FROM demo\_dbtab\_ggrch.
    DELETE FROM demo\_ggchl\_ex\_ba.
    DELETE FROM demo\_ggrch\_ext.
    "Deep Create
    MODIFY ENTITIES OF demo\_rap\_ext\_using\_interface
    ENTITY RootInterface
    CREATE FIELDS ( KeyInt DataInt CharInt DecInt )
    WITH VALUE #( ( %cid = 'cid1'
                    KeyInt = 1
                    DataInt = 'aaa'
                    CharInt = 'AAA'
                    DecInt = 500 ) )
     CREATE BY \\\_child FIELDS ( KeyFieldChild DataField CharField )
     WITH VALUE #( ( %cid\_ref = 'cid1'
                     %target = VALUE #( ( %cid = 'cid2'
                                          KeyFieldChild = 11
                                          DataField = 'child'
                                          CharField = 'BBB' ) ) ) )
     ENTITY ChildInterface
     CREATE BY \\\_grchld FIELDS ( KeyFieldGrchld DataField CharField )
     WITH VALUE #( ( %cid\_ref = 'cid2'
                     %target = VALUE #( ( %cid = 'cid3'
                                          KeyFieldGrchld = 111
                                          DataField = 'grandchild'
                                          CharField = 'CCC'  ) ) ) )
     ENTITY GrandChildInterface
     CREATE BY \\\_child FIELDS ( KeyFieldGgchld DataField CharField )
     WITH VALUE #( ( %cid\_ref = 'cid3'
                     %target = VALUE #( ( %cid = 'cid4'
                                          KeyFieldGgchld = 1111
                                          DataField = 'greatgrandchild'
                                          CharField = 'eee'  ) ) ) )
     ENTITY GrandChildInterface
     CREATE BY \\\_Children4Ext
     FIELDS ( Keyfieldggchld DataField CharField )
     WITH VALUE #( ( %cid\_ref = 'cid3'
                     %target =
                     VALUE #( ( %cid = 'cid5'
                                Keyfieldggchld = 1111
                                DataField = 'extension'
                                CharField = 'extension'  ) ) ) )
     MAPPED DATA(mapped)
     FAILED DATA(failed)
     REPORTED DATA(reported).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    MODIFY ENTITIES OF demo\_rap\_ext\_using\_interface
    ENTITY ExtNode
    UPDATE
    FIELDS ( Datafield ) WITH VALUE #( ( KeyField = 1
                               Keyfieldchild = 11
                               Keyfieldgrchld = 111
                               Keyfieldggchld = 1111
                               DataField = 'update' ) )
                    MAPPED mapped
                    FAILED failed
                    REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \*
    FROM demo\_dbtab\_root
    INTO TABLE @FINAL(root\_tab).
    SELECT \*
    FROM demo\_dbtab\_child
    INTO TABLE @FINAL(child\_tab).
    SELECT \*
    FROM demo\_dbtab\_grchl
    INTO TABLE @FINAL(grandchild\_tab).
    SELECT \*
    FROM demo\_dbtab\_ggchl
    INTO TABLE @FINAL(greatgrandchild\_tab).
    SELECT \*
    FROM demo\_ggchl\_ex\_ba
    INTO TABLE @FINAL(extension\_node).
    "Display
    out->next\_section( 'CREATE (root entity)'
            )->write( root\_tab
            )->next\_section( 'CREATE BY assoc (child entity)'
            )->write( child\_tab
            )->next\_section( 'CREATE BY assoc (grandchild)'
            )->write( grandchild\_tab
            )->next\_section( 'CREATE BY assoc (great-grandchild)'
            )->write( greatgrandchild\_tab
            )->next\_section( 'CREATE BY assoc (extension node)'
            )->write( extension\_node ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses ABAP SQL and [ABAP EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") from an ABAP class and performs the following steps:

-   It performs a deep create, that means, it creates an instance of each entity of the composition tree, including the extension node.
-   It performs an update operation on the extension node. The instance authorization control for update operations, which is implemented in the ABP of the extended RAP BO, is checked and the update operation succeeds.
-   All five database tables used to store the entity data are displayed.