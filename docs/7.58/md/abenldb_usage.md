  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Use%2C%20ABENLDB_USAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LDB - Use

There are two ways of using a logical database.

-   [Linked with executable programs](javascript:call_link\('abenldb_usage_executable.htm'\))
-   [Called using function modules](javascript:call_link\('abenldb_usage_function.htm'\))

When logical databases are linked with executable programs, the selections are entered using the selection screen and the data read from the logical database is passed to the program using interface work areas. If called using a function module, the selection screen is not displayed. The calling program must provide special subroutines, which are also referred to as callback routines instead of interface work areas. These routines are called by the function module and filled with data.

Continue
[LDB - Linkage with Executable Programs](javascript:call_link\('abenldb_usage_executable.htm'\))
[LDB - Calls Using a Function Module](javascript:call_link\('abenldb_usage_function.htm'\))