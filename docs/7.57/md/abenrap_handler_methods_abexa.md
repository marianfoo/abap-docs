---
title: "Example for RAP Handler Methods"
description: |
  This example demonstrates various RAP handler methods with an unmanaged and draft-enabled RAP BO. Note that the simplified example does not represent a real business scenario. The focus is on the technical side by giving an idea on self-implementing the handler methods of an ABAP behavior pool (ABP
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_handler_methods_abexa.htm"
abapFile: "abenrap_handler_methods_abexa.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "while", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenrap", "handler", "methods", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_behavior_pools.htm) →  [RAP Handler Class and Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class.htm) →  [METHODS, FOR, RAP Handler Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_for_rap_behv.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Example for RAP Handler Methods, ABENRAP_HANDLER_METHODS_ABEXA, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Example for RAP Handler Methods

This example demonstrates various RAP handler methods with an unmanaged and draft-enabled RAP BO.

Note that the simplified example does not represent a real business scenario. The focus is on the technical side by giving an idea on self-implementing the handler methods of an [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") and dealing with the method parameters. The code should not be reused in a production scenario.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and focuses on specific RAP aspects. For example, some [RAP handler method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") implementations might be empty. See more information on the RAP BO contract in the Development guide for the ABAP RESTful Application Programming Model.

Data Model

The CDS data model consists of the root entity DEMO\_UNMANAGED\_ROOT\_DRAFT and its child entity DEMO\_UNMANAGED\_CHILD\_DRAFT.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, RAP unmanaged, draft'
define root view entity DEMO\_UNMANAGED\_ROOT\_DRAFT
  as select from DEMO\_TAB\_ROOT\_4
  composition \[1..\*\] of DEMO\_UNMANAGED\_CHILD\_DRAFT as \_child
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4,
        @Semantics.systemDateTime.lastChangedAt: true
        crea\_date\_time,
        @Semantics.systemDateTime.localInstanceLastChangedAt: true
        lchg\_date\_time,
        \_child
  }

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, RAP unmanaged, draft'
define view entity DEMO\_UNMANAGED\_CHILD\_DRAFT
  as select from DEMO\_TAB\_CHILD\_4
  association to parent DEMO\_UNMANAGED\_ROOT\_DRAFT as \_parent  
  on $projection.key\_field = \_parent.key\_field
  {
key key\_field,
  key key\_field\_child,
  field1\_child,
  field2\_child,
  field3\_child,
  field4\_child,
      \_parent
}

Behavior Definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UNMANAGED\_ROOT\_DRAFT is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_unmanaged\_root\_draft unique;
strict(2);
with draft;
define behavior for DEMO\_UNMANAGED\_ROOT\_DRAFT
draft table demo\_tab\_dr\_ro
lock master
total etag crea\_date\_time
etag master lchg\_date\_time
authorization master ( global, instance )
early numbering
{
  create;
  update( features : global );
  delete( features : global );
  association \_child { create; with draft; }
  field ( features : instance ) field3;
  action action1;
  action action2 result \[1\] $self;
  action action3 parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT
      result selective \[1\] $self;
  factory action( precheck ) action4 \[1\];
  static function function1 result \[1\] DEMO\_CDS\_ABSTRACT\_SUM;
  function function2 parameter DEMO\_CDS\_DEDUCT\_DISCOUNT
      result \[1\] $self;
  function function3 result selective \[1\] $self;
  validation validation on save { field field3; }
  determination det\_on\_save on save { create; }
  determination det\_on\_modify on modify { create; }
  draft action Resume with additional implementation;
  draft action Edit with additional implementation;
  draft action Activate with additional implementation;
  draft action Discard with additional implementation;
  draft determine action Prepare { determination det\_on\_save;
                                   validation validation; }
}
define behavior for DEMO\_UNMANAGED\_CHILD\_DRAFT
draft table demo\_tab\_dr\_ch
lock dependent by \_parent
etag dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  association \_parent { with draft; }
}

The behavior definition is the basis of the implementation. It defines what can be implemented in the behavior pool.

Behavior Implementation

For the above CDS behavior definition, one ABP is created. The global class of the behavior pool is BP\_DEMO\_UNMANAGED\_ROOT\_DRAFT. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool:

-   lcl\_buffer constitutes the transactional buffer. It includes internal tables to handle the data.
-   lhc\_demo\_unmanaged\_root\_draft is the handler class of the behavior pool.
-   lsc\_demo\_unmanaged\_root\_draft is the saver class of the behavior pool.

Handler and saver class for the child entity are not relevant in the example.

Details of the ABP

Transactional buffer

Class / Method

Details

Local class lcl\_buffer

In this local class, two internal tables are constructed that serve as transactional buffer: root\_buffer as the transactional buffer for the root entity, and child\_buffer for the child entity to also cover the create- and read-by-association operations.
The underlying structured data types are built in a way that simplifies the handling of the buffers. gty\_buffer, as the structured data type for root\_buffer, contains all the key and data fields of the root entity's underlying CDS view with the same type. Plus, the structure includes the components cid to hold the content ID that might be provided by an instance and, for a more comfortable processing of saving and deleting instances, it includes two fields (changed and deleted) acting as flags. These flags are set in the course of modify operations, i. e. if an instance is created or changed, the changed receives an X. If an instance gets deleted, deleted gets the flag X. If no operation takes place for an entity, both fields remain initial. Likewise, the structured data type for the child entity (gty\_buffer\_child) is constructed. It also contains all the key and data fields of the child entity's underlying CDS view with the same type (which is in this example very similar to the root entity). This structure contains the components cid\_ref for by-association operations and cid\_target for the content ID of child instances in the %target structure. The latter is not used in the example. Furthermore, the component created is included. Its purpose is the same as changed, however, in this case, it is only relevant to cover create-by-association operations. Only those instances whose created field is marked with an X should be saved to the database table of the child entity.

Methods prep\_root\_buffer and prep\_child\_buffer

These two methods are meant to prepare the transactional buffers for the root and child entity and fill them with data from the underlying database table, especially if the buffer tables are cleared once the save sequence gets triggered by a COMMIT ENTITIES statement in the ABAP class.
The principle of internal tables as transactional buffer is the following: Once an EML call requests data (to be read or modified) with a specific key, it is checked whether the transactional buffer already holds the requested data, otherwise it is checked if the data is available in the persistent database table. If it exists there, the line with the specified key is read from the database table into the transactional buffer using a SELECT statement. The following is done in the individual methods for the operations to avoid double entries: If the data does not exist at all (for example, it got deleted), the FAILED and REPORTED structures should be filled with information about which data sets could not be read or modified. The prep\_child\_buffer method is relevant for the by-association operations. Not only must the availability of the line with the specified key in the root buffer be checked but also the availability of the line in the child buffer. If the line exists in the underlying database table of the child entity, the data gets read into the child buffer using a SELECT statement as well.

Handler methods

Note:

-   In each method, the name of the method is added to an internal table in the global class. This internal table is displayed in the output several times to log and visualize the sequence of the RAP handler method calls.
-   The method definitions include the explicit specification of the changing parameters in most cases.
-   In most of the method implementations, the failed and reported parameters are filled.

Method

Details

create

After preparing the root buffer with the provided input parameters (entities), a LOOP AT statement processes the transactional buffer further with the individual instances that come in as input parameters. There are certain conditions to be met before an instance can actually be created. If the conditions are not met for a particular instance, the result is an entry in the FAILED and REPORTED structures for the failed instance. The gist is that those instances being present in the transactional buffer and meeting the conditions receive a flag in the changed field and can finally be created. Consequently, the instances are saved to the database table following a COMMIT ENTITIES statement in the ABAP class triggering the save sequence. The checks also take the significance of the flags in the %control structure into consideration, i. e. if a data field is unmarked using the constant mk-off of interface ABP\_BEHV\_FLAG, this particular field should not be created with the provided value.

update

Same as the method above, after preparing the root buffer with the provided input parameters (entities), a LOOP AT statement further processes the transactional buffer with the individual instances that come in as input parameters. Also here, there are certain conditions to be met before an instance can be updated. If the conditions are not met for a particular instance, an entry gets created in the FAILED and REPORTED structures for the failed instance. The checks are implemented in the way that existing values of a data field should not be overwritten if it is explicitly unmarked in the %control structure. Same as above, a changed instance receives a flag. Furthermore, the IF statements are implemented for two scenarios. It might so happen that an EML request includes only the keys or only %cid\_ref. In the latter case, a potentially provided key is ignored since the reference to a particular %cid is the principal reference.

delete

This method is implemented similarly to the update method, for example, it considers the two scenarios when only the key or only %cid\_ref are provided. If an instance is to be deleted, it receives a flag for the deleted field. The changed field gets initialized. %control is not applicable here.

read

After preparing the root buffer with the provided input parameters (keys), a LOOP AT statement is responsible for a detailed preparation and filling of the read result table according to the keys that come in as input parameters and considering the flags for the fields in the %control structure. If a data field is unmarked, this particular field should not be read and included in the read result. The key must always be read and returned.

rba\_child

As an initial step in the method for read-by association operations, both root and child buffers must be prepared. Same as in the read method, the LOOP AT statement is responsible for a detailed preparation and filling of the read result table according to the keys that come in as input parameters and considering the flags for the fields in the %control structure. If a data field is unmarked, this particular field should not be read and included in the read result. The key must always be read and returned.

cba\_child

As an initial step in the method for create-by association operations, both root and child buffers must be prepared. The conditions for filling the child buffer within the LOOP AT statement include checks for two scenarios. It might so happen that an EML request includes only the keys or only %cid\_ref. In the latter case, a potentially provided key is ignored since the reference to a particular %cid is the principal reference. The flags in the %control structure for the data fields are considered, too. If the conditions are met for an instance to be created in the child entity, the instance receives a flag for the created field.

action1

Updates the string in field field2 for all requested instances.
CDS BDL information: [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm).

action2

Action specified with result in the BDEF. Updates the string in field field1 for all requested instances. Additionally, the action's result parameter is filled.
CDS BDL information: [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm).

action3

Action specified with parameter and result selective in the BDEF. In this example, the input parameter represents a discount percentage and the action subtracts the discount from the value of the fields field3 and field4 of an entity instance. Additionally, the action's result parameter is filled with the values of requested fields.
CDS BDL information: [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm).

action4

Copies instances based on keys specified by the RAP consumer. Since action4 is specified with precheck in the BDEF, the method precheck\_action4 is called beforehand to check whether the action can be executed based on certain field values.
CDS BDL information: [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm), [precheck](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_precheck.htm).

precheck\_action4

Checks whether instances have a certain value for a field. If the field has the specific value, action4 is not executed for this instance. Since action4 is specified with precheck in the BDEF, the method precheck\_action4 is called before action4. In this example, the uniqueness check is actually implemented in the create method. Here, it is available for demonstration purposes and so as not to have the precheck interfere with other operations, for example, if the notation create was specified with precheck in the BDEF.
CDS BDL information: [precheck](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_precheck.htm).

function1

Static function that applies to the complete BO, not to any specific entity instance. The function first filters all entity instances. The value of field3 should be higher than 100. Then, it sums up the values of the field field3. The value of the sum is returned in the result parameter.
CDS BDL information: [function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm).

function2

Instance function specified with parameter in the BDEF. To execute the function, it is required to specify an entity instance and also a value for the input parameter. In this example, the input parameter represents a discount percentage and the function subtracts the discount from the value of the field field3 of an entity instance. The reduced value is returned in the result parameter.
CDS BDL information: [function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm).

function3

Instance function specified with result selective in the BDEF. The importing parameter requested\_fields is considered. Only those fields that are requested by the RAP consumer are filled.
CDS BDL information: [function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm).

get\_instance\_authorizations

Checks authorization against the persistent state of the instance. The method returns information on whether update and delete operations as well as the execution of actions are allowed on instances. In this example, they are not allowed if field2 has a particular value.
CDS BDL information: [authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm).

lock

A lock object (ELOCKRAP) is available for the database table. The method locks the active instances based on the keys (key\_field). To visualize the locking, the global lock table (transaction SM12) can be checked while debugging the program. The locks are removed after the COMMIT ENTITIES statement has been executed. With regards to editing draft instances, the locks are removed after the draft action activate has been completed.
CDS BDL information: [locking](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_locking.htm).

get\_instance\_features

The method returns information on whether a certain field (field3) is read-only or can be modified based on a certain condition.
CDS BDL information: [feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_precheck.htm).

get\_global\_features

The method returns information on whether update and delete operations on instances are allowed or not based on a certain condition.
CDS BDL information: [feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_precheck.htm).

get\_global\_authorizations

The method is implemented in a way that modify operations are only enabled for users with the appropriate authorizations. In the interest of having a simple demo, the example goes without an authorization object which is, for example, a way to handle the authorization granting in production applications. The variable auth\_flag represents the authorization that is granted or not. In this example, the permission is always granted.
CDS BDL information: [authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm).

det\_on\_modify

Adds a string to the existing string value in field field1.
CDS BDL information: [determination](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determinations.htm).

det\_on\_save

Performs a simple calculation on the value in field field4.
CDS BDL information: [determination](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determinations.htm).

validation

Checks if the value of field field3 is higher than 1000.
CDS BDL information: [validation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_validations.htm).

activate

Performs a simple calculation on the value in field field3.
CDS BDL information: [draft action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_action.htm).

discard

Removes underscores from the string in field field1.
CDS BDL information: [draft action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_action.htm).

edit

Converts the string in field field1 to upper case.
CDS BDL information: [draft action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_action.htm).

resume

Does not contain any implementations on draft instances. It is currently not possible to call and debug this method in the demonstration class.
CDS BDL information: [draft action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_action.htm).

earlynumbering\_create

Early numbering is applied to primary keys. In the example, the key should be a random number between 50 and 100. The keys are mapped to %cid.
CDS BDL information: [early numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_early_numb.htm).

Source Code   

REPORT demo\_rap\_unm\_draft.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out TYPE REF TO if\_demo\_output,
      failed TYPE RESPONSE FOR FAILED demo\_unmanaged\_root\_draft,
      reported TYPE RESPONSE FOR REPORTED demo\_unmanaged\_root\_draft,
      mapped TYPE RESPONSE FOR MAPPED demo\_unmanaged\_root\_draft,
      links TYPE TABLE FOR READ LINK demo\_unmanaged\_root\_draft\\\_child,
      func\_result TYPE TABLE FOR
                  FUNCTION RESULT demo\_unmanaged\_root\_draft~function2,
      func\_result\_selective TYPE TABLE FOR FUNCTION RESULT
                            demo\_unmanaged\_root\_draft~function3,
      action\_result         TYPE TABLE FOR ACTION RESULT
                    demo\_unmanaged\_root\_draft~action2,
      action\_result2        TYPE TABLE FOR ACTION RESULT
                     demo\_unmanaged\_root\_draft~action3,
      activate\_tab          TYPE TABLE FOR ACTION IMPORT
                   demo\_unmanaged\_root\_draft~activate.
    CLASS-METHODS:
      initialize\_dbtabs,
      get\_handler\_meth,
      extract\_from\_reported RETURNING VALUE(messages) TYPE string\_table,
      extract\_from\_failed RETURNING VALUE(errors) TYPE string\_table,
      display\_responses.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo: RAP Handler Methods\`
      )->line(
      )->next\_section( \`1) First run of standard operations on \` &&
                       \` active instances using EML MODIFY\` ).
    MODIFY ENTITY demo\_unmanaged\_root\_draft
       CREATE FROM VALUE #(
          ( %cid = 'cid1'
            %is\_draft = if\_abap\_behv=>mk-off
            key\_field = 1
            %control-key\_field = if\_abap\_behv=>mk-on
            field1 = 'aaa\_cr'
            %control-field1 = if\_abap\_behv=>mk-on
            field2 = 'bbb\_cr'
            %control-field2 = if\_abap\_behv=>mk-on
            field3 = 2
            %control-field3 = if\_abap\_behv=>mk-on
            field4 = 3
            %control-field4 = if\_abap\_behv=>mk-on )
          ( %cid = 'cid2'
            %is\_draft = if\_abap\_behv=>mk-off
            key\_field = 2
            %control-key\_field = if\_abap\_behv=>mk-on
            field1 = 'ccc\_cr'
            %control-field1 = if\_abap\_behv=>mk-on
            field2 = 'ddd\_cr'
            %control-field2 = if\_abap\_behv=>mk-on
            field3 = 4
            %control-field3 = if\_abap\_behv=>mk-on
            field4 = 5
            %control-field4 = if\_abap\_behv=>mk-on )
          ( %cid = 'cid3'
            %is\_draft = if\_abap\_behv=>mk-off
            key\_field = 3
            %control-key\_field = if\_abap\_behv=>mk-on
            field1 = 'eee\_cr'
            %control-field1 = if\_abap\_behv=>mk-on
            field2 = 'fff\_cr'
            %control-field2 = if\_abap\_behv=>mk-on
            field3 = 6
            %control-field3 = if\_abap\_behv=>mk-on
            field4 = 7
            %control-field4 = if\_abap\_behv=>mk-on )
          ( %cid = 'cid4'                             "Error
            %is\_draft = if\_abap\_behv=>mk-off
            key\_field = 3
            %control-key\_field = if\_abap\_behv=>mk-on
            field1 = 'ggg\_cr'
            %control-field1 = if\_abap\_behv=>mk-on
            field2 = 'hhh\_cr'
            %control-field2 = if\_abap\_behv=>mk-on
            field3 = 6
            %control-field3 = if\_abap\_behv=>mk-on
            field4 = 7
            %control-field4 = if\_abap\_behv=>mk-on )
          ( %cid = 'cid5'
            %is\_draft = if\_abap\_behv=>mk-off
            key\_field = 4
            %control-key\_field = if\_abap\_behv=>mk-on
            field1 = 'iii\_cr'
            %control-field1 = if\_abap\_behv=>mk-on
            field2 = 'jjj\_cr'
            %control-field2 = if\_abap\_behv=>mk-on
            field3 = 5555
            %control-field3 = if\_abap\_behv=>mk-on
            field4 = 7
            %control-field4 = if\_abap\_behv=>mk-on )
          ( %cid = 'cid6'                             "Error
            %is\_draft = if\_abap\_behv=>mk-off
            key\_field = 4
            %control-key\_field = if\_abap\_behv=>mk-on
            field1 = 'kkk\_cr'
            %control-field1 = if\_abap\_behv=>mk-on
            field2 = 'lll\_cr'
            %control-field2 = if\_abap\_behv=>mk-on
            field3 = 6
            %control-field3 = if\_abap\_behv=>mk-on
            field4 = 7
            %control-field4 = if\_abap\_behv=>mk-on )
          ( %cid = 'cid7'
            %is\_draft = if\_abap\_behv=>mk-off
            key\_field = 6
            %control-key\_field = if\_abap\_behv=>mk-on
            field1 = 'mmm\_cr'
            %control-field1 = if\_abap\_behv=>mk-on
            field2 = 'ZZZ'
            %control-field2 = if\_abap\_behv=>mk-on
            field3 = 6
            %control-field3 = if\_abap\_behv=>mk-on
            field4 = 7
            %control-field4 = if\_abap\_behv=>mk-on )
          )
       CREATE BY \\\_child FROM VALUE #(
          ( %cid\_ref = 'cid1'
            %is\_draft = if\_abap\_behv=>mk-off
             %target = VALUE #(
              ( %cid = 'cid\_child1'
                key\_field\_child = 1
                %control-key\_field\_child = if\_abap\_behv=>mk-on
                field1\_child = 'nnn\_cba'
                %control-field1\_child = if\_abap\_behv=>mk-on
                field2\_child = 'ooo\_cba'
                %control-field2\_child = if\_abap\_behv=>mk-on
                field3\_child = 2
                %control-field3\_child = if\_abap\_behv=>mk-on
                field4\_child = 3
                %control-field4\_child = if\_abap\_behv=>mk-on )
              ( %cid = 'cid\_child2'
                key\_field\_child = 1                    "Error
                %control-key\_field\_child = if\_abap\_behv=>mk-on
                field1\_child = 'ppp\_cba'
                %control-field1\_child = if\_abap\_behv=>mk-on
                field2\_child = 'qqq\_cba'
                %control-field2\_child = if\_abap\_behv=>mk-on
                field3\_child = 2
                %control-field3\_child = if\_abap\_behv=>mk-on
                field4\_child = 3
                %control-field4\_child = if\_abap\_behv=>mk-on )
          ) ) )
        UPDATE FROM VALUE #(
          ( %cid\_ref = 'cid2'
            %is\_draft = if\_abap\_behv=>mk-off
            field1 = 'rrr\_up'
            %control-field1 = if\_abap\_behv=>mk-on
            field2 = 'sss\_up'
            %control-field2 = if\_abap\_behv=>mk-on
            field3 = 4
            %control-field3 = if\_abap\_behv=>mk-on
            field4 = 5
            %control-field4 = if\_abap\_behv=>mk-on )
          ( %is\_draft = if\_abap\_behv=>mk-off          "Error
            key\_field = 10
            field1 = 'ttt\_up'
            %control-field1 = if\_abap\_behv=>mk-on
            field2 = 'uuu\_up'
            %control-field2 = if\_abap\_behv=>mk-on
            field3 = 4
            %control-field3 = if\_abap\_behv=>mk-on
            field4 = 5
            %control-field4 = if\_abap\_behv=>mk-on )
          )
        DELETE FROM VALUE #(
          ( %cid\_ref = 'cid3'
            %is\_draft = if\_abap\_behv=>mk-off )
          ( key\_field = 11                       "Error
            %is\_draft = if\_abap\_behv=>mk-off )
          )
          FAILED   failed
          REPORTED reported
          MAPPED mapped.
    out->write\_html( '<b>Responses</b>'
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
\`The following tables show the information that has been returned \` &&
\`by the <code>mapped</code>, <code>failed</code> and \` &&
\`<code>reported</code> parameters before triggering the save \` &&
\`sequence using a <code>COMMIT</code> statement. <br>Note that \` &&
\`only the responses for the root entity are covered. <br>\` &&
\`In the given example, the global authorization (method \` &&
\`<code>get\_global\_authorization</code>) is always granted. In case \` &&
\`the conditions are met for the <code>get\_global\_features</code> \` &&
\`method, deleting and updating is allowed. Other handler methods \` &&
\`that are called afterwards (e.g. <code>create</code>), \` &&
\`purposely return information on failed instances due to improper \` &&
\`values from the RAP BO consumer.\` ) ).
    "Displaying response information
    display\_responses( ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
       FROM demo\_tab\_root\_4
       ORDER BY key\_field
       INTO TABLE @FINAL(itab\_root).
    SELECT key\_field, key\_field\_child, field1\_child, field2\_child,
           field3\_child, field4\_child
       FROM demo\_tab\_child\_4
       ORDER BY key\_field
       INTO TABLE @FINAL(itab\_child).
    get\_handler\_meth(  ).
    out->write\_html( '<b>Database table entries</b>'
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
      \`<ul><li>The table <code>itab\_root</code> shows \` &&
      \`database table entries of the root entitiy after \` &&
      \`the EML MODIFY operations.</li>\` &&
      \`<li>The table <code>itab\_child</code> shows \` &&
      \`database table entries of the child entitiy after \` &&
      \`the create-by-association operation.</li></ul>\` )
    )->write( data = itab\_root exclude = \`client\`
              name = \`itab\_root\`
    )->write( data = itab\_child exclude = \`client\`
              name = \`itab\_child\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
        )->next\_section( \`2) Second run of standard operations \` &&
                         \` on active instances using EML MODIFY\` ).
    MODIFY ENTITY demo\_unmanaged\_root\_draft
      CREATE FROM VALUE #(
         ( %cid = 'cid7'                          "Error
           %is\_draft = if\_abap\_behv=>mk-off
           key\_field = 1
           %control-key\_field = if\_abap\_behv=>mk-on
           field1 = 'www'
           %control-field1 = if\_abap\_behv=>mk-on
           field2 = 'xxx'
           %control-field2 = if\_abap\_behv=>mk-on
           field3 = 2
           %control-field3 = if\_abap\_behv=>mk-on
           field4 = 3
           %control-field4 = if\_abap\_behv=>mk-on )
         ( %cid = 'cid8'
           %is\_draft = if\_abap\_behv=>mk-off
           key\_field = 8
           %control-key\_field = if\_abap\_behv=>mk-on
           field1 = 'yyy'
           %control-field1 = if\_abap\_behv=>mk-on
           field2 = 'zzz'
           %control-field2 = if\_abap\_behv=>mk-on
           field3 = 4
           %control-field3 = if\_abap\_behv=>mk-on
           field4 = 5
           %control-field4 = if\_abap\_behv=>mk-on ) )
      CREATE BY \\\_child FROM VALUE #(
         ( key\_field = 1
           %is\_draft = if\_abap\_behv=>mk-off
            %target = VALUE #( (
             %cid = 'cid\_child1'
             key\_field\_child = 1                            "Error
             %control-key\_field\_child = if\_abap\_behv=>mk-on
             field1\_child = 'aaa\_cba'
             %control-field1\_child = if\_abap\_behv=>mk-on
             field2\_child = 'bbb\_cba'
             %control-field2\_child = if\_abap\_behv=>mk-on
             field3\_child = 2
             %control-field3\_child = if\_abap\_behv=>mk-on
             field4\_child = 3
             %control-field4\_child = if\_abap\_behv=>mk-on ) ) )
         ( key\_field = 2
           %is\_draft = if\_abap\_behv=>mk-off
            %target = VALUE #( (
             %cid = 'cid\_child2'
             key\_field\_child = 4
             %control-key\_field\_child = if\_abap\_behv=>mk-on
             field1\_child = 'ccc\_cba'
             %control-field1\_child = if\_abap\_behv=>mk-on
             field2\_child = 'ddd\_cba'
             %control-field2\_child = if\_abap\_behv=>mk-on
             field3\_child = 5
             %control-field3\_child = if\_abap\_behv=>mk-on
             field4\_child = 6
             %control-field4\_child = if\_abap\_behv=>mk-on ) ) ) )
      UPDATE FROM VALUE #(
         ( key\_field = 4
           %is\_draft = if\_abap\_behv=>mk-off
           field3 = 5555
           %control-field3 = if\_abap\_behv=>mk-on )
         ( key\_field = 2
           %is\_draft = if\_abap\_behv=>mk-off
           field2 = 'eee\_up'
           %control-field2 = if\_abap\_behv=>mk-on
           field3 = 999
           %control-field3 = if\_abap\_behv=>mk-on )
         ( %is\_draft = if\_abap\_behv=>mk-off
           key\_field = 100                             "Error
           field2 = 'fff\_up'
           %control-field2 = if\_abap\_behv=>mk-on ) )
      DELETE FROM VALUE #(
         ( key\_field = 6                               "Error
           %is\_draft = if\_abap\_behv=>mk-off )
         ( key\_field = 22                              "Error
           %is\_draft = if\_abap\_behv=>mk-off ) )
         FAILED   failed
         REPORTED reported
         MAPPED mapped.
    out->write\_html( '<b>Responses</b>'
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
\`The following tables show the information that has been returned \` &&
\`by the <code>mapped</code>, <code>failed</code> and \` &&
\`<code>reported</code> parameters before triggering the save \` &&
\`sequence using a <code>COMMIT</code> statement. <br>Note that \` &&
\`only the responses for the root entity are covered. <br>\` &&
\`In the given example, the global authorization (method \` &&
\`<code>get\_global\_authorization</code>) is always granted. In case \` &&
\`the conditions are met for the <code>get\_global\_features</code> \` &&
\`method, deleting and updating is allowed. This run of EML \` &&
\`MODIFY operations includes failures that are returned by the \` &&
\`<code>get\_instance\_authorizations</code> and \` &&
\`<code>get\_instance\_features</code> methods among others.\` ) ).
    "Displaying response information
    display\_responses( ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
       FROM demo\_tab\_root\_4
       ORDER BY key\_field
       INTO TABLE @FINAL(itab\_root2).
    SELECT key\_field, key\_field\_child, field1\_child, field2\_child,
           field3\_child, field4\_child
       FROM demo\_tab\_child\_4
       ORDER BY key\_field
       INTO TABLE @FINAL(itab\_child2).
    get\_handler\_meth(  ).
    out->write\_html( '<b>Database table entries</b>'
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
      \`<ul><li>The table <code>itab\_root2</code> shows \` &&
      \`database table entries of the root entitiy after \` &&
      \`the EML MODIFY operations.</li>\` &&
      \`<li>The table <code>itab\_child2</code> shows \` &&
      \`database table entries of the child entitiy after \` &&
      \`the create-by-association operation.</li></ul>\` )
    )->write( data = itab\_root2 exclude = \`client\` name = \`itab\_root2\`
    )->write( data = itab\_child2 exclude = \`client\`
              name = \`itab\_child2\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
        )->next\_section( \`3) Executing actions on active instances\` ).
    out->write\_html( '<b>Executing action1</b>' ).
    MODIFY ENTITY demo\_unmanaged\_root\_draft
     EXECUTE action1
     FROM VALUE #( ( key\_field = 2 )
                   ( key\_field = 12 ) "Error
                 )
     FAILED failed
     REPORTED reported.
    "Displaying response information
    display\_responses( ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
     FROM demo\_tab\_root\_4
     ORDER BY key\_field
     INTO TABLE @FINAL(db\_after\_action1).
    get\_handler\_meth(  ).
    out->write\_doc( '<b>Database table entries:</b>'
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
      \`The table <code>db\_after\_action1</code> shows \` &&
      \`database table entries of the root entitiy after \` &&
      \`executing <code>action1</code>.<br>\` &&
      \`In the given example, the value of <code>field2</code> \` &&
      \`is changed by the action for instances specified by the \` &&
      \`RAP consumer.\` )
    )->write( data = db\_after\_action1 exclude = \`client\`
              name = \`db\_after\_action1\` ).
    out->write\_html( '<b>Executing action2</b>' ).
    MODIFY ENTITY demo\_unmanaged\_root\_draft
     EXECUTE action2
     FROM VALUE #( ( key\_field = 1 )
                   ( key\_field = 11 ) "Error
                 )
     RESULT action\_result
     FAILED   failed
     REPORTED reported.
display\_responses( ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
     FROM demo\_tab\_root\_4
     ORDER BY key\_field
     INTO TABLE @FINAL(db\_after\_action2).
    get\_handler\_meth(  ).
    out->write\_doc( '<b>Database table entries and action result:</b>'
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
      \`The table <code>db\_after\_action2</code> shows \` &&
      \`database table entries of the root entitiy after \` &&
      \`executing <code>action2</code>.<br>\` &&
      \`In the given example, the value of <code>field1</code>\` &&
      \` is changed by the action for instances specified by the \` &&
      \`RAP consumer. Additionally, a table is displayed showing \` &&
      \`the action result that is returned.\` ) ).
    out->write( data = db\_after\_action2 exclude = \`client\`
              name = \`db\_after\_action2\` ).
    out->write( action\_result ).
    out->write\_html( '<b>Executing action3</b>' ).
    MODIFY ENTITY demo\_unmanaged\_root\_draft
     EXECUTE action3
     FROM VALUE #(
        ( key\_field = 4 %param-discount\_percent = '40' )
        ( key\_field = 13 %param-discount\_percent = '40' ) "Error
        ( key\_field = 1 %param-discount\_percent = '200' ) "Error
                 )
     REQUEST VALUE #( key\_field = if\_abap\_behv=>mk-on
                      field3 = if\_abap\_behv=>mk-on
                      field4 = if\_abap\_behv=>mk-on
                      lchg\_date\_time = if\_abap\_behv=>mk-on )
     RESULT action\_result2
     FAILED   failed
     REPORTED reported.
display\_responses( ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
     FROM demo\_tab\_root\_4
     ORDER BY key\_field
     INTO TABLE @FINAL(db\_after\_action3).
    get\_handler\_meth(  ).
    out->write\_doc( '<b>Database table entries and action result:</b>'
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
    \`The table <code>db\_after\_action3</code> shows \` &&
    \`database table entries of the root entitiy after \` &&
    \`executing <code>action3</code>.<br>\` &&
    \`In the given example, the values of the fields \` &&
    \`<code>field3</code> and <code>field4</code> are changed \` &&
    \`by the action for instances specified by the RAP consumer. \` &&
    \`Here, the values of the numbers are reduced by a percentage \` &&
    \`that is specified by the RAP consumer, too. Additionally, a \` &&
  \`table is displayed showing the action result that is returned.\` ) ).
    out->write( data = db\_after\_action3 exclude = \`client\`
              name = \`db\_after\_action3\` ).
    out->write( action\_result2 ).
    out->write\_html( '<b>Executing action4</b>' ).
    MODIFY ENTITY demo\_unmanaged\_root\_draft
     EXECUTE action4
     AUTO FILL CID WITH VALUE #( ( key\_field = 1 )
                                 ( key\_field = 123 ) "Error
                   )
     FAILED   failed
     REPORTED reported.
display\_responses( ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
     FROM demo\_tab\_root\_4
     ORDER BY key\_field
     INTO TABLE @FINAL(db\_after\_action4).
    get\_handler\_meth(  ).
    out->write\_doc( '<b>Database table entries and action result:</b>'
    )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
      \`The table <code>db\_after\_action4</code> shows \` &&
      \`database table entries of the root entitiy after \` &&
      \`executing <code>action4</code>.<br>\` &&
      \`In the given example, the action is implemented in \` &&
      \`a way that instances are copied. In the BDEF, the \` &&
      \`action is defined with a precheck, hence, before calling \` &&
      \`the action, the <code>precheck\_action4</code> method is \` &&
      \`called before. This precheck method checks if a field has \` &&
      \`a certain value. If the value is available, the action shall\` &&
      \` not be executed.\` )
         )->write( data = db\_after\_action4 exclude = \`client\`
                   name = \`db\_after\_action4\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
         )->next\_section( \`4) READ, READ BY operations + executing\` &&
                          \` functions on active instances\` ).
    "Read operation
    READ ENTITY demo\_unmanaged\_root\_draft
    FROM VALUE #(
       ( key\_field = 1
         %control-field1 = if\_abap\_behv=>mk-on
         %control-field2 = if\_abap\_behv=>mk-on
         %control-field3 = if\_abap\_behv=>mk-on
         %control-field4 = if\_abap\_behv=>mk-on
         %control-crea\_date\_time = if\_abap\_behv=>mk-on
         %control-lchg\_date\_time = if\_abap\_behv=>mk-on )
       ( key\_field = 2
         %control-field1 = if\_abap\_behv=>mk-on
         %control-field2 = if\_abap\_behv=>mk-on
         %control-field3 = if\_abap\_behv=>mk-on
         %control-field4 = if\_abap\_behv=>mk-on
         %control-crea\_date\_time = if\_abap\_behv=>mk-on
         %control-lchg\_date\_time = if\_abap\_behv=>mk-on )
       ( key\_field = 10                                    "Error
         %control-field1 = if\_abap\_behv=>mk-on
         %control-field2 = if\_abap\_behv=>mk-on
         %control-field3 = if\_abap\_behv=>mk-on
         %control-field4 = if\_abap\_behv=>mk-on
         %control-crea\_date\_time = if\_abap\_behv=>mk-on
         %control-lchg\_date\_time = if\_abap\_behv=>mk-on )
                  )
       RESULT   FINAL(read\_result\_root)
           FAILED   failed
           REPORTED reported.
    out->write\_html( '<b>Read operation on root entity</b>'
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
  \`The tables showing the FAILED and REPORTED responses are \` &&
  \`followed by a table showing the read result. The read operation \` &&
  \`is executed for the root entity only.\` ) ).
display\_responses( ).
    out->write\_doc( '<b>Read result:</b>'
      )->write( data = read\_result\_root exclude = \`client\`
                name = \`read\_result\_root\` ).
    "Read-by-association operation
    READ ENTITY demo\_unmanaged\_root\_draft
     BY \\\_child FROM VALUE #(
     ( key\_field = 1
       %control-key\_field\_child = if\_abap\_behv=>mk-on
       %control-field1\_child = if\_abap\_behv=>mk-on
       %control-field2\_child = if\_abap\_behv=>mk-on
       %control-field3\_child = if\_abap\_behv=>mk-on
       %control-field4\_child = if\_abap\_behv=>mk-on )
     ( key\_field = 2
       %control-key\_field\_child = if\_abap\_behv=>mk-on
       %control-field1\_child = if\_abap\_behv=>mk-on
       %control-field2\_child = if\_abap\_behv=>mk-on
       %control-field3\_child = if\_abap\_behv=>mk-on
       %control-field4\_child = if\_abap\_behv=>mk-on )
     ( key\_field = 7                                     "Error
       %control-key\_field\_child = if\_abap\_behv=>mk-on
       %control-field1\_child = if\_abap\_behv=>mk-on
       %control-field2\_child = if\_abap\_behv=>mk-on
       %control-field3\_child = if\_abap\_behv=>mk-on
       %control-field4\_child = if\_abap\_behv=>mk-on )
      )
     RESULT FINAL(read\_result\_child)
     LINK links
     FAILED   failed
     REPORTED reported.
    out->write\_html( \`<b>Read-by-association operation \` &&
                     \`on child entity</b>\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
  \`The read operation is only executed for the child entity  \` &&
  \`using <code>READ BY</code>. The respective method for \` &&
  \`read-by-association operations also returns association \` &&
  \`links apart from FAILED and REPORTED responses. <br>\` &&
  \`These tables are followed by the read result in the output.\` ) ).
display\_responses( ).
    out->write( links ).
    out->write\_doc( '<b>Read result:</b>'
      )->write( data = read\_result\_child exclude = \`client\`
                name = \`read\_result\_child\` ).
    "Read operation executing a static function
    READ ENTITY demo\_unmanaged\_root\_draft
     EXECUTE function1
     FROM VALUE #( ( %cid = 'cid\_stat\_func' ) )
     RESULT FINAL(stat\_func\_result)
     FAILED   failed
     REPORTED reported.
    out->write\_html( \`<b>Read operation operation executing \` &&
                     \`a static function</b>\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
  \`<code>function1</code> applies to the complete RAP BO, \` &&
  \`not to any specific entity instance. In the given example, \` &&
  \`the respective method for the function is implemented to \` &&
  \`do a simple calculation: The sum of all values of \` &&
  \`<code>field3</code> that are available in the database \` &&
  \`table and have a value higher than 100 is calculated. \` &&
  \`The read result table shows the calculated number.\` ) ).
display\_responses( ).
    out->write\_doc( \`<b>Read result for function execution\` &&
    \` (function1):</b>\`
      )->write( data = stat\_func\_result "\[ 1 \]-%param
                name = \`Function result\` ).
    "Read operation executing an instance function
    READ ENTITY demo\_unmanaged\_root\_draft
     EXECUTE function2
     FROM VALUE #( ( key\_field = 1
                     %param-discount\_percent = '50' )
                   ( key\_field = 4                   "Error
                     %param-discount\_percent = '150' )
                   ( key\_field = 6
                     %param-discount\_percent = '50' ) )
     RESULT func\_result
     FAILED failed
     REPORTED reported.
    out->write\_html( \`<b>Read operation operation executing \` &&
                     \`an instance function</b>\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
  \`<code>function2</code> is an instance function with an \` &&
  \` input parameter. Hence, an input parameter is specified \` &&
  \`by the RAP BO consumer for particular instances.<br>\` &&
  \`In the given example, the respective method for the \` &&
  \`function is implemented to do a simple calculation: \` &&
  \`The input parameter represents the percentage by which \` &&
  \`the value of <code>field3</code> is reduced. The percentage \` &&
  \`can only be between 0 and 100.<br>\` &&
  \`The read result table shows the calculated values.\` ) ).
    display\_responses( ).
    out->write\_doc( \`<b>Read result for function execution\` &&
    \` (function2):</b>\` ).
    out->write( func\_result ).
    "Read operation executing a function with selective result
    READ ENTITY demo\_unmanaged\_root\_draft
      EXECUTE function3
      FROM VALUE #( ( key\_field =  1 )
                    ( key\_field =  2 )
                    ( key\_field =  22 ) )   "Error
      REQUEST VALUE #( key\_field = if\_abap\_behv=>mk-on
                       crea\_date\_time = if\_abap\_behv=>mk-on )
      RESULT func\_result\_selective
      FAILED failed
      REPORTED reported.
    out->write\_html( \`<b>Read operation operation executing \` &&
                     \`a function with selective result</b>\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
  \`<code>function3</code> is a function that is specified with \` &&
  \`a selective result in the BDEF. \` &&
  \`Hence, the RAP BO consumer specifies request parameters to \` &&
  \`only retrieve specific field values. In the given example, \` &&
  \`only the keys and the creation date are requested. \` &&
  \`Consequently, the read result table only shows those values. \` &&
  \`The zeroes displayed for <code>field3</code>, \` &&
  \`<code>field4</code> and <code>lchg\_date\_time</code> \` &&
  \`can be ignored.\` ) ).
display\_responses( ).
    out->write( 'Read result for function execution (function3):' ).
    out->write( func\_result\_selective ).
    out->write\_html( '<b>Handler methods called</b>'
      )->write( data = bp\_demo\_unmanaged\_root\_draft=>handlers\_called
                name = 'Handler methods log table' ).
    CLEAR bp\_demo\_unmanaged\_root\_draft=>handlers\_called.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
      )->next\_section( \`5) Creating draft instances\` ).
    MODIFY ENTITY demo\_unmanaged\_root\_draft
     CREATE FROM VALUE #(
        ( %cid = 'cid1'
          %is\_draft = if\_abap\_behv=>mk-on
          field1 = 'aaa'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'bbb'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 2
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 3
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid2'
          %is\_draft = if\_abap\_behv=>mk-on
          field1 = 'ccc'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'ddd'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 4
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 5
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid3'               "Instance will not be persisted.
          %is\_draft = if\_abap\_behv=>mk-on
          field1 = 'eee'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'fff'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 2000
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 7
          %control-field4 = if\_abap\_behv=>mk-on ) )
        FAILED failed
        REPORTED reported
        MAPPED mapped.
    out->write\_html( \`<b>Responses before committing the \` &&
                     \`created draft instances</b>\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
  \`The responses before committing the created draft instances show\` &&
  \` the effect of calling the <code>earlynumbering\_create</code> \` &&
  \`method. The RAP BO consumer does not specify the keys, and the \` &&
  \`method assigns the keys to the new instances. The determination \` &&
  \`<code>det\_on\_modify</code> is called, too.\` ) ).
display\_responses( ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time, draftentitycreationdatetime,
           draftentitylastchangedatetime
     FROM demo\_tab\_dr\_ro
     ORDER BY key\_field
     INTO TABLE @FINAL(draft\_parent\_before\_act).
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
   FROM demo\_tab\_root\_4
   ORDER BY key\_field
   INTO TABLE @FINAL(db\_tab\_root\_before\_act).
    "Get keys for activate action.
    LOOP AT mapped-demo\_unmanaged\_root\_draft
      ASSIGNING FIELD-SYMBOL(<key>).
      APPEND VALUE #( key\_field = <key>-%key-key\_field )
                             TO activate\_tab.
    ENDLOOP.
    MODIFY ENTITY demo\_unmanaged\_root\_draft
      EXECUTE Activate AUTO FILL CID WITH activate\_tab
      MAPPED mapped
      FAILED failed
      REPORTED reported.
    CLEAR activate\_tab.
    out->write\_html( \`<b>Responses of the ACTIVATE action \` &&
                     \`before committing</b>\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
  \`The responses of the <code>activate</code> action \` &&
  \`show the effect of the validation <code>validation</code> whose \` &&
  \`method is called in the course of the saving process. While  \` &&
  \`the determination <code>det\_on\_save</code> does not return a \` &&
  \`failure, the validation fails for a particular instance. In this\` &&
  \` example, the validation fails for instances whose \` &&
  \`<code>field3</code> value is higher than 1000. The RAP \` &&
  \`framework provides an additional entry in FAILED and REPORTED.\` ) ).
display\_responses( ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time, draftentitycreationdatetime,
           draftentitylastchangedatetime
      FROM demo\_tab\_dr\_ro
      ORDER BY key\_field
      INTO TABLE @FINAL(draft\_parent\_afer\_act).
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
      FROM demo\_tab\_root\_4
      ORDER BY key\_field
      INTO TABLE @FINAL(db\_tab\_root\_after\_act).
    out->write\_html( '<b>Handler methods called</b>'
      )->write( data = bp\_demo\_unmanaged\_root\_draft=>handlers\_called
                name = 'Handler methods log table' ).
    CLEAR bp\_demo\_unmanaged\_root\_draft=>handlers\_called.
    out->write\_html( \`<b>Draft and database tables</b>\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
  \`The following tables demonstrate the effect on the draft and \` &&
  \`database tables. In this example, only the tables for the \` &&
  \`root entity are covered. The first two tables show the state \` &&
  \`of the draft and database table before the activation, i. e. \` &&
  \`new draft instances are created and, thus, available in the \` &&
  \`draft table. To visualize the successful calling of the \` &&
  \`determination method <code>det\_on\_modify</code>, the string \` &&
  \`<code>draft\_</code> gets added to the string in \` &&
  \`<code>field1</code>. At this stage, the database table only \` &&
  \`shows those entries that have been created in the operations \` &&
  \`beforehand.<br>\` &&
  \`The next two tables show the state of the draft and database\` &&
  \` tables after the activation using the <code>activate</code> \` &&
  \`method and a <code>COMMIT ENTITIES</code> statement. Since the \` &&
  \`validation returns an error for an instance, the instance \` &&
  \`remains in the draft table and is not persisted to the database.\` &&
  \` The database table now includes the former draft instances\` &&
  \` that have been persisted to the database. Furthermore, the \` &&
  \`effects of the methods <code>det\_on\_save</code> (the value \` &&
  \`of <code>field4</code> is divided by 2) and \` &&
  \`<code>discard</code> (the underscore in the string of \` &&
  \`<code>field1</code> is removeare visible.\` )
            )->write( data = draft\_parent\_before\_act exclude = \`client\`
                      name = 'Draft table before activation'
            )->write( data = db\_tab\_root\_before\_act exclude = \`client\`
                      name = 'Database table before activation'
            )->write( data = draft\_parent\_afer\_act exclude = \`client\`
                      name = 'Draft table after activation'
            )->write( data = db\_tab\_root\_after\_act exclude = \`client\`
                      name = 'Database table after activation'
            ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
      )->next\_section( \`6) Updating draft instances\` ).
    MODIFY ENTITY demo\_unmanaged\_root\_draft
       EXECUTE Edit AUTO FILL CID WITH
       VALUE #( ( %key-key\_field = 1
                  %param-preserve\_changes = if\_abap\_behv=>mk-off )
                ( %key-key\_field = 2
                  %param-preserve\_changes = if\_abap\_behv=>mk-off )
              )
       REPORTED reported
       FAILED failed
       MAPPED mapped.
    out->write\_html( \`<b>Responses before committing the \` &&
                     \`edited draft instances</b>\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
  \`The responses before committing the edited draft instances just\` &&
  \` show that, among others, the <code>edit</code> method \` &&
  \`has been called.\` ) ).
display\_responses( ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time, draftentitycreationdatetime,
           draftentitylastchangedatetime
     FROM demo\_tab\_dr\_ro
     ORDER BY key\_field
     INTO TABLE @FINAL(draft\_parent\_before\_act2).
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
     FROM demo\_tab\_root\_4
     ORDER BY key\_field
     INTO TABLE @FINAL(db\_tab\_root\_before\_act2).
    "Get keys for the ACTIVATE action.
    LOOP AT mapped-demo\_unmanaged\_root\_draft
      ASSIGNING FIELD-SYMBOL(<key2>).
      APPEND VALUE #( key\_field = <key2>-%key-key\_field )
                             TO activate\_tab.
    ENDLOOP.
    MODIFY ENTITY demo\_unmanaged\_root\_draft
      EXECUTE Activate AUTO FILL CID WITH activate\_tab
      REPORTED reported
      FAILED failed
      MAPPED mapped.
    CLEAR activate\_tab.
    out->write\_html( \`<b>Responses of the ACTIVATE action \` &&
                     \`before committing</b>\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
  \`The responses of the <code>activate</code> action just show,\` &&
  \` that, among others, the <code>update</code> method has\` &&
  \` been called.\` ) ).
display\_responses( ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time, draftentitycreationdatetime,
           draftentitylastchangedatetime
         FROM demo\_tab\_dr\_ro
         ORDER BY key\_field
         INTO TABLE @FINAL(draft\_parent\_afer\_act2).
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
   FROM demo\_tab\_root\_4
   ORDER BY key\_field
   INTO TABLE @FINAL(db\_tab\_root\_after\_act2).
    get\_handler\_meth(  ).
    out->write\_html( \`<b>Draft and database tables</b>\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
  \`The following tables demonstrate the effect on the draft and \` &&
  \`database tables. In this example, only the tables for the \` &&
  \`root entity are covered. The first two tables show the state \` &&
  \`of the draft and database table before the activation, i. e. \` &&
  \`persisted instances are inserted in the draft table.\` &&
  \`In this example, the failed instance of the previous draft\` &&
  \`instance creation procedure is still available in the table. \` &&
  \`It can be ignored. The effect of the <code>edit</code> \` &&
  \`method is visible: the strings in <code>field1</code> are \` &&
  \`converted to upper case.\` &&
  \` At this stage, the database table only \` &&
  \`shows those entries that have been created in the operations \` &&
  \`beforehand.<br>\` &&
  \`The next two tables show the state of the draft and database\` &&
  \` tables after the activation using the <code>activate</code> \` &&
  \`method and a <code>COMMIT ENTITIES</code> statement. Since the \` &&
  \`validation has returned an error for an instance in the previous\` &&
  \` draft instance creation, the instance is still visible in the \` &&
  \`draft table. It can be ignored. The database table shows all \` &&
  \`persisted instances including the newly edited instances with \` &&
  \`the strings in <code>field2</code> in upper case. \` )
          )->write( data = draft\_parent\_before\_act2 exclude = \`client\`
                    name = 'Draft table before activation'
          )->write( data = db\_tab\_root\_before\_act2 exclude = \`client\`
                    name = 'Database table before activation'
          )->write( data = draft\_parent\_afer\_act2 exclude = \`client\`
                    name = 'Draft table after activation'
          )->write( data = db\_tab\_root\_after\_act2 exclude = \`client\`
                    name = 'Database table after activation'
          ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_4.
    DELETE FROM demo\_tab\_child\_4.
    DELETE FROM demo\_tab\_dr\_ro. "#EC CI\_NOWHERE
    DELETE FROM demo\_tab\_dr\_ch. "#EC CI\_NOWHERE
  ENDMETHOD.
  METHOD get\_handler\_meth.
    out->write\_html( '<b>Handler methods called</b>'
     )->write( data = bp\_demo\_unmanaged\_root\_draft=>handlers\_called
               name = 'Handler methods log table' ).
    CLEAR bp\_demo\_unmanaged\_root\_draft=>handlers\_called.
  ENDMETHOD.
  METHOD extract\_from\_reported.
    CLEAR messages.
    LOOP AT reported-demo\_unmanaged\_root\_draft
    ASSIGNING FIELD-SYMBOL(<rep>).
      IF <rep>-%global = if\_abap\_behv=>mk-on.
        APPEND <rep>-%msg->m\_severity && \` \` &&
                <rep>-%msg->if\_t100\_dyn\_msg~msgv1 TO messages.
      ELSE.
        APPEND \`Message for instance with \` &&
               COND #( WHEN <rep>-%cid IS NOT INITIAL
                       THEN \`%cid = \` && <rep>-%cid
                       ELSE \`key = \` && <rep>-key\_field ) &&
               \`: \` &&  <rep>-%msg->m\_severity && \` \` &&
               <rep>-%msg->if\_t100\_dyn\_msg~msgv1 TO messages.
      ENDIF.
    ENDLOOP.
    IF reported-demo\_unmanaged\_child\_draft IS NOT INITIAL.
      LOOP AT reported-demo\_unmanaged\_child\_draft
      ASSIGNING FIELD-SYMBOL(<rep\_ch>).
        APPEND \`Message for child instance with key\_field = \` &&
        <rep\_ch>-key\_field && \` and key\_field\_child = \`
        && <rep\_ch>-key\_field\_child && \`: \`
        && <rep\_ch>-%msg->m\_severity &&
        \` \` && <rep\_ch>-%msg->if\_t100\_dyn\_msg~msgv1 TO messages.
      ENDLOOP.
    ENDIF.
  ENDMETHOD.
  METHOD extract\_from\_failed.
    CLEAR errors.
    LOOP AT failed-demo\_unmanaged\_root\_draft
    ASSIGNING FIELD-SYMBOL(<err>).
      DATA op TYPE string.
      CASE if\_abap\_behv=>mk-on.
        WHEN <err>-%op-%create.
          op = \`create operation\`.
        WHEN <err>-%op-%update.
          op = \`update operation\`.
        WHEN <err>-%op-%delete.
          op = \`delete operation\`.
        WHEN <err>-%op-%assoc-\_child.
          op = \`operation involving the child entity\`.
\*        WHEN <err>-%op-%action-.
\*          op = \`executing action multiply\_by\_2\`.
\*        WHEN <err>-%op-%action-multiply\_by\_3.
\*          op = \`executing action multiply\_by\_3\`.
\*        WHEN <err>-%op-%action-set\_z.
\*          op = \`executing action set\_z\`.
        WHEN OTHERS. op = \`operation\`.
      ENDCASE.
      APPEND \`Error for instance with \` &&
           COND #( WHEN <err>-%cid IS NOT INITIAL THEN \`%cid = \`
                   && <err>-%cid
                   ELSE \`key = \` && <err>-key\_field ) &&
           \`: Fail cause \` &&  <err>-%fail-cause && \` for \` &&  op
            && \`.\` TO errors.
    ENDLOOP.
    IF failed-demo\_unmanaged\_child\_draft IS NOT INITIAL.
      LOOP AT failed-demo\_unmanaged\_child\_draft
      ASSIGNING FIELD-SYMBOL(<err\_ch>).
      APPEND \`Error for child instance with \` &&
           COND #( WHEN <err\_ch>-%cid IS NOT INITIAL THEN \`%cid = \`
                   && <err\_ch>-%cid
                   ELSE \`key\_field = \` && <err\_ch>-key\_field &&
             \` and key\_field\_child = \` && <err\_ch>-key\_field\_child ) &&
           \`: Fail cause \` &&  <err\_ch>-%fail-cause && \` for \` &&  op
            && \`.\` TO errors.
      ENDLOOP.
    ENDIF.
  ENDMETHOD.
  METHOD display\_responses.
    IF mapped-demo\_unmanaged\_root\_draft IS NOT INITIAL
    OR mapped-demo\_unmanaged\_child\_draft IS NOT INITIAL.
      out->write( data = mapped
                name = \`Entries in MAPPED response parameter \` &&
                       \`\` ).
    ENDIF.
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the [unmanaged RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") from an ABAP class. The main focus of the class is to demonstrate RAP handler methods with several EML requests.

The output shows several runs of operations on RAP BOs to visualize the effect of implementations in the RAP handler methods as outlined above. For the example to display successful modify operations, it must be executed in a certain time frame (see the get\_global\_features method), otherwise all modify operations are disallowed.

1.  First run of standard operations on active instances using EML MODIFY
    
    First, CREATE and CREATE BY operations create instances for the root and child entity. The same modify request includes UPDATE and DELETE operations on the newly created instances of the root entity. The mapped, failed and reported parameters are filled by the handler methods. The information that is returned by those parameters is displayed in internal tables. Among them, there are instances that purposely cannot be created, updated and deleted. A COMMIT ENTITIES statement triggers the save sequence. The outcome of the saving, i. e. the entries persisted to the database tables are displayed in internal tables, too. Another internal table is displayed - triggered by the get\_handler\_meth method - before the database entries showing handler method names. This internal table is considered as logging and visualizing the sequence of the RAP handler method calls in this run of EML modify operations.
    
2.  Second run of standard operations on active instances using EML MODIFY
    
    The purpose of the second run with the same set of modify operations is to visualize the effect of further handler methods, for example get\_instance\_authorizations and get\_instance\_features. The example demonstrates that certain modify operations are not successful because of not meeting conditions that are set in those method implementations.
    
3.  Executing actions on active instances
    
    Several actions are covered in the example. All of the actions have a different specification in the BDEF to show the variety of possible parameters for actions in the ABP, for example, some actions include result or request parameters. The pattern for the actions in the output is always the same: the response parameters are displayed in internal tables as well as the effect of the action execution by showing the database table entries in internal tables. Additionally, the handler method log table is displayed for all actions. The action result is displayed for those actions that include a result parameter. Action action4 is a special case since it is specified with precheck in the BDEF. Hence, the effect of the method precheck\_action4 must be considered.
    
4.  READ, READ BY operations and executing functions on active instances
    
    First, READ and READ BY operations are covered. The rba\_child method includes an additional parameter (association\_links). The content is displayed in an internal table, too, apart from the response information and read result. Then, several functions are covered in the example. All of the functions have a different specification in the BDEF to show the variety of possible parameters for functions in the ABP, for example, a function includes request parameters. The pattern for the functions in the output is always the same: the response parameters are displayed in internal tables as well as the effect of the functions by showing the read result. Additionally, the handler method log table is displayed for all actions. The action result is displayed for those actions that include a result parameter.
    
5.  Creating draft instances
    
    First, new draft instances are created by marking the %is\_draft indicator appropriately. The instances do not include a key. Instead, they include a content ID (%cid). The key assignment is done with the earlynumbering\_create method. The handler method log table shows that the determination det\_on\_modify has been called, too. In the output, the response information is displayed before committing the created draft instances. With the COMMIT ENTITIES statement, the saving of the draft instances in the draft table is triggered. The execution of the activate method turns the draft instances into active instance, and the following COMMIT ENTITIES statement finally triggers the saving of the original draft instances to the database table. In the course of the draft action execution, the det\_on\_save and validation methods are called among others. The discard method is called last. The output shows four internal tables that log the state of draft and database tables: before and after the activation.
    
    1.  Draft table before the activation: All created draft instances are available in the draft table. Simple edits, e. g. on field field1 triggered by the det\_on\_modify method are visible.
    2.  Database table before activation: Does not show any changes to entries.
    3.  Draft table after activation: Since the validation failed for one instance, it is still present in the draft table. It can be ignored in the example. Yet, it shows that the two other instances are no longer present.
    4.  Database table after activation: Two of the three original draft instances have been saved to the database table. Simple edits, e. g. on field field1 triggered by the discard method are visible.
6.  Updating draft instances
    
    With the execution of the draft action edit, persisted instances are inserted in the draft table and locked on the database table. The locking effect can be checked while debugging in transaction SM12. As above, four internal tables are displayed in the output showing the state of draft and database table. The database table after activation shows the successful saving of instances with the simple edits triggered by the edit method.