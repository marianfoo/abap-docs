  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [LDB - Statements for Logical Databases](javascript:call_link\('abenldb_reporting_statements.htm'\)) → 

SELECT-OPTIONS, NO DATABASE SELECTION

[Short Reference](javascript:call_link\('abapselect-options_shortref.htm'\))

Obsolete Syntax

...  *\[* NO DATABASE SELECTION *\]* ...

Effect

The addition NO DATABASE SELECTION of the statement [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) is only possible in an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") that is connected to a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") and controls the passing of the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") to the logical database in the following situations:

-   It is used in an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") that is associated with a logical database.

-   A component of a node in the connected logical database is specified for dobj after the addition [FOR](javascript:call_link\('abapselect-options_for.htm'\)) and is declared in the program with a [TABLES](javascript:call_link\('abaptables.htm'\)) or [NODES](javascript:call_link\('abapnodes.htm'\)) statement.

-   The node in the logical database is designed for dynamic selections.

If this addition is specified, the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") is not passed to the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") as a dynamic selection after [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").

Hint

If logical databases are no longer used, this addition of the statement SELECT-OPTIONS no longer needs to be used either.