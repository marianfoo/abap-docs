  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) → 

RAP in ABAP

\* Work in progress \*

See also [ABAP RESTful Programming Model](https://help.sap.com/viewer/c0d02c4330c34b3abca88bdd57eaccfc/Cloud/en-US/3b77569ca8ee4226bdab4fcebd6f6ea6.html)

[ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") is an ABAP programming model for browser-based applications that are optimized for SAP HANA. This is a methodology for developing architectures for distributed systems that use the Web to communicate with each other. This methodology is based on a set of rules that specify how network resources are defined and addressed.

ABAP RAP is based on data modeling using [ABAP CDS views](javascript:call_link\('abencds_v1_views.htm'\)). ABAP RAP uses ABAP CDS to define the data model for [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

A business object in ABAP RAP provides following functions:

-   a data model that defines the data structure explicitly,

-   The behavior of the data model consists of the following:

-   the data lifecycle (for example, through the [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) create, update, and delete),

-   further operations performed on data (such as [actions](javascript:call_link\('abenbdl_action.htm'\))),

-   and transactional properties of the data model (such as the [implementation type](javascript:call_link\('abenbdl_implementation.htm'\)) of the behavior of the business object).

Each business object contains a top node called [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry"). The formal structure of a business object consists of a tree of entities ([composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry")) joined by associations.

The behavior of the business object is defined in a [behavior definition](javascript:call_link\('abencds_behavior_definitions.htm'\)) and implemented in an associated [behavior implementation](javascript:call_link\('abenabap_behavior_pools.htm'\)).

The [Behavior Definition Language (BDL)](javascript:call_link\('abenabap_bdl.htm'\)) is used to define the business object behavior.

The behavior implementation is contained in behavior pools that reference the behavior definitions. The concrete implementation of a business object is based on ABAP. The behavior implementation is split into two phases:

-   an interaction phase (involving one or more local [handler classes](javascript:call_link\('abenabp_handler_class.htm'\))),

-   a save phase (involving one local [saver class](javascript:call_link\('abenabp_saver_class.htm'\))).

Continue
[Involved Objects](javascript:call_link\('abenrestful_definitions_oview.htm'\))
[Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\))
[CHANGING-Parameter](javascript:call_link\('abenchanging_type_data.htm'\))
[ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\))
[Testing Business Objects](javascript:call_link\('abenrpm_testing.htm'\))
[ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\))