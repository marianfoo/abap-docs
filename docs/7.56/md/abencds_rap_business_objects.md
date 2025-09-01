---
title: "ABAP CDS - RAP Business Objects (RAP BO)"
description: |
  A RAP business object (RAP BO) is a business object (BO)(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbusiness_object_glosry.htm 'Glossary Entry') that plays a central role in ABAP RAP(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_glosry.htm 'Glossary
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm"
abapFile: "abencds_rap_business_objects.htm"
keywords: ["do", "if", "try", "method", "data", "types", "internal-table", "abencds", "rap", "business", "objects"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) → 

ABAP CDS - RAP Business Objects (RAP BO)

A RAP business object (RAP BO) is a [business object (BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbusiness_object_glosry.htm "Glossary Entry") that plays a central role in [ABAP RAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_glosry.htm "Glossary Entry") by enabling transactional access to data that are described by [ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry"). A business object is not a repository object, but it is made up from the following components and their relations- The CDS behavior definition plays a central role here in bringing the individual components together.

-   Data model
    
    The data modeling of a business object takes place using CDS entities that construct a [CDS composition tree](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_tree_glosry.htm "Glossary Entry"), which is itself defined using [CDS compositions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") and [to-parent associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry"). The components of a tree-like hierarchy of this type are as follows:
    
    -   [Root entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_entity_glosry.htm "Glossary Entry")
        
        Each business object has exactly one root entity. A root entity is a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry"), a [CDS custom entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_custom_entity_glosry.htm "Glossary Entry"), or an [CDS abstract entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") defined using the addition ROOT. The root entity represents the business object. A root entity can have one or more child entities but cannot have a parent entity.
        
    -   [Child entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchild_entity_glosry.htm "Glossary Entry")
        
        [CDS compositions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") can be used to define one or more child entities for each CDS entity of a business object. Before a CDS entity can be defined as a child entity, it must contain a [to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") with the parent entity and expose it.
        
    -   [Parent entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparent_entity_glosry.htm "Glossary Entry")
        
        A CDS entity of a business object that uses [CDS compositions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") to define child entities is their parent entity. Each child entity can have exactly one parent entity and the syntax guarantees this by defining and exposing exactly one [to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") in each child entity.
        
    -   [Leaf entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleaf_entity_glosry.htm "Glossary Entry")
        
        A CDS entity of a business object that is not a parent entity or in which no child entities are defined using [CDS compositions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") is a leaf entity.
        
-   Behavior
    
    The [RAP business object behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_behavior_glosry.htm "Glossary Entry") is defined in a [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") (BDEF). The BDEF defines the main characteristics of a RAP BO and which [CRUD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencrud_glosry.htm "Glossary Entry") operations or other actions it provides. There are two kinds of RAP BOs, managed and unmanaged:
    
    -   For a [managed RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), its behavior is fully or partly provided by the managed RAP BO provider.
    -   For an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), its behavior must be fully provided by an [ABAP behavior implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_implement_glosry.htm "Glossary Entry").
    
    The BDEF also defines the communication between the consumer and the provider of a RAP BO. This communication takes place by using internal tables of so-called [BDEF derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") that depend on the behavior definition:
    
    -   The [RAP BO provider](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") implements methods with parameters that are typed with BDEF derived types.
    -   The [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") sends or receives internal tables of BDEF derived types to or from the RAP BO provider.

The main purpose of RAP BOs is to fulfill transactional OData requests from Web clients to the AS ABAP in accordance to the [RESTful](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestful_glosry.htm "Glossary Entry") paradigm. Besides that, accesses from ABAP programs to RAP BOs of the same AS ABAP are possible by using [ABAP EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_eml_glosry.htm "Glossary Entry").

The following topics describe the BDL for CDS behavior definitions:

-   [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm)

The ABAP statements for RAP are described in the following topics of the ABAP programming language:

-   [ABAP for RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm)
    -   [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm)
    -   [ABAP for Consuming RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm)
    -   [Other RAP-supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm)

Hint

See also [ABAP RESTful Programming Model](https://help.sap.com/viewer/c0d02c4330c34b3abca88bdd57eaccfc/Cloud/en-US/3b77569ca8ee4226bdab4fcebd6f6ea6.html)

Continue
[ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm)
![Example](exa.gif "Example") [RAP - Simple Unmanaged RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_simple_bo_abexa.htm)
![Example](exa.gif "Example") [RAP - Simple Managed RAP Business Object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_simple_managed_bo_abexa.htm)