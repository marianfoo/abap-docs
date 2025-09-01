  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm) →  [CDS BDL - draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm) →  [CDS BDL - Examples of draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action_abexas.htm) → 

CDS BDL - draft actions Edit, Discard, Prepare

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as shown below. It is draft-enabled and strict mode is switched on. Therefore, it is mandatory to explicitly declare all draft actions.

The determination setCharField is defined. It is executed on save whenever the field Timestamp is modified. It is implemented in the ABAP behavior pool and it sets the value of the field CharFieldRoot of the respective entity instance to 'A'.

managed implementation in class bp\_demo\_rap\_managed\_draft\_acti unique;
strict;
with draft;
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS alias ParentEntity
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
authorization master ( instance )
{
  create;
  update;
  delete;
  determination setCharField on save { field Timestamp; }
  draft action ( authorization : none ) Edit;
  draft action Activate;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare
  { determination ( always ) setCharField; }
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

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_MANAGED\_DRAFT\_ACTI. This global class implements the local handler class LHC\_PARENTENTITY, which contains the method setCharField to implement the determination. The actual implementation takes place in the CCIMP include. It sets the value of the field CharFieldRoot of the respective entity instance to 'A'.

Source Code

REPORT demo\_rap\_managed\_draft\_actions.
CLASS demo DEFINITION.
PUBLIC SECTION.
  CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
METHOD main.
DATA(out) = cl\_demo\_output=>new(  ).
DELETE FROM demo\_dbtab\_root.
DELETE FROM demo\_dbtab\_draft.
MODIFY ENTITIES OF demo\_rap\_managed\_draft\_actions
      ENTITY ParentEntity
        CREATE FROM
        VALUE #( (  %is\_draft          = if\_abap\_behv=>mk-off
               %control-KeyFieldRoot = if\_abap\_behv=>mk-on
               %data-KeyFieldRoot    = 11 )
                 ( %is\_draft          = if\_abap\_behv=>mk-off
               %control-KeyFieldRoot = if\_abap\_behv=>mk-on
               %data-KeyFieldRoot    = 22 ) )
  REPORTED DATA(create\_reported)
  FAILED DATA(create\_failed)
  MAPPED DATA(create\_mapped).
COMMIT ENTITIES.
DELETE FROM demo\_dbtab\_draft.
MODIFY ENTITIES OF demo\_rap\_managed\_draft\_actions
  ENTITY ParentEntity
    EXECUTE Edit FROM
    VALUE #( ( %key-KeyFieldRoot           = 11
               %param-preserve\_changes = 'false' )
               ( %key-KeyFieldRoot           = 22
               %param-preserve\_changes = 'false' ) )
  REPORTED DATA(edit\_reported)
  FAILED DATA(edit\_failed)
  MAPPED DATA(edit\_mapped).
COMMIT ENTITIES.
SELECT \*
     FROM demo\_dbtab\_draft
     INTO TABLE @DATA(draft\_table).
SELECT \*
FROM demo\_dbtab\_root
INTO TABLE @DATA(root\_table).
out->next\_section( 'active table'
)->write( root\_table
)->next\_section( 'draft table after Edit'
)->write( draft\_table ).
\* )->display(  ).
MODIFY ENTITIES OF demo\_rap\_managed\_draft\_actions
  ENTITY ParentEntity
    EXECUTE Prepare FROM
    VALUE #( ( %key-KeyFieldRoot = 11 )
             ( %key-KeyFieldRoot = 22 ) )
  REPORTED DATA(resume\_reported)
  FAILED DATA(resume\_failed)
  MAPPED DATA(resume\_mapped).
COMMIT ENTITIES.
SELECT \*
     FROM demo\_dbtab\_draft
     INTO TABLE @DATA(draft\_table\_1).
out->next\_section( 'draft table after Prepare'
)->write( draft\_table\_1 ).
MODIFY ENTITIES OF demo\_rap\_managed\_draft\_actions
     ENTITY ParentEntity
    EXECUTE Discard FROM
   VALUE #( ( %key-KeyFieldRoot = 11 )
   ( %key-KeyFieldRoot = 22 ) )
REPORTED create\_reported
FAILED create\_failed
MAPPED create\_mapped.
COMMIT ENTITIES.
SELECT \*
   FROM demo\_dbtab\_draft
   INTO TABLE @DATA(draft\_table\_2).
out->next\_section( 'draft table after Discard'
)->write( draft\_table\_2
)->display(  ).
ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   Two active BO instances are created with the statement MODIFY ENTITY.
-   The draft action Edit is executed on both instances with the statement EXECUTE. No changes are made, the only effect of the draft action Edit in this example is that the active instances are copied to the draft database table.
-   The draft action Prepare is executed for the two draft instances that were copied from the persistent table to the draft table during the Edit. The assigned determination setCharField is executed and it inserts a value into field CharFieldRoot.
-   The draft action Discard is executed. It deletes both instances from the draft database table.
-   Using the ABAP SQL SELECT statement, the content of the draft and persistent tables are displayed. It can be seen that the draft action Edit copies the active BO instances to the draft database table. The action Prepare fills the field CharFieldRoot of the draft database table. The draft action Discard deletes the instances from the draft database table.