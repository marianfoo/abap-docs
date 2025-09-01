  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20PERMISSIONS%2C%20ABAPGET_PERMISSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET PERMISSIONS

Syntax Forms

[GET PERMISSIONS, Short Form](javascript:call_link\('abapget_permissions_short.htm'\))

1\. GET PERMISSIONS *\[*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]* *\[* [only\_clause](javascript:call_link\('abapget_permissions_only_clause.htm'\))*\]*
      ENTITY entity *\[*FROM keys*\]* REQUEST request [RESULT result\_tab](javascript:call_link\('abapeml_result.htm'\)) *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

[GET PERMISSIONS, Long Form](javascript:call_link\('abapget_permissions_long.htm'\))

2\. GET PERMISSIONS *\[*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]* *\[* [only\_clause](javascript:call_link\('abapget_permissions_only_clause.htm'\))*\]* OF bdef
     ENTITY entity1 *\[*FROM keys*\]* REQUEST request [RESULT result\_tab](javascript:call_link\('abapeml_result.htm'\))
    *\[*ENTITY entity2 *\[*FROM keys*\]* REQUEST request [RESULT result\_tab](javascript:call_link\('abapeml_result.htm'\))*\]*
    *\[*...*\]*
    *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

[GET PERMISSIONS, Dynamic Form](javascript:call_link\('abapget_permissions_dyn.htm'\))

3\. GET PERMISSIONS *\[*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]* *\[* [only\_clause](javascript:call_link\('abapget_permissions_only_clause.htm'\))*\]* OPERATIONS perm\_tab *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Effect

Retrieves information about permissions of RAP BOs. Permissions are defined on operation and field level, for example, operations can be disabled and fields can be set to read-only. Permissions are checked when EML requests are processed by the RAP runtime but they can also be requested upfront by [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") via a GET PERMISSIONS statement. The permissions cover multiple aspects:

-   [Global authorization and instance authorization](javascript:call_link\('abenbdl_authorization.htm'\))
    -   Global authorization: Checks whether the current user is allowed to execute an operation in general, i. e. independent of the data to be processed, for example, a user must not change data.
    -   Instance authorization: Authorization checks that can be defined based on a concrete value of an instance's field.
-   [Global feature control and instance feature control](javascript:call_link\('abenbdl_actions_fc.htm'\))
    -   [Global feature control](javascript:call_link\('abenrap_glo_feature_control_glosry.htm'\) "Glossary Entry"): Feature controls that depend on external factors like specific user settings or the business scope.
    -   [Instance feature control](javascript:call_link\('abenrap_ins_feature_control_glosry.htm'\) "Glossary Entry"): Checks depending on the state of an entity instance.
-   [Static feature control](javascript:call_link\('abenbdl_field_char.htm'\)): Specifies individual fields of an entity that have certain access restrictions, for example, fields that are marked as readonly in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

For all characteristics, the permission retrieval must be user-implemented in RAP BO provider implementations except for static feature controls. In latter case, the access restriction is directly defined in the BDEF. One example is when a field is marked as readonly. Depending on the context, GET PERMISSIONS statements in [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") and [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") trigger the calling of the [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR *\[*INSTANCE*\]* AUTHORIZATION](javascript:call_link\('abaphandler_meth_auth.htm'\)), [FOR *\[*INSTANCE*\]* FEATURES](javascript:call_link\('abaphandler_meth_features.htm'\)), [FOR GLOBAL AUTHORIZATION](javascript:call_link\('abaphandler_meth_global_auth.htm'\)), or [FOR GLOBAL FEATURES](javascript:call_link\('abaphandler_meth_global_features.htm'\)).

The handling and consolidation of the permission result as well as general best practices are outlined in the topic [GET PERMISSIONS, Guidelines](javascript:call_link\('abapget_permissions_rules.htm'\)). One example is when the permission result contains merged information. Among others, static feature controls are merged with global feature controls.

Permissions can be retrieved for the following:

-   Create, update and delete operations
-   Associations with [create-by-association operations](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry")
-   Fields
-   Actions

Note: Permissions cannot be retrieved for [internal](javascript:call_link\('abenbdl_internal.htm'\)) elements like internal associations and internal actions. For [virtual elements](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry") in projections, there are only static features available.

Hint

ABAP EML statements should not be used in loops. Using them can have a performance impact because it can result in multiple single database accesses. There should be only one ABAP EML statement to read the necessary data, and then the data should be modified with an ABAP EML modify request.

The following variants of the GET PERMISSIONS statement can be used:

-   [GET PERMISSIONS, Short Form](javascript:call_link\('abapget_permissions_short.htm'\))
    
    Used to retrieve information on permissions for instances of a single entity.
    
-   [GET PERMISSIONS, Long Form](javascript:call_link\('abapget_permissions_long.htm'\))
    
    Used for collecting multiple queries on multiple entities of a RAP BO.
    
-   [GET PERMISSIONS OPERATIONS, Dynamic Form](javascript:call_link\('abapget_permissions_dyn.htm'\))
    
    Collects permission queries of multiple RAP BO entities in one GET PERMISSIONS statement.
    

Further Information

When implementing RAP operations, ensure that you comply with [RAP BO contract](javascript:call_link\('abenrap_bo_contract_glosry.htm'\) "Glossary Entry"). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](javascript:call_link\('abaprap_impl_rules.htm'\)).

Executable Example

-   The example [ABAP EML - GET PERMISSIONS, Variants](javascript:call_link\('abenget_perm_forms_abexa.htm'\)) demonstrates the different variants with a simple managed RAP BO.
-   The example [ABAP EML - GET PERMISSIONS, only\_clause](javascript:call_link\('abenget_perm_only_abexa.htm'\)) demonstrates the different variants of the only\_clause with a simple managed RAP BO.
-   The example [ABAP EML - RAP Calculator (Unmanaged)](javascript:call_link\('abeneml_calculator_abexa.htm'\)) uses a GET PERMISSIONS statement with a simple unmanaged RAP BO. In this case, permissions are requested if a calculation based on entries provided is possible or not. For example, it is disallowed if a division by 0 should be executed.

Continue
[GET PERMISSIONS, Short Form](javascript:call_link\('abapget_permissions_short.htm'\))
[GET PERMISSIONS OF, Long Form](javascript:call_link\('abapget_permissions_long.htm'\))
[GET PERMISSIONS OPERATIONS, Dynamic Form](javascript:call_link\('abapget_permissions_dyn.htm'\))
[GET PERMISSIONS, only\_clause](javascript:call_link\('abapget_permissions_only_clause.htm'\))
[GET PERMISSIONS, Guidelines](javascript:call_link\('abapget_permissions_rules.htm'\))
[Examples for ABAP EML GET PERMISSIONS](javascript:call_link\('abenget_permissions_abexas.htm'\))