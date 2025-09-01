  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) → 

ABAP CDS - RAP Business Objects (BO)

A RAP Business Object (RAP BO) is a [Business Object (BO)](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry") that is part of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry"). A RAP BO comprises the following:

-   Data model

The data modeling of a business object takes place using CDS entities that construct a [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry"), which is itself defined using [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") and [to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry"). The components of a tree-like hierarchy of this type are as follows:

-   [Root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry")
    Each business object has exactly one root entity. A root entity is a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") or an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") defined using the addition ROOT. The root entity represents the business object. A root entity can have one or more child entities but cannot have a parent entity.

-   [Child entity](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry")
    [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") can be used to define one or more child entities for each CDS entity of a business object. Before a CDS entity can be defined as a child entity, it must contain a [to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") with the parent entity and expose it.

-   [Parent entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry")
    A CDS entity of a business object that uses [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") to define child entities is their parent entity. Each child entity can have exactly one parent entity and the syntax guarantees this by defining and exposing exactly one [to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") in each child entity.

-   [Leaf entity](javascript:call_link\('abenleaf_entity_glosry.htm'\) "Glossary Entry")
    A CDS entity of a business object that is not a parent entity or in which no child entities are defined using [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") is a leaf entity.

-   Behavior

The [RAP Business Object Behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") consists of a definition and an implementation.

-   [CDS Behavior Definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry")
    

-   [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry")
    [Implementing business objects](javascript:call_link\('abenabap_business_objects.htm'\))

A business object is not a repository object, however it is represented by the relationships between the repository objects mentioned above.

Business objects are an important part of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") and are used for the transactional section (writes to data).

Relationship with UI technologies using business services.

Access using OData (when exposed as business service) or inside AS ABAP with EML.

-   The behavior of the data model, consisting of:

-   The lifecycle of the data (such as create, update, and delete)

-   Further operations performed on data (such as actions)

-   Transactional properties of the data model (such as the implementation type).

The behavior of the business object is defined in a [behavior definition](javascript:call_link\('abencds_behavior_definitions.htm'\)) and implemented in an associated [behavior implementation](javascript:call_link\('abenabap_behavior_pools.htm'\)).

Continue
[ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_behavior_definitions.htm'\))
![Example](exa.gif "Example") [RAP - Simple unmanaged RAP business object](javascript:call_link\('abencds_simple_bo_abexa.htm'\))