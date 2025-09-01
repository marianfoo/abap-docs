  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternationalization_guidl.htm) → 

Character Set of ABAP Source Code

Background

[ABAP source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_source_code_glosry.htm "Glossary Entry") is edited in the ABAP Editor tool in ABAP Workbench, itself an ABAP program. ABAP Editor saves and processes the ABAP source code internally in a data object (an internal table).

The source code is processed in the current

[text environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_environment_glosry.htm "Glossary Entry") of the developer, using the associated code page.

Rule

Use only 7-bit ASCII characters in source code

Use only characters from the 7-bit ASCII character set in ABAP source code. This avoids problems in systems with different code pages.

Details

The 7 bit ASCII character set contains only characters that also exist in all other code pages. Restricting the characters used in source code to this character set guarantees that this code can be edited and executed regardless of the [logon language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogon_language_glosry.htm "Glossary Entry") or [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry"). Source code that contains characters from other character sets could, in the worst case, have incorrect syntax in a system with a different code page.

ABAP words in ABAP statements use only 7-bit ASCII characters anyway, which means that this rules to names, literals, and comments.

Note

Since the programs with the ABAP language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") are now the only possible programs, so names comply with the rule above automatically. Comments are supposed to be [written in English](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlangu_choice_guidl.htm "Guideline") anyway, which removes the need for any country-specific special characters.

In a current system, all [ABAP source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_source_code_glosry.htm "Glossary Entry") is stored in Unicode and this is why this problem does not occur there. If a guarantee could be given that a program was written only for Unicode systems, the rule above would not be needed for literals and comments (at the very least). It is not possible to ensure that a program is not used in any non-Unicode systems, which is why general robustness rules should always be followed. This ensures that programs can be transported from Unicode systems to non-Unicode systems without conversion losses.