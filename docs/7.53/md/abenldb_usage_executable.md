  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [Logical Databases - Use](javascript:call_link\('abenldb_usage.htm'\)) → 

Logical Databases - Associated with Executable Programs

-   [How the Association Works](#abenldb-usage-executable-1--------selection-screen---@ITOC@@ABENLDB_USAGE_EXECUTABLE_2)

-   [Runtime Behavior](#@@ITOC@@ABENLDB_USAGE_EXECUTABLE_3)

How the Association Works

When an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") is associated with a logical database (meaning that the logical database is entered in the program attributes), the subroutines of the [database program](javascript:call_link\('abenldb_program.htm'\)) are combined with the [reporting event blocks](javascript:call_link\('abenabap_processing_blocks.htm'\)) of the executable program to create a complete modularized program for reading and processing data. The individual processing blocks are called in a fixed order by the runtime environment. The runtime behavior is controlled by the structure, selections, and PUT statements of the logical database, plus the GET statements of the executable program.

The runtime environment calls are determined by both the structure of the logical database and the definition of the executable program. The structure of the logical database specifies in which order the subroutines of the logical database are called, which themselves call the GET event blocks in the executable program. The GET event blocks defined in the executable program determine the read depth of the logical database.. NODES statements or TABLES statements in the global declaration part of the executable program determine which of the input fields defined in the logical database are included on the selection screen and define interface work areas for passing data between the logical database and the executable program.

Generally, the database is actually accessed using ABAP SQL statements implemented in the put\_node subroutines. The data read is passed to the executable program using the interface work areas. Once the data is read in the logical database program, the executable program can process this data in the GET event blocks. This is the point at which the reader actions are separated from processor actions.

Selection Screen

If a logical database is specified in the attributes of an executable program, this modifies the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") of the program. The standard selection screen contains both the selections (selection criteria and parameters) of the logical database and the program-specific selections. By declaring interface work areas, the executable program determines which database-specific selections are relevant for its data analysis and appear on the selection screen.

Runtime Behavior

The following describes the order in which the ABAP runtime environment calls the subroutines of the logical database and the event blocks in the executable program. Usually, the subroutines are called before the event blocks. To do this, various processors (such as the selection screen processor and reporting processor) are executed in sequence in the runtime environment (see also [Flow of an Executable Program](javascript:call_link\('abenreporting_process.htm'\))).

1.  Initializations before selection screen processing.
    Subroutine init
    This subroutine is called once only before the selection screen is sent for the first time.
    Event block INITIALIZATION
    This event occurs once only before the selection screen is sent for the first time.
    
2.  PBO of the selection screen. Initializations every time the selection screen is sent (for example, to get the defaults for key fields).
    Subroutine pbo
    This subroutine is called before each occasion a selection screen is sent.
    Event block AT SELECTION-SCREEN OUTPUT
    This event occurs before each occasion a selection screen is sent.
    
3.  The selection screen is displayed and the user can enter values in the input fields.
    
4.  Request for input help (F4) and field help (F1) (optional).
    Subroutines ...val and ...hlp
    If the user requests input help or field help for database-specific parameters or selection criteria, these subroutines are called accordingly.
    Event blocks AT SELECTION-SCREEN ON VALUE-REQUEST FOR ... and AT SELECTION-SCREEN ON HELP-REQUEST FOR ...
    If the user requests input help or field help for program-specific parameters or selection criteria, these events are raised accordingly.
    
5.  PAI of the selection screen. This checks whether the user input is correct, complete, and plausible. An authorization check for the user is also run. If an error occurs, a user dialog with the user can be incorporated and the fields reset for new input.
    Subroutine pai USING fname mark.
    The interface parameters fname and mark are passed by the runtime environment. fname contains the name of a selection criterion or parameter on the selection screen. If mark is initial, the user entered a simple single value selection or interval selection. If mark has the value "\*", the user also made entries on the multiple selection screen. A combination of "\*" for fname and "ANY" for mark enables all entries to be check at once for a user action.
    Event blocks AT SELECTION-SCREEN ON ... and AT SELECTION-SCREEN without additions.
    Events for processing a specific input field, for processing multiple selections, and for processing all user input.
    
6.  Actions before data is read.
    Subroutine before\_event with parameter "START-OF-SELECTION"
    The logical database can perform actions before data is read, such as initializing tables.
    Event block START-OF-SELECTION
    The first reporting event after selection screen processing. Preparations can be performed in the program in this event block.
    
7.  Reading data in the logical database and processing in the executable program.
    Subroutines put\_node
    The logical database reads the selected data of the node node.
    Event block GET table *\[*LATE*\]*
    This event is raised in the subroutine above by the PUT statement. In this event block, the data read for node can be passed from the corresponding interface work area.
    
8.  Actions after data is read.
    Subroutine after\_event with parameter "END-OF-SELECTION"
    The logical database can perform actions before data is read, such as releasing memory.
    Event block END-OF-SELECTION
    Last reporting event. In this event block, all buffered data can be edited (for example, sorted).
    
9.  If the steps above involve writing data to a classic list, control is passed from the runtime environment to the list processor and the list is displayed.

Note

Authorization checks performed by the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)) are useful in the following subroutines of the database program or the event blocks of the executable program:

-   Subroutines pai and authority\_check...

-   Event blocks AT SELECTION SCREEN ... and GET

Authorization checks should always be implemented centrally and should be reusable in the logical database program. The actual location of an authorization check (in the database program or in the executable program) can depend on the following factors, however:

-   The structure of the logical database. For example, in the case where a company code authorization is only to be checked when a row with the Company Code field is read at runtime as well.

-   Performance. Multiple checks, for example within SELECT loops, should be avoided.

Executable Example

[Logical Database, Associated with a Program](javascript:call_link\('abenreport_abexa.htm'\))