  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [RAP - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [RAP - Non-Standard Operations](javascript:call_link\('abenbdl_nonstandard.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20function%2C%20ABENBDL_FUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - function

Syntax

*\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]* *\[* [static](javascript:call_link\('abenbdl_static.htm'\))*\]* *\[*[repeatable](javascript:call_link\('abenbdl_action_repeatable.htm'\))*\]* function FunctionName
                   *\[*external 'ExternalName'*\]*
                   *\[* [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))*\]*
                    [OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\))

Effect

A [RAP function](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry") is a user-implemented operation that returns information without any side effects. A function can perform calculations or [read operations](javascript:call_link\('abenrap_read_operation_glosry.htm'\) "Glossary Entry") on business objects without issuing [locks](javascript:call_link\('abenbdl_locking.htm'\)) or modifying data. An implementation in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR READ](javascript:call_link\('abaphandler_meth_read.htm'\)) in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required.

If you try to modify data in the function implementation in the ABAP behavior pool, there is no error message, but a runtime error occurs when a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") tries to access the function in question.

Optional additions:

-   [static](javascript:call_link\('abenbdl_static.htm'\)): a function per default relates to a RAP BO entity instance and changes the state of the instance. [Static functions](javascript:call_link\('abenrap_static_operation_glosry.htm'\) "Glossary Entry") are not bound to any instance of a RAP BO entity but relate to the complete entity.
-   [repeatable](javascript:call_link\('abenbdl_action_repeatable.htm'\)): per default, a function must not be executed multiple times on the same [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") within the same [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") or [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") request. Any attempt to do so leads to a contract check violation if the respective contract checks are switched on. The optional addition repeatable enables multiple executions of the same function on the same RAP BO entity instance within the same ABAP EML or OData request. For further details, see topic [RAP - repeatable](javascript:call_link\('abenbdl_action_repeatable.htm'\)).
-   external: can be used to provide an alias name for the function for external usage. This external name is exposed in the OData metadata, but it is not known by ABAP. It can be much longer than the actual action name.

The following [RAP BDL operation additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) are possible:

-   [internal](javascript:call_link\('abenbdl_internal.htm'\)): an internal function is accessible only from within the business object implementation.
-   An input parameter [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\)) can optionally be added to the function signature.
-   An output parameter [OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\)) is mandatory.

Availability

-   [Managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   In a [projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), functions from the base BDEF can be reused. For details on reuse, see topic [RAP - use, Projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)). It is also possible to specify new functions as described in topic [RAP BDL - actions and functions, projection BDEF](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [Functions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/d401150cfdb1454d9f55d80aead9579a?version=sap_cross_product_abap).

Example

The following example shows a managed [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") based on the CDS root view entity DEMO\_CDS\_FUNCTION\_1. The business object represents a purchase order. Three functions are defined:

-   getDetails is an instance function that reads the values of the fields PurchaseDocument, Price, and Status for the specified entity instances and returns them in the result structure.
-   calculateTotal is a static function that sums up the prices of all entity instances with status 'O' and returns the total in its result structure.
    
    Note: This function uses a DDIC data element as output parameter. Note that the recommended procedure is to use only CDS abstract entities as BDEF parameters.
    
-   calculateDiscount has an input parameter for the discount percentage. It subtracts the discount from the initial price and returns a reduced price in its result structure.
    
    managed implementation in class bp\_demo\_cds\_function\_1 unique;
    strict(2);
    define behavior for DEMO\_CDS\_FUNCTION\_1 alias PurchaseDocument
    persistent table demo\_purch\_doc
    lock master
    authorization master (instance)
    {
      create;
      update;
      delete;
      // instance function
      function getDetails result \[0..\*\] $self;
      // static function
      static function calculateTotal result \[1\] demo\_sales\_total\_price;
      //function with input parameter
      function calculateDiscount parameter DEMO\_CDS\_DEDUCT\_DISCOUNT
                                 result \[1\] $self;
    field(readonly:update) Purchasedocument;
      mapping for demo\_purch\_doc corresponding;
    }
    

The class CL\_DEMO\_CDS\_FUNCTION accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry"), executes all three functions, and displays the content of their result structures. No modify operations are carried out, the functions merely deliver information in their result structure without changing database entries.

![Figure](abdoc_function.png)

Executable Example

The example above is explained in detail in the executable example [RAP BDL - function](javascript:call_link\('abenbdl_function_abexa.htm'\)).

Continue
![Example](exa.gif "Example") [RAP - function](javascript:call_link\('abenbdl_function_abexa.htm'\))