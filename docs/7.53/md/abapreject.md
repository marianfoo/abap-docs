---
title: "REJECT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreject_shortref.htm) Obsolete Syntax REJECT node. Addition: ... node(#!ABAP_ONE_ADD@1@) Effect The statement END-OF-SELECTION is only intended for use in executable programs(https://help.sap.com/doc/abapdocu
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreject.htm"
abapFile: "abapreject.htm"
keywords: ["select", "do", "if", "try", "method", "data", "abapreject"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_abap_statements.htm) →  [Statements for Logical Databases](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_reporting_statements.htm) → 

REJECT

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreject_shortref.htm)

Obsolete Syntax

REJECT *\[*node*\]*.

Addition:

[... node](#!ABAP_ONE_ADD@1@)

Effect

The statement END-OF-SELECTION is only intended for use in [executable programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that are associated with a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). It exits the current [GET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget-.htm) event block of an executable program. If node is not specified, any nodes that are at a lower level in the hierarchical structure of the associated logical database are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.

The REJECT statement always refers to the current GET event, not to the location where it is specified. If a [procedure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm "Glossary Entry") is called in a GET event block, and the REJECT statement is executed there, the calling event block is modified.

Notes

-   REJECT cannot be used in methods. Also, it is not recommended that REJECT is used in processing blocks other than in GET event blocks. Runtime errors can occur if the processing blocks are not executed in the correct context.
    
-   If logical databases are no longer used, the statement REJECT is also no longer necessary.
    

Addition

... node

Effect

node can be specified as a [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") [character-like data object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_object_glosry.htm "Glossary Entry"). When the statement is executed, the object must contain the name of a node that lies above the current node in the [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") hierarchy. If node is specified, the logical database reads the next data record of the corresponding node.

Example

Exits the event block GET sbook and branches to the event GET sflight after the interface work area sbook is produced for the first time. Before the example can run, the program must be associated with the logical database F1S.

NODES: sflight,
       sbook.
GET sflight.
  cl\_demo\_output=>next\_section(
    |Carrid: { sflight-carrid } | &&
    |Connid: { sflight-connid } | &&
    |Fldate: { sflight-fldate }| ).
GET sbook.
  cl\_demo\_output=>write\_text(
      |Bookid: { sbook-bookid }| ).
  REJECT 'SFLIGHT'.
END-OF-SELECTION.
  cl\_demo\_output=>display( ).

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: The table whose name is in the field dbtab is not active. This means that the table does not lie above the current table in the database hierarchy. Therefore, the processing cannot continue with the next data record of this table.
    Runtime error: REJECT\_TABLE\_NOT\_FOUND