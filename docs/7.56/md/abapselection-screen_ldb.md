  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [LDB - Statements in Logical Databases](javascript:call_link\('abenldb_statements.htm'\)) → 

SELECTION-SCREEN, ldb\_options

Obsolete Syntax Forms

[Versions of the standard selection screen](javascript:call_link\('abapselection-screen_ldb_version.htm'\))
1\. SELECTION-SCREEN BEGIN OF VERSION vers text.
  ...
  SELECTION-SCREEN EXCLUDE *{*PARAMETERS para*}*          
                         *|* *{*SELECT-OPTIONS selcrit*}*  
                         *|* *{*RADIOBUTTON GROUPS group*}*  
                         *|* *{*BLOCKS block*}*            
                         *|* *{*IDS id*}*.
  ...
  SELECTION-SCREEN END OF VERSION vers.
[Nodes for field selections](javascript:call_link\('abapselection-screen_ldb_field.htm'\))
2\. SELECTION-SCREEN FIELD SELECTION
                   FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.
[Nodes for free selections](javascript:call_link\('abapselection-screen_ldb_dynamic.htm'\))
3\. SELECTION-SCREEN DYNAMIC SELECTIONS
                   FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.

Effect

These variants of the statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) are intended specially for use in a logical database and can only be specified in the [selection include](javascript:call_link\('abenldb_statements.htm'\)).

Hint

If logical databases are no longer created, the use of these variants is no longer necessary.

Continue
[SELECTION-SCREEN BEGIN OF VERSION](javascript:call_link\('abapselection-screen_ldb_version.htm'\))
[SELECTION-SCREEN FIELD SELECTION](javascript:call_link\('abapselection-screen_ldb_field.htm'\))
[SELECTION-SCREEN DYNAMIC SELECTIONS](javascript:call_link\('abapselection-screen_ldb_dynamic.htm'\))
[SELECTION-SCREEN, ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))