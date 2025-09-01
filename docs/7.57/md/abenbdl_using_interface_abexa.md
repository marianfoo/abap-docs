  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - Base BDEF Extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) →  [CDS BDL - extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)) →  [CDS BDL - using interface, Extension](javascript:call_link\('abenbdl_using_interface.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - RAP BO Extension Using Interface, ABENBDL_USING_INTERFACE_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - RAP BO Extension Using Interface

This example demonstrates a RAP BO extension via a RAP BO interface.

Original RAP BO   

Data model

The CDS data model consists of four nodes which form a hierarchical CDS composition tree. They are connected via CDS compositions.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS root view entity, extensibility demo'
define root view entity DEMO\_RAP\_EXTENSIBLE\_ROOT
  as select from demo\_dbtab\_root
  composition \[0..\*\] of DEMO\_RAP\_EXTENSIBLE\_CHILD as \_child
{
  key demo\_dbtab\_root.key\_field      as KeyField,
      demo\_dbtab\_root.data\_field     as DataField,
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
  composition \[0..\*\] of DEMO\_RAP\_EXTENSIBLE\_GRCHLD as \_grchld
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
  composition \[0..\*\] of DEMO\_RAP\_EXTENSIBLE\_GGCHLD as \_child
  association        to parent DEMO\_RAP\_EXTENSIBLE\_CHILD  as \_parent
    on  $projection.KeyField      = \_parent.KeyField
    and $projection.KeyFieldChild = \_parent.KeyFieldChild
  association \[1..1\] to DEMO\_RAP\_EXTENSIBLE\_ROOT   as \_GrandParent
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

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_RAP\_EXTENSIBLE\_ROOT is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as shown below. It defines a managed, draft-enabled RAP BO with multiple extension points.

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
  draft action Activate;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare extensible;
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

For the CDS behavior definition, one [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_EXTENSIBLE\_ROOT, see CCIMP include. It implements the method get\_instance\_authorizations for instance authorization control. It returns information on whether update and delete operations are allowed on instances. In this example, these operations are not allowed if CharField has a particular value.

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

CDS interface behavior definition

The following interface BDEF projects the original RAP BO.

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
action SetValue\_ext;
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

REPORT demo\_rap\_ext\_via\_interface.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    "Empty tables
    DELETE FROM demo\_dbtab\_root.
    MODIFY ENTITIES OF DEMO\_RAP\_EXT\_USING\_INTERFACE
    ENTITY RootInterface
    CREATE FIELDS ( KeyInt DataInt CharInt )
    WITH VALUE #( ( %cid = 'cid1'
                    KeyInt = 1
                    DataInt = \`aaa\`
                    CharInt = 'AAA' )
                    ( %cid = 'cid2'
                    KeyInt = 2
                    DataInt = \`bbb\`
                    CharInt = 'BBB' )  )
     MAPPED FINAL(mapped)
     FAILED DATA(failed)
     REPORTED DATA(reported).
    COMMIT ENTITIES.
    SELECT key\_field, data\_field, char\_field
    FROM  demo\_dbtab\_root
    INTO TABLE @FINAL(create\_root).
    MODIFY ENTITIES OF DEMO\_RAP\_EXT\_USING\_INTERFACE
      ENTITY RootInterface
      EXECUTE SetValue\_ext
      FROM VALUE #( ( KeyInt = 1 ) )
      FAILED failed
      REPORTED reported.
    COMMIT ENTITIES.
  SELECT key\_field, data\_field, char\_field
    FROM  demo\_dbtab\_root
    INTO TABLE @FINAL(action\_setValue\_ext).
    "Display
    out->next\_section( 'CREATE (root entity)'
            )->write( create\_root
            )->next\_section( 'Execute action'
            )->write( action\_setValue\_ext
            )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses ABAP SQL and [ABAP EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP BO interface from an ABAP program and performs the following steps:

-   It creates two instances of the root entity.
-   It executes the action setValue\_ext for one of the instances.
-   The content of the database table after the create operation and after the action is displayed.