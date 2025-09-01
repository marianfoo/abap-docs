  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [LDB - Statements in Logical Databases](javascript:call_link\('abenldb_statements.htm'\)) →  [SELECTION-SCREEN, ldb\_options](javascript:call_link\('abapselection-screen_ldb.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%20BEGIN%20OF%20VERSION%2C%20ABAPSELECTION-SCREEN_LDB_VERSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

SELECTION-SCREEN BEGIN OF VERSION

[Short Reference](javascript:call_link\('abapselection-screen_bov_shortref.htm'\))

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

The definition of a version must be specified after the definition of the standard selection screen. Each version is based on the standard selection screen. The inner SELECTION-SCREEN EXCLUDE statements remove the directly specified para selection parameters, selcrit selection criteria, group radio button groups, and block blocks from the version. The IDS addition removes all the elements of the standard selection screen for which the ID id was created when they were defined with the addition [ID](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)).

When an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") is linked with a logical database in the [program properties](javascript:call_link\('abenprogram_property_glosry.htm'\) "Glossary Entry"), the number vers can be entered in the Selection Screen Version field. This version is then used instead of the complete standard selection screen from the logical database. The content of the text symbol specified in text is used as a description of the version in the input help (F4) for the input field.

Hints

-   A selection screen version can also be entered as a standard value in the program properties of the database program itself. The number 1000 must then be entered in the properties of an executable program that wants to use the complete standard selection screen. The version used in the database program can be identified using the function module RS\_SELSCREEN\_VERSION.
-   If logical databases are no longer created, it is no longer necessary to use this variant of the statement SELECT-OPTIONS.