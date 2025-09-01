  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_oview.htm) → 

ABAP Language Versions

Each ABAP program has the [program attribute](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") [ABAP Language Version](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_version_glosry.htm "Glossary Entry"), which is defined internally by the version ID. The version of a program specifies which language elements and which repository objects can be used in the program and which syntax rules apply. The following versions are currently provided:

Language Version

Meaning

Version ID

[Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry")

This version of ABAP is the universal basic version. It covers the entire language scope of ABAP that can be used in [Unicode systems](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_system_glosry.htm "Glossary Entry"). The [Unicode checks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_check_glosry.htm "Glossary Entry") are performed in programs of this type. The documentation of this version describes all ABAP language elements.

  X

[ABAP for Key Users](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry")

This version of ABAP is designed for secure implementations of enhancements as part of [enhancement points](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenhancement_point_glosry.htm "Glossary Entry") by key users provided by SAP. The rules for [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") apply but only a very restricted set of language elements are supported and access to external [repository objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_object_glosry.htm "Glossary Entry") is also restricted. Furthermore, the enhancements are implemented in methods and the stricter syntax rules for classes apply automatically. No [obsolete language elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) are allowed. The documentation for ABAP for Key Users is an appropriately restricted version of the full documentation.

  2

[Static ABAP with restricted object use](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry")

In this version of ABAP, the rules for [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") apply, with restrictions on access to external [repository objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_object_glosry.htm "Glossary Entry"). Dynamically specified data and statements for dynamic creation of programs are forbidden here to make sure that static checks can be carried out. The corresponding language elements are hidden in the documentation for static ABAP with restricted object use.

  3

[Standard ABAP with restricted object use](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_abap_restr_obj_glosry.htm "Glossary Entry")

In this version of ABAP, the rules for [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") apply, with restrictions on access to external [repository objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_object_glosry.htm "Glossary Entry"). Dynamic language elements are not forbidden in this version.

  4

[Obsolete ABAP (Non-Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_program_glosry.htm "Glossary Entry")

This version of ABAP is [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_obsolete.htm) and is no longer supported in the current release. The version ID of a program of this type is initial. No [Unicode checks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_check_glosry.htm "Glossary Entry") are performed in programs of this type.

  -

The version ID of a program is generally transparent for developers. From a technical perspective, the version ID is in the column UCCHECK of the database table TRDIR for program attributes and is usually set by the associated tools. The statements [INSERT REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_report.htm) and [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_itab.htm) used to edit programs either set the version implicitly or set it explicitly using the additions VERSION and DIRECTORY ENTRY.

Notes

-   If a program has a version ID not specified in the table above it is handled like a version that does not support any language elements.

-   The program ABAP\_DOCU\_VERSION\_WHITELIST shows the [repository objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_object_glosry.htm "Glossary Entry") that are allowed for the restricted ABAP language versions.

Example

The program DEMO\_ABAP\_VERSIONS makes it possible to check [ABAP source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_source_code_glosry.htm "Glossary Entry") using the syntax rules of the different ABAP language versions.