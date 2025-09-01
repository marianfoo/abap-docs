  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - entity behavior body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [CDS BDL - RAP BO operation, additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) → 

CDS BDL - InputParameter

Syntax Forms

Flat parameter

... parameter *{* ParameterEntity *|* $self *}*;

Deep parameter
... *\[*deep *\[*table*\]**\]* parameter AbstractBDEF;

Alternatives:

[1\. ... parameter *{* ParameterEntity *|* $self *}*;](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... *\[*deep *\[*table*\]**\]* parameter AbstractBDEF;](#!ABAP_ALTERNATIVE_2@2@)

Effect

Defines an [input parameter](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") for an [action](javascript:call_link\('abenbdl_action.htm'\)) or [function](javascript:call_link\('abenbdl_function.htm'\)). The input parameter can be flat or deep.

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic Action Definition.

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_CDS\_ACTION\_INPUT\_PARAM. The business object describes a purchase order item. The BDEF defines one action, deductDiscount. This action has an input parameter for the discount percentage and it calculates the price of an item minus the discount. It is implemented in the behavior pool BP\_DEMO\_CDS\_ACTION\_INPUT\_PARAM.

managed implementation in class bp\_demo\_cds\_action\_input\_param unique;
strict;
define behavior for DEMO\_CDS\_ACTION\_INPUT\_PARAM alias PurchaseItem
persistent table demo\_purch\_doc\_i
lock master
authorization master (instance)
{
  create;
  update;
  delete;
  action deductDiscount parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT result \[1\] $self;
  mapping for DEMO\_PURCH\_DOC\_I corresponding;
}

The program DEMO\_CDS\_ACTION\_REDUCE accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and carries out the following operations:

-   It asks the user to specify the discount in percent.
-   It creates two instances of a purchase order item, identified by the key PurchaseDocumentItem, and assigns a price Price to each.
-   It executes the action deductDiscount.
-   Using the ABAP SQL SELECT statement, the content of the underlying database table is displayed.

Result: the price is reduced by the specified discount - here, the discount was specified as 10 percent.

![Figure](bdoc_action_discount.png)

Executable Example

The example above is explained in detail in the executable example [CDS BDL - action with input parameter](javascript:call_link\('abenbdl_action2_abexa.htm'\)).

Alternative 1   

parameter *{* ParameterEntity *|* $self *}*

Effect

-   The input parameter entity ParameterEntity can be a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") or a classic [DDIC type](javascript:call_link\('abenddic_type_glosry.htm'\) "Glossary Entry")
-   $self can be specified if the input parameter entity is the same abstract entity the action or function is assigned to.
-   Input parameters with $self are only allowed on static actions or functions. When specified for instance actions or functions, there is no syntax check warning, and a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") occurs instead when a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") accesses the action or function in question.

Hints

-   If [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) is enabled, $self is not allowed as input parameter.
-   If a CDS abstract entity is specified as input parameter, the annotation [EndUserText.label](javascript:call_link\('abencds_f1_element_annotation.htm'\)) can be used to define a label that is displayed on the user interface in an OData scenario.

Alternative 2   

*\[*deep *\[*table*\]**\]* parameter AbstractBDEF

Effect

The input parameter AbstractBDEF must be a [CDS abstract BDEF](javascript:call_link\('abenbdl_abstract.htm'\)) [with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\)). The [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") for an abstract BDEF is a hierarchy that contains all entity fields plus a component for every composition.

The following syntax options are available:

-   deep parameter AbstractBDEF: The input parameter is interpreted as structure.
-   deep table parameter AbstractBDEF: The input parameter is interpreted table.

Hint

An abstract BDEF can also be used as input parameter only with the keyword parameter. In this case, it is interpreted as flat parameter. It represents the same derived type as a single CDS abstract entity and doesn't offer any additional value.