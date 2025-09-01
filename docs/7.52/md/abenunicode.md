  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_oview.htm) →  [ABAP Character Set](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharacter_sets.htm) → 

Switching to Unicode

Before Unicode support was introduced, many ABAP programmers assumed that one character corresponded to one byte. Therefore, before a non-Unicode system is converted to Unicode, ABAP programs must be changed wherever an explicit or implicit assumption is made about the internal length of a character. This mainly affects the following:

-   [Character processing and byte string processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm)

-   Access to [structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_structure.htm). The latter is affected because [flat structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_structure_glosry.htm "Glossary Entry") in a program of the ABAP language version [Obsolete ABAP (Non-Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") are handled like character-like data objects and some programming techniques exploit this fact. The [structure fragment view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") can be used to handle structures.

Before a program is switched to Unicode, the [ABAP language version](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_versions.htm) [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") or higher must be configured in the program attributes. The [Unicode checks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_check_glosry.htm "Glossary Entry") are then performed for these versions. The transaction UCCHECK supports the activation of these checks for existing programs.

In a Unicode system, only programs with the ABAP language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") or higher can be executed. Programs with the ABAP language version [Obsolete ABAP (Non-Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") can only be executed in non-Unicode systems. Before the switch to a Unicode system, we recommend that the profile parameter abap/unicode\_check be set to "ON" so that only the execution of programs with the ABAP language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry") or higher is permitted.

Notes

-   The program RSUNISCAN\_FINAL can be used instead of transaction UCCHECK.

-   In the current release, programs with the ABAP language version [Obsolete ABAP (Non-Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") cannot be used.