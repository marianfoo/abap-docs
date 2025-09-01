---
title: "CDS BDL - BDEF Projection Extension, Node Extension"
description: |
  This example demonstrates how the behavior of a projection BDEF is extended by means of a projection BDEF extension. Original RAP BO Data model The CDS data model consists of one root node without child entities: @AccessControl.authorizationCheck: #NOT_REQUIRED @EndUserText.label: 'CDS view entity,
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_entity_proj_ext_abexa.htm"
abapFile: "abenbdl_entity_proj_ext_abexa.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "method", "class", "data", "abenbdl", "entity", "proj", "ext", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) →  [CDS BDL - BDEF Projection Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_projection.htm) →  [CDS BDL - extension for projection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_for_projection.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - BDEF Projection Extension, Node Extension, ABENBDL_ENTITY_PROJ_EXT_ABEXA, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - BDEF Projection Extension, Node Extension

This example demonstrates how the behavior of a projection BDEF is extended by means of a projection BDEF extension.

Original RAP BO   

Data model

The CDS data model consists of one root node without child entities:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, beh ext'
define root view entity DEMO\_RAP\_BEH\_EXT
  as select from demo\_dbtab\_field
{
  key key\_field,
      char\_field1,
      int\_field1,
      int\_field2
}

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_BEH\_EXT is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as shown below. It defines implementation-relevant components and extension points.

managed implementation in class bp\_demo\_rap\_beh\_ext unique;
strict(2);
extensible { with determinations on modify; }
with privileged mode disabling ac\_core;
define behavior for DEMO\_RAP\_BEH\_EXT
persistent table DEMO\_DBTAB\_FIELD
lock master
authorization master ( global )
extensible
{
  create;
  update (features:instance);
  delete;
  validation Limit on save { create; }
}
define authorization context ac\_core
{ 'AUTHOBJ1'; }
define own authorization context by privileged mode;

Behavior implementation

For the CDS behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_BEH\_EXT, see CCIMP include. This global class implements the following methods:

-   get\_instance\_features: Instance feature control for the standard operation update. If the value of field int\_field1 is more than 50, updates are not allowed. If the value is equal to or smaller than 50, updates are allowed.
-   get\_global\_authorizations: Global authorization control defines that create, update, and delete are always allowed.
-   Limit: Validation that checks the value of field int\_field2. If the value is greater than 500, the validation fails and the entity instance is not saved.

Extension RAP BO   

Data model extension

A child node is added to the RAP BO:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, beh ext'
define view entity DEMO\_RAP\_BEH\_EXT\_CHILD
  as select from demo\_dbtab\_fi\_ch
  association to parent DEMO\_RAP\_BEH\_EXT as \_parent  
    on $projection.key\_field = \_parent.key\_field
{
  key key\_field,
  key key\_field\_child,
      char\_field1,
      int\_field1,
      int\_field3,
      \_parent
}

A composition association is added to the root node via a CDS view entity extension:

extend view entity DEMO\_RAP\_BEH\_EXT with  
composition \[0..\*\] of DEMO\_RAP\_BEH\_EXT\_CHILD as \_child
{
  \_child
}

Behavior extension

The BDEF extension DEMO\_RAP\_BEH\_EXT\_CH extends the root node and defines behavior for the extension child node.

extension implementation in class bp\_demo\_rap\_beh\_ext\_ch unique;
extend behavior for DEMO\_RAP\_BEH\_EXT {
association \_child {create;}
action (features:global) setValue result \[1\] $self;
}
define behavior for DEMO\_RAP\_BEH\_EXT\_CHILD
persistent table demo\_dbtab\_fi\_ch
( lock, authorization ) dependent
{
update;
delete;
field(readonly) key\_field;
association \_parent;
determination myDet on modify {field int\_field3;}
action ActionExt;
}

ABP extension

The ABP extension is implemented in the global class BP\_DEMO\_RAP\_BEH\_EXT\_CH, see CCIMP include. This global class implements the following methods:

-   Extension of the parent entity
    -   get\_global\_features: Global feature control for the action setValue. This action can only be executed in the time period between 6 am and 10 pm (day shift).
    -   get\_global\_authorizations: The original RAP BO defines global authorization control. RAP BO operations added via an extension require their own implementation of the global authorization control. This method generally allows execution of the method setValue. There are no access restrictions.
    -   setValue: Action that sets field int\_field2 to value 888.
-   Extension entity behavior definition for the child entity
    -   get\_global\_authorizations: The original RAP BO defines global authorization control. For the action ActionExt, defined in the child node, a separate implementation of the authorization control method is required. The implementation generally allows execution of the method ActionExt. There are no access restrictions.
    -   myDet: Determination on modify. Sets the value of field int\_field1 to 777.
    -   ActionExt: Action that updates field char\_field1 for all requested entity instances.

Projection Layer   

Data model projection

Projection of the root node:

@EndUserText.label: 'CDS root pv, RAP extensibility'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_rap\_proj\_ext\_beh  
provider contract transactional\_query
as projection on DEMO\_RAP\_BEH\_EXT {
  key key\_field,
  char\_field1,
  int\_field1,
  int\_field2
}

Projection of the child node:

@EndUserText.label: 'CDS pv child,RAP projection extension'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_RAP\_PROJ\_EXT\_BEH\_CH
  as projection on DEMO\_RAP\_BEH\_EXT\_CHILD
{
  key key\_field,
  key key\_field\_child,
      char\_field1,
      int\_field1,
      int\_field3,
        \_parent: redirected to parent demo\_rap\_proj\_ext\_beh  
}

View entity extension DEMO\_RAP\_VE\_EXTENSION that establishes a composition between original root node and extended child node:

extend view entity demo\_rap\_proj\_ext\_beh with {
  /\* Associations \*/
  \_child : redirected to composition child DEMO\_RAP\_PROJ\_EXT\_BEH\_CH
}

Behavior Projection

The projection BDEF defines behavior for the root node. It declares the root node as extensible and exposes the RAP BO standard operations.

projection;
strict(2);
extensible;
define behavior for demo\_rap\_proj\_ext\_beh alias Root
extensible
{
  use create;
  use update;
  use delete;
}

BDEF projection extension

The BDEF projection extension DEMO\_RAP\_PROJ\_EXT\_BEH\_1 extends the root node and defines behavior for the extension child node.

extension for projection;
extend behavior for Root
{
  use association \_child {create;}
  use action setValue;
  mapping for demo\_rap\_struc corresponding;
}
define behavior for DEMO\_RAP\_PROJ\_EXT\_BEH\_CH alias Child
{
  use association \_parent;
  use action ActionExt;
  field ( readonly ) int\_field3;
}

Source Code   

REPORT demo\_rap\_proj\_ext.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    "Empty tables
    DELETE FROM demo\_dbtab\_field.
    DELETE FROM demo\_dbtab\_fi\_ch.
    CLEAR bp\_demo\_unmanaged\_root\_draft=>handlers\_called.
    "Deep Create
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
    ENTITY Root
    CREATE FIELDS ( key\_field char\_field1 int\_field1 int\_field2 )
    WITH VALUE #( ( %cid = 'cid1'
                    key\_field = '12AB111AABBCC3344'
                    char\_field1 = 'A'
                    int\_field1 = 51
                    int\_field2 = 11 )
                    ( %cid = 'cid2'
                    key\_field = '1111111122222222'
                    char\_field1 = 'B'
                    int\_field1 = 10
                    int\_field2 = 500 )  )
     CREATE BY \\\_child FIELDS ( key\_field\_child
                                char\_field1 int\_field1 )
     WITH VALUE #( ( %cid\_ref = 'cid1'
                     %target = VALUE #( (
                       %cid = 'cid3'
                       key\_field\_child = 11
                       char\_field1 = 'AA'
                       int\_field1 = 10
                       int\_field3 = 100 ) ) )
                 ( %cid\_ref = 'cid2' %target = VALUE #( ( %cid = 'cid4'
                   key\_field\_child = 22
                   char\_field1 = 'BB'
                   int\_field1 = 11
                   int\_field3 = 200 ) ) ) )
     MAPPED DATA(mapped)
     FAILED DATA(failed)
     REPORTED DATA(reported).
    COMMIT ENTITIES.
    SELECT key\_field, char\_field1, int\_field1, int\_field2
    FROM  demo\_dbtab\_field
    INTO TABLE @FINAL(create\_parent).
    SELECT key\_field, char\_field1, int\_field1
    FROM  demo\_dbtab\_fi\_ch
    INTO TABLE @FINAL(create\_child).
\*\*\*\*\*\*\* UPDATE: only allowed if int\_field1 <= 50. feature control\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
        ENTITY Root
        UPDATE
        FIELDS ( key\_field char\_field1  )
        WITH VALUE #( ( key\_field = '12AB111AABBCC3344'
                                   char\_field1 = 'update'
                                    )
                                    ( key\_field = '1111111122222222'
                                   char\_field1 = 'update'
                                    )
                                     )
                        MAPPED mapped
                        FAILED failed
                        REPORTED reported.
    COMMIT ENTITIES.
    SELECT key\_field, char\_field1, int\_field1, int\_field2
    FROM  demo\_dbtab\_field
    INTO TABLE @FINAL(update\_parent).
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
      ENTITY Root
      EXECUTE setValue
      FROM VALUE #( ( key\_field = '1111111122222222' ) )
      RESULT FINAL(result)
      FAILED failed
      REPORTED reported.
    COMMIT ENTITIES.
    SELECT key\_field, char\_field1, int\_field1, int\_field2
    FROM  demo\_dbtab\_field
    INTO TABLE @FINAL(action\_setValue).
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
        ENTITY Child
        EXECUTE ActionExt
        FROM VALUE #( ( key\_field = '12AB111AABBCC3344'
                        key\_field\_child = 11 ) )
        FAILED failed
        REPORTED reported.
    COMMIT ENTITIES.
    SELECT key\_field, char\_field1, int\_field1
    FROM  demo\_dbtab\_fi\_ch
    INTO TABLE @FINAL(action\_ActionExt).
    "Display
    out->next\_section( 'CREATE (root entity)'
            )->write( create\_parent
            )->next\_section( 'CREATE BY assoc (child entity)'
            )->write( create\_child
            )->next\_section( 'UPDATE (root entity)'
            )->write( update\_parent
            )->next\_section( 'EXECUTE action SetValue'
            )->write( action\_setValue
            )->next\_section( 'EXECUTE action ActionExt'
            )->write( action\_ActionExt
            )->write\_html( '<b>Handler methods called</b>'
            )->write( data = bp\_demo\_rap\_beh\_ext=>handlers\_called
               name = 'Handler methods log table'
            )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [ABAP EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the projection BO from an ABAP program:

-   It inserts two parent entity instances and two child entity instances.
-   It updates the two parent entity instances
-   It executes the action setValue from the projection extension.
-   It executes the action ActionExt from the extension to the original RAP BO.

The screen output includes a table that lists the execution order of handler methods of the ABAP behavior pool. This shows which methods in which order are executed when accessing the RAP BO.