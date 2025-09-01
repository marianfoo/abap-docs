---
title: "surrogates_glosry"
description: |
  surrogates_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensurrogates_glosry.htm"
abapFile: "abensurrogates_glosry.htm"
keywords: ["do", "while", "try", "abensurrogates", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

surrogates

Also referred to as surrogate pair. Combination of special low and high surrogate characters for addressing characters in the [surrogate area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensurrogate_area_glosry.htm "Glossary Entry") when using [UTF-16](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutf16_glosry.htm "Glossary Entry"). High surrogate characters range from U+D800 to U+DBFF. Low surrogate characters range from U+DC00 to U+DFFF . They are called surrogates because they do not directly represent one character but only as a pair. High and low surrogates can only be part of a surrogate pair and cannot appear on their own in a valid UTF-16 string. While UTF-16 with surrogates is the [system code page](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_codepage_glosry.htm "Glossary Entry") of an [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") the ABAP programming language supports [UCS-2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenucs2_glosry.htm "Glossary Entry") and interprets a surrogate character as two characters.