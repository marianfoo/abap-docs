---
title: "Obsolete Disabling of the Unicode Check"
description: |
  When a program is created, the ABAP language version(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions.htm) Standard ABAP (Unicode)(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm 'Glossary Entry') with enabled Unicode checks
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_obsolete.htm"
abapFile: "abennon_unicode_obsolete.htm"
keywords: ["do", "try", "abennon", "unicode", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Program Attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attributes_obsolete.htm) → 

Obsolete Disabling of the Unicode Check

When a program is created, the [ABAP language version](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions.htm) [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry") with enabled [Unicode checks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_check_glosry.htm "Glossary Entry") is configured by default.

-   Programs with the language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry") work in both [Unicode systems](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_system_glosry.htm "Glossary Entry") and non-Unicode systems.

-   Programs with the [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions_obsolete.htm) language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") only work in non-Unicode systems.

In the current [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") release, only Unicode systems are supported. Programs with the language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") can no longer be executed in the current release. The ABAP language version cannot be set back to [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_program_glosry.htm "Glossary Entry"). Higher [ABAP language versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_version_glosry.htm "Glossary Entry") are possible because they cover the Unicode checks.

Programming Guideline

[Program Attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_guidl.htm "Guideline")