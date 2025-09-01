---
title: "Obsolete Disabling of the Unicode Check"
description: |
  When a program is created, the ABAP language version(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_versions.htm) standard ABAP (Unicode)(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm 'Glossary Entry') with enabled Unicode checks
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_obsolete.htm"
abapFile: "abennon_unicode_obsolete.htm"
keywords: ["do", "try", "abennon", "unicode", "obsolete"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Program Attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attributes_obsolete.htm) → 

Obsolete Disabling of the Unicode Check

When a program is created, the [ABAP language version](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_versions.htm) [standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") with enabled [Unicode checks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_check_glosry.htm "Glossary Entry") is configured by default.

-   Programs with the language version [standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") work in both [Unicode systems](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_system_glosry.htm "Glossary Entry") and non-Unicode systems.

-   Programs with the language version [obsolete ABAP (non-Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") only work in non-Unicode systems.

In the current [SAP NetWeaver](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_netweaver_glosry.htm "Glossary Entry") release, only Unicode systems are supported. Programs with the language version [obsolete ABAP (non-Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") can no longer be executed in the current release. The ABAP language version cannot be reset to [obsolete ABAP (non-Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_program_glosry.htm "Glossary Entry"). Higher [ABAP language versions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_version_glosry.htm "Glossary Entry") are possible because they cover the Unicode checks.

Programming Guideline

[Program Attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_guidl.htm "Guideline")