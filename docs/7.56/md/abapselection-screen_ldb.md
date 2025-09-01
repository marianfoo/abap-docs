---
title: "Obsolete Syntax Forms"
description: |
  Versions of the standard selection screen(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_version.htm) 1. SELECTION-SCREEN BEGIN OF VERSION vers text. ... SELECTION-SCREEN EXCLUDE PARAMETERS para  SELECT-OPTIONS selcrit  RADIOBUTTON GROUPS
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb.htm"
abapFile: "abapselection-screen_ldb.htm"
keywords: ["select", "do", "if", "data", "abapselection", "screen", "ldb"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_abap_statements.htm) →  [LDB - Statements in Logical Databases](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_statements.htm) → 

SELECTION-SCREEN, ldb\_options

Obsolete Syntax Forms

[Versions of the standard selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_version.htm)
1\. SELECTION-SCREEN BEGIN OF VERSION vers text.
  ...
  SELECTION-SCREEN EXCLUDE *{*PARAMETERS para*}*          
                         *|* *{*SELECT-OPTIONS selcrit*}*  
                         *|* *{*RADIOBUTTON GROUPS group*}*  
                         *|* *{*BLOCKS block*}*            
                         *|* *{*IDS id*}*.
  ...
  SELECTION-SCREEN END OF VERSION vers.
[Nodes for field selections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_field.htm)
2\. SELECTION-SCREEN FIELD SELECTION
                   FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.
[Nodes for free selections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_dynamic.htm)
3\. SELECTION-SCREEN DYNAMIC SELECTIONS
                   FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.

Effect

These variants of the statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen.htm) are intended specially for use in a logical database and can only be specified in the [selection include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_statements.htm).

Hint

If logical databases are no longer created, the use of these variants is no longer necessary.

Continue
[SELECTION-SCREEN BEGIN OF VERSION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_version.htm)
[SELECTION-SCREEN FIELD SELECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_field.htm)
[SELECTION-SCREEN DYNAMIC SELECTIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_dynamic.htm)
[SELECTION-SCREEN, ldb\_additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_additions.htm)