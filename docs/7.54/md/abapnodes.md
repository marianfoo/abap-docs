---
title: "NODES"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnodes_shortref.htm) Obsolete Syntax NODES node TYPE type. Effect The sole effect of the statement NODES is to pass data from logical databases(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlog
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnodes.htm"
abapFile: "abapnodes.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abapnodes"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb_abap_statements.htm) →  [Interface Work Areas for Logical Databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb_interfaces.htm) → 

NODES

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnodes_shortref.htm)

Obsolete Syntax

NODES node *\[*TYPE type*\]*.

Effect

The sole effect of the statement NODES is to pass data from [logical databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") to [executable programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry"). It defines an [interface work area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") and is allowed only in the global declaration section of executable programs that are associated with a logical database, and in the [database program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_program_glosry.htm "Glossary Entry") of logical databases. node must be the name of a node of the logical database. NODES declares a [table work area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_work_area_glosry.htm "Glossary Entry") node for the respective node. The data type of the table work area is either predefined in the node of the logical database or can be chosen from a list using the addition TYPE.

The nodes of the structure of a logical database are entered in transaction SE36 and can have the following node types:

-   Node Type T
    The data type of the table work area can be a [flat structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_structure_glosry.htm "Glossary Entry") from ABAP Dictionary, in particular a database table or a [view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenview_glosry.htm "Glossary Entry"). The name of the node must be identical to the name of the structure.
    In this case, the statements NODES and [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables.htm) have the same meaning. In the executable program, either the statement NODES or the statement TABLES can be used for every node of type T, where node is the name of the node or of the structure. The addition TYPE is not allowed. The database program contains one TABLES statement for every node of type T.
    
-   Node Type S
    The data type of the table work area can be any data type from ABAP Dictionary. The name of the node can differ from the name of the type.
    In executable programs, a NODES statement can be specified for each node of type S. The addition TYPE is not allowed. The database program contains one NODES statement for every node of type S.
    
-   Node Type C
    The data type of the table work area can be any data type from a [type group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry"). The name of the node can differ from the name of the type.
    In executable programs, a NODES statement can be specified for each node of type C. The addition TYPE is not allowed. The database program contains one NODES statement for every node of type C.
    
-   Node Type A
    A list of any data types from ABAP Dictionary is assigned to this node. The actual type is determined in the executable program by the addition TYPE of the statement NODES.
    In the executable program, the statement NODES can be specified for every node of type A. Here, the addition TYPE must be used to specify one of the assigned data types from the list. The addition TYPE defines the data type of the table work area in the executable program and in the database program. The database program contains a NODES statement without the addition TYPE for every node of type A.
    

The statement NODES (or TABLES) of the [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry") controls the structure of the standard selection screen of the logical database. Only those input fields are displayed, for whose nodes (or a node lying directly below in the hierarchy) a corresponding NODES (or TABLES) statement appears in the executable program.

The database program is responsible for assigning data to the table work area. For every node of the logical database, there is a subroutine put\_node in the database program, which uses the statement [PUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapput.htm) to signal to the executable program that data is available in the table work area node.

For all table work areas node specified after NODES (or TABLES) in the executable program, event blocks can be created for the [reporting events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_event_glosry.htm "Glossary Entry") [GET node \[LATE\]](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget-.htm). The events are raised by the statement PUT node or PUT <node> in the database program. After an event of this type, the table work area filled in the database program can be evaluated in the executable program. For nodes of type A, the data is available only within the event blocks. For all other types, the data is available throughout the executable program.

Notes

-   Table areas declared with NODES behave like common data declared with the addition [COMMON PART](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_common.htm). They are shared by the programs of a [program group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_group_glosry.htm "Glossary Entry").
    
-   Always use NODES and not TABLES for interface work areas for logical databases. In this way, it is made clear that they are nodes of logical databases.
    
-   If logical databases are no longer used, the statement NODES is no longer needed either.
    

Example

A logical database contains a root node root\_node of node type S, to which the data type INT4 is assigned. The top include of the database program then contains the statement:

NODES root\_node.

In addition, the database program contains the following subroutine:

FORM put\_root\_node.
  DO 10 TIMES.
    root\_node = sy-index.
    PUT root\_node.
  ENDDO.
ENDFORM.

If the [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry") below is associated with the logical database, it is given the numbers 1 through 10 in the table work area root\_node when the program is executed and writes them to a list when the event GET is raised:

REPORT demo\_nodes.
NODES root\_node.
GET root\_node.
  WRITE root\_node.