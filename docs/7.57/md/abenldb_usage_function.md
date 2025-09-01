  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Use](javascript:call_link\('abenldb_usage.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LDB - Calls Using a Function Module, ABENLDB_USAGE_FUNCTION, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

LDB - Calls Using a Function Module

-   [How the Call Works](#abenldb-usage-function-1-------runtime-behavior---@ITOC@@ABENLDB_USAGE_FUNCTION_2)
-   [Interface Parameter of LDB\_PROCESS](#abenldb-usage-function-3-------read-depth-and-callback-routines---@ITOC@@ABENLDB_USAGE_FUNCTION_4)
-   [Exceptions in LDB\_PROCESS](#@@ITOC@@ABENLDB_USAGE_FUNCTION_5)

How the Call Works   

Logical databases can be called from any ABAP program using the function module LDB\_PROCESS. Multiple logical databases can be called at the same time and a single logical database can be called more than once in the same executable program.

When a logical database is called using the function module LDB\_PROCESS, the selection screen of the logical database is not displayed and is filled using interface parameters of the function module instead. The logical database does not raise any GET events and passes the read data to callback routines during the call instead. This means that logical database calls using LDB\_PROCESS decouple the collection of data from the previous processing of the selection screens and the subsequent data formatting.

The logical databases do not need to be modified to do this, however the following restrictions apply:

-   For non-adjusted logical databases, the function module does not allow the same logical database to be called more than once in a row.
-   The subroutine pai is not called, which means that checks on selection criteria and parameters programmed in the routine are not executed.

These restrictions can be bypassed by inserting the subroutines ldb\_process\_init and ldb\_process\_check\_selections in the database program.

Runtime Behavior   

When called using the function module LDB\_PROCESS, the subroutines of the logical database are called in the following order:

1.  ldb\_process\_init
2.  init
3.  ldb\_process\_check\_selections
4.  put\_node

None of the subroutines used for selection screen processing [when linked with executable programs](javascript:call_link\('abenldb_usage_executable.htm'\)) are called and the runtime framework does not trigger any reporting events in the calling program. Instead, the PUT statements of the logical database trigger actions in the function module that produce callback routine calls in the calling program.

Interface Parameter of LDB\_PROCESS   

Import Parameters

-   LDBNAME
    
    Name of the logical database to be called.
    
-   VARIANT
    
    Name of a [selection screen variant](javascript:call_link\('abenvariant_glosry.htm'\) "Glossary Entry") used to fill the selection screen of the logical database. The variant must be assigned to the database program of the logical database. The data is passed in the same way as when using the addition [WITH SELECTION-TABLE](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) in a program call using SUBMIT.
    
-   EXPRESSIONS
    
    In this parameter, additional selections can be passed to the table parameter SELECTIONS for the nodes of the logical database implemented in the selection include for dynamic selections. The data type of the parameter rsds\_texpr is defined in the type pool RSDS. The data is passed in the same way as when using the addition [WITH FREE SELECTIONS](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) in a program call using SUBMIT.
    
-   FIELD\_SELECTION
    
    In this parameter, a list of the required fields can be passed for the nodes of the logical database implemented in the selection include for free field selections. The data type of the parameter is the deep internal table rsfs\_fields from the type pool RSFS. The component TABLENAME contains the name of the node and the deep component FIELDS contains the names of the fields to be read.
    

Table Parameters

-   CALLBACK
    
    The names of nodes and events are assigned to callback routines in this parameter. The parameter determines the nodes from which the logical database reads data (and when) and to which callback routines it passes this data (see below).
    
-   SELECTIONS
    
    Input values for the selection criteria and parameters of the selection screen of the logical database can be passed in this parameter. The data type of the parameter matches the structure RSPARAMS in the ABAP Dictionary. The data is passed in the same way as when using the addition [WITH SELECTION-TABLE](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) in a program call using SUBMIT.
    

If multiple selections are passed at the same time using multiple parameters, values passed in SELECTIONS and EXPRESSIONS overwrite the values in VARIANT.

Read Depth and Callback Routines   

If a logical database is [linked](javascript:call_link\('abenldb_usage_executable.htm'\)) with a logical database, the GET statements determine the read depth of the logical database. If the function module LDB\_PROCESS is used for calls, the read depth is determined by the node name passed to the parameter CALLBACK. A callback routine can be executed at two points in time for each node that requests data. These times match GET and GET LATE in executable programs. For each node, the name of the associated callback routine and the required times are specified in the table parameter CALLBACK. A callback routine is a subroutine in the calling program or in another program.

For the event GET, the callback routine is called directly after the data of the node is read and before the processing of the subordinate subtree. For the event GET LATE, the callback routine is called after the subordinate subtree is processed.

The line type of the table parameter CALLBACK is the flat structure LDBCB from ABAP Dictionary, with the following components:

-   LDBNODE
    
    Name of the node to be read from the logical database.
    
-   GET
    
    Flag (values X or blank) for calling the associated callback routine for the event GET.
    
-   GET\_LATE
    
    Flag (values X or blank) for calling the associated callback routine for the event GET LATE.
    
-   CB\_PROG
    
    Name of the ABAP program in which the callback routine is defined.
    
-   CB\_FORM
    
    Name of the callback routine.
    

When an internal table is passed to the parameter CALLBACK, at least one of the columns GET or GET\_LATE must be filled with X for each node.

A callback routine is a subroutine defined using the following parameter interface:

FORM subr USING node TYPE ldbcb-ldbnode
                wa   *\[*TYPE t*\]*
                evt
                check.

When called, the parameters are filled using the function module LDB\_PROCESS and have the following meaning:

-   node contains the name of the node.
-   wa is the work area of the data read for the node. The program that calls the function module LDB\_PROCESS and the program that contains the callback routine do not need to declare any interface work areas using NODES or TABLES. If the callback routine is used for one node only, the TYPE can be used to reference the data type of the node in the ABAP Dictionary. Only then can the individual components of structured nodes be addressed directly in the subroutine. If the callback routine is used for multiple nodes, the TYPE addition cannot be used. In this case, the components of structured nodes must be addressed using component-by-component assignments of structures to field symbols.
-   evt contains "G" or "L", depending on whether it refers to the event GET or GET LATE. This means that the program flow can branch in accordance with the content of evt in the subroutine.
-   check enables the callback routine to modify the further processing of the program (but only if evt contains "G"). When the subroutine is called, the parameter is given the value X. If the parameter is initial when the subroutine is exited, this indicates that the entire lower subtree should not be processed using LDB\_PROCESS. This is the same behavior as when a GET event block is exited using [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\)) in executable programs. This option improves performance if it is able to prevent unnecessary data from being read.

Exceptions in LDB\_PROCESS   

-   LDB\_ALREADY\_RUNNING
    
    A logical database cannot be called again if the current call has not yet ended.
    
-   LDB\_NOT\_REENTRANT
    
    A logical database can be called more than once in a row only if its database program contains the subroutine ldb\_process\_init.
    
-   LDB\_SELECTIONS\_NOT\_ACCEPTED
    
    This exception can be raised by a message in the subroutine ldb\_process\_check\_selections. Information about this message is in the usual system fields sy-msg....
    

The remaining exceptions are described in the documentation of the function module.

Executable Example

[Logical Database, Call by Function Module](javascript:call_link\('abenlogical_database_abexa.htm'\))