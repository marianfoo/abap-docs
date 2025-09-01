  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20-%20RAP%20Business%20Objects%2C%20ABENABAP_RAP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP - RAP Business Objects

This section of the ABAP keyword documentation describes the syntax and semantics of all language elements of [ABAP RAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_glosry.htm "Glossary Entry").

A RAP business object (RAP BO) is a [business object (BO)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbusiness_object_glosry.htm "Glossary Entry") that plays a central role in [ABAP RAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_glosry.htm "Glossary Entry") by enabling transactional access to data that are described by [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry"). A business object is not a repository object, but it is made up from the following components and their relations. The RAP behavior definition plays a central role here in bringing the individual components together.

-   Data model
    
    The data modeling of a business object takes place using CDS entities that construct a [CDS composition tree](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_tree_glosry.htm "Glossary Entry"), which is itself defined using [CDS compositions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") and [to-parent associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_parent_association_glosry.htm "Glossary Entry"). The components of a tree-like hierarchy of this type are as follows:
    
    -   [RAP BO root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry"):
        
        Each business object has exactly one root entity. A root entity is a [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry"), a [CDS custom entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry"), or an [CDS abstract entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") defined using the addition ROOT. The root entity represents the business object. A root entity can have one or more child entities but cannot have a parent entity.
        
    -   [Child entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchild_entity_glosry.htm "Glossary Entry")
        
        [CDS compositions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") can be used to define one or more child entities for each CDS entity of a business object. Before a CDS entity can be defined as a child entity, it must contain a [to-parent association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_parent_association_glosry.htm "Glossary Entry") with the parent entity and expose it.
        
    -   [Parent entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparent_entity_glosry.htm "Glossary Entry")
        
        A CDS entity of a business object that uses [CDS compositions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") to define child entities is their parent entity. Each child entity can have exactly one parent entity and the syntax guarantees this by defining and exposing exactly one [to-parent association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_parent_association_glosry.htm "Glossary Entry") in each child entity.
        
    -   [Leaf entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleaf_entity_glosry.htm "Glossary Entry")
        
        A CDS entity of a business object that is not a parent entity or in which no child entities are defined using [CDS compositions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") is a leaf entity.
        
-   Behavior
    
    The [RAP business object behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_behavior_glosry.htm "Glossary Entry") is defined in a [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") (BDEF). The BDEF defines the main characteristics of a RAP BO and which [CRUD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencrud_glosry.htm "Glossary Entry") operations or other actions it provides. There are two kinds of RAP BOs, managed and unmanaged:
    
    -   For a [managed RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), its behavior is fully or partly provided by the managed RAP BO provider.
    -   For an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), its behavior must be fully provided by an [ABAP behavior implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_implement_glosry.htm "Glossary Entry").
    
    The BDEF also defines the communication between the consumer and the provider of a RAP BO. This communication takes place by using internal tables of so-called [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") that depend on the behavior definition:
    
    -   The [RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") implements methods with parameters that are typed with BDEF derived types.
    -   The [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") sends or receives internal tables of BDEF derived types to or from the RAP BO provider.
-   RAP business service
    
    A RAP business service provides access to CDS entities by Web clients from outside an AS ABAP. Such an access can be a pure read access (query) or a transactional request.
    
    -   For read accesses (queries), all accesses from the AS ABAP to the underlying database are encapsulated by the [RAP transactional engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry"). Normally, no own ABAP programming is necessary. Only in exceptional cases, special [CDS custom entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") can be used, that are implemented in ABAP classes.
    -   For transactional requests, RAP business objects (RAP BOs) are required. In a RAP BO, a behavior is defined by a RAP behavior definition for a CDS entity, that can be exposed by a RAP business service. The behavior is implemented by the managed RAP BO provider or in ABAP behavior implementations.

The main purpose of RAP BOs is to fulfill transactional OData requests from Web clients to the AS ABAP in accordance to the [RESTful](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestful_glosry.htm "Glossary Entry") paradigm. Besides that, accesses from ABAP programs to RAP BOs of the same AS ABAP are possible by using [ABAP EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_eml_glosry.htm "Glossary Entry").

The following sections describe [RAP business services](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbusiness_service_glosry.htm "Glossary Entry"), the RAP behavior definition language (RAP BDL), and the ABAP statements for RAP.

-   [RAP - Business Services (BS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_business_services.htm)
-   [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm)
-   [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm)

More information about ABAP RAP can be found under [ABAP RESTful Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/289477a81eec4d4e84c0302fb6835035?version=sap_cross_product_abap).

Continue
[RAP - Business Services (BS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_business_services.htm)
[RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm)
[ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm)