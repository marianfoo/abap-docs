---
title: "ABAP Language Versions, Release Contracts and Released APIs"
description: |
  ABAP supports two main programming paradigms: -   ABAP Cloud(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cloud_glosry.htm 'Glossary Entry') -   Classic ABAP(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_abap_glosry.htm 'Glossary Entry') While in c
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_versions_and_apis.htm"
abapFile: "abenabap_versions_and_apis.htm"
keywords: ["do", "while", "if", "case", "try", "method", "class", "data", "abenabap", "versions", "and", "apis"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_context.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Language%20Versions%2C%20Release%20Contracts%20and%20Released%20APIs%2C%20ABENABAP_VERSIONS_AND_APIS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

ABAP Language Versions, Release Contracts and Released APIs

ABAP supports two main programming paradigms:

-   [ABAP Cloud](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cloud_glosry.htm "Glossary Entry")
-   [Classic ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_abap_glosry.htm "Glossary Entry")

While in classic ABAP there is unrestricted access to an [ABAP Platform](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_platform_glosry.htm "Glossary Entry"), in ABAP Cloud there are restrictions regarding ABAP language versions and access to APIs explained in the following topics.

-   [ABAP Language Versions](#abenabap-versions-and-apis-1-------release-contracts---@ITOC@@ABENABAP_VERSIONS_AND_APIS_2)
-   [Released APIs](#@@ITOC@@ABENABAP_VERSIONS_AND_APIS_3)

ABAP Language Versions   

[ABAP programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_glosry.htm "Glossary Entry") as well as other [repository objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_object_glosry.htm "Glossary Entry") have an attribute called [ABAP language version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_version_glosry.htm "Glossary Entry"). For an ABAP program, its language version defines the syntax rules and set of repository objects that can be addressed as APIs. For other repository objects the ABAP language version mainly defines the usable APIs.

Two main ABAP language versions are supported:

-   [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry")
    
    [Restricted ABAP language version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_version_glosry.htm "Glossary Entry") for [ABAP Cloud](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cloud_glosry.htm "Glossary Entry").
    
    -   It covers a subset of the ABAP language scope.
        
        See [Language Elements in ABAP Versions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_abap_elements.htm) for a list of ABAP language elements that are allowed in the ABAP for Cloud Development compared to Standard ABAP.
        
    -   Access to APIs is restricted.
        
        Repository objects with language version ABAP for Cloud Development can access objects which are [released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm "Glossary Entry") for ABAP for Cloud Development or are in the same software component. Objects of a local software component with language version ABAP for Cloud Development can access the objects of all other of their software components with language version ABAP for Cloud Development.
        
-   [Standard ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_abap_glosry.htm "Glossary Entry")
    
    [Unrestricted ABAP language version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunrestricted_version_glosry.htm "Glossary Entry") for [classic ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_abap_glosry.htm "Glossary Entry"). It covers the entire language scope of ABAP and besides the [package concept](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpackage_concept_glosry.htm "Glossary Entry") there are no restrictions for accessing APIs.
    

Hints

-   The ABAP language version of a repository object can either be set explicitly or is derived implicitly, e.g. from the package or the software component.
-   Another [restricted ABAP language version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_version_glosry.htm "Glossary Entry") is [ABAP for Key Users](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry") that is used for development objects created using key user apps. Repository objects with language version ABAP for Key Users can access objects which are [released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm "Glossary Entry") for key user apps or were created by key user apps and marked for use by other key user apps. For more information, see [Key User Extensibility](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ed0e11412f9841e7ac5cd9a6799368d4/3ccb50e724b045508fea8b2cf1774b2b).
-   For more information about the ABAP language version of an ABAP program see [ABAP Language Versions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_versions.htm).

Release Contracts   

A repository object can be classified by a [release contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrelease_contract_glosry.htm "Glossary Entry"). A release contract is the prerequisite for classifying a repository object as a [released API](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm "Glossary Entry") that can be accessed in a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_version_glosry.htm "Glossary Entry"). It ensures a certain stability regarding consistency and compatibility of repository objects that are released as APIs. For repository objects delivered by SAP, compliance with a release contract is checked by special [ATC checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenatc_glosry.htm "Glossary Entry").

The following release contracts are available:

-   Extend (C0)
    
    This contract ensures stability at dedicated extension points to allow for a certain extensibility.
    
    Contract C0 is relevant for repository objects that are enhanced by enhancement tools, e.g. of the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") or [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry").
    
    For more information, see [Extend (C0)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/2ce344a782d74d8aab073fa188af5116) on SAP Help Portal and [Compatibility Rules for the C0 Contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules.htm).
    
-   Use System-Internally (C1)
    
    This contract ensures a technically stable public interface for system-internal use. Existing visible components, for example parameters, elements, or CDS associations, must not be changed in an incompatible way. Optional components might be added later.
    
    Contract C1 is relevant for repository objects that are accessed by different [ABAP language versions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_version_glosry.htm "Glossary Entry").
    
    For more information, see [Use System-Internally (C1)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/3ccb57a1a4d04ee192fdc2a849a89158).
    
-   Use as Remote API (C2)
    
    This contract ensures a technically stable public interface for use as remote API. It is similar to C1 but additionally guarantees, that external consumers of the API do not need to be adjusted after an upgrade.
    
    Contract C2 is relevant only for external consumption.
    
    For more information, see [Use as Remote API (C2)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/9c7f9ba825064053874d5870bcb991fb).
    
-   Manage Configuration Content (C3)
    
    This contract ensures a stable persistence for own configuration content that can be exported, imported, displayed and edited using dedicated APIs. No key or other fields must be changed. Non-key fields might be added later.
    
    Contract C3 is relevant for Business Configuration Tools.
    
-   Use in ABAP-Managed Database Procedures (AMDP) (C4)
    
    This contract ensures a technically stable public interface for use in [ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_managed_db_proc_glosry.htm "Glossary Entry"). It is similar to C1 but in contrast to C1, no optional components can be added later. No changes are allowed.
    
    Contract C4 is relevant for repository objects that are accessed by [AMDP methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry"), such as AMDP-related [BAdI methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_method_glosry.htm "Glossary Entry").
    
    For more information, see [Use System-Internally (C4)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/288854b83f764fc2b7ae8c5f62140cfe).
    

The program ABAP\_DOCU\_RELEASED\_APIS displays a list of repository objects of the current system, that are classified with a release contract.

Released APIs   

As stated above, repository objects with a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_version_glosry.htm "Glossary Entry") cannot freely access other repository objects. Besides some allowed accesses, for example inside the same software component, only access to those repository objects is allowed that are a [released API](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm "Glossary Entry") for that language version. Releasing an API for a restricted ABAP language version comprises two classifications:

-   The repository object must be classified with an appropriate [release contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrelease_contract_glosry.htm "Glossary Entry").
-   The repository object must be classified as visible for the [restricted ABAP language version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_version_glosry.htm "Glossary Entry").

Repository objects with release contracts C0 and C1 can be made visible for the [Restricted ABAP language versions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_version_glosry.htm "Glossary Entry") [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry") and [ABAP for Key Users](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry"). For accessing released APIs from other repository objects of certain ABAP language versions, only release contract C1 is relevant.

The classification of a repository object as a released API is part of the development process. The classification must be part of the same software component or even package as the repository object itself. This ensures that APIs can be released only by organizations that are responsible for the repository objects.

See [Released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_apis.htm) for a list of repository objects that are released as APIs in the current system.

Hints

-   It is recommended that released APIs are subject to an approval process, as it is the case at SAP.
-   For more information, see [Released APIs](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/c479660d07374c15a1a5fe83fdbb1337).
-   See [Working with Released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_apis.htm) for rules that must be obeyed by providers and consumers.
-   The [package concept](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpackage_concept_glosry.htm "Glossary Entry") can also restrict the access to APIs but is not enforced. Package checks are carried out in [ABAP Test Cockpit (ATC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_test_cockpit_glosry.htm "Glossary Entry") and report only package errors that can be determined statically. There are no dynamic checks during the execution of a program.