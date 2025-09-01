  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [Logical Databases - Components](javascript:call_link\('abenldb_oview.htm'\)) → 

Logical Databases - Structure

The structure of logical databases generally maps the foreign key relationships of hierarchical tables in the database. The structure of logical databases is tree-like and defined as follows:

-   At the highest level (the root), there is just one node.

-   Each node can have one or more branches.

-   Each node can follow precisely one other node.

There are three types of node (see also [NODES](javascript:call_link\('abapnodes.htm'\))):

-   T: Database tables

The database table must be defined in ABAP Dictionary. The name of the node must be the same as the name of the table.

-   S: Data types from ABAP Dictionary

If reference is made to a data type from ABAP Dictionary, the node name can be different from the name of the data type and deep data types can be used as nodes.

-   C: Data types from type groups

If reference is made to a data type from a type group, the same applies as when reference is made to data types from ABAP Dictionary. Data types from type groups should no longer be used.

In most existing logical databases, the nodes make reference to database tables whose data is read by the logical database and passed to a program for further processing. It is possible, however, to use structures from ABAP Dictionary without associated database. For technical reasons, there is an upper limit of 300 nodes in the structure of a logical database.

Each executable ABAP program associated with a logical database can contain a corresponding [GET](javascript:call_link\('abapget-.htm'\)) statement for each node in the structure. At runtime of the program, the associated event blocks are processed in the order defined by the hierarchical structure. If a program does not contain a GET statement for every node in a logical database, all nodes are processed that are located in the path from the root to the nodes named by GET statements.

If called using the function module LDB\_PROCESS, the read depth of the logical database is defined using an interface parameter.

Example

LFA1 is the root node and LFBK and LFB1 are branches of LFA1; LFC1 is a branch of LFB1.

LFA1
  |
  |----LFBK
  |
  |----LFB1
         |
         |----LFC1

If GET statements are specified for all nodes in an associated executable program, the GET events occur in the order LFA1, LFBK, LFB1, LFC1. If only one GET statement is specified for LFB1 in the program, LFA1 and LFB1 are processed.