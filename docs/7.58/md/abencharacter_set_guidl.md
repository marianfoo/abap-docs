---
title: "Character Set of ABAP Source Code"
description: |
  Background ABAP source code(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_source_code_glosry.htm 'Glossary Entry') is edited in the ABAP Editor tool in ABAP Workbench, itself an ABAP program. ABAP Editor saves and processes the ABAP source code internally in a data object (an
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_set_guidl.htm"
abapFile: "abencharacter_set_guidl.htm"
keywords: ["do", "if", "case", "try", "data", "internal-table", "abencharacter", "set", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternationalization_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Character%20Set%20of%20ABAP%20Source%20Code%2C%20ABENCHARACTER_SET_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Character Set of ABAP Source Code

Background   

[ABAP source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_source_code_glosry.htm "Glossary Entry") is edited in the ABAP Editor tool in ABAP Workbench, itself an ABAP program. ABAP Editor saves and processes the ABAP source code internally in a data object (an internal table).

The source code is processed in the current

[text environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_glosry.htm "Glossary Entry") of the developer, using the associated code page.

Rule   

Use only 7-bit ASCII characters in source code

Use only characters from the 7-bit ASCII character set in ABAP source code. This avoids problems in systems with different code pages.

Details   

The 7 bit ASCII character set contains only characters that also exist in all other code pages. Restricting the characters used in source code to this character set guarantees that this code can be edited and executed regardless of the [logon language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogon_language_glosry.htm "Glossary Entry") or [text environment language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_env_langu_glosry.htm "Glossary Entry"). Source code that contains characters from other character sets could, in the worst case, have incorrect syntax in a system with a different code page.

ABAP words in ABAP statements use only 7-bit ASCII characters anyway, which means that this rules to names, literals, and comments.

Hint

Since the programs with the ABAP language version [Standard ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_abap_glosry.htm "Glossary Entry") are now the only possible programs, so names comply with the rule above automatically. Comments are supposed to be [written in English](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomment_langu_guidl.htm "Guideline") anyway, which removes the need for any country-specific special characters.

In a current system, all [ABAP source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_source_code_glosry.htm "Glossary Entry") is stored in Unicode and this is why this problem does not occur there. If a guarantee could be given that a program was written only for Unicode systems, the rule above would not be needed for literals and comments (at the very least). It is not possible to ensure that a program is not used in any non-Unicode systems, which is why general robustness rules should always be followed. This ensures that programs can be transported from Unicode systems to non-Unicode systems without conversion losses.