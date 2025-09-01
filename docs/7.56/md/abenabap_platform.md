  

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