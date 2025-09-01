---
title: "Obsolete Syntax"
description: |
  ...  HELP-REQUEST   FOR LOWHIGH    VALUE-REQUEST  FOR LOWHIGH   ... Extras: 1. ... HELP-REQUEST  FOR LOWHIGH (#!ABAP_ADDITION_1@1@) 2. ... VALUE-REQUEST  FOR LOWHIGH (#!ABAP_ADDITION_2@2@) Effect These addition
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options_ldb.htm"
abapFile: "abapselect-options_ldb.htm"
keywords: ["select", "do", "if", "try", "data", "abapselect", "options", "ldb"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_abap_statements.htm) →  [Statements in Logical Databases](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_statements.htm) → 

SELECT-OPTIONS - ldb\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options_shortref.htm)

Obsolete Syntax

... *\[* HELP-REQUEST  *\[* FOR *{*LOW*|*HIGH*}* *\]* *\]*
    *\[* VALUE-REQUEST *\[* FOR *{*LOW*|*HIGH*}* *\]* *\]* ...

Extras:

[1\. ... HELP-REQUEST *\[* FOR *{*LOW*|*HIGH*}* *\]*](#!ABAP_ADDITION_1@1@)
[2\. ... VALUE-REQUEST *\[* FOR *{*LOW*|*HIGH*}* *\]*](#!ABAP_ADDITION_2@2@)

Effect

These additions for the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options.htm) are only possible in the [selection include](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_statements.htm) of a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). They can be used to access subroutines for user-defined help.

Note

If logical databases are no longer created, the additions of the statement SELECT-OPTIONS are no longer needed.

Addition 1

... HELP-REQUEST *\[* FOR *{*LOW*|*HIGH*}* *\]*

Effect

If this addition is specified, the program accesses the subroutine selcrit\_hlp when the user chooses the field help F1 for an input field in the [selection criterion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_criterion_glosry.htm "Glossary Entry"). The subroutine selcrit\_hlp must be defined in the [database program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_program_glosry.htm "Glossary Entry") on the logical database, where selcrit stands for the name of the selection criterion. FOR LOW or FOR HIGH can be specified to access either the subroutine selcrit-low\_hlp or the subroutine selcrit-high\_hlp, depending on whether the field help is selected for the first or second input field. The addition does not affect the other field. If one of the subroutines does not exist, choosing F1 for the input field has no effect.

If the selection criterion is defined with reference to a data type in the ABAP Dictionary, the field help defined there for the corresponding field is not displayed.

Note

The subroutines can be used in the same way as a [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters.htm) statement to program a field help.

Addition 2

... VALUE-REQUEST *\[* FOR *{*LOW*|*HIGH*}* *\]*

Effect

If this addition is specified, the system accesses either the subroutine selcrit-low\_val or selcrit-high\_val, depending on whether the user chooses the input help F4 on the first or second input field in the [selection criterion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_criterion_glosry.htm "Glossary Entry"). The subroutines selcrit-low\_val and selcrit-high\_val must be defined in the [database program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_program_glosry.htm "Glossary Entry") for the logical database, where selcrit stands for the name of the selection criterion. If FOR LOW is specified, the addition only affects the first input field, and if FOR HIGH is specified, it only affects the second.

If one of the subroutines does not exist, choosing F4 for the input field has no effect. If the selection criterion is defined with reference to a data type in the ABAP Dictionary, the input help defined there for the field in question is not displayed.

Note

The subroutines can be used in the same way as a [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters.htm) statement to program a field help. When the user chooses the input help, this does not trigger any other [selection screen events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") and there is no automatic pass by value between the [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") and the program.