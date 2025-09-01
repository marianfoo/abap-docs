  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) → 

LDB - Components

The main features of a logical database are

-   a hierarchical [structure](javascript:call_link\('abenldb_structure.htm'\))

The structure defines the data view of the logical database. It generally inherits the given hierarchy of database tables defined by foreign key dependencies and controls the order in which the data is passed to the application program. In this way, the structure determines how the other subobjects are constructed and the runtime behavior.

-   [selections](javascript:call_link\('abenldb_selections.htm'\)) as a standalone standard selection screen

The selections define a standard selection screen to be used as a user interface for programs that use the logical database. The appearance of the screen is defined by the structure by default. The selections can be modified and enhanced to meet the requirements of the user.

-   a [database program](javascript:call_link\('abenldb_program.htm'\)) written in ABAP

The database program contains the ABAP statements for reading the data and passing it to an application program. It is basically a container for special subroutines in which the functions of the logical database are implemented. The [reporting processor](javascript:call_link\('abenreporting_process.htm'\)) of the runtime environment calls these subroutines in the order defined by the structure. The database program is defined by the structure and the selections and can be modified or enhanced to meet the requirements of the user.

-   [Further elements](javascript:call_link\('abenldb_others.htm'\)), which add to the functions.

When an executable program is created, it can be assigned to a logical database using the Logical Database attribute. This allows the standard selection screen and the program flow to be combined with the selection screen and flow of the logical database.

Furthermore, logical databases can call the function module LDB\_PROCESS. This function module can be used to call multiple logical database from a single program and nested as required. A logical database can also be called more than once in a program, if programmed accordingly.

Hint

When creating a logical database in Logical Database Builder, the following order should be kept, since this then makes it easier to generate proposal for the remaining components from the those already created. Some of the most important properties of a logical database are defined at the same time as its structure. After the definition of the structure, a proposal is created for the selection include. The structure and selection include are used to generate a template for the database program. These components can then quickly be used to create a ready-to-run logical database, in which further requirements can be implemented.

1.  Create the structure based on a root node.
    
2.  Associate it with a search help.
    
3.  Generate and edit the selection include.
    
4.  Generate and edit the database program.
    
5.  Edit further elements.
    

Continue
[LDB - Structure](javascript:call_link\('abenldb_structure.htm'\))
[LDB - Selections](javascript:call_link\('abenldb_selections.htm'\))
[LDB - Database Program](javascript:call_link\('abenldb_program.htm'\))
[LDB - Further Elements](javascript:call_link\('abenldb_others.htm'\))