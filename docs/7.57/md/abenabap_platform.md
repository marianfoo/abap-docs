  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - ABAP Context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_context.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Platforms, ABENABAP_PLATFORM, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

ABAP Platforms

An [ABAP Platform](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_platform_glosry.htm "Glossary Entry") is a technical platform for SAP products such as [SAP S/4HANA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_s4hana_glosry.htm "Glossary Entry") or [SAP Business Technology Platform (SAP BTP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_btp_glosry.htm "Glossary Entry") on which ABAP-based applications are developed and executed.

The foundation of an ABAP Platform are [ABAP systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_system_glosry.htm "Glossary Entry") which are [client-server systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_server_system_glosry.htm "Glossary Entry") consisting of

-   a presentation layer based on Web-based technologies or [SAP GUI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gui_glosry.htm "Glossary Entry"),
-   an [Application Server ABAP (AS ABAP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry"),
-   the [ABAP database schema](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") of the [standard database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry") of the AS ABAP.

An ABAP Platform provides an [ABAP development environment (ABAP DE)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dev_envir_glosry.htm "Glossary Entry") that mainly consists of:

-   [ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glosry.htm "Glossary Entry") as its main programming language.
    
    Depending on the ABAP Platform, different [ABAP language versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry") can be used. Besides ABAP, there are other programming languages as [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") for metadata definitions or [Simple Transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensimple_transformation_glosry.htm "Glossary Entry") for data transformations.
    
-   Development tools for developing ABAP applications.
    
    Besides ABAP Editors for editing [ABAP programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_glosry.htm "Glossary Entry"), there is a variety of tools for editing all kinds of [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry"). The tools are mainly distinguished by two variants:
    
    -   Tools of the Eclipse-based [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry")
    -   Tools of the [SAP GUI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gui_glosry.htm "Glossary Entry")\-based [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry").
-   The possibility to access APIs made up by other [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry").
    
    Important examples are usage of metadata defined in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") or in [ABAP Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") in ABAP programs or calling external functional units as [methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_glosry.htm "Glossary Entry") of [global classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenglobal_class_glosry.htm "Glossary Entry"). Besides access to objects located on the same AS ABAP, access to external development objects is also possible.
    

There are mainly two types of ABAP Platforms that differ in their programming paradigms.

-   [ABAP Platform Classic](#@@ITOC@@ABENABAP_PLATFORM_1)
-   [ABAP Platform Strict](#@@ITOC@@ABENABAP_PLATFORM_2)
    -   [SAP BTP ABAP Environment](#@@ITOC@@ABENABAP_PLATFORM_3)
    -   [ABAP Platform Cloud](#@@ITOC@@ABENABAP_PLATFORM_4)

Hint

The term "ABAP Platform" replaces the usage of the term "Application Server ABAP" in SAP NetWeaver which itself replaced the term "SAP Basis". Nowadays, an "ABAP Platform" plays the same role for applications written in ABAP as the SAP basis once did.

ABAP Platform Classic   

For ABAP developments on an [ABAP Platform Classic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_platform_classic_glosry.htm "Glossary Entry") there are no restrictions regarding [ABAP language versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry"), development tools or access to [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry").

An ABAP Platform Classic is delivered as the ABAP Platform of [SAP S/4HANA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_s4hana_glosry.htm "Glossary Entry").

ABAP development on an ABAP Platform Classic and its products can be summarized under the term [classic ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclassic_abap_glosry.htm "Glossary Entry"). An ABAP Platform Classic offers a [classic ABAP development environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclassic_abap_dev_envir_glosry.htm "Glossary Entry") that has the following features:

-   The [ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry") can freely be chosen for ABAP programs. By default, [Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry") is set.
-   [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") and the [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry") can be both used as development tools.
-   All [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") can be accessed from other repository objects. A [package concept](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpackage_concept_glosry.htm "Glossary Entry") is available but not enforced.

Hint

The obsolete [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennon_unicode_abap_glosry.htm "Glossary Entry") is not considered as valid ABAP language version here.

ABAP Platform Strict   

For ABAP developments on an [ABAP Platform Strict](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_platform_strict_glosry.htm "Glossary Entry") there are restrictions regarding [ABAP language versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry"), development tools and access to [released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry") (see [ABAP Language Versions, Release Contracts and Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_versions_and_apis.htm)).

ABAP development on an ABAP Platform Strict and its products can be summarized under the term [strict ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstrict_abap_glosry.htm "Glossary Entry"). For strict ABAP programming [special rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_strict_rules.htm) apply.

Currently, there are the following ABAP Platforms available as ABAP Platform Strict:

SAP BTP ABAP Environment   

The [SAP BTP ABAP Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_btp_abap_env_glosry.htm "Glossary Entry") is delivered as a standalone ABAP Platform for cloud applications (aka [Steampunk](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensteampunk_glosry.htm "Glossary Entry")).

For ABAP development, the SAP BTP ABAP Environment offers a [strict ABAP development environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstrict_abap_dev_envir_glosry.htm "Glossary Entry") that has the following features:

-   [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry") must be used as [ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry") that is restricted compared to [Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry").
-   Access to [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") is governed by a list of [released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry") that is checked statically as well as during runtime.
-   Only [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") can be used as development tools. [SAP GUI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gui_glosry.htm "Glossary Entry") cannot be used.

Hint

The program ABAP\_DOCU\_STEAMPUNK\_APIS shows the repository objects released as APIs in the SAP BTP ABAP Environment.

ABAP Platform Cloud   

The [ABAP Platform Cloud](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_platform_cloud_glosry.htm "Glossary Entry") is delivered as the ABAP Platform of [SAP S/4HANA Cloud](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_s4hana_cloud_glosry.htm "Glossary Entry").

For ABAP development by partners and customers, the ABAP Platform Cloud offers a strict ABAP development environment named [SAP S/4HANA Cloud ABAP Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abens4_hana_cloud_abap_env_glosry.htm "Glossary Entry") (aka [embedded Steampunk](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenembedded_steampunk_glosry.htm "Glossary Entry")). The SAP S/4HANA Cloud ABAP Environment has the same features as the strict ABAP development environment of the [SAP BTP ABAP Environment (Steampunk)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_btp_abap_env_glosry.htm "Glossary Entry"):

-   [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry") must be used as [ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry") that is restricted compared to [Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry").
-   Access to [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") is governed by a list of [released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry") that is checked statically as well as during runtime.
-   Only [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") can be used as development tools. [SAP GUI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_gui_glosry.htm "Glossary Entry") cannot be used.

Hint

The program ABAP\_DOCU\_STEAMPUNK\_APIS shows the repository objects released as APIs in the SAP S/4HANA Cloud ABAP Environment.