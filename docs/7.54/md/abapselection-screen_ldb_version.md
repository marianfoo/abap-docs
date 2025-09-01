  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [Logical Databases - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [Statements in Logical Databases](javascript:call_link\('abenldb_statements.htm'\)) →  [SELECTION-SCREEN - ldb\_options](javascript:call_link\('abapselection-screen_ldb.htm'\)) → 

SELECTION-SCREEN BEGIN OF VERSION

[Quick Reference](javascript:call_link\('abapselection-screen_bov_shortref.htm'\))

Obsolete Syntax

SELECTION-SCREEN BEGIN OF VERSION vers text.
...
SELECTION-SCREEN EXCLUDE *{* *{*PARAMETERS para*}*    
                         *|* *{*SELECT-OPTIONS selcrit*}*  
                         *|* *{*RADIOBUTTON GROUPS group*}*  
                         *|* *{*BLOCKS block*}*            
                         *|* *{*IDS id*}* *}*.
...
SELECTION-SCREEN END OF VERSION vers.

Effect

These variants of the statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) define a version vers of the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") for the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"). vers expects a positive number with a maximum of three digits. text expects a text symbol from the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") in the form text-idf, where idf is the three-character ID of the text symbol. SELECTION-SCREEN statements that have the addition EXCLUDE are the only statements that can be specified within the first and last statement and these statements can only be specified there.

The definition of a version must be specified after the definition of the standard selection screen. Each version is based on the standard selection screen. The internal SELECTION-SCREEN EXCLUDE statements remove the specified para parameters, the selcrit selection criteria, group radio button groups, and block blocks from the version directly. The IDS addition removes all the elements of the standard selection screen for which the ID id was created when they were defined with the addition [ID](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)).

When an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") is associated with a logical database in the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry"), the number verscan be entered in the Selection Screen Version field. This version is then used instead of the full standard selection screen from the logical database. The content of the text symbol specified in text is used as a description of the version in the input help (F4) for the entry field.

Notes

-   You can also enter a selection screen version as a standard value in the program attributes of the database program. You must then enter the number 1000 in the attributes of an executable program that is to use the full standard selection screen. The version used in the database program can be identified using the function module RS\_SELSCREEN\_VERSION.
    
-   If logical databases are no longer created, this variant of the statement SELECT-OPTIONS does not need to be used either.