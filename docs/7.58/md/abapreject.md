---
title: "REJECT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreject_shortref.htm) Obsolete Syntax REJECT node. Addition: ... node(#!ABAP_ONE_ADD@1@) Effect The statement END-OF-SELECTION is only intended for use in executable programs(https://help.sap.com/doc/abapdocu
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreject.htm"
abapFile: "abapreject.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "data", "abapreject"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_abap_statements.htm) →  [LDB - Statements for Logical Databases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_reporting_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REJECT%2C%20ABAPREJECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REJECT

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreject_shortref.htm)

Obsolete Syntax

REJECT *\[*node*\]*.

Addition:

[... node](#!ABAP_ONE_ADD@1@)

Effect

The statement END-OF-SELECTION is only intended for use in [executable programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that are linked with a [logical database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). It exits the current [GET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget-.htm) event block of an executable program. If node is not specified, any nodes that are at a lower level in the hierarchical structure of the linked logical database are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.

The REJECT statement always refers to the current GET event, not to the location where it is specified. If a [procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry") is called in a GET event block, and the REJECT statement is executed there, the calling event block is affected.

Hints

-   REJECT is forbidden in methods. Also, it is not recommended that REJECT is used in processing blocks other than in GET event blocks. Runtime errors can occur if the processing blocks are not executed in the appropriate context.
-   If logical databases are no longer used, it is no longer necessary to use the statement REJECT.

Addition   

... node

Effect

node can be a [flat](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_glosry.htm "Glossary Entry") [character-like data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") that, when the statement is executed, must contain the name of a node that lies above the current node in the [logical database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") hierarchy. If node is specified, the logical database reads the next data record of the corresponding node.

Example

Exits the event block GET sbook and branches to the event GET sflight after the interface work area sbook was produced as output for the first time. To execute the example, the program must be linked with the logical database F1S.

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

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: The table whose name is in the field dbtab is not active, that is, the table is not above the current table in the database hierarchy. Therefore, the processing cannot continue with the next data record of this table.
    Runtime error: REJECT\_TABLE\_NOT\_FOUND