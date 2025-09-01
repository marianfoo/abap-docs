---
title: "IMPORT - Text Language Rule"
description: |
  The rule described in this section is relevant only in cases where structures defined in ABAP Dictionary in a Unicode system(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_system_glosry.htm 'Glossary Entry') are imported from the database and these same structures were expo
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenimport_text_language.htm"
abapFile: "abenimport_text_language.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "internal-table", "abenimport", "text", "language"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [Data Clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster.htm) →  [IMPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_data_cluster.htm) → 

IMPORT - Text Language Rule

The rule described in this section is relevant only in cases where structures defined in ABAP Dictionary in a [Unicode system](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_system_glosry.htm "Glossary Entry") are imported from the database and these same structures were exported in an [MDMP system](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmdmp-system_glosry.htm "Glossary Entry"), and vice versa.

Character-like data can be stored in an MDMP system encoded according to different [code pages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencodepage_glosry.htm "Glossary Entry"). The character set ID stored in [EXPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_data_cluster.htm) is therefore not sufficient. For this reason, the statement [IMPORT FROM DATABASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_medium.htm) is used for evaluating the [text language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_language_glosry.htm "Glossary Entry") of database tables or structures defined in the ABAP Dictionary.

The following hierarchy applies to assignments of the text language to a structure:

1.  A component that is labeled as a text language in a substructure or table-like component with a structured row type is only valid for this substructure or internal table.
2.  A component labeled as a text language in a superordinate structure applies to this structure and to all other structures or table-like components nested in it, which do not have any components of their own that can be identified as a text language.
3.  If a component labeled as a text language is among the freely selected components of the [export/import tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexport_import_table_glosry.htm "Glossary Entry") in which the data is stored, this determines the text language for all elementary fields, structures, and internal tables in the corresponding data cluster that do not have their own language.

When importing from structures stored in the database, the text language determines the code page used to handle the character-like components of a structure as follows:

-   Importing MDMP data into a Unicode system
    The code page of the imported data is determined using the text language from the database tables TCPOC (table of [text environments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_environment_glosry.htm "Glossary Entry")) and TCP0D (localization of the database). If no text language component is available, the character set ID stored during export is used.
    This rule is based on the assumption that the Unicode system has resulted from the conversion of an MDMP system. If it has not, this may lead to conversion errors.

-   Importing Unicode data into an MDMP system
    The imported data is handled according to the assignment of languages to code pages defined in the MDMP system, depending on the text language. If no text language component is available, the current [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used.

Note

Structures and internal tables with a structured row type that is based on types defined in the ABAP program do not have a text language. The character set ID stored during export is always used for these.