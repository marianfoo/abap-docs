  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Context](javascript:call_link\('abenabap_context.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Platform%2C%20ABENABAP_PLATFORM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Platform

An [ABAP Platform](javascript:call_link\('abenabap_platform_glosry.htm'\) "Glossary Entry") is a technical platform for SAP products such as [SAP Business Technology Platform (SAP BTP)](javascript:call_link\('abensap_btp_glosry.htm'\) "Glossary Entry") or [SAP S/4HANA](javascript:call_link\('abensap_s4hana_glosry.htm'\) "Glossary Entry") or on which ABAP-based applications are developed and executed.

The foundation of an ABAP Platform are [ABAP systems](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry") which are [client-server systems](javascript:call_link\('abenclient_server_system_glosry.htm'\) "Glossary Entry") consisting of

-   a presentation layer based on Web-based technologies or [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry"),
-   an [Application Server ABAP (AS ABAP)](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"),
-   the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the AS ABAP.

An ABAP Platform provides an [ABAP development environment (ABAP DE)](javascript:call_link\('abenabap_dev_envir_glosry.htm'\) "Glossary Entry") that mainly consists of:

-   [ABAP](javascript:call_link\('abenabap_glosry.htm'\) "Glossary Entry") as its main programming language.
    
    Depending on the usage of the ABAP Platform, different [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") can be used. Besides ABAP, there are other programming languages as [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") for metadata definitions or [Simple Transformation](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry") for data transformations.
    
-   Development tools for developing ABAP applications.
    
    Besides ABAP Editors for editing [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry"), there is a variety of tools for editing all kinds of [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"). The tools are mainly distinguished by two variants:
    
    -   Tools of the Eclipse-based [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry")
    -   Tools of the [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry")\-based [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").
-   The possibility to access APIs made up by other [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry").
    
    Important examples are usage of metadata defined in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") or in [ABAP Core Data Services (ABAP CDS)](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") in ABAP programs or calling external functional units as [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") of [global classes](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry"). Besides access to objects located on the same AS ABAP, access to external development objects is also possible.
    

There are mainly two usage types of ABAP Platforms that differ in their programming paradigms.

-   [ABAP Platform for ABAP Cloud](#@@ITOC@@ABENABAP_PLATFORM_1)
    -   [SAP BTP ABAP Environment](#@@ITOC@@ABENABAP_PLATFORM_2)
    -   [ABAP Platform Cloud](#@@ITOC@@ABENABAP_PLATFORM_3)
-   [ABAP Platform for Classic ABAP](#@@ITOC@@ABENABAP_PLATFORM_4)

Hint

The term ABAP Platform replaces the usage of the term Application Server ABAP in SAP NetWeaver which itself replaced the term SAP Basis. Nowadays, an ABAP Platform plays the same role for applications written in ABAP as the SAP basis once did.

ABAP Platform for ABAP Cloud   

[ABAP Cloud](javascript:call_link\('abenabap_cloud_glosry.htm'\) "Glossary Entry") is a programming paradigm for building ABAP-based cloud-ready business apps, services or extensions. For programming in ABAP Cloud, a subset of the ABAP Platform is used, where [special rules](javascript:call_link\('abenabap_strict_rules.htm'\)) apply. Compared to [classic ABAP](javascript:call_link\('abenclassic_abap_glosry.htm'\) "Glossary Entry"), there are restrictions regarding [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry"), development tools and access to [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") (see [ABAP Language Versions, Release Contracts and Released APIs](javascript:call_link\('abenabap_versions_and_apis.htm'\))).

The following are examples for ABAP Platforms used for ABAP Cloud:

SAP BTP ABAP Environment   

The [SAP BTP ABAP Environment](javascript:call_link\('abensap_btp_abap_env_glosry.htm'\) "Glossary Entry") is delivered as a standalone ABAP Platform for cloud applications (aka [Steampunk](javascript:call_link\('abensteampunk_glosry.htm'\) "Glossary Entry")).

For ABAP Cloud development, the SAP BTP ABAP Environment offers a restricted [ABAP development environment](javascript:call_link\('abenabap_dev_envir_glosry.htm'\) "Glossary Entry") that has the following features:

-   [ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry") must be used as [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") that is restricted compared to [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry").
-   Access to [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") is governed by a list of [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") that is checked statically as well as during runtime.
-   Only [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") can be used as development tools. [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry") cannot be used.

Hint

The program ABAP\_DOCU\_STEAMPUNK\_APIS shows the repository objects released as APIs in the SAP BTP ABAP Environment.

ABAP Platform Cloud   

The [ABAP Platform Cloud](javascript:call_link\('abenabap_platform_cloud_glosry.htm'\) "Glossary Entry") is delivered as the ABAP Platform of [SAP S/4HANA Cloud](javascript:call_link\('abensap_s4hana_cloud_glosry.htm'\) "Glossary Entry").

For ABAP development by partners and customers, the ABAP Platform Cloud offers a restricted ABAP development environment named [SAP S/4HANA Cloud ABAP Environment](javascript:call_link\('abens4_hana_cloud_abap_env_glosry.htm'\) "Glossary Entry") (aka [embedded Steampunk](javascript:call_link\('abenembedded_steampunk_glosry.htm'\) "Glossary Entry")). The SAP S/4HANA Cloud ABAP Environment has the same features as the restricted ABAP development environment of the [SAP BTP ABAP Environment (Steampunk)](javascript:call_link\('abensap_btp_abap_env_glosry.htm'\) "Glossary Entry"):

-   [ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry") must be used as [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") that is restricted compared to [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry").
-   Access to [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") is governed by a list of [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") that is checked statically as well as during runtime.
-   Only [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") can be used as development tools. [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry") cannot be used.

Hint

The program ABAP\_DOCU\_STEAMPUNK\_APIS shows the repository objects released as APIs in the SAP S/4HANA Cloud ABAP Environment.

ABAP Platform for Classic ABAP   

[Classic ABAP](javascript:call_link\('abenclassic_abap_glosry.htm'\) "Glossary Entry") is an evolutionary grown programming environment for legacy solutions. For ABAP developments in classic ABAP, the complete ABAP Platform can be used. There are no restrictions regarding [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry"), development tools or access to [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry").

Such an unrestricted ABAP Platform is used by [SAP S/4HANA](javascript:call_link\('abensap_s4hana_glosry.htm'\) "Glossary Entry"). It offers an unrestricted [ABAP development environment](javascript:call_link\('abenabap_dev_envir_glosry.htm'\) "Glossary Entry") that has the following features:

-   The [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") can freely be chosen for ABAP programs. By default, [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry") is set.
-   [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") and the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") can be both used as development tools.
-   All [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") can be accessed from other repository objects. A [package concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry") is available but not enforced.

Hint

The obsolete [Non-Unicode ABAP](javascript:call_link\('abennon_unicode_abap_glosry.htm'\) "Glossary Entry") is not considered as valid ABAP language version here.