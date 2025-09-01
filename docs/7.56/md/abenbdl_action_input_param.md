---
title: "CDS BDL - InputParameter"
description: |
  Syntax Forms Flat parameter ... parameter  ParameterEntity  $self ; Deep parameter ... deep table parameter AbstractBDEF; Alternatives: 1. ... parameter  ParameterEntity  $self ;(#!ABAP_ALTERNATIVE_1@1@) 2. ... deep table parameter AbstractBDEF;
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_input_param.htm"
abapFile: "abenbdl_action_input_param.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "class", "data", "abenbdl", "action", "input", "param"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm) →  [CDS BDL - RAP BO operation, additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations_additions.htm) → 

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

Defines an [input parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninput_parameter_glosry.htm "Glossary Entry") for an [action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm) or [function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_function.htm). The input parameter can be flat or deep.

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

The program DEMO\_CDS\_ACTION\_REDUCE accesses the business object using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") and carries out the following operations:

-   It asks the user to specify the discount in percent.
-   It creates two instances of a purchase order item, identified by the key PurchaseDocumentItem, and assigns a price Price to each.
-   It executes the action deductDiscount.
-   Using the ABAP SQL SELECT statement, the content of the underlying database table is displayed.

Result: the price is reduced by the specified discount - here, the discount was specified as 10 percent.

![Figure](bdoc_action_discount.png)

Executable Example

The example above is explained in detail in the executable example [CDS BDL - action with input parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action2_abexa.htm).

Alternative 1   

parameter *{* ParameterEntity *|* $self *}*

Effect

-   The input parameter entity ParameterEntity can be a [CDS abstract entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") or a classic [DDIC type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_type_glosry.htm "Glossary Entry")
-   $self can be specified if the input parameter entity is the same abstract entity the action or function is assigned to.
-   Input parameters with $self are only allowed on static actions or functions. When specified for instance actions or functions, there is no syntax check warning, and a [runtime error](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenruntime_error_glosry.htm "Glossary Entry") occurs instead when a [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") accesses the action or function in question.

Hints

-   If [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm) is enabled, $self is not allowed as input parameter.
-   If a CDS abstract entity is specified as input parameter, the annotation [EndUserText.label](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_element_annotation.htm) can be used to define a label that is displayed on the user interface in an OData scenario.

Alternative 2   

*\[*deep *\[*table*\]**\]* parameter AbstractBDEF

Effect

The input parameter AbstractBDEF must be a [CDS abstract BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_abstract.htm) [with hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_bdef_abstract_header.htm). The [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") for an abstract BDEF is a hierarchy that contains all entity fields plus a component for every composition.

The following syntax options are available:

-   deep parameter AbstractBDEF: The input parameter is interpreted as structure.
-   deep table parameter AbstractBDEF: The input parameter is interpreted table.

Hint

An abstract BDEF can also be used as input parameter only with the keyword parameter. In this case, it is interpreted as flat parameter. It represents the same derived type as a single CDS abstract entity and doesn't offer any additional value.