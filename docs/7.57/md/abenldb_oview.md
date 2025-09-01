  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LDB - Components, ABENLDB_OVIEW, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

LDB - Components

The main features of a logical database are

-   a hierarchical [structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_structure.htm)
    
    The structure defines the data view of the logical database. It generally inherits the given hierarchy of database tables defined by foreign key dependencies and controls the order in which the data is passed to the application program. In this way, the structure determines the structure of the other subobjects and the runtime behavior.
    
-   [selections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_selections.htm) as a standalone standard selection screen
    
    The selections define a standard selection screen as the user interface for programs that use the logical database. The construction of the screen is defined by the structure by default. The selections can be adjusted and enhanced to meet the requirements of the user.
    
-   a [database program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_program.htm) written in ABAP
    
    The database program contains the ABAP statements for reading the data and passing it to an application program. It is basically a container for special subroutines in which the functions of the logical database are implemented. The [reporting processor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_process.htm) of the runtime framework calls these subroutines in the order defined by the structure. The database program is defined by the structure and the selections and can be modified or enhanced to meet the requirements of the user.
    
-   [Further elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_others.htm), which add to the functions.

When an executable program is created, it can be assigned to exactly one logical database using the Logical Database property. This combines the standard selection screen and the program flow with the selection screen and flow of the logical database.

Furthermore, logical databases can call the function module LDB\_PROCESS. This function module can be used to call multiple logical database from a single program and nest them as required. A logical database can also be called more than once in a program, if programmed accordingly.

Hint

When creating a logical database in the Logical Database Builder, the following order should be kept, since this then makes it easier to generate proposal for the remaining components from successively existing components. Some of the most important properties of a logical database are defined at the same time as its structure. After the definition of the structure, a proposal is created for the selection include. The structure and selection include are used to generate a template for the database program. These components can then quickly be used to create an executable logical database, in which further requirements can be implemented.

1.  Creating the structure based on a root node.
2.  Associating it with a search help.
3.  Generating and editing the selection include.
4.  Generating and editing the database program.
5.  Editing further elements.

Continue
[LDB - Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_structure.htm)
[LDB - Selections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_selections.htm)
[LDB - Database Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_program.htm)
[LDB - Further Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_others.htm)