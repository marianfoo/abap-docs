---
title: "SELECTION-SCREEN BEGIN OF VERSION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_bov_shortref.htm) Obsolete Syntax SELECTION-SCREEN BEGIN OF VERSION vers text. ... SELECTION-SCREEN EXCLUDE  PARAMETERS para  SELECT-OPTIONS selcrit  RADIOBUTTON GROUPS group
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_version.htm"
abapFile: "abapselection-screen_ldb_version.htm"
keywords: ["select", "do", "if", "try", "data", "abapselection", "screen", "ldb", "version"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_abap_statements.htm) →  [Statements in Logical Databases](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_statements.htm) →  [SELECTION-SCREEN - ldb\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb.htm) → 

SELECTION-SCREEN BEGIN OF VERSION

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_bov_shortref.htm)

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

These variants of the statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen.htm) define a version vers of the [standard selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") for the [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). vers expects a positive number with a maximum of three digits. text expects a text symbol from the [database program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_program_glosry.htm "Glossary Entry") in the form text-idf, where idf is the three-character ID of the text symbol. SELECTION-SCREEN statements that have the addition EXCLUDE are the only statements that can be specified within the first and last statement and these statements can only be specified there.

The definition of a version must be specified after the definition of the standard selection screen. Each version is based on the standard selection screen. The internal SELECTION-SCREEN EXCLUDE statements remove the specified para parameters, the selcrit selection criteria, group radio button groups, and block blocks from the version directly. The IDS addition removes all the elements of the standard selection screen for which the ID id was created when they were defined with the addition [ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_additions.htm).

When an [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is associated with a logical database in the [program attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm "Glossary Entry"), the number verscan be entered in the Selection Screen Version field. This version is then used instead of the full standard selection screen from the logical database. The content of the text symbol specified in text is used as a description of the version in the input help (F4) for the entry field.

Notes

-   A selection screen version can also be entered as a default value in the program attributes of the database program. The number 1000 must then be entered in the attributes of an executable program that is to use the full standard selection screen. The version used in the database program can be identified using the function module RS\_SELSCREEN\_VERSION.
    
-   If logical databases are no longer created, this variant of the statement SELECT-OPTIONS does not need to be used either.