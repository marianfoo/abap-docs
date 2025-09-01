  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) → 

ABAP Language Versions

Each ABAP program has the [program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") [ABAP Language Version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry"), which is defined internally by the version ID. The version of a program specifies which language elements and which repository objects can be used in the program and which syntax rules apply. The following versions are currently provided:

Language Version

Meaning

Version ID

[Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry")

This version of ABAP is the universal basic version. It covers the entire language scope of ABAP that can be used in [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"). The [Unicode checks](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry") are performed in programs of this type. The documentation of this version describes all ABAP language elements.

  X

[ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry")

This version of ABAP is designed for secure implementations of enhancements as part of enhancement points by key users provided by SAP. The rules for [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") apply but only a very restricted set of language elements are supported and access to external [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") is also restricted. Furthermore, the enhancements are implemented in methods and the stricter syntax rules for classes apply automatically. No [obsolete language elements](javascript:call_link\('abenabap_obsolete.htm'\)) are allowed. The documentation for ABAP for Key Users is an appropriately restricted version of the full documentation.

  2

[ABAP for SAP Cloud Platform](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry")

This ABAP version is designed for developments in the [ABAP Environment](javascript:call_link\('abenabap_environment_glosry.htm'\) "Glossary Entry") of the SAP Cloud Platform. The rules for [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry") apply but only a very restricted set of language elements are supported and access to external [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") is also restricted. Furthermore, the developments are implemented in methods and the stricter syntax rules for classes apply automatically. No [obsolete language elements](javascript:call_link\('abenabap_obsolete.htm'\)) are allowed. The documentation for ABAP for SAP Cloud Platform is an appropriately restricted version of the full documentation.

  5

The version ID of a program is generally transparent for developers. From a technical perspective, the version ID is in the column UCCHECK of the database table TRDIR for program attributes and is usually set by the associated tools. The statements [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)) and [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)) used to edit programs either set the version implicitly or set it explicitly using the additions VERSION and DIRECTORY ENTRY.

Notes

-   If a program has a version ID not specified in the table above it is handled like a version that does not support any language elements.

-   The program ABAP\_DOCU\_VERSION\_WHITELIST shows the [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that are allowed for the restricted ABAP language versions.

-   Alongside the ABAP language versions above, some [obsolete ABAP language versions](javascript:call_link\('abenabap_versions_obsolete.htm'\)) exist that should not (or cannot) be used.

Example

The program DEMO\_ABAP\_VERSIONS makes it possible to check [ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry") using the syntax rules of the different ABAP language versions.