  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - RAP Business Objects \(RAP BO\), ABENCDS_RAP_BUSINESS_OBJECTS, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - RAP Business Objects (RAP BO)

A RAP business object (RAP BO) is a [business object (BO)](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry") that plays a central role in [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") by enabling transactional access to data that are described by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). A business object is not a repository object, but it is made up from the following components and their relations- The CDS behavior definition plays a central role here in bringing the individual components together.

-   Data model
    
    The data modeling of a business object takes place using CDS entities that construct a [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry"), which is itself defined using [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") and [to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry"). The components of a tree-like hierarchy of this type are as follows:
    
    -   [Root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry")
        
        Each business object has exactly one root entity. A root entity is a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry"), or an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") defined using the addition ROOT. The root entity represents the business object. A root entity can have one or more child entities but cannot have a parent entity.
        
    -   [Child entity](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry")
        
        [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") can be used to define one or more child entities for each CDS entity of a business object. Before a CDS entity can be defined as a child entity, it must contain a [to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") with the parent entity and expose it.
        
    -   [Parent entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry")
        
        A CDS entity of a business object that uses [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") to define child entities is their parent entity. Each child entity can have exactly one parent entity and the syntax guarantees this by defining and exposing exactly one [to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") in each child entity.
        
    -   [Leaf entity](javascript:call_link\('abenleaf_entity_glosry.htm'\) "Glossary Entry")
        
        A CDS entity of a business object that is not a parent entity or in which no child entities are defined using [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") is a leaf entity.
        
-   Behavior
    
    The [RAP business object behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") is defined in a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") (BDEF). The BDEF defines the main characteristics of a RAP BO and which [CRUD](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry") operations or other actions it provides. There are two kinds of RAP BOs, managed and unmanaged:
    
    -   For a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), its behavior is fully or partly provided by the managed RAP BO provider.
    -   For an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), its behavior must be fully provided by an [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry").
    
    The BDEF also defines the communication between the consumer and the provider of a RAP BO. This communication takes place by using internal tables of so-called [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") that depend on the behavior definition:
    
    -   The [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") implements methods with parameters that are typed with BDEF derived types.
    -   The [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") sends or receives internal tables of BDEF derived types to or from the RAP BO provider.

The main purpose of RAP BOs is to fulfill transactional OData requests from Web clients to the AS ABAP in accordance to the [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") paradigm. Besides that, accesses from ABAP programs to RAP BOs of the same AS ABAP are possible by using [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry").

The following topics describe the BDL for CDS behavior definitions:

-   [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\))

The ABAP statements for RAP are described in the following topics of the ABAP programming language:

-   [ABAP for RAP business objects](javascript:call_link\('abenabap_for_rap_bos.htm'\))
    -   [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\))
    -   [ABAP for Consuming RAP business objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\))
    -   [Other RAP-supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\))

Hint

See also ABAP RESTful Programming Model

Continue
[ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\))