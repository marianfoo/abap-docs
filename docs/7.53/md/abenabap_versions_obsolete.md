---
title: "Obsolete ABAP Language Versions"
description: |
  The following ABAP language versions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_version_glosry.htm 'Glossary Entry') are obsolete. Language Version Meaning Version ID Static ABAP with restricted object use(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenab
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions_obsolete.htm"
abapFile: "abenabap_versions_obsolete.htm"
keywords: ["do", "if", "try", "data", "abenabap", "versions", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Program Attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attributes_obsolete.htm) → 

Obsolete ABAP Language Versions

The following [ABAP language versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_version_glosry.htm "Glossary Entry") are obsolete.

Language Version

Meaning

Version ID

[Static ABAP with restricted object use](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry")

In this version of ABAP, the rules for [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry") apply, with restrictions on access to external [repository objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm "Glossary Entry"). Dynamically specified data and statements for dynamic creation of programs are forbidden here to make sure that static checks can be carried out. The corresponding language elements are hidden in the documentation for static ABAP with restricted object use.

  3

[Standard ABAP with restricted object use](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_abap_restr_obj_glosry.htm "Glossary Entry")

In this version of ABAP, the rules for [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry") apply, with restrictions on access to external [repository objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm "Glossary Entry"). Dynamic language elements are not forbidden in this version.

  4

[Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_program_glosry.htm "Glossary Entry")

The version ID of a program of this type is initial. No [Unicode checks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_check_glosry.htm "Glossary Entry") are performed in programs of this type.

  -

Only the versions specified under [ABAP language versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions.htm) should be used. The ABAP language versions above are obsolete for the following reasons:

-   There are no application scenarios for the the following versions:

-   static ABAP with restricted object use,

-   standard ABAP with restricted object use.

The associated lists of permitted repository objects have been frozen and no more objects can be added.

-   Non-Unicode ABAP is fully [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_obsolete.htm) and is not supported in this release.