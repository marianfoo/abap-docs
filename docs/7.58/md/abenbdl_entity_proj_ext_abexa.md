  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension.htm) →  [RAP - BDEF Projection Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_projection.htm) →  [RAP - extension for projection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension_for_projection.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20BDEF%20Projection%20Extension%2C%20Node%20Extension%2C%20ABENBDL_ENTITY_PROJ_EXT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

RAP - BDEF Projection Extension, Node Extension

This example demonstrates how the behavior of a projection BDEF is extended by means of a projection BDEF extension.

Original Base RAP BO   

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

CDS transactional interface

The following [CDS transactional interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") is created for the root node to fulfill the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry") requirements for [RAP extensibility](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extensibility_glosry.htm "Glossary Entry").

@EndUserText.label: 'CDS transactional interface'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_RAP\_BEH\_EXT\_INT  
provider contract transactional\_interface
as projection on DEMO\_RAP\_BEH\_EXT as RootInterface
{
  key key\_field,
  char\_field1,
  int\_field1,
  int\_field2
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_BEH\_EXT is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as shown below. It defines implementation-relevant components and extension points.

managed implementation in class bp\_demo\_rap\_beh\_ext unique;
strict(2);
extensible { with determinations on modify; }
with privileged mode disabling ac\_base;
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
  field(readonly:update) key\_field;
}
define authorization context ac\_base
{ 'AUTHOBJ1'; }
define own authorization context by privileged mode;

Behavior implementation

For the RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_BEH\_EXT, see CCIMP include. This global class implements the following methods:

-   get\_instance\_features: Instance feature control for the standard operation update. If the value of field int\_field1 is more than 50, updates are not allowed. If the value is equal to or smaller than 50, updates are allowed.
-   get\_global\_authorizations: Global authorization control defines that create, update, and delete are always allowed.
-   Limit: Validation that checks the value of field int\_field2. If the value is greater than 500, the validation fails and the entity instance is not saved.

Interface BDEF

The following [interface BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry") DEMO\_RAP\_BEH\_EXT\_INT is required as stable interface for extensions.

interface;
extensible;
define behavior for DEMO\_RAP\_BEH\_EXT\_INT alias RootInterface
{
  use create;
  use update;
  use delete;
}

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

A CDS transactional interface is created for the child node to fulfill the RAP BO contract requirements for RAP extensibility.

@EndUserText.label: 'CDS interface child'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_RAP\_BEH\_EXT\_INT\_CH  
as projection on DEMO\_RAP\_BEH\_EXT\_CHILD
{
  key key\_field,
  key key\_field\_child,
  char\_field1,
  int\_field1,
  int\_field3,
  /\* Associations \*/
  \_parent: redirected to parent DEMO\_RAP\_BEH\_EXT\_INT
}

A [to-child association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_parent_association_glosry.htm "Glossary Entry") is added to the root node via a CDS view entity extension on the base layer:

extend view entity DEMO\_RAP\_BEH\_EXT with  
composition of exact one to many DEMO\_RAP\_BEH\_EXT\_CHILD as \_child
{
  \_child
}

The same to-child association is also added on the interface layer:

extend view entity DEMO\_RAP\_BEH\_EXT\_INT with  
{
RootInterface.\_child:
  redirected to composition child DEMO\_RAP\_BEH\_EXT\_INT\_CH
}

Behavior extension

The BDEF extension DEMO\_RAP\_BEH\_EXT\_CH extends the root node and defines behavior for the extension child node via the BDEF interface layer.

extension using interface DEMO\_RAP\_BEH\_EXT\_INT
implementation in class bp\_demo\_rap\_beh\_ext\_ch unique;
extend behavior for RootInterface
{
  association \_child { create; }
  action ( features : global, authorization : global ) setValue
    result \[1\] $self;
}
define behavior for DEMO\_RAP\_BEH\_EXT\_CHILD alias ChildInterface
using DEMO\_RAP\_BEH\_EXT\_INT\_CH
persistent table demo\_dbtab\_fi\_ch
( lock, authorization ) dependent
{
  update;
  delete;
  field ( readonly ) key\_field;
  field ( readonly ) key\_field\_child;
  association \_parent;
  determination myDet on modify { field int\_field3; }
  action ( authorization : global ) ActionExt;
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

View entity extension DEMO\_RAP\_VE\_EXTENSION that establishes a to-child association between original root node and extended child node:

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
authorization (global)
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

\* Public class definition
CLASS cl\_demo\_rap\_proj\_ext DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_proj\_ext IMPLEMENTATION.
  METHOD main.
    "Empty tables
    DELETE FROM demo\_dbtab\_field.
    DELETE FROM demo\_dbtab\_fi\_ch.
    CLEAR bp\_demo\_unmanaged\_root\_draft=>handlers\_called.
    "Deep Create
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
    ENTITY root
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
     CREATE BY \\\_child FIELDS ( char\_field1 int\_field1 )
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
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, char\_field1, int\_field1, int\_field2
    FROM  demo\_dbtab\_field
    INTO TABLE @FINAL(create\_parent).
    SELECT key\_field, char\_field1, int\_field1
    FROM  demo\_dbtab\_fi\_ch
    INTO TABLE @FINAL(create\_child).
\*\*\*\*\*\*\* UPDATE: only allowed if int\_field1 <= 50. feature control\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
        ENTITY root
        UPDATE
        FIELDS ( char\_field1  )
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
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, char\_field1, int\_field1, int\_field2
    FROM  demo\_dbtab\_field
    INTO TABLE @FINAL(update\_parent).
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
      ENTITY root
      EXECUTE setvalue
      FROM VALUE #( ( key\_field = '1111111122222222' ) )
      RESULT FINAL(result)
      FAILED failed
      REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, char\_field1, int\_field1, int\_field2
    FROM  demo\_dbtab\_field
    INTO TABLE @FINAL(action\_setvalue).
    MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh
        ENTITY child
        EXECUTE actionext
        FROM VALUE #( ( key\_field = '12AB111AABBCC3344'
                        key\_field\_child = 11 ) )
        FAILED failed
        REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, char\_field1, int\_field1
    FROM  demo\_dbtab\_fi\_ch
    INTO TABLE @FINAL(action\_actionext).
    "Display
    out->next\_section( 'CREATE (root entity)'
            )->write( create\_parent
            )->next\_section( 'CREATE BY assoc (child entity)'
            )->write( create\_child
            )->next\_section( 'UPDATE (root entity)'
            )->write( update\_parent
            )->next\_section( 'EXECUTE action SetValue'
            )->write( action\_setvalue
            )->next\_section( 'EXECUTE action ActionExt'
            )->write( action\_actionext
            )->write\_html( '<b>Handler methods called</b>'
            )->write( data = bp\_demo\_rap\_beh\_ext=>handlers\_called
               name = 'Handler methods log table' ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [ABAP EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the projection BO from an ABAP class:

-   It inserts two parent entity instances and two child entity instances.
-   It updates the two parent entity instances
-   It executes the action setValue from the projection extension.
-   It executes the action ActionExt from the extension to the original base RAP BO.

The screen output includes a table that lists the execution order of handler methods of the ABAP behavior pool. This shows which methods in which order are executed when accessing the RAP BO.