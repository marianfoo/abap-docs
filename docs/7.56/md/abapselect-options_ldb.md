  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_abap_statements.htm) →  [LDB - Statements in Logical Databases](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_statements.htm) → 

SELECT-OPTIONS, ldb\_options

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect-options_shortref.htm)

Obsolete Syntax

... *\[* HELP-REQUEST  *\[* FOR *{*LOW*|*HIGH*}* *\]* *\]*
    *\[* VALUE-REQUEST *\[* FOR *{*LOW*|*HIGH*}* *\]* *\]* ...

Additions:

[1\. ... HELP-REQUEST *\[* FOR *{*LOW*|*HIGH*}* *\]*](#!ABAP_ADDITION_1@1@)
[2\. ... VALUE-REQUEST *\[* FOR *{*LOW*|*HIGH*}* *\]*](#!ABAP_ADDITION_2@2@)

Effect

These additions for the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect-options.htm) are only possible in the [selection include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_statements.htm) of a [logical database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). They can be used to access subroutines for self-defined helps.

Hint

If logical databases are no longer created, it is no longer necessary to use the additions of the statement SELECT-OPTIONS.

Addition 1   

... HELP-REQUEST *\[* FOR *{*LOW*|*HIGH*}* *\]*

Effect

If this addition is specified, the program accesses the subroutine selcrit\_hlp when the user chooses the field help F1 for an input field in the [selection criterion](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_criterion_glosry.htm "Glossary Entry"). The subroutine selcrit\_hlp must be defined in the [database program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the logical database, where selcrit is the name of the selection criterion. FOR LOW or FOR HIGH can be specified to access either the subroutine selcrit-low\_hlp or the subroutine selcrit-high\_hlp, depending on whether the field help is selected for the first or second input field. The addition does not affect the other field. If one of the subroutines does not exist, choosing F1 for the input field has no effect.

If the selection criterion is defined with reference to a data type in the ABAP Dictionary, the field help defined there for the corresponding field is not displayed.

Hint

The subroutines can be used in the same way as a [PARAMETERS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapparameters.htm) statement to program a field help.

Addition 2   

... VALUE-REQUEST *\[* FOR *{*LOW*|*HIGH*}* *\]*

Effect

If this addition is specified, the system accesses either the subroutine selcrit-low\_val or selcrit-high\_val, depending on whether the user chooses the input help F4 on the first or second input field in the [selection criterion](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_criterion_glosry.htm "Glossary Entry"). The subroutines selcrit-low\_val and selcrit-high\_val must be defined in the [database program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_program_glosry.htm "Glossary Entry") for the logical database, where selcrit is the name of the selection criterion. If FOR LOW is specified, the addition only affects the first input field, and if FOR HIGH is specified, it only affects the second.

If one of the subroutines does not exist, choosing F4 for the input field has no effect. If the selection criterion is defined with reference to a data type in the ABAP Dictionary, the input help defined there for the field in question is not displayed.

Hint

The subroutines can be used in the same way as a [PARAMETERS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapparameters.htm) statement to program a field help. When the input help is selected, no other [selection screen events](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") are raised and there is no automatic pass by value between the [selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_glosry.htm "Glossary Entry") and the program.