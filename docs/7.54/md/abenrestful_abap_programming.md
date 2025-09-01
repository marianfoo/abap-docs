---
title: "ABAP RESTful Programming Model"
description: |
  ABAP RESTful Programming Model is an ABAP programming model for browser-based applications that are optimized for SAP HANA. This is a methodology for developing architectures for distributed systems that use the Web to communicate with each other. This methodology is based on a set of rules that spe
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm"
abapFile: "abenrestful_abap_programming.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "types", "abenrestful", "abap", "programming"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) → 

ABAP RESTful Programming Model

ABAP RESTful Programming Model is an ABAP programming model for browser-based applications that are optimized for SAP HANA. This is a methodology for developing architectures for distributed systems that use the Web to communicate with each other. This methodology is based on a set of rules that specify how network resources are defined and addressed.

The ABAP RESTful Programming Model is based on data modeling using [ABAP CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_views.htm). The ABAP RESTful Programming Model uses ABAP CDS to define the data model for [business objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbusiness_object_glosry.htm "Glossary Entry").

A business object in the ABAP RESTful Programming Model provides following functions:

-   a data model that defines the data structure explicitly,

-   the behavior of the data model, which consists of

-   the data lifecycle (for example, through the [standard operations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_standard_operations.htm) create, update, and delete),

-   further operations performed on data (such as [actions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_action.htm)),

-   and transactional properties of the data model (such as the [implementation type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_implementation.htm) of the behavior of the business object).

Each business object contains a top node called [root entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_entity_glosry.htm "Glossary Entry"). The formal structure of a business object consists of a tree of entities ([composition tree](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomposition_tree_glosry.htm "Glossary Entry")) joined by associations.

The behavior of the business object is defined in a [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) and implemented in an associated [behavior implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm).

The [Behavior Definition Language (BDL)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_bdl.htm) is used to define the business object behavior.

The behavior implementation is contained in [behavior pools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") that reference the behavior definitions. The concrete implementation of a business object is based on ABAP. The behavior implementation is split into two phases:

-   an interaction phase (involving one or more local [handler classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handler_class.htm)),

-   a save phase (involving one local [saver class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_saver_class.htm)).

Continue
[Behavior Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm)
[Business Service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_business_service.htm)
[Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm)
[CHANGING-Parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchanging_type_data.htm)
[Behavior Implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm)
[Test](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_testing.htm)
[Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm)