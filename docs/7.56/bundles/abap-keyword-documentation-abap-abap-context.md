# ABAP - Keyword Documentation / ABAP - ABAP Context

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_context.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_context.htm)
- [abenabap_platform.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_platform.htm)
- [abenabap_versions_and_apis.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_versions_and_apis.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.56
**Generated**: 2025-09-01T11:25:45.436Z

---

### abenabap_context.htm

> **📖 Official SAP Documentation**: [abenabap_context.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_context.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) → 

ABAP - ABAP Context

The following subjects introduce the context of ABAP developments.

-   [ABAP Platforms](javascript:call_link\('abenabap_platform.htm'\))
-   [ABAP Language Versions, Release Contracts and Released APIs](javascript:call_link\('abenabap_versions_and_apis.htm'\))

Continue
[ABAP Platforms](javascript:call_link\('abenabap_platform.htm'\))
[ABAP Language Versions, Release Contracts and Released APIs](javascript:call_link\('abenabap_versions_and_apis.htm'\))



**📖 Source**: [abenabap_context.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_context.htm)

### abenabap_platform.htm

> **📖 Official SAP Documentation**: [abenabap_platform.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_platform.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Context](javascript:call_link\('abenabap_context.htm'\)) → 

ABAP Platforms

An [ABAP platform](javascript:call_link\('abenabap_platform_glosry.htm'\) "Glossary Entry") is a technical platform for SAP products such as [SAP S/4HANA](javascript:call_link\('abensap_s4hana_glosry.htm'\) "Glossary Entry") or [SAP Business Technology Platform (SAP BTP)](javascript:call_link\('abensap_btp_glosry.htm'\) "Glossary Entry") on which ABAP-based applications are developed and executed.

The foundation of an ABAP platform are [ABAP systems](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry") which are [client-server systems](javascript:call_link\('abenclient_server_system_glosry.htm'\) "Glossary Entry") consisting of

-   a presentation layer based on Web-based technologies or [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry"),
-   an [Application Server ABAP (AS ABAP)](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"),
-   the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the AS ABAP.

An ABAP platform provides an [ABAP development environment (ABAP DE)](javascript:call_link\('abenabap_dev_envir_glosry.htm'\) "Glossary Entry") that mainly consists of:

-   [ABAP](javascript:call_link\('abenabap_glosry.htm'\) "Glossary Entry") as its main programming language.
    
    Depending on the ABAP platform, different [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") can be used. Besides ABAP, there are other programming languages as [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") for metadata definitions or [Simple Transformation](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry") for data transformations.
    
-   Development tools for developing ABAP applications.
    
    Besides ABAP Editors for editing [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry"), there is a variety of tools for editing all kinds of [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"). The tools are mainly distinguished by two variants:
    
    -   Tools of the Eclipse-based [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry")
    -   Tools of the [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry")\-based [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").
-   The possibility to access APIs made up by other [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry").
    
    Important examples are usage of metadata defined in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") or in [ABAP Core Data Services (ABAP CDS)](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") in ABAP programs or calling external functional units as [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") of [global classes](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry"). Besides access to objects located on the same AS ABAP, access to external development objects is also possible.
    

There are mainly two types of ABAP Platforms that differ in their programming paradigms.

-   [ABAP Platform Classic](#abenabap-platform-1-------abap-platform-strict---@ITOC@@ABENABAP_PLATFORM_2)
    -   [SAP BTP ABAP Environment](#abenabap-platform-3-----------abap-platform-cloud---@ITOC@@ABENABAP_PLATFORM_4)

ABAP Platform Classic

For ABAP developments on an [ABAP platform classic](javascript:call_link\('abenabap_platform_classic_glosry.htm'\) "Glossary Entry") there are no restrictions regarding [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry"), development tools or access to [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry").

An ABAP platform classic is delivered as the ABAP platform of [SAP S/4HANA](javascript:call_link\('abensap_s4hana_glosry.htm'\) "Glossary Entry").

ABAP development on an ABAP platform classic and its products can be summarized under the term [classic ABAP](javascript:call_link\('abenclassic_abap_glosry.htm'\) "Glossary Entry"). An ABAP platform classic offers a [classic ABAP development environment](javascript:call_link\('abenclassic_abap_dev_envir_glosry.htm'\) "Glossary Entry") that has the following features:

-   The [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") can freely be chosen for ABAP programs. By default, [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry") is set.
-   [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") and the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") can be both used as development tools.
-   All [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") can be accessed from other repository objects. A [package concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry") is available but not enforced.

Hint

The obsolete [Non-Unicode ABAP](javascript:call_link\('abennon_unicode_abap_glosry.htm'\) "Glossary Entry") is not considered as valid ABAP language version here.

ABAP Platform Strict

For ABAP developments on an [ABAP platform strict](javascript:call_link\('abenabap_platform_strict_glosry.htm'\) "Glossary Entry") there are restrictions regarding [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry"), development tools and access to [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") (see [ABAP Language Versions, Release Contracts and Released APIs](javascript:call_link\('abenabap_versions_and_apis.htm'\))).

ABAP development on an ABAP platform strict and its products can be summarized under the term [strict ABAP](javascript:call_link\('abenstrict_abap_glosry.htm'\) "Glossary Entry"). For strict ABAP programming [special rules](javascript:call_link\('abenabap_strict_rules.htm'\)) apply.

Currently, there are the following ABAP platforms available as ABAP platform strict:

SAP BTP ABAP Environment

The [SAP BTP ABAP environment](javascript:call_link\('abensap_btp_abap_env_glosry.htm'\) "Glossary Entry") is delivered as a standalone ABAP platform for cloud applications (aka [Steampunk](javascript:call_link\('abensteampunk_glosry.htm'\) "Glossary Entry")).

For ABAP development, the SAP BTP ABAP environment offers a [strict ABAP development environment](javascript:call_link\('abenstrict_abap_dev_envir_glosry.htm'\) "Glossary Entry") that has the following features:

-   [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry") must be used as [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") that is restricted compared to [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry").
-   Access to [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") is governed by a list of [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") that is checked statically as well as during runtime.
-   Only [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") can be used as development tools. [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry") cannot be used.

Hint

The program ABAP\_DOCU\_STEAMPUNK\_APIS shows the repository objects released as APIs in the SAP BTP ABAP environment.

ABAP Platform Cloud

The [ABAP platform cloud](javascript:call_link\('abenabap_platform_cloud_glosry.htm'\) "Glossary Entry") is delivered as the ABAP platform of [SAP S/4HANA Cloud](javascript:call_link\('abensap_s4hana_cloud_glosry.htm'\) "Glossary Entry").

For ABAP development by partners and customers, the ABAP platform cloud offers a strict ABAP development environment named [S/4HANA Cloud ABAP environment](javascript:call_link\('abens4_hana_cloud_abap_env_glosry.htm'\) "Glossary Entry") (aka [embedded Steampunk](javascript:call_link\('abenembedded_steampunk_glosry.htm'\) "Glossary Entry")). The S/4HANA Cloud ABAP environment has the same features as the strict ABAP development environment of the [SAP BTP ABAP environment (Steampunk)](javascript:call_link\('abensap_btp_abap_env_glosry.htm'\) "Glossary Entry"):

-   [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry") must be used as [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") that is restricted compared to [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry").
-   Access to [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") is governed by a list of [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") that is checked statically as well as during runtime.
-   Only [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") can be used as development tools. [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry") cannot be used.

Hint

The program ABAP\_DOCU\_STEAMPUNK\_APIS shows the repository objects released as APIs in the S/4HANA Cloud ABAP environment.



**📖 Source**: [abenabap_platform.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_platform.htm)

### abenabap_versions_and_apis.htm

> **📖 Official SAP Documentation**: [abenabap_versions_and_apis.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_versions_and_apis.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenabap_versions_and_apis.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_versions_and_apis.htm)


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Context](javascript:call_link\('abenabap_context.htm'\)) → 

ABAP Language Versions, Release Contracts and Released APIs

ABAP can be developed on an [ABAP platform classic](javascript:call_link\('abenabap_platform_classic_glosry.htm'\) "Glossary Entry") or an [ABAP platform strict](javascript:call_link\('abenabap_platform_strict_glosry.htm'\) "Glossary Entry"). Especially for [strict ABAP](javascript:call_link\('abenstrict_abap_glosry.htm'\) "Glossary Entry"), the following subjects are important:

-   [ABAP Language Versions](#abenabap-versions-and-apis-1-------release-contracts---@ITOC@@ABENABAP_VERSIONS_AND_APIS_2)
-   [Released APIs](#@@ITOC@@ABENABAP_VERSIONS_AND_APIS_3)

ABAP Language Versions

[ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") as well as other [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") have an attribute called [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry"). For an ABAP program, its language version defines the syntax rules and set of repository objects that can be addressed as APIs. For other repository objects the ABAP language version mainly defines the usable APIs.

There are three supported ABAP language versions:

-   [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry")
-   [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry")
-   [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry")

Standard ABAP covers the entire language scope of ABAP and besides the [package concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry") there are no restrictions for accessing APIs. ABAP for Cloud Development and ABAP for Key Users are [restricted ABAP language versions](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") which are required for certain developments:

-   ABAP for Cloud Development must be used for developments on an [ABAP platform strict](javascript:call_link\('abenabap_platform_strict_glosry.htm'\) "Glossary Entry").
-   ABAP for Key Users is used for development objects created with the help of key user apps.

Compared to Standard ABAP, these ABAP language versions are restricted as follows:

-   The ABAP language scope is limited.
    
    See [Language Elements in ABAP versions](javascript:call_link\('abenrestricted_abap_elements.htm'\)) for a list of ABAP language elements that are allowed in the restricted language versions compared to Standard ABAP.
    
-   Access to other repository objects is restricted as follows:
    -   Repository objects with language version ABAP for Key Users can access objects which are [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") for key user apps or were created by key user apps and marked for use by other key user apps.
    -   Repository objects with language version ABAP for Cloud Development can access objects which are [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") for ABAP for Cloud Development or are in the same software component. Objects of a local software component can access the objects of all other software components.

[Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry") is an [unrestricted ABAP language version](javascript:call_link\('abenunrestricted_version_glosry.htm'\) "Glossary Entry").

Hints

-   The ABAP language version of a repository object can either be set explicitly or is derived implicitly, e.g. from the package or the software component.
-   For more information about the ABAP language version of an ABAP program see [ABAP Language Versions](javascript:call_link\('abenabap_versions.htm'\)).

Release Contracts

A repository object can be classified by a [release contract](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry"). A release contract is the prerequisite for classifying a repository object as a [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") that can be accessed in a [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry"). It ensures a certain stability regarding consistency and compatibility of repository objects that are released as APIs. For repository objects delivered by SAP, compliance with a release contract is checked by special [ATC checks](javascript:call_link\('abenatc_glosry.htm'\) "Glossary Entry").

The following release contracts are available:

-   Extend (C0)
    
    This contract ensures stability at dedicated extension points to allow for a certain extensibility.
    
    Contract C0 is relevant for repository objects that are enhanced by enhancement tools, e.g. of the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") or [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry").
    
    For more information, see Extend (C0).
    
-   Use System-Internally (C1)
    
    This contract ensures a technically stable public interface for system-internal use. Existing visible components as for example parameters, elements or CDS associations must not be changed in an incompatible way. Optional components might be added later.
    
    Contract C1 is relevant for repository objects that are accessed by different [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry").
    
    For more information, see Use System-Internally (C1).
    
-   Use as Remote API (C2)
    
    This contract ensures a technically stable public interface for use as remote API. It is similar to C1 but additionally guarantees, that external consumers of the API do not need to be adjusted after an upgrade.
    
    Contract C2 is relevant only for external consumption.
    
    For more information, see Use as Remote API (C2).
    
-   Manage Configuration Content (C3)
    
    This contract ensures a stable persistence for own configuration content that can be exported, imported, displayed and edited using dedicated APIs. No key or other fields must be changed. Non-key fields might be added later.
    
    Contract C3 is relevant for Business Configuration Tools.
    

The program ABAP\_DOCU\_RELEASED\_APIS displays a list of repository objects of the current system, that are classified with a release contract.

Released APIs

As stated above, repository objects with a [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") cannot freely access other repository objects. Besides some allowed accesses, as e.g. inside the same software component, only access to repository objects is allowed that are a [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") for that language version. Releasing an API for a restricted ABAP language version comprises two classifications:

-   The repository object must be classified with an appropriate [release contract](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry").
-   The repository object must be classified as visible for the [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry").

Repository objects with release contracts C0 and C1 can be made visible for the restricted ABAP language versions [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry") and [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry"). For accessing released APIs from other repository objects of certain ABAP language versions, only release contract C1 is relevant.

The classification of a repository object as a released API is part of the development process. The classification must be part of the same software component or even package as the repository object itself. This ensures, that APIs can be released only by organizations that are responsible for the repository objects.

See [Released APIs](javascript:call_link\('abenreleased_apis.htm'\)) for a list of repository objects that are released as APIs in the current system.

Hints

-   It is recommended that released APIs are subject to an approval process, as it is the case at SAP.
-   For more information, see Released APIs.
-   The [package concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry") can also restrict the access to APIs but is not enforced. Package checks are carried out in [ABAP Test Cockpit (ATC)](javascript:call_link\('abenabap_test_cockpit_glosry.htm'\) "Glossary Entry") and report only package errors that can be determined statically. There are no dynamic checks during the execution of a program.
-   See [Working with released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) for rules that must be obeyed by providers and consumers.
