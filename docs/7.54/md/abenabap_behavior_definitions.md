  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) → 

Behavior Definitions

A business object behavior definition (behavior definition for short) is an ABAP repository object (a source text artifact) that represents the behavior of the [business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry") in the context of the [ABAP RESTful Programming Model](javascript:call_link\('abenr_a_p_glosry.htm'\) "Glossary Entry").

A behavior definition always references a CDS data model. The matching name of the CDS entity ensures that a behavior definition has a reference to the data model. This also means that the data model must always exist before the behavior definition, as shown in the following example:

The CDS definition define root view /DMO/I\_Travel ... must exist before a behavior definition /DMO/I\_Travel can be created. The CDS view /DMO/I\_Travel is the [root entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry") in the data structure.

Once the behavior definition is created, the root entity becomes a transactional entity and can, in principle, be used in modifying REST operations. All operations in the specific business object that have transactional support must be specified in this behavior definition.

The transactional behavior of a CDS entity is modeled using [Behavior Definition Language](javascript:call_link\('abenbdl_glosry.htm'\) "Glossary Entry") (BDL).

Rules

-   A root entity can have at most one behavior definition, in which the behavior of the child entities may need to be specified too. Conversely, a behavior definition has precisely one root entity.

-   The [implementation](javascript:call_link\('abenabap_behavior_implementations.htm'\)) of a behavior definition can be made in both a single ABAP class (a [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry")) or spread across any number of ABAP classes (behavior pools). This means that any number of behavior pools can be assigned to a behavior definition (a 1:n relation).

Continue
[ABAP BDL](javascript:call_link\('abenabap_bdl.htm'\))
[ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\))