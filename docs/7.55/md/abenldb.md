  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) → 

Logical Databases (LDB, Obsolete)

A logical database is a special development object created and maintained in Logical Database Builder. Its main component is an ABAP program that provides other ABAP programs with data from the nodes of a hierarchical tree structure. The most common purpose of logical databases is to extract data from database tables, however other applications are feasible. The framework for using logical database is integrated into the ABAP runtime environment.

Logical databases provide a hierarchy view of database tables or structures in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) associated using foreign key dependencies. If parts of these dependencies construct tree-like hierarchical structures, logical databases can read data from database tables that are components of these structures. In classic ABAP, logical databases are usually used in these hierarchical structures in accordance with the principle of input, processing, and output. The actual database reads are then wrapped in the logical database. The logical database reads the data, saves it locally in the program, if necessary, and passes it row by row to an [interface work area](javascript:call_link\('abenldb_interfaces.htm'\)).

As well as reusing predefined functions for reading data from database tables, logical databases can be implemented for further central tasks, such as defining uniform selection screens, central authorization checks, or making centralized enhancements to performance.

-   [Logical Databases - Components](javascript:call_link\('abenldb_oview.htm'\))

-   [Logical Databases - Statements](javascript:call_link\('abenldb_abap_statements.htm'\))

-   [Logical Databases - Use](javascript:call_link\('abenldb_usage.htm'\))

-   [Logical Databases - Examples](javascript:call_link\('abenldb_examples.htm'\))

Hints

-   Logical databases should no longer be used. This is because they are based on cross-program usage of global data, implicit subroutine calls and [reporting event control](javascript:call_link\('abenabap_processing_blocks.htm'\)), and therefore do not comply with modern concepts. No new logical databases should be created. Instead a relevant service should be made available using a global class.

-   The function module LDB\_PROCESS can be used to access existing logical databases. This function module can be also called from a method.

Continue
[LDB - Components](javascript:call_link\('abenldb_oview.htm'\))
[LDB - Statements](javascript:call_link\('abenldb_abap_statements.htm'\))
[LDB - Use](javascript:call_link\('abenldb_usage.htm'\))
[LDB - Examples](javascript:call_link\('abenldb_examples.htm'\))