  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenldb_abap_statements.htm) →  [LDB - Statements for Logical Databases](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenldb_reporting_statements.htm) → 

SELECT-OPTIONS, NO DATABASE SELECTION

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_shortref.htm)

Obsolete Syntax

...  *\[* NO DATABASE SELECTION *\]* ...

Effect

The addition NO DATABASE SELECTION of the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options.htm) is only possible in an [executable program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that is connected to a [logical database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") and controls the passing of the [selection table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_table_glosry.htm "Glossary Entry") to the logical database in the following situations:

-   It is used in an [executable program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that is associated with a logical database.

-   A component of a node in the connected logical database is specified for dobj after the addition [FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_for.htm) and is declared in the program with a [TABLES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptables.htm) or [NODES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnodes.htm) statement.

-   The node in the logical database is designed for dynamic selections.

If this addition is specified, the [selection table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_table_glosry.htm "Glossary Entry") is not passed to the [logical database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") as a dynamic selection after [selection screen processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Hint

If logical databases are no longer used, this addition of the statement SELECT-OPTIONS no longer needs to be used either.