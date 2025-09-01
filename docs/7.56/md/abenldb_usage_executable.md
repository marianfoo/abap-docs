---
title: "LDB - Linkage with Executable Programs"
description: |
  -   How Linking Works(#abenldb-usage-executable-1-------selection-screen---@ITOC@@ABENLDB_USAGE_EXECUTABLE_2) -   Runtime Behavior(#@@ITOC@@ABENLDB_USAGE_EXECUTABLE_3) How Linking Works If an executable program(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexecutable_program_g
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_usage_executable.htm"
abapFile: "abenldb_usage_executable.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "class", "data", "abenldb", "usage", "executable"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb.htm) →  [LDB - Use](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_usage.htm) → 

LDB - Linkage with Executable Programs

-   [How Linking Works](#abenldb-usage-executable-1-------selection-screen---@ITOC@@ABENLDB_USAGE_EXECUTABLE_2)
-   [Runtime Behavior](#@@ITOC@@ABENLDB_USAGE_EXECUTABLE_3)

How Linking Works

If an [executable program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is linked with a logical database, that is, the logical database is entered in the program attributes, the subroutines of the [database program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_program.htm) are combined with the [reporting event blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_processing_blocks.htm) of the executable program to create a complete modularized program for reading and processing data. The individual processing blocks are called in a specific, predefined order by the runtime framework. The runtime behavior is controlled by the structure, selections, and PUT statements of the logical database, as well as the GET statements of the executable program.

The runtime framework calls are depend on both the structure of the logical database and the definition of the executable program. The structure of the logical database determines in which order the subroutines of the logical database are called, which in turn call the GET event blocks in the executable program. The GET event blocks defined in the executable program determine the read depth of the logical database.. NODES statements or TABLES statements in the global declaration part of the executable program determine which of the input fields defined in the logical database are included on the selection screen and define interface work areas for passing data between the logical database and the executable program.

The actual access to the database usually takes places using ABAP SQL statements that are implemented in the put\_node subroutines. The data read is passed to the executable program using the interface work areas. Once the data is read in the logical database program, the executable program can process this data in the GET event blocks. This separates data selection and data processing.

Selection Screen

If a logical database is specified in the attributes of an executable program, this modifies the [standard selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") of the program. The standard selection screen contains both the selections (selection criteria and parameters) of the logical database and the program-specific selections. By declaring interface work areas, the executable program determines which database-specific selections are relevant for its data evaluation and appear on the selection screen.

Runtime Behavior

The following describes the order in which the ABAP runtime framework calls the subroutines of the logical database and the event blocks in the executable program. Usually, the subroutines are called before the event blocks. To do this, various processors (selection screen processor and reporting processor) are executed in sequence in the runtime framework (see also [Flow of an Executable Program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreporting_process.htm)).

1.  Initializations before selection screen processing.
    
    Subroutine init
    
    This subroutine is called once only before the selection screen is sent for the first time.
    
    Event block INITIALIZATION
    
    This event occurs once only before the selection screen is sent for the first time.
    
2.  PBO of the selection screen. Initializations every time before the selection screen is sent (for example, to get the defaults for key fields).
    
    Subroutine pbo
    
    This subroutine is called every time before a selection screen is sent.
    
    Event block AT SELECTION-SCREEN OUTPUT
    
    This event occurs every time before a selection screen is sent.
    
3.  The selection screen is displayed, and the user can enter values in the input fields.
4.  Request for input help (F4) and field help (F1) (optional).
    
    Subroutines ...val and ...hlp
    
    If the user requests input help or field help for database-specific parameters or selection criteria, these subroutines are called accordingly.
    
    Event blocks AT SELECTION-SCREEN ON VALUE-REQUEST FOR ... and AT SELECTION-SCREEN ON HELP-REQUEST FOR ...
    
    If the user requests input help or field help for program-specific parameters or selection criteria, the corresponding events are raised accordingly.
    
5.  PAI of the selection screen. This checks whether the user input is correct, complete, and plausible. An authorization check for the user is also performed. If an error occurs, a user dialog with the user can be run and the fields reset for new input.
    
    Subroutine pai USING fname mark.
    The interface parameters fname and mark are passed by the runtime framework. fname contains the name of a selection criterion or parameter on the selection screen. If mark is initial, the user entered a simple single value selection or interval selection. If mark has the value "\*", the user also made entries on the multiple selection screen. A combination of "\*" for fname and "ANY" for mark enables all entries to be checked at once for a user action.
    
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
    
    Last reporting event. In this event block, all buffered data can be processed (for example, sorted).
    
9.  If the steps above involve writing data to a classic list, control is passed from the runtime framework to the list processor and the list is displayed.

Hint

Authorization checks performed by the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapauthority-check.htm) are useful in the following subroutines of the database program or the event blocks of the executable program:

-   Subroutines pai and authority\_check...
-   Event blocks AT SELECTION SCREEN ... and GET

Authorization checks should be implemented centrally and should be reusable in the logical database program. The actual location of an authorization check, whether in the database program or in the executable program, can depend on the following, among others:

-   The structure of the logical database. For example, in the case where a company code authorization is only to be checked when a line with the Company Code field is read at runtime as well.
-   Performance. Multiple checks, for example within SELECT loops, should be avoided.

Executable Example

[Logical Database, Linked with a Program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreport_abexa.htm)