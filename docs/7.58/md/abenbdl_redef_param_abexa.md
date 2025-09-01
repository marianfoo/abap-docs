  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Projection Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_projection_bo.htm) →  [RAP - Entity Behavior Definition, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh_projection.htm) →  [RAP - Entity Behavior Body, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body_projection.htm) →  [RAP - use, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_use_projection.htm) →  [RAP - RedefinedParameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_redefine_param.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Reuse%20with%20Redefined%20Parameter%2C%20ABENBDL_REDEF_PARAM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

RAP - Reuse with Redefined Parameter

This example demonstrates how input and output parameters of [RAP actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_action_glosry.htm "Glossary Entry"), [RAP functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_function_glosry.htm "Glossary Entry"), and [RAP business events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_entity_event_glosry.htm "Glossary Entry") can be redefined in a [projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") or in an [interface BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry").

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and focuses on specific RAP aspects. For example, some [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") implementations might be empty. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

Definition of abstract BDEFs as parameters

The following CDS abstract entity defines a data type with three components. The ROOT keyword is required to use the abstract entity as the basis of an abstract BDEF.

@EndUserText.label: 'Demo for parameter redefinition'
define root abstract entity Demo\_Rap\_Abstract\_All\_Fields
  
{
    comp1: abap.int4;
    comp2: abap.char(20);
    comp3: abap.char(20);
    
}

The following CDS abstract entity defines a data type with two components. It is a subset of the data type with three components displayed above. The ROOT keyword is required to use the abstract entity as the basis of an abstract BDEF.

@EndUserText.label: 'Demo for parameter redefinition'
define root abstract entity DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS
{
  comp2 : abap.char(20);
  comp3 : abap.char(20);
}

The redefinition of parameters is possible only for deep parameters. Deep parameters are always defined as abstract BDEF. The following abstract BDEF is used as a deep parameter for base operations and events.

abstract;
strict ( 2 );
with hierarchy;
define behavior for Demo\_Rap\_Abstract\_All\_Fields
with control
{
}

The following abstract BDEF will be used as redefined deep parameter in an interface BDEF. It contains a type mapping that maps the fields of the base data type to the fields of the redefined data type.

abstract;
strict ( 2 );
with hierarchy;
define behavior for DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS
with control
{
mapping for DEMO\_RAP\_ABSTRACT\_ALL\_FIELDS
{
comp2 = comp2;
comp3 = comp3;
}
}

Managed RAP BO

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_REDEFINE\_PARAM defines an action, two functions, and an event with deep input and output parameters.

managed implementation in class bp\_demo\_rap\_redefine\_param unique;
strict ( 2 );
extensible;
define behavior for DEMO\_RAP\_REDEFINE\_PARAM
persistent table demo\_dbtab\_root
lock master
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
  action Action1 deep parameter Demo\_Rap\_Abstract\_All\_Fields;
  function Function1 deep result\[1\] Demo\_Rap\_Abstract\_All\_Fields;
  function Function2 deep parameter Demo\_Rap\_Abstract\_All\_Fields
                     result\[1\] $self;
  event Event1 deep parameter Demo\_Rap\_Abstract\_All\_Fields;
}

The function Function1 is implemented in the ABAP behavior pool as displayed below. It reads fields and returns a result parameter.

METHOD Function1.
  DATA(lt\_keys) = keys.
  CHECK lt\_keys IS NOT INITIAL.
  READ ENTITIES OF demo\_rap\_redefine\_param IN LOCAL MODE
    ENTITY demo\_rap\_redefine\_param
      FIELDS ( key\_field char\_field )
      WITH CORRESPONDING #( lt\_keys )
    RESULT DATA(lt\_item)
    FAILED DATA(read\_failed).
  failed = CORRESPONDING #( DEEP read\_failed ).
  result = VALUE #( FOR ls\_agency IN lt\_item (
                    %param-comp1 = '4'
                    %param-comp2 = 'baseComp2'
                    %param-comp3 = 'baseComp3' ) ).
ENDMETHOD.

The action Action1 is implemented in the ABAP behavior pool as displayed below. It writes a value provided by the input parameter into the field CHAR\_FIELD.

METHOD Action1.
  MODIFY ENTITIES OF demo\_rap\_redefine\_param IN LOCAL MODE
  ENTITY demo\_rap\_redefine\_param
  UPDATE FIELDS ( char\_field )
  WITH VALUE #( FOR ls\_key IN keys (
                %tky                = ls\_key-%tky
                %data-char\_field    = ls\_key-%param-comp1
                %control-char\_field = if\_abap\_behv=>mk-on ) ).
ENDMETHOD.

RAP BO interface with redefined parameters

The following BDEF of type interface reuses the action, functions, and event from the base BDEF. It replaces the input and output parameters of the base operations with the projection-specific parameter DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS.

interface;
extensible;
define behavior for DEMO\_RAP\_REDEFINE\_PARAM\_I alias Interface
{
  use create;
  use update;
  use delete;
  use action Action1 deep parameter DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS;
  use function Function1 deep result DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS;
  use function Function2 deep parameter DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS;
  use event Event1 deep parameter DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS;
}

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_redefine\_param DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_redefine\_param IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_dbtab\_root.
    INSERT demo\_dbtab\_root FROM TABLE @( VALUE #(
           ( key\_field = 1 char\_field = 'A' )
           ( key\_field = 2 char\_field = 'B' )
           ( key\_field = 3 char\_field = 'C' )
           ( key\_field = 4 char\_field = 'D' ) ) ).
    "execute base function. result structure contains 3 components.
    READ ENTITIES OF demo\_rap\_redefine\_param
    ENTITY demo\_rap\_redefine\_param
    EXECUTE Function1
    FROM VALUE #( ( %tky-key\_field = '1' )
                  ( %tky-key\_field = '2' ) )
    RESULT FINAL(result)
    FAILED FINAL(failed)
    REPORTED FINAL(reported).
    "execute interface function. result structure has only 2 components
    READ ENTITIES OF demo\_rap\_redefine\_param\_i
    ENTITY Interface
    EXECUTE Function1
    FROM VALUE #( ( %tky-key\_field = '1' )
                  ( %tky-key\_field = '2' ) )
    RESULT FINAL(result1)
    FAILED FINAL(failed1)
    REPORTED FINAL(reported1).
    "execute base action
    MODIFY ENTITIES OF demo\_rap\_redefine\_param
        ENTITY demo\_rap\_redefine\_param
        EXECUTE Action1
        FROM VALUE #( ( key\_field    = 1
                        %param-comp1 = 999
                        %param-comp2 = 999
                        %param-comp3 = 999 ) )
        FAILED FINAL(failed2)
        REPORTED FINAL(reported2).
    COMMIT ENTITIES.
    SELECT key\_field, char\_field
    FROM demo\_dbtab\_root
    INTO TABLE @FINAL(result3).
    "execute interface action
    MODIFY ENTITIES OF demo\_rap\_redefine\_param\_i
    ENTITY Interface
    EXECUTE Action1
    FROM VALUE #( ( key\_field    = 1
\*                   %param-comp1 = 999 -> syntax check error because
                    "comp1 is not part of the redefined input parameter
                    %param-comp2 = 999 %param-comp3 = 999 )
                )
    FAILED FINAL(failed3)
    REPORTED FINAL(reported3).
    COMMIT ENTITIES.
    SELECT key\_field, char\_field
       FROM demo\_dbtab\_root
       INTO TABLE @FINAL(result4).
    out->next\_section( 'Base function result'
        )->write( result
        )->next\_section( 'Interface function result'
        )->write( result1
        )->next\_section( 'Base action result'
        )->write( result3
        )->next\_section( 'Interface action result'
        )->write( result4 ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   First, it inserts data into the database table using ABAP SQL INSERT.
-   It executes the function Function1 from the base BDEF and from the interface BDEF. The result parameter of both execution differs. In the first execution, the result parameter has three components. In the second execution, the result parameter has only two components. The component comp1 is not a part of the result structure, since comp1 is not part of the redefined output parameter.
-   It executes the action Action1 from the base BDEF and from the interface BDEF. The second execution from the interface BDEF does not accept an input for comp1, since comp1 is not part of the redefined input parameter.