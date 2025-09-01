  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) →  [Examples for ABAP EML GET PERMISSIONS](javascript:call_link\('abenget_permissions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20GET%20PERMISSIONS%2C%20Short%20and%20Long%20Forms%2C%20ABENGET_PERM_FORMS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

ABAP EML - GET PERMISSIONS, Short and Long Forms

This example demonstrates the short and long forms of the GET PERMISSIONS statement using the addition ONLY INSTANCE FEATURES.

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT\_3 and its child entity DEMO\_MANAGED\_CHILD\_3.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT\_3
  as select from demo\_tab\_root\_2
  composition \[1..1\] of DEMO\_MANAGED\_CHILD\_3 as \_child
  {
        \_child,
    key demo\_tab\_root\_2.key\_field,
        demo\_tab\_root\_2.data\_field1\_root,
        demo\_tab\_root\_2.data\_field2\_root,
        demo\_tab\_root\_2.data\_field3\_root,
        demo\_tab\_root\_2.data\_field4\_root
  }

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_MANAGED\_CHILD\_3
  as select from demo\_tab\_child\_2
  association to parent DEMO\_MANAGED\_ROOT\_3 as \_parent  
  on $projection.key\_field = \_parent.key\_field
  {
        \_parent,
    key demo\_tab\_child\_2.key\_field,
        demo\_tab\_child\_2.data\_field1\_child,
        demo\_tab\_child\_2.data\_field2\_child,
        demo\_tab\_child\_2.data\_field3\_child,
        demo\_tab\_child\_2.data\_field4\_child
  }

Behavior definition

The [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_ROOT\_3 is defined in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_3 unique;
strict;
define behavior for DEMO\_MANAGED\_ROOT\_3
persistent table DEMO\_TAB\_ROOT\_2
lock master
//global + instance authorization
authorization master ( global, instance )
{
  create;
  //dynamic global feature control
  update( features : global );
  delete;
  //dynamic instance feature control
  association \_child { create( features : instance ); }
  //static feature control
  field ( readonly ) data\_field1\_root;
  //static feature control
  field ( mandatory ) data\_field2\_root;
  field ( readonly:update ) key\_field;
  //dynamic instance feature control
  field ( features : instance ) data\_field3\_root, data\_field4\_root;
  action action;
}
define behavior for DEMO\_MANAGED\_CHILD\_3 alias child
persistent table DEMO\_TAB\_CHILD\_2
lock dependent by \_parent
authorization dependent by \_parent
{
  field ( readonly ) key\_field;
  update;
  delete;
  association \_parent;
}

Behavior implementation

For the above RAP behavior definition, one ABP is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_3. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following method is relevant in this example:

-   get\_instance\_features
    
    All variants of GET PERMISSIONS used in the example request the permissions for instance features. The method is implemented in a way that returns information on whether certain fields (data\_field3\_root and data\_field4\_root) are read-only or can be modified based on certain conditions. Additionally, information is returned if the creation of instances for an associated entity (\_child) is disabled or enabled.
    
    As a prerequisite in the BDEF, the two fields and the associated entity have the required notation:
    
       association \_child { create( features : instance ); }
       field ( features : instance ) data\_field3\_root, data\_field4\_root;
    

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_get\_permission DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      request       TYPE STRUCTURE FOR
                      PERMISSIONS REQUEST demo\_managed\_root\_3,
      request\_child TYPE STRUCTURE FOR
                      PERMISSIONS REQUEST demo\_managed\_child\_3.
    METHODS:
      initialize\_dbtabs,
      fill\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_get\_permission IMPLEMENTATION.
  METHOD main.
    fill\_dbtabs( ).
    "Setting permissions request parameters
    request = VALUE #(
        %create                 = if\_abap\_behv=>mk-on
        %update                 = if\_abap\_behv=>mk-on
        %assoc-\_child           = if\_abap\_behv=>mk-on
        %delete                 = if\_abap\_behv=>mk-on
        %field-key\_field        = if\_abap\_behv=>mk-on
        %field-data\_field1\_root = if\_abap\_behv=>mk-on
        %field-data\_field2\_root = if\_abap\_behv=>mk-on
        %field-data\_field3\_root = if\_abap\_behv=>mk-on
        %field-data\_field4\_root = if\_abap\_behv=>mk-on
                ).
    request\_child = VALUE #(
        %update                  = if\_abap\_behv=>mk-on
        %delete                  = if\_abap\_behv=>mk-on
        %field-key\_field         = if\_abap\_behv=>mk-on
        %field-data\_field1\_child = if\_abap\_behv=>mk-on
        %field-data\_field2\_child = if\_abap\_behv=>mk-on
        %field-data\_field3\_child = if\_abap\_behv=>mk-on
        %field-data\_field4\_child = if\_abap\_behv=>mk-on
                ).
    out->begin\_section(
\`GET PERMISSIONS variants using the addition ONLY INSTANCE FEATURES\`
                       ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Short form
    out->next\_section(
                   \`GET PERMISSIONS: Short Form \`
                       ).
    GET PERMISSIONS ONLY INSTANCE FEATURES ENTITY demo\_managed\_root\_3
      FROM VALUE #( ( %key-key\_field = 1 )
                    ( %key-key\_field = 2 ) )
      REQUEST  request
      RESULT   FINAL(result\_short)
      FAILED   FINAL(failed\_short)
      REPORTED FINAL(reported\_short).
    out->write( result\_short ).
    IF failed\_short IS NOT INITIAL.
      out->write( failed\_short ).
    ENDIF.
    IF reported\_short IS NOT INITIAL.
      out->write( reported\_short ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Long form
    out->next\_section(
                   \`GET PERMISSIONS: Long Form \`
                       ).
    GET PERMISSIONS ONLY INSTANCE FEATURES OF demo\_managed\_root\_3
      ENTITY demo\_managed\_root\_3
        FROM VALUE #( ( %key-key\_field = 3 )
                      ( %key-key\_field = 4 ) )
        REQUEST request
        RESULT  FINAL(result\_long\_root)
      ENTITY child
        FROM VALUE #( ( %key-key\_field = 3 )
                      ( %key-key\_field = 4 ) )
        REQUEST request\_child
        RESULT  FINAL(result\_long\_child)
      FAILED   FINAL(failed\_long)
      REPORTED FINAL(reported\_long).
    out->write( result\_long\_root ).
    out->write( result\_long\_child ).
    IF failed\_long IS NOT INITIAL.
      out->write( failed\_long ).
    ENDIF.
    IF reported\_long IS NOT INITIAL.
      out->write( reported\_long ).
    ENDIF.
  ENDMETHOD.
  METHOD fill\_dbtabs.
    MODIFY demo\_tab\_root\_2 FROM TABLE @( VALUE #(
     ( key\_field = 1
       data\_field1\_root = 'aaa'
       data\_field2\_root = 'A'
       data\_field3\_root = 15
       data\_field4\_root = 3 )
     ( key\_field = 2
       data\_field1\_root = 'bbb'
       data\_field2\_root = 'B'
       data\_field3\_root = 5
       data\_field4\_root = 10 )
     ( key\_field = 3
       data\_field1\_root = 'ccc'
       data\_field2\_root = 'A'
       data\_field3\_root = 4
       data\_field4\_root = 16 )
     ( key\_field = 4
       data\_field1\_root = 'ddd'
       data\_field2\_root = 'B'
       data\_field3\_root = 20
       data\_field4\_root = 2 )
     ( key\_field = 5
       data\_field1\_root = 'eee'
       data\_field2\_root = 'A'
       data\_field3\_root = 1
       data\_field4\_root = 17 )
     ( key\_field = 6
       data\_field1\_root = 'fff'
       data\_field2\_root = 'B'
       data\_field3\_root = 21
       data\_field4\_root = 4 )
     ) ).
    MODIFY demo\_tab\_child\_2 FROM TABLE @( VALUE #(
        ( key\_field = 1
          data\_field1\_child = 'ggg'
          data\_field2\_child = 'A'
          data\_field3\_child = 15
          data\_field4\_child = 3 )
        ( key\_field = 2
          data\_field1\_child = 'hhh'
          data\_field2\_child = 'B'
          data\_field3\_child = 5
          data\_field4\_child = 10 )
        ( key\_field = 3
          data\_field1\_child = 'iii'
          data\_field2\_child = 'B'
          data\_field3\_child = 20
          data\_field4\_child = 2 )
        ( key\_field = 4
          data\_field1\_child = 'jjj'
          data\_field2\_child = 'B'
          data\_field3\_child = 20
          data\_field4\_child = 2 )
        ( key\_field = 5
          data\_field1\_child = 'kkk'
          data\_field2\_child = 'B'
          data\_field3\_child = 20
          data\_field4\_child = 2 )
        ( key\_field = 6
          data\_field1\_child = 'lll'
          data\_field2\_child = 'B'
          data\_field3\_child = 20
          data\_field4\_child = 2 )
        ) ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_2.
    DELETE FROM demo\_tab\_child\_2.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP class:

Using the short and long form of the GET PERMISSIONS statement, permissions are requested for specific instances of an entity. The addition ONLY INSTANCE FEATURES is used in each of the statements to get the permissions, as the name implies, for the instance feature controls only.

As a first step, the database tables that are used in the example are emptied and filled again with demo values as a basis for the example. Request parameters for the root and child entity are then specified. In this case, all fields, operations and one associated entity (the child entity) are enabled. These parameters are used in all GET PERMISSIONS statements.

Short form

-   The GET PERMISSIONS statement considers certain instances with keys that are specified after the keyword FROM. The request parameter has been specified before. The result parameter is of type TYPE STRUCTURE FOR PERMISSIONS RESULT and created inline. Response parameters are also specified, however, they are not used in the example.
-   When executing the class and when the compiler reaches the GET PERMISSIONS statements, the method get\_instance\_features is called that fills the result accordingly.
-   Notes on the result, i. e. the content in the output tables:
    -   Entries in the instance table: The entries for the instance with key 1 show that the field assoc has the value 01. According to the implementation, a create-by-association operation is disabled in this case. The entries for both instances with the keys 1 and 2 show the value 02 (that is, read-only) for the data field data\_field1\_root since it was defined as readonly in the BDEF. It is a static feature control also displayed in this context (see the [Guidelines for the Permission Result](javascript:call_link\('abapget_permissions_rules.htm'\))). The entries for data\_field3\_root and data\_field4\_root are determined by the get\_instance\_features method. The value 00 is available if the permission is unrestricted, 02 if the permissions is read-only.
    -   Entries in the global structure: The result also contains static information (see the [Guidelines for the Permission Result](javascript:call_link\('abapget_permissions_rules.htm'\))). In this example, it is as follows: The key key\_field shows the value 20 (that is, readonly:update) and the field data\_field2\_root shows the value 01 (i. e. mandatory), the field data\_field1\_root shows the value 02 (i. e. readonly) as defined in the BDEF.

Long form

-   The GET PERMISSIONS statement includes requests for the root entity and the child entity individually.
-   Result for the root entity:
    
    It is the same request as in the short form on the root entity, yet using different keys. Consequently, the output is similar to the one of the short form. Since the values of the instances are different, the values of data\_field3\_root and data\_field4\_root are arranged differently in the result after calling the implemented method.
    
-   Result for the child entity:
    
    Similar to above, request parameters have been specified before, certain instances with specified keys are considered (following the keyword FROM) and the result parameter is declared inline. Response parameters are declared, too, but not relevant in the example.
    
    Notes on the result, i. e. the content in the output tables for the child entity:
    
    -   Entries in the instance table: The key field of the child entity has the value 02 (i. e. unauthorized) which means a create-by-association operations is disabled in the context of the particular instance.
    -   Entries in the global structure: The result also contains static information. Hence, the field for the key of the child entity shows the value 02 (i. e. read-only) as defined in the BDEF (readonly).