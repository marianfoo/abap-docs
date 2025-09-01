---
title: "ABAP Language Versions"
description: |
  Each ABAP program has the program property(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_property_glosry.htm 'Glossary Entry') ABAP language version(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm 'Glossary Entry'), which is defined
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_versions.htm"
abapFile: "abenabap_versions.htm"
keywords: ["insert", "do", "if", "try", "method", "class", "data", "abenabap", "versions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Language Versions, ABENABAP_VERSIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

ABAP Language Versions

Each ABAP program has the [program property](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_property_glosry.htm "Glossary Entry") [ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_version_glosry.htm "Glossary Entry"), which is defined internally by a version ID. The version of a program determines which language elements and which [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") can be used in the program and which syntax rules apply. The following versions are currently available:

Language Version

Meaning

Version ID

[Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry")

This version of ABAP is the universal basic version. It is an [unrestricted ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunrestricted_version_glosry.htm "Glossary Entry") that covers the entire language scope of ABAP that can be used in [Unicode systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_system_glosry.htm "Glossary Entry") and apart from the static [package concept](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpackage_concept_glosry.htm "Glossary Entry"), access to all other repository objects is allowed. The [syntax check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensyntax_check_glosry.htm "Glossary Entry") for Standard ABAP is performed as [Unicode check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_check_glosry.htm "Glossary Entry"), which is the minimum requirement for a [Unicode system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_system_glosry.htm "Glossary Entry"). The documentation of this version describes all ABAP language elements.

  X

[ABAP for Key Users](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry")

This version of ABAP is intended for the secure implementation of enhancements by key users within the scope of enhancement options provided by SAP. ABAP for Key Users is a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_version_glosry.htm "Glossary Entry") where the general rules for [Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry") apply but only a very restricted set of language elements is supported and access to [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") is restricted as [described here](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_versions_and_apis.htm). Furthermore, enhancements can be implemented in methods only, where the stricter syntax rules for classes automatically apply and no [obsolete language elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) are allowed. The documentation of ABAP for Key Users is an appropriately restricted version of the full documentation.

  2

[ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry")

This version of ABAP is intended for developments in the [SAP BTP ABAP Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_btp_abap_env_glosry.htm "Glossary Entry") and in the [SAP S/4HANA Cloud ABAP Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abens4_hana_cloud_abap_env_glosry.htm "Glossary Entry"). ABAP for Cloud Development is a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_version_glosry.htm "Glossary Entry") where the general rules for [Standard ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_abap_glosry.htm "Glossary Entry") apply but only a very restricted set of language elements is supported and access to [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") is restricted as [described here](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_versions_and_apis.htm). Furthermore, most developments can be implemented in methods only, where the stricter syntax rules of classes automatically apply. Almost no [obsolete language elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) are allowed. For [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"), the most [strict syntax check mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strict_modes.htm) currently available is applied. The documentation for ABAP for Cloud Development is a restricted version of the full documentation.

  5

The version ID of a program is generally transparent for developers. From a technical perspective, the version ID is stored in the column UCCHECK of the database table TRDIR of the program properties and is usually set by the respective tools. In the statements [INSERT REPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_report.htm) and [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_for_itab.htm) for program processing, the version is either set implicitly or explicitly using the additions VERSION and DIRECTORY ENTRY.

Hints

-   If a program has a version ID that is not listed in the table above, it is handled in the same way as a version that does not support any language elements.
-   The ABAP language versions ABAP for Key Users and ABAP for Cloud Development are restricted compared to standard ABAP. A [restricted ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_version_glosry.htm "Glossary Entry") must be used in a [strict ABAP development environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstrict_abap_dev_envir_glosry.htm "Glossary Entry").
-   The topic [Language Elements in ABAP Versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_abap_elements.htm) provides an overview of the ABAP language elements that are allowed in the [restricted ABAP language versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_version_glosry.htm "Glossary Entry") compared to Standard ABAP, which is an [unrestricted ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunrestricted_version_glosry.htm "Glossary Entry").
-   The topic [Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_apis.htm) provides an overview of APIs that are released for the [restricted ABAP language versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_version_glosry.htm "Glossary Entry") in the current system.
-   Besides ABAP programs, other repository objects can also have a property named ABAP language version.
-   For an overview, see also [ABAP Language Versions, Release Contracts and Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_versions_and_apis.htm).
-   In addition to the ABAP language versions above, there are also some [obsolete ABAP language versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_versions_obsolete.htm) that should not or can no longer be used.

Example

The program DEMO\_ABAP\_VERSIONS makes it possible to check [ABAP source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_source_code_glosry.htm "Glossary Entry") using the syntax rules of the different ABAP language versions.