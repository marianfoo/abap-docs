  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb.htm) →  [LDB - Components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_oview.htm) → 

LDB - Structure

The structure of logical databases generally maps the foreign key relationships of hierarchical tables in the database. The structure of logical databases is tree-like and defined as follows:

-   There is exactly one node at the highest level (the root).
-   Each node can have one or more branches.
-   Each node can follow exactly one other node.

There are three different types of nodes (see also [NODES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnodes.htm)):

-   T: Database tables
    
    The database table must be defined in the ABAP Dictionary. The name of the node must match the name of the table.
    
-   S: Data types from the ABAP Dictionary
    
    If reference is made to any data type in the ABAP Dictionary, the node name can be different from the name of the data type and deep data types can be used as nodes.
    
-   C: Data types from type pools
    
    If reference is made to a data type from a type pool, the same applies as to references to data types from the ABAP Dictionary. Data types from type pools should no longer be used.
    

In most existing logical databases, the nodes refer to database tables whose data is read by the logical database and passed to a program for further evaluation. It is possible, however, to use structures from the ABAP Dictionary without a linked database. For technical reasons, there is an upper limit of 300 nodes in the structure of a logical database.

Each executable ABAP program linked with a logical database can contain a corresponding [GET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget-.htm) statement for each node in the structure. At program runtime, the associated event blocks are processed in the order defined by the hierarchical structure. If a program does not contain a GET statement for every node in a logical database, all nodes that are located in the path from the root to the nodes named by GET statements are processed.

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

If GET statements are specified for all nodes in a linked executable program, the GET events occur in the order LFA1, LFBK, LFB1, LFC1. If only one GET statement is specified for LFB1 in the program, LFA1 and LFB1 are processed.