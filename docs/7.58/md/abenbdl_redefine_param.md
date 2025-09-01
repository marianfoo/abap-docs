  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Projection Behavior Definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) →  [RAP - Entity Behavior Definition, Projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) →  [RAP - Entity Behavior Body, Projection BDEF](javascript:call_link\('abenbdl_body_projection.htm'\)) →  [RAP - use, Projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20RedefinedParameter%2C%20ABENBDL_REDEFINE_PARAM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - RedefinedParameter

Syntax Forms

Redefined Input Parameter for RAP Actions and RAP Functions

... deep parameter RedefinedAbstractBDEF ...

Redefined Output Parameter for RAP Actions and RAP Functions

... deep result RedefinedAbstractBDEF ...

Redefined Output Parameter for RAP Business Events

... deep parameter RedefinedAbstractBDEF ...

Alternatives:

[1\. ... deep parameter RedefinedAbstractBDEF](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... deep result RedefinedAbstractBDEF](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... deep parameter RedefinedAbstractBDEF](#!ABAP_ALTERNATIVE_3@3@)

Effect

Redefines the input parameter or output parameter of a [RAP action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry"), [RAP function](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"), or a [RAP business event](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry") that is reused in a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") or an [interface BDEF](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry").

The redefinition is optional and if not specified, the input and output parameters of the base BDEF are reused.

As a prerequisite for redefining a parameter, the parameter in question must be defined as deep parameter using the addition deep with an [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") in the underlying base BDEF.

The following rules apply to the redefined parameter RedefinedAbstractBDEF:

-   It must be an abstract behavior definition with hierarchy.
-   It must be a subset of the data type of the base operation or event. This means that it can have fewer components than the parameter of the base operation and that each component must be compatible or convertible to a component of the base parameter. The [assignment and conversion rules](javascript:call_link\('abenconversion_rules.htm'\)) for elementary data objects apply.
-   It must define a [type mapping](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\)) to the abstract BDEF that is used as parameter of the base operation or event. The names of the components of the derived type of RedefinedAbstractBDEF can differ from the names of the underlying data type.

If a field is defined as [mandatory:execute](javascript:call_link\('abenbdl_field_abstract.htm'\)) in the abstract BDEF used as a parameter of the base operation or event, then it must be included in the data type of the redefined parameter and it must be included in the type mapping of the redefined parameter.

The base parameter and the redefined parameter RedefinedAbstractBDEF must either both specify [with control](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)), or they both must not specify with control.

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic [Modeling Parameters for Non-Standard Operations](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/d891bf474d5444cb939a85d222b75fdf?version=sap_cross_product_abap).

Hint

If a projection BDEF is based on an interface BDEF, redefining parameters is not possible. Only a parameter from the base BDEF can be changed in an interface BDEF or in a projection BDEF. A projection over an interface cannot change the parameter exposed by the interface.

Example

The following example shows an interface BDEF based on the managed BDEF DEMO\_RAP\_REDEFINE\_PARAM. It reuses an action, two functions, and a RAP business event from the base BDEF and redefines the input and output parameters:

-   The base BDEF uses the abstract BDEF DEMO\_RAP\_ABSTRACT\_ALL\_FIELDS as parameter.
-   The interface BDEF uses the abstract BDEF DEMO\_RAP\_ABSTRACT\_SUB\_FIELDS as parameter. This abstract BDEF is a subset of the underlying data type, that means, its derived type has one component less than the derived type of the underlying base BDEF.
    
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
    

Executable Example

The executable example topic [RAP - Reuse with Redefined Parameter](javascript:call_link\('abenbdl_redef_param_abexa.htm'\)) explains the example above in detail.

Alternative 1   

... deep parameter AbstractBDEF ...

Prerequisite

Redefining an input parameter is possible under the condition that the base BDEF specifies an abstract BDEF as deep input parameter for the action or function in question.

Effect

-   Redefines the input parameter for a RAP action or a RAP function that is reused in a projection BDEF or interface BDEF.
-   The deep input parameter AbstractBDEF must be an abstract behavior definition and it must be a subset of the underlying data type of the base operation.
-   The deep input parameter AbstractBDEF must define a type mapping to the abstract BDEF that is used as parameter of the base operation.

Alternative 2   

... deep result AbstractBDEF ...

Prerequisite

Redefining an output parameter is possible under the condition that the base BDEF specifies an abstract BDEF as deep output parameter for the action or function in question.

Effect

-   Redefines the output parameter for a RAP action or a RAP function that is reused in a projection BDEF or interface BDEF.
-   The deep output parameter AbstractBDEF must be an abstract behavior definition and it must be a subset of the underlying data type of the base operation.
-   The deep output parameter AbstractBDEF must define a type mapping to the abstract BDEF that is used as parameter of the base operation.

Alternative 3   

... deep parameter AbstractBDEF ...

Prerequisite

Redefining an input parameter is possible under the condition that the base BDEF specifies an abstract BDEF as deep input parameter for the action or function in question.

Effect

-   Redefines the output parameter for a RAP business event that is reused in an interface BDEF.
-   The deep output parameter AbstractBDEF must be an abstract behavior definition and it must be a subset of the underlying data type of the base operation.
-   The deep output parameter AbstractBDEF must define a type mapping to the abstract BDEF that is used as parameter of the base operation.

Continue
![Example](exa.gif "Example") [RAP - Reuse with Redefined Parameter](javascript:call_link\('abenbdl_redef_param_abexa.htm'\))