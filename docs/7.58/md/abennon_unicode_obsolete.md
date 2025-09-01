---
title: "Obsolete Disabling of the Unicode Check"
description: |
  When a program is created, the ABAP language version(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_versions.htm) Standard ABAP(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_abap_glosry.htm 'Glossary Entry') with enabled Unicode checks(https://hel
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennon_unicode_obsolete.htm"
abapFile: "abennon_unicode_obsolete.htm"
keywords: ["do", "if", "try", "abennon", "unicode", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Program Properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_properties_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Disabling%20of%20the%20Unicode%20Check%2C%20ABENNON_UNICODE_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

Obsolete Disabling of the Unicode Check

When a program is created, the [ABAP language version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_versions.htm) [Standard ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_abap_glosry.htm "Glossary Entry") with enabled [Unicode checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunicode_check_glosry.htm "Glossary Entry") is set by default.

-   Programs with the language version [Standard ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_abap_glosry.htm "Glossary Entry") work in [Unicode systems](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunicode_system_glosry.htm "Glossary Entry") and non-Unicode systems.
-   Programs with the [obsolete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_versions_obsolete.htm) language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennon_unicode_abap_glosry.htm "Glossary Entry") only work in non-Unicode systems.

In the current [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") release, only Unicode systems are supported. Programs with the language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennon_unicode_abap_glosry.htm "Glossary Entry") can no longer be executed in the current release. The ABAP language version must not be set back to [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennon_unicode_abap_glosry.htm "Glossary Entry"). Higher [ABAP language versions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_version_glosry.htm "Glossary Entry") are possible because they cover the Unicode checks.

Programming Guideline

[Program Properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_property_guidl.htm "Guideline")