  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) →  [Examples for BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenderived_types_abexas.htm) → 

BDEF derived type components in the context of requesting permissions

This example demonstrates the use of the various [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") components with a [managed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm) [RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the context of requesting permissions using multiple [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) statements with variants of the [ONLY clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions_only_clause.htm):

-   [%action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_action.htm)
-   [%assoc](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_assoc.htm)
-   [%create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_create.htm)
-   [%delete](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_delete.htm)
-   [%features](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_features.htm)
-   [%field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_field.htm)
-   [%op](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_op.htm)
-   [%perm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_perm.htm)

Data model

The CDS data model consists of the root entity [root entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_entity_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_PERM and its [child entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchild_entity_glosry.htm "Glossary Entry") DEMO\_MANAGED\_CHILD\_PERM. The child entity is not used in the example.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT\_REPORTED
  as select from demo\_tab\_root\_5
  composition \[1..\*\] of DEMO\_MANAGED\_CHILD\_REPORTED as \_child
  {        
     key key\_field,
        field1,
        field2,
        field3,
        field4,
        \_child
  }

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_PERM is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_perm unique;
strict;
define behavior for DEMO\_MANAGED\_ROOT\_PERM
persistent table DEMO\_TAB\_ROOT\_5
lock master
authorization master ( global, instance )
{
  create;
  //dynamic global feature control
  update( features : global );
  delete;
  //dynamic instance feature control
  association \_child { create( features : instance ); }
  //static feature control
  field ( readonly ) field1;
  //static feature control
  field ( mandatory ) key\_field, field2;
  //dynamic instance feature control
  field ( features : instance ) field3, field4;
  action( features : global ) action;
}
define behavior for DEMO\_MANAGED\_CHILD\_PERM
persistent table DEMO\_TAB\_CHILD\_5
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  association \_parent;
}

Behavior implementation

For the above CDS behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_PERM. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following methods are relevant for this example:

-   get\_instance\_features
    
    The method returns information on whether certain fields are read-only or can be modified based on certain conditions. Additionally, information is returned if the creation of instances for an associated entity (\_child) is enabled or disabled. As a prerequisite in the BDEF, the two fields and the associated entity have the required notation ( features: instance ). In the context of this method, the component %features is used.
    
-   get\_global\_features
    
    The method returns information on whether update operations on entities and the execution of an action are allowed or not based on a certain condition, that is, updating and executing the action is only allowed within a certain time span. As a prerequisite in the BDEF, update and the action have the required notation ( features: global ).
    
-   get\_global\_authorizations
    
    The method is implemented in a way that create and delete operations are only enabled for users with the appropriate authorizations. In the interest of having a simple demo, the example goes without an authorization object which is, for example, a way to handle the authorization granting in productive applications. The variable auth\_flag represents the authorization that is granted or not. In this case, the permission is not granted. As a prerequisite in the BDEF, the notation authorization master ( global ) exists. In this example, instance authorizations are also covered, hence, the notation is authorization master ( global, instance ) in the BDEF.
    
-   get\_instance\_authorizations
    
    The method returns information on whether delete operations and executions of an action are allowed on instances. In this example, deletion and action execution are not allowed if a field has a particular value. As a prerequisite in the BDEF, the notation authorization master ( instance ) exists. In this example, global authorizations are also covered, hence, the notation is authorization master ( global, instance ) in the BDEF. In the context of this method, the component %op is used.
    

Source Code

REPORT demo\_rap\_derived\_types\_perm.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out         TYPE REF TO if\_demo\_output,
      request     TYPE STRUCTURE FOR
                    PERMISSIONS REQUEST demo\_managed\_root\_perm,
      perm\_result TYPE STRUCTURE FOR
                    PERMISSIONS RESULT demo\_managed\_root\_perm.
    CLASS-METHODS:
      initialize\_dbtabs,
      fill\_dbtabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    "Set permissions request parameter.
    request = VALUE #(
        %create          = if\_abap\_behv=>mk-on
        %update          = if\_abap\_behv=>mk-on
        %delete          = if\_abap\_behv=>mk-on
        %assoc-\_child    = if\_abap\_behv=>mk-on
        %action-action   = if\_abap\_behv=>mk-on
        %field-key\_field = if\_abap\_behv=>mk-on
        %field-field1 = if\_abap\_behv=>mk-on
        %field-field2 = if\_abap\_behv=>mk-on
        %field-field3 = if\_abap\_behv=>mk-on
        %field-field4 = if\_abap\_behv=>mk-on
                ).
    out->begin\_section( \`GET PERMISSIONS: Variants for only\_clause\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY GLOBAL
    out->next\_section( \`ONLY GLOBAL\` ).
    GET PERMISSIONS ONLY GLOBAL ENTITY demo\_managed\_root\_perm
      REQUEST request
      RESULT DATA(result\_only\_global)
      FAILED DATA(failed1)
      REPORTED DATA(reported1).
    out->write( result\_only\_global ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY GLOBAL FEATURES
    out->next\_section( \`ONLY GLOBAL FEATURES\` ).
    GET PERMISSIONS ONLY GLOBAL FEATURES ENTITY demo\_managed\_root\_perm
      REQUEST request
      RESULT DATA(result\_only\_global\_feat)
      FAILED DATA(failed2)
      REPORTED DATA(reported2).
    out->write( result\_only\_global\_feat ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY GLOBAL AUTHORIZATION
    out->next\_section( \`ONLY GLOBAL AUTHORIZATION\` ).
    GET PERMISSIONS ONLY GLOBAL AUTHORIZATION
      ENTITY demo\_managed\_root\_perm
      REQUEST request
      RESULT DATA(result\_global\_auth)
      FAILED DATA(failed3)
      REPORTED DATA(reported3).
    out->write( result\_global\_auth ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY INSTANCE
    out->next\_section( \`ONLY INSTANCE\` ).
    GET PERMISSIONS ONLY INSTANCE ENTITY demo\_managed\_root\_perm
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 )  )
      REQUEST request
      RESULT DATA(result\_only\_inst)
      FAILED DATA(failed4)
      REPORTED DATA(reported4).
    out->write( result\_only\_inst ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY INSTANCE FEATURES
    out->next\_section( \`ONLY INSTANCE FEATURES\` ).
    GET PERMISSIONS ONLY INSTANCE FEATURES ENTITY demo\_managed\_root\_perm
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 )  )
      REQUEST request
      RESULT DATA(result\_only\_inst\_feat)
      FAILED DATA(failed5)
      REPORTED DATA(reported5).
    out->write( result\_only\_inst\_feat ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY INSTANCE AUTHORIZATION
    out->next\_section( \`ONLY INSTANCE AUTHORIZATION\` ).
    GET PERMISSIONS ONLY INSTANCE AUTHORIZATION
      ENTITY demo\_managed\_root\_perm
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 ) )
      REQUEST request
      RESULT DATA(result\_only\_inst\_auth)
      FAILED DATA(failed6)
      REPORTED DATA(reported6).
    out->write( result\_only\_inst\_auth ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY FEATURES
    out->next\_section( \`ONLY FEATURES\` ).
    GET PERMISSIONS ONLY FEATURES ENTITY demo\_managed\_root\_perm
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 )  )
      REQUEST request
      RESULT DATA(result\_only\_feat)
      FAILED DATA(failed7)
      REPORTED DATA(reported7).
    out->write( result\_only\_feat ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY AUTHORIZATION
    out->next\_section( \`ONLY AUTHORIZATION\` ).
    GET PERMISSIONS ONLY AUTHORIZATION ENTITY demo\_managed\_root\_perm
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 ) )
      REQUEST request
      RESULT DATA(result\_only\_auth)
      FAILED DATA(failed8)
      REPORTED DATA(reported8).
    out->write( result\_only\_auth ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "ONLY AUTHORIZATION
out->next\_section( \`ONLY AUTHORIZATION (focus on %perm\` &&
  \` component group)\` ).
    GET PERMISSIONS ONLY AUTHORIZATION ENTITY demo\_managed\_root\_perm
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 ) )
      REQUEST request
      RESULT perm\_result
      FAILED DATA(failed9)
      REPORTED DATA(reported9).
    TYPES: BEGIN OF perm\_struc,
             key             TYPE i,
             update          TYPE abp\_behv\_flag,
             delete          TYPE abp\_behv\_flag,
             action          TYPE abp\_behv\_flag,
             assoc           TYPE abp\_behv\_flag,
             field\_key\_field TYPE abp\_behv\_feature,
             field\_field1    TYPE abp\_behv\_feature,
             field\_field2    TYPE abp\_behv\_feature,
             field\_field3    TYPE abp\_behv\_feature,
             field\_field4    TYPE abp\_behv\_feature,
           END OF perm\_struc.
    DATA perm\_tab TYPE TABLE OF perm\_struc WITH EMPTY KEY.
    LOOP AT perm\_result-instances ASSIGNING FIELD-SYMBOL(<fs>).
       APPEND VALUE #(
          key = <fs>-%key-key\_field
          update = <fs>-%perm-%update
          delete = <fs>-%perm-%delete
          action = <fs>-%perm-%action-action
          assoc = <fs>-%perm-%assoc-\_child
          field\_key\_field = <fs>-%perm-%field-key\_field
          field\_field1 = <fs>-%perm-%field-field1
          field\_field2 = <fs>-%perm-%field-field2
          field\_field3 = <fs>-%perm-%field-field3
          field\_field4 = <fs>-%perm-%field-field4
                      ) TO perm\_tab.
    ENDLOOP.
    out->write( perm\_tab ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
    fill\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_5.
    DELETE FROM demo\_tab\_child\_5.
  ENDMETHOD.
  METHOD fill\_dbtabs.
    MODIFY demo\_tab\_root\_5 FROM TABLE @( VALUE #(
      ( key\_field = 1
        field1 = 'aaa'
        field2 = 'A'
        field3 = 15
        field4 = 3 )
      ( key\_field = 2
        field1 = 'bbb'
        field2 = 'B'
        field3 = 5
        field4 = 10 )
      ( key\_field = 3
        field1 = 'ccc'
        field2 = 'B'
        field3 = 20
        field4 = 2 )
      ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

The example covers most variants of only\_clause using the short form of the GET PERMISSIONS statement.

As a first step, the database table that is used in the example is emptied and filled again with demo values as a basis for the example. Request parameters for an entity are then specified. In this case, all fields, [standard](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencrud_glosry.htm "Glossary Entry") and [nonstandard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard.htm), and an associated entity (the child entity) are enabled. These parameters are used in all GET PERMISSIONS statements. All statements use the same input keys (except those statements where specifying the keys is not allowed) and include response parameters that are not used in the example.

The result of the individual GET PERMISSIONS statements is displayed in the output showing both instance table and global structure (see [TYPE STRUCTURE FOR PERMISSIONS RESULT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm)).

Notes on the result, i. e. the entries in the output tables:

-   ONLY GLOBAL
    
    There are no entries in the instance table. The global structure includes the global authorization (the value 02, i. e. IF\_ABAP\_BEHV=>PERM-O-UNAUTHORIZED, for the create and delete operation), and global feature controls (the values of %update and %action-action either show 00 for enabled or 01 for disabled). Furthermore, static information is available, too: The fields%field-key\_field and the field %field-field2 show the value 01 (i. e. mandatory), the field %field-field1 shows the value 02 (i. e. readonly) as defined in the BDEF.
    
-   ONLY GLOBAL FEATURES
    
    There are no entries in the instance table. The global structure includes the global feature control and static information (see the details above for ONLY GLOBAL).
    
-   ONLY GLOBAL AUTHORIZATION
    
    There are no entries in the instance table. The global structure includes information on global authorization. The value 02, i. e. IF\_ABAP\_BEHV=>PERM-O-UNAUTHORIZED, for the create and delete operation is displayed.
    
-   ONLY INSTANCE
    
    The instance table includes information on instance-based authorization and instance-based feature control plus static information. According to the method get\_instance\_features, the value of %assoc-\_child is 01 for the instance with key 1 denoting that the create-by-association operation is disabled in the context of this instance. In contrast to that, the operation is allowed for the instance with key 2 (the value is 00). The read-only field field-field1 shows the value 02, i. e.IF\_ABAP\_BEHV=>PERM-F-READ\_ONLY. %field-field3 and field-field4 show the values of the result after calling the get\_instance\_features method. The instance with the key 2 shows the value 02 for %delete as a result of calling the method get\_instance\_authorizations. The global structure includes the static information as outlined above for ONLY GLOBAL.
    
-   ONLY INSTANCE FEATURES
    
    The instance table includes information on instance-based feature control. It shows the same values for both instance table and global structure as above for ONLY INSTANCE except for the instance-based authorization part (i. e. the instance with the key 2 does not include the result of the delete operation here).
    
-   ONLY INSTANCE AUTHORIZATION
    
    The instance table includes information on instance-based authorization. The instance with the key 2 shows the value 02 for delete as a result of calling the method get\_instance\_authorizations. The instance with the key 1 is not included at all in the result. The global structure does not include any relevant values.
    
-   ONLY FEATURES
    
    The instance table includes information on instance-based feature control plus static information (see the details above for ONLY INSTANCE except for the instance-based authorization part). The global structure includes the global feature control and static information (see the details above for ONLY GLOBAL except for the global authorization part).
    
-   ONLY AUTHORIZATION
    
    The instance table includes information on instance-based authorization (see the details above for ONLY INSTANCE AUTHORIZATION). The global structure includes the information on global authorization (see the details above for ONLY GLOBAL AUTHORIZATION).
    
-   ONLY AUTHORIZATION (focus on %perm component group)
    
    The implementation in the program serves the purpose of visualizing the %perm component group that is contained in the permission result of GET PERMISSIONS statements and how subcomponents of the result might be referred to. The result is of type [TYPE STRUCTURE FOR PERMISSIONS RESULT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm). In the example, a structure type is set up containing the instance key as well as the subcomponents of %perm. An internal table is declared that is filled with the permission result from the instance table. The output shows this internal table. The outcome of the permission result corresponds to the entries in the instance table from the previous example with ONLY AUTHORIZATION.