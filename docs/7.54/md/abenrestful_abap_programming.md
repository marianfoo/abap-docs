  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) → 

ABAP RESTful Programming Model

ABAP RESTful Programming Model is an ABAP programming model for browser-based applications that are optimized for SAP HANA. This is a methodology for developing architectures for distributed systems that use the Web to communicate with each other. This methodology is based on a set of rules that specify how network resources are defined and addressed.

The ABAP RESTful Programming Model is based on data modeling using [ABAP CDS views](javascript:call_link\('abenddic_cds_views.htm'\)). The ABAP RESTful Programming Model uses ABAP CDS to define the data model for [business objects](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry").

A business object in the ABAP RESTful Programming Model provides following functions:

-   a data model that defines the data structure explicitly,

-   the behavior of the data model, which consists of

-   the data lifecycle (for example, through the [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) create, update, and delete),

-   further operations performed on data (such as [actions](javascript:call_link\('abenbdl_action.htm'\))),

-   and transactional properties of the data model (such as the [implementation type](javascript:call_link\('abenbdl_implementation.htm'\)) of the behavior of the business object).

Each business object contains a top node called [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry"). The formal structure of a business object consists of a tree of entities ([composition tree](javascript:call_link\('abencomposition_tree_glosry.htm'\) "Glossary Entry")) joined by associations.

The behavior of the business object is defined in a [behavior definition](javascript:call_link\('abenabap_behavior_definitions.htm'\)) and implemented in an associated [behavior implementation](javascript:call_link\('abenabap_behavior_implementations.htm'\)).

The [Behavior Definition Language (BDL)](javascript:call_link\('abenabap_bdl.htm'\)) is used to define the business object behavior.

The behavior implementation is contained in [behavior pools](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") that reference the behavior definitions. The concrete implementation of a business object is based on ABAP. The behavior implementation is split into two phases:

-   an interaction phase (involving one or more local [handler classes](javascript:call_link\('abenrpm_handler_class.htm'\))),

-   a save phase (involving one local [saver class](javascript:call_link\('abenrpm_saver_class.htm'\))).

Continue
[Behavior Definitions](javascript:call_link\('abenabap_behavior_definitions.htm'\))
[Business Service](javascript:call_link\('abenrpm_business_service.htm'\))
[Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\))
[CHANGING-Parameter](javascript:call_link\('abenchanging_type_data.htm'\))
[Behavior Implementations](javascript:call_link\('abenabap_behavior_implementations.htm'\))
[Test](javascript:call_link\('abenrpm_testing.htm'\))
[Entity Manipulation Language](javascript:call_link\('abeneml.htm'\))