---
title: "RAP in ABAP"
description: |
  Work in progress  See also ABAP RESTful Programming Model(https://help.sap.com/viewer/c0d02c4330c34b3abca88bdd57eaccfc/Cloud/en-US/3b77569ca8ee4226bdab4fcebd6f6ea6.html) ABAP RAP(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_rap_glosry.htm 'Glossary Entry') is an ABAP
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm"
abapFile: "abenrestful_abap_programming.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "types", "abenrestful", "abap", "programming"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) → 

RAP in ABAP

\* Work in progress \*

See also [ABAP RESTful Programming Model](https://help.sap.com/viewer/c0d02c4330c34b3abca88bdd57eaccfc/Cloud/en-US/3b77569ca8ee4226bdab4fcebd6f6ea6.html)

[ABAP RAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_rap_glosry.htm "Glossary Entry") is an ABAP programming model for browser-based applications that are optimized for SAP HANA. This is a methodology for developing architectures for distributed systems that use the Web to communicate with each other. This methodology is based on a set of rules that specify how network resources are defined and addressed.

ABAP RAP is based on data modeling using [ABAP CDS views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm). ABAP RAP uses ABAP CDS to define the data model for [RAP business objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry").

A business object in ABAP RAP provides following functions:

-   a data model that defines the data structure explicitly,

-   The behavior of the data model consists of the following:

-   the data lifecycle (for example, through the [standard operations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_standard_operations.htm) create, update, and delete),

-   further operations performed on data (such as [actions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm)),

-   and transactional properties of the data model (such as the [implementation type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_implementation.htm) of the behavior of the business object).

Each business object contains a top node called [root entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_entity_glosry.htm "Glossary Entry"). The formal structure of a business object consists of a tree of entities ([composition tree](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_composition_tree_glosry.htm "Glossary Entry")) joined by associations.

The behavior of the business object is defined in a [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) and implemented in an associated [behavior implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm).

The [Behavior Definition Language (BDL)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) is used to define the business object behavior.

The behavior implementation is contained in behavior pools that reference the behavior definitions. The concrete implementation of a business object is based on ABAP. The behavior implementation is split into two phases:

-   an interaction phase (involving one or more local [handler classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_handler_class.htm)),

-   a save phase (involving one local [saver class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_saver_class.htm)).

Continue
[Involved Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_definitions_oview.htm)
[Derived Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_derived_types.htm)
[CHANGING-Parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchanging_type_data.htm)
[ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm)
[Testing Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_testing.htm)
[ABAP Entity Manipulation Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm)