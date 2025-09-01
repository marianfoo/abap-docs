  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_oview.htm) → 

ABAP Language Versions

Each ABAP program has the [program attribute](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") [ABAP Language Version](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_version_glosry.htm "Glossary Entry"), which is defined internally by a version ID. The version of a program determines which language elements and which repository objects can be used in the program and which syntax rules apply. The following versions are currently available:

Language Version

Meaning

Version ID

[Standard ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_abap_glosry.htm "Glossary Entry")

This version of ABAP is the universal basic version. It covers the entire language scope of ABAP that can be used in [Unicode systems](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_system_glosry.htm "Glossary Entry"). [Unicode checks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_check_glosry.htm "Glossary Entry") are performed in such programs. The documentation of this version describes all ABAP language elements.

  X

[ABAP for Key Users](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry")

This version of ABAP is intended for the secure implementation of enhancements as part of enhancement options by key users provided by SAP. The rules for [Standard ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_abap_glosry.htm "Glossary Entry") apply but only a very restricted set of language elements is supported and access to external [repository objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepository_object_glosry.htm "Glossary Entry") is also severely restricted. Furthermore, the enhancements are implemented in methods and the stricter syntax rules for classes apply automatically, and no [obsolete language elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) are allowed. The documentation of ABAP for Key Users is an appropriately restricted version of the full documentation.

  2

[ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry")

This version of ABAP is intended for developments in the [SAP Cloud Platform, ABAP Environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_cp_abap_env_glosry.htm "Glossary Entry") and other cloud developments. The rules for [Standard ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_abap_glosry.htm "Glossary Entry") apply but only a very restricted set of language elements is supported and access to external [repository objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepository_object_glosry.htm "Glossary Entry") is also restricted. Furthermore, the developments are implemented in methods and the stricter syntax rules of classes apply automatically. No [obsolete language elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) are allowed. For [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry"), the most strict syntax check mode currently available is applied. The documentation for ABAP for Cloud Development is a restricted version of the full documentation.

  5

The version ID of a program is generally transparent for developers. From a technical perspective, the version ID is stored in the column UCCHECK of the database table TRDIR of the program properties and is usually set by the associated tools. In the statements [INSERT REPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_report.htm) and [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsyntax-check_for_itab.htm) for program processing, the version is either set implicitly or explicitly using the additions VERSION and DIRECTORY ENTRY.

Hints

-   If a program has a version ID that is not listed in the table above, it is handled in the same way as a version that does not support any language elements.

-   The program ABAP\_DOCU\_VERSION\_WHITELIST shows the [repository objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepository_object_glosry.htm "Glossary Entry") that are allowed by SAP for the restricted ABAP language versions.

-   In addition to the ABAP language versions above, there are also some [obsolete ABAP language versions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_versions_obsolete.htm) that should not or can no longer be used.

Example

The program DEMO\_ABAP\_VERSIONS makes it possible to check [ABAP source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_source_code_glosry.htm "Glossary Entry") using the syntax rules of the different ABAP language versions.