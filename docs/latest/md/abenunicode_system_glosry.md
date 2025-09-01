---
title: "Unicode system"
description: |
  Single code page system(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensingle_codepage_system_glosry.htm 'Glossary Entry') in which characters are encoded in a Unicode character representation(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunicode_char_r
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunicode_system_glosry.htm"
abapFile: "abenunicode_system_glosry.htm"
keywords: ["do", "if", "try", "abenunicode", "system", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Unicode%20system%2C%20ABENUNICODE_SYSTEM_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Unicode system

[Single code page system](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensingle_codepage_system_glosry.htm "Glossary Entry") in which characters are encoded in a [Unicode character representation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunicode_char_represent_glosry.htm "Glossary Entry"). The [system code page](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_codepage_glosry.htm "Glossary Entry") of a Unicode system is [UTF-16](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutf16_glosry.htm "Glossary Entry") with platform-dependent [byte order](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_order_glosry.htm "Glossary Entry") of which the ABAP programming language supports the subset covered by [UCS-2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenucs2_glosry.htm "Glossary Entry"). All ABAP programs in a Unicode system must have the [ABAP language version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_version_glosry.htm "Glossary Entry") [Standard ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_abap_glosry.htm "Glossary Entry"). In the current [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") release, only Unicode systems are supported.