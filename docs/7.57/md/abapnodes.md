  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [LDB - Interface Work Areas](javascript:call_link\('abenldb_interfaces.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: NODES, ABAPNODES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improve
ment:)

NODES

[Short Reference](javascript:call_link\('abapnodes_shortref.htm'\))

Obsolete Syntax

NODES node *\[*TYPE type*\]*.

Effect

The only purpose of the statement NODES is to pass data from [logical databases](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") to [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"). It defines an [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") and is allowed only in the global declaration part of executable programs that are linked with a logical database, and in the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") of logical databases. node must be the name of a node of the logical database. NODES declares a [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") node for the corresponding node. The data type of the table work area is either predefined in the node of the logical database or can be chosen from a list using the addition TYPE.

The nodes of the structure of a logical database are maintained in transaction SE36 and can have the following node types:

-   Node Type T
    
    The data type of the table work area can be a [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") from the ABAP Dictionary, in particular a database table or a [view](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry"). The name of the node must be identical to the name of the structure.
    
    In this case, the statements NODES and [TABLES](javascript:call_link\('abaptables.htm'\)) have the same meaning. In the executable program, either the statement NODES or the statement TABLES can be used for every node of type T, where node is the name of the node or of the structure. The addition TYPE is not allowed. The database program contains one TABLES statement for every node of type T.
    
-   Node Type S
    
    The data type of the table work area can be any data type from the ABAP Dictionary. The name of the node can differ from the name of the type.
    
    In executable programs, a NODES statement can be specified for each node of type S. The addition TYPE is not allowed. The database program contains one NODES statement for every node of type S.
    
-   Node Type C
    
    The data type of the table work area can be any data type from a [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry"). The name of the node can differ from the name of the type.
    
    In executable programs, a NODES statement can be specified for each node of type C. The addition TYPE is not allowed. The database program contains one NODES statement for every node of type C.
    
-   Node Type A
    
    A list of any data types from the ABAP Dictionary is assigned to this node. The actual type is determined in the executable program by the addition TYPE of the statement NODES.
    
    In the executable program, the statement NODES can be specified for every node of type A. Here, the addition TYPE must be used to specify one of the assigned data types from the list. The addition TYPE defines the data type of the table work area in the executable program and in the database program. The database program contains a NODES statement without the addition TYPE for every node of type A.
    

The statement NODES (or TABLES) of the [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") controls the structure of the standard selection screen of the logical database. Only those input fields are displayed for whose nodes or a node lying directly below in the hierarchy a corresponding NODES (or TABLES) statement appears in the executable program.

The database program is responsible for assigning data to the table work area. For every node of the logical database, there is a subroutine put\_node in the database program that uses the statement [PUT](javascript:call_link\('abapput.htm'\)) to signal to the executable program that data is available in the table work area node.

For all table work areas node specified after NODES (or TABLES) in the executable program, event blocks can be created for the [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") [GET node \[LATE\]](javascript:call_link\('abapget-.htm'\)). The events are raised by the statement PUT node or PUT <node> in the database program. After an event of this type, the table work area filled in the database program can be evaluated in the executable program. For nodes of type A, the data is available only within the event blocks. For all other types, the data is available in the entire executable program.

Hints

-   Table areas declared with NODES behave like common data declared with the addition [COMMON PART](javascript:call_link\('abapdata_common.htm'\)). They are shared by the programs of a [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry").
-   NODES and not TABLES should always be used for interface work areas for logical databases to make clear that they are nodes of logical databases.
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

If the [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") below is linked with the logical database, it is given the numbers 1 through 10 in the table work area root\_node when the program is executed and writes them to a list when the event GET is raised:

REPORT demo\_nodes.
NODES root\_node.
GET root\_node.
  WRITE root\_node.