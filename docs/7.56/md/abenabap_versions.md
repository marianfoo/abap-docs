  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) → 

ABAP Language Versions

Each ABAP program has the [program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry"), which is defined internally by a version ID. The version of a program determines which language elements and which [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") can be used in the program and which syntax rules apply. The following versions are currently available:

Language Version

Meaning

Version ID

[Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry")

This version of ABAP is the universal basic version. It is an [unrestricted ABAP language version](javascript:call_link\('abenunrestricted_version_glosry.htm'\) "Glossary Entry") that covers the entire language scope of ABAP that can be used in [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") and apart from the static [package concept](javascript:call_link\('abenpackage_concept_glosry.htm'\) "Glossary Entry"), access to all other repository objects is allowed. The [syntax check](javascript:call_link\('abensyntax_check_glosry.htm'\) "Glossary Entry") for Standard ABAP is performed as [Unicode check](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry"), which is the minimum requirement for a [Unicode system](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"). The documentation of this version describes all ABAP language elements.

  X

[ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry")

This version of ABAP is intended for the secure implementation of enhancements by key users within the scope of enhancement options provided by SAP. ABAP for Key Users is a [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") where the general rules for [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry") apply but only a very restricted set of language elements is supported and access to [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") is restricted as [described here](javascript:call_link\('abenabap_versions_and_apis.htm'\)). Furthermore, enhancements can be implemented in methods only, where the stricter syntax rules for classes automatically apply and no [obsolete language elements](javascript:call_link\('abenabap_obsolete.htm'\)) are allowed. The documentation of ABAP for Key Users is an appropriately restricted version of the full documentation.

  2

[ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry")

This version of ABAP is intended for developments in the [SAP BTP ABAP environment](javascript:call_link\('abensap_btp_abap_env_glosry.htm'\) "Glossary Entry") and in the [S/4HANA Cloud ABAP environment](javascript:call_link\('abens4_hana_cloud_abap_env_glosry.htm'\) "Glossary Entry"). ABAP for Cloud Development is a [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") where the general rules for [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry") apply but only a very restricted set of language elements is supported and access to [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") is restricted as [described here](javascript:call_link\('abenabap_versions_and_apis.htm'\)). Furthermore, most developments can be implemented in methods only, where the stricter syntax rules of classes automatically apply. Almost no [obsolete language elements](javascript:call_link\('abenabap_obsolete.htm'\)) are allowed. For [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), the most [strict syntax check mode](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) currently available is applied. The documentation for ABAP for Cloud Development is a restricted version of the full documentation.

  5

The version ID of a program is generally transparent for developers. From a technical perspective, the version ID is stored in the column UCCHECK of the database table TRDIR of the program properties and is usually set by the respective tools. In the statements [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)) and [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)) for program processing, the version is either set implicitly or explicitly using the additions VERSION and DIRECTORY ENTRY.

Hints

-   If a program has a version ID that is not listed in the table above, it is handled in the same way as a version that does not support any language elements.
-   The ABAP language versions ABAP for Key Users and ABAP for Cloud Development are restricted compared to standard ABAP. A [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") must be used in a [strict ABAP development environment](javascript:call_link\('abenstrict_abap_dev_envir_glosry.htm'\) "Glossary Entry").
-   The topic [Language Elements in ABAP Versions](javascript:call_link\('abenrestricted_abap_elements.htm'\)) provides an overview of the ABAP language elements that are allowed in the [restricted ABAP language versions](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") compared to Standard ABAP, which is an [unrestricted ABAP language version](javascript:call_link\('abenunrestricted_version_glosry.htm'\) "Glossary Entry").
-   The topic [Released APIs](javascript:call_link\('abenreleased_apis.htm'\)) provides an overview of APIs that are released for the [restricted ABAP language versions](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") in the current system.
-   Besides ABAP programs, also other repository objects can have an attribute named ABAP language version.
-   For an overview, see also [ABAP Language Versions, Release Contracts and Released APIs](javascript:call_link\('abenabap_versions_and_apis.htm'\)).
-   In addition to the ABAP language versions above, there are also some [obsolete ABAP language versions](javascript:call_link\('abenabap_versions_obsolete.htm'\)) that should not or can no longer be used.

Example

The program DEMO\_ABAP\_VERSIONS makes it possible to check [ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry") using the syntax rules of the different ABAP language versions.